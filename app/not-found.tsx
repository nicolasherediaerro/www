/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"
import { NotFoundLink } from "@/components/site/parts"

export const metadata: Metadata = {
  title: "No encontramos esa página",
}

export default function NotFound() {
  return (
    <>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ position: "relative", padding: "80px 0 130px", textAlign: "center" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "40px",
              transform: "translateX(-50%)",
              width: "760px",
              height: "380px",
              opacity: ".5",
              WebkitMaskImage: "radial-gradient(closest-side, #000 20%, transparent 100%)",
              maskImage: "radial-gradient(closest-side, #000 20%, transparent 100%)",
            }}
          >
            <img src="/art/6f97e881.svg" alt="" style={{ width: "100%", height: "380px", display: "block" }} aria-hidden="true" />
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: "400",
                letterSpacing: "-0.04em",
                color: "#1b1d21",
                fontSize: "220px",
                lineHeight: "1",
              }}
            >
              404
            </div>
            <h1
              style={{
                margin: "12px 0 0",
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: "400",
                letterSpacing: "-0.015em",
                color: "#1b1d21",
                fontSize: "48px",
                lineHeight: "1.05",
              }}
            >
              No encontramos esa página
            </h1>
            <p style={{ margin: "18px auto 0", maxWidth: "440px", fontSize: "17px", lineHeight: "1.55", color: "#6b7280" }}>
              Puede que el enlace haya cambiado o que la página ya no exista.
            </p>
            <div style={{ marginTop: "32px", display: "inline-flex", gap: "12px" }}>
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
                Ir al blog
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
            <div style={{ margin: "72px auto 0", maxWidth: "560px", textAlign: "left" }}>
              <div
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "10.5px",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "#9aa1ab",
                  marginBottom: "8px",
                }}
              >
                QUIZÁS BUSCABAS
              </div>
              <NotFoundLink
                s={[
                  "/como-trabajamos",
                  "Cómo trabajamos",
                  <svg
                    key="k2"
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
                  </svg>,
                ]}
              />
              <NotFoundLink
                s={[
                  "/casos",
                  "Casos de éxito",
                  <svg
                    key="k2"
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
                  </svg>,
                ]}
              />
              <NotFoundLink
                s={[
                  "/precios",
                  "Precios",
                  <svg
                    key="k2"
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
                  </svg>,
                ]}
              />
              <NotFoundLink
                s={[
                  "/contacto",
                  "Contacto",
                  <svg
                    key="k2"
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
                  </svg>,
                ]}
              />
              <div style={{ borderTop: "1px solid #e6e8eb" }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
