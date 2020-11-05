import { emailService } from '../services/email-service.js';
import emailItem from '../cmps/email-item.cmp.js';

export default {
    props: ['filterBy','filterByInput'],
    name:'email-list',
    template:`
        <section>
            <!-- <h2>filter by {{filterBy}}</h2> -->
            <!-- {{filterEmails}} -->
            <!-- <pre> {{emailsDB}} </pre>   -->
   
            <ul class="emailList"> 
                <li class="emailListLi" v-if="emails" v-for="currEmail in filterEmails" :key="currEmail.id" >                      
                    <!-- <pre> {{currEmail}} </pre>   -->
                    <button class="starBtn"  v-on:click="onSetEmailStar(currEmail.id)" > 
                        <img class="star" src="apps/email/assets/img/star_border_black_20dp.png" v-bind:class="{ stared: currEmail.isStar }"/> 
                    </button>
                    <email-item v-on:click.native="onEmailSelect(currEmail.id)"  v-bind:email="currEmail"></email-item> 
                    <button class="mark" v-on:click=markAsUnread(currEmail.id) v-bind:class="{ read: !currEmail.isRead }"></button>
                    <button class="deleteBtn" v-on:click=deleteEmail(currEmail.id)><i class="fas fa-trash"></i></button>
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
           unReadEmails:null,
        }
    },
    methods:{
        getMails(){
            emailService.getEmails().then(res=>{
                this.emails = res;
                this.unreadEmails();             
                console.log('emails',this.emails);
            });
        },

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
       },
       unreadEmails(){
            emailService.getUnreadEamilsCount().then(res =>{
                this.unReadEmails = res
                //console.log('res unreadEmails',this.unReadEmails)
                //eventBus.$emit('show-msg', 'review removed Successffully')
            })            
       },
        onSetEmailStar(currEmailId){
            emailService.setEmailStar(currEmailId).then(res =>{

                console.log('set ', res)
                //eventBus.$emit('show-msg', 'review removed Successffully')
            })           
        },
    },
    computed:{
        filterEmails(){
            console.log('this.filterBy',this.filterBy)
            console.log('filterBy',this.filterByInput)
            if(!this.emails) return [];
            var arr = this.emails
             var res = arr.filter(email => {
                if(!this.filterByInput) return email[this.filterBy] === true
                return email[this.filterBy] === true 
                && email.from.toLowerCase().includes(this.filterByInput.toLowerCase())||
                email.subject.toLowerCase().includes(this.filterByInput.toLowerCase())||
                email.body.toLowerCase().includes(this.filterByInput.toLowerCase())

             })          
             console.log('getEmailsInbox',res)
             return res
         },
    },
    created(){
       this.getMails()
       console.log('filterBy',this.filterBy)

       
    }
}


