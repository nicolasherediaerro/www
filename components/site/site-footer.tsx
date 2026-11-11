import Link from "next/link"
import { FooterNewsletter } from "@/components/site/footer-newsletter"
import { FooterLink, SocialLink } from "@/components/site/parts"

export function SiteFooter() {
  return (
    <div style={{ position: "relative", overflow: "hidden", background: "#16329a", color: "#fff" }}>
      <div
        style={{
          position: "absolute",
          left: "0",
          right: "0",
          bottom: "0",
          height: "241px",
          opacity: ".8",
          WebkitMaskImage: "linear-gradient(to top, #000 0%, #000 30%, rgba(0,0,0,.55) 60%, rgba(0,0,0,.2) 85%, transparent 100%)",
          maskImage: "linear-gradient(to top, #000 0%, #000 30%, rgba(0,0,0,.55) 60%, rgba(0,0,0,.2) 85%, transparent 100%)",
        }}
      >
        <img
          src="/art/6084b62c.svg"
          alt=""
          style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
          aria-hidden="true"
        />
      </div>
      <div
        style={{
          position: "relative",
          boxSizing: "border-box",
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "72px 64px 0",
          display: "flex",
          flexWrap: "wrap",
          gap: "48px 32px",
        }}
      >
        <div style={{ flex: "1.2 1 230px", minWidth: "220px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true" style={{ flex: "none" }}>
              <polygon
                points="22,3.0 40,7.6 22,12.2 4,7.6"
                fill="#9db8ff"
                fillOpacity="1"
                stroke="#9db8ff"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <polygon
                points="22,8.2 40,12.8 22,17.4 4,12.8"
                fill="#fff"
                fillOpacity="0.0"
                stroke="#ffffff"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              <polygon
                points="22,13.4 40,18.0 22,22.6 4,18.0"
                fill="#fff"
                fillOpacity="0.0"
                stroke="#ffffff"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              <polygon
                points="22,18.6 40,23.2 22,27.8 4,23.2"
                fill="#fff"
                fillOpacity="0.0"
                stroke="#ffffff"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              <polygon
                points="22,23.8 40,28.4 22,33.0 4,28.4"
                fill="#fff"
                fillOpacity="0.0"
                stroke="#ffffff"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              <polygon
                points="22,29.0 40,33.6 22,38.2 4,33.6"
                fill="#fff"
                fillOpacity="0.0"
                stroke="#ffffff"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontSize: "36px",
                lineHeight: "1",
                letterSpacing: "-0.01em",
              }}
            >
              Forge
            </span>
          </div>
          <p
            style={{
              margin: "20px 0 0",
              maxWidth: "270px",
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
              fontSize: "20px",
              lineHeight: "1.35",
              color: "rgba(255,255,255,.9)",
            }}
          >
            Software a medida, pensado para cómo trabaja tu empresa.
          </p>
          <div
            style={{
              marginTop: "22px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "14.5px",
              color: "rgba(255,255,255,.85)",
            }}
          >
            <span>hola@forge.com</span>
            <span>+598 00 000 000</span>
            <span>Montevideo, Uruguay</span>
          </div>
          <div style={{ marginTop: "24px", display: "flex", gap: "10px" }}>
            <SocialLink
              s={[
                "#",
                <svg key="k1" width="15" height="15" viewBox="0 0 16 16" fill="#fff" aria-hidden="true">
                  <path d="M3.6 6H1V15H3.6Z M2.3 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3 M6 6H8.5V7.3C8.9 6.5 9.8 5.8 11.2 5.8 13.8 5.8 14.5 7.4 14.5 9.6V15H11.9V10.1C11.9 8.9 11.8 8 10.6 8 9.4 8 8.6 8.8 8.6 10.1V15H6Z" />
                </svg>,
              ]}
            />
            <SocialLink
              s={[
                "#",
                <svg key="k1" width="15" height="15" viewBox="0 0 16 16" fill="#fff" aria-hidden="true">
                  <path d="M8 1.5c-1.6 0-1.8 0-2.5.04-.65.03-1.1.13-1.5.29a3 3 0 0 0-1.1.7 3 3 0 0 0-.7 1.1c-.16.4-.26.85-.29 1.5C1.87 6 1.87 6.4 1.87 8s0 1.8.04 2.5c.03.65.13 1.1.29 1.5.15.4.35.75.7 1.1.35.35.7.55 1.1.7.4.16.85.26 1.5.29.7.03.9.04 2.5.04s1.8 0 2.5-.04c.65-.03 1.1-.13 1.5-.29a3 3 0 0 0 1.8-1.8c.16-.4.26-.85.29-1.5.03-.7.04-.9.04-2.5s0-1.8-.04-2.5c-.03-.65-.13-1.1-.29-1.5a3 3 0 0 0-.7-1.1 3 3 0 0 0-1.1-.7c-.4-.16-.85-.26-1.5-.29C9.8 1.5 9.6 1.5 8 1.5ZM8 4.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm0 5.9a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6Zm3.7-6a.84.84 0 1 0 0 1.7.84.84 0 0 0 0-1.7Z" />
                </svg>,
              ]}
            />
            <SocialLink
              s={[
                "#",
                <svg key="k1" width="15" height="15" viewBox="0 0 16 16" fill="#fff" aria-hidden="true">
                  <path d="M12.2 1.5h2.3L9.5 7.2 15.4 14.5h-4.6L7.2 9.9 3.1 14.5H.8l5.3-6.1L.5 1.5h4.7l3.3 4.2 3.7-4.2Zm-.8 11.6h1.3L4.6 2.8H3.2l8.2 10.3Z" />
                </svg>,
              ]}
            />
            <SocialLink
              s={[
                "#",
                <svg key="k1" width="15" height="15" viewBox="0 0 16 16" fill="#fff" aria-hidden="true">
                  <path d="M8 .5a7.5 7.5 0 0 0-2.4 14.6c.4.07.5-.16.5-.36v-1.3c-2.1.46-2.5-1-2.5-1-.34-.87-.84-1.1-.84-1.1-.68-.47.05-.46.05-.46.75.05 1.15.78 1.15.78.67 1.15 1.75.82 2.2.63.07-.5.26-.82.48-1-1.67-.2-3.43-.84-3.43-3.7 0-.82.3-1.5.78-2-.08-.2-.34-.96.07-2 0 0 .63-.2 2.06.77a7.1 7.1 0 0 1 3.76 0c1.43-.97 2.06-.77 2.06-.77.4 1.04.15 1.8.07 2 .48.52.78 1.2.78 2 0 2.87-1.76 3.5-3.44 3.7.27.23.51.7.51 1.4v2.07c0 .2.13.43.52.36A7.5 7.5 0 0 0 8 .5Z" />
                </svg>,
              ]}
            />
          </div>
        </div>
        <div style={{ flex: "1 1 130px", minWidth: "130px" }}>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              fontSize: "11.5px",
              letterSpacing: ".1em",
              color: "#fff",
            }}
          >
            SERVICIOS
          </div>
          <div style={{ width: "26px", height: "1px", background: "rgba(255,255,255,.7)", margin: "10px 0 14px" }}></div>
          <FooterLink s={["/servicios#software", "Sistemas a medida"]} />
          <FooterLink s={["/soluciones/portales", "Portales"]} />
          <FooterLink s={["/servicios", "Integraciones"]} />
          <FooterLink s={["/servicios", "Paneles e indicadores"]} />
          <FooterLink s={["/servicios#apps", "Apps internas y móviles"]} />
          <FooterLink s={["/servicios", "Modernización"]} />
        </div>
        <div style={{ flex: "1 1 130px", minWidth: "130px" }}>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              fontSize: "11.5px",
              letterSpacing: ".1em",
              color: "#fff",
            }}
          >
            EMPRESA
          </div>
          <div style={{ width: "26px", height: "1px", background: "rgba(255,255,255,.7)", margin: "10px 0 14px" }}></div>
          <FooterLink s={["/quienes-somos", "Quiénes somos"]} />
          <FooterLink s={["/como-trabajamos", "Cómo trabajamos"]} />
          <FooterLink s={["/casos", "Casos de éxito"]} />
          <FooterLink s={["/arquitectura", "Arquitectura"]} />
          <FooterLink s={["/contacto", "Contacto"]} />
        </div>
        <div style={{ flex: "1 1 130px", minWidth: "130px" }}>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
              fontSize: "11.5px",
              letterSpacing: ".1em",
              color: "#fff",
            }}
          >
            RECURSOS
          </div>
          <div style={{ width: "26px", height: "1px", background: "rgba(255,255,255,.7)", margin: "10px 0 14px" }}></div>
          <FooterLink s={["/#faq", "Preguntas frecuentes"]} />
          <FooterLink s={["/como-trabajamos", "Calidad y pruebas"]} />
          <FooterLink s={["/como-trabajamos", "Seguridad y datos"]} />
          <FooterLink s={["/servicios", "Soporte"]} />
        </div>
        <div style={{ flex: "1.2 1 250px", minWidth: "240px" }}>
          <FooterNewsletter />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          boxSizing: "border-box",
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "24px 64px 250px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "12px 24px",
          fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
          fontStyle: "italic",
          fontSize: "15px",
          color: "rgba(255,255,255,.85)",
        }}
      >
        <span>© 2026 Forge. Todos los derechos reservados.</span>
        <span style={{ display: "inline-flex", gap: "20px" }}>
          <Link href="/legal" style={{ color: "inherit", textDecoration: "none" }}>
            Privacidad
          </Link>
          <span style={{ opacity: ".4" }}>|</span>
          <Link href="/legal" style={{ color: "inherit", textDecoration: "none" }}>
            Términos
          </Link>
          <span style={{ opacity: ".4" }}>|</span>
          <Link href="/legal" style={{ color: "inherit", textDecoration: "none" }}>
            Cookies
          </Link>
        </span>
      </div>
    </div>
  )
}
