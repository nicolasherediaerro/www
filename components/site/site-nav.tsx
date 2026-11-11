"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavCta, NavLinks, NavLogo } from "@/components/site/nav-parts"

const MOBILE_LINKS = [
  ["Soluciones", "/soluciones/portales"],
  ["Arquitectura", "/arquitectura"],
  ["Casos", "/casos"],
  ["Cómo trabajamos", "/como-trabajamos"],
  ["Blog", "/blog"],
] as const

// Umbrales distintos para activar y desactivar: al compactarse la barra baja el
// scroll, y un solo umbral hacía que el estado oscilara en bucle.
function useScrolled() {
  const [scrolled, setScrolled] = React.useState(false)
  React.useEffect(() => {
    const update = () => {
      const y = window.scrollY
      setScrolled((prev) => (prev ? y > 4 : y > 64))
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])
  return scrolled
}

/** Navbar del sitio. Escritorio: enlaces + botón. Móvil: logo + menú. Con scroll se compacta (ver /componentes del diseño). */
export function SiteNav() {
  const pathname = usePathname()
  const scrolled = useScrolled()
  const [openFor, setOpenFor] = React.useState<string | null>(null)
  const open = openFor === pathname

  // Cierra el desplegable "Soluciones" al hacer clic fuera, con Escape o al navegar.
  React.useEffect(() => {
    const close = (target?: EventTarget | null) => {
      document.querySelectorAll<HTMLDetailsElement>(".site-nav details[open]").forEach((d) => {
        if (!target || !d.contains(target as Node)) d.removeAttribute("open")
      })
    }
    const onClick = (e: MouseEvent) => close(e.target)
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close()
    document.addEventListener("click", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("click", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [])
  React.useEffect(() => {
    document.querySelectorAll(".site-nav details[open]").forEach((d) => d.removeAttribute("open"))
  }, [pathname])

  return (
    <header className="site-nav" data-scrolled={scrolled} data-open={open}>
      <div className="site-nav__bar">
        <NavLogo />
        <div className="site-nav__desktop">
          <NavLinks />
        </div>
        <div className="site-nav__desktop">
          <NavCta />
        </div>
        <button
          type="button"
          className="site-nav__toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpenFor(open ? null : pathname)}
        >
          {open ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="#14171c"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 5 L17 17 M17 5 L5 17" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#14171c"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 8 H20 M4 16 H20" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <div className="site-nav__panel">
          {MOBILE_LINKS.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 0",
                borderTop: "1px solid #eceef1",
                fontSize: "18px",
                color: "#14171c",
                textDecoration: "none",
              }}
            >
              {label}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="#14171c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 7H12 M8 3 L12 7 L8 11" />
              </svg>
            </Link>
          ))}
          <div style={{ marginTop: "20px" }}>
            <Link
              href="/contacto"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "13px 20px",
                background: "#1b1d21",
                color: "#fff",
                borderRadius: "9px",
                fontSize: "14.5px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Hablemos
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
