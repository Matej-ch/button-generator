<template>
    <span @click="toggleState" :title="this.realState === true ? 'Switch to input' : 'Switch to range'">
        <svg v-show="!realState" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-toggle-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F44336" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="8" cy="12" r="2" />
            <rect x="2" y="6" width="20" height="12" rx="6" />
        </svg>

        <svg v-show="realState" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-toggle-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8BC34A" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="16" cy="12" r="2" />
            <rect x="2" y="6" width="20" height="12" rx="6" />
        </svg>
    </span>
</template>

<script>
export default {
name: "toggleIcon",
    props: {
        state: {type: Boolean, default: false},
        stateKey: String,
    },
    data: function () {
        return {
            realState: this.state
        }
    },
    methods: {
        toggleState() {
            this.realState = !this.realState;
            this.$emit('toggleState',{[this.stateKey]: this.realState});
        }
    }
}
</script>

<style scoped>

</style>