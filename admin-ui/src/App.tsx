import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { BlaList } from "./bla/BlaList";
import { BlaCreate } from "./bla/BlaCreate";
import { BlaEdit } from "./bla/BlaEdit";
import { BlaShow } from "./bla/BlaShow";
import { ShimiList } from "./shimi/ShimiList";
import { ShimiCreate } from "./shimi/ShimiCreate";
import { ShimiEdit } from "./shimi/ShimiEdit";
import { ShimiShow } from "./shimi/ShimiShow";
import { Shimi2List } from "./shimi2/Shimi2List";
import { Shimi2Create } from "./shimi2/Shimi2Create";
import { Shimi2Edit } from "./shimi2/Shimi2Edit";
import { Shimi2Show } from "./shimi2/Shimi2Show";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app-5"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Bla"
          list={BlaList}
          edit={BlaEdit}
          create={BlaCreate}
          show={BlaShow}
        />
        <Resource
          name="Shimi"
          list={ShimiList}
          edit={ShimiEdit}
          create={ShimiCreate}
          show={ShimiShow}
        />
        <Resource
          name="Shimi2"
          list={Shimi2List}
          edit={Shimi2Edit}
          create={Shimi2Create}
          show={Shimi2Show}
        />
      </Admin>
    </div>
  );
};

export default App;
