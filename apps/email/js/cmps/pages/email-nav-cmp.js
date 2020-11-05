export default {
    props: [],
    name:'email-nav',
    template:`
        <section class="email-nav">
            <nav class="nav">
            <!-- to="/email/inbox" exact-->
                <div class="link" v-on:click="emitFilter('isNew')"> Inbox </div>
                <div class="link" v-on:click="emitFilter('isSent')"> Sent </div>
                <div class="link" v-on:click="emitFilter('isDraft')"> Drafts </div>
                <!-- <router-link v-on:click="emitFilter('isNew')" to="/email/inbox" >Inbox</router-link> -->
                <!-- <router-link to="/email/sent"  exact>Sent</router-link>
                <router-link to="/email/draft" exact>Drafts</router-link>      -->
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
            console.log('nav bar',filter)
            this.$emit('filterBy', filter)
            console.log(' this.$route',  this.$route)
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
