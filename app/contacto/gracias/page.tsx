import type { Metadata } from "next"
import Link from "next/link"
import { ArticleCard, ThanksStep } from "@/components/site/parts"

export const metadata: Metadata = {
  title: "Gracias",
  description: "Recibimos tu mensaje.",
  robots: {
    index: false,
  },
}

export default function Page() {
  return (
    <>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "100px 0 90px", textAlign: "center" }}>
          <span
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "#eaf1fe",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#2f5bea"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 8 L6.5 11.5 L13 4.5" />
            </svg>
          </span>
          <h1
            style={{
              margin: "28px 0 0",
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: "400",
              letterSpacing: "-0.02em",
              color: "#1b1d21",
              fontSize: "72px",
              lineHeight: "1",
            }}
          >
            ¡Recibimos tu mensaje!
          </h1>
          <p style={{ margin: "22px auto 0", maxWidth: "500px", fontSize: "19px", lineHeight: "1.5", color: "#6b7280" }}>
            Gracias por escribirnos. Te respondemos en un día hábil a tu correo.
          </p>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 100px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
            <div>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  letterSpacing: "-0.015em",
                  color: "#1b1d21",
                  fontSize: "44px",
                  lineHeight: "1.05",
                }}
              >
                Qué pasa ahora
              </h2>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              <ThanksStep s={["01", "Te respondemos", "En un día hábil, por correo o WhatsApp."]} />
              <ThanksStep s={["02", "Hacemos una llamada", "De 30 minutos, para entender cómo trabajan hoy."]} />
              <ThanksStep s={["03", "Recibís una propuesta", "Por escrito, con alcance, etapas y plazos."]} />
            </div>
          </div>
          <div style={{ marginTop: "40px", display: "flex", gap: "12px" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 18px",
                borderRadius: "9px",
                fontSize: "14.5px",
                fontWeight: "500",
                textDecoration: "none",
                background: "#1b1d21",
                color: "#fff",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.18), 0 1px 2px rgba(0,0,0,.25)",
              }}
            >
              Volver al inicio
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 7H12 M8 3 L12 7 L8 11" />
              </svg>
            </Link>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 18px",
                borderRadius: "9px",
                fontSize: "14.5px",
                fontWeight: "500",
                textDecoration: "none",
                background: "#fff",
                color: "#1b1d21",
                border: "1px solid #e1e3e6",
              }}
            >
              Leer el blog
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="#1b1d21"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 7H12 M8 3 L12 7 L8 11" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 110px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
            <div>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  letterSpacing: "-0.015em",
                  color: "#1b1d21",
                  fontSize: "44px",
                  lineHeight: "1.05",
                }}
              >
                Mientras tanto
              </h2>
            </div>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#1b1d21",
                textDecoration: "none",
              }}
            >
              Ver todos los artículos
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="#1b1d21"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 7H12 M8 3 L12 7 L8 11" />
              </svg>
            </Link>
          </div>
          <div style={{ marginTop: "40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              <ArticleCard
                s={[
                  "/blog",
                  "/art/f036cbe4.svg",
                  "Procesos",
                  "Del Excel al sistema: por dónde empezar",
                  "No hace falta cambiarlo todo de golpe. Empezá por la pieza que más duele.",
                  "04 oct 2026 · 5 min de lectura",
                ]}
              />
              <ArticleCard
                s={[
                  "/como-trabajamos",
                  "/art/fe4f7704.svg",
                  "Cómo trabajamos",
                  "Qué pasa después de la entrega",
                  "Capacitación, ajustes y seguimiento: lo que viene cuando el sistema ya está en uso.",
                  "27 sep 2026 · 4 min de lectura",
                ]}
              />
              <ArticleCard
                s={[
                  "/blog",
                  "/art/c795ae2f.svg",
                  "Procesos",
                  "Aprobaciones sin perseguir a nadie",
                  "Cómo ordenar quién aprueba qué para que nada quede esperando en una bandeja.",
                  "18 sep 2026 · 5 min de lectura",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
