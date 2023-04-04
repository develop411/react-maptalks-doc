---
sidebar_position: 2
---

# Installation


## What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Start a new React project
If you have a project created, go to [next step](#install-dependencies). In otherwise start a new project by ussing anything of this options:


  - Starting a new project with [create react app](https://create-react-app.dev/):
    ```bash
    npx create-react-app <your-project-name>
    ```

    :::tip installation tip

    We recomended add Typscript in your project. In this case run this command instead:

    ```bash
    npx create-react-app <your-project-name> --template typescript
    ```
    :::

  - Starting a new project by using [Next](https://nextjs.org/docs/getting-started):
    ```bash
    npx create-next-app <your-project-name>
    ```
    
:::info installation methods

This documentation use [create react app](https://create-react-app.dev/) and [Next](https://nextjs.org/docs/getting-started) to get started a react project,but you can use anything other method.

:::
## Install dependencies
Once you has created a react project, its time to install the dependencies that React Maptalks need to wotk:

```bash
npm install maptalks --save
```
If you are ussing ts: 
```bash
npm install @types/maptalks --save-dev
```

Install React Maptalks:

```bash
npm install react-maptalks-ts
```
