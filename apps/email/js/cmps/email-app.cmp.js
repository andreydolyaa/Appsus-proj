import { emailService } from '../services/email-service.js';
// import { emailRoutes } from '../email-routes.js' 
import emailNav from'../cmps/pages/email-nav-cmp.js';
import emailInfo from '../cmps/pages/email-info.cmp.js'
import emailList from '../cmps/email-list.cmp.js';
import emailDetails from'../cmps/pages/email-details.cmp.js';
import composeEmail from '../cmps/pages/compose-email.cmp.js'



export default {
    props: [''],
    // router: emailRoutes,
    name:'email-app',
    template:`
        <section class="email-app" >
                <div class="sideBar">
                    <button class="composeBtn" v-on:click="openCompose"><img src="apps/email/assets/img/compose.png" />Compose</button>
                    <email-nav @filterBy="filterBy($event)"></email-nav>
                     <!-- {{filter}} -->
                </div>
                <div class="emails">
                    <email-info></email-info>
                    <div class="router-view-container">
                        <router-view v-bind:filterBy="filter"></router-view>
                        <!-- <email-list v-bind:emailsDB="emails"></email-list>  
                        <email-details></email-details> -->
                    </div>
                </div>
                <!-- v-bind:selected="selectedEmail" -->
            </ul> 
            <compose-email v-if="isCompose" @closeEmail="checkCloseEmail($event)"></compose-email> 
        </section>
        `,
    components:{
        emailService,
        emailNav,
        emailList,
        emailDetails,
        composeEmail,
        emailInfo,
    },

    data() {
        return{
            emails : null,
            isCompose: false,
            filter:'isNew'
        }
    },
    methods:{
        getEmails(){
            emailService.getEmailsInbox().then(res=>{
                this.emails = res;
                //console.log('res',res);
                //console.log('emails',this.emails);
            })
        },
        openCompose(){
            this.isCompose = !this.isCompose
        },
        checkCloseEmail(isCompose){
            console.log('isCompose',isCompose)
            this.isCompose = isCompose;
        },
        filterBy($event){
            console.log('$event',$event)
            this.filter = $event

        }

    },
    computed:{

    },
    created(){
        this.getEmails()

    },
}


