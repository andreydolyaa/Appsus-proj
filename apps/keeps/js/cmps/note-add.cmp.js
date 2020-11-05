
import { keepsService } from '../services/keepsService.js';


export default {
    props: ['notes'],
    template: `
    <section class="notes-add-main">
    
    <div class="notes-add">
        <div class="note-txt" v-if="noteType === 'noteTxt'">
            <input type="text" placeholder="Enter Text" v-model="txtNote.info.txt">
        </div>


        <div class="note-img" v-if="noteType === 'noteImg'">
            <input type="text" placeholder="Image URL" v-model="imgNote.info.url" />
            <input type="text" placeholder="Title" v-model="imgNote.info.title" />
        </div>
    

        <div class="note-todos" v-if="noteType === 'noteTodos'">
            <input type="text" placeholder="Label" v-model="todoNote.info.label" />
            <input type="text" placeholder="Add Todos" v-model="todo" />
            <button @click="addTodo(),isEditing=true" class="note-add-btn"><i class="fas fa-plus"></i></button>
            
        </div>


        <div class="note-video" v-if="noteType === 'noteVideo'">
            <input type="text" placeholder="Title" v-model="videoNote.info.title" />
            <input type="text" placeholder="Video URL"  v-model="videoNote.info.url"/>
        </div>


        <div class="btns">
            <button class="note-add-btn" @click="save()"><i class="fas fa-check"></i></button>
            <button class="note-add-btn" @click="noteType='noteTxt'"><i class="fas fa-font"></i></button>
            <button class="note-add-btn" @click="noteType='noteImg'"><i class="far fa-image"></i></button>
            <button class="note-add-btn" @click="noteType='noteTodos'"><i class="fas fa-list-ul"></i></button>
            <button class="note-add-btn" @click="noteType='noteVideo'"><i class="fas fa-video"></i></button>
        </div>
        </div>


        
            <div v-show="isEditing">
                <ul>
                     <h1>{{todoNote.info.label}}</h1>
                     <li v-for="todo in todoNote.info.todos" class="adding-list" >{{todo.txt}}</li>
                </ul>
            </div>
            

    </section>
    `,
    data() {
        return {
            isEditing:false,
            todo:'',
            noteType: 'noteTxt',
            txtNote: keepsService.createNewTxtNote(),
            imgNote: keepsService.createNewImgNote(),
            todoNote: keepsService.createNewTodosNote(),
            videoNote: keepsService.createNewVideoNote(),
        }
    },
    methods: {
        addTodo(){
            this.todoNote.info.todos.push({txt:this.todo,doneAt:false});
            this.todo=''
            console.log(this.todoNote.info.todos);
        },
        save() {
            this.isEditing = false;
            if (this.noteType === 'noteTxt') {
                keepsService.addNewNote(this.txtNote);
                this.txtNote = keepsService.createNewTxtNote();
            }
            else if (this.noteType === 'noteImg') {
                keepsService.addNewNote(this.imgNote);
                this.imgNote = keepsService.createNewImgNote();
            }
            else if (this.noteType === 'noteTodos') {
                keepsService.addNewNote(this.todoNote);
                this.todoNote = keepsService.createNewTodosNote();
            }
            else if (this.noteType === 'noteVideo') {
                keepsService.addNewNote(this.videoNote);
                this.videoNote = keepsService.createNewVideoNote();
            }
        },

    },

}


