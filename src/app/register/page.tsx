"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CadastroPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [erros, setErros] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const handleCadastro = async () => {
    setMensagem("");
    setErros({ nome: "", email: "", senha: "" });

    try {
      const resposta = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      if (resposta.ok) {
        setMensagem("Usuário cadastrado com sucesso!");
        setNome("");
        setEmail("");
        setSenha("");
      } else {
        const erroJson = await resposta.json();
        const novosErros = {
          nome: erroJson.nome || "",
          email: erroJson.email || "",
          senha: erroJson.senha || "",
        };

        setErros(novosErros);
        setMensagem("Erro ao cadastrar. Corrija os campos abaixo.");
      }
    } catch (error) {
      setMensagem("Erro ao conectar com o servidor.");
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

      {/* Conteúdo principal */}
      <div className="flex items-center justify-between flex-1 p-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/imagens/Logo.jfif"
            alt="Logo"
            width={500}
            height={500}
            className="ml-20"
          />
        </div>

        {/* Formulário de Cadastro */}
        <div className="flex flex-col justify-start items-end mr-40">
          <div className="text-center mb-10 mr-10">
            <h2 className="text-4xl font-bold text-green-900">Cadastrar</h2>
            <h3 className="text-2xl font-bold">Crie sua conta no Organify</h3>
          </div>

          <div className="flex flex-col items-end w-full max-w-md">
            {/* Nome */}
            <div className="mb-6 w-full">
              <label className="block text-xl mb-2 text-green-900">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full p-3 border border-green-900 rounded-full"
              />
              {erros.nome && <p className="text-red-600 mt-1 text-sm">{erros.nome}</p>}
            </div>

            {/* Email */}
            <div className="mb-6 w-full">
              <label className="block text-xl mb-2 text-green-900">Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-green-900 rounded-full"
              />
              {erros.email && <p className="text-red-600 mt-1 text-sm">{erros.email}</p>}
            </div>

            {/* Senha */}
            <div className="mb-6 w-full">
              <label className="block text-xl mb-2 text-green-900">Senha</label>
              <input
                type="password"
                placeholder="Crie uma senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full p-3 border border-green-900 rounded-full"
              />
              {erros.senha && <p className="text-red-600 mt-1 text-sm">{erros.senha}</p>}
            </div>

            <button
              onClick={handleCadastro}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition mt-2"
            >
              Cadastrar
            </button>

            {mensagem && (
              <p className="mt-4 text-sm text-center text-red-600">{mensagem}</p>
            )}
          </div>

          {/* Link para login */}
          <h3 className="pt-6 mr-52 text-sm">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Faça login
            </Link>
          </h3>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4 text-center text-sm flex flex-col md:flex-row justify-between items-center">
          <span>&copy; {new Date().getFullYear()} MeuSite. Todos os direitos reservados.</span>
          <div className="mt-2 md:mt-0">
            <span className="mr-4">RM556480</span>
            <span>RM558128</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
