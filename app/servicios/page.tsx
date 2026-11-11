/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"
import {
  AlertRow,
  AssistantPrompt,
  CapabilityList,
  DeliveryRow,
  FactRow,
  IotFact,
  OrderChip,
  OrderRow,
  OrderRowDone,
  ProcessStep,
  ServiceBlock,
  ServiceFaqItem,
  SolutionRow,
} from "@/components/site/parts"

export const metadata: Metadata = {
  title: "Servicios",
  description: "Software a medida, apps móviles, inteligencia artificial y equipos conectados para tu empresa.",
}

export default function Page() {
  return (
    <>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "40px 0 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#9aa1ab" }}>
            <Link href="/servicios" style={{ color: "#7b828c", textDecoration: "none" }}>
              Servicios
            </Link>
            <span>/</span>
            <Link href="/servicios" style={{ color: "#7b828c", textDecoration: "none" }}>
              Qué hacemos
            </Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 80px", alignItems: "flex-end" }}>
            <div style={{ flex: "1.2 1 480px" }}>
              <div
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "10.5px",
                  letterSpacing: ".08em",
                  color: "#2f5bea",
                  marginTop: "24px",
                }}
              >
                SERVICIOS
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
                  maxWidth: "700px",
                  textWrap: "balance",
                }}
              >
                Construimos lo que tu empresa necesita
              </h1>
              <p style={{ margin: "24px 0 0", maxWidth: "520px", fontSize: "20px", lineHeight: "1.5", color: "#6b7280" }}>
                Sistemas, apps, inteligencia artificial y equipos conectados. Empezamos por lo que más te duele hoy y lo vamos sumando.
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
                  Contanos qué necesitás
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
                Ver casos de éxito
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
            <div style={{ flex: "1 1 420px" }}>
              <div style={{ borderBottom: "1px solid #e0e2e6" }}>
                <ServiceBlock
                  s={[
                    "/servicios#software",
                    "01",
                    "Software a medida",
                    "Para cuando la planilla ya no alcanza",
                    <svg
                      key="k4"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#1b1d21"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flex: "none" }}
                    >
                      <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                    </svg>,
                  ]}
                />
                <ServiceBlock
                  s={[
                    "/servicios#apps",
                    "02",
                    "Apps móviles",
                    "Lo que pasa en la calle, al instante",
                    <svg
                      key="k4"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#1b1d21"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flex: "none" }}
                    >
                      <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                    </svg>,
                  ]}
                />
                <ServiceBlock
                  s={[
                    "/servicios#ia",
                    "03",
                    "Inteligencia artificial",
                    "Un asistente que conoce tu empresa",
                    <svg
                      key="k4"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#1b1d21"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flex: "none" }}
                    >
                      <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                    </svg>,
                  ]}
                />
                <ServiceBlock
                  s={[
                    "/servicios#iot",
                    "04",
                    "Equipos conectados",
                    "Enterate antes de que haya un problema",
                    <svg
                      key="k4"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#1b1d21"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flex: "none" }}
                    >
                      <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                    </svg>,
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "130px" }}></div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 140px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "56px 80px", alignItems: "center" }}>
            <div style={{ flex: "1 1 420px" }}>
              <div
                style={{
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  letterSpacing: "-.03em",
                  color: "#2f5bea",
                  fontSize: "96px",
                  lineHeight: ".9",
                }}
              >
                01
              </div>
              <h2
                style={{
                  margin: "28px 0 0",
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  letterSpacing: "-0.015em",
                  color: "#1b1d21",
                  fontSize: "44px",
                  lineHeight: "1.05",
                  maxWidth: "460px",
                  textWrap: "balance",
                }}
              >
                Cuando la planilla ya no alcanza
              </h2>
              <p style={{ margin: "20px 0 0", maxWidth: "460px", fontSize: "16px", lineHeight: "1.6", color: "#6b7280" }}>
                Armamos el sistema con el que tu equipo trabaja todos los días: cargar un pedido, ver en qué está, aprobar y avisar al
                cliente. Con tus reglas, no las de un programa genérico.
              </p>
              <div style={{ marginTop: "32px", maxWidth: "480px", borderBottom: "1px solid #e6e8eb" }}>
                <FactRow s={["Cuándo conviene", "Tu operación vive en planillas, mails y mensajes sueltos."]} />
                <FactRow s={["Qué cambia", "Todo el equipo ve lo mismo, en el momento."]} />
                <FactRow s={["Cómo arrancamos", "Una sola pieza, en uso en pocas semanas."]} />
              </div>
            </div>
            <div style={{ flex: "1.1 1 460px" }}>
              <div
                style={{ background: "#efeeea", borderRadius: "24px", padding: "36px 32px", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.03)" }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    boxShadow: "0 1px 2px rgba(0,0,0,.06), 0 12px 32px -16px rgba(0,0,0,.18)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 20px",
                      borderBottom: "1px solid #eceef1",
                    }}
                  >
                    <span style={{ fontSize: "15px", fontWeight: "500", color: "#1b1d21" }}>Pedidos</span>
                    <span
                      style={{
                        fontSize: "12.5px",
                        color: "#9aa1ab",
                        border: "1px solid #e6e8eb",
                        borderRadius: "8px",
                        padding: "6px 12px",
                        minWidth: "120px",
                      }}
                    >
                      Buscar…
                    </span>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "52px 1.5fr 1fr 64px",
                      gap: "14px",
                      alignItems: "center",
                      padding: "10px 20px",
                      background: "#f7f7f5",
                      fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                      fontSize: "9.5px",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "#9aa1ab",
                    }}
                  >
                    <span>N.º</span>
                    <span>Cliente</span>
                    <span>Estado</span>
                    <span>Entrega</span>
                  </div>
                  <OrderRow s={["2041", "Ferretería Alsina", "En curso", "12 nov"]} />
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "52px 1.5fr 1fr 64px",
                      gap: "14px",
                      alignItems: "center",
                      padding: "14px 20px",
                      borderTop: "1px solid #f0f1f3",
                      fontSize: "14px",
                      color: "#1b1d21",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                        fontSize: "12px",
                        color: "#9aa1ab",
                      }}
                    >
                      2040
                    </span>
                    <span>Taller Méndez</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#3a4049" }}>
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#fff",
                          boxShadow: "inset 0 0 0 1.5px #2f5bea",
                        }}
                      ></span>
                      Nuevo
                </span>
                    <span style={{ color: "#7b828c" }}>12 nov</span>
                  </div>
                  <OrderRow s={["2039", "Distribuidora Sur", "En curso", "13 nov"]} />
                  <OrderRowDone s={["2038", "Panadería Olmos", "Entregado", "10 nov"]} />
                  <OrderRowDone s={["2037", "Clínica Vera", "Entregado", "10 nov"]} />
                  <OrderRowDone s={["2036", "Agro Tala", "Entregado", "09 nov"]} />
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
                  CLIENTES Y PEDIDOS DE EJEMPLO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 140px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "56px 80px", alignItems: "center" }}>
            <div style={{ flex: "1.1 1 460px", order: "0" }}>
              <div
                style={{
                  background: "#efeeea",
                  borderRadius: "24px",
                  padding: "44px 24px 24px",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.03)",
                }}
              >
                <div style={{ position: "relative", height: "470px" }}>
                  <div style={{ position: "absolute", left: "6%", top: "0" }}>
                    <div
                      style={{
                        width: "232px",
                        background: "#14171c",
                        borderRadius: "34px",
                        padding: "9px",
                        boxShadow: "0 24px 40px -20px rgba(0,0,0,.4)",
                      }}
                    >
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "26px",
                          padding: "22px 16px 16px",
                          height: "410px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                            fontSize: "9.5px",
                            letterSpacing: ".08em",
                            color: "#9aa1ab",
                          }}
                        >
                          MARTES 12
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                            fontWeight: "400",
                            letterSpacing: "-0.015em",
                            color: "#1b1d21",
                            fontSize: "28px",
                            margin: "6px 0 14px",
                          }}
                        >
                          Tu agenda
                        </div>
                        <DeliveryRow s={["Entrega #2041", "10:30 · Ferretería Alsina"]} />
                        <DeliveryRow s={["Visita técnica", "12:00 · Taller Méndez"]} />
                        <DeliveryRow s={["Retiro de equipo", "15:00 · Agro Tala"]} />
                        <DeliveryRow s={["Revisión", "17:30 · Oficina"]} />
                      </div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", right: "6%", top: "56px" }}>
                    <div
                      style={{
                        width: "232px",
                        background: "#14171c",
                        borderRadius: "34px",
                        padding: "9px",
                        boxShadow: "0 24px 40px -20px rgba(0,0,0,.4)",
                      }}
                    >
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "26px",
                          padding: "22px 16px 16px",
                          height: "410px",
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                            fontSize: "9.5px",
                            letterSpacing: ".08em",
                            color: "#9aa1ab",
                          }}
                        >
                          ENTREGA #2041
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                            fontWeight: "400",
                            letterSpacing: "-0.015em",
                            color: "#1b1d21",
                            fontSize: "24px",
                            margin: "6px 0 14px",
                          }}
                        >
                          Ferretería Alsina
                        </div>
                        <div
                          style={{
                            height: "104px",
                            borderRadius: "12px",
                            background: "#eaf1fe",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                            fontSize: "10px",
                            color: "#2f5bea",
                          }}
                        >
                          FOTO DE LA ENTREGA
                        </div>
                        <div
                          style={{
                            marginTop: "14px",
                            height: "54px",
                            border: "1px dashed #c9ced6",
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            color: "#9aa1ab",
                          }}
                        >
                          Firma de quien recibe
                        </div>
                        <div
                          style={{
                            marginTop: "16px",
                            background: "#1b1d21",
                            color: "#fff",
                            borderRadius: "12px",
                            padding: "12px",
                            textAlign: "center",
                            fontSize: "13px",
                          }}
                        >
                          Confirmar entrega
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flex: "1 1 420px" }}>
              <div
                style={{
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  letterSpacing: "-.03em",
                  color: "#2f5bea",
                  fontSize: "96px",
                  lineHeight: ".9",
                }}
              >
                02
              </div>
              <h2
                style={{
                  margin: "28px 0 0",
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  letterSpacing: "-0.015em",
                  color: "#1b1d21",
                  fontSize: "44px",
                  lineHeight: "1.05",
                  maxWidth: "460px",
                  textWrap: "balance",
                }}
              >
                Lo que pasa en la calle, registrado al instante
              </h2>
              <p style={{ margin: "20px 0 0", maxWidth: "460px", fontSize: "16px", lineHeight: "1.6", color: "#6b7280" }}>
                Una app para tu equipo de campo o para tus clientes. Se registra una entrega con foto y firma, se consulta un pedido, se
                recibe un aviso. Todo desde el celular.
              </p>
              <div style={{ marginTop: "32px", maxWidth: "480px", borderBottom: "1px solid #e6e8eb" }}>
                <FactRow s={["Quién la usa", "Tu equipo en la calle, tus clientes, o ambos."]} />
                <FactRow s={["Sin señal", "Guarda todo y sincroniza cuando vuelve la conexión."]} />
                <FactRow s={["Dónde funciona", "Android e iPhone, desde una sola app."]} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 140px" }}>
          <div style={{ background: "#efeeea", borderRadius: "28px", padding: "64px", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.03)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "56px 80px", alignItems: "center" }}>
              <div style={{ flex: "1 1 420px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                    fontWeight: "400",
                    letterSpacing: "-.03em",
                    color: "#2f5bea",
                    fontSize: "96px",
                    lineHeight: ".9",
                  }}
                >
                  03
                </div>
                <h2
                  style={{
                    margin: "28px 0 0",
                    fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                    fontWeight: "400",
                    letterSpacing: "-0.015em",
                    color: "#1b1d21",
                    fontSize: "44px",
                    lineHeight: "1.05",
                    maxWidth: "460px",
                    textWrap: "balance",
                  }}
                >
                  Un asistente que conoce tu empresa
                </h2>
                <p style={{ margin: "20px 0 0", maxWidth: "460px", fontSize: "16px", lineHeight: "1.6", color: "#6b7280" }}>
                  Le preguntás en lenguaje común y responde con tus propios pedidos, clientes y documentos. Y te muestra de dónde sacó cada
                  dato, para que puedas confiar.
                </p>
                <div style={{ marginTop: "32px", maxWidth: "480px", borderBottom: "1px solid #e6e8eb" }}>
                  <FactRow s={["Para qué sirve", "Consultas, resúmenes y tareas repetitivas."]} />
                  <FactRow s={["Quién decide", "Siempre una persona: antes de actuar, te pide aprobación."]} />
                  <FactRow s={["Tus datos", "Definimos con vos qué información puede ver."]} />
                </div>
              </div>
              <div style={{ flex: "1.1 1 460px" }}>
                <div style={{ display: "grid", gap: "14px" }}>
                  <AssistantPrompt s={["¿Qué pedidos van atrasados esta semana?"]} />
                  <div
                    style={{
                      maxWidth: "86%",
                      padding: "14px 16px",
                      borderRadius: "16px 16px 16px 4px",
                      background: "#fff",
                      color: "#1b1d21",
                      fontSize: "14px",
                      lineHeight: "1.55",
                      boxShadow: "0 1px 2px rgba(0,0,0,.06)",
                    }}
                  >
                    {"Hay "}
                    <b style={{ fontWeight: "500" }}>3 pedidos con retraso</b>: el #2039 y el #2041 esperan una aprobación, y el #2036 no
                    tiene stock hasta el jueves.
                    <div style={{ marginTop: "12px", display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                          fontSize: "9.5px",
                          color: "#9aa1ab",
                          letterSpacing: ".06em",
                        }}
                      >
                        FUENTES
                      </span>
                      <OrderChip s={["Pedido #2039"]} />
                      <OrderChip s={["Pedido #2041"]} />
                      <OrderChip s={["Stock 11/11"]} />
                    </div>
                  </div>
                  <AssistantPrompt s={["Avisales a los clientes y dejá constancia."]} />
                  <div
                    style={{
                      maxWidth: "86%",
                      padding: "14px 16px",
                      borderRadius: "16px 16px 16px 4px",
                      background: "#fff",
                      color: "#1b1d21",
                      fontSize: "14px",
                      lineHeight: "1.55",
                      boxShadow: "0 1px 2px rgba(0,0,0,.06)",
                    }}
                  >
                    Listo. Envié los 3 avisos y quedaron registrados en cada pedido. ¿Querés que revise también los de la semana próxima?
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
                  CONVERSACIÓN DE EJEMPLO
                </div>
              </div>
            </div>
            <div style={{ marginTop: "56px", display: "flex", flexWrap: "wrap", gap: "24px 56px" }}>
              <CapabilityList
                s={[
                  "Lo que hace",
                  "Responde sobre tu información",
                  "Resume documentos y conversaciones",
                  "Redacta avisos y borradores",
                  "Prepara tareas para que las apruebes",
                ]}
              />
              <CapabilityList
                s={[
                  "Lo que no hace",
                  "No decide por tu equipo",
                  "No inventa datos que no están",
                  "No ve lo que no le habilitaste",
                  "No actúa sin tu aprobación",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0" }}>
        <div style={{ padding: "0 64px 140px" }}>
          <div style={{ background: "#14171c", borderRadius: "28px", padding: "64px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "56px 80px", alignItems: "center" }}>
              <div style={{ flex: "1 1 420px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                    fontWeight: "400",
                    letterSpacing: "-.03em",
                    color: "#8fa8f8",
                    fontSize: "96px",
                    lineHeight: ".9",
                  }}
                >
                  04
                </div>
                <h2
                  style={{
                    margin: "28px 0 0",
                    fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                    fontWeight: "400",
                    letterSpacing: "-0.015em",
                    color: "#fff",
                    fontSize: "44px",
                    lineHeight: "1.05",
                    maxWidth: "460px",
                    textWrap: "balance",
                  }}
                >
                  Enterate antes de que haya un problema
                </h2>
                <p style={{ margin: "20px 0 0", maxWidth: "460px", fontSize: "16px", lineHeight: "1.6", color: "#a8afba" }}>
                  Conectamos tus cámaras de frío, máquinas, bombas o vehículos para ver su estado en una pantalla y recibir un aviso en el
                  celular cuando algo se sale de rango.
                </p>
                <div style={{ marginTop: "32px", maxWidth: "480px", borderBottom: "1px solid rgba(255,255,255,.16)" }}>
                  <IotFact s={["Qué se conecta", "Equipos nuevos o los que ya tenés, con un sensor."]} />
                  <IotFact s={["Qué ves", "Estado actual, historial y alertas."]} />
                  <IotFact s={["Para quién", "Producción, logística, frío, riego, edificios."]} />
                </div>
              </div>
              <div style={{ flex: "1.1 1 460px" }}>
                <div
                  style={{
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid rgba(255,255,255,.12)",
                    borderRadius: "18px",
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                      fontSize: "9.5px",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "#8fa8f8",
                    }}
                  >
                    <span>PLANTA · DEPÓSITO</span>
                    <span>7 SENSORES · 1 ALERTA</span>
                  </div>
                  <svg viewBox="0 0 320 200" width="100%" style={{ display: "block", marginTop: "14px" }}>
                    <rect x="10" y="10" width="150" height="90" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="1" />
                    <rect x="160" y="10" width="150" height="90" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="1" />
                    <rect x="10" y="100" width="100" height="90" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="1" />
                    <rect x="110" y="100" width="200" height="90" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="1" />
                    <path d="M50 40h0" stroke="#6f8ff5" strokeWidth="8.8" strokeLinecap="round" fill="none" />
                    <circle cx="50" cy="40" r="10" fill="none" stroke="rgba(111,143,245,.35)" />
                    <path d="M110 70h0" stroke="#6f8ff5" strokeWidth="8.8" strokeLinecap="round" fill="none" />
                    <circle cx="110" cy="70" r="10" fill="none" stroke="rgba(111,143,245,.35)" />
                    <path d="M230 40h0" stroke="#6f8ff5" strokeWidth="8.8" strokeLinecap="round" fill="none" />
                    <circle cx="230" cy="40" r="10" fill="none" stroke="rgba(111,143,245,.35)" />
                    <path d="M270 70h0" stroke="#6f8ff5" strokeWidth="8.8" strokeLinecap="round" fill="none" />
                    <circle cx="270" cy="70" r="10" fill="none" stroke="rgba(111,143,245,.35)" />
                    <path d="M60 150h0" stroke="#6f8ff5" strokeWidth="8.8" strokeLinecap="round" fill="none" />
                    <circle cx="60" cy="150" r="10" fill="none" stroke="rgba(111,143,245,.35)" />
                    <path d="M190 140h0" stroke="#6f8ff5" strokeWidth="8.8" strokeLinecap="round" fill="none" />
                    <circle cx="190" cy="140" r="10" fill="none" stroke="rgba(111,143,245,.35)" />
                    <path d="M260 160h0" stroke="#6f8ff5" strokeWidth="8.8" strokeLinecap="round" fill="none" />
                    <circle cx="260" cy="160" r="10" fill="none" stroke="rgba(111,143,245,.35)" />
                    <path d="M230 40h0" stroke="#fff" strokeWidth="10" strokeLinecap="round" fill="none" />
                    <circle cx="230" cy="40" r="15" fill="none" stroke="#fff" strokeWidth="1.2" />
                    <circle cx="230" cy="40" r="24" fill="none" stroke="rgba(255,255,255,.35)" />
                  </svg>
                  <div style={{ marginTop: "16px" }}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "54px 1fr",
                        gap: "14px",
                        padding: "12px 0",
                        borderTop: "1px solid rgba(255,255,255,.12)",
                        fontSize: "13.5px",
                        color: "#fff",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                          fontSize: "11.5px",
                          color: "#8fa8f8",
                        }}
                      >
                        10:42
                      </span>
                      <span>Cámara fría 2 · 7,8 °C, por encima del límite</span>
                    </div>
                    <AlertRow s={["10:15", "Bomba principal · arrancó con normalidad"]} />
                    <AlertRow s={["09:03", "Cámara fría 1 · 4,2 °C, en rango"]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 110px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 80px" }}>
            <div style={{ flex: "1 1 280px" }}>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  letterSpacing: "-0.015em",
                  color: "#1b1d21",
                  fontSize: "44px",
                  lineHeight: "1.05",
                  maxWidth: "300px",
                  textWrap: "balance",
                }}
              >
                Y todo lo que está alrededor
              </h2>
              <p style={{ margin: "16px 0 0", maxWidth: "300px", fontSize: "16px", lineHeight: "1.55", color: "#7b828c" }}>
                Lo que suele hacer falta para que el sistema funcione bien en el día a día.
              </p>
            </div>
            <div style={{ flex: "2 1 560px" }}>
              <SolutionRow
                s={[
                  "/soluciones/portales",
                  "Portales para clientes",
                  "Tus clientes consultan y piden sin llamarte.",
                  <svg
                    key="k3"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#1b1d21"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flex: "none" }}
                  >
                    <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                  </svg>,
                ]}
              />
              <SolutionRow
                s={[
                  "/servicios",
                  "Integraciones",
                  "Tus herramientas se hablan entre sí.",
                  <svg
                    key="k3"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#1b1d21"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flex: "none" }}
                  >
                    <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                  </svg>,
                ]}
              />
              <SolutionRow
                s={[
                  "/servicios",
                  "Paneles e indicadores",
                  "Los números del negocio, siempre a la vista.",
                  <svg
                    key="k3"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#1b1d21"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flex: "none" }}
                  >
                    <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                  </svg>,
                ]}
              />
              <SolutionRow
                s={[
                  "/servicios",
                  "Modernización",
                  "Renovamos un sistema viejo sin frenar la operación.",
                  <svg
                    key="k3"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#1b1d21"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flex: "none" }}
                  >
                    <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                  </svg>,
                ]}
              />
              <SolutionRow
                s={[
                  "/servicios",
                  "Soporte y mejora continua",
                  "Te acompañamos después de la entrega.",
                  <svg
                    key="k3"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#1b1d21"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flex: "none" }}
                  >
                    <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                  </svg>,
                ]}
              />
              <SolutionRow
                s={[
                  "/servicios",
                  "Seguridad y respaldos",
                  "Tu información protegida y recuperable.",
                  <svg
                    key="k3"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#1b1d21"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flex: "none" }}
                  >
                    <path d="M3 8 H13 M9 4 L13 8 L9 12" />
                  </svg>,
                ]}
              />
              <div style={{ borderTop: "1px solid #e0e2e6" }}></div>
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
                Cómo trabajamos en cualquier servicio
              </h2>
              <p style={{ margin: "12px 0 0", fontSize: "16px", color: "#7b828c", maxWidth: "540px" }}>
                Lo ponemos en marcha de a una pieza.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "44px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            <ProcessStep
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
                  <circle cx="8" cy="8" r="5.5" />
                  <path d="M12.5 12.5 L15 15" />
                </svg>,
                "PASO 01",
                "Hablamos",
                "Nos contás qué te frena hoy y qué te gustaría lograr. Sin tecnicismos.",
              ]}
            />
            <ProcessStep
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
                  <path d="M2.5 13.5 L2.5 10.5 L10.5 2.5 L13.5 5.5 L5.5 13.5 Z" />
                </svg>,
                "PASO 02",
                "Lo diseñamos juntos",
                "Armamos un plan simple con las piezas que necesitás y cuándo las vas a tener.",
              ]}
            />
            <ProcessStep
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
                  <path d="M8 2 L14 5 L8 8 L2 5 Z M2 8 L8 11 L14 8 M2 11 L8 14 L14 11" />
                </svg>,
                "PASO 03",
                "Lo construimos",
                "Entregamos de a partes funcionando, para que puedas verlo y opinar a medida que avanza.",
              ]}
            />
            <ProcessStep
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
                  <path d="M2.5 8 a5.5 5.5 0 0 1 11 0 V11 a1.5 1.5 0 0 1 -1.5 1.5 H11 V8.5 H13.5 M2.5 8.5 H5 V12.5 H4 A1.5 1.5 0 0 1 2.5 11 Z" />
                </svg>,
                "PASO 04",
                "Te acompañamos",
                "Capacitamos a tu equipo, medimos cómo funciona y seguimos mejorándolo con vos.",
              ]}
            />
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 120px", display: "flex", flexWrap: "wrap", gap: "32px 80px" }}>
          <div style={{ flex: "1 1 280px" }}>
            <h2
              style={{
                margin: "0",
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: "400",
                letterSpacing: "-0.015em",
                color: "#1b1d21",
                fontSize: "44px",
                lineHeight: "1.05",
                maxWidth: "320px",
                textWrap: "balance",
              }}
            >
              Antes de empezar
            </h2>
            <p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.55", color: "#7b828c", maxWidth: "300px" }}>
              Lo que más nos preguntan sobre estos servicios.
            </p>
          </div>
          <div style={{ flex: "2 1 520px" }}>
            <details style={{ borderTop: "1px solid #e0e2e6", padding: "22px 0" }} open>
              <summary
                style={{
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                  fontSize: "17px",
                  fontWeight: "500",
                  color: "#1b1d21",
                }}
              >
                ¿Puedo empezar con un solo servicio?
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                  style={{ flex: "none" }}
                >
                  <path d="M3 8 H13 M8 3 V13" />
                </svg>
              </summary>
              <p style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "15.5px", lineHeight: "1.6", color: "#6b7280" }}>
                Sí. Casi siempre arrancamos por una pieza chica y, si funciona, sumamos lo demás.
              </p>
            </details>
            <ServiceFaqItem
              s={[
                "¿La IA usa mis datos para otra cosa?",
                <svg
                  key="k1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                  style={{ flex: "none" }}
                >
                  <path d="M3 8 H13 M8 3 V13" />
                </svg>,
                "Tu información se usa solo para responder dentro de tu empresa. Definimos con vos qué puede ver cada asistente.",
              ]}
            />
            <ServiceFaqItem
              s={[
                "¿La app funciona sin internet?",
                <svg
                  key="k1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                  style={{ flex: "none" }}
                >
                  <path d="M3 8 H13 M8 3 V13" />
                </svg>,
                "Sí. Guarda lo que cargás y lo envía cuando vuelve la señal.",
              ]}
            />
            <ServiceFaqItem
              s={[
                "¿Mis equipos sirven para conectarlos?",
                <svg
                  key="k1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                  style={{ flex: "none" }}
                >
                  <path d="M3 8 H13 M8 3 V13" />
                </svg>,
                "Muchos ya traen conexión. A los que no, les agregamos un sensor. Lo vemos en un relevamiento previo.",
              ]}
            />
            <ServiceFaqItem
              s={[
                "¿Quién se ocupa del mantenimiento?",
                <svg
                  key="k1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                  style={{ flex: "none" }}
                >
                  <path d="M3 8 H13 M8 3 V13" />
                </svg>,
                "Nosotros. Seguimos atentos después de la entrega y mejoramos el sistema a medida que tu empresa cambia.",
              ]}
            />
            <div style={{ borderTop: "1px solid #e0e2e6" }}></div>
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
                ¿No sabés por dónde empezar?
              </h2>
              <p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.55", color: "#aab0b9" }}>
                Contanos qué te frena hoy y te proponemos un plan simple.
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
