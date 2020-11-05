import { myRouter } from '../js/routes.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="mainApp">
            <!-- <h1>My App</h1> -->
        <router-link class="mainlink" to="/" exact>
            <img class="logo" src="assets/img/google_logo.svg"/> 
            <div class="name">< Home</div>
        </router-link>
            
 
            <main>
                <router-view></router-view>
                <!-- <book-msg></book-msg> -->
            </main>

        </section>
    `,
    components: {

    },
}

const app = new Vue(options);