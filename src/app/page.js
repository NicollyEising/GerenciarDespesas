"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");
  const [dia, setDia] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [despesas, setDespesas] = useState([]);

  // Carrega despesas do localStorage ao iniciar o componente
  useEffect(() => {
    const despesasSalvas = localStorage.getItem("despesas");
    if (despesasSalvas) {
      setDespesas(JSON.parse(despesasSalvas));
    }
  }, []);

  function gravarDespesa(despesa) {
    const novasDespesas = [...despesas, despesa];
    setDespesas(novasDespesas);
    localStorage.setItem("despesas", JSON.stringify(novasDespesas));
  }

  function calcularDespesas() {
    if (!mes || !ano || !dia || !tipo || !descricao || !valor) {
      alert("Todos os campos são obrigatórios.");
      return;
    }
  
    const despesa = { mes, ano, dia, tipo, descricao, valor };
    gravarDespesa(despesa);
  
    // Limpar campos
    setMes(""); setAno(""); setDia(""); setTipo(""); setDescricao(""); setValor("");
  }

  function removerDespesa(index) {
    const novasDespesas = despesas.filter((_, i) => i !== index);
    setDespesas(novasDespesas);
    localStorage.setItem("despesas", JSON.stringify(novasDespesas));
  }

  return (
    <div>
      <main>
        <div className="flex items-center justify-center min-h-screen">
          <div className="container mx-auto px-4">
            <h1 className="mb-5 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Registro de Despesas
            </h1>
            <p className="mb-10 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Preencha os campos abaixo para registrar suas despesas.
            </p>

            {/* Linha de filtros */}
            <div className="mt-4 flex flex-wrap gap-4">
              <label className="flex-1 min-w-[120px] font-bold">
                <select
                  id="Mes"
                  value={mes}
                  onChange={(e) => setMes(e.target.value)}
                  className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Mês</option>
                  <option>Janeiro</option>
                  <option>Fevereiro</option>
                  <option>Março</option>
                  <option>Abril</option>
                  <option>Maio</option>
                  <option>Junho</option>
                  <option>Julho</option>
                  <option>Agosto</option>
                  <option>Setembro</option>
                  <option>Outubro</option>
                  <option>Novembro</option>
                  <option>Dezembro</option>
                </select>
              </label>

              <label className="flex-1 min-w-[100px] font-bold">
                <select
                  id="Ano"
                  value={ano}
                  onChange={(e) => setAno(e.target.value)}
                  className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Ano</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </select>
              </label>

              <div className="w-24 font-bold">
                <input
                  id="Dia"
                  value={dia}
                  onChange={(e) => setDia(e.target.value)}
                  className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Dia"
                />
              </div>

              <label className="flex-1 min-w-[150px] font-bold">
                <select
                  id="Tipo"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Tipo</option>
                  <option>Entretenimento</option>
                  <option>Aluguel</option>
                  <option>Alimentação</option>
                  <option>Educação</option>
                </select>
              </label>
            </div>

            {/* Linha de descrição e valor */}
            <div className="flex items-center mt-4 gap-4">
              <input
                id="Descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Descrição"
              />
              <input
                id="Valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Valor"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="button"
                onClick={calcularDespesas}
              >
                Adicionar
              </button>
            </div>

            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            {/* Tabela de despesas */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="py-3 px-6 text-left font-semibold text-gray-700 dark:text-gray-300">Mês</th>
                    <th className="py-3 px-6 text-left font-semibold text-gray-700 dark:text-gray-300">Ano</th>
                    <th className="py-3 px-6 text-left font-semibold text-gray-700 dark:text-gray-300">Dia</th>
                    <th className="py-3 px-6 text-left font-semibold text-gray-700 dark:text-gray-300">Tipo</th>
                    <th className="py-3 px-6 text-left font-semibold text-gray-700 dark:text-gray-300">Descrição</th>
                    <th className="py-3 px-6 text-left font-semibold text-gray-700 dark:text-gray-300">Valor</th>
                    <th className="py-3 px-6 text-left font-semibold text-gray-700 dark:text-gray-300">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900">
                  {despesas.map((d, index) => (
                    <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                      <td className="py-3 px-6">{d.mes}</td>
                      <td className="py-3 px-6">{d.ano}</td>
                      <td className="py-3 px-6">{d.dia}</td>
                      <td className="py-3 px-6">{d.tipo}</td>
                      <td className="py-3 px-6">{d.descricao}</td>
                      <td className="py-3 px-6">{d.valor}</td>
                      <td className="py-3 px-6">
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                          onClick={() => removerDespesa(index)}
                        >
                          Remover
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
