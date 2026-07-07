// Script to generate og-image.png using sharp (if available) or write SVG fallback
// Run: node scripts/generate-og.mjs

import { createCanvas } from 'canvas'
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const W = 1200
const H = 630

const canvas = createCanvas(W, H)
const ctx = canvas.getContext('2d')

// Background gradient — navy
const grad = ctx.createLinearGradient(0, 0, W, H)
grad.addColorStop(0, '#091E30')
grad.addColorStop(1, '#0D2A42')
ctx.fillStyle = grad
ctx.fillRect(0, 0, W, H)

// Teal accent bar top
ctx.fillStyle = '#4ECDC4'
ctx.fillRect(0, 0, W, 6)

// Teal accent bar bottom
ctx.fillRect(0, H - 6, W, 6)

// Right-side decorative circle (subtle)
ctx.beginPath()
ctx.arc(W - 120, H / 2, 220, 0, Math.PI * 2)
ctx.fillStyle = 'rgba(78, 205, 196, 0.06)'
ctx.fill()

ctx.beginPath()
ctx.arc(W - 120, H / 2, 160, 0, Math.PI * 2)
ctx.fillStyle = 'rgba(78, 205, 196, 0.06)'
ctx.fill()

// ── Stethoscope icon (simplified circle + line in teal) ──
const ix = W - 180
const iy = H / 2 - 30
ctx.beginPath()
ctx.arc(ix, iy, 55, 0, Math.PI * 2)
ctx.strokeStyle = '#4ECDC4'
ctx.lineWidth = 8
ctx.stroke()

ctx.beginPath()
ctx.moveTo(ix, iy + 55)
ctx.lineTo(ix, iy + 90)
ctx.lineTo(ix + 35, iy + 90)
ctx.strokeStyle = '#4ECDC4'
ctx.lineWidth = 8
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.stroke()

// Small circle at bottom of stethoscope
ctx.beginPath()
ctx.arc(ix + 35, iy + 105, 15, 0, Math.PI * 2)
ctx.strokeStyle = '#4ECDC4'
ctx.lineWidth = 6
ctx.stroke()

// ── Text ──
// Brand name
ctx.font = 'bold 88px sans-serif'
ctx.fillStyle = '#FFFFFF'
ctx.fillText('Care N Cure', 72, 220)

// Divider line
ctx.fillStyle = '#4ECDC4'
ctx.fillRect(72, 248, 180, 5)

// Tagline
ctx.font = 'bold 38px sans-serif'
ctx.fillStyle = '#4ECDC4'
ctx.fillText('The Nurse Who Knows You', 72, 316)

// Description line
ctx.font = '28px sans-serif'
ctx.fillStyle = 'rgba(255,255,255,0.7)'
ctx.fillText('Registered Nurses · Home Nursing · Perth, WA', 72, 374)

// Trust badges
ctx.font = '22px sans-serif'
ctx.fillStyle = 'rgba(255,255,255,0.45)'
ctx.fillText('✓ Fully Registered Nurses    ✓ Same Nurse Every Visit    ✓ Perth Metro', 72, 440)

// URL
ctx.font = 'bold 26px sans-serif'
ctx.fillStyle = 'rgba(78, 205, 196, 0.8)'
ctx.fillText('carencure.com.au', 72, H - 48)

// Phone
ctx.font = '24px sans-serif'
ctx.fillStyle = 'rgba(255,255,255,0.5)'
ctx.fillText('1300 919 663', W - 340, H - 48)

const buffer = canvas.toBuffer('image/png')
const outPath = join(__dirname, '..', 'public', 'og-image.png')
writeFileSync(outPath, buffer)
console.log('✅ OG image written to public/og-image.png')
