<template>
    <div class="pb-4 flex flex-wrap">
        <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-1 py-1 w-full mb-2">
            <p class="font-bold">Padding</p>
        </div>

        <div class="w-1/4 px-1">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="paddingTop">Top</label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="paddingTop"
                type="number"
                placeholder="width"
                v-model="btnStyle.paddingTop"
                tabindex="1">
            <Dropdown label="Unit" :obj="units" unitType="paddingTop" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
        </div>

        <div class="w-1/4 px-1">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="paddingRight">Right</label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="paddingRight"
                type="number"
                placeholder="width"
                v-model="btnStyle.paddingRight"
                tabindex="2">
            <Dropdown label="Unit" :obj="units" unitType="paddingRight" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
        </div>

        <div class="w-1/4 px-1">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="paddingBottom">Bottom</label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="paddingBottom"
                type="number"
                placeholder="width"
                v-model="btnStyle.paddingBottom"
                tabindex="3">
            <Dropdown label="Unit" :obj="units" unitType="paddingBottom" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
        </div>

        <div class="w-1/4 px-1">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="paddingLeft">Left</label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="paddingLeft"
                type="number"
                placeholder="width"
                v-model="btnStyle.paddingLeft"
                tabindex="4">
            <Dropdown label="Unit" :obj="units" unitType="paddingLeft" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
        </div>

    </div>
</template>

<script>
import Dropdown from "@/components/dropdown";

export default {
    name: "paddingOpt",
    components: {Dropdown},
    props: {
        btnStyle: Object,
        units: Object,
    },
}
</script>

<style scoped>

</style>