import noteEdit from '../cmps/note-edit.cmp.js';

export default{
    props:['note'],
    template:`
    <section class="note-img-display">
        <h1>{{note.info.title}}</h1>
        <img v-bind:src="imgUrl">
        <noteEdit v-bind:note="note"/>
    </section>
    `,
    data(){
        return{
            imgUrl:this.note.info.url
        }
    },
    components:{
        noteEdit
    }
}