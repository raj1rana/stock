<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <small>(Price: {{stock.price}})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input class="form-control" type="number" v-model="quantity" :class="{danger: insuffFunds}">
                </div>
           
                <div class="pull-right">
                    <button class="btn btn-success" @click="buyStock" :disabled="insuffFunds || quantity <= 0 ">
                        {{insuffFunds? 'InsufficientFunds': 'buy'}}
                    </button>
                </div>
                 </div>
        </div>
    </div>
</template>
<style scoped>
    .danger{
        border: 1px solid red;
    }
</style>


<script>
export default {
    props:['stock'],
    data(){
        return {
            quantity: 0
        }
    },
     computed: {
            funds(){
                    return this.$store.getters.funds
                },
            insuffFunds(){
               return this.quantity * this.stock.price > this.funds

            }
        },
    methods:{
        buyStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: parseInt(this.stock.price),
                quantity: parseInt(this.quantity)
            };
            console.log(order);
            this.$store.dispatch('buyStock', order)
            this.quantity= 0;
        },
       
    }

}
</script>