<template>
<div class="container-custom px-4 py-4">
    <div class="controls-container">

        <padding-opt :btnStyle="btnStyle" :units="units"></padding-opt>

        <size-opt :btnStyle="btnStyle" :units="units" :enableWidth="enableWidth" @enableSize="enableSize"></size-opt>

        <div class="pb-4 flex flex-wrap">
            <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-1 w-full mb-2">
                <p class="font-bold">Font</p>
            </div>

            <div class="w-1/4 px-3">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="fontSize">Size</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fontSize"
                    type="number"
                    placeholder="width"
                    v-model="btnStyle.fontSize">
                <Dropdown label="Unit" :value="units.fontSize" @change="onChangeChild" unitType="fontSize" :options="['px','pt','pc','em','ex','rem','%']"></Dropdown>
            </div>

            <Dropdown label="Text align" :value="btnStyle.textAlign" @change="onChangeChild" unitType="textAlign" :options="['left','right','center','justify']"></Dropdown>

            <div class="w-1/4 px-3">
                <Dropdown label="Style" :value="btnStyle.fontStyle" @change="onChangeChild" unitType="fontStyle" :options="['normal','italic','oblique']"></Dropdown>
            </div>

            <div class="w-1/4 px-3">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="fontStretch">Stretch</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fontStretch"
                    type="number"
                    placeholder="width"
                    v-model="btnStyle.fontStretch">
                <Dropdown label="Unit" :value="units.fontStretch" @change="onChangeChild" unitType="fontStretch" :options="['%']"></Dropdown>
            </div>
        </div>

        <div class="pb-4 flex flex-wrap">
            <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-1 w-full mb-2">
                <p class="font-bold flex">
                    Colors
                    <span class="ml-auto">
                        <input class="mr-2 leading-tight" type="checkbox" @click="enableAdvancedColor = !enableAdvancedColor">
                        <span class="text-sm">Advanced</span>
                    </span>
                </p>
            </div>
            background, color, gradient
        </div>

        <div class="pb-4 flex flex-wrap">
            <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-1 w-full mb-2">
                <p class="font-bold flex">Border
                    <span class="ml-auto">
                        <input class="mr-2 leading-tight" type="checkbox" @click="enableAdvBorder()">
                        <span class="text-sm">Advanced</span>
                    </span>
                </p>
            </div>

            <transition name="fade" mode="out-in">
                <div v-if="!enableAdvancedBorder" v-show="!enableAdvancedBorder" class="w-full flex flex-wrap">
                    <div class="w-1/4 px-3">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="borderWidth">Width</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="borderWidth"
                            type="number"
                            placeholder="width"
                            v-model="btnStyle.borderWidth">
                    </div>

                    <div class="w-1/4 px-3">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadius">Radius</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="borderRadius"
                            type="number"
                            placeholder="radius"
                            v-model="btnStyle.borderRadius">
                    </div>

                    <div class="w-1/4 px-3">
                        <Dropdown label="Style" :value="btnStyle.borderStyle" @change="onChangeChild" unitType="borderStyle" :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                    </div>

                    <div class="w-1/4 px-3">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="borderColor">Color</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        <div class="w-1/4 px-3">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderTopWidth">Width</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderTopWidth"
                                type="number"
                                placeholder="top width"
                                v-model="btnStyle.borderTopWidth">
                        </div>

                        <div class="w-1/4 px-3 flex">
                            <div class="w-1/2 w-1/2">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusTopLeftOne">TL 1</label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="borderRadiusTopLeftOne"
                                    type="number"
                                    v-model="btnStyle.borderRadiusTopLeftOne">
                            </div>

                            <div class="w-1/2 w-1/2">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusTopLeftTwo">TL 2</label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="borderRadiusTopLeftTwo"
                                    type="number"
                                    v-model="btnStyle.borderRadiusTopLeftTwo">
                            </div>
                        </div>

                        <div class="w-1/4 px-3">
                            <Dropdown label="Style" :value="btnStyle.borderTopStyle" @change="onChangeChild" unitType="borderTopStyle" :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                        </div>

                        <div class="w-1/4 px-3">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderTopColor">Color HEX or name</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderTopColor"
                                type="text"
                                placeholder="HEX or Name"
                                v-model="btnStyle.borderTopColor">
                        </div>
                    </div>
                    <!-- END TOP BORDER -->
                    <div class="flex flex-wrap py-3">
                        <h4 class="bg-pink-100 border-l-4 border-pink-500 text-pink-700 p-1 font-bold w-full">Right</h4>

                        <div class="w-1/4 px-3">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRightWidth">Width</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderRightWidth"
                                type="number"
                                placeholder="right width"
                                v-model="btnStyle.borderRightWidth">
                        </div>

                        <div class="w-1/4 px-3 flex">
                            <div class="w-1/2 w-1/2">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusTopRightOne">TR 1</label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="borderRadiusTopRightOne"
                                    type="number"
                                    v-model="btnStyle.borderRadiusTopRightOne">
                            </div>

                            <div class="w-1/2 w-1/2">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusTopRightTwo">TR 2</label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="borderRadiusTopRightTwo"
                                    type="number"
                                    v-model="btnStyle.borderRadiusTopRightTwo">
                            </div>
                        </div>

                        <div class="w-1/4 px-3">
                            <Dropdown label="Style" :value="btnStyle.borderRightStyle" @change="onChangeChild" unitType="borderRightStyle" :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                        </div>

                        <div class="w-1/4 px-3">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRightColor">Color HEX or name</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderRightColor"
                                type="text"
                                placeholder="HEX or Name"
                                v-model="btnStyle.borderRightColor">
                        </div>

                    </div>
                    <div class="flex flex-wrap py-3">
                        <h4 class="bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-1 font-bold w-full">Bottom</h4>

                        <div class="w-1/4 px-3">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderBottomWidth">Width</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderBottomWidth"
                                type="number"
                                placeholder="top width"
                                v-model="btnStyle.borderBottomWidth">
                        </div>

                        <div class="w-1/4 px-3 flex">
                            <div class="w-1/2 w-1/2">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusBottomRightOne">BR 1</label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="borderRadiusBottomRightOne"
                                    type="number"
                                    v-model="btnStyle.borderRadiusBottomRightOne">
                            </div>

                            <div class="w-1/2 w-1/2">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusBottomRightTwo">BR 2</label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="borderRadiusBottomRightTwo"
                                    type="number"
                                    v-model="btnStyle.borderRadiusBottomRightTwo">
                            </div>
                        </div>

                        <div class="w-1/4 px-3">
                            <Dropdown label="Style" :value="btnStyle.borderBottomStyle" @change="onChangeChild" unitType="borderBottomStyle" :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                        </div>

                        <div class="w-1/4 px-3">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderBottomColor">Color HEX or name</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderBottomColor"
                                type="text"
                                placeholder="HEX or name"
                                v-model="btnStyle.borderBottomColor">
                        </div>

                    </div>
                    <div class="flex flex-wrap py-3">
                        <h4 class="bg-teal-100 border-l-4 border-teal-500 text-teal-700 p-1 font-bold w-full">Left</h4>

                        <div class="w-1/4 px-3">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderLeftWidth">Width</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderLeftWidth"
                                type="number"
                                placeholder="top width"
                                v-model="btnStyle.borderLeftWidth">
                        </div>

                        <div class="w-1/4 px-3 flex">
                            <div class="w-1/2 w-1/2">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusBottomLeftOne">BL 1</label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="borderRadiusBottomLeftOne"
                                    type="number"
                                    v-model="btnStyle.borderRadiusBottomLeftOne">
                            </div>

                            <div class="w-1/2 w-1/2">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="borderRadiusBottomLeftTwo">BL 2</label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="borderRadiusBottomLeftTwo"
                                    type="number"
                                    v-model="btnStyle.borderRadiusBottomLeftTwo">
                            </div>
                        </div>

                        <div class="w-1/4 px-3">
                            <Dropdown label="Style" :value="btnStyle.borderLeftStyle" @change="onChangeChild" unitType="borderLeftStyle" :options="['none','dotted','inset','dashed','solid','double','groove']"></Dropdown>
                        </div>

                        <div class="w-1/4 px-3">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="borderLeftColor">Color HEX or name</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="borderLeftColor"
                                type="text"
                                placeholder="HEX or name"
                                v-model="btnStyle.borderLeftColor">
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <div class="pb-4 flex flex-wrap">
            <div class="bg-orange-100 border-t border-b border-orange-500 text-orange-700 px-4 py-1 w-full mb-2">
                <p class="font-bold">Shadows</p>
            </div>

            <div>Box shadow</div>
            <div>text shadow</div>
        </div>

    </div>
    <div class="btn-container">
        <button :style="style">Button</button>
    </div>
</div>
</template>

<script>
import Dropdown from "@/components/dropdown";
import PaddingOpt from "@/components/paddingOpt";
import SizeOpt from "@/components/sizeOpt";

export default {
    name: "btnGenerator",
    components: {SizeOpt, PaddingOpt, Dropdown},
    data: function() {
        return {
            btnStyle: {
                width: "100",
                height: "50",
                fontSize: "16",
                fontStretch: '100',
                fontStyle: 'normal',
                textAlign: "center",
                paddingTop: '15',
                paddingRight: '15',
                paddingBottom: '15',
                paddingLeft: '15',
                color: "black",
                borderWidth: '2',
                borderStyle: 'solid',
                borderRadius: "4",
                borderColor: 'black',
                borderTopWidth: '',
                borderRightWidth: '',
                borderBottomWidth: '',
                borderLeftWidth: '',
                borderTopStyle: '',
                borderRightStyle: '',
                borderBottomStyle: '',
                borderLeftStyle: '',
                borderTopColor: '',
                borderRightColor: '',
                borderBottomColor: '',
                borderLeftColor: '',
                borderRadiusTopLeftOne: '',
                borderRadiusTopLeftTwo: '',
                borderRadiusTopRightOne: '',
                borderRadiusTopRightTwo: '',
                borderRadiusBottomLeftOne: '',
                borderRadiusBottomLeftTwo: '',
                borderRadiusBottomRightOne: '',
                borderRadiusBottomRightTwo: '',
                borderTopLeftRadius: '',
                borderTopRightRadius: '',
                borderBottomRightRadius: '',
                borderBottomLeftRadius: '',

            },
            units: {
                width: 'px',
                height: 'px',
                fontSize: 'px',
                paddingTop: 'px',
                paddingRight: 'px',
                paddingBottom: 'px',
                paddingLeft: 'px',
                borderWidth: 'px',
                borderRadius: 'px',
                fontStretch: '%'

            },
            enableAdvancedBorder: false,
            enableAdvancedColor: false,
            enableWidth: false
        };
    },
    computed: {
        style() {

            let width = `${this.btnStyle.width}${this.units.width}`;
            let height = `${this.btnStyle.height}${this.units.height}`;
            if(!this.enableWidth) {
                width = '';
                height = '';
            }

            let borderWidth = `${this.btnStyle.borderWidth}${this.units.borderWidth}`;
            let borderStyle =  this.btnStyle.borderStyle;
            let borderRadius = `${this.btnStyle.borderRadius}${this.units.borderRadius}`;
            let borderColor =  this.btnStyle.borderColor;
            let borderTopLeftRadius= '';
            let borderTopRightRadius= '';
            let borderBottomRightRadius= '';
            let borderBottomLeftRadius= '';
            if(this.enableAdvancedBorder) {

                borderWidth = `${this.btnStyle.borderTopWidth}${this.units.borderWidth}
                ${this.btnStyle.borderRightWidth}${this.units.borderWidth}
                ${this.btnStyle.borderBottomWidth}${this.units.borderWidth}
                ${this.btnStyle.borderLeftWidth}${this.units.borderWidth}`;

                borderStyle = `${this.btnStyle.borderTopStyle} ${this.btnStyle.borderRightStyle} ${this.btnStyle.borderBottomStyle} ${this.btnStyle.borderLeftStyle}`;

                borderColor = `${this.btnStyle.borderTopColor} ${this.btnStyle.borderRightColor} ${this.btnStyle.borderBottomColor} ${this.btnStyle.borderLeftColor}`;

                borderRadius = '';

                borderTopLeftRadius = `${this.btnStyle.borderRadiusTopLeftOne}${this.units.borderRadius} ${this.btnStyle.borderRadiusTopLeftTwo}${this.units.borderRadius}`;
                borderTopRightRadius = `${this.btnStyle.borderRadiusTopRightOne}${this.units.borderRadius} ${this.btnStyle.borderRadiusTopRightTwo}${this.units.borderRadius}`;
                borderBottomRightRadius = `${this.btnStyle.borderRadiusBottomRightOne}${this.units.borderRadius} ${this.btnStyle.borderRadiusBottomRightTwo}${this.units.borderRadius}`;
                borderBottomLeftRadius = `${this.btnStyle.borderRadiusBottomLeftOne}${this.units.borderRadius} ${this.btnStyle.borderRadiusBottomLeftTwo}${this.units.borderRadius}`;
            }

            return {
                width: width,
                height: height,
                fontSize: `${this.btnStyle.fontSize}${this.units.fontSize}`,
                fontStretch: `${this.btnStyle.fontStretch}${this.units.fontStretch}`,
                fontStyle: `${this.btnStyle.fontStyle}`,
                textAlign: `${this.btnStyle.textAlign}`,
                paddingTop: `${this.btnStyle.paddingTop}${this.units.paddingTop}`,
                paddingRight: `${this.btnStyle.paddingRight}${this.units.paddingRight}`,
                paddingBottom: `${this.btnStyle.paddingBottom}${this.units.paddingBottom}`,
                paddingLeft: `${this.btnStyle.paddingLeft}${this.units.paddingLeft}`,
                color: "black",
                borderWidth: borderWidth,
                borderStyle: borderStyle,
                borderRadius: borderRadius,
                borderColor: borderColor,
                borderTopLeftRadius: borderTopLeftRadius,
                borderTopRightRadius: borderTopRightRadius,
                borderBottomRightRadius: borderBottomRightRadius,
                borderBottomLeftRadius: borderBottomLeftRadius,
            }
        }
    },
    methods: {
        onChangeChild(value) {
            let valueKey = Object.keys(value)[0];
            let unitsKeys = Object.keys(this.units);
            if(unitsKeys.find(element => element === valueKey)) {
                Object.assign(this.units, value);
            } else {
                Object.assign(this.btnStyle, value);
            }
        },
        enableSize(value) {
            this.enableWidth = value;
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
        },
    }
}
</script>

<style scoped>
    .container-custom {
        display: flex;
        height: 100vh;
        flex-wrap: wrap;
        width: 100%;
        overflow: auto;
    }
    .controls-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex: 1;
        align-content: center;
    }
    .btn-container {
        display: grid;
        place-items: center;
        flex: 2;
    }
</style>