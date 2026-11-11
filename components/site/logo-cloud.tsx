import type { ReactNode } from "react"

const css = `
.logo-cloud { overflow: hidden; -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent); mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent); }
.logo-cloud__track { display: flex; width: max-content; animation: logo-marquee 38s linear infinite; }
.logo-cloud__set { display: flex; align-items: center; gap: 72px; padding-right: 72px; }
.logo-cloud:hover .logo-cloud__track { animation-play-state: paused; }
@keyframes logo-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) {
  .logo-cloud__track { animation: none; width: 100%; }
  .logo-cloud__set[aria-hidden="true"] { display: none; }
  .logo-cloud__set { width: 100%; justify-content: space-between; padding-right: 0; }
}
`

/** Fila de marcas que se desplaza en bucle. El segundo grupo es una copia para el corte. */
export function LogoCloud({ children }: { children: ReactNode }) {
  return (
    <div className="logo-cloud">
      <style href="logo-cloud" precedence="default">
        {css}
      </style>
      <div className="logo-cloud__track">
        <div className="logo-cloud__set">{children}</div>
        <div className="logo-cloud__set" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
