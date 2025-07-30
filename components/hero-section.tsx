"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Users, ChevronRight, EyeOff } from "lucide-react"

interface HeroSectionProps {
  safeMode: boolean
  onExitSafeMode?: () => void
}

export function HeroSection({ safeMode, onExitSafeMode }: HeroSectionProps) {
  if (safeMode) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-purple-300bg-gradient-to-br from-purple-100 to-purple-300">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Shield className="h-16 w-16 text-purple-500 mx-auto mb-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-purple-300 mb-6">
                Consultoria{" "}
                <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                  Especializada
                </span>
              </h1>
              <p className="text-xl text-purple-800  mb-8 max-w-2xl mx-auto">
                Oferecemos consultoria profissional em diversas áreas para seu desenvolvimento pessoal e bem-estar.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-purple-200 bg-white/80">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-purple-300 mb-2">Atendimento Reservado</h3>
                  <p className="text-sm text-purple-800 ">Sua privacidade é nossa prioridade</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white/80">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-purple-300 mb-2">Consultores Qualificados</h3>
                  <p className="text-sm text-purple-800 ">Profissionais qualificados</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white/80">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-purple-300 mb-2">Disponibilidade Flexível</h3>
                  <p className="text-sm text-purple-800 ">Estamos sempre disponíveis</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-purple-900 px-8 py-3"
              >
                Agendar Consulta
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-600 text-purple-300 px-8 py-3 bg-transparent"
              >
                Ver Especialidades
              </Button>
            </div>

            {/* Botão para sair do modo seguro */}
            <div className="mt-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={onExitSafeMode}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <EyeOff className="mr-2 h-4 w-4" />
                Voltar ao modo normal
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative w-full h-[500px]">
  {/* Imagem de fundo */}
  <img
    src="/purple.jpg"
    alt="Banner Bem-estar"
    className="absolute inset-0 w-full h-full object-cover opacity-15"
  />
  {/* Camada translúcida sobre a imagem */}

  <div className="absolute inset-3 bg-purple-900 bg-opacity-15"></div>

  {/* Texto e botões centralizados sobre a imagem */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
    <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6">
      Bem-estar começa com{" "}
      <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
        pequenos gestos
      </span>
    </h1>
    <p className="text-xl text-purple-900 mb-8 max-w-2xl">
      Transforme seu dia com atitudes simples: respire fundo, movimente-se, cuide do seu corpo e mente. Aqui você encontra dicas acolhedoras para cultivar leveza e autocuidado, respeitando seu ritmo e suas necessidades.
    </p>

    <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
      <Button
        size="lg"
        className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-purple-900 px-8 py-3"
      >
        Começar Agora
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-white text-purple-900 hover:bg-white hover:text-purple-900 px-8 py-3 bg-transparent"
      >
        Explorar Serviços
      </Button>
    </div>
  </div>
</section>

  )
}
