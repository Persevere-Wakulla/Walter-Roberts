import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import TrainingDisplay, { trainingLoader } from './pages/TrainingDisplay';
import Home, { kennelLoader } from '../src/pages/Home.jsx';
import CreateUserProfile from "./pages/CreateUserProfile";
import DogApplication from "./pages/DogApplication";
import BasicTraining from './pages/BasicTraining';
import DogList from "./components/DogList.jsx";
import CreateDog from './pages/CreateDog.jsx';
import Welcome from "./pages/Welcome.jsx";
import RootLayout from './RootLayout.jsx';
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import React from 'react';
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> } >
      <Route index element={ <Welcome /> } />
      <Route path="createuserprofile" element={ <CreateUserProfile /> } loader={kennelLoader} />
      <Route path='kennel' loader={kennelLoader} element={ <Home /> } >
        <Route path=':category' element={ <DogList /> } />
      </Route>
      <Route path="training" loader={trainingLoader} element={ <TrainingDisplay /> } >
        <Route index element={ <Training /> } />
        <Route path=':category' element={ <BasicTraining /> } />
      </Route>
      <Route path="dogApplication" element={ <DogApplication /> } />
      <Route path='addDog' element={ <CreateDog /> } />
      <Route path="contact"element={ <Contact /> } />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App