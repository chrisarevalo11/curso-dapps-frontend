# Integración de Smart Contracts con Frontend

Este repositorio contiene el código de una clase sobre cómo integrar smart contracts con el frontend utilizando las tecnologías [Wagmi](https://wagmi.sh/react/getting-started), [Viem](https://viem.sh/docs/getting-started), [Rainbowkit](https://www.rainbowkit.com/docs/installation) y [React](https://react.dev/learn). Aquí aprenderás a conectar tu aplicación web con la blockchain de manera eficiente y segura.

## Descripción General

La integración de smart contracts con el frontend es esencial para crear aplicaciones descentralizadas (dApps) que interactúen directamente con la blockchain. En esta clase, utilizaremos Wagmi y Rainbowkit para simplificar esta integración, proporcionando herramientas y librerías que facilitan la conexión y gestión de wallets.

## Tecnologías Utilizadas

- **Wagmi**: Una colección de hooks y herramientas para trabajar con wallets y contratos en aplicaciones React.
- **Viem**: Una librería que proporciona una API simple y robusta para interactuar con la blockchain.
- **Rainbowkit**: Una herramienta que facilita la integración de múltiples wallets en tu aplicación.
- **React**: Una biblioteca de JavaScript para construir interfaces de usuario.

## Estructura del Proyecto

El proyecto sigue una estructura modular para mantener el código organizado y fácil de mantener:

```
.
├── package.json
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── abis
│   │   │   └── erc20.ts
│   ├── constants
│   │   └── index.ts
│   ├── main.tsx
├── vite.config.ts
```

## Beneficios de Usar este Stack

- **Facilidad de Integración**: Wagmi y Rainbowkit simplifican la integración con múltiples wallets y contratos inteligentes.
- **Interfaz de Usuario Amigable**: Rainbowkit proporciona una interfaz intuitiva para la gestión de wallets.
- **Desarrollo Rápido**: React permite construir interfaces de usuario rápidas y dinámicas.
- **Escalabilidad**: La estructura modular del proyecto facilita la expansión y mantenimiento a medida que crece la aplicación.

## Instrucciones para Correr el Proyecto

Para correr el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/chrisarevalo11/curso-dapps-frontend.git
   cd curso-dapps-frontend
   ```

2. Instala las dependencias:

   ```bash
   yarn install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y agrega la variable de entorno `VITE_PROJECT_ID`. Puedes obtener un project ID en [WalletConnect Cloud](https://cloud.walletconnect.com/):

   ```env
   VITE_PROJECT_ID=tu_project_id
   ```

4. Inicia la aplicación:

   ```bash
   yarn dev
   ```

5. Abre tu navegador y navega a `http://localhost:5173` para ver la aplicación en funcionamiento.

Gracias por llegar hasta acá y **keep buidling**!
