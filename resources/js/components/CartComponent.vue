<template>
    <div class="container">
        <h2 class="mt-5">List Produk</h2>
        <table-lika
            :listData="list"
            :listColumn="kolomProduk"
            :tipe="'product'"
            @emit-click="addList"
        ></table-lika>
        <h2 class="mt-5">Keranjang Belanja</h2>
        <table-lika
            :listData="cartList"
            :listColumn="kolomKeranjang"
            @emit-click="deleteList"
        ></table-lika>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
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
            kolomProduk: ["Name", "Description", "Stock", "Price"],
            kolomKeranjang: ["Name", "Quantity", "Price"],
            cartList: [],
            input: "",
        };
    },
    mounted() {
        console.log("Component Mounted");
    },
    methods: {
        addList(item) {
            let itemIndex = this.cartList.findIndex(
                (i) => i.name === item.name
            );
            if (itemIndex === -1) {
                const newList = this.mapping(item);
                item.stock--;
                this.cartList.push({ ...newList, stock: 1 });
            } else {
                item.stock--;
                this.cartList[itemIndex].stock++;
            }
        },
        mapping(item) {
            let newItem = {};
            newItem.name = item.name;
            newItem.stock = item.stock;
            newItem.price = item.price;

            return newItem;
        },
        deleteList(item) {
            let itemIndex = this.cartList.findIndex(
                (i) => i.name === item.name
            );
            let listIndex = this.list.findIndex((i) => i.name === item.name);
            if (itemIndex !== -1) {
                this.list[listIndex].stock += item.stock;
                this.cartList.splice(itemIndex, 1);
            }
        },
    },
};
</script>

<style></style>
