/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"
import { BeforeAfter, BuildCard, LayerBenefit, LayerCard } from "@/components/site/parts"

export const metadata: Metadata = {
  title: "Arquitectura",
  description: "La arquitectura detrás de tu sistema, capa por capa.",
}

export default function Page() {
  return (
    <>
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          background: "#fafafa",
          borderLeft: "1px solid #e6e8eb",
          borderRight: "1px solid #e6e8eb",
        }}
      >
        <div style={{ padding: "84px 64px 0" }}>
          <span
            style={{
              display: "inline-flex",
              padding: "6px 14px",
              border: "1px solid #dfe2e6",
              borderRadius: "999px",
              background: "#fff",
              fontSize: "13px",
              color: "#1f2937",
            }}
          >
            Arquitectura
          </span>
          <h2
            style={{
              margin: "22px 0 0",
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: "400",
              fontSize: "52px",
              lineHeight: "1.04",
              letterSpacing: "-0.015em",
              color: "#14171c",
              maxWidth: "1000px",
              textWrap: "balance",
            }}
          >
            La arquitectura detrás de tu sistema
          </h2>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <p style={{ margin: "0", maxWidth: "700px", fontSize: "17px", lineHeight: "1.55", color: "#7b828c", textWrap: "pretty" }}>
              Un sistema armado como un circuito integrado: seis capas bien separadas para probar, cambiar y escalar cada parte sin tocar el
              resto.
            </p>
            <Link
              href="/arquitectura"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 16px",
                background: "#0b0b0a",
                color: "#fff",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Ver cómo lo armamos
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                aria-hidden="true"
                fill="none"
                stroke="#fff"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 7H12 M8 3 L12 7 L8 11" />
              </svg>
            </Link>
          </div>
        </div>
        <div
          className="arq-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr minmax(0, 600px) 1fr",
            gap: "0 28px",
            padding: "56px 64px 40px",
            alignItems: "stretch",
          }}
        >
          <div className="arq-col" style={{ position: "relative" }}>
            <div
              className="arq-l"
              style={{ position: "absolute", top: "17.8%", left: "0", width: "100%", transform: "translateY(-50%)", textAlign: "left" }}
            >
              <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#1f2937" }}>
                <b style={{ fontWeight: "500" }}>Interfaz</b>{" "}
                <span style={{ color: "#7b828c" }}>
                  - Lo que ve y toca tu equipo o tu cliente: paneles, portales y apps con diseño cuidado.
                </span>
              </div>
            </div>
            <div
              className="arq-l"
              style={{ position: "absolute", top: "41.5%", left: "0", width: "100%", transform: "translateY(-50%)", textAlign: "left" }}
            >
              <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#1f2937" }}>
                <b style={{ fontWeight: "500" }}>Flujo de datos</b>{" "}
                <span style={{ color: "#7b828c" }}>
                  - Cómo viaja la información entre pantallas, servicios y bases, sin cuellos de botella.
                </span>
              </div>
            </div>
            <div
              className="arq-l"
              style={{ position: "absolute", top: "65.1%", left: "0", width: "100%", transform: "translateY(-50%)", textAlign: "left" }}
            >
              <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#1f2937" }}>
                <b style={{ fontWeight: "500" }}>Seguridad y respaldo</b>{" "}
                <span style={{ color: "#7b828c" }}>- Accesos por rol, cifrado y copias automáticas para que nada se pierda.</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/art/5251f364.svg"
              alt="Ilustración isométrica de un circuito integrado desarmado en seis capas"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
          <div className="arq-col" style={{ position: "relative" }}>
            <div
              className="arq-l"
              style={{ position: "absolute", top: "29.6%", left: "0", width: "100%", transform: "translateY(-50%)", textAlign: "left" }}
            >
              <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#1f2937" }}>
                <b style={{ fontWeight: "500" }}>API e integraciones</b>{" "}
                <span style={{ color: "#7b828c" }}>
                  - El punto de encuentro con los demás sistemas y servicios que ya usas, con contratos claros y documentados.
                </span>
              </div>
            </div>
            <div
              className="arq-l"
              style={{ position: "absolute", top: "53.3%", left: "0", width: "100%", transform: "translateY(-50%)", textAlign: "left" }}
            >
              <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#1f2937" }}>
                <b style={{ fontWeight: "500" }}>Lógica de negocio</b>{" "}
                <span style={{ color: "#7b828c" }}>- Las reglas de tu operación, en código legible y cubiertas por tests.</span>
              </div>
            </div>
            <div
              className="arq-l"
              style={{ position: "absolute", top: "77.0%", left: "0", width: "100%", transform: "translateY(-50%)", textAlign: "left" }}
            >
              <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#1f2937" }}>
                <b style={{ fontWeight: "500" }}>Infraestructura</b>{" "}
                <span style={{ color: "#7b828c" }}>- Contenedores, despliegue automático y monitoreo en la nube o en tus servidores.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="arq-mob" style={{ display: "none", padding: "0 24px 32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <LayerCard s={["01", "Interfaz", "— Lo que ve y toca tu equipo o tu cliente: paneles, portales y apps con diseño cuidado."]} />
            <LayerCard
              s={[
                "02",
                "API e integraciones",
                "— El punto de encuentro con los demás sistemas y servicios que ya usas, con contratos claros y documentados.",
              ]}
            />
            <LayerCard
              s={["03", "Flujo de datos", "— Cómo viaja la información entre pantallas, servicios y bases, sin cuellos de botella."]}
            />
            <LayerCard s={["04", "Lógica de negocio", "— Las reglas de tu operación, en código legible y cubiertas por tests."]} />
            <LayerCard s={["05", "Seguridad y respaldo", "— Accesos por rol, cifrado y copias automáticas para que nada se pierda."]} />
            <LayerCard s={["06", "Infraestructura", "— Contenedores, despliegue automático y monitoreo en la nube o en tus servidores."]} />
          </div>
        </div>
        <div
          style={{
            position: "relative",
            margin: "24px 40px 0",
            height: "320px",
            border: "1px solid #e6e8eb",
            borderRadius: "4px",
            overflow: "hidden",
            background: "#fff",
          }}
        >
          <img
            src="/art/dbbf626b.svg"
            alt=""
            style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
            aria-hidden="true"
          />
          <div
            style={{
              position: "absolute",
              left: "32px",
              top: "24px",
              fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              fontSize: "11.5px",
              letterSpacing: ".08em",
              color: "#8b929c",
            }}
          >
            01 → 06 · CAPA POR CAPA
          </div>
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              bottom: "0",
              padding: "36px 32px 28px",
              background: "linear-gradient(to top, rgba(255,255,255,.96) 35%, rgba(255,255,255,0))",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontSize: "54px",
                lineHeight: "1",
                color: "#6b7280",
              }}
            >
              Capas claras.
            </div>
            <div
              style={{
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontSize: "54px",
                lineHeight: "1",
                color: "#14171c",
              }}
            >
              Cambios sin miedo.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 64px", padding: "72px 64px 56px" }}>
          <div style={{ flex: "1 1 280px" }}>
            <h3
              style={{
                margin: "0",
                fontSize: "28px",
                lineHeight: "1.2",
                fontWeight: "400",
                letterSpacing: "-0.02em",
                color: "#14171c",
                maxWidth: "320px",
                textWrap: "balance",
              }}
            >
              Qué cuidamos en cada proyecto
            </h3>
            <p style={{ margin: "14px 0 0", fontSize: "14px", lineHeight: "1.6", color: "#7b828c", maxWidth: "300px" }}>
              Un buen software se nota cuando crece el negocio y nada se rompe.
            </p>
          </div>
          <div style={{ flex: "1 1 420px" }}>
            <LayerBenefit
              s={[
                "01",
                "Cambios sin romper nada",
                "Cada parte se prueba por separado, así una mejora en la pantalla no toca tus datos.",
                <svg
                  key="k3"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 2 L14 13 H2 Z M8 6.5 V9.5 M8 11.3 V11.4" />
                </svg>,
              ]}
            />
            <LayerBenefit
              s={[
                "02",
                "Escala cuando lo necesitás",
                "Empezamos simple y sumamos capacidad (más servidores, más usuarios) sin reescribir.",
                <svg
                  key="k3"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="8" cy="8" r="2.4" />
                  <path d="M1.5 8 C3.5 4.5 5.5 3.5 8 3.5 C10.5 3.5 12.5 4.5 14.5 8 C12.5 11.5 10.5 12.5 8 12.5 C5.5 12.5 3.5 11.5 1.5 8 Z" />
                </svg>,
              ]}
            />
            <LayerBenefit
              s={[
                "03",
                "Documentado y acompañado",
                "Entregamos documentación y diagramas, y te acompañamos para que el sistema siga funcionando bien.",
                <svg
                  key="k3"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 1.5 L14 4 V8 C14 11 11.5 13.5 8 14.5 C4.5 13.5 2 11 2 8 V4 Z" />
                </svg>,
              ]}
            />
            <LayerBenefit
              s={[
                "04",
                "Evoluciona con el negocio",
                "Las piezas se reemplazan de a una cuando cambian las necesidades o la tecnología.",
                <svg
                  key="k3"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="8" cy="8" r="6" />
                  <path d="M8 4.5 V8 L10.5 9.5" />
                </svg>,
              ]}
            />
          </div>
        </div>
        <div style={{ padding: "72px 64px 40px", borderTop: "1px solid #e6e8eb" }}>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              fontSize: "11.5px",
              letterSpacing: ".08em",
              color: "#8b929c",
            }}
          >
            CÓMO LO CONSTRUIMOS
          </div>
          <h3
            style={{
              margin: "14px 0 0",
              fontSize: "28px",
              lineHeight: "1.2",
              fontWeight: "400",
              letterSpacing: "-0.02em",
              maxWidth: "620px",
              textWrap: "balance",
            }}
          >
            Cada capa de tu sistema, construida para durar
          </h3>
          <p style={{ margin: "12px 0 0", maxWidth: "520px", fontSize: "14.5px", lineHeight: "1.6", color: "#7b828c" }}>
            Software pensado para durar: tecnologías probadas, sin dependencias ocultas y con cuidado en cada detalle.
          </p>
        </div>
        <div
          style={{
            margin: "0 64px 48px",
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: "minmax(260px, auto)",
            gap: "14px",
          }}
          className="bento bento-stack"
        >
          <div
            style={{
              gridColumn: "1 / span 4",
              gridRow: "1",
              position: "relative",
              overflow: "hidden",
              background: "#fff",
              border: "1px solid #e6e8eb",
              borderRadius: "18px",
              padding: "26px 28px 24px",
              display: "flex",
              flexDirection: "column",
              minHeight: "260px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "0",
                opacity: ".5",
                pointerEvents: "none",
                WebkitMaskImage: "radial-gradient(ellipse 62% 70% at 100% 100%, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 62% 70% at 100% 100%, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%)",
              }}
            >
              <img
                src="/art/d91d4e7c.svg"
                alt=""
                style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
                aria-hidden="true"
              />
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                fontSize: "11.5px",
                letterSpacing: ".06em",
                color: "#7b828c",
              }}
            >
              <span>01</span>
              <span style={{ width: "18px", height: "1px", background: "#e6e8eb" }}></span>
              <span style={{ textTransform: "uppercase" }}>Interfaz</span>
            </div>
            <div
              style={{
                position: "relative",
                marginTop: "16px",
                maxWidth: "520px",
                fontSize: "30px",
                lineHeight: "1.18",
                letterSpacing: "-0.02em",
                color: "#14171c",
                textWrap: "balance",
              }}
            >
              Tu equipo aprende el sistema en un día.
            </div>
            <p
              style={{
                position: "relative",
                margin: "12px 0 0",
                maxWidth: "440px",
                fontSize: "14.5px",
                lineHeight: "1.6",
                color: "#7b828c",
                textWrap: "pretty",
              }}
            >
              Paneles, portales y apps pensados para quien los usa todos los días, con un diseño consistente en cada pantalla.
            </p>
          </div>
          <div
            style={{
              gridColumn: "5 / span 2",
              gridRow: "1 / span 2",
              position: "relative",
              overflow: "hidden",
              background: "#14171c",
              border: "1px solid #14171c",
              borderRadius: "18px",
              padding: "26px 28px 24px",
              display: "flex",
              flexDirection: "column",
              minHeight: "260px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "0",
                opacity: ".5",
                pointerEvents: "none",
                WebkitMaskImage: "radial-gradient(ellipse 62% 70% at 100% 100%, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 62% 70% at 100% 100%, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%)",
              }}
            >
              <img
                src="/art/466780fe.svg"
                alt=""
                style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
                aria-hidden="true"
              />
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                fontSize: "11.5px",
                letterSpacing: ".06em",
                color: "#a3aab5",
              }}
            >
              <span>02</span>
              <span style={{ width: "18px", height: "1px", background: "rgba(255,255,255,.14)" }}></span>
              <span style={{ textTransform: "uppercase" }}>API e integraciones</span>
            </div>
            <div
              style={{
                position: "relative",
                marginTop: "16px",
                maxWidth: "520px",
                fontSize: "30px",
                lineHeight: "1.18",
                letterSpacing: "-0.02em",
                color: "#fff",
                textWrap: "balance",
              }}
            >
              Tus sistemas dejan de ser islas.
            </div>
            <p
              style={{
                position: "relative",
                margin: "12px 0 0",
                maxWidth: "440px",
                fontSize: "14.5px",
                lineHeight: "1.6",
                color: "#a3aab5",
                textWrap: "pretty",
              }}
            >
              Conectamos las herramientas que ya usas, con contratos claros para que cada cambio sea predecible.
            </p>
          </div>
          <div
            style={{
              gridColumn: "1 / span 2",
              gridRow: "2",
              position: "relative",
              overflow: "hidden",
              background: "#fff",
              border: "1px solid #e6e8eb",
              borderRadius: "18px",
              padding: "26px 28px 24px",
              display: "flex",
              flexDirection: "column",
              minHeight: "260px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "0",
                opacity: ".5",
                pointerEvents: "none",
                WebkitMaskImage: "radial-gradient(ellipse 62% 70% at 100% 100%, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 62% 70% at 100% 100%, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%)",
              }}
            >
              <img
                src="/art/7ead18da.svg"
                alt=""
                style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
                aria-hidden="true"
              />
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                fontSize: "11.5px",
                letterSpacing: ".06em",
                color: "#7b828c",
              }}
            >
              <span>03</span>
              <span style={{ width: "18px", height: "1px", background: "#e6e8eb" }}></span>
              <span style={{ textTransform: "uppercase" }}>Flujo de datos</span>
            </div>
            <div
              style={{
                position: "relative",
                marginTop: "16px",
                maxWidth: "520px",
                fontSize: "22px",
                lineHeight: "1.18",
                letterSpacing: "-0.02em",
                color: "#14171c",
                textWrap: "balance",
              }}
            >
              Un solo dato correcto, siempre al día.
            </div>
            <p
              style={{
                position: "relative",
                margin: "12px 0 0",
                maxWidth: "440px",
                fontSize: "14.5px",
                lineHeight: "1.6",
                color: "#7b828c",
                textWrap: "pretty",
              }}
            >
              La información viaja entre pantallas, servicios y bases sin duplicarse ni quedar desactualizada.
            </p>
          </div>
          <div
            style={{
              gridColumn: "3 / span 2",
              gridRow: "2",
              position: "relative",
              overflow: "hidden",
              background: "#fff",
              border: "1px solid #e6e8eb",
              borderRadius: "18px",
              padding: "26px 28px 24px",
              display: "flex",
              flexDirection: "column",
              minHeight: "260px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "0",
                opacity: ".5",
                pointerEvents: "none",
                WebkitMaskImage: "radial-gradient(ellipse 62% 70% at 100% 100%, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 62% 70% at 100% 100%, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%)",
              }}
            >
              <img
                src="/art/093747b5.svg"
                alt=""
                style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
                aria-hidden="true"
              />
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                fontSize: "11.5px",
                letterSpacing: ".06em",
                color: "#7b828c",
              }}
            >
              <span>04</span>
              <span style={{ width: "18px", height: "1px", background: "#e6e8eb" }}></span>
              <span style={{ textTransform: "uppercase" }}>Lógica de negocio</span>
            </div>
            <div
              style={{
                position: "relative",
                marginTop: "16px",
                maxWidth: "520px",
                fontSize: "22px",
                lineHeight: "1.18",
                letterSpacing: "-0.02em",
                color: "#14171c",
                textWrap: "balance",
              }}
            >
              Tus reglas de negocio, en código y no en la cabeza de alguien.
            </div>
            <p
              style={{
                position: "relative",
                margin: "12px 0 0",
                maxWidth: "440px",
                fontSize: "14.5px",
                lineHeight: "1.6",
                color: "#7b828c",
                textWrap: "pretty",
              }}
            >
              Lo que hoy depende de planillas y de memoria queda escrito, legible y verificado.
            </p>
          </div>
          <div
            style={{
              gridColumn: "1 / span 3",
              gridRow: "3",
              position: "relative",
              overflow: "hidden",
              background: "#fff",
              border: "1px solid #e6e8eb",
              borderRadius: "18px",
              padding: "26px 28px 24px",
              display: "flex",
              flexDirection: "column",
              minHeight: "260px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "0",
                opacity: ".5",
                pointerEvents: "none",
                WebkitMaskImage: "radial-gradient(ellipse 62% 70% at 100% 100%, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 62% 70% at 100% 100%, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%)",
              }}
            >
              <img
                src="/art/3f9cfe07.svg"
                alt=""
                style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
                aria-hidden="true"
              />
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                fontSize: "11.5px",
                letterSpacing: ".06em",
                color: "#7b828c",
              }}
            >
              <span>05</span>
              <span style={{ width: "18px", height: "1px", background: "#e6e8eb" }}></span>
              <span style={{ textTransform: "uppercase" }}>Seguridad y respaldo</span>
            </div>
            <div
              style={{
                position: "relative",
                marginTop: "16px",
                maxWidth: "520px",
                fontSize: "22px",
                lineHeight: "1.18",
                letterSpacing: "-0.02em",
                color: "#14171c",
                textWrap: "balance",
              }}
            >
              Cada persona ve lo que debe. Nada se pierde.
            </div>
            <p
              style={{
                position: "relative",
                margin: "12px 0 0",
                maxWidth: "440px",
                fontSize: "14.5px",
                lineHeight: "1.6",
                color: "#7b828c",
                textWrap: "pretty",
              }}
            >
              Accesos por rol, información cifrada y copias automáticas que se verifican de verdad.
            </p>
          </div>
          <div
            style={{
              gridColumn: "4 / span 3",
              gridRow: "3",
              position: "relative",
              overflow: "hidden",
              background: "#fff",
              border: "1px solid #e6e8eb",
              borderRadius: "18px",
              padding: "26px 28px 24px",
              display: "flex",
              flexDirection: "column",
              minHeight: "260px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "0",
                opacity: ".5",
                pointerEvents: "none",
                WebkitMaskImage: "radial-gradient(ellipse 62% 70% at 100% 100%, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 62% 70% at 100% 100%, #000 0%, rgba(0,0,0,.55) 45%, transparent 100%)",
              }}
            >
              <img
                src="/art/44b0c991.svg"
                alt=""
                style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
                aria-hidden="true"
              />
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                fontSize: "11.5px",
                letterSpacing: ".06em",
                color: "#7b828c",
              }}
            >
              <span>06</span>
              <span style={{ width: "18px", height: "1px", background: "#e6e8eb" }}></span>
              <span style={{ textTransform: "uppercase" }}>Infraestructura</span>
            </div>
            <div
              style={{
                position: "relative",
                marginTop: "16px",
                maxWidth: "520px",
                fontSize: "30px",
                lineHeight: "1.18",
                letterSpacing: "-0.02em",
                color: "#14171c",
                textWrap: "balance",
              }}
            >
              Se publica sin pasos manuales y sin frenar la operación.
            </div>
            <p
              style={{
                position: "relative",
                margin: "12px 0 0",
                maxWidth: "440px",
                fontSize: "14.5px",
                lineHeight: "1.6",
                color: "#7b828c",
                textWrap: "pretty",
              }}
            >
              Entornos reproducibles y despliegue automático, en la nube o en tus propios servidores.
            </p>
          </div>
        </div>
        <div style={{ padding: "56px 64px 24px" }}>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              fontSize: "11.5px",
              letterSpacing: ".08em",
              color: "#8b929c",
            }}
          >
            QUÉ CONSTRUIMOS
          </div>
          <h3
            style={{
              margin: "14px 0 0",
              fontSize: "28px",
              lineHeight: "1.2",
              fontWeight: "400",
              letterSpacing: "-0.02em",
              maxWidth: "560px",
              textWrap: "balance",
            }}
          >
            Software hecho para cómo trabaja tu empresa
          </h3>
          <p style={{ margin: "12px 0 28px", maxWidth: "520px", fontSize: "14.5px", lineHeight: "1.6", color: "#7b828c" }}>
            Desde un sistema completo hasta una integración puntual: empezamos por lo que más te duele.
          </p>
          <BuildCard
            s={[
              "01",
              "Sistemas de gestión a medida",
              "Tus procesos clave en un solo lugar, con los pasos de tu operación y no los de un paquete genérico.",
              "Operación",
            ]}
          />
          <BuildCard
            s={[
              "02",
              "Portales para clientes y proveedores",
              "Un espacio propio donde consultan, piden y hacen seguimiento sin llamar ni escribir mails.",
              "Autogestión",
            ]}
          />
          <BuildCard
            s={[
              "03",
              "Integraciones y automatización",
              "Conectamos tus sistemas y servicios para que los datos no se carguen dos veces.",
              "Conexión",
            ]}
          />
          <BuildCard
            s={[
              "04",
              "Paneles e indicadores",
              "Los números de tu negocio, claros y al día, para decidir con datos y no con intuición.",
              "Decisiones",
            ]}
          />
          <BuildCard
            s={[
              "05",
              "Apps internas y móviles",
              "Herramientas simples para el equipo en campo, en planta o en mostrador, también sin conexión.",
              "Equipo",
            ]}
          />
          <BuildCard
            s={[
              "06",
              "Modernización de sistemas existentes",
              "Ordenamos, migramos y damos nueva vida a lo que ya funciona, sin parar tu operación.",
              "Evolución",
            ]}
          />
          <div style={{ borderTop: "1px dashed #c9ced4" }}></div>
        </div>
        <div style={{ padding: "40px 64px 24px" }}>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              fontSize: "11.5px",
              letterSpacing: ".08em",
              color: "#8b929c",
            }}
          >
            SITUACIONES TÍPICAS
          </div>
          <h3
            style={{
              margin: "14px 0 0",
              fontSize: "28px",
              lineHeight: "1.2",
              fontWeight: "400",
              letterSpacing: "-0.02em",
              maxWidth: "560px",
              textWrap: "balance",
            }}
          >
            Problemas de todos los días que resolvemos
          </h3>
          <div style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            <BeforeAfter
              s={[
                "ANTES",
                "Pedidos por WhatsApp y planillas",
                <svg
                  key="k2"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="#2f5bea"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 7H12 M8 3 L12 7 L8 11" />
                </svg>,
                "DESPUÉS",
                "Un portal donde el cliente pide y ve el estado, y el equipo recibe todo ordenado.",
              ]}
            />
            <BeforeAfter
              s={[
                "ANTES",
                "Datos cargados dos veces",
                <svg
                  key="k2"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="#2f5bea"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 7H12 M8 3 L12 7 L8 11" />
                </svg>,
                "DESPUÉS",
                "Tus sistemas conectados: se carga una vez y aparece en todos lados.",
              ]}
            />
            <BeforeAfter
              s={[
                "ANTES",
                "Reportes armados a mano cada mes",
                <svg
                  key="k2"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="#2f5bea"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 7H12 M8 3 L12 7 L8 11" />
                </svg>,
                "DESPUÉS",
                "Un panel que se actualiza solo y muestra lo importante al abrirlo.",
              ]}
            />
          </div>
        </div>
        <div style={{ padding: "56px 64px 24px" }}>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              fontSize: "11.5px",
              letterSpacing: ".08em",
              color: "#8b929c",
            }}
          >
            RESULTADOS
          </div>
          <h3
            style={{
              margin: "14px 0 0",
              fontSize: "28px",
              lineHeight: "1.2",
              fontWeight: "400",
              letterSpacing: "-0.02em",
              maxWidth: "560px",
              textWrap: "balance",
            }}
          >
            Así se ven las mejoras en tu operación
          </h3>
          <p style={{ margin: "12px 0 0", maxWidth: "520px", fontSize: "14.5px", lineHeight: "1.6", color: "#7b828c" }}>
            Ejemplos ilustrativos del tipo de impacto que buscamos; los números reales dependen de cada proyecto.
          </p>
          <div className="bento bento-stack" style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "14px" }}>
            <div
              style={{
                gridColumn: "1 / span 3",
                background: "#fff",
                border: "1px solid #e6e8eb",
                borderRadius: "18px",
                padding: "24px 24px 18px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "11px",
                  letterSpacing: ".06em",
                  color: "#7b828c",
                }}
              >
                <span>TAREAS MANUALES</span>
                <span style={{ padding: "3px 8px", borderRadius: "999px", background: "#eff6ff", color: "#1d4ed8" }}>▼ EJEMPLO</span>
              </div>
              <div style={{ marginTop: "14px", fontSize: "44px", lineHeight: "1", letterSpacing: "-0.03em", color: "#14171c" }}>−60%</div>
              <p style={{ margin: "8px 0 0", fontSize: "13.5px", lineHeight: "1.5", color: "#7b828c" }}>
                Menos horas en cargas repetidas y planillas.
              </p>
              <div style={{ marginTop: "auto", paddingTop: "18px" }}>
                <svg viewBox="0 0 500 150" width="100%" style={{ display: "block", height: "auto" }} aria-hidden="true">
                  <text
                    x="0"
                    y="18"
                    fontSize="10.5"
                    letterSpacing=".8"
                    fill="#9aa1ab"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    ANTES
                  </text>
                  <text
                    x="500"
                    y="18"
                    textAnchor="end"
                    fontSize="12"
                    fill="#4b5563"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    32 h por semana
                  </text>
                  <rect x="0" y="27" width="500" height="20" rx="10" fill="#f1f2f4" />
                  <rect x="0" y="27" width="500.0" height="20" rx="10" fill="#cfd4da" />
                  <text
                    x="0"
                    y="76"
                    fontSize="10.5"
                    letterSpacing=".8"
                    fill="#9aa1ab"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    DESPUÉS
                  </text>
                  <text
                    x="500"
                    y="76"
                    textAnchor="end"
                    fontSize="12"
                    fill="#2f5bea"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    13 h por semana
                  </text>
                  <rect x="0" y="85" width="500" height="20" rx="10" fill="#f1f2f4" />
                  <rect x="0" y="85" width="203.1" height="20" rx="10" fill="#2f5bea" />
                  <text
                    x="500"
                    y="146"
                    textAnchor="end"
                    fontSize="11"
                    fill="#2f5bea"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    19 h liberadas por semana
                  </text>
                </svg>
              </div>
            </div>
            <div
              style={{
                gridColumn: "4 / span 3",
                background: "#14171c",
                border: "1px solid #14171c",
                borderRadius: "18px",
                padding: "24px 24px 18px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "11px",
                  letterSpacing: ".06em",
                  color: "#a3aab5",
                }}
              >
                <span>PEDIDOS GESTIONADOS</span>
                <span style={{ padding: "3px 8px", borderRadius: "999px", background: "rgba(59,130,246,.18)", color: "#93c5fd" }}>
                  ▲ EJEMPLO
                </span>
              </div>
              <div style={{ marginTop: "14px", fontSize: "44px", lineHeight: "1", letterSpacing: "-0.03em", color: "#fff" }}>+3×</div>
              <p style={{ margin: "8px 0 0", fontSize: "13.5px", lineHeight: "1.5", color: "#a3aab5" }}>
                Más volumen atendido con el mismo equipo.
              </p>
              <div style={{ marginTop: "auto", paddingTop: "18px" }}>
                <img src="/art/92fe5c06.svg" alt="" style={{ width: "100%", display: "block", height: "auto" }} aria-hidden="true" />
              </div>
            </div>
            <div
              style={{
                gridColumn: "1 / span 2",
                background: "#fff",
                border: "1px solid #e6e8eb",
                borderRadius: "18px",
                padding: "24px 24px 18px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "11px",
                  letterSpacing: ".06em",
                  color: "#7b828c",
                }}
              >
                <span>DATOS EN UN SOLO LUGAR</span>
                <span style={{ padding: "3px 8px", borderRadius: "999px", background: "#eff6ff", color: "#1d4ed8" }}>▲ EJEMPLO</span>
              </div>
              <div style={{ marginTop: "14px", fontSize: "44px", lineHeight: "1", letterSpacing: "-0.03em", color: "#14171c" }}>94%</div>
              <p style={{ margin: "8px 0 0", fontSize: "13.5px", lineHeight: "1.5", color: "#7b828c" }}>
                De la información, centralizada y sin duplicados.
              </p>
              <div style={{ marginTop: "auto", paddingTop: "18px" }}>
                <svg viewBox="0 0 312 150" width="100%" style={{ display: "block", height: "auto" }} aria-hidden="true">
                  <circle cx="72" cy="75" r="52" fill="none" stroke="#eef0f3" strokeWidth="14" />
                  <circle
                    cx="72"
                    cy="75"
                    r="52"
                    fill="none"
                    stroke="#2f5bea"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray="301.1 326.7"
                    transform="rotate(-90 72 75)"
                  />
                  <text
                    x="72"
                    y="79"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#7b828c"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    centralizado
                  </text>
                  <circle cx="162" cy="54" r="4.5" fill="#2f5bea" />
                  <text x="176" y="58" fontSize="12.5" fill="#4b5563" style={{ fontFamily: "Geist, sans-serif" }}>
                    Centralizado
                  </text>
                  <text
                    x="312"
                    y="58"
                    textAnchor="end"
                    fontSize="12.5"
                    fill="#14171c"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    94%
                  </text>
                  <circle cx="162" cy="88" r="4.5" fill="#d1d5db" />
                  <text x="176" y="92" fontSize="12.5" fill="#4b5563" style={{ fontFamily: "Geist, sans-serif" }}>
                    Pendiente
                  </text>
                  <text
                    x="312"
                    y="92"
                    textAnchor="end"
                    fontSize="12.5"
                    fill="#14171c"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    6%
                  </text>
                </svg>
              </div>
            </div>
            <div
              style={{
                gridColumn: "3 / span 2",
                background: "#fff",
                border: "1px solid #e6e8eb",
                borderRadius: "18px",
                padding: "24px 24px 18px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "11px",
                  letterSpacing: ".06em",
                  color: "#7b828c",
                }}
              >
                <span>ERRORES POR MES</span>
                <span style={{ padding: "3px 8px", borderRadius: "999px", background: "#eff6ff", color: "#1d4ed8" }}>▼ EJEMPLO</span>
              </div>
              <div style={{ marginTop: "14px", fontSize: "44px", lineHeight: "1", letterSpacing: "-0.03em", color: "#14171c" }}>−85%</div>
              <p style={{ margin: "8px 0 0", fontSize: "13.5px", lineHeight: "1.5", color: "#7b828c" }}>Menos correcciones y retrabajo.</p>
              <div style={{ marginTop: "auto", paddingTop: "18px" }}>
                <svg viewBox="0 0 312 150" width="100%" style={{ display: "block", height: "auto" }} aria-hidden="true">
                  <line x1="22" y1="126.0" x2="312" y2="126.0" stroke="#eef0f3" />
                  <line x1="22" y1="75.0" x2="312" y2="75.0" stroke="#eef0f3" />
                  <line x1="22" y1="24.0" x2="312" y2="24.0" stroke="#eef0f3" />
                  <rect x="22.0" y="32.2" width="26" height="93.8" rx="7" fill="#dbeafe" />
                  <text
                    x="35.0"
                    y="144"
                    textAnchor="middle"
                    fontSize="9.5"
                    fill="#9aa1ab"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    E
                  </text>
                  <rect x="66.0" y="44.4" width="26" height="81.6" rx="7" fill="#dbeafe" />
                  <text
                    x="79.0"
                    y="144"
                    textAnchor="middle"
                    fontSize="9.5"
                    fill="#9aa1ab"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    F
                  </text>
                  <rect x="110.0" y="56.6" width="26" height="69.4" rx="7" fill="#dbeafe" />
                  <text
                    x="123.0"
                    y="144"
                    textAnchor="middle"
                    fontSize="9.5"
                    fill="#9aa1ab"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    M
                  </text>
                  <rect x="154.0" y="70.9" width="26" height="55.1" rx="7" fill="#dbeafe" />
                  <text
                    x="167.0"
                    y="144"
                    textAnchor="middle"
                    fontSize="9.5"
                    fill="#9aa1ab"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    A
                  </text>
                  <rect x="198.0" y="85.2" width="26" height="40.8" rx="7" fill="#dbeafe" />
                  <text
                    x="211.0"
                    y="144"
                    textAnchor="middle"
                    fontSize="9.5"
                    fill="#9aa1ab"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    M
                  </text>
                  <rect x="242.0" y="99.5" width="26" height="26.5" rx="7" fill="#dbeafe" />
                  <text
                    x="255.0"
                    y="144"
                    textAnchor="middle"
                    fontSize="9.5"
                    fill="#9aa1ab"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    J
                  </text>
                  <rect x="286.0" y="111.7" width="26" height="14.3" rx="7" fill="#2f5bea" />
                  <text
                    x="299.0"
                    y="144"
                    textAnchor="middle"
                    fontSize="9.5"
                    fill="#9aa1ab"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    J
                  </text>
                  <text
                    x="299.0"
                    y="104.7"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#2f5bea"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    7
                  </text>
                  <text
                    x="35.0"
                    y="25.2"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#9aa1ab"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    46
                  </text>
                </svg>
              </div>
            </div>
            <div
              style={{
                gridColumn: "5 / span 2",
                background: "#14171c",
                border: "1px solid #14171c",
                borderRadius: "18px",
                padding: "24px 24px 18px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "11px",
                  letterSpacing: ".06em",
                  color: "#a3aab5",
                }}
              >
                <span>TIEMPO DE RESPUESTA</span>
                <span style={{ padding: "3px 8px", borderRadius: "999px", background: "rgba(59,130,246,.18)", color: "#93c5fd" }}>
                  ▼ EJEMPLO
                </span>
              </div>
              <div style={{ marginTop: "14px", fontSize: "44px", lineHeight: "1", letterSpacing: "-0.03em", color: "#fff" }}>
                2 h → 5 min
              </div>
              <p style={{ margin: "8px 0 0", fontSize: "13.5px", lineHeight: "1.5", color: "#a3aab5" }}>
                De pedido a respuesta, de punta a punta.
              </p>
              <div style={{ marginTop: "auto", paddingTop: "18px" }}>
                <svg viewBox="0 0 312 150" width="100%" style={{ display: "block", height: "auto" }} aria-hidden="true">
                  <defs>
                    <linearGradient id="gs" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#3b82f6" stopOpacity=".3" />
                      <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <line x1="10" y1="118" x2="306" y2="118" stroke="rgba(255,255,255,.12)" />
                  <path
                    d="M10.0,25.8 C16.9,26.4 37.6,29.2 51.4,28.9 C65.2,28.7 79.0,21.2 92.9,24.3 C106.7,27.4 120.5,39.9 134.3,47.3 C148.1,54.8 161.9,62.2 175.7,68.8 C189.5,75.5 203.3,81.9 217.1,87.3 C231.0,92.7 244.8,96.6 258.6,101.1 C272.4,105.6 293.1,112.0 300.0,114.2 L300,118 L10,118 Z"
                    fill="url(#gs)"
                  />
                  <path
                    d="M10.0,25.8 C16.9,26.4 37.6,29.2 51.4,28.9 C65.2,28.7 79.0,21.2 92.9,24.3 C106.7,27.4 120.5,39.9 134.3,47.3 C148.1,54.8 161.9,62.2 175.7,68.8 C189.5,75.5 203.3,81.9 217.1,87.3 C231.0,92.7 244.8,96.6 258.6,101.1 C272.4,105.6 293.1,112.0 300.0,114.2"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <circle cx="10.0" cy="25.840000000000003" r="4" fill="#14171c" stroke="#9ca3af" strokeWidth="2" />
                  <text
                    x="10.0"
                    y="15.840000000000003"
                    fontSize="11"
                    fill="#9ca3af"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    2 h
                  </text>
                  <circle cx="300.0" cy="114.16" r="9" fill="#3b82f6" fillOpacity=".25" />
                  <circle cx="300.0" cy="114.16" r="4.5" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
                  <text
                    x="300.0"
                    y="100.16"
                    textAnchor="end"
                    fontSize="11"
                    fill="#93c5fd"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    5 min
                  </text>
                  <text x="10" y="142" fontSize="10" fill="#6b7280" style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}>
                    ANTES
                  </text>
                  <text
                    x="300"
                    y="142"
                    textAnchor="end"
                    fontSize="10"
                    fill="#6b7280"
                    style={{ fontFamily: "Geist Mono, ui-monospace, monospace" }}
                  >
                    DESPUÉS
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
