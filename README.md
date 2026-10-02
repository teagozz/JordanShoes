# 👟 Jordan Shoes

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" alt="JSON" />
</p>

> Uma landing page responsiva e dinâmica criada para os amantes da cultura sneakerhead e da marca Jordan.

---

## 💻 Sobre o Projeto

O **Jordan Shoes** é um projeto frontend focado no catálogo visual de tênis da linha Air Jordan. A aplicação consome uma lista de produtos armazenada localmente em arquivo `.json` e gera a grade de produtos dinamicamente via JavaScript (`fetch` e manipulação de DOM).

---

## 🚀 Funcionalidades

- 🚚 **Aviso de Destaque Topo:** Barra fixa com informação de frete grátis.
- 🖼️ **Hero Banner Customizado:** Imagem de fundo temática com logo da marca.
- ⚡ **Renderização Dinâmica:** Leitura do arquivo JSON via `async/await` + `fetch` API.
- 📱 **Layout Totalmente Responsivo:** Adaptado para Mobile, Tablet e Desktop.
- 🎨 **Formatação de Valores:** Preços em Reais (R$) formatados nativamente via JavaScript.

---

## 🛠️ Tecnologias Utilizadas

- **[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)** — Estruturação semântica
- **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)** — Estilização, Flexbox, media queries e variáveis CSS
- **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** — Manipulação do DOM e Fetch API
- **[Google Fonts](https://fonts.google.com/)** — Fontes _Archivo_ e _Space Grotesk_

---

## 📁 Estrutura do Projeto

```text
├── css/
│   └── style.css
├── images/
│   ├── favicon.png
│   ├── logo-jordan.png
│   ├── image-michael-jordan.png
│   └── [imagens dos produtos].png
├── js/
│   ├── script.js
│   └── products.json
└── index.html

```

---

## 🔧 Como Rodar o Projeto Localmente

Atenção: Como o projeto utiliza a Fetch API para carregar o arquivo products.json! <br>Ele precisa ser executado em um servidor web local (devido às restrições de CORS ao abrir diretamente o arquivo .html).

1.  Clone o repositório:

git clone [https://github.com/seu-usuario/jordan-shoes.git](https://github.com/seu-usuario/jordan-shoes.git)

2. Navegue até o diretório do projeto:

cd jordan-shoes

3. Abra o projeto utilizando uma extensão de servidor local (ex: Live Server no VS Code) ou via CLI:

npx http-server .

4. Acesse no navegador o endereço indicado (geralmente http://127.0.0.1:5500 ou similar).

---

## ✉️ Contato

Desenvolvido por: &copy; Thiago Dias 2025

LinkedIn: https://www.linkedin.com/in/thiagodjardim/ <br>
Portfolio: https://teagozz.github.io/Portfolio/
