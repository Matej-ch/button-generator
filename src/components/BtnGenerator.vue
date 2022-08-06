<template>
    <div class="flex flex-col h-screen justify-between overflow-auto">
        <HeaderComponent/>

        <div class="flex flex-wrap w-full lg:px-4 px-1 mb-auto">
            <div class="flex flex-col flex-wrap lg:w-1/2 sm:w-full">

                <PaddingOpt :btnStyle="btnStyle" :units="units"/>

                <MarginOpt :btnStyle="btnStyle" :units="units"/>

                <SizeOpt :btnStyle="btnStyle"
                         :units="units"
                         :enableWidth="enableWidth"
                         @enableSize="enableSize"/>

                <FontOpt :btnStyle="btnStyle" :units="units"/>

                <ColorOpt :btnStyle="btnStyle" @enableAdvancedColor="enableAdvancedColor"/>

                <BorderOpt :btnStyle="btnStyle"
                           :units="units"
                           @enableAdvancedBorder="enableAdvancedBorder"/>

                <ShadowOpt :btnStyle="btnStyle"/>

            </div>

            <PreviewBtn :btnStyle="style" @save="updateHistory"/>
        </div>

        <BtnsHistory :buttons="buttons" @clearHistory="clearHistory"/>

        <FooterComponent/>

    </div>
</template>

<script setup>
import BtnsHistory from "./BtnsHistory";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import PreviewBtn from "./PreviewBtn";
import PaddingOpt from "./PaddingOpt";
import MarginOpt from "./MarginOpt";
import SizeOpt from "./SizeOpt";
import FontOpt from "./FontOpt";
import ColorOpt from "./colorOpt";
import BorderOpt from "./BorderOpt";
import ShadowOpt from "./ShadowOpt";
import {ref, onMounted} from "vue";
import {computed} from "vue/dist/vue";

const btnStyle = ref({
    width: "100",
    height: "50",
    fontSize: "16",
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'Arial',
    textAlign: "center",
    paddingTop: '15', paddingRight: '15', paddingBottom: '15', paddingLeft: '15',
    marginTop: '0', marginRight: '0', marginBottom: '0', marginLeft: '0',
    color: "#000000", backgroundColor: '#ffffff',
    borderWidth: '2',
    borderStyle: 'solid',
    borderRadius: "4",
    borderColor: '#000000',
    borderTopWidth: '', borderRightWidth: '', borderBottomWidth: '', borderLeftWidth: '',
    borderTopStyle: '', borderRightStyle: '', borderBottomStyle: '', borderLeftStyle: '',
    borderTopColor: '', borderRightColor: '', borderBottomColor: '', borderLeftColor: '',
    borderTopColorAlpha: 1, borderRightColorAlpha: 1, borderBottomColorAlpha: 1, borderLeftColorAlpha: 1,
    borderRadiusTopLeftOne: '', borderRadiusTopLeftTwo: '',
    borderRadiusTopRightOne: '', borderRadiusTopRightTwo: '',
    borderRadiusBottomLeftOne: '', borderRadiusBottomLeftTwo: '',
    borderRadiusBottomRightOne: '', borderRadiusBottomRightTwo: '',
    borderTopLeftRadius: '', borderTopRightRadius: '',
    borderBottomRightRadius: '', borderBottomLeftRadius: '',
    textShadow: '', boxShadow: '',
    backgroundImage: '',
    colorAlpha: 1, backgroundColorAlpha: 1, borderColorAlpha: 1

})
const units = ref({
    width: 'px',
    height: 'px',
    fontSize: 'px',
    paddingTop: 'px',
    paddingRight: 'px',
    paddingBottom: 'px',
    paddingLeft: 'px',
    marginTop: 'px',
    marginRight: 'px',
    marginBottom: 'px',
    marginLeft: 'px',
    borderWidth: 'px',
    borderRadius: 'px',
    fontStyle: '40'

})

const advancedBorder = ref(false)
const advancedColor = ref(false)
const enableWidth = ref(false)
const buttons = ref([])

onMounted(() => {
    if (localStorage.getItem('buttons')) {
        buttons.value = JSON.parse(localStorage.getItem('buttons'));
    }
})

function enableSize(value) {
    enableWidth.value = value;
}

function enableAdvancedBorder(value) {
    advancedBorder.value = value;
}

function enableAdvancedColor(value) {
    advancedColor.value = value;
}

function updateHistory(style) {
    buttons.value.push(style);
}

function clearHistory() {
    if (localStorage.getItem('buttons')) {
        localStorage.removeItem('buttons');
        buttons.value = [];
    }
}

const style = computed(() => {
    let newStyle = {
        width: `${btnStyle.value.width}${units.value.width}`,
        height: `${btnStyle.value.height}${units.value.height}`,
        fontSize: `${btnStyle.value.fontSize}${units.value.fontSize}`,
        fontWeight: `${btnStyle.value.fontWeight}`,
        fontStretch: `${btnStyle.value.fontStretch}`,
        fontFamily: `${btnStyle.value.fontFamily}`,
        fontStyle: `${btnStyle.value.fontStyle}`,
        textAlign: `${btnStyle.value.textAlign}`,
        paddingTop: `${btnStyle.value.paddingTop}${units.value.paddingTop}`,
        paddingRight: `${btnStyle.value.paddingRight}${units.value.paddingRight}`,
        paddingBottom: `${btnStyle.value.paddingBottom}${units.value.paddingBottom}`,
        paddingLeft: `${btnStyle.value.paddingLeft}${units.value.paddingLeft}`,
        marginTop: `${btnStyle.value.marginTop}${units.value.marginTop}`,
        marginRight: `${btnStyle.value.marginRight}${units.value.marginRight}`,
        marginBottom: `${btnStyle.value.marginBottom}${units.value.marginBottom}`,
        marginLeft: `${btnStyle.value.marginLeft}${units.value.marginLeft}`,
        color: $hexToRgba(btnStyle.value.color, btnStyle.value.colorAlpha),
        textShadow: btnStyle.value.textShadow,
        boxShadow: btnStyle.value.boxShadow,
        backgroundImage: btnStyle.value.backgroundImage
    };


    if (!advancedColor.value) {
        newStyle.backgroundColor = $hexToRgba(btnStyle.value.backgroundColor, btnStyle.value.backgroundColorAlpha);
    }

    if (btnStyle.value.fontStyle === 'oblique') {
        newStyle.fontStyle = `${btnStyle.value.fontStyle} ${units.value.fontStyle}deg`;
    }

    if (!enableWidth.value) {
        delete newStyle.width;
        delete newStyle.height;
    }

    if (advancedBorder.value) {
        delete newStyle.borderRadius;

        newStyle.borderWidth = `${btnStyle.value.borderTopWidth}${units.value.borderWidth} ${btnStyle.value.borderRightWidth}${units.value.borderWidth} ${btnStyle.value.borderBottomWidth}${units.value.borderWidth} ${btnStyle.value.borderLeftWidth}${units.value.borderWidth}`;
        newStyle.borderStyle = `${btnStyle.value.borderTopStyle} ${btnStyle.value.borderRightStyle} ${btnStyle.value.borderBottomStyle} ${btnStyle.value.borderLeftStyle}`;

        const top = $hexToRgba(btnStyle.value.borderTopColor, btnStyle.value.borderTopColorAlpha);
        const right = $hexToRgba(btnStyle.value.borderRightColor, btnStyle.value.borderRightColorAlpha);
        const bottom = $hexToRgba(btnStyle.value.borderBottomColor, btnStyle.value.borderBottomColorAlpha);
        const left = $hexToRgba(btnStyle.value.borderLeftColor, btnStyle.value.borderLeftColorAlpha);
        newStyle.borderColor = `${top} ${right} ${bottom} ${left}`;
        newStyle.borderTopLeftRadius = `${btnStyle.value.borderRadiusTopLeftOne}${units.value.borderRadius} ${btnStyle.value.borderRadiusTopLeftTwo}${units.value.borderRadius}`;
        newStyle.borderTopRightRadius = `${btnStyle.value.borderRadiusTopRightOne}${units.value.borderRadius} ${btnStyle.value.borderRadiusTopRightTwo}${units.value.borderRadius}`;
        newStyle.borderBottomRightRadius = `${btnStyle.value.borderRadiusBottomRightOne}${units.value.borderRadius} ${btnStyle.value.borderRadiusBottomRightTwo}${units.value.borderRadius}`;
        newStyle.borderBottomLeftRadius = `${btnStyle.value.borderRadiusBottomLeftOne}${units.value.borderRadius} ${btnStyle.value.borderRadiusBottomLeftTwo}${units.value.borderRadius}`;
    } else {
        delete newStyle.borderTopLeftRadius;
        delete newStyle.borderTopRightRadius;
        delete newStyle.borderBottomRightRadius;
        delete newStyle.borderBottomLeftRadius;
        newStyle.borderWidth = `${btnStyle.value.borderWidth}${units.value.borderWidth}`;
        newStyle.borderStyle = btnStyle.value.borderStyle;
        newStyle.borderRadius = `${btnStyle.value.borderRadius}${units.value.borderRadius}`;
        newStyle.borderColor = $hexToRgba(btnStyle.value.borderColor, btnStyle.value.borderColorAlpha);
    }

    return newStyle;
})

</script>