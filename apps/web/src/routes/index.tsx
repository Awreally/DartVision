import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../components/layout/RootLayout'
import Game501 from '../features/games/501'
import { HomePage } from '../HomePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'games/501',
        element: <Game501 />
      }
    ],
  },
])
