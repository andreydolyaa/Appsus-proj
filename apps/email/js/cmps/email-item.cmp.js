export default {
    props: ['email'],
    name:'email-item',
    template:`
        <section class="email-item">
            <!-- <h1>email item</h1> -->
            
            <ul v-bind:class="{ emailReadFalse: !email.isRead }">
                <li>{{email.from}}</li>
                <li>{{email.subject}}</li>
                <li>{{getDateFromTimeStamp}}</li>
            </ul>
            <!-- <pre>{{email}}</pre> -->
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
        getDateFromTimeStamp(){
            var date = new Date(this.email.sentAt)
            return date
        },
    },
    created(){
        //getDateFromTimeStamp()
    },
}


