import type { ReactElement } from 'react';

import { siteConfig } from '@/config/site';

/** Palette aligned with globals.css industrial theme (carbon / silver / lava). */
const colors = {
  bg: '#0c0c0e',
  fg: '#d1d5dc',
  muted: '#6b7280',
  accent: '#dc2626',
} as const;

/**
 * JSX tree rendered inside `next/og` ImageResponse (inline styles only).
 */
export function OgImageShared(): ReactElement {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.bg,
        padding: 56,
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 6,
          height: '100%',
          backgroundColor: colors.accent,
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 28,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            backgroundColor: colors.accent,
            boxShadow: `0 0 10px ${colors.accent}`,
          }}
        />
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: 13,
            letterSpacing: '0.22em',
            color: colors.muted,
            textTransform: 'uppercase',
          }}
        >
          sys.status — online
        </span>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 16,
        }}
      >
        <div
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: 52,
            fontWeight: 700,
            color: colors.fg,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 22,
            color: colors.accent,
            letterSpacing: '-0.02em',
          }}
        >
          {siteConfig.title}
        </div>
      </div>
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: 14,
          color: colors.muted,
          lineHeight: 1.55,
          maxWidth: 920,
        }}
      >
        {siteConfig.description}
      </div>
    </div>
  );
}
