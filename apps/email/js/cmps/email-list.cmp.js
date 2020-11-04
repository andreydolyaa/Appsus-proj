import { emailService } from '../services/email-service.js';
import emailItem from '../cmps/email-item.cmp.js';

export default {
    props: ['emailsDB'],
    name:'email-list',
    template:`
        <section>
            <h1>list</h1>
            <!-- <pre> {{emailsDB}} </pre>   -->
            <ul class="emailList"> 
                <!-- @click="emitSelected(currBook.id)" without native v-on:click.native="onSelectedEmail(currEmail.id)" -->
                <li v-for="currEmail in emails" :key="currEmail.id" >                      
                    <!-- <pre> {{currEmail}} </pre>   -->
                    <email-item v-on:click.native="onEmailSelect(currEmail.id)"  v-bind:email="currEmail"></email-item> 
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
       }
    //    deleteEmail(){
    //     console.log('removeReview',selectedBookId,reviewId)
    //     bookService.removeReview(selectedBookId ,reviewId).then(res =>{
    //         //console.log('res',res)
    //         eventBus.$emit('show-msg', 'review removed Successffully')
    //     })
    //},
    },
    created(){
        emailService.getEmails().then(res=>{
            this.emails = res;
            console.log('res',res);
            console.log('emails',this.emails);
        })
    }
}


