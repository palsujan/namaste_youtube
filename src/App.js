import './App.css';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Head from './components/Head';
import MainContainer from './components/MainContainer';
import store from './utils/store';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    }
  ]

}])

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>


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

