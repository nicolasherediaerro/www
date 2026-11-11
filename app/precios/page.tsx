/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"
import { AudienceCard, PaymentStep, PlanCheck, PricingPlan } from "@/components/site/parts"
import { FaqSection } from "@/components/site/faq-section"

export const metadata: Metadata = {
  title: "Precios",
  description: "Cómo se calcula el precio de un sistema a medida y cómo se paga, por etapas y sin sorpresas.",
}

export default function Page() {
  return (
    <>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "40px 0 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#9aa1ab" }}>
            <Link href="/precios" style={{ color: "#7b828c", textDecoration: "none" }}>
              Precios
            </Link>
          </div>
          <h1
            style={{
              margin: "28px 0 0",
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: "400",
              letterSpacing: "-0.02em",
              color: "#1b1d21",
              fontSize: "76px",
              lineHeight: "1",
              maxWidth: "820px",
              textWrap: "balance",
            }}
          >
            Precios claros, por etapas
          </h1>
          <p style={{ margin: "24px 0 0", maxWidth: "600px", fontSize: "20px", lineHeight: "1.5", color: "#6b7280" }}>
            No hay paquetes cerrados: cada sistema se arma a tu medida. Te mostramos cómo se calcula y cómo se paga para que no haya
            sorpresas.
          </p>
        </div>
      </div>
      <div style={{ height: "80px" }}></div>
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
                De qué depende el precio
              </h2>
              <p style={{ margin: "12px 0 0", fontSize: "16px", color: "#7b828c", maxWidth: "540px" }}>
                Cuatro cosas que mueven el presupuesto.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "44px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
              <AudienceCard
                s={[
                  <svg
                    key="k0"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#2f5bea"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M8 2 L14 5 L8 8 L2 5 Z M2 8 L8 11 L14 8 M2 11 L8 14 L14 11" />
                  </svg>,
                  "Alcance",
                  "Cuántas piezas necesitás y qué tan complejas son.",
                ]}
              />
              <AudienceCard
                s={[
                  <svg
                    key="k0"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#2f5bea"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="5.5" r="2.5" />
                    <path d="M3 14 C3 10.8 5.2 9.5 8 9.5 C10.8 9.5 13 10.8 13 14" />
                  </svg>,
                  "Personas y roles",
                  "Quiénes lo usan y qué ve cada uno.",
                ]}
              />
              <AudienceCard
                s={[
                  <svg
                    key="k0"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#2f5bea"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="4" cy="8" r="2" />
                    <circle cx="12" cy="4" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M6 8 L10 4.8 M6 8 L10 11.2" />
                  </svg>,
                  "Conexiones",
                  "Con qué herramientas tiene que integrarse.",
                ]}
              />
              <AudienceCard
                s={[
                  <svg
                    key="k0"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#2f5bea"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="8" r="6" />
                    <path d="M8 4.5 V8 L10.5 9.5" />
                  </svg>,
                  "Plazos",
                  "Qué tan rápido lo necesitás en marcha.",
                ]}
              />
            </div>
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
                Tres formas de empezar
              </h2>
              <p style={{ margin: "12px 0 0", fontSize: "16px", color: "#7b828c", maxWidth: "540px" }}>
                Elegí según cuánto querés resolver ahora.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "44px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              <PricingPlan
                s={[
                  "PRIMERA PIEZA",
                  "USD 3.000+",
                  "Una parte concreta, funcionando",
                  "Plazo típico: ",
                  "2 a 4 semanas",
                  <svg
                    key="k5"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#1b1d21"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ flex: "none" }}
                  >
                    <path d="M3 8 L6.5 11.5 L13 4.5" />
                  </svg>,
                  "Una función a elección",
                  <svg
                    key="k7"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#1b1d21"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ flex: "none" }}
                  >
                    <path d="M3 8 L6.5 11.5 L13 4.5" />
                  </svg>,
                  "Capacitación del equipo",
                  <svg
                    key="k9"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#1b1d21"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ flex: "none" }}
                  >
                    <path d="M3 8 L6.5 11.5 L13 4.5" />
                  </svg>,
                  "Un mes de acompañamiento",
                  "/contacto",
                  "Pedir presupuesto",
                  <svg
                    key="k13"
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
              <div
                style={{
                  boxSizing: "border-box",
                  border: "1px solid #e6e8eb",
                  borderRadius: "24px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  background: "#14171c",
                  borderColor: "#14171c",
                  color: "#fff",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                      fontSize: "10.5px",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "#8fa6f5",
                    }}
                  >
                    SISTEMA COMPLETO
                  </div>
                  <div
                    style={{
                      marginTop: "22px",
                      fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                      fontWeight: "400",
                      letterSpacing: "-0.015em",
                      color: "#fff",
                      fontSize: "48px",
                      lineHeight: "1",
                    }}
                  >
                    USD 12.000+
                  </div>
                  <div style={{ marginTop: "8px", fontSize: "14px", color: "#9aa3b2" }}>Varias piezas conectadas</div>
                </div>
                <div style={{ fontSize: "14px", color: "#9aa3b2" }}>
                  {"Plazo típico: "}
                  <span style={{ color: "#fff" }}>2 a 4 meses</span>
                </div>
                <div>
                  <PlanCheck
                    s={[
                      <svg
                        key="k0"
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        style={{ flex: "none" }}
                      >
                        <path d="M3 8 L6.5 11.5 L13 4.5" />
                      </svg>,
                      "Todo lo de Primera pieza",
                    ]}
                  />
                  <PlanCheck
                    s={[
                      <svg
                        key="k0"
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        style={{ flex: "none" }}
                      >
                        <path d="M3 8 L6.5 11.5 L13 4.5" />
                      </svg>,
                      "Entregas por etapas",
                    ]}
                  />
                  <PlanCheck
                    s={[
                      <svg
                        key="k0"
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        style={{ flex: "none" }}
                      >
                        <path d="M3 8 L6.5 11.5 L13 4.5" />
                      </svg>,
                      "Paneles y reportes",
                    ]}
                  />
                  <PlanCheck
                    s={[
                      <svg
                        key="k0"
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        style={{ flex: "none" }}
                      >
                        <path d="M3 8 L6.5 11.5 L13 4.5" />
                      </svg>,
                      "Integraciones incluidas",
                    ]}
                  />
                </div>
                <div style={{ marginTop: "auto" }}>
                  <Link
                    href="/contacto"
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
                      color: "#14171c",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,.18), 0 1px 2px rgba(0,0,0,.25)",
                    }}
                  >
                    Pedir presupuesto
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
              <PricingPlan
                s={[
                  "ACOMPAÑAMIENTO",
                  "USD 600/mes",
                  "Mejoras y soporte continuo",
                  "Plazo típico: ",
                  "Mensual",
                  <svg
                    key="k5"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#1b1d21"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ flex: "none" }}
                  >
                    <path d="M3 8 L6.5 11.5 L13 4.5" />
                  </svg>,
                  "Soporte con respuesta rápida",
                  <svg
                    key="k7"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#1b1d21"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ flex: "none" }}
                  >
                    <path d="M3 8 L6.5 11.5 L13 4.5" />
                  </svg>,
                  "Ajustes y nuevas funciones",
                  <svg
                    key="k9"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#1b1d21"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ flex: "none" }}
                  >
                    <path d="M3 8 L6.5 11.5 L13 4.5" />
                  </svg>,
                  "Respaldos verificados",
                  "/contacto",
                  "Pedir presupuesto",
                  <svg
                    key="k13"
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
            </div>
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
            RANGOS DE EJEMPLO · REEMPLAZAR POR LOS REALES
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
                Cómo se paga
              </h2>
            </div>
          </div>
          <div style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            <PaymentStep s={["PASO 01", "30%", "Al empezar", "Con la propuesta aprobada, arrancamos."]} />
            <PaymentStep s={["PASO 02", "40%", "Por entregas", "A medida que vas recibiendo piezas funcionando."]} />
            <PaymentStep s={["PASO 03", "30%", "Al cerrar", "Cuando todo está en marcha y tu equipo capacitado."]} />
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
            PORCENTAJES DE EJEMPLO
          </div>
        </div>
      </div>
      <div style={{ height: "10px" }}></div>
      <FaqSection />
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
                Pedí un presupuesto sin compromiso
              </h2>
              <p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.55", color: "#aab0b9" }}>
                Contanos qué necesitás y te respondemos con un plan y un rango.
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
