import homePage from '../js/pages/home-page.cmp.js';
import emailApp from '../apps/email/email-app.cmp.js';
import keepsApp from '../apps/keeps/keeps-app.cmp.js';

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
