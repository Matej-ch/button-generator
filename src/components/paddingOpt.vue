<template>
    <div class="pb-4 flex flex-wrap">
        <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-1 w-full mb-2">
            <p class="font-bold">Padding</p>
        </div>

        <div class="w-1/4 px-3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="paddingTop">Top</label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="paddingTop"
                type="number"
                placeholder="width"
                v-model="btnStyle.paddingTop">
            <Dropdown label="Unit" :value="units.paddingTop" @change="onChangeChild" unitType="paddingTop" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
        </div>

        <div class="w-1/4 px-3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="paddingRight">Right</label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="paddingRight"
                type="number"
                placeholder="width"
                v-model="btnStyle.paddingRight">
            <Dropdown label="Unit" :value="units.paddingRight" @change="onChangeChild" unitType="paddingRight" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
        </div>

        <div class="w-1/4 px-3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="paddingBottom">Bottom</label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="paddingBottom"
                type="number"
                placeholder="width"
                v-model="btnStyle.paddingBottom">
            <Dropdown label="Unit" :value="units.paddingBottom" @change="onChangeChild" unitType="paddingBottom" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
        </div>

        <div class="w-1/4 px-3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="paddingLeft">Left</label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="paddingLeft"
                type="number"
                placeholder="width"
                v-model="btnStyle.paddingLeft">
            <Dropdown label="Unit" :value="units.paddingLeft" unitType="paddingLeft" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
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
    methods: {
        onChangeChild(value) {
            let valueKey = Object.keys(value)[0];
            let unitsKeys = Object.keys(this.units);
            if(unitsKeys.find(element => element === valueKey)) {
                Object.assign(this.units, value);
            } else {
                Object.assign(this.btnStyle, value);
            }
        }
    }
}
</script>

<style scoped>

</style>