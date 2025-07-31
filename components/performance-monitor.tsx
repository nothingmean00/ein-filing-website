'use client'

import { useEffect } from 'react'
import { webVitalsThresholds, monitoringConfig } from '@/lib/performance-config'

interface PerformanceMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  timestamp: number
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (!monitoringConfig.enabled || Math.random() > monitoringConfig.sampleRate) {
      return
    }

    // Monitor Web Vitals
    const reportWebVital = (metric: PerformanceMetric) => {
      // Send to analytics endpoint
      if (typeof window !== 'undefined') {
        fetch('/api/performance-metrics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(metric),
        }).catch(() => {
          // Silently fail - don't impact user experience
        })
      }
    }

    // Measure LCP (Largest Contentful Paint)
    const measureLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          
          if (lastEntry) {
            const value = lastEntry.startTime
            const rating = value <= webVitalsThresholds.LCP.good 
              ? 'good' 
              : value <= webVitalsThresholds.LCP.needsImprovement 
                ? 'needs-improvement' 
                : 'poor'
            
            reportWebVital({
              name: 'LCP',
              value,
              rating,
              timestamp: Date.now(),
            })
          }
        })
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] })
      }
    }

    // Measure FID (First Input Delay)
    const measureFID = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            const value = entry.processingStart - entry.startTime
            const rating = value <= webVitalsThresholds.FID.good 
              ? 'good' 
              : value <= webVitalsThresholds.FID.needsImprovement 
                ? 'needs-improvement' 
                : 'poor'
            
            reportWebVital({
              name: 'FID',
              value,
              rating,
              timestamp: Date.now(),
            })
          })
        })
        
        observer.observe({ entryTypes: ['first-input'] })
      }
    }

    // Measure CLS (Cumulative Layout Shift)
    const measureCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0
        
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          
          const rating = clsValue <= webVitalsThresholds.CLS.good 
            ? 'good' 
            : clsValue <= webVitalsThresholds.CLS.needsImprovement 
              ? 'needs-improvement' 
              : 'poor'
          
          reportWebVital({
            name: 'CLS',
            value: clsValue,
            rating,
            timestamp: Date.now(),
          })
        })
        
        observer.observe({ entryTypes: ['layout-shift'] })
      }
    }

    // Measure FCP (First Contentful Paint)
    const measureFCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            const value = entry.startTime
            const rating = value <= webVitalsThresholds.FCP.good 
              ? 'good' 
              : value <= webVitalsThresholds.FCP.needsImprovement 
                ? 'needs-improvement' 
                : 'poor'
            
            reportWebVital({
              name: 'FCP',
              value,
              rating,
              timestamp: Date.now(),
            })
          })
        })
        
        observer.observe({ entryTypes: ['paint'] })
      }
    }

    // Initialize measurements
    measureLCP()
    measureFID()
    measureCLS()
    measureFCP()

    // Cleanup function
    return () => {
      // Performance observers are automatically cleaned up
    }
  }, [])

  // This component doesn't render anything
  return null
}

// Helper function to get performance metrics
export const getPerformanceMetrics = () => {
  if (typeof window === 'undefined') return null

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  const paint = performance.getEntriesByType('paint')

  return {
    // Navigation timing
    ttfb: navigation.responseStart - navigation.requestStart,
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
    loadComplete: navigation.loadEventEnd - navigation.fetchStart,
    
    // Paint timing
    fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
    
    // Resource timing
    resources: performance.getEntriesByType('resource').length,
    
    // Memory usage (if available)
    memory: (performance as any).memory ? {
      used: (performance as any).memory.usedJSHeapSize,
      total: (performance as any).memory.totalJSHeapSize,
      limit: (performance as any).memory.jsHeapSizeLimit,
    } : null,
  }
}