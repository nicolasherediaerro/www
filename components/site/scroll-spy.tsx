"use client"

import * as React from "react"

type Item = { id: string; label: string }

/** Barra lateral de anclas: marca la sección que está en pantalla. */
export function ScrollSpy({
  label,
  items,
  variant = "article",
}: {
  label: string
  items: readonly Item[]
  variant?: "article" | "legal"
}) {
  const [active, setActive] = React.useState(items[0]?.id ?? "")
  const itemsRef = React.useRef(items)
  itemsRef.current = items
  const key = items.map((i) => i.id).join("|")

  React.useEffect(() => {
    const update = () => {
      const list = itemsRef.current
      let current = list[0]?.id ?? ""
      // La línea de lectura queda debajo de la navbar.
      const line = 120
      for (const item of list) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top <= line) current = item.id
      }
      setActive((prev) => (prev === current ? prev : current))
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [key])

  const pad = variant === "legal" ? "9px 0 9px 14px" : "8px 0 8px 14px"
  const size = variant === "legal" ? "14.5px" : "14px"

  return (
    <nav className="scroll-spy" aria-label={label}>
      <div
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "10.5px",
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "#9aa1ab",
          marginBottom: "14px",
        }}
      >
        {label}
      </div>
      {items.map((item) => {
        const on = item.id === active
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={on ? "true" : undefined}
            onClick={() => setActive(item.id)}
            style={{
              display: "block",
              padding: pad,
              borderLeft: `2px solid ${on ? "#2f5bea" : "#e6e8eb"}`,
              fontSize: size,
              fontWeight: on ? 500 : 400,
              color: on ? "#1b1d21" : "#7b828c",
              textDecoration: "none",
              transition: "color .15s ease, border-color .15s ease",
            }}
          >
            {item.label}
          </a>
        )
      })}
    </nav>
  )
}
