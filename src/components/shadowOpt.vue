<template>
    <div class="pb-4 flex flex-wrap">
        <div class="bg-orange-100 border-t border-b border-orange-500 text-orange-700 px-1 py-1 w-full mb-2">
            <p class="font-bold">Shadows</p>
        </div>

        <div class="w-full flex flex-wrap pb-6">
            <h4 class="flex w-full px-1">
                <span class="font-bold">Text shadow</span>
                <span class="ml-auto">
                    <input class="mr-2 leading-tight" type="checkbox" @click="enableTextShadow()">
                    <span class="text-sm">Enable</span>
                </span>
            </h4>

            <div class="w-1/4 px-1" v-show="this.textShadow">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="textShadowOffsetX">Offset x</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="textShadowOffsetX"
                    type="number"
                    placeholder="background color"
                    @click="updateStyle" @keyup="updateStyle"
                    v-model="textShadowStyle.offsetX">
            </div>

            <div class="w-1/4 px-1" v-show="this.textShadow">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="textShadowOffsetY">Offset y</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="textShadowOffsetY"
                    type="number"
                    placeholder="background color"
                    @click="updateStyle" @keyup="updateStyle"
                    v-model="textShadowStyle.offsetY">
            </div>

            <div class="w-1/4 px-1" v-show="this.textShadow">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="textShadowBlurRadius">Blur radius</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="textShadowBlurRadius"
                    type="number"
                    placeholder="background color"
                    @click="updateStyle" @keyup="updateStyle"
                    v-model="textShadowStyle.blurRadius">
            </div>

            <div class="w-1/4 px-1" v-show="this.textShadow">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="textShadowColor">Color</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="textShadowColor"
                    type="color"
                    placeholder="text shadow color"
                    @click="updateStyle" @keyup="updateStyle"
                    v-model="textShadowStyle.color">
            </div>

        </div>

        <div class="w-full flex flex-wrap">
            <h4 class="flex w-full px-1"><span class="font-bold">Box shadow</span>
                <span class="ml-auto">
                    <input class="mr-2 leading-tight" type="checkbox" @click="enableBoxShadow()">
                    <span class="text-sm">Enable</span>
                </span>
            </h4>

            <div class="w-1/4 px-1" v-show="this.boxShadow">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="boxShadowOffsetX">Offset x</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="boxShadowOffsetX"
                    type="number"
                    placeholder="background color"
                    @click="updateStyle" @keyup="updateStyle"
                    v-model="boxShadowStyle.offsetX">
            </div>

            <div class="w-1/4 px-1" v-show="this.boxShadow">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="boxShadowOffsetY">Offset y</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="boxShadowOffsetY"
                    type="number"
                    placeholder="background color"
                    @click="updateStyle" @keyup="updateStyle"
                    v-model="boxShadowStyle.offsetY">
            </div>

            <div class="w-1/4 px-1" v-show="this.boxShadow">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="boxShadowBlurRadius">Blur radius</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="boxShadowBlurRadius"
                    type="number"
                    placeholder="background color"
                    @click="updateStyle" @keyup="updateStyle"
                    v-model="boxShadowStyle.blurRadius">
            </div>

            <div class="w-1/4 px-1" v-show="this.boxShadow">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="boxShadowColor">Color</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="boxShadowColor"
                    type="color"
                    placeholder="box shadow color"
                    @click="updateStyle" @keyup="updateStyle"
                    v-model="boxShadowStyle.color">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "shadowOpt",
    props: {
        btnStyle: Object,
    },
    data: function (){
        return {
            textShadow: false,
            boxShadow: false,
            textShadowStyle: {
                offsetX: '1',
                offsetY: '1',
                blurRadius: '2',
                color: 'black'
            },
            boxShadowStyle: {
                offsetX: '1',
                offsetY: '1',
                blurRadius: '2',
                color: 'black'
            }
        }
    },
    methods: {
        enableTextShadow() {
            this.textShadow = !this.textShadow;

            if (this.textShadow) {
                this.btnStyle.textShadow = `${this.textShadowStyle.offsetX}px ${this.textShadowStyle.offsetY}px ${this.textShadowStyle.blurRadius}px ${this.textShadowStyle.color}`;
            }
        },

        enableBoxShadow() {
            this.boxShadow = !this.boxShadow;

            if (this.boxShadow) {
                this.btnStyle.boxShadow = `${this.boxShadowStyle.offsetX}px ${this.boxShadowStyle.offsetY}px ${this.boxShadowStyle.blurRadius}px ${this.boxShadowStyle.color}`;
            }
        },
        updateStyle() {
            if (this.textShadow) {
                this.btnStyle.textShadow = `${this.textShadowStyle.offsetX}px ${this.textShadowStyle.offsetY}px ${this.textShadowStyle.blurRadius}px ${this.textShadowStyle.color}`;
            }

            if (this.boxShadow) {
                this.btnStyle.boxShadow = `${this.boxShadowStyle.offsetX}px ${this.boxShadowStyle.offsetY}px ${this.boxShadowStyle.blurRadius}px ${this.boxShadowStyle.color}`;
            }
        }
    }
}
</script>

<style scoped>

</style>