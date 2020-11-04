export default {
    props: [],
    name:'email-nav',
    template:`
        <section class="email-nav">
            <nav>
                <router-link to="/email/inbox" exact>inbox</router-link>|
                <router-link to="/email/inbox" exact>drafts</router-link>|      
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
