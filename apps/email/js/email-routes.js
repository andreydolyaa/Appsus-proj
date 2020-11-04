
import emailList from '../js/cmps/email-list.cmp.js';
import emailDetails from'../js/cmps/pages/email-details.cmp.js';


const routes = [
    {
        path: 'email/list',
        component: emailList
        
    },
    {
        path: 'email/details:emailId',
        component: emailDetails
    },

   
]

export const emailRoutes = new VueRouter({ routes:routes })
