"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-green-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/imagens/Logo.jfif" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold">Organify</span>
          </div>

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

      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Organize sua vida com Organify
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Descubra como o Organify pode ajudar você a manter suas tarefas, notas e compromissos organizados de forma prática e intuitiva.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/imagens/visual.jpg"
                alt="Visual Intuitiva"
                width={200}
                height={200}
                className="rounded shadow-lg"
              />
              <h3 className="font-bold mt-4">Visual Intuitiva</h3>
              <p className="text-gray-700">
                Interface moderna e fácil de usar para uma experiência sem complicações.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/imagens/flexivel.jpg"
                alt="Agenda Flexível"
                width={200}
                height={200}
                className="rounded shadow-lg"
              />
              <h3 className="font-bold mt-4">Agenda Flexível</h3>
              <p className="text-gray-700">
                Organize sua agenda por dia, semana ou mês conforme sua necessidade.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/imagens/notificacao.jpg"
                alt="Notificações"
                width={200}
                height={200}
                className="rounded shadow-lg"
              />
              <h3 className="font-bold mt-4">Notificações</h3>
              <p className="text-gray-700">
                Receba lembretes e notificações para não perder nenhum compromisso.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Como Funciona o Organify
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <p className="text-gray-700 mb-4">
                O Organify integra suas tarefas, notas e agenda em uma única plataforma intuitiva.
                Basta criar sua conta, inserir seus compromissos e deixar que o Organify ajude a
                manter sua rotina organizada.
              </p>
              <p className="text-gray-700">
                Personalize suas categorias, defina lembretes e acompanhe o progresso das suas atividades
                de forma simples e prática. Tudo pensado para otimizar seu tempo e aumentar sua produtividade.
              </p>
            </div>
            <div className="md:w-1/2 p-4 flex justify-center">
              <Image
                src="/imagens/service.jpg"
                alt="Como Funciona"
                width={500}
                height={300}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Integrações e Recursos
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            O Organify se integra facilmente com outras ferramentas para proporcionar uma experiência completa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/imagens/email.jpg"
                alt="Integração com Email"
                width={200}
                height={200}
                className="rounded shadow-lg"
              />
              <h3 className="font-bold mt-4">Email e Calendário</h3>
              <p className="text-gray-700">
                Sincronize compromissos e notificações com seus aplicativos de e-mail e calendário.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/imagens/mobile.jpg"
                alt="Aplicativo Mobile"
                width={200}
                height={200}
                className="rounded shadow-lg"
              />
              <h3 className="font-bold mt-4">Aplicativo Mobile</h3>
              <p className="text-gray-700">
                Acesse e gerencie suas atividades de qualquer lugar, com total sincronização.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/imagens/ferramentas.jpg"
                alt="Ferramentas de Produtividade"
                width={200}
                height={200}
                className="rounded shadow-lg"
              />
              <h3 className="font-bold mt-4">Ferramentas de Produtividade</h3>
              <p className="text-gray-700">
                Conecte com apps de gestão de projetos e aumente sua eficiência no trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            O que dizem nossos usuários
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded shadow-sm">
              <p className="text-gray-700 italic">
                "O Organify transformou minha rotina. Agora, consigo organizar minhas tarefas e compromissos sem stress!"
              </p>
              <p className="mt-4 text-green-600 font-bold">– João Silva</p>
            </div>
            <div className="p-6 border rounded shadow-sm">
              <p className="text-gray-700 italic">
                "A integração com outros aplicativos e a interface intuitiva me ajudam a ser mais produtivo no dia a dia."
              </p>
              <p className="mt-4 text-green-600 font-bold">– Maria Oliveira</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comece a transformar seu dia a dia
          </h2>
          <p className="mb-8">
            Experimente Organify e tenha controle total sobre suas tarefas e compromissos.
          </p>
          <Link href="/register">
            <button className="bg-white text-green-600 px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Criar Conta Gratuitamente
            </button>
          </Link>
        </div>
      </section>

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
