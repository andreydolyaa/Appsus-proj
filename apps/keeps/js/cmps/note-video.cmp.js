import noteEditingBar from '../cmps/note-editing-bar.cmp.js';


export default {
    props: ['note'],
    template: `
    <section class="note-video-display" :style="{'background-color':note.style.backgroundColor}">
        <h1>{{note.info.title}}</h1>
        <iframe width="200" height="200"
            v-bind:src="note.info.url">
        </iframe>
        <noteEditingBar v-bind:note="note"/>
    </section>
    `,
    data(){
        return{
           
        }
    },
    components:{
        noteEditingBar
    }
}