<template>
    <div class="pb-4 flex flex-wrap">
        <div class="flex bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-1 py-1 w-full mb-2">
            <a href="#" @click.prevent="closePadding = !closePadding">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M18 15l-6-6l-6 6h12" :transform="closePadding === false ? 'rotate(180 12 12)' : 'rotate(90 12 12)'" />
                </svg>
            </a>
            <p class="font-bold">
                Padding
            </p>
        </div>

        <transition name="fade" mode="out-in">
            <div class="flex flex-wrap" v-show="!closePadding">
                <div class="w-1/4 px-1">
                    <span class="flex justify-between">
                        <label class="text-gray-700 text-sm font-bold mb-2" for="paddingTop">Top</label>
                        <toggle-icon :state="toggles.top" stateKey="top" @toggleState="toggleState" />
                    </span>

                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="paddingTop"
                        :type="toggles.top ? 'range' : 'number'"
                        placeholder="width"
                        v-model="btnStyle.paddingTop"
                        tabindex="1">
                    <Dropdown label="Unit" :obj="units" unitType="paddingTop" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="w-1/4 px-1">
                    <span class="flex justify-between">
                        <label class="text-gray-700 text-sm font-bold mb-2" for="paddingRight">Right</label>
                        <toggle-icon :state="toggles.right" stateKey="right" @toggleState="toggleState"/>
                    </span>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="paddingRight"
                        :type="toggles.right ? 'range' : 'number'"
                        placeholder="width"
                        v-model="btnStyle.paddingRight"
                        tabindex="2">
                    <Dropdown label="Unit" :obj="units" unitType="paddingRight" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="w-1/4 px-1">
                    <span class="flex justify-between">
                        <label class="text-gray-700 text-sm font-bold mb-2" for="paddingBottom">Bottom</label>
                        <toggle-icon :state="toggles.bottom" stateKey="bottom" @toggleState="toggleState"/>
                    </span>

                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="paddingBottom"
                        :type="toggles.bottom ? 'range' : 'number'"
                        placeholder="width"
                        v-model="btnStyle.paddingBottom"
                        tabindex="3">
                    <Dropdown label="Unit" :obj="units" unitType="paddingBottom" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="w-1/4 px-1">
                    <span class="flex justify-between">
                        <label class="text-gray-700 text-sm font-bold mb-2" for="paddingLeft">Left</label>
                        <toggle-icon :state="toggles.left" stateKey="left" @toggleState="toggleState" />
                    </span>

                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="paddingLeft"
                        :type="toggles.left ? 'range' : 'number'"
                        placeholder="width"
                        v-model="btnStyle.paddingLeft"
                        tabindex="4">
                    <Dropdown label="Unit" :obj="units" unitType="paddingLeft" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
import Dropdown from "@/components/dropdown";
import ToggleIcon from "@/components/toggleIcon";

export default {
    name: "paddingOpt",
    components: {ToggleIcon, Dropdown},
    props: {
        btnStyle: Object,
        units: Object,
    },
    data: function () {
        return {
            toggles: {
                top: false,
                right: false,
                bottom: false,
                left: false,
            },
            closePadding: false
        }
    },
    methods: {
        toggleState(obj) {
            this.toggles = {... this.toggles,...obj};
        }
    }
}
</script>

<style scoped>

</style>