

export default{
    props:['note'],
    template:`
    <section class="note-color">
        <button @click="changeColor()">
            <i class="fas fa-palette">
        </i></button>
    </section>
    `,
    data(){
        return{

        }
    },
    methods:{
        changeColor(){

        }
    }
}

// <i class="fas fa-palette">