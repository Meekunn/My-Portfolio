import Home from "../pages/Home"
import About from "../pages/About"

const routes:IRoutes[] = [
    {
        path: '/',
        exact: true,
        component: Home,
        name: 'home'
    },{
        path: '/#about',
        exact: true,
        component: About,
        name: 'about'
    }
]

export default routes