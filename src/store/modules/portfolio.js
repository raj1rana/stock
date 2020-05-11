const state = {
    funds: 1000,
    stocks: []
}
const mutations = {
    buyStock: (state, {stockId, quantity, stockPrice}) => {
        const record = state.stocks.find((element) => element.id == stockId)
        if (record){
            record.quantity += quantity;
        }else{
            state.stocks.push({
                id: stockId,
                quantity: quantity,
                price: stockPrice
            })
        }
        state.funds += stockPrice * quantity;
        console.log(typeof(quantity))
    },
    sellStocks: (state, {stockId, quantity, stockPrice}) => {
        const record = state.stocks.find((element) => element.id == stockId)
        if(record.quantity > quantity){
            record.quantity -= quantity;
        }else{
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity;
    },
    setPortfolio: (state , portfolio) => {
        console.log(portfolio)
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio? portfolio.stockPortfolio: [];
    }
}

const actions = {
    sellStocks: (context, order) => {
        context.commit('sellStocks', order)
    }
}

const getters = {
     stockPortfolio (state, getters){
         return state.stocks.map(stock => {
             const record = getters.stocks.find(element => element.id == stock.id)
             return {
                 id: stock.id,
                 quantity: stock.quantity,
                 name: record.name,
                 price: record.price
             }
         });
     },
     funds (state){
         return state.funds;
     }

}
export default {
    state:state,
    getters:getters,
    mutations:mutations,
    actions:actions
}