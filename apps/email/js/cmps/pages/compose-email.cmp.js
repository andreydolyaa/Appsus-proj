import { emailService } from '../../services/email-service.js';
  
export default {
    props: ['emailTo','emailToId','emailBody'],
    name:'email-compose',
    template:`
        <section class="email-compose">
          <div class="headerCompose">
            <h2>New Messege</h2> 
            <button v-on:click="onCloseEmail" class="close">X</button>
          </div>
          <div class="formContainer"  v-on:submit.prevent="sendEmail">
              <form>
                    <div class="rub">
                        <label>From:</label>
                        <input class="input" v-model="newEmail.from" placeholder=""/>
                    </div>

                    <div class="rub">
                        <label>To:</label>
                        <input class="input" v-model="newEmail.to" placeholder=""/>
                    </div>

                    <div class="rub">
                        <label>Subject:</label>
                        <input class="input" v-model="newEmail.subject" placeholder=""/>
                    </div>

                    <div class="rub">
                        <label>Body:</label>
                        <textarea class="input" v-model="newEmail.body" placeholder=""></textarea>
                    </div>

                    <div class="rub">
                        <button class="sendBtn">Send</button>
                    </div>
              </form>
              <!-- {{newEmail}} -->
            </div>
        </section>
        `,
    data() {
        return{  
            newEmail:{
                id:null,
                from:'harelwn@gmail.com',
                to:this.emailTo,
                subject: 'Subject',
                body: this.emailBody,
                isRead: false, 
                isNew: false,
                isSent : false,
                isDraft : false,
                isStar:false,
            },
            isCompose:false,
        }
    },  
    methods:{
        sendEmail(){       
            emailService.updateEmailsSent(this.newEmail,this.emailTo,this.emailToId)
            .then(res =>{
                console.log('res',res)
                this.resetNewEmail()
                this.emitClose()
            })   
        },
        onCloseEmail(){
            emailService.updateEmailsDraft(this.newEmail).then(res =>{
                console.log('res',res)
                this.resetNewEmail()
                this.emitClose()
           })   
        },
        emitClose(){
            this.$emit('closeEmail', this.isCompose)
        },
        setEmailTo(){
            if(this.emailFrom) this.newEmail.to = this.emailFrom
        },
        resetNewEmail(){
            this.newEmail.id=null;
            this.newEmail.from='harelwn@gmail.com';
            this.newEmail.to='harelwn@gmail.com';
            this.newEmail.subject= 'Subject';
            this.newEmail.body= null;
            this.newEmail.isRead= false; 
            this.newEmail.isNew= false;
            this.newEmail.isSent = false;
            this.newEmail.isDraft = false;
        },
    },
    computed:{
      
    },
    created(){
        this.setEmailTo()
        console.log('this.emailFrom',this.emailTo, this.emailToId)
    },
}


