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
