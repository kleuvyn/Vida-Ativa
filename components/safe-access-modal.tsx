"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Eye, EyeOff, AlertTriangle, Mail, Phone, ArrowLeft, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface SafeAccessModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAccessGranted: () => void
}

export function SafeAccessModal({ open, onOpenChange, onAccessGranted }: SafeAccessModalProps) {
  const [step, setStep] = useState(1) // 1: Solicitar código, 2: Inserir código, 3: Confirmação
  const [contactMethod, setContactMethod] = useState("email")
  const [contactInfo, setContactInfo] = useState("")
  const [code, setCode] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [generatedCode, setGeneratedCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const generateCode = () => {
    // Gera um código único de 6 dígitos
    return Math.floor(100000 + Math.random() * 900000).toString()
  }

  const handleRequestCode = async () => {
    if (!contactInfo) {
      alert("Por favor, preencha seu " + (contactMethod === "email" ? "email" : "telefone"))
      return
    }

    setIsLoading(true)

    // Simula o envio do código (em produção seria uma API real)
    const newCode = generateCode()
    setGeneratedCode(newCode)

    // Simula delay de envio
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setStep(2)

    // Em desenvolvimento, mostra o código no console
    console.log(`Código enviado para ${contactInfo}: ${newCode}`)
  }

  const handleCodeSubmit = () => {
    if (code === generatedCode) {
      setStep(3)
    } else {
      alert("Código inválido. Verifique e tente novamente.")
    }
  }

  const handleAccessConfirm = () => {
    onAccessGranted()
    onOpenChange(false)
    resetModal()
  }

  const resetModal = () => {
    setStep(1)
    setContactMethod("email")
    setContactInfo("")
    setCode("")
    setGeneratedCode("")
    setIsLoading(false)
  }

  const handleClose = () => {
    onOpenChange(false)
    resetModal()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-pink-500" />
            <DialogTitle>
              {step === 1 && "Solicitar Acesso Seguro"}
              {step === 2 && "Verificar Código"}
              {step === 3 && "Acesso Autorizado"}
            </DialogTitle>
          </div>
          <DialogDescription>
            {step === 1 && "Solicite um código de acesso individual para acessar os serviços de apoio."}
            {step === 2 && "Digite o código que foi enviado para você."}
            {step === 3 && "Seu acesso foi verificado com sucesso."}
          </DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Por segurança, cada pessoa recebe um código individual único. Este código expira em 15 minutos.
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              <Label>Como você gostaria de receber seu código?</Label>
              <RadioGroup value={contactMethod} onValueChange={setContactMethod}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email" />
                  <Label htmlFor="email" className="flex items-center space-x-2 cursor-pointer">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sms" id="sms" />
                  <Label htmlFor="sms" className="flex items-center space-x-2 cursor-pointer">
                    <Phone className="h-4 w-4" />
                    <span>SMS</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-info">{contactMethod === "email" ? "Seu Email" : "Seu Telefone"}</Label>
              <Input
                id="contact-info"
                type={contactMethod === "email" ? "email" : "tel"}
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder={contactMethod === "email" ? "exemplo@email.com" : "(11) 99999-9999"}
              />
            </div>

            <div className="flex space-x-2">
              <Button onClick={handleRequestCode} className="flex-1 bg-pink-500 hover:bg-pink-600" disabled={isLoading}>
                {isLoading ? "Enviando..." : `Enviar Código por ${contactMethod === "email" ? "Email" : "SMS"}`}
              </Button>
              <Button variant="outline" onClick={handleClose} className="flex-1 bg-transparent">
                Cancelar
              </Button>
            </div>

            <div className="text-xs text-gray-500 text-center">
              <p>Precisa de ajuda? Entre em contato:</p>
              <p className="font-medium">WhatsApp: (11) 99999-9999</p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <Alert className="border-blue-200 bg-blue-50">
              <Mail className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                Código enviado para {contactInfo}. Verifique sua caixa de entrada
                {contactMethod === "email" && " e spam"}.
              </AlertDescription>
            </Alert>

            <div className="space-y-2">
              <Label htmlFor="verification-code">Código de Verificação</Label>
              <div className="relative">
                <Input
                  id="verification-code"
                  type={showPassword ? "text" : "password"}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Digite o código de 6 dígitos"
                  className="pr-10 text-center text-lg tracking-widest"
                  maxLength={6}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button onClick={handleCodeSubmit} className="flex-1 bg-pink-500 hover:bg-pink-600">
                Verificar Código
              </Button>
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>

            <div className="text-center">
              <Button
                variant="link"
                size="sm"
                onClick={handleRequestCode}
                className="text-xs text-gray-500 hover:text-pink-600"
              >
                Não recebeu o código? Reenviar
              </Button>
            </div>

            {/* Apenas para desenvolvimento - remover em produção */}
            <div className="bg-yellow-50 border border-yellow-200 rounded p-2 text-xs">
              <p className="text-yellow-800">
                <strong>Modo Desenvolvimento:</strong> Código: {generatedCode}
              </p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Código verificado com sucesso! Você terá acesso aos serviços de apoio especializado.
              </AlertDescription>
            </Alert>

            <div className="text-sm text-gray-600 space-y-2">
              <p>
                <strong>Serviços disponíveis:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Apoio psicológico especializado</li>
                <li>Orientação jurídica confidencial</li>
                <li>Suporte nutricional personalizado</li>
                <li>Capacitação profissional</li>
                <li>Chat seguro 24h</li>
                <li>Plano de segurança personalizado</li>
              </ul>
            </div>

            <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
              <p className="text-xs text-pink-800">
                <strong>Importante:</strong> Sua sessão no modo seguro expira automaticamente após 2 horas de
                inatividade por questões de segurança.
              </p>
            </div>

            <div className="flex space-x-2">
              <Button onClick={handleAccessConfirm} className="flex-1 bg-green-500 hover:bg-green-600">
                Acessar Modo Seguro
              </Button>
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Voltar
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
