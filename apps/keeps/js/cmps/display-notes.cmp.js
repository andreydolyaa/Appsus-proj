

export default{
    
    template:`
    <section>
        <h1>display notes</h1>
        
        <div v-for="(note, idx) in notes">
                <component :is="note.type"
                            :info="note.info" 
                            @setVal="setAns($event, idx)" />

            </div>
{{notes}}
    </section>
    `,
    data(){
        return{
            notes:{
                
            }
        }
    },
    computed:{
        
    },
    components:{
        
    }
    
}