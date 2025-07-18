"use client"

import { useEffect, useState } from "react"
import { Geist } from "next/font/google"
import HighlightText from "@/components/highlight-text"

const vigiaFont = Geist({
  subsets: ["latin"],
  weight: ["600"],
})

const projects = [
  {
    name: "GUIA",
    description: "Grafo Urbano com Inteligência Aplicada",
  },
  {
    name: "NORTE",
    description: "Navegação Orientada por Rede Topológica Eficiente",
  },
  {
    name: "FAROL",
    description: "Ferramenta de Análise de Risco e Otimização Local",
  },
  {
    name: "LUPA",
    description: "Localização Urbana com Proteção Assistida",
  },
  {
    name: "SELO",
    description: "Sistema de Escolha de Locomoção Otimizada",
  },
]

export default function RotatingTitle() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false) // Start fade out

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
        setIsVisible(true) // Fade back in
      }, 500) // Half second for transition
    }, 6000) // 6 seconds total

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <h1
        className={`${vigiaFont.className} text-7xl md:text-9xl font-semibold tracking-tight text-black transition-all duration-500 ease-in-out ${
          isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2"
        }`}
      >
        <HighlightText text={`PROJETO ${projects[currentIndex].name}`} delay={300} />
      </h1>
      <p
        className={`text-2xl md:text-3xl font-light text-gray-800 max-w-4xl mx-auto leading-tight transition-all duration-500 ease-in-out ${
          isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2"
        }`}
      >
        <HighlightText text={projects[currentIndex].description} delay={800} />
      </p>
    </div>
  )
}
