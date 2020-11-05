export default {
    template: `
    <section @click="showRef" class="mainNav">

        <nav>
            <router-link class="mainlink LinkGmail" to="/email/inbox" exact>
                <img class="logo" src="assets/img/Gmail-logo.png"/>
                <div class="name">gmail</div>
            </router-link>
            
            <router-link class="mainlink LinkKeeps" to="/keeps" exact>
                <img class="logo" src="assets/img/keeps-logo.jpg"/>
                <div class="name">keeps</div>
            </router-link>

            <!-- <router-link class="LinkKeeps" to="/books" exact>
                <img class="logo" src="assets/img/books-logo.jpg"/>
            </router-link>
             -->

        </nav>
    </section>
    `,
    methods: {
        showRef() {
            console.log(this.$refs,);
        }
    },
    mounted() {

    },
    created() {

    },

}