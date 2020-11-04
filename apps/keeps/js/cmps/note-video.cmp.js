


export default {
    template:
        `
    <section class="note-video">
        <input type="text" placeholder="enter title" v-model="videoDetails.title" @input="reportVal()"/>
        <input type="text" placeholder="video url" v-model="videoDetails.url" @input="reportVal()"/>
    </section>
    `,
    data() {
        return {
            videoDetails: {
                title: '',
                url: ''
            }
        }
    },
    methods: {
        reportVal() {
            this.$emit('setVal', this.videoDetails);
        }
    }
}