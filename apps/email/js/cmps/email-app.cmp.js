import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js';
import emailDetails from'../cmps/pages/email-details.cmp.js';
import emailnav from'../cmps/pages/email-nav.cmp.js';

export default {
    props: [''],
    name:'email-app',
    template:`
        <section>
            <h1>Email itemS</h1> 
                <email-nav></email-nav>
                <email-list v-bind:emailsDB="emails"></email-list>  
                <email-details></email-details>
                <!-- v-bind:selected="selectedEmail" -->
            </ul>  
        </section>
        `,
    components:{
        emailService,
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


