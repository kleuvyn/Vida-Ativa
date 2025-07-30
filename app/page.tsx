"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Phone, MessageCircle, Briefcase, Apple, Eye, EyeOff } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { SafeAccessModal } from "@/components/safe-access-modal"
import { SupportServices } from "@/components/support-services"
import { EmergencyButton } from "@/components/emergency-button"
import Link from "next/link"

export default function HomePage() {
  const [safeMode, setSafeMode] = useState(false)
  const [showSafeAccess, setShowSafeAccess] = useState(false)

  const wellnessServices = [
    {
      icon: <Heart className="h-8 w-8 text-purple-500" />,
      title: "Bem-estar Emocional",
      description: "Dicas e práticas para cuidar da sua saúde mental e emocional",
      category: "Saúde Mental",
    },
    {
      icon: <Apple className="h-8 w-8 text-green-500" />,
      title: "Nutrição Saudável",
      description: "Orientações nutricionais para uma vida mais equilibrada",
      category: "Alimentação",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Relacionamentos",
      description: "Como construir relacionamentos saudáveis e positivos",
      category: "Social",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-purple-500" />,
      title: "Desenvolvimento Profissional",
      description: "Capacitação e orientação para crescimento na carreira",
      category: "Carreira",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50bg-gradient-to-br from-purple-100 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-purple-500" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                Vida Ativa
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a href="#inicio" className="text-purple-800  hover:text-purple-900 transition-colors">
                Início
              </a>
              <a href="#servicos" className="text-purple-800  hover:text-purple-900 transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="text-purple-800  hover:text-purple-900 transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-purple-800  hover:text-purple-900 transition-colors">
                Contato
              </a>

              {/* Botão discreto para acesso seguro */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => (safeMode ? setSafeMode(false) : setShowSafeAccess(true))}
                className="text-gray-400 hover:text-purple-900 transition-colors"
                title={safeMode ? "Sair do modo seguro" : "Acesso seguro"}
              >
                {safeMode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Emergency Button - Always visible but discrete */}
      <EmergencyButton />

      {/* Hero Section */}
      <HeroSection safeMode={safeMode} onExitSafeMode={() => setSafeMode(false)} />
      {safeMode && (
        <div className="mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSafeMode(false)}
            className="border-gray-300 text-purple-800  hover:bg-gray-50 bg-transparent"
          >
            <EyeOff className="mr-2 h-4 w-4" />
            Sair do Modo Seguro
          </Button>
        </div>
      )}

      {/* Services Section */}
      <section id="servicos" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-300 mb-4">
              {safeMode ? "Serviços de Apoio Especializado" : "Nossos Serviços de Bem-estar"}
            </h2>
            <p className="text-purple-800  max-w-2xl mx-auto">
              {safeMode
                ? "Oferecemos suporte profissional, confidencial e seguro em diversas áreas"
                : "Descubra como podemos ajudar você a viver uma vida mais plena e equilibrada"}
            </p>
          </div>

          {safeMode ? (
            <SupportServices />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wellnessServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-purple-100">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-purple-50 to-purple-50 rounded-full w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      {service.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-300 mb-6">
              {safeMode ? "Nossos Serviços" : "Sobre o Vida Ativa"}
            </h2>
            <p className="text-lg text-purple-800  mb-8">
              {safeMode
                ? ""
                : "O Vida Ativa é uma plataforma dedicada ao seu bem-estar integral. Acreditamos que uma vida plena envolve cuidar da mente, do corpo e das relações, oferecendo recursos e orientações para que você possa alcançar seus objetivos pessoais e profissionais."}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Shield className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold text-purple-300 mb-2">{safeMode ? "Segurança Total" : "Ambiente Seguro"}</h3>
                <p className="text-purple-800  text-sm">
                  {safeMode
                    ? "Proteção completa da sua identidade e informações pessoais"
                    : "Um espaço acolhedor e livre de julgamentos"}
                </p>
              </div>

              <div className="text-center">
                <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold text-purple-300 mb-2">
                  {safeMode ? "Equipe Especializada" : "Comunidade Acolhedora"}
                </h3>
                <p className="text-purple-800  text-sm">
                  {safeMode
                    ? "Profissionais qualificados em diversas áreas de apoio"
                    : "Conecte-se com pessoas que compartilham seus objetivos"}
                </p>
              </div>

              <div className="text-center">
                <Heart className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold text-purple-300 mb-2">
                  {safeMode ? "Apoio Integral" : "Cuidado Personalizado"}
                </h3>
                <p className="text-purple-800  text-sm">
                  {safeMode
                    ? "Suporte completo em todas as áreas da sua vida"
                    : "Orientações adaptadas às suas necessidades específicas"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog com matérias separadas em coluna */}
      <section className="py-16 px-4 bg-white" id="blog">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-purple-300 mb-10 text-center">Autoamor</h2>

          <p className="text-lg text-purple-800 mb-8 text-center">
            O autoamor é a base para uma vida saudável e equilibrada. Significa reconhecer seu valor, respeitar seus limites e cuidar de si mesma com carinho e atenção. Cultivar o autoamor não é um ato de egoísmo, mas sim um compromisso diário com o seu bem-estar físico, emocional e mental. Quando você se ama, cria espaço para crescer, perdoar, se fortalecer e viver com mais plenitude.
          </p>

          <p className="text-lg text-purple-800 mb-12 text-center">
            Aqui, valorizamos o autoamor como uma prática essencial para que cada pessoa possa florescer em todas as áreas da vida — mente, corpo e relações. Nossa missão é oferecer recursos e inspirações para que você aprenda a se acolher, se respeitar e se priorizar, rumo a uma jornada de maior autenticidade e felicidade.
          </p>

          {/* Matérias empilhadas */}
          <div className="flex flex-col gap-10">
            {/* Matéria 1: Autoestima */}
            <div className="bg-purple-50 rounded-lg shadow-md p-6">
              <img
                src="/blog/autoestima.jpg"
                alt="Imagem sobre autoestima"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-purple-800 mb-2">Autoestima é um ato de coragem</h3>
              <p className="text-purple-700 mb-4">
                Valorizar-se vai além do espelho. Envolve respeito, autoconhecimento e o direito de ocupar espaços com confiança.
              </p>
            </div>

            {/* Matéria 2: Saúde emocional */}
            <div className="bg-purple-50 rounded-lg shadow-md p-6">
              <img
                src="/blog/saude-emocional.jpg"
                alt="Imagem sobre saúde emocional"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-purple-800 mb-2">Saúde emocional importa (e muito)</h3>
              <p className="text-purple-700 mb-4">
                Falar sobre o que sentimos é necessário. Aprender a cuidar das emoções fortalece relações e evita adoecimentos.
              </p>
            </div>

            {/* Matéria 3: Alimentação consciente */}
            <div className="bg-purple-50 rounded-lg shadow-md p-6">
              <img
                src="/blog/alimentacao.jpg"
                alt="Imagem sobre alimentação"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-purple-800 mb-2">Alimentação é afeto, não culpa</h3>
              <p className="text-purple-700 mb-4">
                Comer com presença e escuta é uma forma de autocuidado. Seu corpo merece ser alimentado com amor e respeito.
              </p>
            </div>

            {/* Matéria 4: Bem-estar diário */}
            <div className="bg-purple-50 rounded-lg shadow-md p-6">
              <img
                src="/blog/bem-estar.jpg"
                alt="Imagem sobre bem-estar"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-purple-800 mb-2">Pequenos rituais, grandes mudanças</h3>
              <p className="text-purple-700 mb-4">
                Um banho demorado, uma caminhada leve, um chá à tarde... O bem-estar mora nas pausas que você se permite.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-50 border-t border-purple-100 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6 text-purple-500" />
            <span className="text-lg font-semibold text-purple-300">Vida Ativa</span>
          </div>
          <p className="text-purple-800  text-sm">
            {safeMode
              ? "Sua segurança e bem-estar são nossa prioridade. © 2025 Vida Ativa - Consultoria Especializada"
              : "Cuidando do seu bem-estar integral. © 2025 Vida Ativa"}
          </p>
        </div>
      </footer>

      {/* Safe Access Modal */}
      <SafeAccessModal
        open={showSafeAccess}
        onOpenChange={setShowSafeAccess}
        onAccessGranted={() => setSafeMode(true)}
      />
    </div>
  )
}
