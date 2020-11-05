import noteEditingBar from '../cmps/note-editing-bar.cmp.js';


export default {
    props: ['note'],
    template: `
    <section class="note-video-display" :style="{'background-color':note.style.backgroundColor}">
        <h1>{{note.info.title}}</h1>
        <iframe width="300" height="300"
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