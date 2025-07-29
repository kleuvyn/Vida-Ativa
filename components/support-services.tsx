import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Scale, Apple, Briefcase, MessageCircle, Phone, Shield, Clock, Users, BookOpen } from "lucide-react"

export function SupportServices() {
  const services = [
    {
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      title: "Consultoria em Bem-estar",
      description: "Atendimento com foco em bem-estar emocional e desenvolvimento pessoal.",
      features: ["Sessões individuais", "Terapia de grupo", "Atendimento de emergência"],
      availability: "24h",
      contact: "Agendar Consulta",
    },
    {
      icon: <Scale className="h-8 w-8 text-purple-500" />,
      title: "Consultoria Legal",
      description: "Assessoria legal gratuita e confidencial com foco em direitos e legislação.",
      features: ["Medidas protetivas", "Divórcio e guarda", "Direitos trabalhistas"],
      availability: "Seg-Sex 8h-18h",
      contact: "Consulta Jurídica",
    },
    {
      icon: <Apple className="h-8 w-8 text-green-500" />,
      title: "Orientação Nutricional",
      description: "Orientação nutricional personalizada com foco em hábitos alimentares saudáveis.",
      features: ["Planos alimentares", "Receitas econômicas", "Suporte para distúrbios"],
      availability: "Ter-Sab 9h-17h",
      contact: "Agendar Avaliação",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-orange-500" />,
      title: "Desenvolvimento Profissional",
      description: "Cursos e treinamentos para desenvolvimento de carreira e habilidades.",
      features: ["Cursos online", "Mentoria profissional", "Rede de oportunidades"],
      availability: "Sempre disponível",
      contact: "Ver Cursos",
    },
  ]

  const emergencyContacts = [
    {
      title: "Chat de Emergência",
      description: "Atendimento imediato 24h",
      icon: <MessageCircle className="h-5 w-5" />,
      action: "Iniciar Chat",
    },
    {
      title: "Linha Direta",
      description: "Ligação segura e anônima",
      icon: <Phone className="h-5 w-5" />,
      action: "Ligar Agora",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Emergency Contacts */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="h-6 w-6 text-red-500" />
          <h3 className="text-lg font-semibold text-red-800">Atendimento Prioritário</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {emergencyContacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg border border-red-100"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 rounded-full text-red-600">{contact.icon}</div>
                <div>
                  <h4 className="font-medium text-gray-800">{contact.title}</h4>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </div>
              </div>
              <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                {contact.action}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Support Services */}
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow border-pink-100">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-pink-50 to-purple-50 rounded-full">{service.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{service.availability}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{service.description}</CardDescription>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-gray-800 mb-2">Serviços inclusos:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                  {service.contact}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recursos Adicionais</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="p-3 bg-white rounded-full w-fit mx-auto mb-2">
              <Shield className="h-6 w-6 text-pink-500" />
            </div>
            <h4 className="font-medium text-gray-800">Plano de Segurança</h4>
            <p className="text-sm text-gray-600">Crie um plano personalizado de proteção</p>
          </div>

          <div className="text-center">
            <div className="p-3 bg-white rounded-full w-fit mx-auto mb-2">
              <Users className="h-6 w-6 text-purple-500" />
            </div>
            <h4 className="font-medium text-gray-800">Grupos de Apoio</h4>
            <p className="text-sm text-gray-600">Conecte-se com outras mulheres</p>
          </div>

          <div className="text-center">
            <div className="p-3 bg-white rounded-full w-fit mx-auto mb-2">
              <BookOpen className="h-6 w-6 text-blue-500" />
            </div>
            <h4 className="font-medium text-gray-800">Material Educativo</h4>
            <p className="text-sm text-gray-600">Guias e recursos informativos</p>
          </div>
        </div>
      </div>
    </div>
  )
}
