<template>
    <div class="container">
        <h2 class="mt-5">Keranjang Belanja</h2>
        <lika-table
            :listData="cartList"
            :listColumn="kolomKeranjang"
            @emit-click="deleteList"
        ></lika-table>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import LikaTable from "./LikaTable.vue";
export default {
    components: { LikaTable },
    data: function () {
        return {
            kolomProduk: ["Name", "Description", "Stock", "Price"],
            kolomKeranjang: ["Name", "Quantity", "Price"],
        };
    },
    computed: {
        ...mapGetters({
            cartList: "getCartList",
        }),
    },
    methods: {
        deleteList(item) {
            this.$store.dispatch("deleteFromCart", item);
        },
    },
};
</script>

<style></style>
