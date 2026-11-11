/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"
import {
  AfterCard,
  DeliveryCard,
  FitCustomItem,
  FitPackageItem,
  IntegrationFaqItem,
  JourneyStep,
  ProcessCard,
  QualityCard,
  SecurityPoint,
} from "@/components/site/parts"

export const metadata: Metadata = {
  title: "Cómo trabajamos",
  description: "De la primera reunión a tu sistema en marcha: proceso, calidad, seguridad y acompañamiento.",
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
        <div style={{ height: "56px" }}></div>
        <div style={{ padding: "56px 64px 24px" }}>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              fontSize: "11.5px",
              letterSpacing: ".08em",
              color: "#8b929c",
            }}
          >
            A MEDIDA O PAQUETE
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
            ¿Necesitas desarrollo a medida?
          </h3>
          <p style={{ margin: "12px 0 0", maxWidth: "520px", fontSize: "14.5px", lineHeight: "1.6", color: "#7b828c" }}>
            Una guía honesta: a veces un software listo para usar es la mejor decisión.
          </p>
          <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <div style={{ flex: "1 1 340px", background: "#14171c", border: "1px solid #14171c", borderRadius: "16px", padding: "28px" }}>
              <div style={{ fontSize: "21px", letterSpacing: "-0.015em", color: "#fff", marginBottom: "18px" }}>A medida conviene si…</div>
              <FitCustomItem
                s={[
                  <svg key="k0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flex: "none" }}>
                    <path
                      d="M2.5 7.4 L5.6 10.3 L11.5 3.8"
                      stroke="#2f5bea"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>,
                  "Tu proceso es tu ventaja y no encaja en un software estándar.",
                ]}
              />
              <FitCustomItem
                s={[
                  <svg key="k0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flex: "none" }}>
                    <path
                      d="M2.5 7.4 L5.6 10.3 L11.5 3.8"
                      stroke="#2f5bea"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>,
                  "Hoy trabajas con planillas, parches y pasos manuales que se repiten.",
                ]}
              />
              <FitCustomItem
                s={[
                  <svg key="k0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flex: "none" }}>
                    <path
                      d="M2.5 7.4 L5.6 10.3 L11.5 3.8"
                      stroke="#2f5bea"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>,
                  "Necesitas conectar varias herramientas que no se hablan entre sí.",
                ]}
              />
              <FitCustomItem
                s={[
                  <svg key="k0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flex: "none" }}>
                    <path
                      d="M2.5 7.4 L5.6 10.3 L11.5 3.8"
                      stroke="#2f5bea"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>,
                  "Esperas crecer y necesitas que el sistema evolucione con tu negocio.",
                ]}
              />
            </div>
            <div style={{ flex: "1 1 340px", background: "#fff", border: "1px solid #e6e8eb", borderRadius: "16px", padding: "28px" }}>
              <div style={{ fontSize: "21px", letterSpacing: "-0.015em", color: "#14171c", marginBottom: "18px" }}>
                Un paquete listo alcanza si…
              </div>
              <FitPackageItem
                s={[
                  <svg key="k0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M3.5 3.5 L10.5 10.5 M10.5 3.5 L3.5 10.5" stroke="#9aa1ab" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>,
                  "Tu necesidad es común y ya existe una herramienta que la cubre bien.",
                ]}
              />
              <FitPackageItem
                s={[
                  <svg key="k0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M3.5 3.5 L10.5 10.5 M10.5 3.5 L3.5 10.5" stroke="#9aa1ab" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>,
                  "No necesitas adaptar los pasos: con ajustar tu forma de trabajar alcanza.",
                ]}
              />
              <FitPackageItem
                s={[
                  <svg key="k0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M3.5 3.5 L10.5 10.5 M10.5 3.5 L3.5 10.5" stroke="#9aa1ab" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>,
                  "Necesitas resolverlo ya y con poco presupuesto.",
                ]}
              />
              <FitPackageItem
                s={[
                  <svg key="k0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M3.5 3.5 L10.5 10.5 M10.5 3.5 L3.5 10.5" stroke="#9aa1ab" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>,
                  "Los cambios futuros van a ser mínimos.",
                ]}
              />
            </div>
          </div>
        </div>
        <div style={{ padding: "48px 64px 24px" }}>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              fontSize: "11.5px",
              letterSpacing: ".08em",
              color: "#8b929c",
            }}
          >
            CÓMO TRABAJAMOS
          </div>
          <h3
            style={{
              margin: "14px 0 0",
              fontSize: "28px",
              lineHeight: "1.2",
              fontWeight: "400",
              letterSpacing: "-0.02em",
              maxWidth: "520px",
              textWrap: "balance",
            }}
          >
            De la idea al sistema en funcionamiento
          </h3>
          <div style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            <ProcessCard
              s={[
                <svg
                  key="k0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#2f5bea"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="5.5" />
                  <path d="M12.5 12.5 L15 15" />
                </svg>,
                "01",
                "Entendemos tu operación",
                "Mapeamos procesos, sistemas actuales y qué es lo que más duele hoy.",
              ]}
            />
            <ProcessCard
              s={[
                <svg
                  key="k0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#2f5bea"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M8 2 L14 5 L8 8 L2 5 Z M2 8 L8 11 L14 8 M2 11 L8 14 L14 11" />
                </svg>,
                "02",
                "Diseñamos antes de programar",
                "Acordamos alcance, pantallas y cómo se conecta todo, antes de escribir código.",
              ]}
            />
            <ProcessCard
              s={[
                <svg
                  key="k0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#2f5bea"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 8 L6.5 11.5 L13 4.5" />
                </svg>,
                "03",
                "Construimos y entregamos",
                "Entregas cortas, con pruebas y documentación, sobre tu propia infraestructura o la nuestra.",
              ]}
            />
            <ProcessCard
              s={[
                <svg
                  key="k0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#2f5bea"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 11 L6 7 L9 10 L14 4 M10 4 H14 V8" />
                </svg>,
                "04",
                "Evolucionamos juntos",
                "Mejoramos de a una pieza a medida que tu negocio crece.",
              ]}
            />
          </div>
        </div>
        <div style={{ padding: "40px 64px 24px" }}>
          <div style={{ background: "#fff", border: "1px solid #e6e8eb", borderRadius: "16px", padding: "36px 32px" }}>
            <div
              style={{
                fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                fontSize: "11.5px",
                letterSpacing: ".08em",
                color: "#8b929c",
              }}
            >
              EL RECORRIDO
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
              De la primera reunión a tu sistema en marcha
            </h3>
            <p style={{ margin: "12px 0 0", maxWidth: "520px", fontSize: "14.5px", lineHeight: "1.6", color: "#7b828c" }}>
              Los plazos dependen del alcance; lo definimos juntos en la propuesta.
            </p>
            <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "28px 8px" }}>
              <div style={{ flex: "1 1 170px", position: "relative", paddingTop: "30px" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: "#2f5bea",
                    border: "1.5px solid #2f5bea",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "6px",
                    left: "22px",
                    right: "8px",
                    height: "1px",
                    background: "repeating-linear-gradient(to right, #2f5bea 0 5px, transparent 5px 9px)",
                  }}
                ></div>
                <div style={{ fontSize: "16px", fontWeight: "500", color: "#14171c" }}>Primera reunión</div>
                <p style={{ margin: "8px 0 0", paddingRight: "16px", fontSize: "13.5px", lineHeight: "1.55", color: "#7b828c" }}>
                  Entendemos qué necesitas y qué es lo que más duele hoy.
                </p>
              </div>
              <JourneyStep s={["Propuesta", "Alcance, prioridades y forma de trabajo, por escrito y sin letra chica."]} />
              <JourneyStep s={["Primera entrega", "Algo real funcionando, para probar y ajustar el rumbo."]} />
              <JourneyStep s={["Ajustes y entregas", "Sumamos funciones en ciclos cortos, con tus comentarios."]} />
              <div style={{ flex: "1 1 170px", position: "relative", paddingTop: "30px" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: "#2f5bea",
                    border: "1.5px solid #2f5bea",
                  }}
                ></div>
                <div style={{ fontSize: "16px", fontWeight: "500", color: "#14171c" }}>Puesta en marcha</div>
                <p style={{ margin: "8px 0 0", paddingRight: "16px", fontSize: "13.5px", lineHeight: "1.55", color: "#7b828c" }}>
                  Salida a producción, capacitación y acompañamiento inicial.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "56px 64px 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 64px", alignItems: "center" }}>
            <div style={{ flex: "1 1 340px" }}>
              <div
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "11.5px",
                  letterSpacing: ".08em",
                  color: "#8b929c",
                }}
              >
                CALIDAD
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
                Lo revisamos antes de que lo veas
              </h3>
              <p style={{ margin: "12px 0 0", maxWidth: "520px", fontSize: "14.5px", lineHeight: "1.6", color: "#7b828c" }}>
                No dejamos la calidad para el final: es parte de cada entrega.
              </p>
            </div>
            <div style={{ flex: "1 1 400px", background: "#fff", border: "1px solid #e6e8eb", borderRadius: "16px", overflow: "hidden" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px",
                  background: "#fafafa",
                  borderBottom: "1px solid #eceef1",
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "11.5px",
                  color: "#8b929c",
                }}
              >
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2f5bea" }}></span>
                CADA ENTREGA PASA POR
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 20px", borderTop: "0 solid #eceef1" }}>
                <span
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "#eff6ff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flex: "none" }}>
                    <path
                      d="M2.5 7.4 L5.6 10.3 L11.5 3.8"
                      stroke="#2f5bea"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <div style={{ fontSize: "15px", color: "#14171c" }}>Pruebas automáticas</div>
                  <div style={{ marginTop: "2px", fontSize: "13px", color: "#7b828c" }}>Cada cambio se verifica solo antes de avanzar.</div>
                </div>
              </div>
              <QualityCard
                s={[
                  <svg key="k0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flex: "none" }}>
                    <path
                      d="M2.5 7.4 L5.6 10.3 L11.5 3.8"
                      stroke="#2f5bea"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>,
                  "Revisión de código",
                  "Un segundo par de ojos en todo lo que entregamos.",
                ]}
              />
              <QualityCard
                s={[
                  <svg key="k0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flex: "none" }}>
                    <path
                      d="M2.5 7.4 L5.6 10.3 L11.5 3.8"
                      stroke="#2f5bea"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>,
                  "Entorno de prueba",
                  "Lo ves funcionando antes de que llegue a producción.",
                ]}
              />
              <QualityCard
                s={[
                  <svg key="k0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flex: "none" }}>
                    <path
                      d="M2.5 7.4 L5.6 10.3 L11.5 3.8"
                      stroke="#2f5bea"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>,
                  "Publicación controlada",
                  "Si algo falla, se vuelve atrás en minutos.",
                ]}
              />
            </div>
          </div>
        </div>
        <div style={{ padding: "40px 64px 24px" }}>
          <div style={{ position: "relative", overflow: "hidden", background: "#14171c", borderRadius: "18px", padding: "44px 40px" }}>
            <div
              style={{
                position: "absolute",
                inset: "0",
                pointerEvents: "none",
                opacity: ".3",
                WebkitMaskImage: "radial-gradient(ellipse 40% 90% at 100% 100%, #000, transparent)",
                maskImage: "radial-gradient(ellipse 40% 90% at 100% 100%, #000, transparent)",
              }}
            >
              <img
                src="/art/708b1f5c.svg"
                alt=""
                style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
                aria-hidden="true"
              />
            </div>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "11.5px",
                  letterSpacing: ".08em",
                  color: "#8b929c",
                }}
              >
                SEGURIDAD Y DATOS
              </div>
              <h3
                style={{
                  margin: "14px 0 0",
                  fontSize: "28px",
                  lineHeight: "1.2",
                  fontWeight: "400",
                  letterSpacing: "-0.02em",
                  color: "#fff",
                  maxWidth: "520px",
                  textWrap: "balance",
                }}
              >
                Tus datos, cuidados desde el primer día
              </h3>
              <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "32px" }}>
                <SecurityPoint
                  s={[
                    <svg
                      key="k0"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="7" width="10" height="7" rx="1.5" />
                      <path d="M5.5 7 V5 a2.5 2.5 0 0 1 5 0 V7" />
                    </svg>,
                    "Accesos por rol",
                    "Cada persona ve y hace solo lo que le corresponde.",
                  ]}
                />
                <SecurityPoint
                  s={[
                    <svg
                      key="k0"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M8 1.5 L14 4 V8 C14 11 11.5 13.5 8 14.5 C4.5 13.5 2 11 2 8 V4 Z" />
                    </svg>,
                    "Datos cifrados",
                    "La información viaja y se guarda protegida.",
                  ]}
                />
                <SecurityPoint
                  s={[
                    <svg
                      key="k0"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M2.5 8 a5.5 5.5 0 1 0 1.8-4 M2.5 2.5 V5.5 H5.5" />
                    </svg>,
                    "Respaldos que se prueban",
                    "Copias automáticas, y verificamos que se puedan restaurar.",
                  ]}
                />
              </div>
            </div>
          </div>
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
            AL TERMINAR
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
            Lo que recibes al terminar
          </h3>
          <p style={{ margin: "12px 0 0", maxWidth: "520px", fontSize: "14.5px", lineHeight: "1.6", color: "#7b828c" }}>
            Un sistema listo para usar, documentado y con tu equipo capacitado.
          </p>
          <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", columnGap: "40px" }}>
            <DeliveryCard
              s={[
                <svg
                  key="k0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#2f5bea"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 4 L2.5 8 L6 12 M10 4 L13.5 8 L10 12" />
                </svg>,
                "Sistema en producción",
                "Funcionando y listo para usar, en el entorno que acordamos.",
              ]}
            />
            <DeliveryCard
              s={[
                <svg
                  key="k0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#2f5bea"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 2 H10 L13 5 V14 H4 Z M10 2 V5 H13" />
                </svg>,
                "Documentación",
                "Cómo funciona y cómo se mantiene, escrito en claro.",
              ]}
            />
            <DeliveryCard
              s={[
                <svg
                  key="k0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#2f5bea"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="5.5" cy="8" r="2.5" />
                  <path d="M8 8 H14 M12 8 V10.5" />
                </svg>,
                "Accesos de administración",
                "Quién administra qué queda definido y entregado.",
              ]}
            />
            <DeliveryCard
              s={[
                <svg
                  key="k0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#2f5bea"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="5.5" r="2.5" />
                  <path d="M3 14 C3 10.8 5.2 9.5 8 9.5 C10.8 9.5 13 10.8 13 14" />
                </svg>,
                "Capacitación",
                "Tu equipo aprende a usarlo y a sacarle provecho.",
              ]}
            />
            <DeliveryCard
              s={[
                <svg
                  key="k0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#2f5bea"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="5" height="4" rx="1" />
                  <rect x="9" y="10" width="5" height="4" rx="1" />
                  <path d="M4.5 6 V8 H11.5 V10" />
                </svg>,
                "Diagramas del sistema",
                "Un mapa claro de cómo está armado y cómo se conecta cada parte.",
              ]}
            />
            <DeliveryCard
              s={[
                <svg
                  key="k0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#2f5bea"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="6" />
                  <path d="M8 4.5 V8 L10.5 9.5" />
                </svg>,
                "Acompañamiento inicial",
                "Estamos cerca durante las primeras semanas en producción.",
              ]}
            />
          </div>
        </div>
        <div style={{ padding: "40px 64px 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 64px" }}>
            <div style={{ flex: "1 1 300px" }}>
              <div
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "11.5px",
                  letterSpacing: ".08em",
                  color: "#8b929c",
                }}
              >
                DESPUÉS DE LA ENTREGA
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
                No desaparecemos cuando termina el proyecto
              </h3>
              <p style={{ margin: "12px 0 0", maxWidth: "520px", fontSize: "14.5px", lineHeight: "1.6", color: "#7b828c" }}>
                Un sistema vivo necesita cuidado. Nos encargamos para que tu equipo se enfoque en el negocio.
              </p>
            </div>
            <div style={{ flex: "1.3 1 420px" }}>
              <AfterCard s={["01", "Soporte", "Respondemos dudas y resolvemos incidencias cuando las necesites."]} />
              <AfterCard s={["02", "Monitoreo", "Vigilamos que todo funcione y avisamos antes de que se note."]} />
              <AfterCard s={["03", "Mejoras continuas", "Sumamos funciones nuevas de a poco, según lo que vaya pidiendo tu negocio."]} />
              <div style={{ borderTop: "1px dashed #c9ced4" }}></div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 64px", padding: "56px 64px 40px" }}>
          <div style={{ flex: "1 1 280px" }}>
            <h3
              style={{
                margin: "0",
                fontSize: "28px",
                lineHeight: "1.2",
                fontWeight: "400",
                letterSpacing: "-0.02em",
                maxWidth: "320px",
                textWrap: "balance",
              }}
            >
              Preguntas frecuentes
            </h3>
            <p style={{ margin: "14px 0 0", fontSize: "14px", lineHeight: "1.6", color: "#7b828c", maxWidth: "300px" }}>
              Lo que suelen preguntarnos sobre cómo armamos los sistemas.
            </p>
          </div>
          <div style={{ flex: "1 1 420px" }}>
            <details style={{ borderTop: "1px dashed #c9ced4", padding: "20px 0" }} open>
              <summary
                style={{
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  fontSize: "17px",
                  fontWeight: "500",
                }}
              >
                ¿Puedo cambiar una parte sin rehacer todo?
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                  style={{ flex: "none" }}
                >
                  <path d="M8 3 V13 M3 8 H13" />
                </svg>
              </summary>
              <div style={{ marginTop: "10px", maxWidth: "620px", fontSize: "14.5px", lineHeight: "1.6", color: "#7b828c" }}>
                Sí. Cada parte tiene contratos claros con las demás, así que se puede mejorar o reemplazar de a una, sin tocar el resto del
                sistema.
              </div>
            </details>
            <IntegrationFaqItem
              s={[
                "¿Funciona con los sistemas que ya uso?",
                <svg
                  key="k1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                  style={{ flex: "none" }}
                >
                  <path d="M8 3 V13 M3 8 H13" />
                </svg>,
                "Nos conectamos con las herramientas que ya usas mediante integraciones, sin obligarte a migrar lo que ya funciona.",
              ]}
            />
            <IntegrationFaqItem
              s={[
                "¿Dónde corre el sistema?",
                <svg
                  key="k1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                  style={{ flex: "none" }}
                >
                  <path d="M8 3 V13 M3 8 H13" />
                </svg>,
                "En la nube o en tus propios servidores. Nos adaptamos a lo que necesites.",
              ]}
            />
            <IntegrationFaqItem
              s={[
                "¿Cuánto tarda y cómo se avanza?",
                <svg
                  key="k1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                  style={{ flex: "none" }}
                >
                  <path d="M8 3 V13 M3 8 H13" />
                </svg>,
                "Trabajamos en entregas cortas: primero lo que más valor aporta, para que veas funcionando algo real desde las primeras semanas y puedas ajustar el rumbo.",
              ]}
            />
            <IntegrationFaqItem
              s={[
                "¿Quién se encarga después de la entrega?",
                <svg
                  key="k1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                  style={{ flex: "none" }}
                >
                  <path d="M8 3 V13 M3 8 H13" />
                </svg>,
                "Sí. Tu equipo lo usa día a día y nosotros nos encargamos del soporte, el monitoreo y las mejoras, para que no tengas que preocuparte.",
              ]}
            />
            <IntegrationFaqItem
              s={[
                "¿Qué recibo al final del proyecto?",
                <svg
                  key="k1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                  style={{ flex: "none" }}
                >
                  <path d="M8 3 V13 M3 8 H13" />
                </svg>,
                "Un sistema funcionando y listo para usar, con documentación, diagramas, accesos de administración y capacitación para tu equipo.",
              ]}
            />
            <div style={{ borderTop: "1px dashed #c9ced4" }}></div>
          </div>
        </div>
        <div style={{ padding: "24px 64px 72px" }}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              background: "#0b0b0a",
              borderRadius: "12px",
              padding: "48px 40px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "0",
                backgroundImage: "radial-gradient(#2f5bea 1.2px, transparent 1.4px)",
                backgroundSize: "10px 10px",
                opacity: ".35",
                WebkitMaskImage: "linear-gradient(to left, #000, transparent 60%)",
                maskImage: "linear-gradient(to left, #000, transparent 60%)",
              }}
            ></div>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontSize: "40px",
                  lineHeight: "1.08",
                  color: "#fff",
                }}
              >
                ¿Hablamos de tu
                <br />
                próximo sistema?
              </div>
              <p style={{ margin: "12px 0 0", maxWidth: "420px", fontSize: "14.5px", lineHeight: "1.55", color: "#aab0b9" }}>
                Contanos qué necesitás resolver y te mostramos cómo lo encararíamos, sin compromiso.
              </p>
            </div>
            <Link
              href="/contacto"
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 18px",
                background: "#fff",
                color: "#0b0b0a",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Hablemos de tu caso
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                aria-hidden="true"
                fill="none"
                stroke="#0b0b0a"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
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
