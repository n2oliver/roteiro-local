module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest', // Transpila arquivos JS com Babel
  },
  testEnvironment: 'node',  // Define que o Jest usará o ambiente Node.js
  verbose: true,  // Habilita a saída detalhada dos testes
};