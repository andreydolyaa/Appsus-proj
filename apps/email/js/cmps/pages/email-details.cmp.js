import {utils} from '../../../../../js/services/util-service.js'
import { emailService } from '../../services/email-service.js';
import {eventBus} from '../../services/event-bus-service.js';


export default {
    props: [''],
    name:'email-details',
    template:`
        <section class="email-details" v-if="selectedEmail">

            <button class="sendToKeepsBtn"  v-if="!selectedEmail.isDraft" v-on:click="onSendToKeeps()">Send to Keeps</button>
            <button class="replyBtn" v-if="!selectedEmail.isDraft" v-on:click="onReply(selectedEmail.from,selectedEmail.id)">Reply</button>
            <h2>{{selectedEmail.subject}}</h2>
            <div class="body">
                <div class="header">
                    <div class="fromContainer">
                        <p class="from">{{selectedEmail.fromName}}</p>
                        <p class="from">({{selectedEmail.from}})</p>
                    </div>
                    <p class="date">{{getDateFromTimeStamp(selectedEmail.sentAt)}}</p>
                </div>
                <div class="content">
                    <p>{{selectedEmail.body}}</p>
                </div>
            </div>
            <button v-if="selectedEmail.isDraft" v-on:click="onSendDraft(selectedEmail.from,selectedEmail.id)">Send</button>

            <template class="replies" v-if="selectedEmail.replies">
                <ul class="repliesList">
                    <li v-for="reply in getReplies">   
                        <section class="email-details" >
                            <button class="replyBtn" v-on:click="onReply(selectedEmail.from,selectedEmail.id)">Reply</button>
                            <h2>{{reply.subject}}</h2>
                            <div class="body">
                                <div class="header">
                                    <div class="fromContainer">
                                        <p class="from">{{reply.fromName}}</p>
                                        <p class="from">({{reply.from}})</p>
                                    </div>
                                    <p class="date">{{getDateFromTimeStamp(reply.sentAt)}}</p>
                                    
                                </div>
                                <div class="content">
                                    <p>{{reply.body}}</p>
                                </div>
                            </div>        
                        </section>
                    </li>
                </ul>
            </template>

        </section>


    `,
    components: {
 
    },
    data(){
        return {
            selectedEmailId:null,
            selectedEmail: null,
            isCompose:false,
            off:null,
            newEmailFromDraft:null
        }
    },
    methods:{
        onSendToKeeps(){//}
            //this.$router.push(`/keeps/?title=${this.selectedEmail.subject}`);
            console.log('this.selectedEmail.subject',this.selectedEmail.subject)
            this.$router.push(`/keeps/?keep=${this.selectedEmail.subject}&body=${this.selectedEmail.body}`);
        },
        creatNewEmailFromDraft(){
            this.newEmailFromDraft = {
                id:utils.makeId(),
                from:this.selectedEmail.from,
                subject: this.selectedEmail.subject,
                body: this.selectedEmail.body,
                isRead: false, 
                isNew: false,
                isSent : false,
                isDraft : false,
                isStar:false,
            };
        },
        resetNewEmail(){
            this.newEmail.id=null;
            this.newEmail.from='harelwn@gmail.com';
            this.newEmail.to='harelwn@gmail.com';
            this.newEmail.subject= 'Subject';
            this.newEmail.body= 'Lorem ipsum';
            this.newEmail.isRead= false; 
            this.newEmail.isNew= false;
            this.newEmail.isSent = false;
            this.newEmail.isDraft = false;
        },
        getEmail(){
            //console.log('emailID');
            this.selectedEmailId = this.$route.params.emailID
            //console.log('this.selectedEmailId',this.$route.params,this.selectedEmailId)
            emailService.getSelectedEmail(this.selectedEmailId)
                                .then(res =>{ 
                                    if(!res) return
                                    this.selectedEmail = res; 
                                    this.markEmailAaRead()                                
                                    console.log( 'selectedEmail',this.selectedEmail)
                                });     
        },
        markEmailAaRead() {
            emailService.setEmailAsRead(this.selectedEmailId).then(res =>{                     
                //console.log( 'selectedEmail',res)
            });     
           
        },
        onReply(relpyToEmail,relpyToId){
            console.log('on reply to...' ,relpyToEmail,relpyToId)
            this.$emit('replyEmail', [this.isCompose = true,relpyToEmail,relpyToId])
        },
        onSendDraft(relpyToEmail,relpyToId){
            this.creatNewEmailFromDraft()
            console.log('onSendDraft' ,this.newEmailFromDraft)
            //this.$emit('replyEmailDraft', [this.isCompose = true,relpyToEmail])
            emailService.updateEmailsDraftSent(this.newEmailFromDraft,this.selectedEmailId) 
            this.selectedEmail = null     
        },
        getDateFromTimeStamp(timestamp){
            //var timestamp = this.selectedEmail.sentAt
            var date = new Date(timestamp * 1000);
            return date
        },
        sendEmail(){  /// not in use
            console.log('this.selectedEmail',this.selectedEmail)    
            emailService.updateEmailsSent(this.newEmail,this.newEmail.from,this.selectedEmail.id)
            .then(res =>{
                console.log('res',res)
                this.resetNewEmail()
            })   
        },
    },
    computed:{
        getReplies(){
            //console.log(this.selectedEmail.replies);
            var repliesId = this.selectedEmail.replies;
            var replies 
            return replies = emailService.getSelectedEmailReplies(repliesId)
        },
    },
    created(){
        this.getEmail();
       
        //this.$emit('emitSent', res)
    },  
    watch: {
       '$route.params.bookId'(prevId,nextId){
           //console.log('watch',prevId,nextId)
           //this.getEmail()
        }
    },
        
}



