import { myRouter } from '../js/routes.js'
import footerPage from '../js/pages/footer.cmp.js'

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="mainApp">
            <!-- <h1>My App</h1> -->
        <router-link class="linkHome" to="/" exact>
            <!--- <img class="logo" src="assets/img/google_logo.svg"/> --->
            <h1 class="main-logo">Appsus</h1>
            <div class="name">< Home</div>
        </router-link>
            
 
            <main>
                <router-view></router-view>
                <!-- <book-msg></book-msg> -->
            </main>
            <footer-page></footer-page>
        </section>
    `,
    components: {
        footerPage,
    },
}

const app = new Vue(options);