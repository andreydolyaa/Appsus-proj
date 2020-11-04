export default {
    template: `
    <section class="note-txt">
        <input type="text" placeholder="enter img url" v-model="imgDetails.imgUrl" @input="reportVal()"/>
        <input type="text" placeholder="set title" v-model="imgDetails.title" @input="reportVal()"/>
    </section>
    `,
    data() {
        return {
            imgDetails: {
                imgUrl: '',
                title: ''
            }
        }
    },
    methods: {
        reportVal(){
            this.$emit('setVal',this.imgDetails);
        }
    }
}