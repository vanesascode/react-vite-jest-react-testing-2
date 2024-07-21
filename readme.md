# Instalación y configuracion de Jest + React Testing Library

## En proyectos de React + Vite

1. Instalaciones:

```
npm i --save-dev jest babel-jest @babel/preset-env @babel/preset-react
npm i --save-dev @testing-library/react @testing-library/dom @types/jest jest-environment-jsdom

```

2. Opcional: Si usamos Fetch API en el proyecto:

```
npm i --save-dev whatwg-fetch
```

3. Actualizar los scripts del **package.json**

```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel **babel.config.js**

```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

**jest.config.js**

```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

**jest.setup.js**

```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- npm i whatwg-fetch
```

# RUTA CRÍTICA

- Define lo que es necesario probar teniendo en cuenta el tiempo que tienes.

- Empieza los componentes con menos dependencias, los hijos antes que los padres, para que cuando llegues a los componentes más grandes, casi todo esté ya testeado.

- Fijate en cual es el objetivo principal del componente o función que estás testeando. No testees todo, solo lo principal que este debe hacer!

- Evaluamos el comportamiento de los hooks (incluyendo custom hooks) basado en su retorno, o en las acciones que las funciones que van a tener.
