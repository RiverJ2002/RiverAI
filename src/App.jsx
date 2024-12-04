
import './App.css'
import HomePage from './components/HomePage';
import NormalLogin from './components/NormalLogin'

import { createBrowserRouter , RouterProvider} from 'react-router-dom'

var router = createBrowserRouter([{
  path: '/',
  element: <NormalLogin/>
},
{
  path: '/HomePage',
  element: <HomePage/>,
  errorElement: <div>404 not found</div>
}
]);

function App() {

  return <RouterProvider router = {router}/>
}

export default App
 