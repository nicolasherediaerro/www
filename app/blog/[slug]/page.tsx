/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { ArticleBullet, ArticleCard, ArticleParagraph } from "@/components/site/parts"
import { ScrollSpy } from "@/components/site/scroll-spy"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return [{ slug: "sistema-a-medida-senales" }]
}

export const metadata: Metadata = {
  title: "Cómo saber si tu empresa ya necesita un sistema a medida",
  description: "Señales de que las planillas y los mensajes sueltos ya no alcanzan.",
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params
  if (slug !== "sistema-a-medida-senales") notFound()
  return (
    <>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "40px 0 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#9aa1ab" }}>
            <Link href="/blog" style={{ color: "#7b828c", textDecoration: "none" }}>
              Blog
            </Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "#7b828c", textDecoration: "none" }}>
              Software a medida
            </Link>
          </div>
          <h1
            style={{
              margin: "28px 0 0",
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: "400",
              fontSize: "72px",
              lineHeight: "1",
              letterSpacing: "-0.02em",
              color: "#1b1d21",
              maxWidth: "900px",
              textWrap: "balance",
            }}
          >
            Cómo saber si tu empresa ya necesita un sistema a medida
          </h1>
          <p style={{ margin: "24px 0 0", maxWidth: "620px", fontSize: "20px", lineHeight: "1.5", color: "#6b7280" }}>
            Cinco señales de que las planillas y los mensajes sueltos dejaron de alcanzar.
          </p>
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#dbe4fd",
                  color: "#1e3a8a",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                EF
              </span>
              <div>
                <div style={{ fontSize: "14.5px", fontWeight: "500", color: "#1b1d21" }}>Equipo Forge</div>
                <div style={{ fontSize: "13px", color: "#7b828c" }}>12 oct 2026 · 6 min de lectura</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <span
                style={{
                  width: "38px",
                  height: "38px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #e1e3e6",
                  background: "#fff",
                  borderRadius: "50%",
                }}
                title="Copiar enlace"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#1b1d21"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6.5 9.5 L9.5 6.5 M7 4.5 L8 3.5 a2.5 2.5 0 0 1 3.5 3.5 L10.5 8 M9 11.5 L8 12.5 a2.5 2.5 0 0 1 -3.5 -3.5 L5.5 8" />
                </svg>
              </span>
              <span
                style={{
                  width: "38px",
                  height: "38px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #e1e3e6",
                  background: "#fff",
                  borderRadius: "50%",
                }}
                title="Compartir"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#1b1d21"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="4" cy="8" r="1.8" />
                  <circle cx="12" cy="4" r="1.8" />
                  <circle cx="12" cy="12" r="1.8" />
                  <path d="M5.6 7.2 L10.4 4.8 M5.6 8.8 L10.4 11.2" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div
          style={{
            marginTop: "44px",
            borderRadius: "24px",
            overflow: "hidden",
            position: "relative",
            height: "420px",
            background: "#f3f5fd",
          }}
        >
          <img src="/art/7910d459.svg" alt="" style={{ width: "100%", height: "420px", display: "block" }} aria-hidden="true" />
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 80px", padding: "64px 0 40px", alignItems: "flex-start" }}>
          <aside className="side-nav" style={{ flex: "0 0 240px" }}>
            <ScrollSpy
              label="En este artículo"
              items={[
                { id: "s0", label: "Las planillas dejan de alcanzar" },
                { id: "s1", label: "El trabajo depende de una persona" },
                { id: "s2", label: "Tu equipo repite tareas a mano" },
                { id: "s3", label: "Los clientes esperan respuestas" },
                { id: "s4", label: "Qué hacer primero" },
              ]}
            />
          </aside>
          <article style={{ flex: "1 1 560px", maxWidth: "680px" }}>
            <ArticleParagraph
              s={[
                "Casi todas las empresas arrancan igual: una planilla, un grupo de mensajes y mucha memoria. Funciona, hasta que deja de hacerlo. La pregunta útil no es si necesitás un sistema, sino cuánto te está costando no tenerlo.",
              ]}
            />
            <h2
              id="s0"
              style={{
                margin: "48px 0 18px",
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: "400",
                fontSize: "36px",
                lineHeight: "1.1",
                letterSpacing: "-0.015em",
                color: "#1b1d21",
              }}
            >
              Las planillas dejan de alcanzar
            </h2>
            <ArticleParagraph
              s={[
                "Una planilla es excelente para empezar. El problema aparece cuando la usan cinco personas a la vez, cuando hay tres versiones del mismo archivo o cuando nadie se anima a tocarla por miedo a romper algo.",
              ]}
            />
            <blockquote
              style={{
                margin: "36px 0",
                padding: "0 0 0 28px",
                borderLeft: "3px solid #2f5bea",
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontSize: "32px",
                lineHeight: "1.2",
                letterSpacing: "-0.01em",
                color: "#1b1d21",
              }}
            >
              “Si para saber cómo está un pedido hay que preguntarle a alguien, el sistema ya es esa persona.”
            </blockquote>
            <h2
              id="s1"
              style={{
                margin: "48px 0 18px",
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: "400",
                fontSize: "36px",
                lineHeight: "1.1",
                letterSpacing: "-0.015em",
                color: "#1b1d21",
              }}
            >
              El trabajo depende de una persona
            </h2>
            <ArticleParagraph
              s={[
                "Cuando todo el conocimiento vive en la cabeza de una persona, cada vacaciones es un riesgo. Un sistema bien armado pone ese conocimiento a la vista: quién hace qué, en qué orden y qué falta.",
              ]}
            />
            <div style={{ margin: "32px 0", background: "#efeeea", borderRadius: "18px", padding: "28px 28px 12px" }}>
              <div
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                  fontSize: "10.5px",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "#7b828c",
                  marginBottom: "8px",
                }}
              >
                CINCO SEÑALES
              </div>
              <ArticleBullet
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
                  "Hay información repetida en más de un lugar.",
                ]}
              />
              <ArticleBullet
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
                  "Para saber el estado de un pedido hay que preguntar.",
                ]}
              />
              <ArticleBullet
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
                  "Una sola persona sabe cómo funciona todo.",
                ]}
              />
              <ArticleBullet
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
                  "Los errores se descubren cuando ya es tarde.",
                ]}
              />
              <ArticleBullet
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
                  "Sumar a alguien al equipo lleva semanas de explicación.",
                ]}
              />
            </div>
            <h2
              id="s2"
              style={{
                margin: "48px 0 18px",
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: "400",
                fontSize: "36px",
                lineHeight: "1.1",
                letterSpacing: "-0.015em",
                color: "#1b1d21",
              }}
            >
              Tu equipo repite tareas a mano
            </h2>
            <ArticleParagraph
              s={[
                "Copiar datos de un lugar a otro, pasar un mensaje para pedir una aprobación, armar el mismo reporte todos los meses. Son tareas chicas, pero sumadas se llevan una parte importante de la semana de tu equipo.",
              ]}
            />
            <h2
              id="s3"
              style={{
                margin: "48px 0 18px",
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: "400",
                fontSize: "36px",
                lineHeight: "1.1",
                letterSpacing: "-0.015em",
                color: "#1b1d21",
              }}
            >
              Los clientes esperan respuestas
            </h2>
            <ArticleParagraph
              s={[
                "Tus clientes no ven tus planillas: ven cuánto tardás en responder. Tener la información en un solo lugar acorta esos tiempos y baja los errores que más molestan.",
              ]}
            />
            <h2
              id="s4"
              style={{
                margin: "48px 0 18px",
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: "400",
                fontSize: "36px",
                lineHeight: "1.1",
                letterSpacing: "-0.015em",
                color: "#1b1d21",
              }}
            >
              Qué hacer primero
            </h2>
            <ArticleParagraph
              s={[
                "No hace falta cambiar todo de golpe. Elegí la tarea que más tiempo se lleva o la que más errores genera, y empezá por ahí. Con una primera pieza funcionando, el resto se va sumando sobre lo que ya anda.",
              ]}
            />
            <div
              style={{
                marginTop: "56px",
                paddingTop: "28px",
                borderTop: "1px solid #e6e8eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#dbe4fd",
                    color: "#1e3a8a",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  EF
                </span>
                <div>
                  <div style={{ fontSize: "14.5px", fontWeight: "500", color: "#1b1d21" }}>Equipo Forge</div>
                  <div style={{ fontSize: "13px", color: "#7b828c" }}>12 oct 2026 · 6 min de lectura</div>
                </div>
              </div>
              <span style={{ fontSize: "14px", color: "#7b828c" }}>¿Te sirvió? Compartilo con tu equipo.</span>
            </div>
          </article>
        </div>
      </div>
      <div style={{ boxSizing: "border-box", maxWidth: "1240px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ padding: "40px 0 100px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px" }}>
            <h2
              style={{
                margin: "0",
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: "400",
                fontSize: "44px",
                lineHeight: "1.05",
                letterSpacing: "-0.015em",
                color: "#1b1d21",
              }}
            >
              Seguí leyendo
            </h2>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#1b1d21",
                textDecoration: "none",
              }}
            >
              Ver todos los artículos
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
          <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            <ArticleCard
              s={[
                "/blog",
                "/art/f036cbe4.svg",
                "Procesos",
                "Del Excel al sistema: por dónde empezar",
                "No hace falta cambiarlo todo de golpe. Empezá por la pieza que más duele.",
                "04 oct 2026 · 5 min de lectura",
              ]}
            />
            <ArticleCard
              s={[
                "/como-trabajamos",
                "/art/fe4f7704.svg",
                "Cómo trabajamos",
                "Qué pasa después de la entrega",
                "Capacitación, ajustes y seguimiento: lo que viene cuando el sistema ya está en uso.",
                "27 sep 2026 · 4 min de lectura",
              ]}
            />
            <ArticleCard
              s={[
                "/blog",
                "/art/c795ae2f.svg",
                "Procesos",
                "Aprobaciones sin perseguir a nadie",
                "Cómo ordenar quién aprueba qué para que nada quede esperando en una bandeja.",
                "18 sep 2026 · 5 min de lectura",
              ]}
            />
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
            <div style={{ position: "relative", maxWidth: "520px" }}>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                  fontWeight: "400",
                  fontSize: "44px",
                  lineHeight: "1.05",
                  letterSpacing: "-0.015em",
                  color: "#fff",
                  textWrap: "balance",
                }}
              >
                ¿Reconocés alguna de estas señales?
              </h2>
              <p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.55", color: "#aab0b9" }}>
                Contanos cómo trabajan hoy y te mostramos por dónde empezar, sin compromiso.
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
