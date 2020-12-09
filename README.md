# ICETEC Project
Cadastro e gerenciamento de programadores

## Instalação
- Front
    - Acessar a pasta front e rodar o `yarn install`
- Api
    - Acessar a pasta api e rodar o `yarn install`
- Variáveis de ambiente
    - Renomear o arquivo `.env.exemple` e ajustar as variáveis ambiente

# Run
- Front
    - `yarn start`
- Api
    - `yarn dev`
    - Para os testes `yarn test`

# Migrations
- Api
    - Rodar o comando `yarn sequelize db:migration` para criar os schemas no banco configurado
    - Rodar o comando `yarn sequelize db:seed:all` para rodar as seeds padrão para login
    - Usuário: lucas@gmail.com, Senha: 123456

# Libs Utilizadas
Está disponível em cada package.json as libs utilizadas no front e no backend, basicamente utilizei o express para a construção
da api e o react para o front.

### Dúvidas estou a disposição