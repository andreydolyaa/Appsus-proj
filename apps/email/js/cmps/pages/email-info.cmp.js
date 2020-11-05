import { emailService } from '../../services/email-service.js';
import {eventBus} from '../../services/event-bus-service.js';

export default {
    props: [''],
    name:'emails-info',
    template:`
        <section class="emails-info" v-if="unReadEmails">
            <div class="info" >Unread Inbox emails: <span class="count">{{unReadEmails}}</span></div> 
        </section>
    `,
    components: {

    },
    data(){
        return {
            selectedEmailId:null,
            selectedEmail: null,
            emailInbox: null,
            unReadEmails:null,
        }
    },
    methods:{
        unreadEmailsCount(){
            emailService.getUnreadEamilsCount().then(res =>{
                this.unReadEmails = res
                console.log('res unreadEmails',this.unReadEmails)
                //eventBus.$emit('show-msg', 'review removed Successffully')
            })            
       },
    },
    computed:{
      
    },
    created(){
        this.unreadEmailsCount();
    },  
    watch: {
       '$route.params.bookId'(prevId,nextId){
           console.log('watch',prevId,nextId)
           //this.getEmail()
        }
    },
        
}



