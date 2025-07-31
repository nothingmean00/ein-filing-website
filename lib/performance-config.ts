/**
 * Performance Configuration
 * Optimizations for Core Web Vitals and page load speed
 */

// Critical CSS for above-the-fold content
export const criticalCSS = `
  /* Critical styles for initial render */
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }
  
  /* Header styles - critical for LCP */
  .header {
    background-color: #004b87;
    color: white;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 50;
  }
  
  /* Hero section - critical for LCP */
  .hero {
    background-color: rgba(229, 243, 248, 0.3);
    padding: 2.5rem 0 2rem;
  }
  
  /* Container layout */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  /* Button styles - critical for CLS */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
    border: none;
    cursor: pointer;
  }
  
  .btn-primary {
    background-color: #004b87;
    color: white;
  }
  
  .btn-primary:hover {
    background-color: #003d70;
  }
`;

// Resource loading priorities
export const resourcePriorities = {
  // High priority resources
  critical: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    '/favicon.svg',
  ],
  
  // Medium priority resources
  important: [
    'https://api.stripe.com',
    'https://js.stripe.com',
  ],
  
  // Low priority resources
  deferred: [
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com',
  ],
};

// Performance budgets
export const performanceBudgets = {
  // File size budgets (in KB)
  maxBundleSize: 250,
  maxCSSSize: 50,
  maxImageSize: 500,
  
  // Timing budgets (in ms)
  maxLCP: 2500,
  maxFID: 100,
  maxCLS: 0.1,
  
  // Network budgets
  maxRequests: 50,
  maxDomNodes: 1500,
};

// Lazy loading configuration
export const lazyLoadConfig = {
  // Intersection Observer options
  rootMargin: '50px 0px',
  threshold: 0.1,
  
  // Components to lazy load
  lazyComponents: [
    'ChatBot',
    'ContactForm',
    'TestimonialSlider',
    'BlogSection',
  ],
  
  // Images to lazy load
  lazyImages: {
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGM0Y0RjYiLz48L3N2Zz4=',
    loading: 'lazy',
    decoding: 'async',
  },
};

// Code splitting configuration
export const codeSplittingConfig = {
  // Route-based splitting
  routes: [
    '/apply',
    '/blog',
    '/contact',
    '/pricing',
  ],
  
  // Component-based splitting
  components: [
    'PaymentForm',
    'ApplicationForm',
    'BlogPost',
    'ContactModal',
  ],
  
  // Vendor splitting
  vendors: [
    'stripe',
    'openai',
    'resend',
  ],
};

// Web Vitals thresholds
export const webVitalsThresholds = {
  LCP: {
    good: 2500,
    needsImprovement: 4000,
  },
  FID: {
    good: 100,
    needsImprovement: 300,
  },
  CLS: {
    good: 0.1,
    needsImprovement: 0.25,
  },
  FCP: {
    good: 1800,
    needsImprovement: 3000,
  },
  TTFB: {
    good: 800,
    needsImprovement: 1800,
  },
};

// Performance monitoring configuration
export const monitoringConfig = {
  // Enable performance monitoring
  enabled: process.env.NODE_ENV === 'production',
  
  // Sample rate (0-1)
  sampleRate: 0.1,
  
  // Metrics to track
  metrics: [
    'LCP',
    'FID', 
    'CLS',
    'FCP',
    'TTFB',
    'Navigation Timing',
    'Resource Timing',
  ],
  
  // Reporting endpoint
  endpoint: '/api/performance-metrics',
};