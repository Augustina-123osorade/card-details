// import CardDetails from "./Pages/CardDetails"
// function App () {
//   return(
//     <>
//     <CardDetails />

//     </>
//   )
// };
// export default App
import {
  createRootRoute,
  createRoute,
} from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import CardDetails from './Pages/CardDetails'
import ThankYou from './Pages/ThankYou'


const rootRoute = createRootRoute({
  component: () => <Outlet />
})

const formRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: CardDetails,
})

const thankYouRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/thankyou',
  component: ThankYou,
})

export const routeTree = rootRoute.addChildren([
  formRoute,
  thankYouRoute,
])
