import { RouterProvider } from 'react-router'
import { appRouter } from './app.router'

export const MaggotShop = () => {
  return <RouterProvider router={appRouter}></RouterProvider>
}
