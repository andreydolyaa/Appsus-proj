// import bookReview from '/js/book-review.cmp.js';
import { emailService } from '../../services/email-service.js';
import {eventBus} from '../../services/event-bus-service.js';
// enter, number

export default {
    props: [''],
    name:'email-details',
    template:`
        <section class="email-details" v-if="selectedEmail">
            <!-- {{selectedEmail}} -->
            <!-- { "id": "em01", "from": "goolge tech", "subject": "Wassap?", "body": "Pick up!", "isRead": false, "sentAt": 1551133930594 } -->

            <h2>{{selectedEmail.subject}}</h2>
            <div class="body">
                <div class="header">
                    <p>{{selectedEmail.from}}</p>
                    <p>{{getDateFromTimeStamp}}</p>

                </div>
                <div class="content">
                    <p>{{selectedEmail.body}}</p>
                </div>
            </div>
           
        </section>

        `,
    components: {

    },
    data(){
        return {
            selectedEmailId:null,
            selectedEmail: null,
        }
    },
    methods:{
       getEmail(){
            console.log('emailID');
            this.selectedEmailId = this.$route.params.emailId
            console.log('this.selectedEmailId',this.$route.params,this.selectedEmailId)
            emailService.getSelectedEmail(this.selectedEmailId)
                                .then(res =>{ 
                                    this.selectedEmail = res;                                 
                                    console.log( 'this.selectedEmail',this.selectedEmail)
                                });     
        },
      
    },
    computed:{
        getDateFromTimeStamp(){
            var timestamp = this.selectedEmail.sentAt
            var date = new Date(timestamp * 1000);
            return date
        },
    },
    created(){
        this.getEmail();
    },  
    watch: {
       '$route.params.bookId'(prevId,nextId){
           console.log('watch',prevId,nextId)
           //this.getEmail()
        }
    },
        
}



