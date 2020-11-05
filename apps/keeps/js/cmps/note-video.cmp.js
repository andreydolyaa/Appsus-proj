import noteEditingBar from '../cmps/note-editing-bar.cmp.js';


export default {
    props: ['note'],
    template: `
    <section class="note-video-display">
        <h1>{{note.info.title}}</h1>
        <iframe width="300" height="300"
            v-bind:src="videoUrl">
        </iframe>
        <noteEditingBar v-bind:note="note"/>
    </section>
    `,
    data(){
        return{
            videoUrl:this.note.info.url
        }
    },
    components:{
        noteEditingBar
    }
}