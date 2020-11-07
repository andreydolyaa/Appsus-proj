
import {myRouter} from '../../../js/routes.js'
import navbar from './pages/app-header.cmp.js';




const options = {
    el: '#app',
    router:myRouter,
    template:
        `
     <section>
        <navbar/>
        <main>
            <router-view></router-view>
        </main>
     </section>
     `,
     components:{
         navbar,
     }
}

const app = new Vue(options);