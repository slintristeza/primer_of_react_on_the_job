/** @jsx jsx */
import React, { FC } from 'react';
import { css, jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router';

import Home from './components/Home';

const appHeader = css`
  background-color: #222;
  color: white;
  margin-bottom: 4em;
  padding: 20px;
  text-align: center;
`;
const title = 'GitHub API デモアプリ';

const App: FC = () => (
  <div>
    <Helmet htmlAttributes={{ lang: 'ja' }}>
      <title>{title}</title>
    </Helmet>

    <header css={appHeader}>
      <h1>{title}</h1>
    </header>
    <Switch>
      <Route path="/" component={Home} exact />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
