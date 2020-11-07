


export default{
    props:['note'],
    template:`
    <section class="send-to-email">

        <button @click="sendToEmail()"><i class="far fa-share-square"></i></button>

    </section>
    `,
    methods:{
        sendToEmail(){
            this.$router.push(`/email/inbox/?email=${this.note.info.txt}`);
        }
    }
}