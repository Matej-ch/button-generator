<template>
    <div class="pb-2 flex flex-wrap">
        <div
            class="flex bg-blue-100 border-t border-l border-r border-blue-400 text-blue-700 px-1 py-1 w-full cursor-pointer"
            :class="{'border-b' : settings.closeMargin }"
            @click.prevent="settings.closeMargin = !settings.closeMargin">
            <a>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-down" width="24"
                     height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none"
                     stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M18 15l-6-6l-6 6h12"
                          :transform="settings.closeMargin === false ? 'rotate(180 12 12)' : 'rotate(90 12 12)'"/>
                </svg>
            </a>
            <p class="font-bold">
                Margin
            </p>
        </div>

        <transition name="fade" mode="out-in">
            <div
                class="flex flex-wrap w-full bg-gray-100 border-blue-400 border-b border-l border-r pb-2 rounded-b-sm pt-2 mb-2"
                v-show="!settings.closeMargin">
                <div class="flex-1 px-1">

                    <number-input label="Top"
                                  :min=0 :max=100
                                  :step="unitStore.marginTop === 'px' || unitStore.marginTop === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.marginTop" @change="updateMargin" name="marginTop"/>

                    <div class="py-2"/>

                    <Dropdown label="Unit" :obj="unitStore.$state" unitType="marginTop"
                              :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="flex-1 px-1">

                    <number-input label="Right"
                                  :min=0 :max=100
                                  :step="unitStore.marginRight === 'px' || unitStore.marginRight === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.marginRight" @change="updateMargin" name="marginRight"/>

                    <div class="py-2"/>

                    <Dropdown label="Unit" :obj="unitStore.$state" unitType="marginRight"
                              :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="flex-1 px-1">

                    <number-input label="Bottom"
                                  :min=0 :max=100
                                  :step="unitStore.marginBottom === 'px' || unitStore.marginBottom === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.marginBottom" @change="updateMargin" name="marginBottom"/>

                    <div class="py-2"/>

                    <Dropdown label="Unit" :obj="unitStore.$state" unitType="marginBottom"
                              :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="flex-1 px-1">

                    <number-input label="Left"
                                  :min=0 :max=100
                                  :step="unitStore.marginLeft === 'px' || unitStore.marginLeft === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.marginLeft" @change="updateMargin" name="marginLeft"/>

                    <div class="py-2"/>

                    <Dropdown label="Unit" :obj="unitStore.$state" unitType="marginLeft"
                              :options="['px','pt','pc','em','ex','rem']"/>
                </div>
            </div>
        </transition>

    </div>
</template>

<script setup>

import Dropdown from "./Dropdown.vue";
import NumberInput from "./NumberInput.vue";
import {useUnitStore} from "../stores/unitStore";
import {useBtnStore} from "../stores/buttonStore";
import {useSettingStore} from "../stores/settingsStore";

const unitStore = useUnitStore()
const btnStyle = useBtnStore()
const settings = useSettingStore()

function updateMargin(name, number) {
    btnStyle[name] = number;
}

</script>