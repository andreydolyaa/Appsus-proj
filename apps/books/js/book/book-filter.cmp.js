
export default {
    template: `
    <section class="book-filter">
        <label for="filterPrice">Max Price: {{filterBy.price}}</label>
        <input type="range" id="filterPrice" min="0" max="500" value="0" v-model="filterBy.price" @input="emitFilter"/>
        <label for="filterName">By name:</label>
        <input type="text" v-model="filterBy.name" @input="emitFilter"/>
    </section>
    `,
    data() {
        return {
            filterBy: { price: null, name: '' }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', this.filterBy);
        },
    }
}



