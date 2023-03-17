import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routing";
import { Provider } from 'react-redux'
import store from './store/store';

const App = () => {

  const router = createBrowserRouter(routes);

  return (
    <div className="app">
      <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </div>
  );
};

export default App;
