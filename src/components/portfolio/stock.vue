<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input class="form-control" type="number" v-model="quantity" :class="{danger: insuffQuantity}">
                </div>
           
                <div class="pull-right">
                    <button class="btn btn-success" @click="sellStock" :disabled="insuffQuantity || quantity <= 0 ">
                        {{insuffQuantity? 'Not enough stocks': 'sell'}}
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
import {mapActions} from 'vuex'
export default {
    props:['stock'],
    data(){
        return {
            quantity: 0
        }
    },
    computed: {
        insuffQuantity(){
            return this.quantity > this.stock.quantity;
        }
    },
    methods:{
        ...mapActions({
            placeSellOrder: 'sellStocks'
        }),
       sellStock(){
           const order = {
           stockId: this.stock.id,
           quantity: this.stock.quantity,
           stockPrice: this.stock.price
           };
           this.placeSellOrder(order);
           this.quantity = 0;
         
       }
    }

}
</script>