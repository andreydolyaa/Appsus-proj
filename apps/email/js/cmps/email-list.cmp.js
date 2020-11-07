import { emailService } from '../services/email-service.js';
import emailItem from '../cmps/email-item.cmp.js';
import { utils } from '../../../../js/services/util-service.js'

export default {
    props: ['filterBy','filterByInput','sortByValue'],
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
                    <div class="btnsContainer">
                        <button class="mark" v-on:click=markAsUnread(currEmail.id) v-bind:class="{ read: !currEmail.isRead }"></button>
                        <button class="deleteBtn" v-on:click=deleteEmail(currEmail.id)><i class="fas fa-trash"></i></button>
                    </div>
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
           //console.log('emailId',currEmailId)
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
            //console.log('this.filterBy',this.filterBy)
            //console.log('filterByInput',this.filterByInput)
            //console.log('this.filterBy',this.filterBy)

            if(!this.emails) return [];
            var arr = this.emails

            var res = arr.filter(email => {
                if(this.filterBy === 'isReadFalse'){
                    return email.isRead === false; 
                } 
                if(!this.filterByInput) return email[this.filterBy] === true;
                return email[this.filterBy] === true 
                && email.from.toLowerCase().includes(this.filterByInput.toLowerCase())||
                email.subject.toLowerCase().includes(this.filterByInput.toLowerCase())||
                email.body.toLowerCase().includes(this.filterByInput.toLowerCase())
             })   
             //console.log('after filter',res)
             if(this.sortByValue && this.sortByValue === 'sentAt'){
                res = utils.sortByNumber(res ,this.sortByValue)
                //console.log('this.sortByValue',this.sortByValue)
            }  else if(this.sortByValue && this.sortByValue === 'subject'){
                res = utils.sortByString(res ,this.sortByValue)
            }   
    
            return res
         },
         sortBy(){

         },
    },
    created(){
       this.getMails()
       //console.log('filterBy',this.filterBy)       
    }
}


