import React from 'react';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/48194646?s=460&u=520e26606c4f1a016d8cadaaf2c482e5bf5739f4&v=4"
            alt="Gabriel Mendes"
          />
          <div>
            <strong>Github/nextJS</strong>
            <p>My Website</p>
          </div>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
