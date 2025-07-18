"use client"

import { useEffect, useRef, useState } from "react"

interface HighlightTextProps {
  text: string
  delay?: number
  className?: string
}

export default function HighlightText({ text, delay = 0, className = "" }: HighlightTextProps) {
  const [isHighlighted, setIsHighlighted] = useState(false)
  const [hasBeenTriggered, setHasBeenTriggered] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || hasBeenTriggered) return

    const checkVisibility = () => {
      if (hasBeenTriggered) return

      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight

      // Elemento está visível quando entra na viewport (mais restritivo)
      const isElementVisible = rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25

      if (isElementVisible) {
        setHasBeenTriggered(true)
        setTimeout(() => {
          setIsHighlighted(true)
        }, delay)
      }
    }

    // NÃO verificar imediatamente - só no scroll
    const handleScroll = () => {
      checkVisibility()
    }

    // Intersection Observer como método principal
    let observer: IntersectionObserver | null = null

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasBeenTriggered) {
            setHasBeenTriggered(true)
            setTimeout(() => {
              setIsHighlighted(true)
            }, delay)
          }
        },
        {
          threshold: 0.3, // Mais restritivo - 30% do elemento deve estar visível
          rootMargin: "-10% 0px -10% 0px", // Margem negativa para ser mais restritivo
        },
      )

      observer.observe(element)
    }

    // Só adicionar scroll listener se Intersection Observer não estiver disponível
    if (!("IntersectionObserver" in window)) {
      window.addEventListener("scroll", handleScroll, { passive: true })
    }

    // Verificação inicial após um delay para elementos que já estão na tela
    const initialCheck = setTimeout(() => {
      checkVisibility()
    }, 500)

    return () => {
      if (observer) {
        observer.disconnect()
      }
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(initialCheck)
    }
  }, [delay, hasBeenTriggered])

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {text}
      <span
        className={`absolute inset-0 bg-black-300 transition-all duration-1000 ease-out ${
          isHighlighted ? "scale-x-100 opacity-60" : "scale-x-0 opacity-0"
        }`}
        style={{
          height: "0.8em",
          top: "0.1em",
          transformOrigin: "left center",
          borderRadius: "2px",
          zIndex: -1,
        }}
      />
    </span>
  )
}
