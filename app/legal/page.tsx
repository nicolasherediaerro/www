import type { Metadata } from "next"
import Link from "next/link"
import { LegalHeading, LegalLink, LegalParagraph } from "@/components/site/parts"
import { ScrollSpy } from "@/components/site/scroll-spy"

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo cuidamos y usamos tus datos.",
}

export default function Page() {
  return (
    <>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "40px 0 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#9aa1ab" }}>
            <Link href="/legal" style={{ color: "#7b828c", textDecoration: "none" }}>
              Legal
            </Link>
            <span>/</span>
            <Link href="/legal" style={{ color: "#7b828c", textDecoration: "none" }}>
              Privacidad
            </Link>
          </div>
          <h1
            style={{
              margin: "28px 0 0",
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: "400",
              letterSpacing: "-0.02em",
              color: "#1b1d21",
              fontSize: "64px",
              lineHeight: "1",
              maxWidth: "820px",
              textWrap: "balance",
            }}
          >
            Política de privacidad
          </h1>
          <div style={{ marginTop: "20px", fontSize: "14px", color: "#9aa1ab" }}>Última actualización: 10 de noviembre de 2026</div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 80px", padding: "56px 0 130px", alignItems: "flex-start" }}>
          <aside className="side-nav" style={{ flex: "0 0 240px" }}>
            <div
              style={{
                fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                fontSize: "10.5px",
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "#9aa1ab",
                marginBottom: "14px",
              }}
            >
              DOCUMENTOS
            </div>
            <Link
              href="/legal"
              style={{
                display: "block",
                padding: "9px 0 9px 14px",
                borderLeft: "2px solid #2f5bea",
                fontSize: "14.5px",
                color: "#1b1d21",
                textDecoration: "none",
              }}
            >
              Privacidad
            </Link>
            <LegalLink s={["/legal", "Términos de uso"]} />
            <LegalLink s={["/legal", "Cookies"]} />
            <ScrollSpy
              label="En esta página"
              variant="legal"
              items={[
                { id: "datos", label: "1. Qué datos recogemos" },
                { id: "uso", label: "2. Para qué los usamos" },
                { id: "compartir", label: "3. Con quién los compartimos" },
                { id: "tiempo", label: "4. Cuánto tiempo los guardamos" },
                { id: "derechos", label: "5. Tus derechos" },
              ]}
            />
          </aside>
          <article style={{ flex: "1 1 560px", maxWidth: "700px" }}>
            <div
              style={{
                marginBottom: "40px",
                padding: "16px 20px",
                borderRadius: "14px",
                background: "#fff7e6",
                border: "1px solid #f6e2b3",
                fontSize: "14px",
                color: "#8a5a00",
              }}
            >
              Texto de ejemplo. Reemplazar por el texto legal definitivo revisado por un profesional.
            </div>
            <LegalHeading s={["1. Qué datos recogemos", "datos"]} />
            <LegalParagraph
              s={[
                "Recogemos los datos que nos das al escribirnos (nombre, correo, empresa y mensaje) y datos básicos de uso del sitio, como las páginas visitadas.",
              ]}
            />
            <LegalHeading s={["2. Para qué los usamos", "uso"]} />
            <LegalParagraph
              s={[
                "Los usamos para responder tus consultas, enviarte la información que pediste y mejorar el sitio. No vendemos tus datos.",
              ]}
            />
            <LegalHeading s={["3. Con quién los compartimos", "compartir"]} />
            <LegalParagraph s={["Solo con proveedores que nos ayudan a operar el sitio y el correo, bajo acuerdos de confidencialidad."]} />
            <LegalHeading s={["4. Cuánto tiempo los guardamos", "tiempo"]} />
            <LegalParagraph s={["Mientras dure la relación y por el tiempo que exige la ley. Después los eliminamos o anonimizamos."]} />
            <LegalHeading s={["5. Tus derechos", "derechos"]} />
            <LegalParagraph s={["Podés pedir acceso, corrección o eliminación de tus datos escribiéndonos a hola@forge.com."]} />
          </article>
        </div>
      </div>
    </>
  )
}
