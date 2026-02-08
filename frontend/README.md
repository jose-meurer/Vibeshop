# Vibeshop - Angular

Um site de e-commerce moderno para eletrônicos premium, construído com Angular e Tailwind CSS.

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (versão 9 ou superior)

## 🚀 Como executar o projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar servidor de desenvolvimento

```bash
npm start
```

O aplicativo estará disponível em `http://localhost:4200`

### 3. Build para produção

```bash
npm run build
```

Os arquivos de produção estarão na pasta `dist/vibeshop-angular`

## 🛠️ Tecnologias Utilizadas

- **Angular 18** - Framework frontend
- **TypeScript** - Linguagem de programação
- **Tailwind CSS** - Framework CSS utilitário
- **Standalone Components** - Arquitetura moderna do Angular
- **Angular Router** - Roteamento

## 📁 Estrutura do Projeto

```
vibeshop-angular/
├── src/
│   ├── app/
│   │   ├── components/     # Componentes reutilizáveis
│   │   │   ├── header/
│   │   │   ├── hero/
│   │   │   ├── products/
│   │   │   ├── product-card/
│   │   │   └── footer/
│   │   ├── pages/          # Páginas da aplicação
│   │   │   ├── index/
│   │   │   └── not-found/
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── styles.css          # Estilos globais
│   ├── index.html
│   └── main.ts
├── public/                 # Assets estáticos
├── angular.json
├── tailwind.config.js
└── package.json
```

## ✨ Funcionalidades

- ✅ Catálogo de produtos eletrônicos
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Integração com WhatsApp para compras
- ✅ Animações e transições suaves
- ✅ Tema dark moderno com gradientes
- ✅ Performance otimizada

## 🎨 Personalização

### Alterar número do WhatsApp

Edite o arquivo `src/app/components/products/products.component.ts`:

```typescript
const WHATSAPP_NUMBER = '5511999999999'; // Altere para seu número
```

Também edite os links no `header.component.ts` e `footer.component.ts`.

### Modificar produtos

Edite o array `products` em `src/app/components/products/products.component.ts`.

### Customizar cores e tema

Edite as variáveis CSS em `src/styles.css` na seção `:root`.

## 📝 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run watch` - Build em modo watch
- `npm test` - Executa testes

## 📄 Licença

© 2025 Vibeshop. Todos os direitos reservados.

---

**Migrado de React para Angular** - Janeiro 2026
