<template>
<div v-show="buttons.length" class="w-full flex-wrap flex justify-start lg:px-4 px-1 mb-2">
    <h2 class="w-full px-1 py-1 flex">Previous buttons
        <a href="#" class="px-2" @click.prevent="clearHistory">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
        </a>
    </h2>
    <div v-for="(button,index) in buttons" :key="index" class="px-3 py-3 overflow-auto h-56 w-56">
        <div :style="button">
            button
        </div>
        <div class="py-4">
            <transition name="fade" mode="out-in">
                <pre class="flex flex-row py-4 w-full max-w-md justify-between text-xs whitespace-pre-wrap" ref="textToCopy">.btn {{button | convertToCss}}
                    <br>.btn:hover {filter: brightness(120%) saturate(120%);}
                    <br>.btn:active {filter: saturate(120%);}
                </pre>
            </transition>
        </div>
    </div>
</div>
</template>

<script setup>
const emit = defineEmits(['clearHistory'])

const props = defineProps({
    buttons: Array
})

function clearHistory()
{
    emit('clearHistory');
}

</script>

<style scoped>

</style>