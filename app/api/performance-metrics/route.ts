import { NextRequest, NextResponse } from 'next/server'
import { createGeneralRateLimit, rateLimit } from '@/lib/rate-limit'

// Initialize rate limiter for performance metrics
const metricsRateLimit = createGeneralRateLimit()

interface PerformanceMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  timestamp: number
}

export async function POST(req: NextRequest) {
  try {
    // Apply rate limiting
    const rateLimitResult = await rateLimit(req, metricsRateLimit)
    
    if (rateLimitResult && !rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      )
    }

    const metric: PerformanceMetric = await req.json()
    
    // Validate metric data
    if (!metric.name || typeof metric.value !== 'number' || !metric.rating) {
      return NextResponse.json(
        { error: 'Invalid metric data' },
        { status: 400 }
      )
    }

    // In production, you would send this to your analytics service
    // For now, we'll just log it
    console.log('Performance Metric:', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      timestamp: new Date(metric.timestamp).toISOString(),
      userAgent: req.headers.get('user-agent'),
      url: req.headers.get('referer'),
    })

    // You could integrate with services like:
    // - Google Analytics 4
    // - DataDog RUM
    // - New Relic Browser
    // - Sentry Performance
    // - Custom analytics endpoint

    /*
    // Example integration with external service:
    if (process.env.ANALYTICS_ENDPOINT) {
      await fetch(process.env.ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.ANALYTICS_TOKEN}`,
        },
        body: JSON.stringify({
          ...metric,
          userAgent: req.headers.get('user-agent'),
          url: req.headers.get('referer'),
          timestamp: new Date(metric.timestamp).toISOString(),
        }),
      })
    }
    */

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Performance metrics error:', error)
    return NextResponse.json(
      { error: 'Failed to process metric' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to retrieve aggregated metrics
export async function GET(req: NextRequest) {
  try {
    // In production, you would fetch from your analytics database
    // For now, return mock aggregated data
    const mockMetrics = {
      summary: {
        lcp: { average: 2100, p75: 2400, p90: 2800 },
        fid: { average: 45, p75: 60, p90: 85 },
        cls: { average: 0.05, p75: 0.08, p90: 0.12 },
        fcp: { average: 1600, p75: 1900, p90: 2200 },
      },
      trends: {
        last24h: { lcp: 2150, fid: 48, cls: 0.06 },
        last7d: { lcp: 2080, fid: 42, cls: 0.05 },
        last30d: { lcp: 2120, fid: 45, cls: 0.05 },
      },
      distribution: {
        good: 78,
        needsImprovement: 18,
        poor: 4,
      },
    }

    return NextResponse.json(mockMetrics)
  } catch (error) {
    console.error('Performance metrics retrieval error:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve metrics' },
      { status: 500 }
    )
  }
}