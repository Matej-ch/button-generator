<template>
<span ref="slider"
      class="slider py-1 px-1"
      @mousedown="mouseDownEvent"
      :style="{width: `${width}px`,'background-size': `${bgWidth}% 100%`}"/>
</template>

<script>

import {clamp, toNumber} from "lodash";

export default {
name: "sliderInput",
    props: {
        value: [Number, String],
        min: Number,
        max: Number,
        width: Number,
    },
    data() {
        return {
            currentValue: toNumber(this.value) || 0,
        }
    },
    watch: {
        value(val) {
            this.currentValue = toNumber(val);
        }
    },
    computed: {
        bgWidth() {
            return clamp(
                (this.currentValue - this.min) * 100 / (this.max - this.min),
                0,
                100,
            )
        }
    },
    methods: {
        mouseDownEvent(evt) {
            this.updateState(evt.pageX)
            window.addEventListener('mousemove', this.handleMouseMove)
            window.addEventListener('mouseup', this.handleMouseUp)
        },
        handleMouseMove(evt) { this.updateState(evt.pageX) },
        handleMouseUp(evt) {
            this.updateState(evt.pageX)
            window.removeEventListener('mousemove', this.handleMouseMove)
            window.removeEventListener('mouseup', this.handleMouseUp)
        },
        updateState(pageX) {
            const rect = this.$refs.slider.getBoundingClientRect()
            const x = pageX - rect.left
            const width = rect.right - rect.left
            const value = this.min + clamp(x / width, 0, 1) * (this.max - this.min)
            this.$emit('updateState', value)
        },
    }
}
</script>

<style scoped lang="scss">
.slider {
    display: block;
    position: relative;
    cursor: ew-resize;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    background-color: rgba(237, 242, 247, 1);
    background-image: linear-gradient(90deg, #2FA1D6, #2FA1D6);
    background-size: 0 100%;
    background-repeat: no-repeat;
}
</style>