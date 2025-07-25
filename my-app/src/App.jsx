import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './app/root'
import { ProductsList } from './parts/products/ProductsList'
import { ProductPage } from './parts/products/ProductPage'

const router = createBrowserRouter([{ 
  path: '/', 
	element: <Root />,
  children: [
    {
      path:'products/:productId',
      element: <ProductPage />,
    },
    {
  path: '/products', 
	element: <ProductsList/>,
    }
  ] }]) 

  function App() {
	return <RouterProvider router={router} />
}

export default App