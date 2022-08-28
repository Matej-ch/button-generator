<template>
    <div class="pb-2 flex flex-wrap">
        <div
            class="flex bg-blue-100 border-t border-l border-r border-blue-400 text-blue-700 px-1 py-1 w-full cursor-pointer"
            :class="{'border-b' : closePadding }"
            @click.prevent="closePadding = !closePadding">
            <a>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-down" width="24"
                     height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none"
                     stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M18 15l-6-6l-6 6h12"
                          :transform="closePadding === false ? 'rotate(180 12 12)' : 'rotate(90 12 12)'"/>
                </svg>
            </a>
            <p class="font-bold">Font</p>
        </div>

        <transition name="fade" mode="out-in">
            <div
                class="flex flex-wrap w-full bg-gray-100 border-blue-400 border-b border-l border-r pb-2 rounded-b-sm pt-2 mb-2"
                v-show="!closePadding">
                <div class="w-1/4 px-1">

                    <number-input label="Size"
                                  :min=1 :max=200
                                  :step="unitStore.fontSize === 'px' || unitStore.fontSize === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.fontSize" @change="updateFont" name="fontSize"/>

                    <div class="py-2"/>

                    <Dropdown label="Unit" :obj="unitStore.$state" unitType="fontSize"
                              :options="['px','pt','pc','em','ex','rem','%']"/>
                </div>

                <div class="w-1/4 px-1">
                    <Dropdown label="Text align" :obj="btnStyle.$state" unitType="textAlign"
                              :options="['left','right','center','justify']"/>

                    <div class="py-2"/>

                    <label class="block text-gray-700 text-sm font-bold mb-2" for="fontWeight">Weight</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fontWeight"
                        type="text"
                        placeholder="width"
                        v-model="btnStyle.fontWeight">
                </div>

                <div class="w-1/4 px-1">
                    <Dropdown label="Style" :obj="btnStyle.$state" unitType="fontStyle"
                              :options="['normal','italic','oblique']"/>

                    <div class="py-2"/>

                    <label v-show="btnStyle.fontStyle === 'oblique'" class="block text-gray-700 text-sm font-bold mb-2"
                           for="fontStyleDeg">Deg</label>
                    <input v-show="btnStyle.fontStyle === 'oblique'"
                           type="number"
                           id="fontStyleDeg"
                           class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           placeholder="Degree" v-model="unitStore.fontStyle">

                </div>

                <div class="w-1/4 px-1">
                    <Dropdown label="Stretch"
                              :obj="btnStyle.$state"
                              unitType="fontStretch"
                              :options="['ultra-condensed','extra-condensed','condensed','semi-condensed','normal','semi-expanded','expanded','extra-expanded','ultra-expanded']"/>

                    <div class="py-2"/>

                    <Dropdown label="Family"
                              :obj="btnStyle.$state"
                              unitType="fontFamily"
                              :options="['Arial','Verdana','serif','sans-serif','monospace','Open Sans']"/>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import {ref} from "vue";
import Dropdown from "./Dropdown.vue";
import NumberInput from "./NumberInput.vue";
import {useUnitStore} from "../stores/unitStore";
import {useBtnStore} from "../stores/buttonStore";

const closePadding = ref(false)
const unitStore = useUnitStore()
const btnStyle = useBtnStore()

function updateFont(name, number) {
    btnStyle[name] = number;
}

</script>

<style scoped>

</style>