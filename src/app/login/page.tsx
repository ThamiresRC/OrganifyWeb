"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erros, setErros] = useState({ email: "", senha: "" });

  const router = useRouter();

  const handleLogin = async () => {
    setMensagem("");
    setErros({ email: "", senha: "" });

    if (!email || !senha) {
      const novosErros = {
        email: email ? "" : "Email é obrigatório.",
        senha: senha ? "" : "Senha é obrigatória.",
      };
      setErros(novosErros);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "GET",
      });

      const users = await response.json();

      const user = users.find(
        (u: any) => u.email === email && u.senha === senha
      );

      if (user) {
        setMensagem("Login realizado com sucesso!");
        router.push("/schedule");
      } else {
        const emailExiste = users.some((u: any) => u.email === email);

        setErros({
          email: emailExiste ? "" : "Email incorreto.",
          senha: emailExiste ? "Senha incorreta." : "",
        });

        setMensagem("Erro ao fazer login. Corrija os campos acima.");
      }
    } catch (error) {
      setMensagem("Erro de conexão com o servidor.");
    }
  };

  return (
    <main className="flex flex-col justify-between h-screen">
      {/* Cabeçalho */}
      <header className="bg-green-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/imagens/Logo.jfif" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold">Organify</span>
          </div>
          <div className="flex space-x-4">
            <Link href="/">
              <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100 transition">
                Home
              </button>
            </Link>
            <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100 transition">
              Download
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="flex items-center justify-between flex-1 p-10">
        <div className="flex-shrink-0">
          <Image
            src="/imagens/Logo.jfif"
            alt="Logo"
            width={500}
            height={500}
            className="ml-20"
          />
        </div>

        <div className="flex flex-col justify-start items-end mr-40">
          <div className="text-center mb-10 mr-10">
            <h2 className="text-4xl font-bold text-green-900">Login</h2>
            <h3 className="text-2xl font-bold">Acesse sua conta no Organify</h3>
          </div>

          <div className="flex flex-col items-end w-full max-w-md">
            <div className="mb-6 w-full">
              <label className="block text-xl mb-2 text-green-900">Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-green-900 rounded-full"
              />
              {erros.email && (
                <p className="text-red-600 mt-1 text-sm">{erros.email}</p>
              )}
            </div>

            <div className="mb-6 w-full">
              <label className="block text-xl mb-2 text-green-900">Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full p-3 border border-green-900 rounded-full"
              />
              {erros.senha && (
                <p className="text-red-600 mt-1 text-sm">{erros.senha}</p>
              )}
            </div>

            <button
              onClick={handleLogin}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition mt-2"
            >
              Entrar
            </button>

            {mensagem && (
              <p className="mt-4 text-sm text-red-600 text-center">{mensagem}</p>
            )}
          </div>

          <h3 className="pt-6 mr-52 text-sm">
            Não tem uma conta?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Cadastre-se
            </Link>
          </h3>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4 text-center text-sm flex flex-col md:flex-row justify-between items-center">
          <span>
            &copy; {new Date().getFullYear()} MeuSite. Todos os direitos reservados.
          </span>
          <div className="mt-2 md:mt-0">
            <span className="mr-4">RM556480</span>
            <span>RM558128</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
