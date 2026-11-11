import Link from "next/link"
import { NavLink, NavMenuItem } from "@/components/site/parts"

export function NavLogo() {
  return (
    <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#14171c" }}>
      <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true" style={{ flex: "none" }}>
        <polygon
          points="22,3.0 40,7.6 22,12.2 4,7.6"
          fill="#2f5bea"
          fillOpacity="1"
          stroke="#2f5bea"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <polygon
          points="22,8.2 40,12.8 22,17.4 4,12.8"
          fill="#fff"
          fillOpacity="0.0"
          stroke="#9aa1ab"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
        <polygon
          points="22,13.4 40,18.0 22,22.6 4,18.0"
          fill="#fff"
          fillOpacity="0.0"
          stroke="#9aa1ab"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
        <polygon
          points="22,18.6 40,23.2 22,27.8 4,23.2"
          fill="#fff"
          fillOpacity="0.0"
          stroke="#9aa1ab"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
        <polygon
          points="22,23.8 40,28.4 22,33.0 4,28.4"
          fill="#fff"
          fillOpacity="0.0"
          stroke="#9aa1ab"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
        <polygon
          points="22,29.0 40,33.6 22,38.2 4,33.6"
          fill="#fff"
          fillOpacity="0.0"
          stroke="#9aa1ab"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
      </svg>
      <span style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontSize: "28px", lineHeight: "1" }}>
        Forge
      </span>
    </Link>
  )
}

export function NavLinks() {
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <details style={{ position: "relative" }}>
        <summary
          style={{
            listStyle: "none",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 12px",
            fontSize: "14px",
            color: "#14171c",
          }}
        >
          Soluciones
          <svg
            width="9"
            height="9"
            viewBox="0 0 10 10"
            fill="none"
            stroke="#6b7280"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ marginLeft: "5px" }}
          >
            <path d="M2 3.5 L5 6.5 L8 3.5" />
          </svg>
        </summary>
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "-8px",
            zIndex: "5",
            width: "300px",
            padding: "8px",
            marginTop: "6px",
            background: "#fff",
            border: "1px solid #e6e8eb",
            borderRadius: "14px",
            boxShadow: "0 18px 40px -16px rgba(20,23,28,.25)",
          }}
        >
          <NavMenuItem s={["/servicios#software", "Sistemas a medida", "Hechos para cómo trabajás"]} />
          <NavMenuItem s={["/soluciones/portales", "Portales", "Para clientes y proveedores"]} />
          <NavMenuItem s={["/servicios", "Integraciones", "Conectamos tus herramientas"]} />
          <NavMenuItem s={["/servicios", "Paneles e indicadores", "Tus números al día"]} />
          <NavMenuItem s={["/servicios#apps", "Apps internas y móviles", "Para tu equipo en campo"]} />
          <NavMenuItem s={["/servicios", "Modernización", "Actualizamos lo que ya tenés"]} />
        </div>
      </details>
      <NavLink s={["/arquitectura", "Arquitectura"]} />
      <NavLink s={["/casos", "Casos"]} />
      <NavLink s={["/como-trabajamos", "Cómo trabajamos"]} />
    </nav>
  )
}

export function NavCta() {
  return (
    <Link
      href="/contacto"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 16px",
        background: "#1b1d21",
        color: "#fff",
        borderRadius: "9px",
        fontSize: "14px",
        fontWeight: "500",
        textDecoration: "none",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,.18), 0 1px 2px rgba(0,0,0,.25)",
      }}
    >
      Hablemos
    </Link>
  )
}
