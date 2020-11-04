import { emailService } from '../services/email-service.js';
import emailItem from '../cmps/email-item.cmp.js';

export default {
    props: ['emailsDB'],
    name:'email-list',
    template:`
        <section>
            <!-- <pre> {{emailsDB}} </pre>   -->
            <ul class="emailList"> 
                <!-- @click="emitSelected(currBook.id)" without native v-on:click.native="onSelectedEmail(currEmail.id)" -->
                <li v-for="currEmail in emailsDB" :key="currEmail.id" >                      
                    <!-- <pre> {{currEmail}} </pre>   -->
                    <email-item v-on:click.native="onEmailSelect(currEmail.id)"  v-bind:email="currEmail"></email-item> 
                    
                </li>    
            </ul>  
        </section>
        `,
    components:{
        emailItem,
    },
    data(){
        return{
           selectedEmail:null, 
        }
    },
    methods:{
       onEmailSelect(currEmailId){
           this.$router.push('/email/'+currEmailId)
       }
    }
}


