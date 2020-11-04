export default{
    template:`
    <section class="note-txt">
        <input type="text" placeholder="enter img url" v-model="imgUrl">
       
    </section>
    `,
    data(){
        return{
            imgUrl:''
        }
    },
    methods:{
        addTextNote(){
            console.log(this.txt)
        }
    }
}