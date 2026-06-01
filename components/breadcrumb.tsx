import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { BreadcrumbSchema } from '@/components/schema'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  dark?: boolean
}

export function Breadcrumb({ items, dark = false }: BreadcrumbProps) {
  const allItems = [{ name: 'Home', href: '/' }, ...items]

  return (
    <>
      <BreadcrumbSchema items={allItems} />
      <nav
        aria-label="Breadcrumb"
        style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}
      >
        {allItems.map((item, i) => {
          const isLast = i === allItems.length - 1
          return (
            <span
              key={item.href}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              {i === 0 && (
                <Home
                  style={{
                    width: '14px',
                    height: '14px',
                    flexShrink: 0,
                    color: dark ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)',
                  }}
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: dark ? 'rgba(255,255,255,0.9)' : 'var(--navy)',
                    lineHeight: 1,
                  }}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    color: dark ? 'rgba(255,255,255,0.55)' : 'var(--text-muted)',
                    textDecoration: 'none',
                    lineHeight: 1,
                    display: 'inline',
                    minHeight: 'unset',
                    padding: 0,
                  }}
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <ChevronRight
                  style={{
                    width: '13px',
                    height: '13px',
                    flexShrink: 0,
                    color: dark ? 'rgba(255,255,255,0.3)' : 'var(--border-light)',
                  }}
                  aria-hidden="true"
                />
              )}
            </span>
          )
        })}
      </nav>
    </>
  )
}
