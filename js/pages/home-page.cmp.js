export default {
    template: `
    <section @click="showRef" class="mainNav">

        <nav>
            <router-link class="mainlink LinkGmail" to="/email/inbox" exact>
                <img class="logo" src="assets/img/email.png"/>
                <div class="name">Email</div>
            </router-link>
            
            <router-link class="mainlink LinkKeeps" to="/keeps" exact>
                <img class="logo" src="assets/img/post.png"/>
                <div class="name">Keeps</div>
            </router-link>

            <router-link class="mainlink LinkKeeps" to="/books" exact>
                <img class="logo books-logo" src="assets/img/study.png"/>
                <div class="name">Books</div>
            </router-link>
             

        </nav>


    </section>
    `,
    methods: {
        showRef() {
            console.log(this.$refs,);
        }
    },
    components: {

    },
    mounted() {

    },
    created() {

    },

}