"use client"

import Link from "next/link"
import { useState, type FormEvent } from "react"

const issue = {
  href: "/blog/sistema-a-medida-senales",
  title: "Cómo saber si tu empresa ya necesita un sistema a medida",
  meta: "12 oct 2026 · 6 min de lectura",
}

type Status = "idle" | "saving" | "done" | "error"

export function FooterNewsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [note, setNote] = useState("")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus("error")
      setNote("Ingresá un correo válido.")
      return
    }
    setStatus("saving")
    setNote("")
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      })
      const body = (await response.json().catch(() => null)) as { error?: string; already?: boolean } | null
      if (!response.ok) {
        setStatus("error")
        setNote(body?.error || "No pudimos anotarte. Escribinos a hola@forge.com.")
        return
      }
      setStatus("done")
      setNote(body?.already ? "Ese correo ya estaba en la lista." : "Listo. Quedaste anotado.")
    } catch {
      setStatus("error")
      setNote("No pudimos anotarte. Escribinos a hola@forge.com.")
    }
  }

  return (
    <div className="footer-news">
      <style href="footer-news" precedence="default">{`
        .footer-news input { color: #fff; }
        .footer-news input::placeholder { color: rgba(255,255,255,.65); font-style: italic; }
        .footer-news input:focus { outline: none; }
        .footer-news a:hover { text-decoration: underline; }
        .footer-news button:hover { background: #eaf1fe; }
        .footer-news button:disabled { cursor: default; }
      `}</style>
      <div
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "11.5px",
          letterSpacing: ".1em",
          color: "#fff",
        }}
      >
        NEWSLETTER
      </div>
      <div style={{ width: "26px", height: "1px", background: "rgba(255,255,255,.7)", margin: "10px 0 14px" }} />
      <p
        style={{
          margin: "0",
          fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
          fontStyle: "italic",
          fontSize: "19px",
          lineHeight: "1.35",
          color: "rgba(255,255,255,.9)",
        }}
      >
        Ideas para mejorar tu operación con software, una vez al mes.
      </p>
      {status === "done" ? (
        <p style={{ margin: "18px 0 0", fontSize: "14.5px", lineHeight: "1.45", color: "#fff" }}>{note}</p>
      ) : (
        <form onSubmit={onSubmit} noValidate style={{ marginTop: "18px" }}>
          <div style={{ display: "flex", border: "1px solid rgba(255,255,255,.7)" }}>
            <label htmlFor="footer-email" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
              Correo electrónico
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              maxLength={254}
              value={email}
              placeholder="Tu correo electrónico"
              onChange={(event) => {
                setEmail(event.target.value)
                if (status === "error") setStatus("idle")
              }}
              style={{
                flex: "1",
                minWidth: "0",
                padding: "12px 14px",
                border: "0",
                background: "transparent",
                font: "italic 14px/1.3 var(--font-instrument), 'Instrument Serif', Georgia, serif",
              }}
            />
            <button
              type="submit"
              aria-label="Suscribirme"
              disabled={status === "saving"}
              style={{
                width: "46px",
                border: "0",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="#16329a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 7H12 M8 3 L12 7 L8 11" />
              </svg>
            </button>
          </div>
          {status === "error" ? (
            <p role="alert" style={{ margin: "8px 0 0", fontSize: "13px", color: "#ffd0d0" }}>
              {note}
            </p>
          ) : null}
        </form>
      )}
      <Link href={issue.href} style={{ display: "block", marginTop: "16px", textDecoration: "none", color: "inherit" }}>
        <div
          style={{
            fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
            fontSize: "10.5px",
            letterSpacing: ".08em",
            color: "#9db8ff",
          }}
        >
          LA NOTA DE ESTE MES
        </div>
        <div
          style={{
            marginTop: "6px",
            fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
            fontStyle: "italic",
            fontSize: "17px",
            lineHeight: "1.3",
            color: "#fff",
          }}
        >
          {issue.title}
        </div>
        <div style={{ marginTop: "4px", fontSize: "12.5px", color: "rgba(255,255,255,.7)" }}>{issue.meta}</div>
      </Link>
    </div>
  )
}
