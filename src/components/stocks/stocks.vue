<template>
    <div>
        <appStock v-for="stock in stocks" :stock="stock"></appStock>
    </div>
</template>
<script>
import Stock from './stock'
export default {
    components:{
        appStock: Stock
    },
    computed:{
        stocks(){
           return this.$store.getters.stocks

        }
    }
}
</script>