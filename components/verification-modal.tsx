"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Video, FileText, Users, CheckCircle, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface VerificationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onVerificationComplete: (code: string) => void
}

export function VerificationModal({ open, onOpenChange, onVerificationComplete }: VerificationModalProps) {
  const [step, setStep] = useState(1)
  const [verificationType, setVerificationType] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    referenceOrg: "",
    referenceContact: "",
    emergencyContact: "",
    safetyQuestion1: "",
    safetyQuestion2: "",
    situation: "",
  })

  const verificationOptions = [
    {
      id: "reference",
      title: "Referência de Organização",
      description: "Tenho indicação de ONG, delegacia ou profissional",
      icon: <FileText className="h-5 w-5" />,
      recommended: true,
    },
    {
      id: "video",
      title: "Verificação por Vídeo",
      description: "Chamada rápida com nossa equipe (2-3 minutos)",
      icon: <Video className="h-5 w-5" />,
    },
    {
      id: "vouching",
      title: "Indicação de Usuária",
      description: "Tenho indicação de alguém que já usa a plataforma",
      icon: <Users className="h-5 w-5" />,
    },
  ]

  const safetyQuestions = [
    "Descreva uma situação comum que mulheres enfrentam em relacionamentos abusivos",
    "Qual é o número da Central de Atendimento à Mulher?",
    "Cite três sinais de alerta em um relacionamento",
    "O que é uma medida protetiva de urgência?",
    "Descreva como funciona uma Casa Abrigo",
  ]

  const handleSubmit = () => {
    // Em produção, isso seria validado no backend
    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString()
    onVerificationComplete(generatedCode)
    onOpenChange(false)
    resetForm()
  }

  const resetForm = () => {
    setStep(1)
    setVerificationType("")
    setFormData({
      name: "",
      phone: "",
      email: "",
      referenceOrg: "",
      referenceContact: "",
      emergencyContact: "",
      safetyQuestion1: "",
      safetyQuestion2: "",
      situation: "",
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-pink-500" />
            <DialogTitle>Verificação de Segurança</DialogTitle>
          </div>
          <DialogDescription>
            Para sua proteção e de outras usuárias, precisamos verificar sua identidade.
          </DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Este processo garante que apenas mulheres que realmente precisam tenham acesso aos serviços
                especializados.
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              <Label>Escolha o método de verificação:</Label>
              <RadioGroup value={verificationType} onValueChange={setVerificationType}>
                {verificationOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <div className="flex-1">
                      <Label htmlFor={option.id} className="flex items-center space-x-2 cursor-pointer">
                        {option.icon}
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{option.title}</span>
                            {option.recommended && (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Recomendado</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{option.description}</p>
                        </div>
                      </Label>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex space-x-2">
              <Button
                onClick={() => setStep(2)}
                disabled={!verificationType}
                className="flex-1 bg-pink-500 hover:bg-pink-600"
              >
                Continuar
              </Button>
              <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
                Cancelar
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                />
              </div>

              {verificationType === "reference" && (
                <>
                  <div>
                    <Label htmlFor="referenceOrg">Organização de Referência</Label>
                    <Input
                      id="referenceOrg"
                      value={formData.referenceOrg}
                      onChange={(e) => setFormData({ ...formData, referenceOrg: e.target.value })}
                      placeholder="Nome da ONG, delegacia ou instituição"
                    />
                  </div>
                  <div>
                    <Label htmlFor="referenceContact">Contato da Referência</Label>
                    <Input
                      id="referenceContact"
                      value={formData.referenceContact}
                      onChange={(e) => setFormData({ ...formData, referenceContact: e.target.value })}
                      placeholder="Nome e telefone do profissional"
                    />
                  </div>
                </>
              )}

              <div>
                <Label htmlFor="emergencyContact">Contato de Emergência (opcional)</Label>
                <Input
                  id="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                  placeholder="Pessoa de confiança"
                />
              </div>
            </div>

            <div className="flex space-x-2">
              <Button onClick={() => setStep(3)} className="flex-1 bg-pink-500 hover:bg-pink-600">
                Próximo
              </Button>
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Voltar
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                Para finalizar, responda algumas perguntas de segurança. Isso nos ajuda a verificar que você realmente
                precisa deste apoio.
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              <div>
                <Label>Pergunta de Segurança 1:</Label>
                <p className="text-sm text-gray-600 mb-2">{safetyQuestions[0]}</p>
                <Textarea
                  value={formData.safetyQuestion1}
                  onChange={(e) => setFormData({ ...formData, safetyQuestion1: e.target.value })}
                  placeholder="Sua resposta..."
                  rows={3}
                />
              </div>

              <div>
                <Label>Pergunta de Segurança 2:</Label>
                <p className="text-sm text-gray-600 mb-2">{safetyQuestions[1]}</p>
                <Input
                  value={formData.safetyQuestion2}
                  onChange={(e) => setFormData({ ...formData, safetyQuestion2: e.target.value })}
                  placeholder="Sua resposta..."
                />
              </div>

              <div>
                <Label htmlFor="situation">Descreva brevemente sua situação (opcional)</Label>
                <Textarea
                  id="situation"
                  value={formData.situation}
                  onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                  placeholder="Isso nos ajuda a oferecer o melhor suporte..."
                  rows={3}
                />
              </div>
            </div>

            <div className="flex space-x-2">
              <Button onClick={handleSubmit} className="flex-1 bg-green-500 hover:bg-green-600">
                <CheckCircle className="mr-2 h-4 w-4" />
                Finalizar Verificação
              </Button>
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                Voltar
              </Button>
            </div>
          </div>
        )}

        <div className="text-xs text-gray-500 text-center mt-4">
          <p>Todas as informações são tratadas com máxima confidencialidade</p>
          <p>Em caso de dúvidas: (11) 99999-9999</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
