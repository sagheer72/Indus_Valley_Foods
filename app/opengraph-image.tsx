import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Indus Valley Foods — Direct Basmati Rice & Himalayan Pink Salt Exporter from Pakistan';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#052e1f',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 28,
          }}
        >
          <div style={{ width: 44, height: 1, background: '#f59e0b' }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              color: '#f59e0b',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Karachi, Pakistan
          </div>
        </div>

        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Direct Basmati Rice &amp; Himalayan Pink Salt Exporter
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 26,
            color: '#a8c3b3',
            maxWidth: 820,
          }}
        >
          Exported from Pakistan to the Gulf, Europe &amp; Worldwide
        </div>

        <div
          style={{
            marginTop: 50,
            display: 'flex',
            alignItems: 'center',
            gap: 18,
          }}
        >
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            Indus Valley <span style={{ color: '#f59e0b' }}>Foods</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
