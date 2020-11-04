import homePage from '../js/pages/home-page.cmp.js';
import emailApp from '../apps/email/js/cmps/email-app.cmp';
import emailApp from '../apps/keeps/js/cmps/keeps/keeps-app.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/email',
        component: emailApp
    },
    {
        path: '/about',
        component: keepsApp
    },
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // },
   
]

export const myRouter = new VueRouter({ routes: myRoutes })
