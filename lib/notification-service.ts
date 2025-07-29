// Serviço real de notificações
export class NotificationService {
  // Envio por Email (usando Resend, SendGrid, etc.)
  static async sendEmailCode(email: string, code: string) {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: email,
          subject: "Código de Acesso - Vida Ativa",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #ec4899;">Vida Ativa - Código de Acesso</h2>
              <p>Seu código de acesso seguro é:</p>
              <div style="background: #f3f4f6; padding: 20px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 3px; margin: 20px 0;">
                ${code}
              </div>
              <p><strong>Este código expira em 15 minutos.</strong></p>
              <p style="color: #6b7280; font-size: 12px;">
                Se você não solicitou este código, ignore este email.
                Para sua segurança, não compartilhe este código com ninguém.
              </p>
            </div>
          `,
        }),
      })

      return response.ok
    } catch (error) {
      console.error("Erro ao enviar email:", error)
      return false
    }
  }

  // Envio por SMS (usando Twilio, AWS SNS, etc.)
  static async sendSMSCode(phone: string, code: string) {
    try {
      const response = await fetch("/api/send-sms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: phone,
          message: `Vida Ativa - Seu código de acesso: ${code}. Válido por 15 min. Não compartilhe.`,
        }),
      })

      return response.ok
    } catch (error) {
      console.error("Erro ao enviar SMS:", error)
      return false
    }
  }
}
