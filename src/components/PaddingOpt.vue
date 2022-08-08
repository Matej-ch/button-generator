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
            <p class="font-bold">
                Padding
            </p>
        </div>

        <transition name="fade" mode="out-in">
            <div
                class="flex flex-wrap w-full bg-gray-100 border-blue-400 border-b border-l border-r pb-2 rounded-b-sm pt-2 mb-2"
                v-show="!closePadding">
                <div class="flex-1 px-1">

                    <number-input label="Top"
                                  :min=0 :max=100
                                  :step="unitStore.paddingTop === 'px' || unitStore.paddingTop === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.paddingTop"/>

                    <div class="py-2"/>

                    <Dropdown label="Unit" :obj="unitStore.$state" unitType="paddingTop"
                              :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="flex-1 px-1">

                    <number-input label="Right"
                                  :min=0 :max=100
                                  :step="unitStore.paddingRight === 'px' || unitStore.paddingRight === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.paddingRight"/>

                    <div class="py-2"/>

                    <Dropdown label="Unit" :obj="unitStore.$state" unitType="paddingRight"
                              :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="flex-1 px-1">

                    <number-input label="Bottom"
                                  :min=0 :max=100
                                  :step="unitStore.paddingBottom === 'px' || unitStore.paddingBottom === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.paddingBottom"/>

                    <div class="py-2"/>

                    <Dropdown label="Unit" :obj="unitStore.$state" unitType="paddingBottom"
                              :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="flex-1 px-1">

                    <number-input label="Left"
                                  :min=0 :max=100
                                  :step="unitStore.paddingLeft === 'px' || unitStore.paddingLeft === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.paddingLeft"/>

                    <div class="py-2"/>

                    <Dropdown label="Unit" :obj="unitStore.$state" unitType="paddingLeft"
                              :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>
            </div>
        </transition>

    </div>
</template>

<script setup>
import Dropdown from "./Dropdown.vue";
import NumberInput from "./NumberInput.vue";
import {ref} from "vue";
import {useUnitStore} from "../stores/unitStore";

const unitStore = useUnitStore()

const props = defineProps({
    btnStyle: Object,
})

const closePadding = ref(false)

</script>

<style scoped>

</style>