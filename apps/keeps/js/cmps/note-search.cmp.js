


export default{
    props:['notes'],
    template:
    `
    <section class="note-search">

        <div>
        <input type="search" placeholder="Search note..." v-model="filter" @input="emitFilter()"/>
        <i class="fas fa-search"></i>
        </div>


    </section>
    `,
    data(){
        return{
            filter:''
        }
    },
    methods:{
        emitFilter(){
            this.$emit('filter',this.filter);
        }
    }
}