<template>
    <div class="pb-2 flex flex-wrap">
        <div
            class="flex bg-orange-100 border-t border-l border-r border-orange-400 text-orange-700 px-1 py-1 w-full cursor-pointer"
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
                Shadows
            </p>
        </div>

        <transition name="fade" mode="out-in">
            <div
                class="flex flex-wrap w-full bg-gray-100 border-orange-400 border-b border-l border-r pb-2 rounded-b-sm pt-2 mb-2"
                v-show="!closePadding">
                <div class="w-full flex flex-wrap pb-6">
                    <h4 class="flex w-full px-1 text-gray-800">
                        <span class="font-bold">Text shadow</span>
                        <span class="ml-auto">
                            <input class="mr-2 leading-tight" type="checkbox" @click="enableTextShadow()">
                            <span class="text-sm">Enable</span>
                        </span>
                    </h4>

                    <transition-group name="fade" tag="div" class="flex w-full flex-wrap">
                        <div v-for="(textShadowStyle,index) in textShadowStyles" :key="`text-shadow-${index}`"
                             class="w-full flex flex-wrap" v-show="textShadow">
                            <div class="px-1 flex-1">
                                <number-input label="Offset x"
                                              :min=-100 :max=100
                                              :step=1
                                              v-model="textShadowStyle.offsetX"
                                              @change="updateStyle"/>
                            </div>

                            <div class="px-1 flex-1">
                                <number-input label="Offset y"
                                              :min=-100 :max=100
                                              :step=1
                                              v-model="textShadowStyle.offsetY"
                                              @change="updateStyle"/>
                            </div>

                            <div class="px-1 flex-1">
                                <number-input label="Blur radius"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="textShadowStyle.blurRadius"
                                              @change="updateStyle"/>
                            </div>

                            <div class="flex">
                                <div class="px-1 flex-1">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="textShadowColor">Color</label>
                                    <input
                                        class="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="textShadowColor"
                                        type="color"
                                        placeholder="text shadow color"
                                        @click="updateStyle" @keyup="updateStyle" @input="updateStyle"
                                        v-model="textShadowStyle.color">
                                </div>

                                <div class="px-1 flex-1">
                                    <label class="block text-gray-700 text-sm font-bold mb-2"
                                           for="textShadowColorAlpha">Alpha</label>
                                    <input
                                        class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="textShadowColorAlpha"
                                        type="number"
                                        @click="updateStyle" @keyup="updateStyle"
                                        step="0.1" min="0" max="1" v-model="textShadowStyle.alpha">
                                </div>

                            </div>
                        </div>
                    </transition-group>

                    <div class="px-1 pt-2 ml-auto">
                        <a class="rounded-full h-8 w-8 flex items-center justify-center bg-orange-100 border border-orange-500 font-bold ml-auto"
                           v-show="textShadow"
                           href="#"
                           @click.prevent="addTextShadow"
                           title="Add another text shadow">➕
                        </a>
                    </div>

                </div>

                <div class="w-full flex flex-wrap">
                    <h4 class="flex flex-wrap w-full px-1 text-gray-800"><span class="font-bold">Box shadow</span>
                        <span class="ml-auto">
                            <input class="mr-2 leading-tight" type="checkbox" @click="enableBoxShadow()">
                            <span class="text-sm">Enable</span>
                        </span>
                    </h4>

                    <transition-group name="fade" tag="div" class="flex flex-wrap w-full">
                        <div v-for="(boxShadowStyle,index) in boxShadowStyles" :key="`box-shadow-${index}`"
                             class="w-full flex justify-start flex-wrap" v-show="boxShadow">
                            <div class="px-1 flex-1">
                                <number-input label="Offset x"
                                              :min=-100 :max=100
                                              :step=1
                                              v-model="boxShadowStyle.offsetX"
                                              @change="updateStyle"/>
                            </div>

                            <div class="px-1 flex-1">
                                <number-input label="Offset y"
                                              :min=-100 :max=100
                                              :step=1
                                              v-model="boxShadowStyle.offsetY"
                                              @change="updateStyle"/>
                            </div>

                            <div class="px-1 flex-1">
                                <number-input label="Blur"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="boxShadowStyle.blurRadius"
                                              @change="updateStyle"/>
                            </div>

                            <div class="px-1 flex-1">
                                <number-input label="Spread"
                                              :min=-100 :max=100
                                              :step=1
                                              v-model="boxShadowStyle.spreadRadius"
                                              @change="updateStyle"/>
                            </div>

                            <div class="px-2 text-gray-700 text-sm font-bold mb-2 flex flex-col justify-between">
                                <label>Inset</label>
                                <input type="checkbox" v-model="boxShadowStyle.isInset" @click="updateInset(index)">
                            </div>

                            <div class="flex">
                                <div class="px-1 flex-1">
                                    <label class="block text-gray-700 text-sm font-bold mb-2"
                                           for="boxShadowColor">Color</label>
                                    <input
                                        class="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="boxShadowColor"
                                        type="color"
                                        placeholder="box shadow color"
                                        @click="updateStyle" @keyup="updateStyle" @input="updateStyle"
                                        v-model="boxShadowStyle.color">
                                </div>

                                <div class="px-1 flex-1">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="boxShadowColorAlpha">Alpha</label>
                                    <input
                                        class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="boxShadowColorAlpha"
                                        type="number"
                                        @click="updateStyle" @keyup="updateStyle"
                                        step="0.1" min="0" max="1" v-model="boxShadowStyle.alpha">
                                </div>
                            </div>
                        </div>
                    </transition-group>

                    <div class="px-1 pt-2 ml-auto">
                        <a class="rounded-full h-8 w-8 flex items-center border justify-center bg-orange-100 border-orange-500 font-bold ml-auto"
                           v-show="boxShadow"
                           href="#"
                           title="Add another box shadow"
                           @click.prevent="addBoxShadow">➕</a>
                    </div>

                </div>
            </div>
        </transition>


    </div>
</template>

<script setup>
import {ref, inject} from "vue";
import NumberInput from "./NumberInput.vue";
import {useBtnStore} from "../stores/buttonStore";

const hexToRgba = inject('hexToRgba')

const btnStyle = useBtnStore()

const textShadow = ref(false)
const boxShadow = ref(false)
const textShadowStyles = ref([{
    offsetX: 1,
    offsetY: 1,
    blurRadius: 2,
    color: '#000000',
    alpha: 1
}])
const boxShadowStyles = ref([{
    isInset: false,
    offsetX: 1,
    offsetY: 1,
    blurRadius: 2,
    spreadRadius: 0,
    color: '#000000',
    alpha: 1
}])

const closePadding = ref(false)

function enableTextShadow() {
    textShadow.value = !textShadow.value;

    if (textShadow.value) {
        updateTextShadow();
    } else {
        btnStyle.textShadow = '';
    }
}

function enableBoxShadow() {
    boxShadow.value = !boxShadow.value;

    if (boxShadow.value) {
        updateBoxShadow();
    } else {
        btnStyle.boxShadow = '';
    }
}

function updateStyle() {
    if (textShadow.value) {
        updateTextShadow();
    }

    if (boxShadow.value) {
        updateBoxShadow();
    }
}

function updateTextShadow() {
    let shadows = '';
    textShadowStyles.value.forEach(style => {
        let color = hexToRgba(style.color, style.alpha);
        shadows += `${style.offsetX}px ${style.offsetY}px ${style.blurRadius}px ${color}`;
    });
    btnStyle.textShadow = shadows.slice(0, -1);
}

function updateBoxShadow() {
    let shadows = '';
    boxShadowStyles.value.forEach(style => {
        let inset = '';
        if (style.isInset) {
            inset = 'inset';
        }
        let color = hexToRgba(style.color, style.alpha);
        shadows += `${inset} ${style.offsetX}px ${style.offsetY}px ${style.blurRadius}px ${style.spreadRadius}px ${color}`;
    });
    btnStyle.boxShadow = shadows.slice(0, -1);
}

function addTextShadow() {
    textShadowStyles.value.push({offsetX: '1', offsetY: '1', blurRadius: '2', color: '#000000', alpha: 1});
    updateTextShadow();
}

function addBoxShadow() {
    boxShadowStyles.value.push({
        isInset: false,
        offsetX: '1',
        offsetY: '1',
        blurRadius: '2',
        spreadRadius: '0',
        color: '#000000',
        alpha: 1
    });
    updateBoxShadow();
}

function updateInset(index) {
    boxShadowStyles.value = boxShadowStyles.value.map((style, ind) => (ind === index) ? {
        ...style,
        isInset: !style.isInset
    } : style);
    updateBoxShadow();
}

function updateShadow(name, number) {
    btnStyle[name] = number;
}


</script>

<style scoped>

</style>