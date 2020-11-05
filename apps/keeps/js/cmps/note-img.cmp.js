import noteEditingBar from '../cmps/note-editing-bar.cmp.js';

export default{
    props:['note'],
    template:`
    <section class="note-img-display" :style="{'background-color':note.style.backgroundColor}">
        <h1>{{note.info.title}}</h1>
        <img v-bind:src="note.info.url">
        <noteEditingBar v-bind:note="note"/>
    </section>
    `,
    data(){
        return{
            
        }
    },
    methods:{

    },

    components:{
        noteEditingBar
    }
}