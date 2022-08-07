<template>
    <span ref="slider"
          class="slider py-1 px-1 bg-blue-100 border-blue-200 rounded-sm border"
          @mousedown="mouseDownEvent"
          :style="{width: `${width}px`,'background-size': `${bgWidth}% 100%`}"/>
</template>

<script setup>

import {clamp, toNumber} from "lodash";
import {computed, ref, watch} from "vue";

const props = defineProps({
    value: [Number, String],
    min: Number,
    max: Number,
    width: Number,
})

const emit = defineEmits(['updateState'])

const slider = ref(null)

const currentValue = ref(toNumber(props.value) || 0)

const bgWidth = computed(() => {
    return clamp(
        (currentValue.value - props.min) * 100 / (props.max - props.min),
        0,
        100,
    )
})

watch(() => props.value, (newVal, oldVal) => {
    currentValue.value = toNumber(newVal);
})

function mouseDownEvent(evt) {
    updateState(evt.pageX)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
}

function handleMouseMove(evt) {
    updateState(evt.pageX)
}

function handleMouseUp(evt) {
    updateState(evt.pageX)
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
}

function updateState(pageX) {
    const rect = slider.value.getBoundingClientRect()
    const x = pageX - rect.left
    const width = rect.right - rect.left
    const value = props.min + clamp(x / width, 0, 1) * (props.max - props.min)
    emit('updateState', value)
}

</script>

<style scoped lang="scss">
.slider {
    display: block;
    position: relative;
    cursor: ew-resize;
    background-image: linear-gradient(90deg, #2FA1D6, #2FA1D6);
    background-size: 0 100%;
    background-repeat: no-repeat;
}
</style>