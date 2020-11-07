import {eventBus,EDIT_ON} from '../services/event-bus-service.js';
export default {
    props: ['note'],
    template: `
    <section class="editing-modal" >
    
        <button class="close-modal" @click="emitSave()"><i class="fas fa-times"></i></button>

        <div class="note-txt1" v-if="noteType === 'noteTxt'" >
        <h1>Set new text</h1>
            <input type="text" placeholder="enter text" v-model="note.info.txt" @keyup.enter="emitSave()">
        </div>


        <div class="note-img1" v-if="noteType === 'noteImg'">
        <h1>Image Url</h1><input type="text" placeholder="enter img url" v-model="note.info.url" @keyup.enter="emitSave()"/>
        <h1>Title</h1><input type="text" placeholder="set title" v-model="note.info.title" @keyup.enter="emitSave()"/>
        </div>



        <div class="note-todo1" v-if="noteType === 'noteTodos'">
        <h1>Label</h1>
             <input id="title" type="text" placeholder="Label" v-model="note.info.label" @keyup.enter="emitSave()"/>
             <h1>Todos:</h1>
             <div>
                <ul>
                    <li v-for="todo in todos">
                    <input type="text" placeholder="todo.txt"  v-model="todo.txt" @keyup.enter="emitSave()"/>
                    </li>
                    
                </ul>
             </div>
        </div>


        <div class="note-video1" v-if="noteType === 'noteVideo'">
        <h1>Video title</h1>
            <input type="text" placeholder="enter title" v-model="note.info.title" @keyup.enter="emitSave()"/>
            <h1>Video Url</h1>
            <input type="text" placeholder="enter video url"  v-model="note.info.url" @keyup.enter="emitSave()"/>
        </div>

        

        <div class="ff">
        <button @click="emitSave()">Save</button>
        </div>
    </section>
    `,
    data() {
        return {

            todos: this.note.info.todos,
            isSaved: false,
            noteType: this.getCmpType()
        }
    },
    methods: {
        getCmpType() {
            if (this.note.type === 'noteTxt') return this.noteType = 'noteTxt'
            else if (this.note.type === 'noteImg') return this.noteType = 'noteImg'
            else if (this.note.type === 'noteTodos') return this.noteType = 'noteTodos'
            else if (this.note.type === 'noteVideo') return this.noteType = 'noteVideo'
            else return
        },
        emitSave() {
            eventBus.$emit(EDIT_ON, this.isSaved);
            this.isSaved = true;
            this.$emit('saveNote', this.isSaved);
        },
    },
}

// <div class="note-img" v-if="noteType === 'noteImg'">
//             <input type="text" placeholder="enter img url" v-model="imgNote.info.url" />
//             <input type="text" placeholder="set title" v-model="imgNote.info.title" />
//         </div>


//         <div class="note-img" v-if="noteType === 'noteTodos'">
//             <input type="text" placeholder="Label" v-model="todoNote.info.label" />
//             <input type="text" placeholder="add todos" v-model="todo" />
//             <button @click="addTodo()">+</button>
//             <div v-for="todo in todoNote.info.todos">
//                 <p>{{todo.txt}}</p>
//             </div>
//         </div>


        // <div class="note-img" v-if="noteType === 'noteVideo'">
        //     <input type="text" placeholder="enter title" v-model="videoNote.info.title" />
        //     <input type="text" placeholder="enter video url"  v-model="videoNote.info.url"/>
        // </div>


// <div class="note-img" v-if="noteType === 'noteTodos'">
//              <input type="text" placeholder="Label" v-model="note.info.label" />
//              <input type="text" placeholder="add todos" v-model="todo" />
//              <button @click="addTodo()">+</button>
//              <div v-for="todo in todoNote.info.todos">
//                  <p>{{todo.txt}}</p>
//             </div>
//         </div>