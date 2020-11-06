import noteEditingBar from '../cmps/note-editing-bar.cmp.js';
import { keepsService } from '../services/keepsService.js';

export default {
    props: ['note'],
    template: `
    <section class="note-video-display" :style="{'background-color':note.style.backgroundColor}">
        <h1>{{note.info.title}}</h1>
        <iframe width="300" height="200" :src="changeUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <noteEditingBar v-bind:note="note"/>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        changeUrl() {
            return keepsService.changeVideoUrl(this.note.info.url);
        }
    },
    components: {
        noteEditingBar
    }
}

