import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router';

import pages from './pages';
import Home from './components/Home';
import Companies from './components/Companies';
import CompanyMembers from './containers/Companies/Members';
import RepositoryForm from './components/Repositories/Search';

import styles from './app.module.css';

const title = 'GitHub API デモアプリ';

const App: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: 'ja' }}>
      <title>{title}</title>
    </Helmet>

    <header className={styles.appHeader}>
      <h1>{title}</h1>
    </header>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path={pages.companies.members.path} component={CompanyMembers} />
      <Route path={pages.companies.index.path} component={Companies} />
      <Route path={pages.repositories.search.path} component={RepositoryForm} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
