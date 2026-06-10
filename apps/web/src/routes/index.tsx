import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import RootLayout from '../components/layout/RootLayout'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <App />
            },
        ]
    }
])
