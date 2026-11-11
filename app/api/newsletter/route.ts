import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"

const file = path.join(process.cwd(), "data", "newsletter.json")

type Subscriber = { email: string; at: string }

function isEmail(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  let email = ""
  try {
    const body = (await request.json()) as { email?: unknown }
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : ""
  } catch {
    email = ""
  }
  if (!isEmail(email)) {
    return Response.json({ error: "Ingresá un correo válido." }, { status: 400 })
  }

  let list: Subscriber[] = []
  try {
    const parsed = JSON.parse(await readFile(file, "utf8")) as unknown
    if (Array.isArray(parsed)) {
      list = parsed.filter((row): row is Subscriber => {
        return typeof row === "object" && row !== null && typeof (row as Subscriber).email === "string"
      })
    }
  } catch {
    list = []
  }

  const already = list.some((row) => row.email === email)
  if (!already) {
    list.push({ email, at: new Date().toISOString() })
    await mkdir(path.dirname(file), { recursive: true })
    await writeFile(file, JSON.stringify(list, null, 2))
  }

  return Response.json({ ok: true, already })
}
