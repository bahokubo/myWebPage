<h2> Repositório criado para o Live Coding de 04/01/21 da Digital Innovation One</h2>

<h3>Configuração de Ambiente</h3>

- Instalação do node e yarn
- Instalação de uma IDE caso não tiver
- Instalação do React

```jsx
npm create react-app primeiro-projeto-react --template=typescript
cd nome da pasta
npm/yarn start
```

<h3>Organizar a estrutura do projeto</h3>

- Instalar o react-route-dom para a configuração das rotas do projeto

```jsx
yarn add react-router-dom -D
criar a pasta routes
```

- Organizar o App.tsx

```jsx
import React from "react";
import Routes from "./routes";

import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
```
<h3>Criar Rotas</h3>
- Criar routes.tsx
- Criar as páginas da aplicação e colocar a constante do Function Component React.FC
- Para a definição das rotas
- Instale o @types do react router dom 
```jsx
yarn add @types/react-router-dom
```
- Crie as duas rotas da nossa aplicação
```jsx
import React from "react";
import { Route, Switch } from "react-router-dom";

import Profile from "../pages/profile";
import Repository from "../pages/repository";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Profile} />;
    <Route path="/repository" component={Repository} />;
  </Switch>
);

export default Routes;
```

<h3>Adicione a biblioteca para estilizar o seu site</h3>
- [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)

```jsx
yarn add styled-components -D
yarn add react-icons -D                                                 
```

- Criar as páginas da aplicação
![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5cd3a1f4-0d59-4fe7-8520-74d748a58fc5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5cd3a1f4-0d59-4fe7-8520-74d748a58fc5/Untitled.png)

- Criar o useEffect

```jsx

interface Repository {
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

const Repository: React.FC = () => {

const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    api.get(`/users/bahcasac/repos`).then((response) => {
      setRepositories(response.data);
    });
  }, []);
}
```

