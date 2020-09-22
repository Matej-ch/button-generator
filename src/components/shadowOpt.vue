<template>
    <div class="pb-2 flex flex-wrap">
        <div class="flex bg-orange-100 border-t border-b border-orange-500 text-orange-700 px-1 py-1 w-full mb-2">
            <a href="#" @click.prevent="closePadding = !closePadding">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M18 15l-6-6l-6 6h12" :transform="closePadding === false ? 'rotate(180 12 12)' : 'rotate(90 12 12)'" />
                </svg>
            </a>
            <p class="font-bold">
                Shadows
            </p>
        </div>

        <transition name="fade" mode="out-in">
            <div class="flex flex-wrap w-full" v-show="!closePadding">
                <div class="w-full flex flex-wrap pb-6">
                    <h4 class="flex w-full px-1 text-gray-800">
                        <span class="font-bold">Text shadow</span>
                        <span class="ml-auto">
                            <input class="mr-2 leading-tight" type="checkbox" @click="enableTextShadow()">
                            <span class="text-sm">Enable</span>
                        </span>
                    </h4>

                    <transition-group name="fade" tag="div" class="flex w-full flex-wrap">
                        <div v-for="(textShadowStyle,index) in textShadowStyles" :key="`text-shadow-${index}`" class="w-full flex flex-wrap" v-show="textShadow">
                            <div class="w-1/4 px-1">
                                <number-input label="Offset x"
                                              :min=-100 :max=100
                                              :step=1
                                              v-model="textShadowStyle.offsetX"
                                              @change="updateStyle"/>
                            </div>

                            <div class="w-1/4 px-1">
                                <number-input label="Offset y"
                                              :min=-100 :max=100
                                              :step=1
                                              v-model="textShadowStyle.offsetY"
                                              @change="updateStyle"/>
                            </div>

                            <div class="w-1/4 px-1">
                                <number-input label="Blur radius"
                                              :min=-100 :max=100
                                              :step=1
                                              v-model="textShadowStyle.blurRadius"
                                              @change="updateStyle"/>
                            </div>

                            <div class="w-1/4 px-1">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="textShadowColor">Color</label>
                                <input
                                    class="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="textShadowColor"
                                    type="color"
                                    placeholder="text shadow color"
                                    @click="updateStyle" @keyup="updateStyle" @input="updateStyle"
                                    v-model="textShadowStyle.color">
                            </div>
                        </div>
                    </transition-group>

                    <a class="rounded-full h-8 w-8 flex items-center justify-center bg-orange-100 border border-orange-500 font-bold ml-auto"
                       v-show="textShadow"
                       href="#"
                       @click.prevent="addTextShadow"
                       title="Add another text shadow">➕
                    </a>
                </div>

                <div class="w-full flex flex-wrap">
                    <h4 class="flex flex-wrap w-full px-1 text-gray-800"><span class="font-bold">Box shadow</span>
                        <span class="ml-auto">
                            <input class="mr-2 leading-tight" type="checkbox" @click="enableBoxShadow()">
                            <span class="text-sm">Enable</span>
                        </span>
                    </h4>

                    <transition-group name="fade" tag="div" class="flex flex-wrap w-full">
                        <div v-for="(boxShadowStyle,index) in boxShadowStyles" :key="`box-shadow-${index}`" class="w-full flex flex-wrap" v-show="boxShadow">
                            <div class="w-1/4 px-1">
                                <number-input label="Offset x"
                                              :min=-100 :max=100
                                              :step=1
                                              v-model="boxShadowStyle.offsetX"
                                              @change="updateStyle"/>
                            </div>

                            <div class="w-1/4 px-1">
                                <number-input label="Offset y"
                                              :min=-100 :max=100
                                              :step=1
                                              v-model="boxShadowStyle.offsetY"
                                              @change="updateStyle"/>
                            </div>

                            <div class="w-1/4 px-1">
                                <number-input label="Blur radius"
                                              :min=-100 :max=100
                                              :step=1
                                              v-model="boxShadowStyle.blurRadius"
                                              @change="updateStyle"/>
                            </div>

                            <div class="w-1/4 px-1">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="boxShadowColor">Color</label>
                                <input
                                    class="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="boxShadowColor"
                                    type="color"
                                    placeholder="box shadow color"
                                    @click="updateStyle" @keyup="updateStyle" @input="updateStyle"
                                    v-model="boxShadowStyle.color">
                            </div>
                        </div>
                    </transition-group>

                    <a class="rounded-full h-8 w-8 flex items-center border justify-center bg-orange-100 border-orange-500 font-bold ml-auto"
                       v-show="boxShadow"
                       href="#"
                       title="Add another box shadow"
                       @click.prevent="addBoxShadow">➕</a>

                </div>
            </div>
        </transition>


    </div>
</template>

<script>
import NumberInput from "@/components/numberInput";
export default {
    name: "shadowOpt",
    components: {NumberInput},
    props: {
        btnStyle: Object,
    },
    data: function (){
        return {
            textShadow: false,
            boxShadow: false,
            textShadowStyles: [{
                offsetX: '1',
                offsetY: '1',
                blurRadius: '2',
                color: 'black'
            }],
            boxShadowStyles: [{
                offsetX: '1',
                offsetY: '1',
                blurRadius: '2',
                color: 'black'
            }],

            closePadding: false,
        }
    },
    methods: {
        enableTextShadow() {
            this.textShadow = !this.textShadow;

            if (this.textShadow) {
                this.updateTextShadow();
            } else {
                this.btnStyle.textShadow = '';
            }
        },

        enableBoxShadow() {
            this.boxShadow = !this.boxShadow;

            if (this.boxShadow) {
                this.updateBoxShadow();
            } else {
                this.btnStyle.boxShadow = '';
            }
        },
        updateStyle() {
            if (this.textShadow) {
                this.updateTextShadow();
            }

            if (this.boxShadow) {
                this.updateBoxShadow();
            }
        },

        updateTextShadow() {
            let shadows = '';
            this.textShadowStyles.forEach(style => {
                shadows += `${style.offsetX}px ${style.offsetY}px ${style.blurRadius}px ${style.color},`;
            });
            this.btnStyle.textShadow = shadows.slice(0, -1);
        },
        updateBoxShadow() {
            let shadows = '';
            this.boxShadowStyles.forEach(style => {
                shadows += `${style.offsetX}px ${style.offsetY}px ${style.blurRadius}px ${style.color},`;
            });
            this.btnStyle.boxShadow = shadows.slice(0, -1);
        },

        addTextShadow() {
            this.textShadowStyles.push({offsetX: '1', offsetY: '1', blurRadius: '2', color: 'black'});
            this.updateTextShadow();
        },

        addBoxShadow() {
            this.boxShadowStyles.push({offsetX: '1', offsetY: '1', blurRadius: '2', color: 'black'});
            this.updateBoxShadow();
        }
    }
}
</script>

<style scoped>

</style>