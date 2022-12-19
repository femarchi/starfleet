# Starfleet Catalog

Frontend project that provides an interface to the [SWAPI](https://swapi.dev/) Star Wars API 

This project was developed using Angular CLI v15.0.4.

For the UI elements, it mostly uses the [PrimeNG](https://www.primefaces.org/primeng/setup) component library.

Check `package.json` file for other dependencies.

## Running the catalog app

First of all, an installation of node version 16.19.0 is needed. It is recommended to use [nvm](https://github.com/nvm-sh/nvm) to install and use the correct version:

```
$ nvm use 16
Now using node v16.19.0 (npm v8.19.3)
```

Clone the repository into a folder on your local machine
```
$ git clone https://github.com/femarchi/starfleet
```

Navigate to the catalog folder and install node modules:
```
$ cd catalog
$ npm i
```

Run the app:
```
$ npm run start
```
The app should compile and be available on `http://localhost:4200/`.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

-------

## Autoavailação

Este projeto foi desenvolvido usando o editor VSCode em uma máquina com sistema operacional Ubuntu Linux. Utilizei meus conhecimentos do editor para criar um workspace para o projeto e do bash para fazer algumas operações básicas como criar e apagar pastas e arquivos.

Optei por usar o framework Angular junto com a biblioteca de componentes PrimeNG. Para conseguir instalar o framework junto com a biblioteca de modo a ser distribuído, precisei usar os conhecimentos do node package manager (npm).

O Angular usa uma estrutura de componentes onde cada um possui um template HTML, um arquivo de estilos .css, .less, .scss ou .sass, e arquivos com a lógica do componente e testes em typescript. Precisei saber compor a estrutura dos templates HTML usando as tags apropriadas, aliado com os estilos em SCSS para dimensionar e posicionar os elementos adequadamente.

Para a lógica dos componentes usei meus conhecimentos em Typescript, rxjs e Angular para criar uma estrutura de classes e funções devidamente tipadas que adquirem e mapeiam as variáveis utilizadas nos templates de cada página através de requisição assíncrona dos dados da API. Especificamente usei o conhecimento de Angular para configurar as rotas e módulos que compõem a aplicação e carregam os templates adequados de acordo com o input do usuário.

Criei um repositório Git na raíz do projeto e fui adicionando commits conforme realizava alterações significativas no código. Precisei utilizar meus conhecimentos em Git e Vim para eventualmente reoganizar os commits com rebase e editar as mensagens de cada commit.
