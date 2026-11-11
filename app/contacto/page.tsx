import type { Metadata } from "next"
import Link from "next/link"
import { FormShell } from "@/components/site/form-shell"
import { CallDay, ContactStep, FieldLabel, TimeSlot } from "@/components/site/parts"
import { FaqSection } from "@/components/site/faq-section"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contanos qué necesitás resolver. Respondemos en un día hábil, sin compromiso.",
}

export default function Page() {
  return (
    <>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "40px 0 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#9aa1ab" }}>
            <Link href="/contacto" style={{ color: "#7b828c", textDecoration: "none" }}>
              Contacto
            </Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "56px 88px", alignItems: "flex-start", marginTop: "0" }}>
            <div style={{ flex: "1 1 380px" }}>
              <h1
                style={{
                  margin: "28px 0 0",
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  letterSpacing: "-0.02em",
                  color: "#1b1d21",
                  fontSize: "68px",
                  lineHeight: "1",
                  maxWidth: "560px",
                  textWrap: "balance",
                }}
              >
                Hablemos de tu proyecto
              </h1>
              <p style={{ margin: "24px 0 0", maxWidth: "420px", fontSize: "20px", lineHeight: "1.5", color: "#6b7280" }}>
                Contanos qué necesitás resolver. Respondemos en un día hábil, sin compromiso.
              </p>
              <div style={{ marginTop: "48px" }}>
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
                  QUÉ PASA DESPUÉS
                </div>
                <ContactStep s={["01", "Te respondemos", "En un día hábil, por correo o WhatsApp."]} />
                <ContactStep s={["02", "Hacemos una llamada", "De 30 minutos, para entender cómo trabajan hoy."]} />
                <ContactStep s={["03", "Recibís una propuesta", "Por escrito, con alcance, etapas y plazos."]} />
                <div style={{ borderTop: "1px dashed #c9ced4" }}></div>
              </div>
              <div
                style={{
                  marginTop: "36px",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "12px 28px",
                  alignItems: "baseline",
                  fontSize: "15.5px",
                  color: "#1b1d21",
                }}
              >
                <FieldLabel s={["CORREO"]} />
                <span>hola@forge.com</span>
                <FieldLabel s={["WHATSAPP"]} />
                <span>+598 00 000 000</span>
                <FieldLabel s={["OFICINA"]} />
                <span>Montevideo, Uruguay</span>
                <FieldLabel s={["HORARIO"]} />
                <span>Lunes a viernes, 9 a 18 h</span>
              </div>
            </div>
            <div style={{ flex: "1.15 1 480px", display: "grid", gap: "24px", paddingTop: "28px" }}>
              <FormShell
                id="contacto"
                style={{
                  boxSizing: "border-box",
                  background: "#efeeea",
                  borderRadius: "22px",
                  padding: "32px",
                  display: "grid",
                  gap: "20px",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.03)",
                }}
                to="/contacto/gracias"
              >
                <div style={{ fontSize: "20px", fontWeight: "500", color: "#1b1d21" }}>Escribinos</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <label style={{ display: "block" }}>
                    <span style={{ display: "block", fontSize: "13.5px", fontWeight: "500", color: "#1b1d21", marginBottom: "8px" }}>
                      Nombre
                    </span>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        padding: "13px 14px",
                        font: "inherit",
                        fontSize: "15px",
                        color: "#1b1d21",
                        background: "#fff",
                        border: "1px solid #e1e3e6",
                        borderRadius: "9px",
                        outline: "none",
                        boxShadow: "0 1px 1px rgba(0,0,0,.03)",
                      }}
                    />
                  </label>
                  <label style={{ display: "block" }}>
                    <span style={{ display: "block", fontSize: "13.5px", fontWeight: "500", color: "#1b1d21", marginBottom: "8px" }}>
                      Correo
                    </span>
                    <input
                      type="email"
                      placeholder="tu@empresa.com"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        padding: "13px 14px",
                        font: "inherit",
                        fontSize: "15px",
                        color: "#1b1d21",
                        background: "#fff",
                        border: "1px solid #e1e3e6",
                        borderRadius: "9px",
                        outline: "none",
                        boxShadow: "0 1px 1px rgba(0,0,0,.03)",
                      }}
                    />
                  </label>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <label style={{ display: "block" }}>
                    <span style={{ display: "block", fontSize: "13.5px", fontWeight: "500", color: "#1b1d21", marginBottom: "8px" }}>
                      Empresa
                      <span style={{ fontWeight: "400", color: "#9aa1ab" }}>{" (opcional)"}</span>
                    </span>
                    <input
                      type="text"
                      placeholder="Tu empresa"
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        padding: "13px 14px",
                        font: "inherit",
                        fontSize: "15px",
                        color: "#1b1d21",
                        background: "#fff",
                        border: "1px solid #e1e3e6",
                        borderRadius: "9px",
                        outline: "none",
                        boxShadow: "0 1px 1px rgba(0,0,0,.03)",
                      }}
                    />
                  </label>
                  <label style={{ display: "block" }}>
                    <span style={{ display: "block", fontSize: "13.5px", fontWeight: "500", color: "#1b1d21", marginBottom: "8px" }}>
                      Teléfono
                      <span style={{ fontWeight: "400", color: "#9aa1ab" }}>{" (opcional)"}</span>
                    </span>
                    <input
                      type="tel"
                      placeholder="+598 ..."
                      style={{
                        boxSizing: "border-box",
                        width: "100%",
                        padding: "13px 14px",
                        font: "inherit",
                        fontSize: "15px",
                        color: "#1b1d21",
                        background: "#fff",
                        border: "1px solid #e1e3e6",
                        borderRadius: "9px",
                        outline: "none",
                        boxShadow: "0 1px 1px rgba(0,0,0,.03)",
                      }}
                    />
                  </label>
                </div>
                <label style={{ display: "block" }}>
                  <span style={{ display: "block", fontSize: "13.5px", fontWeight: "500", color: "#1b1d21", marginBottom: "8px" }}>
                    Mensaje
                  </span>
                  <textarea
                    rows={5}
                    placeholder="Contanos qué querés resolver o mejorar"
                    style={{
                      boxSizing: "border-box",
                      width: "100%",
                      padding: "13px 14px",
                      font: "inherit",
                      fontSize: "15px",
                      color: "#1b1d21",
                      background: "#fff",
                      border: "1px solid #e1e3e6",
                      borderRadius: "9px",
                      outline: "none",
                      boxShadow: "0 1px 1px rgba(0,0,0,.03)",
                      resize: "vertical",
                      lineHeight: "1.5",
                    }}
                  ></textarea>
                </label>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12.5px", color: "#8b9099" }}>Usamos tus datos solo para responderte.</span>
                  <button
                    type="submit"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "13px 20px",
                      background: "#1b1d21",
                      color: "#fff",
                      border: "0",
                      borderRadius: "9px",
                      font: "inherit",
                      fontSize: "14.5px",
                      fontWeight: "500",
                      cursor: "pointer",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,.18), 0 1px 2px rgba(0,0,0,.25)",
                    }}
                  >
                    Enviar mensaje
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
                  </button>
                </div>
              </FormShell>
              <div
                style={{ boxSizing: "border-box", background: "#fff", border: "1px solid #e6e8eb", borderRadius: "22px", padding: "28px" }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                  <div style={{ fontSize: "20px", fontWeight: "500", color: "#1b1d21" }}>O reservá una llamada</div>
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                      fontSize: "10.5px",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "#9aa1ab",
                    }}
                  >
                    30 MIN · NOVIEMBRE 2026
                  </span>
                </div>
                <div style={{ marginTop: "22px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
                  <CallDay s={["Lun", "16", "09:30", "11:00", "14:30", "16:00"]} />
                  <div style={{ display: "grid", gap: "8px" }}>
                    <div style={{ textAlign: "center", marginBottom: "4px" }}>
                      <div
                        style={{
                          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                          fontSize: "10.5px",
                          letterSpacing: ".08em",
                          textTransform: "uppercase",
                          color: "#9aa1ab",
                        }}
                      >
                        Mar
                      </div>
                      <div style={{ fontSize: "18px", color: "#1b1d21", marginTop: "4px" }}>17</div>
                    </div>
                    <TimeSlot s={["09:30"]} />
                    <span
                      style={{
                        display: "block",
                        textAlign: "center",
                        padding: "9px 0",
                        borderRadius: "8px",
                        fontSize: "13.5px",
                        background: "#2f5bea",
                        color: "#fff",
                      }}
                    >
                      11:00
                    </span>
                    <TimeSlot s={["14:30"]} />
                    <TimeSlot s={["16:00"]} />
                  </div>
                  <CallDay s={["Mié", "18", "09:30", "11:00", "14:30", "16:00"]} />
                  <CallDay s={["Jue", "19", "09:30", "11:00", "14:30", "16:00"]} />
                  <CallDay s={["Vie", "20", "09:30", "11:00", "14:30", "16:00"]} />
                </div>
                <div
                  style={{
                    marginTop: "22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontSize: "13.5px", color: "#7b828c" }}>Martes 17 · 11:00 (hora de Montevideo)</span>
                  <a
                    href="#"
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
                    Confirmar horario
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "110px" }}></div>
      <FaqSection />
    </>
  )
}
