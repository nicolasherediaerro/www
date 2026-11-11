/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"
import { AudienceCard, IncludeCard, OtherSolutionRow, PortalStep } from "@/components/site/parts"

export const metadata: Metadata = {
  title: "Portales para clientes y proveedores",
  description: "Un lugar propio para que clientes y proveedores vean sus pedidos, aprueben y consulten, sin llamadas ni correos.",
}

export default function Page() {
  return (
    <>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "40px 0 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#9aa1ab" }}>
            <Link href="/soluciones/portales" style={{ color: "#7b828c", textDecoration: "none" }}>
              Soluciones
            </Link>
            <span>/</span>
            <Link href="/soluciones/portales" style={{ color: "#7b828c", textDecoration: "none" }}>
              Portales
            </Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 64px", alignItems: "center", marginTop: "12px" }}>
            <div style={{ flex: "1 1 440px" }}>
              <div
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "10.5px",
                  letterSpacing: ".08em",
                  color: "#2f5bea",
                  marginTop: "24px",
                }}
              >
                SOLUCIÓN
              </div>
              <h1
                style={{
                  margin: "16px 0 0",
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  letterSpacing: "-0.02em",
                  color: "#1b1d21",
                  fontSize: "68px",
                  lineHeight: "1",
                  maxWidth: "640px",
                  textWrap: "balance",
                }}
              >
                Portales para clientes y proveedores
              </h1>
              <p style={{ margin: "24px 0 0", maxWidth: "500px", fontSize: "20px", lineHeight: "1.5", color: "#6b7280" }}>
                Dale a quienes trabajan con vos un lugar propio para ver sus pedidos, aprobar y consultar, sin llamadas ni correos.
              </p>
              <div style={{ marginTop: "36px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
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
                    background: "#1b1d21",
                    color: "#fff",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,.18), 0 1px 2px rgba(0,0,0,.25)",
                  }}
                >
                  Hablemos de tu portal
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
                  href="/casos"
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
                  Ver casos
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
            <div
              style={{
                flex: "1 1 460px",
                background: "#efeeea",
                borderRadius: "24px",
                padding: "40px 32px",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,.03)",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  boxShadow: "0 1px 2px rgba(0,0,0,.05), 0 24px 48px -24px rgba(20,23,28,.35)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 20px",
                    borderBottom: "1px solid #eceef1",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "500", color: "#1b1d21" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "5px", background: "#1b1d21" }}></span>
                    Portal Norvak
                  </div>
                  <span
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: "#dbe4fd",
                      color: "#1e3a8a",
                      fontSize: "11px",
                      fontWeight: "600",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    CR
                  </span>
                </div>
                <div style={{ padding: "24px 20px 8px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                      fontWeight: "400",
                      letterSpacing: "-0.015em",
                      color: "#1b1d21",
                      fontSize: "28px",
                      lineHeight: "1.1",
                    }}
                  >
                    Hola, Carla
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "13px", color: "#7b828c" }}>Tu pedido #2041 está en camino.</div>
                  <div style={{ marginTop: "20px", display: "flex", gap: "6px" }}>
                    <PortalStep s={["Recibido"]} />
                    <PortalStep s={["Preparando"]} />
                    <PortalStep s={["En camino"]} />
                    <div style={{ flex: "1" }}>
                      <div style={{ height: "4px", borderRadius: "2px", background: "#dbe4fd" }}></div>
                      <div style={{ marginTop: "8px", fontSize: "11.5px", color: "#9aa1ab" }}>Entregado</div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "20px 20px 22px" }}>
                  <div style={{ fontSize: "12px", color: "#9aa1ab", marginBottom: "4px" }}>Mis pedidos</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      padding: "13px 0",
                      borderTop: "1px solid #eceef1",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "13.5px", color: "#1b1d21" }}>Pedido #2041</div>
                      <div style={{ fontSize: "12px", color: "#9aa1ab", marginTop: "2px" }}>Entrega estimada: jueves</div>
                    </div>
                    <span style={{ fontSize: "12px", padding: "4px 10px", borderRadius: "999px", color: "#1d4ed8", background: "#eaf1fe" }}>
                      En camino
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      padding: "13px 0",
                      borderTop: "1px solid #eceef1",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "13.5px", color: "#1b1d21" }}>Pedido #2038</div>
                      <div style={{ fontSize: "12px", color: "#9aa1ab", marginTop: "2px" }}>Entregado el 04 nov</div>
                    </div>
                    <span style={{ fontSize: "12px", padding: "4px 10px", borderRadius: "999px", color: "#047857", background: "#e7f6ef" }}>
                      Entregado
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      padding: "13px 0",
                      borderTop: "1px solid #eceef1",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "13.5px", color: "#1b1d21" }}>Pedido #2033</div>
                      <div style={{ fontSize: "12px", color: "#9aa1ab", marginTop: "2px" }}>Esperando tu aprobación</div>
                    </div>
                    <span style={{ fontSize: "12px", padding: "4px 10px", borderRadius: "999px", color: "#b45309", background: "#fef3c7" }}>
                      Por aprobar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "110px 0 100px" }}>
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
                Para quién es
              </h2>
              <p style={{ margin: "12px 0 0", fontSize: "16px", color: "#7b828c", maxWidth: "540px" }}>
                Cuando tus clientes o proveedores necesitan información tuya todo el tiempo.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "44px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
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
                    <rect x="1.5" y="4.5" width="8" height="6" rx="1" />
                    <path d="M9.5 6.5 H12 L14.5 9 V10.5 H9.5" />
                    <circle cx="4.5" cy="11.5" r="1.3" />
                    <circle cx="11.5" cy="11.5" r="1.3" />
                  </svg>,
                  "Distribuidoras",
                  "Clientes que quieren saber dónde está su pedido.",
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
                    <path d="M3 8 L6.5 11.5 L13 4.5" />
                  </svg>,
                  "Estudios y servicios",
                  "Clientes que aprueban trabajos y piden cambios.",
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
                  "Proveedores",
                  "Quienes cargan entregas y consultan pagos y pedidos.",
                ]}
              />
            </div>
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
                Qué incluye
              </h2>
            </div>
          </div>
          <div style={{ marginTop: "52px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "52px 36px" }}>
            <IncludeCard
              s={[
                <svg
                  key="k0"
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
                  <circle cx="8" cy="5.5" r="2.5" />
                  <path d="M3 14 C3 10.8 5.2 9.5 8 9.5 C10.8 9.5 13 10.8 13 14" />
                </svg>,
                "Acceso por cliente",
                "Cada cliente ve solo lo suyo, con su propio usuario.",
              ]}
            />
            <IncludeCard
              s={[
                <svg
                  key="k0"
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
                  <circle cx="8" cy="8" r="6" />
                  <path d="M8 4.5 V8 L10.5 9.5" />
                </svg>,
                "Seguimiento de pedidos",
                "El estado de cada pedido, sin tener que llamar.",
              ]}
            />
            <IncludeCard
              s={[
                <svg
                  key="k0"
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
                  <path d="M4 2 H10 L13 5 V14 H4 Z M10 2 V5 H13" />
                </svg>,
                "Documentos y archivos",
                "Todo lo que necesitan descargar, en un solo lugar.",
              ]}
            />
            <IncludeCard
              s={[
                <svg
                  key="k0"
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
                "Aprobaciones online",
                "Aprueban o piden cambios sin imprimir ni escanear.",
              ]}
            />
            <IncludeCard
              s={[
                <svg
                  key="k0"
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
                  <path d="M4 11 V7 a4 4 0 0 1 8 0 V11 L13.5 12.5 H2.5 Z M6.5 14 H9.5" />
                </svg>,
                "Avisos automáticos",
                "Correo o mensaje cuando algo cambia.",
              ]}
            />
            <IncludeCard
              s={[
                <svg
                  key="k0"
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
                  <path d="M2.5 3.5 H13.5 V10.5 H7 L4 13 V10.5 H2.5 Z" />
                </svg>,
                "Mensajes en contexto",
                "Consultas atadas al pedido, no perdidas en el correo.",
              ]}
            />
            <IncludeCard
              s={[
                <svg
                  key="k0"
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
                  <rect x="2.5" y="2.5" width="11" height="11" rx="2" />
                  <circle cx="8" cy="8" r="2.2" />
                </svg>,
                "Con la imagen de tu empresa",
                "Tu logo, tus colores y tu dirección web.",
              ]}
            />
            <IncludeCard
              s={[
                <svg
                  key="k0"
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
                  <rect x="4.5" y="1.5" width="7" height="13" rx="1.5" />
                  <path d="M7 12.5 H9" />
                </svg>,
                "Pensado para el celular",
                "Se usa cómodo desde cualquier dispositivo.",
              ]}
            />
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 120px" }}>
          <div style={{ position: "relative", overflow: "hidden", background: "#0f1b4d", borderRadius: "24px", padding: "56px" }}>
            <div
              style={{
                position: "absolute",
                right: "-90px",
                top: "-70px",
                width: "460px",
                height: "260px",
                opacity: ".5",
                WebkitMaskImage: "radial-gradient(closest-side, #000 30%, transparent 100%)",
                maskImage: "radial-gradient(closest-side, #000 30%, transparent 100%)",
              }}
            >
              <img src="/art/4e520bb2.svg" alt="" style={{ width: "100%", height: "270px", display: "block" }} aria-hidden="true" />
            </div>
            <div style={{ position: "relative", color: "#fff" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", flex: "none" }}>
                <svg width="22" height="22" viewBox="0 0 18 18" aria-hidden="true">
                  <rect x="2" y="2" width="3.4" height="14" rx="1.2" fill="#fff" />
                  <rect x="7.3" y="2" width="3.4" height="14" rx="1.2" fill="#fff" />
                  <rect x="12.6" y="2" width="3.4" height="14" rx="1.2" fill="#fff" />
                </svg>
                <span style={{ fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", color: "#fff" }}>Tamira</span>
              </div>
            </div>
            <p
              style={{
                position: "relative",
                margin: "28px 0 0",
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: "400",
                letterSpacing: "-0.015em",
                color: "#fff",
                fontSize: "40px",
                lineHeight: "1.15",
                maxWidth: "780px",
                textWrap: "balance",
              }}
            >
              “Nuestros clientes dejaron de llamar para preguntar por sus pedidos. Ahora entran y lo ven.”
            </p>
            <div style={{ position: "relative", marginTop: "28px", fontSize: "14px", color: "#b9c6f5" }}>
              {"Diego R. · Gerente comercial, Tamira · "}
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "10.5px",
                  letterSpacing: ".06em",
                }}
              >
                CITA DE EJEMPLO
              </span>
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
                Otras soluciones
              </h2>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
              <OtherSolutionRow
                s={[
                  "/servicios#software",
                  "Sistemas a medida",
                  "Hechos para cómo trabajás",
                  <svg
                    key="k3"
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
              <OtherSolutionRow
                s={[
                  "/servicios",
                  "Integraciones",
                  "Conectamos tus herramientas",
                  <svg
                    key="k3"
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
              <OtherSolutionRow
                s={[
                  "/servicios",
                  "Paneles e indicadores",
                  "Tus números al día",
                  <svg
                    key="k3"
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
              <OtherSolutionRow
                s={[
                  "/servicios#apps",
                  "Apps internas y móviles",
                  "Para tu equipo en campo",
                  <svg
                    key="k3"
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
                ¿Hablamos de tu portal?
              </h2>
              <p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.55", color: "#aab0b9" }}>
                Contanos quiénes lo usarían y qué necesitan ver, y te mostramos cómo sería.
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
