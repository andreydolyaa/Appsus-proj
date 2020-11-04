import { emailService } from '../services/email-service.js';
import emailItem from '../cmps/email-item.cmp.js';

export default {
    props: ['emailsDB'],
    name:'email-list',
    template:`
        <section>
            <!-- <pre> {{emailsDB}} </pre>   -->
            <ul class="emailList"> 
                <div class="info"></div>
                <!-- @click="emitSelected(currBook.id)" without native v-on:click.native="onSelectedEmail(currEmail.id)" -->
                <li class="emailListLi" v-for="currEmail in emails" :key="currEmail.id" >                      
                    <!-- <pre> {{currEmail}} </pre>   -->
                    <email-item v-on:click.native="onEmailSelect(currEmail.id)"  v-bind:email="currEmail"></email-item> 
                    <button v-on:click=markAsUnread(currEmail.id)>Mark</button>
                    <button v-on:click=deleteEmail(currEmail.id)>Delete</button>
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
           emails:null,
        }
    },
    methods:{
       onEmailSelect(currEmailId){
           this.$router.push('/email/'+currEmailId)
       },
       deleteEmail(currEmailId){
           console.log('emailId',currEmailId)
           emailService.removeEmail(currEmailId).then(res =>{
                console.log('res',res)
                //eventBus.$emit('show-msg', 'review removed Successffully')
           })
       },
       markAsUnread(currEmailId){
            emailService.setEmailAsUnread(currEmailId).then(res =>{
                console.log('res',res)
                //eventBus.$emit('show-msg', 'review removed Successffully')
           })
       }
    },
    computed:{
        unreadEmails(){
            return emailService.getUnreadEamils().then(res =>{
                console.log('res',res)
                //eventBus.$emit('show-msg', 'review removed Successffully')
           })
        },
    },
    created(){
        emailService.getEmails().then(res=>{
            this.emails = res;
            console.log('res',res);
            console.log('emails',this.emails);
        })
    }
}


