<template>
    <div class="pb-2 flex flex-wrap">
        <div
            class="flex bg-blue-100 border-t border-b border-l border-r border-blue-400 text-blue-700 px-1 py-1 w-full cursor-pointer"
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

            <p class="font-bold flex flex-wrap justify-between w-full">Border
                <span>
                    <input class="mr-2 leading-tight" type="checkbox" @click.stop="enableAdvBorder()"
                           id="advancedBorder">
                    <label class="text-sm" for="advancedBorder">Advanced</label>
                </span>
            </p>
        </div>

        <transition name="fade" mode="out-in">
            <div
                class="flex flex-wrap w-full bg-gray-100 border-blue-400 border-b border-l border-r pb-2 rounded-b-sm pt-2 mb-2"
                v-show="!closePadding">
                <div v-if="!enableAdvancedBorder" v-show="!enableAdvancedBorder" class="w-full flex flex-wrap">
                    <div class="flex-1 px-1">

                        <number-input label="Width"
                                      :min=0 :max=100
                                      :step=1
                                      v-model="btnStyle.borderWidth"/>
                    </div>

                    <div class="flex-1 px-1">
                        <number-input label="Radius"
                                      :min=0 :max=100
                                      :step=1
                                      v-model="btnStyle.borderRadius"/>
                    </div>

                    <div class="flex-1 px-1">
                        <Dropdown label="Style" :obj="btnStyle.$state" @change="onChangeChild" unitType="borderStyle"
                                  :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                    </div>

                    <div class="flex flex-col flex-1">
                        <div class="flex-1 px-1">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderColor">Color</label>
                            <input
                                class="shadow block border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderColor"
                                type="color"
                                placeholder="color"
                                v-model="btnStyle.borderColor">
                        </div>

                        <div class="flex-1 px-1">
                            <label class="block text-gray-700 text-sm font-bold mb-2"
                                   for="borderColorAlpha">Alpha</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderColorAlpha"
                                type="number" step="0.1" min="0" max="1"
                                placeholder="alpha"
                                v-model="btnStyle.borderColorAlpha">
                        </div>
                    </div>

                </div>
                <div v-else class="w-full">
                    <!-- TOP BORDER -->
                    <div class="flex flex-wrap py-3">
                        <h4 class="bg-orange-100 border-t-4 border-orange-500 text-orange-700 p-1 font-bold w-full">
                            Top</h4>
                        <div class="flex-1 px-1">
                            <number-input label="Width"
                                          :min=0 :max=100
                                          :step=1
                                          v-model="btnStyle.borderTopWidth"/>
                        </div>

                        <div class="flex-1 px-1 flex flex-col">
                            <div>
                                <number-input label="TL 1"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusTopLeftOne"/>
                            </div>

                            <div>
                                <number-input label="TL 2"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusTopLeftTwo"/>
                            </div>
                        </div>

                        <div class="flex-1 px-1">
                            <Dropdown label="Style" :obj="btnStyle.$state" @change="onChangeChild"
                                      unitType="borderTopStyle"
                                      :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                        </div>

                        <div class="flex flex-1 flex-col">
                            <div class="px-1">
                                <label class="block text-gray-700 text-sm font-bold mb-2"
                                       for="borderTopColor">Color</label>
                                <input
                                    id="borderTopColor"
                                    type="color"
                                    class="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none"
                                    v-model="btnStyle.borderTopColor">
                            </div>

                            <div class="px-1">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="borderTopColorAlpha">Alpha</label>
                                <input
                                    id="borderTopColorAlpha"
                                    type="number" step="0.1" min="0" max="1"
                                    v-model="btnStyle.borderTopColorAlpha">
                            </div>
                        </div>

                    </div>
                    <!-- END TOP BORDER -->
                    <div class="flex flex-wrap py-3">
                        <h4 class="bg-pink-100 border-t-4 border-pink-500 text-pink-700 p-1 font-bold w-full">Right</h4>

                        <div class="flex-1 px-1">
                            <number-input label="Width"
                                          :min=0 :max=100
                                          :step=1
                                          v-model="btnStyle.borderRightWidth"/>
                        </div>

                        <div class="flex-1 px-1 flex flex-col">
                            <div>
                                <number-input label="TR 1"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusTopRightOne"/>
                            </div>

                            <div>
                                <number-input label="TR 2"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusTopRightTwo"/>
                            </div>
                        </div>

                        <div class="flex-1 px-1">
                            <Dropdown label="Style" :obj="btnStyle.$state" @change="onChangeChild"
                                      unitType="borderRightStyle"
                                      :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                        </div>

                        <div class="flex flex-1 flex-col">
                            <div class="flex-1 px-1">
                                <label class="block text-gray-700 text-sm font-bold mb-2"
                                       for="borderRightColor">Color</label>
                                <input
                                    id="borderRightColor"
                                    type="color"
                                    class="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none"
                                    v-model="btnStyle.borderRightColor">
                            </div>

                            <div class="flex-1 px-1">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRightColorAlpha">Alpha</label>
                                <input
                                    id="borderRightColorAlpha"
                                    type="number" step="0.1" min="0" max="1"
                                    v-model="btnStyle.borderRightColorAlpha">
                            </div>
                        </div>

                    </div>
                    <div class="flex flex-wrap py-3">
                        <h4 class="bg-indigo-100 border-t-4 border-indigo-500 text-indigo-700 p-1 font-bold w-full">
                            Bottom</h4>

                        <div class="flex-1 px-1">
                            <number-input label="Width"
                                          :min=0 :max=100
                                          :step=1
                                          v-model="btnStyle.borderBottomWidth"/>
                        </div>

                        <div class="flex-1 px-1 flex flex-col">
                            <div>
                                <number-input label="BR 1"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusBottomRightOne"/>
                            </div>

                            <div>
                                <number-input label="BR 2"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusBottomRightTwo"/>
                            </div>
                        </div>

                        <div class="flex-1 px-1">
                            <Dropdown label="Style" :obj="btnStyle.$state" @change="onChangeChild"
                                      unitType="borderBottomStyle"
                                      :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                        </div>

                        <div class="flex flex-1 flex-col">
                            <div class="flex-1 px-1">
                                <label class="block text-gray-700 text-sm font-bold mb-2"
                                       for="borderBottomColor">Color</label>
                                <input
                                    id="borderBottomColor"
                                    type="color"
                                    class="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none"
                                    v-model="btnStyle.borderBottomColor">
                            </div>

                            <div class="flex-1 px-1">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="borderBottomColorAlpha">Alpha</label>
                                <input
                                    id="borderBottomColorAlpha"
                                    type="number" step="0.1" min="0" max="1"
                                    v-model="btnStyle.borderBottomColorAlpha">
                            </div>
                        </div>

                    </div>
                    <div class="flex flex-wrap py-3">
                        <h4 class="bg-teal-100 border-t-4 border-teal-500 text-teal-700 p-1 font-bold w-full">Left</h4>

                        <div class="flex-1 px-1">
                            <number-input label="Width"
                                          :min=0 :max=100
                                          :step=1
                                          v-model="btnStyle.borderLeftWidth"/>
                        </div>

                        <div class="flex-1 px-1 flex flex-col">
                            <div>
                                <number-input label="BL 1"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusBottomLeftOne"/>
                            </div>

                            <div>
                                <number-input label="BL 2"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusBottomLeftTwo"/>
                            </div>
                        </div>

                        <div class="flex-1 px-1">
                            <Dropdown label="Style" :obj="btnStyle" @change="onChangeChild" unitType="borderLeftStyle"
                                      :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                        </div>

                        <div class="flex flex-1 flex-col">
                            <div class="flex-1 px-1">
                                <label class="block text-gray-700 text-sm font-bold mb-2"
                                       for="borderLeftColor">Color</label>
                                <input
                                    id="borderLeftColor"
                                    type="color"
                                    class="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none"
                                    v-model="btnStyle.borderLeftColor">
                            </div>

                            <div class="flex-1 px-1">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="borderLeftColorAlpha">Alpha</label>
                                <input
                                    id="borderLeftColorAlpha"
                                    type="number" step="0.1" min="0" max="1"
                                    v-model="btnStyle.borderLeftColorAlpha">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import Dropdown from "./Dropdown.vue";
import NumberInput from "./NumberInput.vue";
import {ref} from "vue";
import {useBtnStore} from "../stores/buttonStore";

const emit = defineEmits(['enableAdvancedBorder', 'dropdownChange'])

const props = defineProps({
    enableWidth: Boolean
})

const enableAdvancedBorder = ref(false);
const closePadding = ref(false);
const btnStyle = useBtnStore()

function onChangeChild(value) {
    emit('dropdownChange', value)
}

function enableAdvBorder() {
    enableAdvancedBorder.value = !enableAdvancedBorder.value;
    btnStyle.borderTopWidth = btnStyle.borderWidth;
    btnStyle.borderRightWidth = btnStyle.borderWidth;
    btnStyle.borderBottomWidth = btnStyle.borderWidth;
    btnStyle.borderLeftWidth = btnStyle.borderWidth;
    btnStyle.borderTopStyle = btnStyle.borderStyle;
    btnStyle.borderRightStyle = btnStyle.borderStyle;
    btnStyle.borderBottomStyle = btnStyle.borderStyle;
    btnStyle.borderLeftStyle = btnStyle.borderStyle;
    btnStyle.borderTopColor = '#000000';
    btnStyle.borderRightColor = '#000000';
    btnStyle.borderBottomColor = '#000000';
    btnStyle.borderLeftColor = '#000000';
    btnStyle.borderRadiusTopLeftOne = `${btnStyle.borderRadius}`;
    btnStyle.borderRadiusTopLeftTwo = `${btnStyle.borderRadius}`;
    btnStyle.borderRadiusTopRightOne = `${btnStyle.borderRadius}`;
    btnStyle.borderRadiusTopRightTwo = `${btnStyle.borderRadius}`;
    btnStyle.borderRadiusBottomLeftOne = `${btnStyle.borderRadius}`;
    btnStyle.borderRadiusBottomLeftTwo = `${btnStyle.borderRadius}`;
    btnStyle.borderRadiusBottomRightOne = `${btnStyle.borderRadius}`;
    btnStyle.borderRadiusBottomRightTwo = `${btnStyle.borderRadius}`;

    emit('enableAdvancedBorder', enableAdvancedBorder.value);
}
</script>

<style scoped>

</style>