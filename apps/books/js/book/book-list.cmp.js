import bookPreview from '../book/book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
    <section class="books-list">
    <ul>
        <li v-for="book in books" v-bind:key="book.id" >
            <book-preview v-bind:book="book" /> 
        </li>
    </ul>
    </section>
    `,
    methods: {
        emitSelected(book) {
            this.$emit('selectBook', book);
            console.log('dfgdfg',book);
        },
        
    },
    components:{
        bookPreview
    }
}



// <li v-for="book in books" v-bind:key="book.id" v-on:click="emitSelected(book)">