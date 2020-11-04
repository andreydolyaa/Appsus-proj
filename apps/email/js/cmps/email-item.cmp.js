export default {
    props: ['email'],
    name:'email-item',
    template:`
        <section>
            <h1>email item</h1>
            <pre>{{email}}</pre>
               
        </section>
        `,
    data() {
        return{
            currEmail : 'email',
        }
    },
    methods:{

    },
    computed:{

    },
}


