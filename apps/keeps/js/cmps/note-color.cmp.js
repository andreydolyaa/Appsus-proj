

export default{
    props:['note'],
    template:`
    <section class="note-color-btns">
    <div class="note-color">
        <button @click="show = !show">
        <i class="fas fa-palette"></i>
        
        </button> 
        </div>

        <div class="color-picker" @click="changeNoteColor()" v-if="show">
            <button class="color-orange" @click="color = '#FAD7A0',show=false">red</button>
            <button class="color-green" @click="color = '#D4EFDF',show=false">red</button>
            <button class="color-purple" @click="color = '#e2b1ee',show=false">red</button>
            <button class="color-blue" @click="color = '#a7c7e0',show=false">red</button>
            <button class="color-red" @click="color = '#c991a9',show=false">red</button>
        </div>
    </section>
    `,
    data(){
        return{
            color:null,
            show:false
        }
    },
    methods:{
        changeNoteColor(){
            this.note.style.backgroundColor = this.color
        }
        
    },
    computed:{
    }
}

