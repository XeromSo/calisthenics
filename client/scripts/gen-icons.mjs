import { mkdirSync } from 'node:fs'
import sharp from 'sharp'

mkdirSync('public', { recursive: true })

const iconSvg = (pad) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#182430"/>
      <stop offset="100%" stop-color="#0b0f14"/>
    </linearGradient>
    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ff9466"/>
      <stop offset="100%" stop-color="#ff6a3d"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="${pad === 0 ? 112 : 0}" fill="url(#bg)"/>
  <circle cx="${256 - (60 - pad)}" cy="256" r="${92 - pad}" fill="none" stroke="url(#ring)" stroke-width="${34 - pad * 0.2}"/>
  <circle cx="${256 + (60 - pad)}" cy="256" r="${92 - pad}" fill="none" stroke="url(#ring)" stroke-width="${34 - pad * 0.2}"/>
</svg>
`

const jobs = [
  ['public/pwa-192.png', iconSvg(0), 192],
  ['public/pwa-512.png', iconSvg(0), 512],
  ['public/apple-touch-icon.png', iconSvg(0), 180],
  ['public/pwa-maskable-512.png', iconSvg(40), 512],
  ['public/favicon-64.png', iconSvg(0), 64],
]

for (const [file, svg, size] of jobs) {
  await sharp(Buffer.from(svg)).resize(size, size).png().toFile(file)
  console.log('wrote', file)
}
