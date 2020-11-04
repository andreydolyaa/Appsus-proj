

export default{
    props:['note'],
    template:`
    <section class="note-txt-display">
        <h1>{{note.info.txt}}</h1>
        <button @click="editNote(note.id)"><i class="fas fa-pen"></i></button>
    </section>
    `,data(){
        return{

        }
    },
    methods:{
        editNote(val){
            console.log(val);
        }
    }
}