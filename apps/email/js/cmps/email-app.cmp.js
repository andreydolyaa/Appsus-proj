import { emailService } from '../services/email-service.js';
import { utils } from '../../../../js/services/util-service.js'
 
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
                        <div class="info">
                            <div class="filterReadContainer">
                                <select id="sortEMail" class="sortEMail" v-on:change="onSortEmail">
                                    <option value="">Sort Email...</option>
                                    <option value="sentAt">Date</option>
                                    <option value="subject">Title</option>
                                </select>
                                <button class="unreadEmailsBtn" v-on:click="onReadEnails">
                                    <i class="fas fa-envelope"></i>
                                    Read Emails
                                </button>
                                <button class="readEmailsBtn" v-on:click="onUneadEnails">
                                    <i class="fas fa-envelope-open"></i>
                                    Unread Emails                               
                                </button>
                            </div>    
                            <email-info></email-info>
                        </div>
                        <div class="router-view-container">
                            <router-view v-bind:filterBy="filter" 
                            v-bind:filterByInput="filterInputValue"
                            v-bind:sortByValue="sortByValue" 
                            @replyEmail="replyEmail($event)"
                            @replyEmailDraft="replyEmailDraft($event)"
                            >
                            </router-view>
                        </div>
                    </div>
                    <!-- v-bind:selected="selectedEmail" -->
                    <compose-email v-if="isCompose"
                    v-bind:emailTo="emailTo"
                    v-bind:emailToId="emailToId"
                    v-bind:emailBody="emailBody"
                     @closeEmail="setCloseEmail($event)">

                    </compose-email> 
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
            sortByValue:null,
            emailTo:'harelwn@gmail.com',
            emailToId:null,
            emailBody:'Lorem ipsum',
        }
    },
    methods:{
        getEmails(){
            emailService.getEmailsInbox().then(res=>{
                this.emails = res;
                //console.log('emails',res,this.emails);
            })
        },
        openCompose(){
            this.isCompose = !this.isCompose
        },
        replyEmail(arg){
            var [isCompose,relpyToEmail,relpyToId] = [...arg]
            //console.log('isCompose',isCompose,from)
            this.isCompose = isCompose;
            this.emailTo = relpyToEmail
            this.emailToId = relpyToId
            //this.isCompose = isCompose;
        },
        replyEmailDraft(arg){
            var [isCompose,relpyToEmail,relpyToId] = [...arg]
            this.isCompose = isCompose;
            this.emailTo = relpyToEmail;
        },
        setCloseEmail(isCompose){
            console.log('isCompose',isCompose)
            this.isCompose = isCompose;
        },
        filterBy($event){
            console.log('$event',$event)
            this.filter = $event

        },
        filterByInput(){
            console.log('$event',this.filterInput)
        },
        onReadEnails(){
            this.filter = 'isRead'
        },
        onUneadEnails(){
            this.filter = 'isReadFalse'
        },
        onSortEmail($event){
            //console.log('on change ',$event)
            //console.log('on change ',$event.target.value)
            this.sortByValue = $event.target.value
            console.log(' this.sortByValue', this.sortByValue)         
        },
        composeEmailFromKeeps(){
            if (Object.keys(this.$route.query).length > 0 ){
                console.log('this.$route.query',this.$route.query)
                console.log('this.$route.query email',this.$route.query.email)
                this.emailTo ='andrey@gmail.com';
                this.emailBody = this.$route.query.email
                console.log('this.emailBody',this.emailBody)
                this.isCompose = true;
            }
        }
    },
    computed:{

    },
    created(){
        this.getEmails()
        this.composeEmailFromKeeps()
        //console.log('this.$route.query',this.$route.query)
    },
}


