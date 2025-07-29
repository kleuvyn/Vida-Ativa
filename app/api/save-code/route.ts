import { type NextRequest, NextResponse } from "next/server"
// Assumindo uso do Supabase ou outro banco

export async function POST(request: NextRequest) {
  try {
    const { contact, code, method, expiresAt } = await request.json()

    // Salva no banco de dados
    // const { data, error } = await supabase
    //   .from('access_codes')
    //   .insert([{ contact, code, method, expires_at: expiresAt }])

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao salvar código" }, { status: 500 })
  }
}
