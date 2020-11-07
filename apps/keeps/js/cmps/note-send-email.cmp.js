


export default{
    props:['note'],
    template:`
    <section class="send-to-email">

        <button @click="sendToEmail()"><i class="fas fa-share-alt"></i></button>

    </section>
    `,
    methods:{
        sendToEmail(){
            if(this.note.type === 'noteTxt') this.$router.push(`/email/inbox/?email=${this.note.info.txt}`);
            else if(this.note.type === 'noteImg') this.$router.push(`/email/inbox/?email=${this.note.info.url}`);
            else if(this.note.type === 'noteTodos') this.$router.push(`/email/inbox/?email=${this.note.info.label}`);
            else if(this.note.type === 'noteVideo') this.$router.push(`/email/inbox/?email=${this.note.info.url}`);
        }
    }
}