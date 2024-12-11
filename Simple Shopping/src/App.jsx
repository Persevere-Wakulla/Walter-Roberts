import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/Home"
import Products, { productsLoader } from './pages/Products'
import FilteredProducts, { filterLoader } from "./pages/FilteredProducts";
import ProductsLayout from "./layout/ProductsLayout";

import './App.css'
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={productsLoader}/>
      <Route path="products" element={< ProductsLayout />}>
        <Route index element={< Products />} loader={productsLoader} />
        <Route path=":id" element={<FilteredProducts />} loader={filterLoader} />
      </Route>
    </Route>
  )
)

export default function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
