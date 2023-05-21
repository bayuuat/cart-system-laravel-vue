<template>
    <table class="table">
        <thead>
            <tr>
                <th
                    scope="col"
                    v-for="(item, index) in listColumn"
                    :key="index"
                >
                    {{ item }}
                </th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in listData" :key="index">
                <td scope="col" v-for="(field, index) in item" :key="index">
                    {{ field }}
                </td>
                <td>
                    <button
                        v-if="item.stock > 0"
                        type="button"
                        class="btn btn-primary"
                        @click="functionClick(item)"
                    >
                        {{ tipe === "cart" ? "Hapus" : "Tambah" }}
                    </button>
                </td>
            </tr>
            <tr v-if="tipe === 'cart' && !!listData.length">
                <th colspan="2">Jumlah</th>
                <td class="bg-secondary text-white">
                    {{ new Intl.NumberFormat().format(total) }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    emits: ["emit-click"],
    data() {
        return {
            total: 0,
        };
    },
    props: {
        tipe: {
            type: String,
            default: "cart",
        },
        listData: {
            type: Array,
            default: () => {
                return [];
            },
        },
        listColumn: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    methods: {
        functionClick(item) {
            this.$emit("emit-click", item);
        },
        sum() {
            this.total = this.listData.reduce(
                (a, b) => a + b.price * b.stock,
                0
            );
        },
    },
    mounted() {
        this.sum();
    },
    updated() {
        this.sum();
    },
};
</script>

<style></style>
