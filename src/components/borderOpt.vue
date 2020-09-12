<template>
    <div class="pb-4 flex flex-wrap">
        <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-1 py-1 w-full mb-2">
            <p class="font-bold flex">Border
                <span class="ml-auto">
                    <input class="mr-2 leading-tight" type="checkbox" @click="enableAdvBorder()">
                    <span class="text-sm">Advanced</span>
                </span>
            </p>
        </div>

        <transition name="fade" mode="out-in">
            <div v-if="!enableAdvancedBorder" v-show="!enableAdvancedBorder" class="w-full flex flex-wrap">
                <div class="w-1/4 px-1">
                    <span class="flex justify-between">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="borderWidth">Width</label>
                        <toggle-icon :state="toggles.width" stateKey="width" @toggleState="toggleState" />
                    </span>

                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="borderWidth"
                        :type="toggles.width ? 'range' : 'number'"
                        placeholder="width"
                        v-model="btnStyle.borderWidth">
                </div>

                <div class="w-1/4 px-1">
                    <span class="flex justify-between">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadius">Radius</label>
                        <toggle-icon :state="toggles.radius" stateKey="radius" @toggleState="toggleState" />
                    </span>

                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="borderRadius"
                        :type="toggles.radius ? 'range' : 'number'"
                        placeholder="radius"
                        v-model="btnStyle.borderRadius">
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
                        <span class="flex justify-between">
                            <label class="text-gray-700 text-sm font-bold mb-2" for="borderTopWidth">Width</label>
                            <toggle-icon :state="toggles.widthTop" stateKey="widthTop" @toggleState="toggleState" />
                        </span>

                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="borderTopWidth"
                            :type="toggles.widthTop ? 'range' : 'number'"
                            placeholder="top width"
                            v-model="btnStyle.borderTopWidth">
                    </div>

                    <div class="w-1/4 px-1 flex">
                        <div class="w-1/2 w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusTopLeftOne">TL 1</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderRadiusTopLeftOne"
                                type="number"
                                v-model="btnStyle.borderRadiusTopLeftOne">
                        </div>

                        <div class="w-1/2 w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusTopLeftTwo">TL 2</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderRadiusTopLeftTwo"
                                type="number"
                                v-model="btnStyle.borderRadiusTopLeftTwo">
                        </div>
                    </div>

                    <div class="w-1/4 px-1">
                        <Dropdown label="Style" :obj="btnStyle" @change="onChangeChild" unitType="borderTopStyle" :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                    </div>

                    <div class="w-1/4 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="borderTopColor">Color HEX or name</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        <span class="flex justify-between">
                            <label class="text-gray-700 text-sm font-bold mb-2" for="borderRightWidth">Width</label>
                            <toggle-icon :state="toggles.widthRight" stateKey="widthRight" @toggleState="toggleState" />
                        </span>

                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="borderRightWidth"
                            :type="toggles.widthRight ? 'range' : 'number'"
                            placeholder="right width"
                            v-model="btnStyle.borderRightWidth">
                    </div>

                    <div class="w-1/4 px-1 flex">
                        <div class="w-1/2 w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusTopRightOne">TR 1</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderRadiusTopRightOne"
                                type="number"
                                v-model="btnStyle.borderRadiusTopRightOne">
                        </div>

                        <div class="w-1/2 w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusTopRightTwo">TR 2</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderRadiusTopRightTwo"
                                type="number"
                                v-model="btnStyle.borderRadiusTopRightTwo">
                        </div>
                    </div>

                    <div class="w-1/4 px-1">
                        <Dropdown label="Style" :obj="btnStyle" @change="onChangeChild" unitType="borderRightStyle" :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                    </div>

                    <div class="w-1/4 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRightColor">Color HEX or name</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="borderRightColor"
                            type="text"
                            placeholder="HEX or Name"
                            v-model="btnStyle.borderRightColor">
                    </div>

                </div>
                <div class="flex flex-wrap py-3">
                    <h4 class="bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-1 font-bold w-full">Bottom</h4>

                    <div class="w-1/4 px-1">
                        <span class="flex justify-between">
                            <label class="text-gray-700 text-sm font-bold mb-2" for="borderBottomWidth">Width</label>
                            <toggle-icon :state="toggles.widthBottom" stateKey="widthBottom" @toggleState="toggleState" />
                        </span>

                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="borderBottomWidth"
                            :type="toggles.widthBottom ? 'range' : 'number'"
                            placeholder="top width"
                            v-model="btnStyle.borderBottomWidth">
                    </div>

                    <div class="w-1/4 px-1 flex">
                        <div class="w-1/2 w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusBottomRightOne">BR 1</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderRadiusBottomRightOne"
                                type="number"
                                v-model="btnStyle.borderRadiusBottomRightOne">
                        </div>

                        <div class="w-1/2 w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusBottomRightTwo">BR 2</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderRadiusBottomRightTwo"
                                type="number"
                                v-model="btnStyle.borderRadiusBottomRightTwo">
                        </div>
                    </div>

                    <div class="w-1/4 px-1">
                        <Dropdown label="Style" :obj="btnStyle" @change="onChangeChild" unitType="borderBottomStyle" :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                    </div>

                    <div class="w-1/4 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="borderBottomColor">Color HEX or name</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="borderBottomColor"
                            type="text"
                            placeholder="HEX or name"
                            v-model="btnStyle.borderBottomColor">
                    </div>

                </div>
                <div class="flex flex-wrap py-3">
                    <h4 class="bg-teal-100 border-l-4 border-teal-500 text-teal-700 p-1 font-bold w-full">Left</h4>

                    <div class="w-1/4 px-1">

                        <span class="flex justify-between">
                            <label class="text-gray-700 text-sm font-bold mb-2" for="borderLeftWidth">Width</label>
                            <toggle-icon :state="toggles.widthLeft" stateKey="widthLeft" @toggleState="toggleState" />
                        </span>

                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="borderLeftWidth"
                            :type="toggles.widthLeft ? 'range' : 'number'"
                            placeholder="top width"
                            v-model="btnStyle.borderLeftWidth">
                    </div>

                    <div class="w-1/4 px-1 flex">
                        <div class="w-1/2 w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusBottomLeftOne">BL 1</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderRadiusBottomLeftOne"
                                type="number"
                                v-model="btnStyle.borderRadiusBottomLeftOne">
                        </div>

                        <div class="w-1/2 w-1/2">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusBottomLeftTwo">BL 2</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderRadiusBottomLeftTwo"
                                type="number"
                                v-model="btnStyle.borderRadiusBottomLeftTwo">
                        </div>
                    </div>

                    <div class="w-1/4 px-1">
                        <Dropdown label="Style" :obj="btnStyle" @change="onChangeChild" unitType="borderLeftStyle" :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                    </div>

                    <div class="w-1/4 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="borderLeftColor">Color HEX or name</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="borderLeftColor"
                            type="text"
                            placeholder="HEX or name"
                            v-model="btnStyle.borderLeftColor">
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Dropdown from "@/components/dropdown";
import ToggleIcon from "@/components/toggleIcon";

export default {
    name: "borderOpt",
    components: {Dropdown,ToggleIcon},
    props: {
        btnStyle: Object,
        units: Object,
        enableWidth: Boolean
    },
    data: function (){
        return {
            enableAdvancedBorder: this.enableAdvancedBorder,
            toggles: {
                width: false,
                radius: false,
                widthTop: false,
                widthRight: false,
                widthBottom: false,
                widthLeft: false,
            }
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
        toggleState(obj) {
            this.toggles = {... this.toggles,...obj};
        }
    }
}
</script>

<style scoped>

</style>