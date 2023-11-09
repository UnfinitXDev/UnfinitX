import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import { useTranslation } from "react-i18next";
import PDF from "./pages/PDF";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />, },
      {
        path: 'aboutus',
        element: <AboutUs />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'pdf/:name',
        element: <PDF />,
      },
    ]

  }
])

const App = () => {
  const { i18n: { language } } = useTranslation()
  document.documentElement.lang = language;
  return (
    <RouterProvider router={router} />
  )
}

export default App