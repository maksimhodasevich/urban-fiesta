import { FC } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.module.scss";

import { TEST_NAME_SPACE } from "i18n/namespaces";

const App: FC = () => {
  const { t } = useTranslation(TEST_NAME_SPACE);

  return (
    <div className="app-wrapper">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <h1>ABOUT</h1>
          </Route>
          <Route path="/">
            <h1>{t("initialText")}</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
