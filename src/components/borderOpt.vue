<template>
    <div class="pb-2 flex flex-wrap">
        <div class="flex bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-1 py-1 w-full mb-2 cursor-pointer" @click.prevent="closePadding = !closePadding">

            <a>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M18 15l-6-6l-6 6h12" :transform="closePadding === false ? 'rotate(180 12 12)' : 'rotate(90 12 12)'" />
                </svg>
            </a>

            <p class="font-bold flex flex-wrap justify-between w-full">Border
                <span>
                    <input class="mr-2 leading-tight" type="checkbox" @click="enableAdvBorder()">
                    <span class="text-sm">Advanced</span>
                </span>
            </p>
        </div>

        <transition name="fade" mode="out-in">
            <div class="flex flex-wrap w-full" v-show="!closePadding">
                <div v-if="!enableAdvancedBorder" v-show="!enableAdvancedBorder" class="w-full flex flex-wrap">
                    <div class="w-1/4 px-1">

                        <number-input label="Width"
                                      :min=0 :max=100
                                      :step=1
                                      v-model="btnStyle.borderWidth" />
                    </div>

                    <div class="w-1/4 px-1">
                        <number-input label="Radius"
                                      :min=0 :max=100
                                      :step=1
                                      v-model="btnStyle.borderRadius" />
                    </div>

                    <div class="w-1/4 px-1">
                        <Dropdown label="Style" :obj="btnStyle" @change="onChangeChild" unitType="borderStyle" :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                    </div>

                    <div class="w-1/4 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="borderColor">Color</label>
                        <input
                            class="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="borderColor"
                            type="color"
                            placeholder="color"
                            v-model="btnStyle.borderColor">
                    </div>

                </div>
                <div v-else class="w-full">
                    <!-- TOP BORDER -->
                    <div class="flex flex-wrap py-3">
                        <h4 class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-1 font-bold w-full">Top</h4>
                        <div class="w-1/4 px-1">
                            <number-input label="Width"
                                          :min=0 :max=100
                                          :step=1
                                          v-model="btnStyle.borderTopWidth" />
                        </div>

                        <div class="w-1/4 px-1 flex">
                            <div class="w-1/2">
                                <number-input label="TL 1"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusTopLeftOne" />
                            </div>

                            <div class="w-1/2">
                                <number-input label="TL 2"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusTopLeftTwo" />
                            </div>
                        </div>

                        <div class="w-1/4 px-1">
                            <Dropdown label="Style" :obj="btnStyle" @change="onChangeChild" unitType="borderTopStyle" :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                        </div>

                        <div class="w-1/4 px-1">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderTopColor">Color HEX or name</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderTopColor"
                                type="text"
                                placeholder="HEX or Name"
                                v-model="btnStyle.borderTopColor">
                        </div>
                    </div>
                    <!-- END TOP BORDER -->
                    <div class="flex flex-wrap py-3">
                        <h4 class="bg-pink-100 border-l-4 border-pink-500 text-pink-700 p-1 font-bold w-full">Right</h4>

                        <div class="w-1/4 px-1">
                            <number-input label="Width"
                                          :min=0 :max=100
                                          :step=1
                                          v-model="btnStyle.borderRightWidth" />
                        </div>

                        <div class="w-1/4 px-1 flex">
                            <div class="w-1/2">
                                <number-input label="TR 1"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusTopRightOne" />
                            </div>

                            <div class="w-1/2">
                                <number-input label="TR 2"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusTopRightTwo" />
                            </div>
                        </div>

                        <div class="w-1/4 px-1">
                            <Dropdown label="Style" :obj="btnStyle" @change="onChangeChild" unitType="borderRightStyle" :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                        </div>

                        <div class="w-1/4 px-1">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRightColor">Color HEX or name</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderRightColor"
                                type="text"
                                placeholder="HEX or Name"
                                v-model="btnStyle.borderRightColor">
                        </div>

                    </div>
                    <div class="flex flex-wrap py-3">
                        <h4 class="bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-1 font-bold w-full">Bottom</h4>

                        <div class="w-1/4 px-1">
                            <number-input label="Width"
                                          :min=0 :max=100
                                          :step=1
                                          v-model="btnStyle.borderBottomWidth" />
                        </div>

                        <div class="w-1/4 px-1 flex">
                            <div class="w-1/2">
                                <number-input label="BR 1"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusBottomRightOne" />
                            </div>

                            <div class="w-1/2">
                                <number-input label="BR 2"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusBottomRightTwo" />
                            </div>
                        </div>

                        <div class="w-1/4 px-1">
                            <Dropdown label="Style" :obj="btnStyle" @change="onChangeChild" unitType="borderBottomStyle" :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                        </div>

                        <div class="w-1/4 px-1">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderBottomColor">Color HEX or name</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderBottomColor"
                                type="text"
                                placeholder="HEX or name"
                                v-model="btnStyle.borderBottomColor">
                        </div>

                    </div>
                    <div class="flex flex-wrap py-3">
                        <h4 class="bg-teal-100 border-l-4 border-teal-500 text-teal-700 p-1 font-bold w-full">Left</h4>

                        <div class="w-1/4 px-1">
                            <number-input label="Width"
                                          :min=0 :max=100
                                          :step=1
                                          v-model="btnStyle.borderLeftWidth" />
                        </div>

                        <div class="w-1/4 px-1 flex">
                            <div class="w-1/2">
                                <number-input label="BL 1"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusBottomLeftOne" />
                            </div>

                            <div class="w-1/2">
                                <number-input label="BL 2"
                                              :min=0 :max=100
                                              :step=1
                                              v-model="btnStyle.borderRadiusBottomLeftTwo" />
                            </div>
                        </div>

                        <div class="w-1/4 px-1">
                            <Dropdown label="Style" :obj="btnStyle" @change="onChangeChild" unitType="borderLeftStyle" :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                        </div>

                        <div class="w-1/4 px-1">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderLeftColor">Color HEX or name</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderLeftColor"
                                type="text"
                                placeholder="HEX or name"
                                v-model="btnStyle.borderLeftColor">
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Dropdown from "@/components/dropdown";
import NumberInput from "@/components/numberInput";

export default {
    name: "borderOpt",
    components: {Dropdown,NumberInput},
    props: {
        btnStyle: Object,
        units: Object,
        enableWidth: Boolean
    },
    data: function (){
        return {
            enableAdvancedBorder: this.enableAdvancedBorder,
            closePadding: false,
        }
    },
    methods: {
        onChangeChild(value) {
            this.$emit('dropdownChange',value)
        },
        enableAdvBorder() {
            this.enableAdvancedBorder = !this.enableAdvancedBorder;
            this.btnStyle.borderTopWidth = this.btnStyle.borderWidth;
            this.btnStyle.borderRightWidth = this.btnStyle.borderWidth;
            this.btnStyle.borderBottomWidth = this.btnStyle.borderWidth;
            this.btnStyle.borderLeftWidth = this.btnStyle.borderWidth;
            this.btnStyle.borderTopStyle = this.btnStyle.borderStyle;
            this.btnStyle.borderRightStyle = this.btnStyle.borderStyle;
            this.btnStyle.borderBottomStyle = this.btnStyle.borderStyle;
            this.btnStyle.borderLeftStyle = this.btnStyle.borderStyle;
            this.btnStyle.borderTopColor = 'black';
            this.btnStyle.borderRightColor = 'black';
            this.btnStyle.borderBottomColor = 'black';
            this.btnStyle.borderLeftColor = 'black';
            this.btnStyle.borderRadiusTopLeftOne = `${this.btnStyle.borderRadius}`;
            this.btnStyle.borderRadiusTopLeftTwo = `${this.btnStyle.borderRadius}`;
            this.btnStyle.borderRadiusTopRightOne = `${this.btnStyle.borderRadius}`;
            this.btnStyle.borderRadiusTopRightTwo = `${this.btnStyle.borderRadius}`;
            this.btnStyle.borderRadiusBottomLeftOne = `${this.btnStyle.borderRadius}`;
            this.btnStyle.borderRadiusBottomLeftTwo = `${this.btnStyle.borderRadius}`;
            this.btnStyle.borderRadiusBottomRightOne = `${this.btnStyle.borderRadius}`;
            this.btnStyle.borderRadiusBottomRightTwo = `${this.btnStyle.borderRadius}`;

            this.$emit('enableAdvanced',this.enableAdvancedBorder);
        },
    }
}
</script>

<style scoped>

</style>