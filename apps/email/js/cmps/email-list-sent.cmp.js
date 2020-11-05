import { emailService } from '../services/email-service.js';
import emailItem from '../cmps/email-item.cmp.js';

export default {
    props: [''], //emailsDB
    name:'email-list',
    template:`
        <section>

            <!-- <h2>sent list</h2> -->
            <!-- <pre> {{emailsDB}} </pre>   -->
            <ul class="emailList" v-if="emails"> 
                <div class="info" >Unread emails: <span class="count">{{unReadEmails}}</span></div>
                <!-- @click="emitSelected(currBook.id)" without native v-on:click.native="onSelectedEmail(currEmail.id)" -->
                <li class="emailListLi" v-for="currEmail in emails" :key="currEmail.id" >                      
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
        }
    },
    methods:{
       onEmailSelect(currEmailId){
          // this.$router.push('/email/'+currEmailId)
       },
       deleteEmail(currEmailId){
          // console.log('emailId',currEmailId)
          // emailService.removeEmail(currEmailId).then(res =>{
          //      console.log('res',res)
          //      //eventBus.$emit('show-msg', 'review removed Successffully')
          // })
       },
       markAsUnread(currEmailId){
           // emailService.setEmailAsUnread(currEmailId).then(res =>{
           //     console.log('res',res)
           //     //eventBus.$emit('show-msg', 'review removed Successffully')
           //})
       },
       unreadEmails(){
           //emailService.getUnreadEamils().then(res =>{
           //    this.unReadEmails = res
           //    console.log('res unreadEmails',this.unReadEmails)
           //    //eventBus.$emit('show-msg', 'review removed Successffully')
           //})            
       },
    },
    computed:{

    },
    updated(){

    },
    created(){
       emailService.getEmails().then(res=>{
           this.emails = res;
           //this.unreadEmails();
           console.log('getEmailsSent res',res);
           console.log('emails',this.emails);
       })
    }
}


