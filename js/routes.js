import homePage from '../js/pages/home-page.cmp.js';
import emailApp from '../apps/email/js/cmps/email-app.cmp.js';
import emailDetails from '../apps/email/js/cmps/pages/email-details.cmp.js';
import keepsApp from '../apps/keeps/js/cmps/keeps-app.cmp.js';


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
        path: '/keeps',
        component: keepsApp
    },
    {
        path: '/email/:emailId',
        component: emailDetails
    },
   
]

export const myRouter = new VueRouter({ routes: myRoutes })
