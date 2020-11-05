import homePage from '../js/pages/home-page.cmp.js';
import keepsApp from '../apps/keeps/js/cmps/keeps-app.cmp.js';

/* email components */
import emailApp from '../apps/email/js/cmps/email-app.cmp.js';
import emailList from '../apps/email/js/cmps/email-list.cmp.js';
import emailListSent from '../apps/email/js/cmps/email-list-sent.cmp.js';
import emailListDrafts from '../apps/email/js/cmps/email-list-drafts.cmp.js';
import emailDetails from '../apps/email/js/cmps/pages/email-details.cmp.js';



const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/email',
        component: emailApp,
        children: [
            {
                path: 'inbox',
                component: emailList
            },
            {
                path: 'sent',
                component: emailList
            },
            {
                path: 'draft',
                component: emailList
            },
            {
                path: ':emailID',
                component: emailDetails
            },
        ]
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
