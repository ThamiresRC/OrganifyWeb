"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-green-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo à esquerda */}
          <div className="flex items-center space-x-2">
            <Image src="/imagens/Logo.jfif" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold">Organify</span>
          </div>

          {/* Botões à direita */}
          <div className="flex space-x-4">
            <Link href="/login">
              <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100 transition">
                Entrar
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100 transition">
                Cadastrar
              </button>
            </Link>
            <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100 transition">
              Download
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-col items-center justify-center flex-1 px-8 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Quais <span className="text-green-600">metas</span> você vai conquistar hoje?
        </h1>
        <p className="text-gray-700 mb-10 max-w-2xl">
          Lembre-se de tudo e enfrente qualquer projeto com suas notas, tarefas e agenda, tudo em um só lugar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
          <div>
            <h3 className="font-bold mb-2">🧭 Trabalhe em qualquer lugar</h3>
            <p className="text-sm text-gray-700">
              Mantenha informações importantes por perto — suas notas sincronizam automaticamente em todos os seus dispositivos.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">📌 Lembre-se de tudo</h3>
            <p className="text-sm text-gray-700">
              Torne suas notas mais úteis adicionando texto, imagens, áudio, digitalizações, PDFs e documentos.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">💡 Transforme tarefas em conquistas</h3>
            <p className="text-sm text-gray-700">
              Reúna suas notas, tarefas e cronogramas para fazer as coisas com mais facilidade.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">🔍 Encontre tudo rapidamente</h3>
            <p className="text-sm text-gray-700">
              Obtenha o que você precisa, quando precisa, com poderosas e flexíveis capacidades de busca.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm flex flex-col md:flex-row justify-between items-center">
          <span>&copy; {new Date().getFullYear()} MeuSite. Todos os direitos reservados.</span>
          <div className="mt-2 md:mt-0">
            <span className="mr-4">RM556480</span>
            <span>RM558128</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
