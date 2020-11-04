export default {
    props: [],
    name:'email-nav',
    template:`
        <section class="email-nav">
            <nav class="nav">
                <router-link to="/email/inbox" exact>Inbox</router-link>
                <router-link to="/email/inbox" exact>Sent</router-link>
                <router-link to="/email/inbox" exact>Drafts</router-link>     
            </nav>
        </section>
        `,
    data() {
        return{

        }
    },
    methods:{

    },
    computed:{

    },
    created(){
  
    },
}
