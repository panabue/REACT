# ⚡ Guia Rápido: Criando um Projeto React com Vite

Este guia documenta o passo a passo para iniciar uma nova aplicação React utilizando o **Vite**, uma ferramenta de build extremamente rápida e leve.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter o **Node.js** instalado (versão 18+ recomendada). Verifique a versão no seu terminal:

```bash
node -v
```

---

## 🛠 Passo a Passo da Instalação

### 1. Criar o projeto

Abra o terminal na pasta onde deseja salvar o projeto e execute:

```bash
npm create vite@latest
```

---

### 2. Configurar via Terminal

O terminal fará algumas perguntas. Utilize as setas e Enter para selecionar:

- **Project name:** `nome-do-seu-projeto`
- **Select a framework:** `React`
- **Select a variant:**

  - JavaScript (para começar simples)
  - TypeScript (recomendado para projetos mais robustos)

---

### 3. Instalar Dependências

Entre na pasta criada e instale os pacotes necessários:

```bash
cd nome-do-seu-projeto
npm install
```

---

### 4. Rodar o Servidor de Desenvolvimento

Para ver o projeto rodando no navegador:

```bash
npm run dev
```

O terminal mostrará um link local — geralmente `http://localhost:5173/`.

---

## 🎨 (Opcional) Configurando Tailwind CSS

Se quiser adicionar o Tailwind CSS (padrão de mercado para estilização rápida):

### Instale as dependências do Tailwind:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure o `tailwind.config.js`

Substitua o conteúdo de `content` para que ele encontre seus arquivos:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Adicione as diretivas no CSS

No arquivo `src/index.css`, apague tudo e coloque:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🧹 Limpeza Inicial (Boilerplate)

O Vite vem com arquivos de exemplo. Para começar "limpo":

- Exclua o conteúdo de `App.css` (ou apague o arquivo).
- No arquivo `App.jsx` / `App.tsx`:

  - Remova imports de `useState`, logos e CSS desnecessário.
  - Limpe o retorno do componente para algo como:

```jsx
return <div>Hello World</div>;
```

- Em `index.css`, você pode remover os estilos padrões caso queira começar do zero (mantendo apenas as diretivas do Tailwind, se instaladas).

---

## 🚀 Scripts Úteis

| Comando           | Função                                        |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Inicia o servidor local de desenvolvimento.   |
| `npm run build`   | Gera a versão de produção na pasta `dist`.    |
| `npm run preview` | Testa localmente a versão de produção gerada. |

---

## 📚 Documentação Oficial

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
