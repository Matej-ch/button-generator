<template>
    <div class="flex flex-wrap lg:w-1/2 w-full items-center justify-center">
        <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center flex-col items-center">
            <div class="border-r border-b border-l border-gray-400 border-t lg:border-gray-400 bg-white rounded p-4 leading-normal w-full max-w-md overflow-auto h-56"
                 style="place-items: center;display: grid;">

                <button :style="btnStyle" ref="outputBtn">Button</button>
            </div>

            <div class="flex flex-row py-4 w-full max-w-md justify-between">
                <a href="#"
                   @click.prevent="copyStyle"
                   ref="copyBtn"
                   class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Copy style
                </a>
                <a href="#"
                   @click.prevent="showStyle"
                   class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Show style
                </a>
            </div>

            <transition name="fade" mode="out-in">
                <pre v-show="showCode" class="flex flex-row py-4 w-full max-w-md justify-between text-xs whitespace-pre-wrap" ref="textToCopy">.btn {{btnStyle | convertToCss}}
                    <br>.btn:hover {filter: brightness(120%) saturate(120%);}
                    <br>.btn:active {filter: saturate(120%);}
                </pre>
            </transition>

        </div>
    </div>
</template>

<script>
export default {
name: "previewBtn",
    props: {btnStyle:Object},
    data: function () {
        return {
            showCode: false
        }
    },
    methods: {
        copyStyle() {

            const selection = window.getSelection();
            const range = document.createRange();
            let node = this.$refs.textToCopy;
            const copyBtn = this.$refs.copyBtn;

            range.selectNodeContents(node);
            selection.removeAllRanges();
            selection.addRange(range);

            document.execCommand('copy');
            selection.removeAllRanges();

            const original = copyBtn.innerText;
            copyBtn.innerText = 'Copied!';

            setTimeout(() => {
                copyBtn.textContent = original;
            }, 1200);
        },
        showStyle() {
            this.showCode = !this.showCode;
        }
    }
}
</script>

<style scoped>
button:hover {
    filter: brightness(120%) saturate(120%);
}

button:active {
    filter: saturate(120%);
}
</style>