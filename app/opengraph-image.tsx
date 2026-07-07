import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'Care N Cure — The Nurse Who Knows You — Perth Home Nursing'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #091E30 0%, #0D2A42 60%, #091E30 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top teal accent bar */}
        <div style={{ width: '100%', height: 8, background: '#4ECDC4', flexShrink: 0 }} />

        {/* Main content area */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: '48px 80px',
            gap: 60,
          }}
        >
          {/* Left — Text */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Small label */}
            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: '#4ECDC4',
                letterSpacing: 3,
                textTransform: 'uppercase',
                marginBottom: 18,
              }}
            >
              Perth Home Nursing
            </div>

            {/* Brand name */}
            <div
              style={{
                fontSize: 90,
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.05,
                marginBottom: 16,
              }}
            >
              Care N Cure
            </div>

            {/* Teal divider */}
            <div style={{ width: 200, height: 5, background: '#4ECDC4', marginBottom: 24 }} />

            {/* Tagline */}
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: '#4ECDC4',
                marginBottom: 20,
              }}
            >
              The Nurse Who Knows You
            </div>

            {/* Sub-description */}
            <div
              style={{
                fontSize: 24,
                color: 'rgba(255,255,255,0.7)',
                marginBottom: 36,
                lineHeight: 1.4,
              }}
            >
              One Client · One Dedicated Nurse · Every Visit
            </div>

            {/* Trust badges row */}
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {['✓ Fully Registered Nurses', '✓ Same Nurse Every Visit', '✓ Perth Metro'].map(
                (badge) => (
                  <div
                    key={badge}
                    style={{
                      background: 'rgba(78,205,196,0.12)',
                      border: '1.5px solid rgba(78,205,196,0.35)',
                      borderRadius: 8,
                      padding: '6px 16px',
                      fontSize: 18,
                      color: 'rgba(255,255,255,0.85)',
                      fontWeight: 500,
                    }}
                  >
                    {badge}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right — Icon circle */}
          <div
            style={{
              width: 240,
              height: 240,
              borderRadius: '50%',
              background: 'rgba(78,205,196,0.08)',
              border: '2px solid rgba(78,205,196,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontSize: 110,
                lineHeight: 1,
              }}
            >
              🏥
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 80px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 700, color: 'rgba(78,205,196,0.9)' }}>
            carencure.com.au
          </div>
          <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)' }}>1300 919 663</div>
        </div>

        {/* Bottom teal accent bar */}
        <div style={{ width: '100%', height: 8, background: '#4ECDC4', flexShrink: 0 }} />
      </div>
    ),
    { ...size }
  )
}
