/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"
import {
  AppSidebarItem,
  AppStatCard,
  Chip,
  CompareRow,
  DailyAction,
  DashboardStat,
  DayStep,
  FlowCard,
  ProcessStep,
  RoleCard,
  SecurityCard,
} from "@/components/site/parts"
import { FaqSection } from "@/components/site/faq-section"

export const metadata: Metadata = {
  title: "Relay",
  description: "Relay: clientes, pedidos, tareas, documentos y aprobaciones de tu empresa en un solo lugar.",
}

export default function Page() {
  return (
    <>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "40px 0 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#9aa1ab" }}>
            <Link href="/relay" style={{ color: "#7b828c", textDecoration: "none" }}>
              Producto
            </Link>
            <span>/</span>
            <Link href="/relay" style={{ color: "#7b828c", textDecoration: "none" }}>
              Relay
            </Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 64px", alignItems: "center" }}>
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
                RELAY · NUESTRO SISTEMA
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
                Operá tu empresa en un solo lugar
              </h1>
              <p style={{ margin: "24px 0 0", maxWidth: "500px", fontSize: "20px", lineHeight: "1.5", color: "#6b7280" }}>
                Cargá clientes, pedidos y tareas, seguí cada trabajo hasta el final y aprobá lo pendiente. Se adapta a tu rubro.
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
                  Quiero verlo funcionando
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
                  href="/como-trabajamos"
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
                  Ver cómo trabajamos
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
            <div style={{ flex: "1.1 1 480px" }}>
              <div
                style={{ background: "#efeeea", borderRadius: "24px", padding: "36px 28px", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.03)" }}
              >
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #e6e8eb",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 24px 60px -30px rgba(20,23,28,.28)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "11px 14px",
                      borderBottom: "1px solid #eceef1",
                      background: "#fafafa",
                    }}
                  >
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#e1e4e8" }}></span>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#e1e4e8" }}></span>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#e1e4e8" }}></span>
                    <span
                      style={{
                        marginLeft: "12px",
                        fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                        fontSize: "11px",
                        color: "#9aa1ab",
                      }}
                    >
                      relay · Hoy
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        flex: "0 0 150px",
                        padding: "14px 10px",
                        background: "#f6f7f9",
                        borderRight: "1px solid #eceef1",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                      }}
                    >
                      <AppSidebarItem s={["Inicio"]} />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "9px",
                          padding: "8px 10px",
                          borderRadius: "8px",
                          fontSize: "13px",
                          color: "#14171c",
                          background: "#fff",
                          boxShadow: "0 0 0 1px #e6e8eb",
                        }}
                      >
                        <span style={{ width: "6px", height: "6px", borderRadius: "2px", background: "#2f5bea" }}></span>
                        Pedidos
                      </div>
                      <AppSidebarItem s={["Clientes"]} />
                      <AppSidebarItem s={["Tareas"]} />
                      <AppSidebarItem s={["Aprobaciones"]} />
                      <AppSidebarItem s={["Reportes"]} />
                    </div>
                    <div style={{ flex: "1", padding: "18px", minWidth: "0" }}>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <AppStatCard s={["Pedidos abiertos", "24"]} />
                        <AppStatCard s={["Para entregar hoy", "6"]} />
                        <AppStatCard s={["Por aprobar", "3"]} />
                      </div>
                      <div style={{ marginTop: "16px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
                        <div style={{ flex: "2 1 280px" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                            <span style={{ fontSize: "14px", color: "#14171c" }}>Trabajos en curso</span>
                            <span style={{ fontSize: "12px", color: "#2f5bea" }}>Ver todos</span>
                          </div>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr auto 1fr",
                              gap: "14px",
                              alignItems: "center",
                              padding: "11px 0",
                              borderTop: "1px solid #eceef1",
                              fontSize: "13px",
                            }}
                          >
                            <div>
                              <div style={{ color: "#14171c" }}>Pedido #1042</div>
                              <div style={{ marginTop: "2px", fontSize: "12px", color: "#9aa1ab" }}>Cliente A</div>
                            </div>
                            <div>
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  padding: "3px 9px",
                                  borderRadius: "999px",
                                  fontSize: "11.5px",
                                  whiteSpace: "nowrap",
                                  color: "#1d4ed8",
                                  background: "#eff6ff",
                                }}
                              >
                                En producción
                              </span>
                            </div>
                            <div style={{ height: "6px", borderRadius: "999px", background: "#eef0f3", overflow: "hidden" }}>
                              <div style={{ width: "70%", height: "100%", borderRadius: "999px", background: "#2f5bea" }}></div>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr auto 1fr",
                              gap: "14px",
                              alignItems: "center",
                              padding: "11px 0",
                              borderTop: "1px solid #eceef1",
                              fontSize: "13px",
                            }}
                          >
                            <div>
                              <div style={{ color: "#14171c" }}>Pedido #1043</div>
                              <div style={{ marginTop: "2px", fontSize: "12px", color: "#9aa1ab" }}>Cliente B</div>
                            </div>
                            <div>
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  padding: "3px 9px",
                                  borderRadius: "999px",
                                  fontSize: "11.5px",
                                  whiteSpace: "nowrap",
                                  color: "#b45309",
                                  background: "#fffbeb",
                                }}
                              >
                                Por aprobar
                              </span>
                            </div>
                            <div style={{ height: "6px", borderRadius: "999px", background: "#eef0f3", overflow: "hidden" }}>
                              <div style={{ width: "35%", height: "100%", borderRadius: "999px", background: "#2f5bea" }}></div>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr auto 1fr",
                              gap: "14px",
                              alignItems: "center",
                              padding: "11px 0",
                              borderTop: "1px solid #eceef1",
                              fontSize: "13px",
                            }}
                          >
                            <div>
                              <div style={{ color: "#14171c" }}>Pedido #1044</div>
                              <div style={{ marginTop: "2px", fontSize: "12px", color: "#9aa1ab" }}>Cliente C</div>
                            </div>
                            <div>
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  padding: "3px 9px",
                                  borderRadius: "999px",
                                  fontSize: "11.5px",
                                  whiteSpace: "nowrap",
                                  color: "#047857",
                                  background: "#ecfdf5",
                                }}
                              >
                                Listo
                              </span>
                            </div>
                            <div style={{ height: "6px", borderRadius: "999px", background: "#eef0f3", overflow: "hidden" }}>
                              <div style={{ width: "100%", height: "100%", borderRadius: "999px", background: "#2f5bea" }}></div>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr auto 1fr",
                              gap: "14px",
                              alignItems: "center",
                              padding: "11px 0",
                              borderTop: "1px solid #eceef1",
                              fontSize: "13px",
                            }}
                          >
                            <div>
                              <div style={{ color: "#14171c" }}>Pedido #1045</div>
                              <div style={{ marginTop: "2px", fontSize: "12px", color: "#9aa1ab" }}>Cliente D</div>
                            </div>
                            <div>
                              <span
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  padding: "3px 9px",
                                  borderRadius: "999px",
                                  fontSize: "11.5px",
                                  whiteSpace: "nowrap",
                                  color: "#4b5563",
                                  background: "#f1f2f4",
                                }}
                              >
                                Nuevo
                              </span>
                            </div>
                            <div style={{ height: "6px", borderRadius: "999px", background: "#eef0f3", overflow: "hidden" }}>
                              <div style={{ width: "8%", height: "100%", borderRadius: "999px", background: "#2f5bea" }}></div>
                            </div>
                          </div>
                        </div>
                        <div style={{ flex: "1 1 150px", display: "flex", flexDirection: "column", gap: "12px" }}>
                          <div style={{ border: "1px solid #fde6b3", background: "#fffbeb", borderRadius: "12px", padding: "14px" }}>
                            <div style={{ fontSize: "12px", color: "#b45309" }}>Esperando tu visto bueno</div>
                            <div style={{ marginTop: "6px", fontSize: "14px", color: "#14171c" }}>Pedido #1043</div>
                            <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
                              <span
                                style={{ padding: "6px 12px", borderRadius: "7px", background: "#0b0b0a", color: "#fff", fontSize: "12px" }}
                              >
                                Aprobar
                              </span>
                              <span
                                style={{
                                  padding: "6px 12px",
                                  borderRadius: "7px",
                                  border: "1px solid #d5d9de",
                                  background: "#fff",
                                  fontSize: "12px",
                                  color: "#4b5563",
                                }}
                              >
                                Ver
                              </span>
                            </div>
                          </div>
                          <div style={{ border: "1px solid #e6e8eb", borderRadius: "12px", padding: "14px" }}>
                            <div style={{ fontSize: "12px", color: "#9aa1ab" }}>Entregas de la semana</div>
                            <div style={{ marginTop: "10px", display: "flex", alignItems: "flex-end", gap: "5px", height: "56px" }}>
                              <div style={{ flex: "1", height: "22px", borderRadius: "4px 4px 0 0", background: "#dbeafe" }}></div>
                              <div style={{ flex: "1", height: "30px", borderRadius: "4px 4px 0 0", background: "#dbeafe" }}></div>
                              <div style={{ flex: "1", height: "26px", borderRadius: "4px 4px 0 0", background: "#dbeafe" }}></div>
                              <div style={{ flex: "1", height: "38px", borderRadius: "4px 4px 0 0", background: "#dbeafe" }}></div>
                              <div style={{ flex: "1", height: "34px", borderRadius: "4px 4px 0 0", background: "#dbeafe" }}></div>
                              <div style={{ flex: "1", height: "44px", borderRadius: "4px 4px 0 0", background: "#dbeafe" }}></div>
                              <div style={{ flex: "1", height: "52px", borderRadius: "4px 4px 0 0", background: "#2f5bea" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "110px" }}></div>
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
                Todo el día a día, ordenado
              </h2>
              <p style={{ margin: "12px 0 0", fontSize: "16px", color: "#7b828c", maxWidth: "540px" }}>
                Tres cosas que tu equipo hace todos los días, en un solo lugar.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "44px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              <DailyAction
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
                    <path d="M3 13 L3 10.5 L10.5 3 L13 5.5 L5.5 13 Z" />
                  </svg>,
                  "Cargá",
                  "Clientes, pedidos y tareas en segundos, sin planillas sueltas.",
                ]}
              />
              <DailyAction
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
                  "Seguí",
                  "Cada trabajo con su estado, de principio a fin.",
                ]}
              />
              <DailyAction
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
                  "Aprobá",
                  "Lo pendiente a la vista, listo para decidir.",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 110px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 72px", alignItems: "center" }}>
            <div style={{ flex: "1 1 380px" }}>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  letterSpacing: "-0.015em",
                  color: "#1b1d21",
                  fontSize: "44px",
                  lineHeight: "1.05",
                  maxWidth: "420px",
                  textWrap: "balance",
                }}
              >
                Se adapta a tu rubro
              </h2>
              <p style={{ margin: "20px 0 0", maxWidth: "440px", fontSize: "16px", lineHeight: "1.6", color: "#6b7280" }}>
                Relay no viene con un molde fijo: lo configuramos con tus procesos, tus estados y tus formularios, y funciona como si lo
                hubieran hecho solo para vos.
              </p>
              <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
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
                  Distribución
                </span>
                <Chip s={["Servicios profesionales"]} />
                <Chip s={["Producción"]} />
                <Chip s={["Comercio"]} />
                <Chip s={["Construcción"]} />
                <Chip s={["Salud"]} />
              </div>
            </div>
            <div style={{ flex: "1.1 1 440px" }}>
              <div
                style={{ background: "#efeeea", borderRadius: "24px", padding: "32px 28px", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.03)" }}
              >
                <div style={{ display: "grid", gap: "12px" }}>
                  <FlowCard s={["Pedido", "Nuevo", "Preparando", "Entregado"]} />
                  <FlowCard s={["Presupuesto", "Borrador", "Enviado", "Aceptado"]} />
                  <FlowCard s={["Reclamo", "Abierto", "En análisis", "Resuelto"]} />
                </div>
              </div>
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
                Cada persona entra y ve lo suyo
              </h2>
              <p style={{ margin: "12px 0 0", fontSize: "16px", color: "#7b828c", maxWidth: "540px" }}>
                Mismo sistema, vistas distintas según el rol.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "44px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              <RoleCard
                s={[
                  "DI",
                  "Dirección",
                  "Ve todo el negocio",
                  <svg
                    key="k3"
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
                  "Tableros y reportes",
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
                  "Aprobaciones pendientes",
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
                  "Resultados por mes",
                ]}
              />
              <RoleCard
                s={[
                  "OP",
                  "Operaciones",
                  "Trabaja el día a día",
                  <svg
                    key="k3"
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
                  "Carga de pedidos",
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
                  "Seguimiento de trabajos",
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
                  "Tareas del equipo",
                ]}
              />
              <RoleCard
                s={[
                  "CL",
                  "Clientes",
                  "Entra a su portal",
                  <svg
                    key="k3"
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
                  "Sus pedidos y estados",
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
                  "Documentos y archivos",
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
                  "Consultas en contexto",
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
                Todo lo que trae Relay
              </h2>
              <p style={{ margin: "12px 0 0", fontSize: "16px", color: "#7b828c", maxWidth: "540px" }}>
                Piezas listas para usar. Sumamos o quitamos según lo que necesites.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "44px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              <DailyAction
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
                    <path d="M3 13.5 C3.5 10.5 12.5 10.5 13 13.5" />
                  </svg>,
                  "Clientes",
                  "Fichas con historial, contactos y todo lo conversado.",
                ]}
              />
              <DailyAction
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
                    <path d="M3 5 L8 2.5 L13 5 V11 L8 13.5 L3 11 Z" />
                    <path d="M3 5 L8 7.5 L13 5 M8 7.5 V13.5" />
                  </svg>,
                  "Pedidos",
                  "De la carga a la entrega, con estados claros.",
                ]}
              />
              <DailyAction
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
                    <rect x="2.5" y="3" width="11" height="10" rx="2" />
                    <path d="M5.5 8 L7.3 9.8 L10.7 6.2" />
                  </svg>,
                  "Tareas",
                  "Quién hace qué y para cuándo, sin perseguir a nadie.",
                ]}
              />
              <DailyAction
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
                    <path d="M4 2.5 H9.5 L12 5 V13.5 H4 Z" />
                    <path d="M9 2.5 V5.5 H12" />
                  </svg>,
                  "Documentos",
                  "Archivos ordenados y siempre en su lugar.",
                ]}
              />
              <DailyAction
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
                  "Aprobaciones",
                  "Lo que espera una decisión, a un toque.",
                ]}
              />
              <DailyAction
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
                    <path d="M4 11 V7.5 C4 5 5.8 3.5 8 3.5 C10.2 3.5 12 5 12 7.5 V11 L13 12 H3 Z" />
                    <path d="M6.8 13.5 H9.2" />
                  </svg>,
                  "Avisos",
                  "Notificaciones al equipo y a tus clientes en el momento justo.",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0" }}>
        <div style={{ padding: "0 64px 110px" }}>
          <div style={{ background: "#14171c", borderRadius: "24px", padding: "56px", position: "relative", overflow: "hidden" }}>
            <div
              style={{
                fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                fontSize: "10.5px",
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "#8fa8f8",
              }}
            >
              UN DÍA EN RELAY
            </div>
            <h2
              style={{
                margin: "16px 0 0",
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: "400",
                letterSpacing: "-0.015em",
                color: "#fff",
                fontSize: "44px",
                lineHeight: "1.05",
                maxWidth: "560px",
                textWrap: "balance",
              }}
            >
              Del pedido a la entrega, sin salir de un solo lugar
            </h2>
            <div style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              <DayStep s={["08:30", "Entra un pedido", "Un cliente lo carga desde su portal. Relay lo asigna y avisa a Operaciones."]} />
              <DayStep s={["11:00", "Se avanza el trabajo", "El equipo actualiza el estado. El cliente lo ve sin tener que preguntar."]} />
              <DayStep
                s={["16:45", "Se aprueba y se cierra", "Dirección aprueba lo pendiente y el pedido queda entregado y documentado."]}
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
                Tableros y reportes para el día a día
              </h2>
            </div>
          </div>
          <div style={{ marginTop: "44px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
            <DashboardStat
              s={[
                "24",
                "pedidos abiertos hoy",
                <svg key="k2" width="100%" height="64" viewBox="0 0 160 64" preserveAspectRatio="none" aria-hidden="true">
                  <rect x="6" y="34" width="18" height="30" rx="3" fill="#dbe4fd" />
                  <rect x="32" y="20" width="18" height="44" rx="3" fill="#dbe4fd" />
                  <rect x="58" y="28" width="18" height="36" rx="3" fill="#dbe4fd" />
                  <rect x="84" y="12" width="18" height="52" rx="3" fill="#dbe4fd" />
                  <rect x="110" y="24" width="18" height="40" rx="3" fill="#dbe4fd" />
                  <rect x="136" y="6" width="18" height="58" rx="3" fill="#2f5bea" />
                </svg>,
              ]}
            />
            <DashboardStat
              s={[
                "6",
                "para entregar hoy",
                <svg key="k2" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#dbe4fd" strokeWidth="8" />
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    fill="none"
                    stroke="#2f5bea"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="153 164"
                    transform="rotate(-90 32 32)"
                  />
                </svg>,
              ]}
            />
            <div
              style={{
                boxSizing: "border-box",
                background: "#fff",
                border: "1px solid #e6e8eb",
                borderRadius: "20px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "28px",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                    fontWeight: "400",
                    letterSpacing: "-0.015em",
                    color: "#2f5bea",
                    fontSize: "52px",
                    lineHeight: "1",
                  }}
                >
                  3
                </div>
                <div style={{ marginTop: "10px", fontSize: "14.5px", lineHeight: "1.45", color: "#6b7280" }}>esperando tu aprobación</div>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#6b7280" }}>
                  <span style={{ padding: "5px 10px", borderRadius: "8px", background: "#f1f2f4", textDecoration: "line-through" }}>
                    2 días
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="#9aa1ab"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 7H12 M8 3 L12 7 L8 11" />
                  </svg>
                  <span style={{ padding: "5px 10px", borderRadius: "8px", background: "#eaf1fe", color: "#1d4ed8", fontWeight: "500" }}>
                    2 horas
                  </span>
                </div>
              </div>
            </div>
            <DashboardStat
              s={[
                "+12%",
                "entregas en fecha este mes",
                <svg key="k2" width="100%" height="64" viewBox="0 0 160 64" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    d="M4 54 C28 50 40 46 62 38 S100 30 122 20 S148 10 156 8"
                    fill="none"
                    stroke="#2f5bea"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path d="M4 54 C28 50 40 46 62 38 S100 30 122 20 S148 10 156 8 V64 H4 Z" fill="#2f5bea" opacity=".08" />
                  <path d="M156 8h0" stroke="#2f5bea" strokeWidth="7.2" strokeLinecap="round" fill="none" />
                </svg>,
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
            CIFRAS DE EJEMPLO
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
                Antes y después de Relay
              </h2>
              <p style={{ margin: "12px 0 0", fontSize: "16px", color: "#7b828c", maxWidth: "540px" }}>
                Lo que cambia en el día a día de tu equipo.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "44px", background: "#fff", border: "1px solid #e6e8eb", borderRadius: "20px", overflow: "hidden" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 1.4fr 1.4fr",
                gap: "24px",
                padding: "16px 28px",
                background: "#f4f4f1",
                fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                fontSize: "10.5px",
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "#9aa1ab",
              }}
            >
              <span></span>
              <span>Planillas y mensajes</span>
              <span style={{ color: "#2f5bea" }}>Con Relay</span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 1.4fr 1.4fr",
                gap: "24px",
                padding: "18px 28px",
                fontSize: "15px",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: "500", color: "#1b1d21" }}>Información</span>
              <span style={{ color: "#9aa1ab" }}>Repartida en planillas y chats</span>
              <span style={{ color: "#1b1d21", display: "flex", gap: "10px", alignItems: "center" }}>
                <svg
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
                </svg>
                Todo en un solo lugar
              </span>
            </div>
            <CompareRow
              s={[
                "Estado de un trabajo",
                "Hay que preguntar",
                <svg
                  key="k2"
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
                "Se ve en el momento",
              ]}
            />
            <CompareRow
              s={[
                "Aprobaciones",
                "Por mensajes sueltos",
                <svg
                  key="k2"
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
                "Con registro y aviso",
              ]}
            />
            <CompareRow
              s={[
                "Clientes",
                "Te escriben para saber",
                <svg
                  key="k2"
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
                "Entran a su portal",
              ]}
            />
            <CompareRow
              s={[
                "Crecer",
                "Más planillas, más desorden",
                <svg
                  key="k2"
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
                "Se suman piezas sin empezar de cero",
              ]}
            />
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 110px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 72px", alignItems: "center" }}>
            <div style={{ flex: "1 1 380px" }}>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  letterSpacing: "-0.015em",
                  color: "#1b1d21",
                  fontSize: "44px",
                  lineHeight: "1.05",
                  maxWidth: "420px",
                  textWrap: "balance",
                }}
              >
                Se conecta con lo que ya usás
              </h2>
              <p style={{ margin: "20px 0 0", maxWidth: "440px", fontSize: "16px", lineHeight: "1.6", color: "#6b7280" }}>
                No tenés que cambiar todas tus herramientas. Relay se integra con tu correo, tu calendario y los sistemas que ya funcionan.
              </p>
            </div>
            <div style={{ flex: "1.1 1 440px" }}>
              <div
                style={{ background: "#efeeea", borderRadius: "24px", padding: "36px 32px", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.03)" }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  <Chip s={["Correo"]} />
                  <Chip s={["Calendario"]} />
                  <Chip s={["Hojas de cálculo"]} />
                  <Chip s={["Mensajería"]} />
                  <Chip s={["Pagos"]} />
                  <Chip s={["Facturación"]} />
                  <Chip s={["Firma digital"]} />
                  <Chip s={["Almacenamiento"]} />
                  <Chip s={["Tu sistema actual"]} />
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
                HERRAMIENTAS DE EJEMPLO
              </div>
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
                Tu información, protegida
              </h2>
              <p style={{ margin: "12px 0 0", fontSize: "16px", color: "#7b828c", maxWidth: "540px" }}>
                Cada persona accede solo a lo que le corresponde.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "44px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
              <SecurityCard
                s={[
                  "Accesos por persona",
                  <svg
                    key="k1"
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
                  "Permisos según el rol",
                  <svg
                    key="k3"
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
                  "Entrada con verificación",
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
                  "Registro de cambios",
                ]}
              />
              <SecurityCard
                s={[
                  "Copias y continuidad",
                  <svg
                    key="k1"
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
                  "Respaldos automáticos",
                  <svg
                    key="k3"
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
                  "Recuperación ante fallas",
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
                  "Información siempre disponible",
                ]}
              />
              <SecurityCard
                s={[
                  "Control de tu lado",
                  <svg
                    key="k1"
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
                  "Tus datos son tuyos",
                  <svg
                    key="k3"
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
                  "Exportables cuando quieras",
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
                  "Sin letra chica",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "0 0 110px" }}>
          <div style={{ background: "#efeeea", borderRadius: "24px", padding: "64px", textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: "400",
                letterSpacing: "-0.015em",
                color: "#1b1d21",
                fontSize: "40px",
                lineHeight: "1.2",
                maxWidth: "820px",
                margin: "0 auto",
                textWrap: "balance",
              }}
            >
              “Dejamos de perseguirnos por mensajes. Hoy cada pedido se ve de principio a fin.”
            </div>
            <div style={{ marginTop: "28px", fontSize: "15px", fontWeight: "500", color: "#1b1d21" }}>Laura Pérez</div>
            <div style={{ marginTop: "4px", fontSize: "14px", color: "#7b828c" }}>Directora de operaciones, empresa de ejemplo</div>
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
            TESTIMONIO DE EJEMPLO
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
                Empezá en semanas, no en meses
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
                ¿Querés ver Relay con tus datos?
              </h2>
              <p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.55", color: "#aab0b9" }}>
                Armamos una demostración con tu rubro y tus procesos.
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
              Pedir una demostración
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
