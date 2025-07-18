"use client"

import { useRef, useState } from "react"

interface MapNode {
  id: string
  x: number
  y: number
  type: "intersection" | "poi" | "risk_area"
  label: string
  riskLevel: "low" | "medium" | "high"
}

interface MapEdge {
  source: string
  target: string
  type: "street" | "safe_route" | "risk_connection"
}

export default function MapVisualization() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [nodes] = useState<MapNode[]>([
    { id: "1", x: 100, y: 200, type: "intersection", label: "Interseção A", riskLevel: "low" },
    { id: "2", x: 300, y: 150, type: "intersection", label: "Interseção B", riskLevel: "medium" },
    { id: "3", x: 500, y: 180, type: "intersection", label: "Interseção C", riskLevel: "low" },
    { id: "4", x: 200, y: 300, type: "poi", label: "Shopping", riskLevel: "low" },
    { id: "5", x: 400, y: 280, type: "poi", label: "Hospital", riskLevel: "low" },
    { id: "6", x: 250, y: 100, type: "risk_area", label: "Área de Risco", riskLevel: "high" },
    { id: "7", x: 450, y: 320, type: "intersection", label: "Interseção D", riskLevel: "medium" },
    { id: "8", x: 150, y: 350, type: "poi", label: "Escola", riskLevel: "low" },
    { id: "9", x: 350, y: 50, type: "risk_area", label: "Área de Risco", riskLevel: "high" },
    { id: "10", x: 550, y: 250, type: "intersection", label: "Interseção E", riskLevel: "low" },
  ])

  const [edges] = useState<MapEdge[]>([
    { source: "1", target: "2", type: "street" },
    { source: "2", target: "3", type: "safe_route" },
    { source: "1", target: "4", type: "street" },
    { source: "4", target: "5", type: "safe_route" },
    { source: "5", target: "7", type: "street" },
    { source: "2", target: "6", type: "risk_connection" },
    { source: "3", target: "10", type: "safe_route" },
    { source: "8", target: "4", type: "street" },
    { source: "6", target: "9", type: "risk_connection" },
    { source: "7", target: "10", type: "street" },
  ])

  const getNodeColor = (type: string, riskLevel: string) => {
    if (type === "risk_area") return "#EF4444" // Red
    if (riskLevel === "high") return "#F59E0B" // Orange
    if (riskLevel === "medium") return "#6B7280" // Gray
    if (type === "poi") return "#10B981" // Green
    return "#3B82F6" // Blue
  }

  const getEdgeColor = (type: string) => {
    switch (type) {
      case "safe_route":
        return "#10B981" // Green
      case "risk_connection":
        return "#EF4444" // Red
      default:
        return "#6B7280" // Gray
    }
  }

  const getEdgeWidth = (type: string) => {
    return type === "safe_route" ? 3 : type === "risk_connection" ? 2 : 1
  }

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-8">
      <div className="mb-6">
        <div className="flex flex-wrap gap-6 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <span>Interseções Seguras</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span>Pontos de Interesse</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span>Áreas de Risco</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 bg-green-500"></div>
            <span>Rota Segura</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 bg-red-500"></div>
            <span>Conexão de Risco</span>
          </div>
        </div>
      </div>

      <svg ref={svgRef} width="100%" height="400" viewBox="0 0 650 400" className="border border-gray-100 rounded">
        {/* Grid background para parecer mais com mapa */}
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#f3f4f6" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Hexágonos H3 simulados */}
        <g opacity="0.3">
          <polygon
            points="150,120 180,100 210,120 210,160 180,180 150,160"
            fill="#fef3c7"
            stroke="#f59e0b"
            strokeWidth="1"
          />
          <polygon
            points="300,80 330,60 360,80 360,120 330,140 300,120"
            fill="#fee2e2"
            stroke="#ef4444"
            strokeWidth="1"
          />
          <polygon
            points="450,200 480,180 510,200 510,240 480,260 450,240"
            fill="#dcfce7"
            stroke="#22c55e"
            strokeWidth="1"
          />
        </g>

        {/* Edges (Streets) */}
        {edges.map((edge, index) => {
          const sourceNode = nodes.find((n) => n.id === edge.source)
          const targetNode = nodes.find((n) => n.id === edge.target)
          if (!sourceNode || targetNode) return null

          return (
            <line
              key={index}
              x1={sourceNode.x}
              y1={sourceNode.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke={getEdgeColor(edge.type)}
              strokeWidth={getEdgeWidth(edge.type)}
              strokeDasharray={edge.type === "safe_route" ? "0" : edge.type === "risk_connection" ? "5,5" : "0"}
              className="transition-all duration-300"
            />
          )
        })}

        {/* Rota otimizada destacada */}
        <path
          d="M 100 200 Q 200 150 300 150 T 500 180 T 550 250"
          fill="none"
          stroke="#10B981"
          strokeWidth="4"
          strokeDasharray="10,5"
          className="animate-pulse"
        />

        {/* Nodes */}
        {nodes.map((node, index) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.type === "risk_area" ? 8 : node.type === "poi" ? 6 : 5}
              fill={getNodeColor(node.type, node.riskLevel)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                filter: node.riskLevel === "high" ? "drop-shadow(0 0 6px rgba(239, 68, 68, 0.6))" : "none",
              }}
            />
            <text
              x={node.x}
              y={node.y - 15}
              textAnchor="middle"
              fontSize="10"
              fill="#374151"
              className="pointer-events-none font-medium"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Indicadores de direção */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
          </marker>
        </defs>

        {/* Setas indicando direção da rota segura */}
        <line x1="200" y1="175" x2="250" y2="160" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="350" y1="165" x2="400" y2="170" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="480" y1="190" x2="520" y2="220" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrowhead)" />
      </svg>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>Representação do sistema de roteamento seguro com hexágonos H3 e análise de risco</p>
        <p className="mt-2">A linha verde tracejada mostra a rota otimizada evitando áreas de alto risco</p>
      </div>
    </div>
  )
}
