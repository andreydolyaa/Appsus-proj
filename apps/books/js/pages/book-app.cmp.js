import { bookService } from '../services/bookService.js';
import bookList from '../book/book-list.cmp.js';
import bookDetails from '../book/book-details.cmp.js';
import bookFilter from '../book/book-filter.cmp.js';
import bookAdd from '../pages/book-add.cmp.js';
import appHeader from '../pages/app-header.cmp.js';

export default {
    template: `
    <section class="book-app container">
    
    <book-add/>
    <book-filter @doFilter="setFilter"/>
    <book-list  v-bind:books="booksToShow"  /> 
    <book-details  v-bind:book="selectedBook" />
    </section>
    `,
    data() {
        return {
            books: null,
            filterBy: null,
            selectedBook: '',
            toggleDetails: false
        }
    },
    methods: {
        // selectBook(book) {
        //     this.selectedBook = book;
        // },
        
        
        setFilter(filter) {
            this.filterBy = filter;
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            var txt = this.filterBy.name;
            return this.books.filter(book => book.listPrice.amount < this.filterBy.price
                && book.title.includes(txt));
        }
    },
    created() {
        bookService.getBooks()
            .then(books => this.books = books);
    },
    components: {
        bookList,
        bookDetails,
        bookFilter,
        bookAdd,
        appHeader
    }

}



// <appHeader/>