# Roteiro de Viagens

Este projeto permite gerenciar roteiros de viagens, possibilitando ao usuário adicionar, remover e editar registros. Cada roteiro possui informações sobre nome, slug, cidade e estado, enquanto os campos de data de criação e atualização são gerados dinamicamente.

## Funcionalidades
- **Adicionar roteiros**: Insira um novo roteiro com nome, slug, cidade e estado.
- **Editar roteiros**: Modifique as informações de um roteiro existente.
- **Remover roteiros**: Exclua roteiros que não são mais necessários.
- **Gerenciamento automático de datas**: Os campos "criado em" e "atualizado em" são gerados automaticamente.

## Tecnologias Utilizadas
- **PHP 7.4**
- **CodeIgniter 3**
- **MySQL**
- **Bootstrap 5.3.3**

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
5. Inicie o servidor local:
   ```sh
   php -S localhost:8000 -t public
   ```

## Uso
- Acesse `http://localhost:8000` no navegador.
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

