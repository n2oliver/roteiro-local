# Roteiro de Viagens (WIP)

Este projeto permite gerenciar roteiros de viagens, possibilitando ao usuário adicionar, remover e editar registros. Cada roteiro possui informações sobre nome, slug, cidade e estado, enquanto os campos de data de criação e atualização são gerados dinamicamente.

## Funcionalidades
- **Adicionar roteiros**: Insira um novo roteiro com nome, slug, cidade e estado.
- **Editar roteiros**: Modifique as informações de um roteiro existente.
- **Remover roteiros**: Exclua roteiros que não são mais necessários.
- **Gerenciamento automático de datas**: Os campos "criado em" e "atualizado em" são gerados automaticamente.

## Tecnologias Utilizadas
- **Laravel 10**
- **Vue 3.5.13**
- **PostgreSQL 16**
- **Quasar Vite Plugin ^1.9.0**
- **PHP ^8.1**

## Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/n2oliver/roteiro-viagens.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd roteiro-viagens
   ```
3. Configure o banco de dados em `application/config/database.php`.
4. Execute as migrações para criar as tabelas necessárias.
5. Inicie o servidor Artisan:
   ```sh
   php artisan serve
   ```
5. Inicie o servidor Vue:
    ```sh
    npm run dev
    ```

## Uso
- Acesse `http://localhost:5173` no navegador.
- Utilize a interface para gerenciar seus roteiros.

## Contribuição
Se quiser contribuir com melhorias, siga os passos:
1. Faça um fork do projeto
2. Crie uma branch com a sua funcionalidade (`git checkout -b minha-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Envie para o repositório (`git push origin minha-feature`)
5. Abra um Pull Request

## Licença
Este projeto é distribuído sob a licença MIT.

