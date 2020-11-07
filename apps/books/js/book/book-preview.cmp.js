

export default {
    props:['book'],

    template: `
    <div class="book-preview">
        <h4>{{book.title}}</h4>
        <img v-bind:src="imgUrl">
        <h4>{{book.listPrice.amount}}{{getCurrencyIcon}}</h4>
        <router-link v-bind:to="'/book/'+book.id">Details</router-link>
    </div>
    `,
    data(){
        return{
            currency:null,
        }
    },
    computed:{
        getCurrencyIcon(){
            var coin = this.book.listPrice.currencyCode;
            if(coin === 'USD') this.currency = '$'
            else if(coin === 'ILS') this.currency = '₪'
            else if(coin === 'EUR') this.currency = '€'
            return this.currency;
        },
        imgUrl(){
            return `${this.book.thumbnail}`
        },
    }

}
// <router-link v-bind:to="'/book/'+book.id"></router-link>
