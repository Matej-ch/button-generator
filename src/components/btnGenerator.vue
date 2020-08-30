<template>
<div class="container">
    <div class="controls-container">
        <div> size (width,height)</div>
        <div>padding</div>
        <div>font size and unit , type (bold, italic)</div>
        <div>text align</div>
        <div>background</div>
        <div>color</div>
        <div>border (border (with every corner option),border size,border radius,border color)</div>
        <div>Box shadow</div>
        <div>text shadow</div>
    </div>
    <div class="btn-container">
        <button :style="btnStyle">Button</button>
    </div>
</div>
</template>

<script>
export default {
name: "btnGenerator",
    data: function() {
        return {
            btnStyle: {
                width: '100px',
                height: '50px',
                fontSize: "16px",
                textAlign: "center",
                padding: '5px',
                color: "black",
                border: '1px solid',
                borderRadius: "4px",
                borderColor: 'black'
            }
        };
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        height: 100vh;
    }
    .controls-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex: 1;
        justify-content: center;
        align-content: center;
    }
    .btn-container {
        display: grid;
        place-items: center;
        flex: 2;
    }
</style>