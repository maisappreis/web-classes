module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// Esse parte 'content' serve para quando ele for gerar a versão final da aplicação,
// ele vai olhar para esses arquivos, e pegar eles, pois eles são os que realmente compoem a aplicação.
// O resto será desconsiderado.
