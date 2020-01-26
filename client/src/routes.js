import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'

const routes = [
    {path: '/SignUp',name: 'SignUp', component: SignUp},
    {path: '/', component: Home},
    {path: '/SignIn',name: 'SignIn', component: SignIn}
]

export default routes
