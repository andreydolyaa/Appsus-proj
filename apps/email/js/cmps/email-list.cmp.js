import { emailService } from '../services/email-service.js';
import emailItem from '../cmps/email-item.cmp.js';

export default {
    props: ['filterBy'],
    name:'email-list',
    template:`
        <section>
            <!-- <h2>filter by {{filterBy}}</h2> -->
            <!-- {{filterEmails}} -->
            <!-- <pre> {{emailsDB}} </pre>   -->
            <ul class="emailList"> 
                <!-- @click="emitSelected(currBook.id)" without native v-on:click.native="onSelectedEmail(currEmail.id)" -->
                <li class="emailListLi" v-for="currEmail in filterEmails" :key="currEmail.id" >                      
                    <!-- <pre> {{currEmail}} </pre>   -->
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
           //filter:'isNew',

           //filter:'isDraft',
           //filter:'isSent',
        }
    },
    methods:{
        getMails(){
            emailService.getEmails().then(res=>{
                this.emails = res;
                this.unreadEmails();
                //console.log('res',res);
                console.log('emails',this.emails);
                //getEmailsInbox();
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


    },
    computed:{
        filterEmails(){
            if(!this.emails) return [];
            if (!this.filterBy) return this.emails;
            var arr = this.emails
            //console.log('arr',arr)
             var res = arr.filter(email => {
                 return email[this.filterBy] === true;
             })          
             console.log('getEmailsInbox',res)
             return res
         },
    },
    created(){
       this.getMails()
       
    }
}


