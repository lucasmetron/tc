import Table from "./components/Table";
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import tableReducer from './store/reducers/tableReducer'
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const store = configureStore({
    reducer:{
     table: tableReducer
    }
  })

  return (
    <Provider store={store}>
      <Header/>
      <Table/>
      <Footer/>
    </Provider>

  );
}

export default App;
