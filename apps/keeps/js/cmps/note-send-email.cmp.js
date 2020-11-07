


export default{
    props:['note'],
    template:`
    <section class="send-to-email">

        <button @click="sendToEmail()"><i class="fas fa-share-alt"></i></button>

    </section>
    `,
    methods:{
        sendToEmail(){
            this.$router.push(`/email/?email=${this.note.info.txt}`);
        }
    }
}