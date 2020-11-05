//import path from "../../../assets/img/inbox_white_20dp.png"
export default {
    props: [],
    name:'email-nav',
    template:`
        <section class="email-nav">
            <nav class="nav">
            <!-- to="/email/inbox" exact-->
                <div class="link" v-on:click="emitFilter('isNew')">
                    <img src="apps/email/assets/img/inbox_white_20dp.png"/> Inbox 
                </div>

                <div class="link" v-on:click="emitFilter('isSent')">  
                    <img src="apps/email/assets/img/send_white_20dp.png"/> Sent
                </div>

                <div class="link" v-on:click="emitFilter('isStar')"> 
                    <img src="apps/email/assets/img/star_googyellow500_20dp.png"/> Starred 

                </div>

                <div class="link" v-on:click="emitFilter('isDraft')"> 
                    <img src="apps/email/assets/img/insert_drive_file_white_20dp.png"/> Drafts 
                </div>

            </nav>
        </section>
        `,
    data() {
        return{
            filter:null,
            filterNav:'isDraft',
        }
    },
    methods:{
        emitFilter(filter){
            this.$emit('filterBy', filter)
            //console.log(' this.$route',  this.$route)
            if(this.$route.path !== 'inbox'){
                this.$router.push('inbox')
            }
        }
    },
    computed:{

    },
    created(){
  
    },
}
