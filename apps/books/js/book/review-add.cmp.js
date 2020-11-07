import { bookService } from '../services/bookService.js';
import bookReview from '../book/book-review.cmp.js';
import {eventBus} from '../services/event-bus-service.js';
import showMsg from '../pages/show-msg.cmp.js';


export default {
    props:['book'],
    template: `
    <section class="book-review">
        <h1>add a review!</h1>
            <form @submit.prevent="addReview">
                <input type="text" placeholder="user name" v-model="review.name"/>

                    <label for="book">Rate stars</label>
                    <select v-model="review.rate">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                <textarea rows="4" cols="50" v-model="review.review"></textarea>

                <button @click="showMsg=true">add</button>
                <div v-if="showMsg"><show-msg/></div>
                
            </form>
            <div v-if="book">
                <h1>User reviews</h1>
                <ul>
                    <li v-for="review in book.reviews" class="user-review">
                        <book-review v-bind:review="review" />
                    </li>
                </ul>
            </div>
    </section>
    `,
    data() {
        return {
            review: { name: 'Book Reader', rate: null, review: '', time: new Date().toLocaleString() },
            showMsg:false,
        }
    },
    methods: {
        addReview() {
            bookService.addReview(this.$route.params.bookId, this.review);
            this.review = { name: 'Book Reader', rate: null, review: '' };
            eventBus.$emit('show-msg','Review Added');
        }
    },
    components: {
        bookReview,
        showMsg
    }
}