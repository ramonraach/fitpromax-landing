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
              Transforme Seu Corpo
              <br />
              <span className="text-white/90">
                Com Inteligência Artificial
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Treinos personalizados, dieta sob medida e scanner de calorias em tempo real. 
              Tudo que você precisa para alcançar seus objetivos fitness.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={handleRedirect}
                className="group px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/20 inline-flex items-center gap-3"
              >
                Começar Transformação
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Social Proof - COM ROSTOS E ESTRELAS AMARELAS */}
            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="relative w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                      alt="Usuário 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                      alt="Usuário 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                      alt="Usuário 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                      alt="Usuário 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <span>+50k usuários ativos</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-2 text-white/80">4.9/5.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section - Destaque Principal */}
      <section className="py-20 sm:py-32 bg-black">
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
            {/* Screenshot Central em Destaque - MENOR */}
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-xs">
                <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl" />
                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-white/10">
                  <Image
                    src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/94d00c32-ad19-4cf8-8dab-cb94575704f1.jpg"
                    alt="Dashboard FitProMax"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

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

      {/* Testimonials Section - COM FOTOS E CORES */}
      <section className="py-20 sm:py-32 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
              O Que Nossos Usuários Dizem
            </h2>
            <p className="text-white/60 text-lg">
              Histórias reais de transformação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Depoimento 1 - Verde */}
            <div className="p-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-emerald-400/30 mb-4" />
              <p className="text-white/90 mb-6 leading-relaxed">
                "Perdi 15kg em 4 meses seguindo o plano do FitProMax. O scanner de calorias mudou completamente minha relação com a comida. Nunca imaginei que seria tão fácil manter o foco!"
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400/50">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                    alt="Marina Silva"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">Marina Silva</p>
                  <p className="text-sm text-white/50">São Paulo, SP</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 - Azul */}
            <div className="p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-cyan-400/30 mb-4" />
              <p className="text-white/90 mb-6 leading-relaxed">
                "Como pai de dois filhos, não tinha tempo pra academia. Os treinos personalizados de 30 minutos em casa foram perfeitos. Ganhei massa e disposição que não tinha há anos!"
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400/50">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                    alt="Carlos Mendes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">Carlos Mendes</p>
                  <p className="text-sm text-white/50">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>

            {/* Depoimento 3 - Verde/Azul */}
            <div className="p-8 rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-transparent hover:border-teal-500/50 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-teal-400 fill-teal-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-teal-400/30 mb-4" />
              <p className="text-white/90 mb-6 leading-relaxed">
                "Já tentei vários apps, mas o FitProMax é diferente. A dieta personalizada respeita minhas restrições alimentares e o app me mantém motivada todos os dias. Resultado: -12kg e muito mais saúde!"
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-teal-400/50">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Juliana Costa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">Juliana Costa</p>
                  <p className="text-sm text-white/50">Belo Horizonte, MG</p>
                </div>
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
            Junte-se a milhares de pessoas que já alcançaram seus objetivos com o FitProMax
          </p>

          <button 
            onClick={handleRedirect}
            className="group px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/20 inline-flex items-center gap-3"
          >
            Começar Transformação
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
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
