/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"
import { CaseCard, Chip } from "@/components/site/parts"

export const metadata: Metadata = {
  title: "Casos de éxito",
  description: "Empresas que ordenaron su operación y dejaron las planillas y los mensajes sueltos.",
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
            CASOS
          </div>
          <h1
            style={{
              margin: "16px 0 0",
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: "400",
              letterSpacing: "-0.02em",
              color: "#1b1d21",
              fontSize: "72px",
              lineHeight: "1",
              maxWidth: "860px",
              textWrap: "balance",
            }}
          >
            Empresas que ordenaron su operación
          </h1>
          <p style={{ margin: "24px 0 0", maxWidth: "580px", fontSize: "20px", lineHeight: "1.5", color: "#6b7280" }}>
            Historias reales de cómo dejaron las planillas y los mensajes sueltos para trabajar con un sistema a medida.
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
            <Chip s={["Distribución"]} />
            <Chip s={["Servicios"]} />
            <Chip s={["Administración"]} />
            <Chip s={["Comercio"]} />
            <Chip s={["Producción"]} />
            <Chip s={["Construcción"]} />
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <Link
          href="/casos/norvak"
          style={{
            display: "flex",
            flexWrap: "wrap",
            textDecoration: "none",
            color: "inherit",
            background: "#0f1b4d",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              flex: "1 1 420px",
              boxSizing: "border-box",
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            <div style={{ color: "#fff" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", flex: "none" }}>
                <svg width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
                  <rect x="2" y="2" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="2.2" />
                  <rect x="6.5" y="6.5" width="5" height="5" rx="1.5" fill="#fff" />
                </svg>
                <span style={{ fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", color: "#fff" }}>Norvak</span>
              </div>
            </div>
            <div>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  letterSpacing: "-0.015em",
                  color: "#fff",
                  fontSize: "44px",
                  lineHeight: "1.08",
                  textWrap: "balance",
                }}
              >
                Cómo Norvak ordenó sus pedidos en tres semanas
              </h2>
              <div style={{ marginTop: "28px", display: "flex", alignItems: "baseline", gap: "14px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                    fontWeight: "400",
                    letterSpacing: "-0.015em",
                    color: "#fff",
                    fontSize: "64px",
                    lineHeight: "1",
                  }}
                >
                  −60%
                </span>
                <span style={{ fontSize: "14px", color: "#b9c6f5" }}>tiempo de armado de pedidos</span>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 420px", minHeight: "380px", position: "relative", background: "#f3f5fd" }}>
            <img src="/art/3285e45d.svg" alt="" style={{ width: "100%", height: "380px", display: "block" }} aria-hidden="true" />
          </div>
        </Link>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "24px 0 0", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          <CaseCard
            s={[
              "/casos/norvak",
              "/art/3f25984a.svg",
              <svg key="k2" width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
                <rect x="2" y="2" width="14" height="14" rx="4" fill="none" stroke="#1b1d21" strokeWidth="2.2" />
                <rect x="6.5" y="6.5" width="5" height="5" rx="1.5" fill="#1b1d21" />
              </svg>,
              "Norvak",
              "Distribución",
              "−60%",
              "tiempo de armado de pedidos",
            ]}
          />
          <CaseCard
            s={[
              "/casos",
              "/art/0d030c91.svg",
              <svg key="k2" width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
                <rect x="2" y="2" width="3.4" height="14" rx="1.2" fill="#1b1d21" />
                <rect x="7.3" y="2" width="3.4" height="14" rx="1.2" fill="#1b1d21" />
                <rect x="12.6" y="2" width="3.4" height="14" rx="1.2" fill="#1b1d21" />
              </svg>,
              "Tamira",
              "Servicios",
              "3×",
              "más pedidos por semana",
            ]}
          />
          <CaseCard
            s={[
              "/casos",
              "/art/71138794.svg",
              <svg key="k2" width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M9 1.5 L16.5 9 L9 16.5 L1.5 9 Z" fill="#1b1d21" />
              </svg>,
              "Quenta",
              "Administración",
              "2 h",
              "para cerrar el mes",
            ]}
          />
          <CaseCard
            s={[
              "/casos",
              "/art/768fea18.svg",
              <svg key="k2" width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M9 9h0" stroke="#1b1d21" strokeWidth="15.2" strokeLinecap="round" fill="none" />
                <rect x="1.5" y="9" width="15" height="7.5" fill="#fafafa" />
                <path d="M1.5 9 A7.5 7.5 0 0 1 16.5 9 Z" fill="#1b1d21" />
              </svg>,
              "Bolverde",
              "Comercio",
              "+35%",
              "pedidos entregados en fecha",
            ]}
          />
          <CaseCard
            s={[
              "/casos",
              "/art/db91572f.svg",
              <svg key="k2" width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
                <circle cx="9" cy="9" r="6.2" fill="none" stroke="#1b1d21" strokeWidth="3" />
              </svg>,
              "Lumbra",
              "Producción",
              "−40%",
              "tareas manuales",
            ]}
          />
          <CaseCard
            s={[
              "/casos",
              "/art/d60ae859.svg",
              <svg key="k2" width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M9 2 L16.5 15 H1.5 Z" fill="#1b1d21" />
              </svg>,
              "Arista",
              "Construcción",
              "96%",
              "aprobaciones el mismo día",
            ]}
          />
        </div>
        <div
          style={{
            marginTop: "18px",
            fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
            fontSize: "10.5px",
            letterSpacing: ".06em",
            color: "#b0b6bf",
            textAlign: "center",
          }}
        >
          CASOS, NOMBRES Y CIFRAS DE EJEMPLO
        </div>
      </div>
      <div style={{ height: "100px" }}></div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 130px" }}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              background: "#14171c",
              borderRadius: "24px",
              padding: "56px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "28px",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: "-120px",
                top: "-100px",
                width: "620px",
                height: "320px",
                opacity: ".45",
                WebkitMaskImage: "radial-gradient(closest-side, #000 25%, transparent 100%)",
                maskImage: "radial-gradient(closest-side, #000 25%, transparent 100%)",
              }}
            >
              <img src="/art/b66c3489.svg" alt="" style={{ width: "100%", height: "270px", display: "block" }} aria-hidden="true" />
            </div>
            <div style={{ position: "relative", maxWidth: "540px" }}>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  letterSpacing: "-0.015em",
                  color: "#fff",
                  fontSize: "44px",
                  lineHeight: "1.05",
                  textWrap: "balance",
                }}
              >
                ¿Querés ser el próximo caso?
              </h2>
              <p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.55", color: "#aab0b9" }}>
                Contanos cómo trabajan hoy y te mostramos por dónde empezar.
              </p>
            </div>
            <Link
              href="/contacto"
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "13px 20px",
                background: "#fff",
                color: "#14171c",
                borderRadius: "9px",
                fontSize: "14.5px",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Hablemos de tu caso
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
          </div>
        </div>
      </div>
    </>
  )
}
