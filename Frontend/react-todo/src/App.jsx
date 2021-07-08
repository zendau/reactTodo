import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose} from "redux"
import reduser from "./redux/rootReduser"
import thunk from "redux-thunk"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Main from "./components/main"

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const store = createStore(reduser, composeEnhancers(applyMiddleware(thunk)))



function App() {

  return (
    
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact  path="/" component={Main} activeClassName="active"/>
        </Switch>
      </Router>
    </Provider>
   
    
  );
}

export default App;
