import React from "react"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { createStore, applyMiddleware } from "redux"
import { rootReducer } from "./services/reducers"
import App from "./components/app/app"
import * as ReactDOMClient from "react-dom/client"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const root = ReactDOMClient.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </Provider>
)
// ReactDOM.render(<App />, document.getElementById("root"));
