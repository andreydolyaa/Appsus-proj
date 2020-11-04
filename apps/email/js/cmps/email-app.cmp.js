import { emailService } from '../services/email-service.js';
// import { emailRoutes } from '../email-routes.js' 
import emailNav from'../cmps/pages/email-nav-cmp.js';


import emailList from '../cmps/email-list.cmp.js';
import emailDetails from'../cmps/pages/email-details.cmp.js';

export default {
    props: [''],
    // router: emailRoutes,
    name:'email-app',
    template:`
        <section class="email-app">
           
                <email-nav></email-nav>  
                <div class="emails">
                    <div class="router-view-container">
                        <router-view></router-view>
                        <!-- <email-list v-bind:emailsDB="emails"></email-list>  
                        <email-details></email-details> -->
                    </div>
                </div>
                <!-- v-bind:selected="selectedEmail" -->
            </ul>  
        </section>
        `,
    components:{
        emailService,
        emailNav,
        emailList,
        emailDetails,
    },

    data() {
        return{
            emails : null,
            // selectedEmail:null,
        }
    },
    methods:{
        
    },
    computed:{

    },
    created(){
        emailService.getEmails().then(res=>{
            this.emails = res;
            console.log('res',res);
            console.log('emails',this.emails);
        })
    },
}


