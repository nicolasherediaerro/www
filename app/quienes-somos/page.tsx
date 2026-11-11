/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"
import { HistoryStep, MetricStat, PrincipleCard, TeamCardA, TeamCardB, TeamCardC, TeamCardD } from "@/components/site/parts"

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: "Un estudio de software que habla tu idioma: sistemas a la medida de cómo trabaja cada empresa.",
}

export default function Page() {
  return (
    <>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "40px 0 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#9aa1ab" }}>
            <Link href="/quienes-somos" style={{ color: "#7b828c", textDecoration: "none" }}>
              Empresa
            </Link>
            <span>/</span>
            <Link href="/quienes-somos" style={{ color: "#7b828c", textDecoration: "none" }}>
              Quiénes somos
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
              maxWidth: "900px",
              textWrap: "balance",
            }}
          >
            Un estudio de software que habla tu idioma
          </h1>
          <p style={{ margin: "24px 0 0", maxWidth: "600px", fontSize: "20px", lineHeight: "1.5", color: "#6b7280" }}>
            Somos un equipo chico que arma sistemas a la medida de cómo trabaja cada empresa, y se queda a acompañarlas.
          </p>
        </div>
      </div>
      <div style={{ marginTop: "64px", position: "relative", height: "270px", overflow: "hidden" }}>
        <img src="/art/72f162ac.svg" alt="" style={{ width: "100%", height: "270px", display: "block" }} aria-hidden="true" />
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "100px 0 100px" }}>
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
                Cómo pensamos
              </h2>
              <p style={{ margin: "12px 0 0", fontSize: "16px", color: "#7b828c", maxWidth: "540px" }}>
                Cuatro ideas que guían cada proyecto.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
              <PrincipleCard
                s={["01", "Hablamos en tus palabras", "Sin tecnicismos. Si algo no se entiende, es nuestro trabajo explicarlo mejor."]}
              />
              <PrincipleCard
                s={["02", "De a una pieza", "Entregamos partes que funcionan desde temprano, para que opines con algo real en la mano."]}
              />
              <PrincipleCard
                s={["03", "Pensamos en el largo plazo", "Cada decisión busca que el sistema siga sirviendo cuando tu empresa crezca."]}
              />
              <PrincipleCard s={["04", "Nos quedamos después", "La entrega es el principio: acompañamos, medimos y seguimos mejorando."]} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 100px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0px",
              borderTop: "1px solid #1b1d21",
              paddingTop: "28px",
            }}
          >
            <MetricStat s={["7 años", "trabajando con empresas de la región"]} />
            <MetricStat s={["40+", "sistemas en uso hoy"]} />
            <MetricStat s={["1 día", "hábil para responder cada consulta"]} />
          </div>
          <div
            style={{
              marginTop: "16px",
              fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              fontSize: "10.5px",
              letterSpacing: ".06em",
              color: "#b0b6bf",
            }}
          >
            CIFRAS DE EJEMPLO · REEMPLAZAR POR DATOS REALES
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
                El equipo
              </h2>
              <p style={{ margin: "12px 0 0", fontSize: "16px", color: "#7b828c", maxWidth: "540px" }}>
                Las personas que van a trabajar con vos.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "28px 24px" }}>
              <TeamCardA s={["MA", "Martín Acosta", "Dirección"]} />
              <TeamCardB s={["LF", "Lucía Ferreira", "Producto y diseño"]} />
              <TeamCardC s={["JP", "Joaquín Pereira", "Desarrollo"]} />
              <TeamCardD s={["VS", "Valentina Silva", "Desarrollo"]} />
              <TeamCardA s={["AN", "Andrés Núñez", "Integraciones"]} />
              <TeamCardB s={["CR", "Camila Rossi", "Calidad y pruebas"]} />
              <TeamCardC s={["FD", "Federico Díaz", "Soporte"]} />
              <TeamCardD s={["SM", "Sofía Méndez", "Cuentas y proyectos"]} />
            </div>
          </div>
          <div
            style={{
              marginTop: "24px",
              fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              fontSize: "10.5px",
              letterSpacing: ".06em",
              color: "#b0b6bf",
            }}
          >
            NOMBRES DE EJEMPLO · REEMPLAZAR POR EL EQUIPO REAL
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 120px" }}>
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
                Nuestra historia
              </h2>
            </div>
          </div>
          <div style={{ marginTop: "48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
              <HistoryStep s={["2019", "Empezamos", "Dos personas y un primer cliente que necesitaba dejar las planillas."]} />
              <HistoryStep s={["2021", "Primer sistema propio", "Nace Relay, la base con la que armamos cada proyecto."]} />
              <HistoryStep s={["2023", "Crecemos el equipo", "Sumamos diseño, calidad y soporte para acompañar mejor."]} />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#3b82f6", flex: "none" }}></span>
                  <span style={{ flex: "1", borderTop: "1.5px dashed #9db8ff", display: "none" }}></span>
                </div>
                <div
                  style={{
                    marginTop: "16px",
                    fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                    fontWeight: "400",
                    letterSpacing: "-0.015em",
                    color: "#1b1d21",
                    fontSize: "40px",
                    lineHeight: "1",
                  }}
                >
                  2026
                </div>
                <div style={{ marginTop: "12px", fontSize: "16px", fontWeight: "500", color: "#1b1d21" }}>Hoy</div>
                <p style={{ margin: "8px 0 0", fontSize: "14.5px", lineHeight: "1.55", color: "#7b828c" }}>
                  Decenas de sistemas en uso, en empresas de distintos rubros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                Trabajemos juntos
              </h2>
              <p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.55", color: "#aab0b9" }}>
                Contanos qué necesitás resolver. Respondemos en un día hábil.
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
