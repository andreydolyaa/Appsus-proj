

export default{
    template:`
    <section class="note-txt">
        <input type="text" placeholder="enter text" v-model="txt" @input="reportVal">
    </section>
    `,
    data(){
        return{
            txt:''
        }
    },
    methods:{
        reportVal(){
            this.$emit('setVal',this.txt);

        }
    }
}