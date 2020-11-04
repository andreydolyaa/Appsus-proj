// import bookReview from '/js/book-review.cmp.js';
import { emailService } from '../../services/email-service.js';
import {eventBus} from '../../services/event-bus-service.js';
// enter, number

export default {
    props: [''],
    name:'email-details',
    template:`
        <section v-if="selectedEmail">
            <h1>email details</h1>
            {{selectedEmail}}
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



