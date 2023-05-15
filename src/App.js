import './App.css';
import { Provider } from 'react-redux';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <Body/>


      {
        /**
           * Head
           * Body
           *  -Sidebar
           *    --MenuItem
           *  -MainContainer
           *   --ButtonsList
           *   --VideoContainer
           *     ---videoCard
           * 
           * 
           * 
           * 
           * 
           */
      }
    </div>
    </Provider>
  );
}

export default App;

