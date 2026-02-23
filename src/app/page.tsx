"use client";

import { ArrowRight, Zap, Target, Scan, Star, Quote } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  const handleRedirect = () => {
    window.open("https://fitpromax-oficial.lasy.pro", "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="text-center space-y-8">
            {/* Logo/Brand */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <Star className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">FitProMax</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white">
              Treino e Dieta
              <br />
              <span className="text-white/90">
                Personalizados em Minutos
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Treinos personalizados, dieta sob medida e scanner de calorias. Tudo que você precisa para alcançar seu objetivo: emagrecer, definir ou ganhar massa muscular.
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex flex-col items-center gap-2">
              <button
                onClick={handleRedirect}
                className="group px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/20 inline-flex items-center gap-3"
              >
                Começar Teste Gratuito
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-white/60">
                3 dias grátis. Depois R$ 19,90/mês. Cancele quando quiser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 sm:py-32 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Pain Points - Questions */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white/90 leading-tight">
                Cansado de treinar e não ver resultado?
              </h2>
              <h2 className="text-3xl sm:text-4xl font-bold text-white/90 leading-tight">
                Não saber o que comer?
              </h2>
              <h2 className="text-3xl sm:text-4xl font-bold text-white/90 leading-tight">
                Sem ideia de quantas calorias consome?
              </h2>
              <h2 className="text-3xl sm:text-4xl font-bold text-white/90 leading-tight">
                Seguir dietas genéricas que não funcionam pro seu objetivo?
              </h2>
            </div>

            {/* Divider */}
            <div className="py-8">
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* Answer - The Truth */}
            <div className="text-center space-y-4">
              <p className="text-xl sm:text-2xl text-white leading-relaxed">
                A maioria das pessoas não falha por falta de esforço.
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-white leading-relaxed">
                Falha por falta de estratégia e direção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section - Destaque Principal */}
      <section className="py-20 sm:py-32 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
              Veja o FitProMax em Ação
            </h2>
            <p className="text-white/60 text-lg">
              Interface moderna e intuitiva para sua jornada fitness
            </p>
          </div>

          {/* Screenshots em Destaque - Layout Moderno */}
          <div className="relative">
            {/* Screenshots Secundários - SEM LEGENDAS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <Image
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/c8739464-c8a1-4541-8243-627538ff0b44.jpg"
                  alt="App Screenshot 1"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <Image
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/32ecf87a-1a78-41b0-bd1a-54dac2c6b9f0.jpg"
                  alt="App Screenshot 2"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <Image
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/7bfa314b-1375-4bb4-ac15-de45579ca23d.jpg"
                  alt="App Screenshot 3"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <Image
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/94d00c32-ad19-4cf8-8dab-cb94575704f1.jpg"
                  alt="App Screenshot 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - ÍCONES COM CORES */}
      <section className="py-20 sm:py-32 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
              Tudo Que Você Precisa em Um Só Lugar
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Tecnologia de ponta para resultados reais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 - AZUL */}
            <div className="group p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Treinos Personalizados</h3>
              <p className="text-white/60 leading-relaxed">
                Algoritmo inteligente cria treinos específicos para seu nível, objetivos e disponibilidade. Evolua com segurança e eficiência.
              </p>
            </div>

            {/* Feature 2 - VERDE */}
            <div className="group p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Dieta Sob Medida</h3>
              <p className="text-white/60 leading-relaxed">
                Plano alimentar personalizado baseado em suas metas, preferências e restrições. Nutrição que funciona para você.
              </p>
            </div>

            {/* Feature 3 - BRANCO */}
            <div className="group p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5">
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6">
                <Scan className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Scanner de Calorias</h3>
              <p className="text-white/60 leading-relaxed">
                Aponte a câmera para qualquer refeição e receba análise nutricional completa em segundos. Controle total da sua alimentação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 sm:py-32 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-xl font-semibold text-white leading-relaxed">
                  Baseado em princípios de treino progressivo e controle calórico
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <p className="text-xl font-semibold text-white leading-relaxed">
                  Plano estratégico criado em minutos com base no seu perfil
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-xl font-semibold text-white leading-relaxed">
                  Sistema inteligente de evolução física, tenha o corpo que sempre sonhou
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-32 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
            Pronto Para Transformar
            <br />
            Seu Corpo e Mente?
          </h2>
          
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Junte-se a várias pessoas que já alcançaram seus objetivos com o FitProMax
          </p>

          <div className="flex flex-col items-center gap-3">
            <button
              onClick={handleRedirect}
              className="group px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/20 inline-flex items-center gap-3"
            >
              Começar Teste Gratuito
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-white/50">
              3 dias grátis. Depois R$ 19,90/mês. Sem taxas ocultas.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              FitProMax
            </h3>
            <p className="text-white/60 mb-6">
              Transforme seu corpo com inteligência
            </p>
            <p className="text-white/40 text-sm">
              © 2024 FitProMax. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
