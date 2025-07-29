import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { contact, code } = await request.json()

    // Verifica no banco de dados
    // const { data, error } = await supabase
    //   .from('access_codes')
    //   .select('*')
    //   .eq('contact', contact)
    //   .eq('code', code)
    //   .gt('expires_at', new Date().toISOString())
    //   .single()

    // Simula verificação para exemplo
    const isValid = true // Substituir pela lógica real

    if (isValid) {
      // Remove o código usado
      // await supabase.from('access_codes').delete().eq('contact', contact)
    }

    return NextResponse.json({ valid: isValid })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao verificar código" }, { status: 500 })
  }
}
