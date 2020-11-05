import noteEditingBar from '../cmps/note-editing-bar.cmp.js';

export default{
    props:['note'],
    template:`
    <section class="note-txt-display" :style="{'background-color':note.style.backgroundColor}">
        <h1>{{note.info.txt}}</h1>
       <noteEditingBar v-bind:note="note"/>
    </section>
    `,
    components:{
        noteEditingBar
    }
}


