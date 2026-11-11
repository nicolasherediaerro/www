"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

/**
 * Envoltorio de formulario: conserva el marcado y los estilos del diseño.
 * Solo diseño: al enviar lleva a la confirmación. Conectar con el envío real de correo.
 */
export function FormShell({ to, children, ...props }: Omit<React.ComponentProps<"form">, "onSubmit"> & { to?: string }) {
  const router = useRouter()
  return (
    <form
      {...props}
      onSubmit={(e) => {
        e.preventDefault()
        if (to) router.push(to)
      }}
    >
      {children}
    </form>
  )
}
