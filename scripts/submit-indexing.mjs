import crypto from 'crypto'
import https from 'https'
import fs from 'fs'

const BING_API_KEY = '0227f1ee3d5049a7a1c3b41243e15290'
const SITE_URL = 'https://carencure.com.au'

const GOOGLE_CREDS = {
  client_email: 'dps-seo-automation@seo-poject.iam.gserviceaccount.com',
  private_key: `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC8oNlk8W/luMl/
jwjtE+ZdBqJeRwIrcDrTqx3fLkxTkiG+EW3LrzWF+dzuZQeaCuijvdy4vuk76icK
mEbGsvSdMFXjeBj0cdw0O2rDlw5WbWSxEOZy4KeNXfClsdPrC1tYmR6FRx2wCbEv
r6tmup4EO1BB/8cdCebWtS1EZ7Dmx8WuSp4YuspvSHr2WfOwZt0gAPUWQI49mDR2
YAxNC4QMFVQyyyQvUPzbru19ZiEknuNqt0GSm3773wY07OxuRfMSAw1XKWB9VhK4
ju6OYc+UAagJAPUMKrN/I6wICdjGi4ua3CMFo3VrzeyIyL5TwANCxzI6wGygcAU2
OPH0lKanAgMBAAECggEAQiBldeTKJI9+XDCJoYsrZAtSWpisIwxKIzBG3Zm+ekGt
gJNdmV1H9zrb/9r9KjyOx/Bkc4PCAhYZL7aogTn1VTG/umm83d0YpFr8F6taBGR/
Oy/Aih9FveJj3cKUlz64/DtZnsGKn88WBbCg9vePM86TWT/QztZMzZJgVy2+r3hZ
LSomJpE0rxqe+QCd5rUdcHxeNdAnkIoi095WmvY5OmaukkoL1NBZxXLjXy1icTGa
M5m/hcXc+3FtpeesWN2OOhUuKQF3wLDxuti2wDeFwMJ1Dj3Yejod1jsVN4O705GO
d6zqylpZHOQ9+laGwo8l6juPJ7xZZem97wdQfYBosQKBgQDhmzvM+9ldI1vQJwQU
PRvy6/vDWq78nChTHPOz0R+xXa690SwdyqwlVxz0tfBPLaG9F0ZWOHwQXtiiNuH5
E0HfMwZxySy4PPfWW+LDOrX49Iq3Ap5jCsyU3abtJClHOC3jZi7vDQmpdZT99jkl
kndhqqg5P5E5J8MVfI81QEqo/wKBgQDWCk6usle8Vp4wfcEZQRhklhOr/Jert/4t
eaJtILuEllsqp8/2MYUXGXXwa+eW/fPUg93+Cx4qILyGkF/PNtkqqV1BYD1jEMr1
xrvF9sAhGLcodmQZmSI3c9krCHVwuhAJpQ5Wqn1vCpv6vq4GoXYtOnZtFU7bBNji
Y+KMFIoaWQKBgQDY/W+lFs7X8DxMllosBSKuoR7DpKMNwDxgxEX5u7gZ5hs94sPl
25t7RrBJBf0eiqs3rf0uzKE3NaJzUwpBgK4ouXEHXBExGyLc//+4+u0viDUrFM+2
PxrKS+5TxCYXpAcu4odd0VJrtPYa1gndA2TjgTrP5T4OlRnjvqwW8cFdjQKBgGO9
G9smOeIGjuJTx0aIYeCFWpdbNiYLsALq2jh190uacNMYrbywaK9R6vZkod9naVbP
OAPolF7XMGKYJj099sZ9c3pCaXifW6RZvihKik8h4D+Xo5+WDy696iW2ZFtqKI0F
//98pMS4seSPNDLczF/ZDVRZiIxg3tvn5aqW65/JAoGBALWccLceGrGSu2fA/X4m
vPIOegaTG9D/5DiPP3/fPNlqi/4+aeIoRBWXBiLYawsdNcXiu3PPMB8L4NvZWBQL
KXaJ98Z+B8YJpqZmiXN79ELu8uPjt8CgAS23g2lIyraJ7WX5xsJMn3IMYByirHyI
jxsrHx7fSWCESHSR3ibRzVnn
-----END PRIVATE KEY-----`,
}

// Read all URLs directly from sitemap.ts
function getAllSiteUrls() {
  const sitemapCode = fs.readFileSync('app/sitemap.ts', 'utf8')
  
  // Static URLs
  const staticMatches = [...sitemapCode.matchAll(/url:\s*[`"']([^`"']+)`|url:\s*'([^']+)'/g)]
    .map(m => (m[1] || m[2]).replace('${BASE_URL}', SITE_URL))

  // Suburbs
  const suburbsMatch = sitemapCode.match(/const suburbs = \[([\s\S]*?)\]/)
  const suburbs = suburbsMatch
    ? [...suburbsMatch[1].matchAll(/'([^']+)'/g)].map(m => `${SITE_URL}/locations/${m[1]}`)
    : []

  // Blogs
  const blogMatch = sitemapCode.match(/const blogSlugs = \[([\s\S]*?)\]/)
  const blogs = blogMatch
    ? [...blogMatch[1].matchAll(/'([^']+)'/g)].map(m => `${SITE_URL}/blog/${m[1]}`)
    : []

  // Funded landing pages
  const fundedPagesCode = fs.readFileSync('lib/funded-pages.ts', 'utf8')
  const fundedMatches = [...fundedPagesCode.matchAll(/slug:\s*'([^']+)',\s*hub:\s*'([^']+)'/g)]
    .map(m => `${SITE_URL}/${m[2] === 'support-at-home' ? 'support-at-home' : 'ndis-nursing'}/${m[1]}`)

  const allUrls = Array.from(new Set([...staticMatches, ...fundedMatches, ...suburbs, ...blogs]))
    .filter(u => u.startsWith('https://carencure.com.au') && !u.includes('${'))

  return allUrls
}

function httpRequest(url, options, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let body = ''
      res.on('data', (chunk) => (body += chunk))
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body }))
    })
    req.on('error', reject)
    if (postData) req.write(postData)
    req.end()
  })
}

// ── 1. Submit to Bing Webmaster API ──────────────────────────────────────────
async function submitToBing(urlList) {
  const batch = urlList.slice(0, 75)
  console.log(`\n--- 1. Submitting ${batch.length} URLs to Bing Webmaster API (within daily quota) ---`)
  const endpoint = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${BING_API_KEY}`
  const payload = JSON.stringify({
    siteUrl: SITE_URL,
    urlList: batch,
  })

  try {
    const res = await httpRequest(
      endpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(payload),
        },
      },
      payload
    )
    console.log(`Bing Response Status: ${res.status}`)
    console.log(`Bing Response Body: ${res.body || '(empty ok)'}`)
    if (res.status === 200) {
      console.log(`✓ Successfully submitted ${urlList.length} URLs to Bing Webmaster!`)
    }
  } catch (err) {
    console.error('Bing submission error:', err.message)
  }
}

// ── 2. Create Google JWT & Get OAuth Token ──────────────────────────────────
function base64UrlEncode(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

async function getGoogleAccessToken() {
  const now = Math.floor(Date.now() / 1000)
  const header = { alg: 'RS256', typ: 'JWT' }
  const claimSet = {
    iss: GOOGLE_CREDS.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  }

  const encodedHeader = base64UrlEncode(JSON.stringify(header))
  const encodedClaimSet = base64UrlEncode(JSON.stringify(claimSet))
  const signInput = `${encodedHeader}.${encodedClaimSet}`

  const signer = crypto.createSign('RSA-SHA256')
  signer.update(signInput)
  const signature = base64UrlEncode(signer.sign(GOOGLE_CREDS.private_key))

  const jwt = `${signInput}.${signature}`
  const postData = `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`

  const res = await httpRequest(
    'https://oauth2.googleapis.com/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData),
      },
    },
    postData
  )

  const tokenData = JSON.parse(res.body)
  if (!tokenData.access_token) {
    throw new Error(`Failed to get Google access token: ${res.body}`)
  }
  return tokenData.access_token
}

// ── 3. Submit to Google Indexing API ─────────────────────────────────────────
async function submitToGoogle(urlList) {
  console.log('\n--- 2. Submitting all URLs to Google Indexing API ---')
  let accessToken
  try {
    accessToken = await getGoogleAccessToken()
    console.log('✓ Successfully authenticated with Google OAuth!')
  } catch (err) {
    console.error('✗ Google Authentication failed:', err.message)
    return
  }

  console.log(`Submitting ${urlList.length} URLs to Google Indexing API...`)

  let successCount = 0
  for (let i = 0; i < urlList.length; i++) {
    const url = urlList[i]
    const payload = JSON.stringify({
      url,
      type: 'URL_UPDATED',
    })

    try {
      const res = await httpRequest(
        'https://indexing.googleapis.com/v3/urlNotifications:publish',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
            'Content-Length': Buffer.byteLength(payload),
          },
        },
        payload
      )

      if (res.status === 200) {
        successCount++
        process.stdout.write(`[${i + 1}/${urlList.length}] ✓ ${url.replace('https://carencure.com.au', '') || '/'}\n`)
      } else {
        console.log(`[${i + 1}/${urlList.length}] ⚠ [${res.status}] ${url}: ${res.body}`)
      }
    } catch (err) {
      console.error(`✗ Error indexing ${url}:`, err.message)
    }

    // Gentle pacing
    await new Promise((r) => setTimeout(r, 60))
  }
  console.log(`\nGoogle Indexing Complete: ${successCount}/${urlList.length} URLs submitted successfully.`)
}

async function main() {
  const allUrls = getAllSiteUrls()
  console.log('====================================================')
  console.log('Care N Cure Full-Site Fast-Track Indexing Submission')
  console.log(`Time: ${new Date().toISOString()}`)
  console.log(`Total Verified Site URLs: ${allUrls.length}`)
  console.log('====================================================')

  await submitToBing(allUrls)
  await submitToGoogle(allUrls)
}

main().catch(console.error)
