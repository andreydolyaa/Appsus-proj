import longText from '../pages/long-text.cmp.js';
import reviewAdd from '../book/review-add.cmp.js';
import { bookService } from '../services/bookService.js';

export default {
    // props: ['book', 'toggle'],
    template:
        `
    <div class="book-details" v-if="book">
    <router-link to="/books"><button>Back to books list</button></router-link>
    <router-link v-bind:to="'/book/'+nextBookId">
         <button @click="prevBook(book.id)">Previous Book</button>
         
         <button @click="nextBook(book.id)">Next Book</button>
    </router-link>

        <h1>{{book.title}}</h1>
        <h4>{{book.subtitle}}</h4>
        <p v-for="author in book.authors">Author: {{author}}</p>
        <p>{{publishDate}}</p>
        <img v-bind:src="imgUrl">
        <long-text  v-bind:txt="book.description"/>
        <p>{{pageCount}}</p>
        <p v-bind:class="{expensive:!checkPrice,sale:checkPrice}">{{book.listPrice.amount}} {{book.listPrice.currencyCode}}</p>
        
        <review-add v-bind:book="book"/>
    </div>
    `,
    data() {
        return {
            book: null,
            bookLength: '',
            bookTime: '',
            isSale: null,
            nextBookId: null,
            route: this.$route.params.bookId,
        }
    },
    methods: {
        nextBook(id) {
            var nextBook = bookService.getNextBook(id);
            this.nextBookId = nextBook;
        },
        prevBook(id){
            var prevBook = bookService.getPrevBook(id);
            this.nextBookId = prevBook;
        }
    },
    computed: {
        imgUrl() {
            return `${this.book.thumbnail}`
        },
        pageCount() {
            var count = this.book.pageCount;
            if (count > 500) this.bookLength = `${count} Pages, Long reading.`;
            else if (count > 200) this.bookLength = `${count} Pages, Decent reading.`;
            else if (count < 100) this.bookLength = `${count} Pages, Light reading.`;
            return this.bookLength;
        },
        publishDate() {
            var currYear = new Date().getFullYear();
            if (currYear - this.book.publishedDate > 10) this.bookTime = `> 10 years ago - Veteran book!`;
            else if (currYear - this.book.publishedDate < 1) this.bookTime = `< 1 Year - New book!`;
            return this.bookTime;
        },
        checkPrice() {
            if (this.book.listPrice.amount < 20) this.isSale = true
            if (this.book.listPrice.amount > 150) this.isSale = false;
            return this.isSale;
        }

    },
    created() {
        const id = this.$route.params.bookId;
        bookService.getById(id)
            .then(book => this.book = book);
    },
    watch: {
        '$route.params.bookId'(id) {
            bookService.getById(id).then(book => this.book = book);
        }
    },
    components: {
        longText,
        reviewAdd
    }
}


