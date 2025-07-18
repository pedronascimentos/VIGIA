"use client"

import { useRef, useState } from "react"

interface Node {
  id: string
  x: number
  y: number
  type: "via" | "poi" | "ocorrencia" | "crime"
  label: string
}

interface Edge {
  source: string
  target: string
}

export default function GraphVisualization() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [nodes] = useState<Node[]>([
    { id: "1", x: 200, y: 150, type: "via", label: "Segmento Via A" },
    { id: "2", x: 400, y: 100, type: "via", label: "Segmento Via B" },
    { id: "3", x: 350, y: 250, type: "via", label: "Segmento Via C" },
    { id: "4", x: 150, y: 300, type: "poi", label: "Escola" },
    { id: "5", x: 450, y: 200, type: "poi", label: "Hospital" },
    { id: "6", x: 300, y: 50, type: "ocorrencia", label: "Pichação" },
    { id: "7", x: 500, y: 150, type: "crime", label: "Registro Criminal" },
    { id: "8", x: 100, y: 200, type: "poi", label: "Lote Baldio" },
    { id: "9", x: 250, y: 200, type: "via", label: "Segmento Via D" },
    { id: "10", x: 380, y: 320, type: "ocorrencia", label: "Lixo Acumulado" },
  ])

  const [edges] = useState<Edge[]>([
    { source: "1", target: "2" },
    { source: "2", target: "3" },
    { source: "1", target: "9" },
    { source: "9", target: "3" },
    { source: "4", target: "1" },
    { source: "5", target: "2" },
    { source: "6", target: "2" },
    { source: "7", target: "2" },
    { source: "8", target: "1" },
    { source: "10", target: "3" },
  ])

  const getNodeColor = (type: string) => {
    switch (type) {
      case "via":
        return "#3B82F6" // Blue
      case "poi":
        return "#10B981" // Green
      case "ocorrencia":
        return "#F59E0B" // Yellow
      case "crime":
        return "#EF4444" // Red
      default:
        return "#6B7280"
    }
  }

  const getNodeSize = (type: string) => {
    switch (type) {
      case "via":
        return 12
      case "poi":
        return 8
      case "ocorrencia":
        return 6
      case "crime":
        return 6
      default:
        return 6
    }
  }

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-8">
      <div className="mb-6">
        <div className="flex flex-wrap gap-6 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <span>Segmento de Via</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Ponto de Interesse</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <span>Ocorrência Visual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span>Registro Criminal</span>
          </div>
        </div>
      </div>

      <svg ref={svgRef} width="100%" height="400" viewBox="0 0 600 400" className="border border-gray-100 rounded">
        {/* Edges */}
        {edges.map((edge, index) => {
          const sourceNode = nodes.find((n) => n.id === edge.source)
          const targetNode = nodes.find((n) => n.id === edge.target)
          if (!sourceNode || !targetNode) return null

          return (
            <line
              key={index}
              x1={sourceNode.x}
              y1={sourceNode.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke="#E5E7EB"
              strokeWidth="1"
              className="animate-pulse"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: "3s",
              }}
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((node, index) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={getNodeSize(node.type)}
              fill={getNodeColor(node.type)}
              className="animate-pulse cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: "2s",
              }}
            />
            <text
              x={node.x}
              y={node.y - getNodeSize(node.type) - 5}
              textAnchor="middle"
              fontSize="10"
              fill="#374151"
              className="pointer-events-none"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Animated data flow */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" opacity="0.6" />
          </marker>
        </defs>

        {/* Data flow animation */}
        {edges.slice(0, 3).map((edge, index) => {
          const sourceNode = nodes.find((n) => n.id === edge.source)
          const targetNode = nodes.find((n) => n.id === edge.target)
          if (!sourceNode || !targetNode) return null

          return (
            <line
              key={`flow-${index}`}
              x1={sourceNode.x}
              y1={sourceNode.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke="#3B82F6"
              strokeWidth="2"
              strokeDasharray="5,5"
              markerEnd="url(#arrowhead)"
              opacity="0.6"
              className="animate-pulse"
              style={{
                animationDelay: `${index * 0.5}s`,
                animationDuration: "4s",
              }}
            />
          )
        })}
      </svg>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>Representação visual da estrutura de grafos heterogêneos do Projeto VIGIA</p>
        <p className="mt-2">As conexões mostram como diferentes tipos de dados se relacionam na rede urbana</p>
      </div>
    </div>
  )
}
