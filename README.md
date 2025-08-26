# Registro de Despesas — README

## Descrição

Aplicação front-end simples em Next.js para registrar despesas no navegador. Os dados são mantidos em `localStorage` sob a chave `despesas`. Interface construída com componentes React (Client Component) e estilização via Tailwind CSS.

## Tecnologias

* Next.js (App Router)
* React (Client Component)
* Tailwind CSS
* Navegador com suporte a `localStorage`

## Estrutura principal

* `app/page.js` — componente principal contendo a UI e lógica de registro de despesas.

## Instalação e execução

1. Garantir Node.js instalado.
2. No diretório do projeto, instalar dependências:

* executar `npm install` ou `yarn`

3. Executar ambiente de desenvolvimento:

* executar `npm run dev` ou `yarn dev`

4. Abrir no navegador: `http://localhost:3000` (padrão Next.js)

## Uso

* Selecionar mês, ano, dia, tipo, preencher descrição e valor.
* Clicar em "Adicionar" para inserir a despesa na tabela e armazenar em `localStorage`.
* Clicar em "Remover" na linha desejada para excluir a despesa (a exclusão atualiza `localStorage`).


Caso deseje, posso gerar uma versão do README em inglês, incluir exemplos de validação ou fornecer um modelo de contribuição mais detalhado.
