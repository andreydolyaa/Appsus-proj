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
        <section class="emailApp" >
                <section class="header">
                    <div class="logo"><img src="apps/email/assets/img/logo_gmail_lockup_dark_1x_r2.png"></div>
                    <div class="serchInputRub">
                        <button class="searchBtn" v-on:click="filterBy(filter)"><i class="fas fa-search"></i></button>
                        <input class="searchInput"  v-on:keyup.13="filter" v-model="filterInputValue" placeholder="search..."/>
                      
                    </div>
                </section>
                <section class="email-body">
                    <div class="sideBar">
                        <button class="composeBtn" v-on:click="openCompose"><img src="apps/email/assets/img/compose.png" />Compose</button>
                        <email-nav @filterBy="filterBy($event)"></email-nav>
                         <!-- {{filter}} -->
                    </div>
                    <div class="emails">
                        <email-info></email-info>
                        <div class="router-view-container">
                            <router-view v-bind:filterBy="filter" v-bind:filterByInput="filterInputValue" ></router-view>
                        </div>
                    </div>
                    <!-- v-bind:selected="selectedEmail" -->
                    <compose-email v-if="isCompose" @closeEmail="checkCloseEmail($event)"></compose-email> 
                </section>
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
            filter:'isNew',
            filterInputValue:null,
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

        },
        filterByInput(){
            console.log('$event',this.filterInput)
            //this.filterInputValue = $event

        }

    },
    computed:{

    },
    created(){
        this.getEmails()

    },
}


