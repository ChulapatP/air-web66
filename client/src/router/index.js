import Vue from 'vue'
import Router from 'vue-router'
// Users
import UserIndex from '@/components/Users/Index'
import MovieIndex from '@/components/Movies/MovieIndex'
import UserCreate from '@/components/Users/CreateUser'
import CreateMovie from '@/components/Movies/CreateMovie'
import UserEdit from '@/components/Users/EditUser'
import EditMovie from '@/components/Movies/EditMovie'
import UserShow from '@/components/Users/ShowUser'
import ShowMovie from '@/components/Movies/ShowMovie'
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
            path: '/movies',
            name: 'movies',
            component: MovieIndex
        },
        {
            path: '/user/create',
            name: 'users-create',
            component: UserCreate
        },
        {
            path: '/movie/create',
            name: 'movies-create',
            component: CreateMovie
        },
        {
            path: '/user/edit/:userId',
            name: 'user-edit',
            component: UserEdit
        },
        {
            path: '/movie/edit/:movieId',
            name: 'movie-edit',
            component: EditMovie
        },
        {
            path: '/user/:userId',
            name: 'user',
            component: UserShow
        },
        {
            path: '/movie/:movieId',
            name: 'movie',
            component: ShowMovie
        },
        // authen
{
    path: '/login',
    name: 'login',
    component: Login
   }
    ]
})