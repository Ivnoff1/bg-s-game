import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Gamepad2, Download, Trophy, Zap, Flame, Github, Twitter, Instagram } from "lucide-react"

export default function RetroGameLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      {/* CRT Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(to_bottom,rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20"></div>

      {/* Retro Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e559f9_1px,transparent_1px)] bg-[length:24px_24px] opacity-[0.15] z-0"></div>

      <header className="relative z-20 border-b border-purple-900/50 backdrop-blur-sm bg-black/40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse">
            BG&#39;S GAME
          </div>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-pink-300"
          >
            JUGAR AHORA
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  ¡BG&#39;S GAME!
                  ENFRENTA EL DESAFÍO Y SOBREVIVE
                </h1>
                <p className="text-purple-200 max-w-md mx-auto md:mx-0">
                  Un juego de combate donde solo los más fuertes sobreviven. ¿Tienes lo que se necesita?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-2 border-purple-400/30 shadow-lg shadow-purple-900/30 animate-pulse">
                    <Gamepad2 className="mr-2 h-4 w-4" />
                    JUGAR AHORA
                  </Button>
                  <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-900/30">
                    <Download className="mr-2 h-4 w-4" />
                    DESCARGAR
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative border-2 border-purple-500/50 rounded-lg overflow-hidden shadow-2xl shadow-purple-900/50">
                  <Image
                    src="/Kirby_1.webp"
                    width={600}
                    height={400}
                    alt="Bgs Game Combat Scene"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="inline-block px-2 py-1 bg-pink-600/80 text-white text-xs rounded">
                      PIXEL PERFECT COMBAT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 bg-gradient-to-b from-black to-purple-950/30 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                LA HISTORIA
              </h2>
              <p className="text-purple-200 text-lg leading-relaxed">
                Embárcate en una intensa batalla donde no hay rescates ni segundas oportunidades. Enfrenta a tu primer
                enemigo y luego al jefe final en un desafío épico donde solo importa sobrevivir.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="bg-purple-900/30 border border-purple-500/30 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mx-auto flex items-center justify-center mb-3">
                    <Gamepad2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-purple-300 font-bold">CONTROLES INTUITIVOS</h3>
                </div>
                <div className="bg-purple-900/30 border border-purple-500/30 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mx-auto flex items-center justify-center mb-3">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-purple-300 font-bold">DESAFÍOS ÉPICOS</h3>
                </div>
                <div className="bg-purple-900/30 border border-purple-500/30 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mx-auto flex items-center justify-center mb-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-purple-300 font-bold">COMBOS PODEROSOS</h3>
                </div>
                <div className="bg-purple-900/30 border border-purple-500/30 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mx-auto flex items-center justify-center mb-3">
                    <Flame className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-purple-300 font-bold">GRÁFICOS RETRO</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4c1d95_0,transparent_70%)] opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                CARACTERÍSTICAS
              </h2>
              <p className="text-purple-300 mt-2">Descubre lo que hace único a BG&#39;s Game</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-200">⚔️ Nivel 1: Derrota al primer enemigo</h3>
                </div>
                <p className="text-purple-300 pl-14">
                  Enfréntate a un oponente formidable en un combate uno a uno. Aprende sus patrones y supera el primer
                  desafío.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Flame className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-200">🔥 Nivel 2: Enfréntate al jefe final</h3>
                </div>
                <p className="text-purple-300 pl-14">
                  El verdadero reto comienza. El jefe final pondrá a prueba todas tus habilidades en un combate épico.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Gamepad2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-200">🎮 Jugabilidad rápida y desafiante</h3>
                </div>
                <p className="text-purple-300 pl-14">
                  Controles precisos y respuesta inmediata. Cada movimiento cuenta en esta intensa batalla.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-200">💥 Estética inspirada en clásicos arcade</h3>
                </div>
                <p className="text-purple-300 pl-14">
                  Gráficos pixel art y efectos retro que te transportarán a la época dorada de los arcades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gameplay Section */}
        <section id="gameplay" className="py-16 bg-gradient-to-b from-purple-950/30 to-black relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                GAMEPLAY
              </h2>
              {/* <p className="text-purple-300 mt-2">Mira el juego en acción</p> */}
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative border-2 border-purple-500/50 rounded-lg overflow-hidden shadow-2xl shadow-purple-900/50">
                <div className="aspect-video bg-black">
                  <Image
                    src="/Kirby_1.webp"
                    width={1280}
                    height={720}
                    alt="Bgs Game Gameplay"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-purple-600/80 flex items-center justify-center cursor-pointer hover:bg-purple-500/80 transition-colors">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#4c1d95_0,transparent_70%)] opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                ¿LISTO PARA EL DESAFÍO?
              </h2>
              <p className="text-purple-200 text-lg">
                Descarga ahora y demuestra que tienes lo necesario para sobrevivir
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-2 border-purple-400/30 shadow-lg shadow-purple-900/30 text-lg py-6 px-8 animate-pulse">
                  <Download className="mr-2 h-5 w-5" />
                  DESCARGAR AHORA
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-900/30 text-lg py-6 px-8"
                >
                  <Gamepad2 className="mr-2 h-5 w-5" />
                  JUGAR GRATIS
                </Button>
              </div>

              {/* <div className="pt-8 flex justify-center gap-8">
                <div className="bg-purple-900/30 border border-purple-500/30 p-4 rounded-lg">
                  <Image
                    src="/placeholder.svg?height=60&width=180"
                    width={180}
                    height={60}
                    alt="Platform 1"
                    className="h-10 w-auto"
                  />
                </div>
                <div className="bg-purple-900/30 border border-purple-500/30 p-4 rounded-lg">
                  <Image
                    src="/placeholder.svg?height=60&width=180"
                    width={180}
                    height={60}
                    alt="Platform 2"
                    className="h-10 w-auto"
                  />
                </div>
                <div className="bg-purple-900/30 border border-purple-500/30 p-4 rounded-lg">
                  <Image
                    src="/placeholder.svg?height=60&width=180"
                    width={180}
                    height={60}
                    alt="Platform 3"
                    className="h-10 w-auto"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-purple-900/50 bg-black/80 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 flex items-center">
                <Gamepad2 className="mr-2 h-6 w-6 text-purple-500" />
                BGS GAME
              </div>
              <p className="text-purple-400 text-sm mt-2">© 2025 BGs Game. All rights reserved.</p>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-300 hover:bg-purple-700 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-300 hover:bg-purple-700 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-300 hover:bg-purple-700 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Glitch Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-20 bg-gradient-to-b from-transparent to-purple-900/5 opacity-30"></div>
    </div>
  )
}

