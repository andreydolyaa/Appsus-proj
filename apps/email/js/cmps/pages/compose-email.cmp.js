export default {
    props: [],
    name:'email-compose',
    template:`
        <section class="email-compose">
          <div class="header">
            <h2>New Messege</h2>
            <button class="close">X</button>
          </div>
          <div class="formContainer">
              <form>
                    <div class="rub">
                        <label>From:</label>
                        <input class="input" v-model="newEmail.from" placeholder=""/>
                    </div>

                    <div class="rub">
                        <label>To:</label>
                        <input class="input" v-model="newEmail.from" placeholder=""/>
                    </div>

                    <div class="rub">
                        <label>Subject:</label>
                        <input class="input" v-model="newEmail.subject" placeholder=""/>
                    </div>

                    <div class="rub">
                        <label>Body:</label>
                        <textarea class="input" v-model="newEmail.body" placeholder=""></textarea>
                    </div>

                    <div class="rub">
                        <button class="sendBtn">Send</button>
                    </div>
              </form>
              <!-- {{newEmail}} -->
            </div>
        </section>
        `,
    data() {
        return{  
            newEmail:{
                from:'harelwn@gmail.com',
                subject: '',
                body: '',
                isRead: false, 
            }
        }
    },
    methods:{

    },
    computed:{
      
    },
    created(){

    },
}


