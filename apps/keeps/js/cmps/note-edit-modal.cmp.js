
export default {
    props: ['note'],
    template: `
    <section class="editing-modal">
        <h1>edit note</h1>

        <div class="note-txt" v-if="noteType === 'noteTxt'">
            <input type="text" placeholder="enter text" v-model="note.info.txt">
        </div>


        <div class="note-img" v-if="noteType === 'noteImg'">
            <input type="text" placeholder="enter img url" v-model="note.info.url" />
            <input type="text" placeholder="set title" v-model="note.info.title" />
        </div>



        <div class="note-img" v-if="noteType === 'noteTodos'">
        <label for="title">Label:</label>
             <input id="title" type="text" placeholder="Label" v-model="note.info.label" />
             <div>
                <ul>
                    <li v-for="todo in todos">
                    <input type="text" placeholder="todo.txt"  v-model="todo.txt"/>
                    </li>
                    
                </ul>
             </div>
        </div>


        <div class="note-img" v-if="noteType === 'noteVideo'">
            <input type="text" placeholder="enter title" v-model="note.info.title" />
            <input type="text" placeholder="enter video url"  v-model="note.info.url"/>
        </div>

        


        <button @click="emitSave()">save</button>
    </section>
    `,
    data() {
        return {
            todos:this.note.info.todos,
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
            this.isSaved = true;
            this.$emit('saveNote', this.isSaved);
        }
    }
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