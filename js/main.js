import { myRouter } from '../js/routes.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <h1>My App</h1>
            <nav>
                <router-link to="/" exact>Home</router-link>|
                <router-link to="/email" exact>Email</router-link>|
                <router-link to="/keeps">Keeps</router-link>
            </nav>
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