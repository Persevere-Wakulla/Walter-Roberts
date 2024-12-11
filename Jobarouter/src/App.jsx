import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import './App.css'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/faq'
import Contact from './pages/help/contact'
import { contactAction } from './pages/help/contact'
import NotFound from './pages/NotFound'
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareersError from './pages/careers/CareersError'

//layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from "./layouts/CareersLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={ contactAction } />
      </Route>

      <Route path="careers" element={<CareersLayout />}
      errorElement={<CareersError />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />
        <Route 
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default function App() {

  return (
      <RouterProvider router={router} />
  );
}