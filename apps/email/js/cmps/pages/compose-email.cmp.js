export default {
    props: [],
    name:'email-compose',
    template:`
        <section class="email-compose">
          <h2>New Messege</h2>
          <div class="formContainer">
              <form>
                    <div class="rub">
                    <label>From:</label><input class="input" v-model="newEmail.from" placeholder=""/>
                    </div>

                    <div class="rub">
                    <label>To:</label><input class="input" v-model="newEmail.from" placeholder=""/>
                    </div>

                    <div class="rub">
                    <label>Subject:</label><input class="input" v-model="newEmail.subject" placeholder=""/>
                    </div>

                    <div class="rub">
                    <label>Body:</label><textarea class="input" v-model="newEmail.body" placeholder=""></textarea>
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


