import homePage from '../js/pages/home-page.cmp.js';
import keepsApp from '../apps/keeps/js/cmps/keeps-app.cmp.js';
import bookApp from '../apps/books/js/pages/book-app.cmp.js';

/* email components */
import emailApp from '../apps/email/js/cmps/email-app.cmp.js';
import emailList from '../apps/email/js/cmps/email-list.cmp.js';
import emailDetails from '../apps/email/js/cmps/pages/email-details.cmp.js';


//books imports 
// import bookApp from '../apps/books/js/pages/book-app.cmp.js'
import bookHomePage from '../apps/books/js/pages/home-page.cmp.js'
import aboutPage from '../apps/books/js/pages/about-page.cmp.js';
import bookDetails from '../apps/books/js/book/book-details.cmp.js';
// import manBook from '../apps/books/js/main.js';

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
                path: ':emailID?',
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
    {
        path:'/books',
        component: bookApp,
    },
    {
        path:'/book/:bookId',
        component:bookDetails
    }

   
]

export const myRouter = new VueRouter({ routes: myRoutes })
