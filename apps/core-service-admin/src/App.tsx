import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WebsiteList } from "./website/WebsiteList";
import { WebsiteCreate } from "./website/WebsiteCreate";
import { WebsiteEdit } from "./website/WebsiteEdit";
import { WebsiteShow } from "./website/WebsiteShow";
import { PageList } from "./page/PageList";
import { PageCreate } from "./page/PageCreate";
import { PageEdit } from "./page/PageEdit";
import { PageShow } from "./page/PageShow";
import { ComponentList } from "./component/ComponentList";
import { ComponentCreate } from "./component/ComponentCreate";
import { ComponentEdit } from "./component/ComponentEdit";
import { ComponentShow } from "./component/ComponentShow";
import { StyleList } from "./style/StyleList";
import { StyleCreate } from "./style/StyleCreate";
import { StyleEdit } from "./style/StyleEdit";
import { StyleShow } from "./style/StyleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"CoreService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Website"
          list={WebsiteList}
          edit={WebsiteEdit}
          create={WebsiteCreate}
          show={WebsiteShow}
        />
        <Resource
          name="Page"
          list={PageList}
          edit={PageEdit}
          create={PageCreate}
          show={PageShow}
        />
        <Resource
          name="Component"
          list={ComponentList}
          edit={ComponentEdit}
          create={ComponentCreate}
          show={ComponentShow}
        />
        <Resource
          name="Style"
          list={StyleList}
          edit={StyleEdit}
          create={StyleCreate}
          show={StyleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
