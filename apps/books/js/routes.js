import bookApp from './pages/book-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import bookDetails from './book/book-details.cmp.js';


const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path:'/about',
        component:aboutPage
    },
    {
        path:'/book/:bookId',
        component:bookDetails
    }
]

export const myRouter = new VueRouter({ routes:myRoutes });