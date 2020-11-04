import { emailService } from '../services/email-service.js';
// import { emailRoutes } from '../email-routes.js' 
import emailNav from'../cmps/pages/email-nav-cmp.js';
import emailList from '../cmps/email-list.cmp.js';
import emailDetails from'../cmps/pages/email-details.cmp.js';
import composeEmail from '../cmps/pages/compose-email.cmp.js'

export default {
    props: [''],
    // router: emailRoutes,
    name:'email-app',
    template:`
        <section class="email-app">
                <email-nav></email-nav>  
                <div class="emails">
                    <div class="router-view-container">
                        <button v-on:click="openCompose">Compose</button>
                        <router-view></router-view>
                        <!-- <email-list v-bind:emailsDB="emails"></email-list>  
                        <email-details></email-details> -->
                    </div>
                </div>
                <!-- v-bind:selected="selectedEmail" -->
            </ul> 
            <compose-email v-if="isCompose"></compose-email> 
        </section>
        `,
    components:{
        emailService,
        emailNav,
        emailList,
        emailDetails,
        composeEmail,
    },

    data() {
        return{
            emails : null,
            isCompose: true,
            // selectedEmail:null,
        }
    },
    methods:{
        openCompose(){

        }
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


