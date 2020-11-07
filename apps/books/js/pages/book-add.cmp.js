import { bookService } from '../services/bookService.js';
import {eventBus} from '../services/event-bus-service.js';
import showMsg from '../pages/show-msg.cmp.js';

export default {
    template: `
    <section class="book-add">
    <showMsg/>
    <input type="text" v-on:input="isSearching = true" v-model="searchTxt" placeholder="Search for more books..."/>

    <button @click="startSearch()" >Search</button>

        <ul v-if="googleBooks" class="google-search">
            <li v-for="book in googleBooks.items">
                {{book.volumeInfo.title}}
                <button class="addbook" @click="addBook(book.id)"><i class="fas fa-plus"></i></button>
            </li>
        </ul>

    </section>
    `,
    data() {
        return {
            isSearching: false,
            searchTxt: '',
            googleBooks: null,
        }
    },
    methods: {
        startSearch() {
            bookService.getGoogleBooks(this.searchTxt)
                .then(books => this.googleBooks = books);
        },
        addBook(id) {
            bookService.addGoogleBook(id);
            eventBus.$emit('show-msg','BOOK ADDED')
        }
    },
    components:{
        showMsg
    }
}


// <li v-for="book in booksToShow">
// {{book.volumeInfo.title}}
// computed: {
//     booksToShow() {
//         if (!this.searchTxt) return;
//         return this.googleBooks.items.filter(book => book.volumeInfo.title.toLowerCase().includes(this.searchTxt));
//     }