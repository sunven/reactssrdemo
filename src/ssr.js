import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter,Link } from "react-router-dom";
import { renderRoutes } from 'react-router-config';

export default (store,routes, req, context) =>{
  // renderToString
  let content = renderToString(
    <Provider store={store} >
      <StaticRouter  location={req.path} context={context}>
        <div>
          <Link to="/Home">Home</Link>,<Link to="/Bar">Bar</Link>,
          <Link to="/Foo">Foo</Link>
          {renderRoutes(routes)}
        </div>
      </StaticRouter>
    </Provider>
  );

  return content;
}