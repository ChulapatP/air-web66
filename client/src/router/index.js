import Vue from 'vue'
import Router from 'vue-router'
// Users
import UserIndex from '@/components/Users/Index'
import AirplaneIndex from '@/components/Airplanes/AirplaneIndex'
import UserCreate from '@/components/Users/CreateUser'
import CreateAirplane from '@/components/Airplanes/CreateAirplane'
import UserEdit from '@/components/Users/EditUser'
import EditAirplane from '@/components/Airplanes/EditAirplane'
import UserShow from '@/components/Users/ShowUser'
import ShowAirplane from '@/components/Airplanes/ShowAirplane'
import Login from '@/components/Users/login'


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/users',
            name: 'users',
            component: UserIndex
        },
        {
            path: '/airplanes',
            name: 'airplanes',
            component: AirplaneIndex
        },
        {
            path: '/user/create',
            name: 'users-create',
            component: UserCreate
        },
        {
            path: '/airplane/create',
            name: 'airplanes-create',
            component: CreateAirplane
        },
        {
            path: '/user/edit/:userId',
            name: 'user-edit',
            component: UserEdit
        },
        {
            path: '/airplane/edit/:airplaneId',
            name: 'airplane-edit',
            component: EditAirplane
        },
        {
            path: '/user/:userId',
            name: 'user',
            component: UserShow
        },
        {
            path: '/airplane/:airplaneId',
            name: 'airplane',
            component: ShowAirplane
        },
        // authen
{
    path: '/login',
    name: 'login',
    component: Login
   }
    ]
})