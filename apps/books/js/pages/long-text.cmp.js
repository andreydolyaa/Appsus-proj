
export default {
    props:['txt'],
    template:`
    <div>
        <h1 v-if="!isShowen">{{getShortTxt}}</h1>
        <h1 v-else>{{fullTxt}}</h1>
        <button v-if="!isShowen" v-on:click="isShowen = !isShowen">read more...</button>
        <button v-if="isShowen" v-on:click="isShowen = !isShowen">read less...</button>
    </div>
    `,
    data(){
        return{
            fullTxt:this.txt,
            halfTxt:'',
            isShowen:false
        }
    },
    computed:{
        getShortTxt(){
            if(this.txt.length > 100){
                this.halfTxt = this.fullTxt.substring(0,101);
                return this.halfTxt;
            }
        }
    },
}



