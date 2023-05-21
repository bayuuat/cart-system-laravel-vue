<template>
    <div class="container">
        <h2 class="mt-5">List Produk</h2>
        <lika-table
            :listData="list"
            :listColumn="kolomProduk"
            :tipe="'product'"
            @emit-click="addList"
        ></lika-table>
    </div>
</template>

<script>
import LikaTable from "./LikaTable.vue";
import { mapGetters } from "vuex";
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
            list: "getList",
        }),
    },
    methods: {
        addList(item) {
            this.$store.dispatch("addToCart", item);
        },
    },
};
</script>

<style></style>
