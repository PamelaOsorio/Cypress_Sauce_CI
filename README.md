# Cypress End-to-End Tests

Este é um projeto de testes end-to-end utilizando Cypress.

## Descrição

Este repositório contém a automação de testes para um website (Sauce), utilizando o framework Cypress e o padrão de projeto "Page Objects". O projeto inclui configurações para ambientes de desenvolvimento e QA, além de integração com ferramentas de relatórios como Mochawesome e JUnit.

## Tecnologias Utilizadas

- **Cypress**: Framework para testes end-to-end.
- **Mochawesome**: Gerador de relatórios de testes.
- **JUnit**: Geração de relatórios de testes no formato JUnit.
- **dotenv**: Carregamento de variáveis de ambiente a partir de arquivos `.env`.
- **JavaScript**: Linguagem utilizada para escrever os testes.

## Requisitos

### Versões

- **Cypress**: v15.7.0
- **Node.js**: v24.5.0 (Versão usada)

## Configuração do Ambiente

1. Clone o repositório:

    ```bash
    git clone https://github.com/PamelaOsorio/Cypress_Sauce_CI.git
    cd Cypress_Sauce_CI
    ```

2. Instale as dependências do projeto:

    ```bash
    npm install
    ```

3. Crie um arquivo `.env` na raiz do projeto e defina suas variáveis de ambiente:

    Exemplo do arquivo `.env`:

    ```env
    BASE_URL=http://seu-app.com
    CYPRESS_USERNAME=seu-usuario
    CYPRESS_PASSWORD=sua-senha
    ```

4. **Importante**: Não versionar o arquivo `.

 ```bash
    echo ".env" >> .gitignore
   ```

## Executando os Testes

1. **Abrir o Cypress no ambiente de Desenvolvimento**:

    ```bash
    npm run cypress:open:dev
    ```

    (Ambiente de QA atualmente não existe, apenas para fins de estudos)

2. **Gerar Relatórios**:

    Os relatórios de execução dos testes serão gerados automaticamente com as configurações definidas no `cypress.config.js`.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

/cypress
/e2e # Arquivos de testes
/fixtures # Dados de teste
/pages # Padrão Page Object para estruturar os testes
/reports # Onde os relatórios são gerados
/support # Funções e comandos personalizados

/cypress.config.js # Arquivo de configuração global do Cypress
/.env # Arquivo com variáveis de ambiente (não versionado)
/.gitignore # Ignora arquivos e pastas não versionados
/package.json # Dependências e scripts

