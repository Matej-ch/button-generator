<template>
    <div class="pb-4 flex flex-wrap">
        <div class="flex bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-1 py-1 w-full mb-2">
            <a href="#" @click.prevent="closePadding = !closePadding">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M18 15l-6-6l-6 6h12" :transform="closePadding === false ? 'rotate(180 12 12)' : 'rotate(90 12 12)'" />
                </svg>
            </a>
            <p class="font-bold">Font</p>
        </div>

        <transition name="fade" mode="out-in">
            <div class="flex flex-wrap" v-show="!closePadding">
                <div class="w-1/4 px-1">
                    <span class="flex justify-between">
                        <label class="text-gray-700 text-sm font-bold mb-2" for="fontSize">Size</label>
                        <toggle-icon :state="toggles.size" stateKey="size" @toggleState="toggleState" />
                    </span>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fontSize"
                        :type="toggles.size ? 'range' : 'number'"
                        placeholder="width"
                        v-model="btnStyle.fontSize">
                    <Dropdown label="Unit" :obj="units" unitType="fontSize" :options="['px','pt','pc','em','ex','rem','%']"/>
                </div>

                <div class="w-1/4 px-1">
                    <Dropdown label="Text align" :obj="btnStyle" unitType="textAlign" :options="['left','right','center','justify']"/>

                    <label class="block text-gray-700 text-sm font-bold mb-2" for="fontWeight">Weight</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fontWeight"
                        type="text"
                        placeholder="width"
                        v-model="btnStyle.fontWeight">
                </div>

                <div class="w-1/4 px-1">
                    <Dropdown label="Style" :obj="btnStyle" unitType="fontStyle" :options="['normal','italic','oblique']"/>

                    <label v-show="btnStyle.fontStyle === 'oblique'" class="block text-gray-700 text-sm font-bold mb-2" for="fontStyleDeg">Deg</label>
                    <input v-show="btnStyle.fontStyle === 'oblique'"
                           type="number"
                           id="fontStyleDeg"
                           class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           placeholder="Degree" v-model="units.fontStyle">

                </div>

                <div class="w-1/4 px-1">
                    <span class="flex justify-between">
                        <label class="text-gray-700 text-sm font-bold mb-2" for="fontStretch">Stretch</label>
                        <toggle-icon :state="toggles.stretch" stateKey="stretch" @toggleState="toggleState" />
                    </span>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fontStretch"
                        :type="toggles.stretch ? 'range' : 'number'"
                        placeholder="width"
                        v-model="btnStyle.fontStretch">
                    <Dropdown label="Unit" :obj="units" unitType="fontStretch" :options="['%']"/>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Dropdown from "@/components/dropdown";
import ToggleIcon from "@/components/toggleIcon";

export default {
    name: "fontOpt",
    components: {Dropdown,ToggleIcon},
    props: {
        btnStyle: Object,
        units: Object,
    },
    data: function (){
        return {
            toggles: {
                size: false,
                stretch: false,
            },
            closePadding: false
        }
    },
    methods: {
        toggleState(obj) {
            this.toggles = {... this.toggles,...obj};
        }
    },
}
</script>

<style scoped>

</style>