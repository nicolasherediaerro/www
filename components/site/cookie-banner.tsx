"use client"

import * as React from "react"

const KEY = "forge-cookies"

const listeners = new Set<() => void>()
const subscribe = (cb: () => void) => {
  listeners.add(cb)
  return () => listeners.delete(cb)
}
const read = () => {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}
const choose = (value: string) => {
  try {
    localStorage.setItem(KEY, value)
  } catch {}
  listeners.forEach((l) => l())
}

const btn = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  fontSize: "14.5px",
  cursor: "pointer",
  font: "inherit",
} as const

/** Aviso de cookies, según el diseño (Componentes → Aviso de cookies). */
export function CookieBanner() {
  const saved = React.useSyncExternalStore(subscribe, read, () => "ssr")
  if (saved !== null) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      style={{ position: "fixed", left: 16, right: 16, bottom: 16, zIndex: 60, pointerEvents: "none" }}
    >
      <div
        style={{
          boxSizing: "border-box",
          maxWidth: "520px",
          background: "#fff",
          border: "1px solid #e6e8eb",
          borderRadius: "18px",
          padding: "24px",
          boxShadow: "0 24px 48px -24px rgba(20,23,28,.35)",
          pointerEvents: "auto",
        }}
      >
        <div style={{ fontSize: "16px", fontWeight: 500, color: "#1b1d21" }}>Usamos cookies</div>
        <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: 1.55, color: "#6b7280" }}>
          Usamos cookies esenciales para que el sitio funcione y, si aceptás, otras para entender cómo lo usás y mejorarlo.
        </p>
        <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <button
            type="button"
            onClick={() => choose("all")}
            style={{ ...btn, padding: "13px 20px", background: "#1b1d21", color: "#fff", border: 0, borderRadius: "9px", fontWeight: 500 }}
          >
            Aceptar todas
          </button>
          <button
            type="button"
            onClick={() => choose("essential")}
            style={{
              ...btn,
              padding: "12px 18px",
              background: "transparent",
              border: "1px solid #e1e3e6",
              borderRadius: "9px",
              fontWeight: 500,
              color: "#1b1d21",
            }}
          >
            Solo esenciales
          </button>
          <button
            type="button"
            onClick={() => choose("essential")}
            style={{ ...btn, padding: "12px 6px", background: "none", border: 0, color: "#7b828c", textDecoration: "underline" }}
          >
            Configurar
          </button>
        </div>
      </div>
    </div>
  )
}
