import { FaqItem } from "@/components/site/parts"

export function FaqSection() {
  return (
    <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }} id="faq">
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
            Preguntas frecuentes
          </h2>
          <p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.55", color: "#7b828c", maxWidth: "300px" }}>
            Lo que suelen preguntarnos antes de empezar.
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
              ¿Cuánto tarda en estar funcionando?
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
            <p
              style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "15.5px", lineHeight: "1.6", color: "#6b7280", textWrap: "pretty" }}
            >
              Depende del alcance, pero entregamos de a partes: lo primero suele estar en uso en pocas semanas y el resto se suma sobre eso.
            </p>
          </details>
          <FaqItem
            s={[
              "¿Tengo que saber de tecnología?",
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
              "No. Te hablamos en tus palabras y nos ocupamos de todo lo técnico. Vos nos contás cómo trabaja tu equipo.",
            ]}
          />
          <FaqItem
            s={[
              "¿Qué pasa después de la entrega?",
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
              "Te acompañamos: capacitamos a tu equipo, resolvemos dudas y seguimos mejorando el sistema a medida que tu empresa cambia.",
            ]}
          />
          <FaqItem
            s={[
              "¿Puedo empezar con algo chico?",
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
              "Sí. Muchos clientes arrancan con una sola pieza, como cargar pedidos o aprobar tareas, y van sumando lo que necesitan.",
            ]}
          />
          <FaqItem
            s={[
              "¿Mis datos están seguros?",
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
              "Cada persona ve solo lo que le corresponde y hacemos copias de respaldo automáticas de tu información.",
            ]}
          />
          <div style={{ borderTop: "1px solid #e0e2e6" }}></div>
        </div>
      </div>
    </div>
  )
}
