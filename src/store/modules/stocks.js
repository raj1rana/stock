import stocks from '../../data/stocks'
const state ={
    stocks: []
};

const mutations = {
    setStocks: (state, stocks) => {
        state.stocks = stocks;
    },
    randomizeStocks: (state) => {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() -0.5));
        });
    }
};


const actions = {
    buyStock: (context, order) => {
        context.commit('buyStock', order)
    },
    initStocks: (context) => {
        context.commit('setStocks', stocks)
    },
    randomizeStock: context => {
        context.commit('randomizeStocks');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
}


export default {
    state:state,
    mutations:mutations,
    getters:getters,
    actions:actions
}
