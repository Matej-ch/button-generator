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

            <transition-group name="fade">
                <div v-for="(textShadowStyle,index) in textShadowStyles" :key="`text-shadow-${index}`" class="w-full flex flex-wrap" v-show="textShadow">
                    <div class="w-1/4 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="textShadowOffsetX">Offset x</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="textShadowOffsetX"
                            type="number"
                            placeholder="background color"
                            @click="updateStyle" @keyup="updateStyle"
                            v-model="textShadowStyle.offsetX">
                    </div>

                    <div class="w-1/4 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="textShadowOffsetY">Offset y</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="textShadowOffsetY"
                            type="number"
                            placeholder="background color"
                            @click="updateStyle" @keyup="updateStyle"
                            v-model="textShadowStyle.offsetY">
                    </div>

                    <div class="w-1/4 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="textShadowBlurRadius">Blur radius</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="textShadowBlurRadius"
                            type="number"
                            placeholder="background color"
                            @click="updateStyle" @keyup="updateStyle"
                            v-model="textShadowStyle.blurRadius">
                    </div>

                    <div class="w-1/4 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="textShadowColor">Color</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="textShadowColor"
                            type="color"
                            placeholder="text shadow color"
                            @click="updateStyle" @keyup="updateStyle" @input="updateStyle"
                            v-model="textShadowStyle.color">
                    </div>
                </div>
            </transition-group>


            <a class="rounded-full h-8 w-8 flex items-center justify-center bg-orange-500 text-orange-800 font-bold ml-auto"
               v-show="textShadow"
               href="#"
               @click.prevent="addTextShadow"
               title="Add another text shadow">➕
            </a>
        </div>

        <div class="w-full flex flex-wrap">
            <h4 class="flex w-full px-1"><span class="font-bold">Box shadow</span>
                <span class="ml-auto">
                    <input class="mr-2 leading-tight" type="checkbox" @click="enableBoxShadow()">
                    <span class="text-sm">Enable</span>
                </span>
            </h4>

            <transition-group name="fade">
                <div v-for="(boxShadowStyle,index) in boxShadowStyles" :key="`box-shadow-${index}`" class="w-full flex flex-wrap" v-show="boxShadow">
                    <div class="w-1/4 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="boxShadowOffsetX">Offset x</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="boxShadowOffsetX"
                            type="number"
                            placeholder="background color"
                            @click="updateStyle" @keyup="updateStyle"
                            v-model="boxShadowStyle.offsetX">
                    </div>

                    <div class="w-1/4 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="boxShadowOffsetY">Offset y</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="boxShadowOffsetY"
                            type="number"
                            placeholder="background color"
                            @click="updateStyle" @keyup="updateStyle"
                            v-model="boxShadowStyle.offsetY">
                    </div>

                    <div class="w-1/4 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="boxShadowBlurRadius">Blur radius</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="boxShadowBlurRadius"
                            type="number"
                            placeholder="background color"
                            @click="updateStyle" @keyup="updateStyle"
                            v-model="boxShadowStyle.blurRadius">
                    </div>

                    <div class="w-1/4 px-1">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="boxShadowColor">Color</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="boxShadowColor"
                            type="color"
                            placeholder="box shadow color"
                            @click="updateStyle" @keyup="updateStyle" @input="updateStyle"
                            v-model="boxShadowStyle.color">
                    </div>
                </div>
            </transition-group>

            <a class="rounded-full h-8 w-8 flex items-center justify-center bg-orange-500 text-orange-800 font-bold ml-auto"
               v-show="boxShadow"
               href="#"
               title="Add another box shadow"
               @click.prevent="addBoxShadow">➕</a>

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
            }]
        }
    },
    methods: {
        enableTextShadow() {
            this.textShadow = !this.textShadow;

            if (this.textShadow) {
                this.updateTextShadow();
            }
        },

        enableBoxShadow() {
            this.boxShadow = !this.boxShadow;

            if (this.boxShadow) {
                this.updateBoxShadow();
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