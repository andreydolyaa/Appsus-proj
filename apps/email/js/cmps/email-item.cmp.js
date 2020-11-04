export default {
    props: ['email'],
    name:'email-item',
    template:`
        <section class="email-item">
            <!-- <h1>email item</h1> -->
            <ul>
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
            var timestamp = this.email.sentAt
            var date = new Date(timestamp * 1000);
            return date
        },
    },
    created(){
        //getDateFromTimeStamp()
    },
}


