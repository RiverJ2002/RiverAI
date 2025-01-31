
import './App.css'
import HistoryPage from './components/HistoryPage';
import NormalLogin from './components/NormalLogin'
import ChatPage from './components/ChatPage'
import SignInPage from './components/SignInPage'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import ProfilePage from './components/ProfilePage';



//creating the  router browswer. This was suggested somewhere. 
var router = createBrowserRouter([
  {
    path: '/',
    element: <NormalLogin/>
  },
  {
    path: '/HistoryPage',
    element: <HistoryPage/>,
    errorElement: <div>404 not found</div>
  },
  {
    path: '/HistoryPage/ChatPage',
    element: <ChatPage/>,
    errorElement: <div>404 not found</div>
  },
  {
    path: '/HistoryPage/ProfilePage',
    element: <ProfilePage/>,
    errorElement: <div>404 not found</div>
  },
  {
    path: '/SignInPage',
    element: <SignInPage/>,
    errorElement: <div>404 not found</div>
  }
], {
  basename: "/RiverAI"
});





function App() {
  return <RouterProvider router = {router}/>
}

export default App
 