<template>
    <div class="pb-2 flex flex-wrap">
        <div class="flex bg-blue-100 border-t border-l border-r border-blue-400 text-blue-700 px-1 py-1 w-full cursor-pointer"
             :class="{'border-b' : closePadding }"
             @click.prevent="closePadding = !closePadding">
            <a>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M18 15l-6-6l-6 6h12" :transform="closePadding === false ? 'rotate(180 12 12)' : 'rotate(90 12 12)'" />
                </svg>
            </a>
            <p class="font-bold flex flex-wrap justify-between w-full">
                <span>Colors</span>
                <span>
                    <input class="mr-2 leading-tight" type="checkbox" @click.stop="enableAdvancedColor()" id="advancedColor">
                    <label class="text-sm" for="advancedColor">Advanced</label>
                </span>
            </p>
        </div>

        <transition name="fade" mode="out-in">
            <div class="flex flex-wrap w-full bg-gray-100 border-blue-400 border-b border-l border-r pb-2 rounded-b-sm pt-2 mb-2" v-show="!closePadding">

                <div class="flex-1 px-1 flex flex-col">
                    <div class="flex-1 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="backgroundColor" v-show="!enableAdvColor">Background</label>
                        <input
                            class="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none"
                            id="backgroundColor"
                            type="color"
                            placeholder="background color"
                            v-show="!enableAdvColor"
                            v-model="btnStyle.backgroundColor">
                    </div>

                    <div class="flex-1 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="backgroundColorAlpha" v-show="!enableAdvColor">Alpha</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="backgroundColorAlpha"
                            type="number"
                            step=0.1 max="1" min="0"
                            placeholder="alpha"
                            v-show="!enableAdvColor"
                            v-model="btnStyle.backgroundColorAlpha">
                    </div>
                </div>

                <div class="flex-1 px-1 flex flex-col">
                    <div class="flex-1 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="color">Color</label>
                        <input
                            class="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none"
                            id="color"
                            type="color"
                            placeholder="color"
                            v-model="btnStyle.color">
                    </div>

                    <div class="flex-1 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="colorAlpha">Alpha</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="colorAlpha"
                            type="number"
                            step=0.1 max="1" min="0"
                            placeholder="alpha"
                            v-model="btnStyle.colorAlpha">
                    </div>
                </div>

                <transition name="fade" mode="out-in">
                    <div class="flex flex-wrap w-full pt-4" v-show="enableAdvColor">
                        <div class="px-1 w-1/3">
                            <input class="mr-2 leading-tight" type="radio" id="linearGradient" value="linear-gradient" v-model="gradientType" :checked="switchOptions" @change="updateGradient">
                            <label for="linearGradient">Liner gradient</label>
                        </div>

                        <div class="px-1 w-1/3">
                            <input class="mr-2 leading-tight" type="radio" id="radialGradient" value="radial-gradient" v-model="gradientType" :checked="switchOptions" @change="updateGradient">
                            <label for="radialGradient">Radial Gradient</label>
                        </div>

                        <div class="px-1 w-1/3">
                            <select
                                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                v-model="angle" @change="updateStyle">
                                <option v-for="(option,key) in this.switchOptions" :key="key" :value="key">{{ option }}</option>
                            </select>
                        </div>
                    </div>
                </transition>

                <transition-group name="fade" mode="out-in" tag="div" class="flex flex-wrap w-full pt-4" v-show="enableAdvColor">
                    <div v-for="(color,index) in colors" class="px-1 flex flex-col max-w-sm" :key="`color-${index}`">
                        <input type="color" v-model="color.stop" @click="updateStyle" @keyup="updateStyle" @input="updateStyle">
                        <input type="number" v-model="color.alpha" @click="updateStyle" @keyup="updateStyle"
                               step="0.1" min="0" max="1"
                               class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               style="width: 64px">
                    </div>
                </transition-group>

                <div class="px-1 mr-auto">
                    <a href="#" class="rounded-full h-8 w-8 flex items-center border justify-center bg-orange-100 border-orange-500 font-bold mr-auto" title="add another color stop" @click="addColorStop()" v-show="enableAdvColor">➕</a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {hexToRgbaMixin} from "@/mixins/hexToRgbaMixin";

export default {
    name: "colorOpt",
    mixins: [hexToRgbaMixin],
    props: {
        btnStyle: Object,
        advancedColor: Boolean
    },
    data: function () {
        return {
            gradientType: 'linear-gradient',
            enableAdvColor: this.advancedColor,
            angle: '180',
            closePadding: false,
            radialOptions: {
                'circle at center': 'Center',
                'circle at top': 'Top',
                'circle at right top': 'Top-Right',
                'circle at right': 'Right',
                'circle at right bottom': 'Bottom-Right',
                'circle at bottom': 'Bottom',
                'circle at left bottom': 'Bottom-Left',
                'circle at left': 'Left',
                'circle at left top': 'Top-Left',
            },
            linearOptions: {
                '180': '↓ Top to Bottom',
                '225': '↙ Top-Right to Bottom-Left',
                '270': '→ Right to Left',
                '315': '↖ Bottom-Right to Top-Left',
                '0': '↑ Bottom to Top',
                '45': '↗ Bottom-Left to Top-Right',
                '90': '← Left to Right',
                '135': '↘ Top-Left to Bottom-Right',
            },
            colors:[{
                    'stop': '#ffffff',
                    'alpha': 1
                }, {
                    'stop': '#000000',
                    'alpha': 1
                }]
        }
    },
    computed: {
        switchOptions() {
            if(this.gradientType === 'linear-gradient') {
                return this.linearOptions
            } else {
                return this.radialOptions
            }
        }
    },
    methods: {
        enableAdvancedColor() {
            this.enableAdvColor = !this.enableAdvColor;

            this.fullGradient();

            this.$emit('enableAdvancedColor',this.enableAdvColor);
        },
        addColorStop() {
            let newStop = { stop: '#ffffff',alpha: 1};

            this.colors.push(newStop);

            this.updateStyle();
        },
        updateStyle() {
            this.fullGradient();
        },

        fullGradient () {
            if(this.enableAdvColor) {
                delete this.btnStyle.backgroundColor;

                let fullAngle = `${this.angle}deg`;
                if(this.gradientType === 'radial-gradient') {
                    fullAngle = `${this.angle}`;
                }

                let colorsString = '';
                this.colors.forEach(colorObj => {
                    colorsString += this.convertToRgbaString(colorObj.stop,colorObj.alpha) + ',';
                });

                colorsString = colorsString.slice(0, -1);

                this.btnStyle.backgroundImage = `${this.gradientType}(${fullAngle},${colorsString})`;
            } else {
                this.btnStyle.backgroundColor = '#ffffff';
                this.btnStyle.backgroundImage = '';

            }
        },
        updateGradient() {
            if(this.gradientType === 'linear-gradient') {
                this.angle = '180';
            } else {
                this.angle = 'circle at center';
            }

            this.updateStyle();
        }

    },
}
</script>

<style scoped>

</style>