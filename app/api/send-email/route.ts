import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { to, subject, html } = await request.json()

    const { data, error } = await resend.emails.send({
      from: "Vida Ativa <noreply@vidaativa.com>",
      to: [to],
      subject: subject,
      html: html,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
