

export default{
    props:['note'],
    template:`
    <section class="note-img-display">
        <h1>{{note.info.title}}</h1>
        <img v-bind:src="imgUrl">
    </section>
    `,
    data(){
        return{
            imgUrl:this.note.info.url
        }
    }
}