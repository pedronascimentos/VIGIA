"use client"
import { Geist } from "next/font/google"
import MapVisualization from "@/components/map-visualization"
import RotatingTitle from "@/components/rotating-title"
import HighlightText from "@/components/highlight-text"

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const vigiaFont = Geist({
  subsets: ["latin"],
  weight: ["600"],
})

export default function VigiaLanding() {
  return (
    <div className={`${geist.className} min-h-screen bg-white text-black antialiased`}>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 py-16">
        <div className="max-w-5xl text-center space-y-12">
          <RotatingTitle />
          <div className="space-y-6">
            <p className="text-lg md:text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <HighlightText
                text="Sistema de navegação urbana baseado em análise preditiva de risco usando Graph Neural Networks"
                delay={1200}
              />
            </p>
          </div>
          <div className="pt-8">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
              <HighlightText text="IEEE CIS • Antigo Security Monitor" delay={1600} />
            </p>
          </div>
        </div>
      </section>

      {/* Map Visualization Section */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-gray-900">
              <HighlightText text="Sistema de Roteamento" />
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              <HighlightText text="Modelagem do espaço urbano através de grafos com análise de risco em tempo real para otimização de rotas." />
            </p>
          </div>
          <MapVisualization />
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center text-gray-900">
            <HighlightText text="Visão Geral" />
          </h2>
          <div className="space-y-8 text-gray-800">
            <p className="text-xl leading-relaxed">
              O projeto desenvolve uma plataforma de navegação urbana que utiliza{" "}
              <HighlightText text="análise preditiva de risco" className="font-medium" /> para otimizar rotas. O sistema
              é estruturado em três fases: desenvolvimento de um MVP com engenharia de dados clássica, implementação de{" "}
              <HighlightText text="Graph Neural Networks" className="font-medium" /> para modelagem temporal, e
              aplicação em previsão imobiliária.
            </p>
            <p className="text-xl leading-relaxed">
              A abordagem supera mapas de calor estáticos ao modelar como o risco de uma área influencia regiões
              vizinhas ao longo do tempo. Utilizamos{" "}
              <HighlightText text="embeddings multimodais" className="font-medium" /> (imagem e texto) para análise de
              ocorrências urbanas, armazenamento geoespacial eficiente, e algoritmos de roteamento baseados em grafos
              ponderados por risco.
            </p>
            <p className="text-xl leading-relaxed">
              O resultado é um sistema que oferece{" "}
              <HighlightText text="rotas seguras personalizadas" className="font-medium" />, dashboards inteligentes
              para forças de segurança, e insights para políticas públicas baseadas em evidência.
            </p>
          </div>
        </div>
      </section>

      {/* Theoretical Foundation */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center text-gray-900">
            <HighlightText text="Base Teórica" />
          </h2>
          <p className="text-xl text-center text-gray-600 mb-20 max-w-4xl mx-auto">
            Fundamentos técnicos e modelos de negócio que inspiram a arquitetura do sistema
          </p>

          <div className="space-y-16">
            {/* Google Maps Architecture */}
            <div>
              <h3 className="text-3xl font-light mb-10 text-gray-900">
                <HighlightText text="Arquitetura do Google Maps: O Modelo de Referência" />
              </h3>

              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm mb-8">
                <h4 className="text-2xl font-medium mb-6 text-gray-900">Pipeline de Processamento de Dados</h4>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="font-semibold mb-3 text-gray-900">
                      <HighlightText text="1. Ingestão Massiva de Dados" />
                    </h5>
                    <p className="text-gray-700 mb-3">
                      O Google processa petabytes de dados geoespaciais: imagens de satélite, Street View, dados de
                      trânsito em tempo real, check-ins de usuários, e dados de mobilidade de dispositivos Android.
                    </p>
                    <p className="text-gray-700">
                      <strong>Aplicação no VIGIA:</strong> Nosso pipeline de ingestão
                      <code className="bg-gray-200 px-2 py-1 rounded text-sm mx-1">
                        (imagem, descrição_texto, coordenadas_gps, timestamp)
                      </code>
                      segue o mesmo princípio de coleta multimodal.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="font-semibold mb-3 text-gray-900">
                      <HighlightText text="2. Processamento com Machine Learning" />
                    </h5>
                    <p className="text-gray-700 mb-3">
                      Modelos de <HighlightText text="Computer Vision" className="font-medium" /> processam imagens do
                      Street View para identificar estabelecimentos, placas, e mudanças urbanas.
                      <HighlightText text="NLP" className="font-medium" /> analisa reviews e descrições.
                    </p>
                    <p className="text-gray-700">
                      <strong>Nossa Implementação:</strong> Embeddings de imagem (ResNet/EfficientNet) + embeddings de
                      texto (BERTimbau) para gerar risk_scores preditivos.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="font-semibold mb-3 text-gray-900">
                      <HighlightText text="3. Geohashing e Indexação Espacial" />
                    </h5>
                    <p className="text-gray-700 mb-3">
                      O Google utiliza sistemas de geohashing (similar ao H3) para dividir o mundo em células
                      hierárquicas, permitindo queries espaciais eficientes em escala global.
                    </p>
                    <p className="text-gray-700">
                      <strong>Nossa Abordagem:</strong> Hexágonos H3 da Uber para agregação de risk_scores e queries
                      geoespaciais otimizadas com PostGIS.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Model */}
            <div>
              <h3 className="text-3xl font-light mb-10 text-gray-900">
                <HighlightText text="Modelo de Negócio: Insights as a Service" />
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg border-l-4 border-gray-800 shadow-sm">
                  <h4 className="font-semibold mb-3 text-gray-900">
                    <HighlightText text="Google Earth Engine Comercial" />
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Não vende dados brutos, mas{" "}
                    <HighlightText text="capacidade de processamento" className="font-medium" />
                    dentro do ecossistema Google. Clientes executam análises em datasets massivos sem nunca extrair os
                    dados.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Exemplo:</strong> Seguradoras modelam riscos de desastres naturais usando décadas de dados
                    climáticos e de satélite processados no GEE.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-gray-600 shadow-sm">
                  <h4 className="font-semibold mb-3 text-gray-900">
                    <HighlightText text="Location Intelligence" />
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Soluções para varejistas escolherem locais de lojas baseado em
                    <HighlightText text="fluxo de pessoas" className="font-medium" /> (dados de mobilidade), perfil
                    demográfico e presença de concorrentes.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Nossa Aplicação:</strong> Risk_scores preditivos para análise imobiliária e otimização de
                    rotas de segurança pública.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg border border-gray-200">
                <h4 className="text-xl font-medium mb-4 text-gray-900">Evidências Técnicas</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    • <strong>Paper de Referência:</strong> "Using Google Earth Engine for large-scale mapping of
                    poverty" (Jean et al., 2016, Science) - demonstra capacidade de análise socioeconômica via GEE
                  </li>
                  <li>
                    • <strong>Google Cloud Location Analytics:</strong> White papers oficiais sobre soluções de
                    inteligência de localização para retail
                  </li>
                  <li>
                    • <strong>Contratos Corporativos:</strong> Unilever, grandes varejistas usam essas capacidades
                    analíticas via Google Cloud (não apenas hospedagem)
                  </li>
                </ul>
              </div>
            </div>


            {/* Technical Implications */}
            <div>
              <h3 className="text-3xl font-light mb-10 text-gray-900">
                <HighlightText text="Implicações para Arquitetura do VIGIA" />
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold mb-3 text-gray-900">Escalabilidade</h4>
                  <p className="text-gray-700 text-sm">
                    Pipeline assíncrono com processamento em batch, similar ao modelo Google. ETL jobs para consolidar
                    eventos em tabelas analíticas.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold mb-3 text-gray-900">Privacidade</h4>
                  <p className="text-gray-700 text-sm">
                    Processamento local quando possível, transmissão segura (TLS), anonimização de dados pessoais nos
                    datasets de treinamento.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold mb-3 text-gray-900">Monetização</h4>
                  <p className="text-gray-700 text-sm">
                    Venda de insights processados (dashboards, APIs de risk_score) ao invés de dados brutos, seguindo o
                    modelo "Insights as a Service".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1 - MVP */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center text-gray-900">
            <HighlightText text="Fase 1: Base Técnica" />
          </h2>
          <p className="text-xl text-center text-gray-600 mb-20 max-w-4xl mx-auto">
            Construção da infraestrutura de dados e implementação de algoritmos clássicos de machine learning.
          </p>

          <div className="space-y-16">
            <div>
              <h3 className="text-3xl font-light mb-10 text-gray-900">
                <HighlightText text="Pipeline de Dados" />
              </h3>

              <div className="bg-gray-100 p-8 rounded-lg border border-gray-200 mb-8">
                <h4 className="text-xl font-medium mb-4 text-gray-900">Entrada de Dados</h4>
                <code className="bg-gray-200 px-3 py-2 rounded text-sm block">
                  {"(imagem, descrição_texto, coordenadas_gps, timestamp)"}
                </code>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg border-l-4 border-gray-800 shadow-sm">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    <HighlightText text="Processamento de Imagem" />
                  </h5>
                  <p className="text-gray-700 mb-4">
                    Extração de <HighlightText text="vetores de embeddings" className="font-medium" /> usando modelos
                    pré-treinados (ResNet, EfficientNet). Os vetores de 128-256 dimensões representam numericamente o
                    conteúdo visual, superando simples classificações por labels.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-gray-600 shadow-sm">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    <HighlightText text="Processamento de Texto" />
                  </h5>
                  <p className="text-gray-700">
                    Conversão de descrições textuais em embeddings usando{" "}
                    <HighlightText text="BERTimbau" className="font-medium" /> (BERT em português) ou TF-IDF para
                    análise semântica das ocorrências reportadas.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-gray-500 shadow-sm">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    <HighlightText text="Cálculo de Risk Score" />
                  </h5>
                  <p className="text-gray-700">
                    Modelo de machine learning (MLP ou XGBoost) que combina embeddings de imagem e texto para gerar um
                    score de risco de 0 a 1. Treinamento inicial com dataset rotulado manualmente.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-light mb-10 text-gray-900">
                <HighlightText text="Infraestrutura de Dados" />
              </h3>

              <div className="bg-gray-100 p-8 rounded-lg border border-gray-200 mb-6">
                <h4 className="text-xl font-medium mb-4 text-gray-900">
                  <HighlightText text="PostgreSQL + PostGIS" className="font-medium" />
                </h4>
                <p className="text-lg text-gray-700">
                  Banco de dados geoespacial para queries eficientes de proximidade e análise espacial.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-3">Estrutura Principal</h5>
                <code className="bg-gray-100 px-3 py-2 rounded text-sm block mb-3">
                  {"reports (id, timestamp, latitude, longitude, image_embedding, text_embedding, risk_score)"}
                </code>
                <p className="text-gray-700">
                  Permite consultas como "encontrar todos os reports em um raio de 500m" com alta performance.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-light mb-10 text-gray-900">
                <HighlightText text="Aplicações Práticas" />
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold mb-3">
                    <HighlightText text="Mapas de Calor" />
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Uso da biblioteca <HighlightText text="H3 da Uber" className="font-medium" /> para dividir o mapa em
                    hexágonos. Cálculo do risk_score médio por hexágono para visualização eficiente.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold mb-3">
                    <HighlightText text="Roteamento Seguro" />
                  </h4>
                  <p className="text-gray-700">
                    Modelagem das ruas como grafo onde o peso das arestas combina distância e risk_score. Aplicação de
                    algoritmos <HighlightText text="Dijkstra ou A*" className="font-medium" /> para encontrar rotas
                    otimizadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2 - GNN */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center text-gray-900">
            <HighlightText text="Fase 2: Graph Neural Networks" />
          </h2>
          <p className="text-xl text-center text-gray-600 mb-20 max-w-4xl mx-auto">
            Modelagem da dinâmica espacial do risco através de redes neurais especializadas em grafos.
          </p>

          <div className="space-y-16">
            <div>
              <h3 className="text-3xl font-light mb-8 text-gray-900">
                <HighlightText text="Motivação Técnica" />
              </h3>
              <div className="bg-gray-100 p-8 rounded-lg border border-gray-200">
                <p className="text-xl text-gray-700 mb-4">
                  <strong>Questão Central:</strong> Como o risco de uma área influencia áreas vizinhas ao longo do
                  tempo?
                </p>
                <p className="text-lg text-gray-700">
                  As GNNs permitem modelar a{" "}
                  <HighlightText text="propagação espacial de risco" className="font-medium" />, superando análises
                  estáticas e capturando dinâmicas temporais complexas do ambiente urbano.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-light mb-10 text-gray-900">
                <HighlightText text="Estrutura do Grafo" />
              </h3>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg border-l-4 border-gray-800 shadow-sm">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    <HighlightText text="Nós" />
                  </h5>
                  <p className="text-gray-700">
                    Cada hexágono H3 do mapa representa um nó com features: risk_score_médio, número_de_reports,
                    variância_do_risk_score, tipos_de_problemas_predominantes.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-gray-600 shadow-sm">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    <HighlightText text="Arestas" />
                  </h5>
                  <p className="text-gray-700">
                    Conexões entre hexágonos adjacentes, opcionalmente ponderadas por fluxo de trânsito ou proximidade
                    geográfica.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-light mb-10 text-gray-900">
                <HighlightText text="Tarefa Preditiva" />
              </h3>

              <div className="bg-gray-100 p-8 rounded-lg border border-gray-200">
                <h4 className="text-2xl font-medium mb-6 text-gray-900">
                  <HighlightText text="Previsão Temporal de Risco" />
                </h4>
                <p className="text-lg text-gray-700 mb-4">
                  Treinamento com snapshots semanais do grafo. O modelo aprende a prever o risk_score de cada região
                  para a próxima semana baseado no estado atual da rede.
                </p>
                <p className="text-lg text-gray-700">
                  Esta abordagem captura <HighlightText text="padrões de propagação" className="font-medium" /> que
                  métodos tradicionais não conseguem identificar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3 - Real Estate */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center text-gray-900">
            <HighlightText text="Fase 3: Aplicação Imobiliária" />
          </h2>
          <p className="text-xl text-center text-gray-600 mb-20 max-w-4xl mx-auto">
            Utilização do risk_score como feature diferenciadora em modelos de precificação imobiliária.
          </p>

          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-medium mb-6 text-gray-900">
                <HighlightText text="Modelo Preditivo" />
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Algoritmo</h4>
                  <p className="text-gray-700">XGBoost ou LightGBM para robustez e interpretabilidade</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Target</h4>
                  <p className="text-gray-700">Preço do imóvel (regressão)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Diferencial</h4>
                  <p className="text-gray-700">Risk_score atual e previsto pela GNN</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-medium mb-6 text-gray-900">
                <HighlightText text="Features do Modelo" />
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Features Inovadoras</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Risk_score atual da região</li>
                    <li>• Risk_score previsto (GNN)</li>
                    <li>• Tendência temporal de risco</li>
                    <li>• Densidade de ocorrências próximas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Features Tradicionais</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Distância do centro urbano</li>
                    <li>• Infraestrutura próxima</li>
                    <li>• Dados socioeconômicos (IBGE)</li>
                    <li>• Características do imóvel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center text-gray-900">
            <HighlightText text="Stack Tecnológico" />
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-semibold mb-2">Dados</h4>
                <p className="text-gray-700">
                  PostgreSQL + PostGIS
                  <br />
                  H3 Geohashing
                  <br />
                  Vector Storage
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-semibold mb-2">ML Clássico</h4>
                <p className="text-gray-700">
                  XGBoost / LightGBM
                  <br />
                  BERTimbau (NLP)
                  <br />
                  ResNet/EfficientNet
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-semibold mb-2">Graph Neural Networks</h4>
                <p className="text-gray-700">
                  PyTorch Geometric
                  <br />
                  DGL (Deep Graph Library)
                  <br />
                  Temporal GNN Models
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-semibold mb-2">Algoritmos</h4>
                <p className="text-gray-700">
                  Dijkstra / A*
                  <br />
                  Graph Convolution
                  <br />
                  Spatial Aggregation
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-semibold mb-2">Deploy</h4>
                <p className="text-gray-700">
                  Docker + Kubernetes
                  <br />
                  MLflow
                  <br />
                  CI/CD Pipelines
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-semibold mb-2">Interface</h4>
                <p className="text-gray-700">
                  Mapas Interativos
                  <br />
                  Dashboards Real-time
                  <br />
                  APIs RESTful
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Names Table */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center text-gray-900">
            <HighlightText text="Nomenclaturas do Projeto" />
          </h2>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Acrônimo
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Descrição
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg font-semibold text-gray-900">GUIA</div>
                    <div className="text-sm text-gray-500">Simples, amigável e direto</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      <HighlightText text="Grafo Urbano com Inteligência Aplicada" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Combina acolhimento para usuários com precisão técnica para a comunidade IEEE
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg font-semibold text-gray-900">NORTE</div>
                    <div className="text-sm text-gray-500">Direção, orientação, propósito</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      <HighlightText text="Navegação Orientada por Rede Topológica Eficiente" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Nome poético com acrônimo altamente técnico, ideal para portfólio acadêmico
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg font-semibold text-gray-900">FAROL</div>
                    <div className="text-sm text-gray-500">Luz na escuridão, referência segura</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      <HighlightText text="Ferramenta de Análise de Risco e Otimização Local" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Imagem evocativa com resumo profissional das funcionalidades práticas
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg font-semibold text-gray-900">LUPA</div>
                    <div className="text-sm text-gray-500">Análise detalhada, visão apurada</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      <HighlightText text="Localização Urbana com Proteção Assistida" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Foco na experiência do usuário com ênfase em proteção e assistência
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg font-semibold text-gray-900">SELO</div>
                    <div className="text-sm text-gray-500">Certificação, qualidade, confiança</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      <HighlightText text="Sistema de Escolha de Locomoção Otimizada" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Inspira confiança com descrição clara da função central do sistema
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className={`${vigiaFont.className} text-4xl font-semibold mb-6 text-white`}>
            <HighlightText text="PROJETO DE NAVEGAÇÃO URBANA" className="text-white" />
          </h2>
          <p className="text-gray-400 text-lg mb-4">Inteligência Artificial Aplicada à Segurança Urbana</p>
          <p className="text-gray-500 mb-8">Graph Neural Networks para Análise Preditiva de Risco</p>

          <div className="border-t border-gray-800 pt-8 space-y-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <span className="font-medium">IEEE CIS UnB</span>
              </span>
              <span className="hidden md:block">•</span>
              <span className="flex items-center gap-2">
                <span className="font-medium">Pedro Henrique</span>
              </span>
              <span className="hidden md:block">•</span>
              <a
                href="https://github.com/pedronascimentos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>github.com/pedronascimentos</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
