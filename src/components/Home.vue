<template>
<div>
    <h1>Trade of view your portfolio</h1>
    <h4>You may Save & load Your Data</h4>
    <h4>Click on 'End Day' to begin a new day </h4>
    <hr>
    <h3>Your Funds {{funds | currency}}</h3>
</div>
   
</template>

<script>

export default {
    computed: {
        funds(){
            return this.$store.getters.funds;
        }
    }
}
</script>
