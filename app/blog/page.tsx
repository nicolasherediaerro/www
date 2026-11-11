/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"
import { FormShell } from "@/components/site/form-shell"
import { ArticleCard, Chip, PageNumber } from "@/components/site/parts"

export const metadata: Metadata = {
  title: "Blog",
  description: "Ideas para mejorar tu operación: notas cortas, sin tecnicismos.",
}

export default function Page() {
  return (
    <>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "72px 0 40px" }}>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              fontSize: "10.5px",
              letterSpacing: ".08em",
              color: "#9aa1ab",
            }}
          >
            BLOG
          </div>
          <h1
            style={{
              margin: "16px 0 0",
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: "400",
              fontSize: "76px",
              lineHeight: ".98",
              letterSpacing: "-0.02em",
              color: "#1b1d21",
              maxWidth: "780px",
              textWrap: "balance",
            }}
          >
            Ideas para mejorar tu operación
          </h1>
          <p style={{ margin: "22px 0 0", maxWidth: "500px", fontSize: "19px", lineHeight: "1.5", color: "#6b7280" }}>
            Guías, casos y buenas prácticas para ordenar cómo trabaja tu empresa, escritas sin tecnicismos.
          </p>
          <div style={{ marginTop: "36px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <span
              style={{
                display: "inline-flex",
                padding: "8px 14px",
                border: "1px solid",
                borderRadius: "999px",
                fontSize: "13.5px",
                background: "#1b1d21",
                color: "#fff",
                borderColor: "#1b1d21",
              }}
            >
              Todos
            </span>
            <Chip s={["Software a medida"]} />
            <Chip s={["Procesos"]} />
            <Chip s={["Guías"]} />
            <Chip s={["Casos"]} />
            <Chip s={["Cómo trabajamos"]} />
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <Link
          href="/blog/sistema-a-medida-senales"
          style={{
            display: "flex",
            flexWrap: "wrap",
            textDecoration: "none",
            color: "inherit",
            background: "#fff",
            border: "1px solid #e6e8eb",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <div style={{ flex: "1.2 1 480px", minHeight: "380px", position: "relative", background: "#f3f5fd" }}>
            <img src="/art/1d75a5f9.svg" alt="" style={{ width: "100%", height: "380px", display: "block" }} aria-hidden="true" />
          </div>
          <div
            style={{
              flex: "1 1 380px",
              boxSizing: "border-box",
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "18px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "10.5px",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "#2f5bea",
                }}
              >
                Software a medida
              </span>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "10.5px",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "#9aa1ab",
                }}
              >
                · DESTACADO
              </span>
            </div>
            <h2
              style={{
                margin: "0",
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: "400",
                fontSize: "44px",
                lineHeight: "1.05",
                letterSpacing: "-0.015em",
                color: "#1b1d21",
                textWrap: "balance",
              }}
            >
              Cómo saber si tu empresa ya necesita un sistema a medida
            </h2>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#6b7280" }}>
              Cinco señales de que las planillas y los mensajes sueltos dejaron de alcanzar.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginTop: "8px" }}>
              <span style={{ fontSize: "13px", color: "#9aa1ab" }}>12 oct 2026 · 6 min de lectura</span>
              <span
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "500", color: "#1b1d21" }}
              >
                Leer artículo
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
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "56px 0 0", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
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
          <ArticleCard
            s={[
              "/blog",
              "/art/7923287f.svg",
              "Guías",
              "Cuánto cuesta realmente un sistema a medida",
              "De qué depende el precio, cómo se reparte en el tiempo y dónde se ahorra.",
              "09 sep 2026 · 8 min de lectura",
            ]}
          />
          <ArticleCard
            s={[
              "/casos",
              "/art/4924d185.svg",
              "Casos",
              "Cómo Norvak ordenó sus pedidos en tres semanas",
              "De WhatsApp y planillas a una sola pantalla para todo el equipo.",
              "30 ago 2026 · 7 min de lectura",
            ]}
          />
          <ArticleCard
            s={[
              "/blog",
              "/art/ff595271.svg",
              "Guías",
              "Seguridad para quienes no son técnicos: cinco preguntas",
              "Lo que conviene preguntar antes de confiarle tus datos a un sistema.",
              "21 ago 2026 · 5 min de lectura",
            ]}
          />
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "48px 0 100px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <span style={{ fontSize: "14px", color: "#9aa1ab" }}>Mostrando 7 de 18 artículos</span>
          <div style={{ display: "flex", gap: "8px" }}>
            <span
              style={{
                width: "38px",
                height: "38px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "9px",
                fontSize: "14px",
                background: "#1b1d21",
                color: "#fff",
              }}
            >
              1
            </span>
            <PageNumber s={["2"]} />
            <PageNumber s={["3"]} />
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0 14px",
                height: "38px",
                border: "1px solid #e1e3e6",
                background: "#fff",
                borderRadius: "9px",
                fontSize: "14px",
                color: "#1b1d21",
              }}
            >
              Siguiente
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
            </span>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 130px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "32px 64px",
              alignItems: "center",
              background: "#efeeea",
              borderRadius: "24px",
              padding: "48px 56px",
            }}
          >
            <div style={{ flex: "1 1 340px" }}>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  fontSize: "40px",
                  lineHeight: "1.05",
                  letterSpacing: "-0.015em",
                  color: "#1b1d21",
                }}
              >
                Una idea por mes, directo a tu correo
              </h2>
              <p style={{ margin: "12px 0 0", fontSize: "15.5px", color: "#6b7280" }}>Sin spam. Podés darte de baja cuando quieras.</p>
            </div>
            <FormShell style={{ flex: "1 1 380px", display: "flex", gap: "10px" }} to="/contacto/gracias">
              <input
                type="email"
                placeholder="tu@empresa.com"
                style={{
                  flex: "1",
                  minWidth: "0",
                  boxSizing: "border-box",
                  padding: "13px 14px",
                  font: "inherit",
                  fontSize: "15px",
                  background: "#fff",
                  border: "1px solid #e1e3e6",
                  borderRadius: "9px",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "13px 20px",
                  background: "#1b1d21",
                  color: "#fff",
                  border: "0",
                  borderRadius: "9px",
                  font: "inherit",
                  fontSize: "14.5px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Suscribirme
              </button>
            </FormShell>
          </div>
        </div>
      </div>
    </>
  )
}
