
import './App.css'
import HistoryPage from './components/HistoryPage';
import NormalLogin from './components/NormalLogin'
import FirstChatPage from './components/FirstChatPage'
import ConversationPage from './components/ConversationPage'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'



var router = createBrowserRouter([{
  path: '/',
  element: <NormalLogin/>
},
{
  path: '/HistoryPage',
  element: <HistoryPage/>,
  errorElement: <div>404 not found</div>
},
{
  path: '/HistoryPage/FirstChatPage',
  element: <FirstChatPage/>,
  errorElement: <div>404 not found</div>
},
{
  path: '/HistoryPage/FirstChatPage/ConversationPage',
  element: <ConversationPage/>,
  errorElement: <div>404 not found</div>
}
]);




function App() {

  return <RouterProvider router = {router}/>
}

export default App
 