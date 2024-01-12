import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import TestPage from "./testPage";
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { ChakraProvider, extendTheme} from '@chakra-ui/react'
const router = createBrowserRouter([
    {
        path: "/",
        element: <TestPage hello="hello" />,
    },
]);

const colors = {
    brand: {
        900: "#171923"
    }
}

const theme = extendTheme({colors})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
      </ChakraProvider>
  </React.StrictMode>,
)
