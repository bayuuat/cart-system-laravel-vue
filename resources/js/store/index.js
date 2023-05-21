import { createStore } from "vuex";

function mapping(item) {
    let newItem = {};
    newItem.name = item.name;
    newItem.stock = item.stock;
    newItem.price = item.price;

    return newItem;
}

export default createStore({
    state: {
        list: [
            {
                name: "Wakdoyok Extra Care",
                desc: "Alat pemanjang rambut original",
                stock: 25,
                price: 18000,
            },
            {
                name: "Sapu Tangan Ajaib",
                desc: "Menghapus dualisme",
                stock: 18,
                price: 14000,
            },
            {
                name: "Sikat Bergerigi",
                desc: "Pemotong yang handal",
                stock: 30,
                price: 60000,
            },
            {
                name: "Pel",
                desc: "Alat penghapus jejak",
                stock: 10,
                price: 30000,
            },
        ],
        cartList: [],
    },
    getters: {
        getList(state) {
            return state.list;
        },
        getCartList(state) {
            return state.cartList;
        },
    },
    actions: {
        addToCart(context, payload) {
            context.commit("ADD_TO_CART", payload);
        },
        deleteFromCart(context, payload) {
            context.commit("DELET_FROM_CART", payload);
        },
    },
    mutations: {
        ADD_TO_CART(state, payload) {
            let itemIndex = state.cartList.findIndex(
                (i) => i.name === payload.name
            );
            if (itemIndex === -1) {
                const newList = mapping(payload);
                payload.stock--;
                state.cartList.push({ ...newList, stock: 1 });
            } else {
                payload.stock--;
                state.cartList[itemIndex].stock++;
            }
        },
        DELET_FROM_CART(state, payload) {
            let itemIndex = state.cartList.findIndex(
                (i) => i.name === payload.name
            );
            let listIndex = state.list.findIndex(
                (i) => i.name === payload.name
            );
            if (itemIndex !== -1) {
                state.list[listIndex].stock += payload.stock;
                state.cartList.splice(itemIndex, 1);
            }
        },
    },
});
