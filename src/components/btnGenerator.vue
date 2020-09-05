<template>
<div class="flex flex-col h-screen justify-between">
    <header-component/>

    <div class="px-4 flex flex-wrap w-full">
        <div class="controls-container">

            <padding-opt :btnStyle="btnStyle" :units="units" @dropdownChange="onChangeChild" />

            <size-opt :btnStyle="btnStyle"
                      :units="units"
                      :enableWidth="enableWidth"
                      @enableSize="enableSize"
                      @dropdownChange="onChangeChild" />

            <font-opt :btnStyle="btnStyle"
                      :units="units"
                      @dropdownChange="onChangeChild"/>

            <div class="pb-4 flex flex-wrap">
                <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-1 w-full mb-2">
                    <p class="font-bold flex">
                        Colors
                        <span class="ml-auto">
                            <input class="mr-2 leading-tight" type="checkbox" @click="enableAdvancedColor = !enableAdvancedColor">
                            <span class="text-sm">Advanced</span>
                        </span>
                    </p>
                </div>
                background, color, gradient
            </div>

            <border-opt :btnStyle="btnStyle"
                        :units="units"
                        @enableAdvanced="enableAdvanced"
                        @dropdownChange="onChangeChild" />

            <div class="pb-4 flex flex-wrap">
                <div class="bg-orange-100 border-t border-b border-orange-500 text-orange-700 px-4 py-1 w-full mb-2">
                    <p class="font-bold">Shadows</p>
                </div>

                <div>Box shadow</div>
                <div>text shadow</div>
            </div>
        </div>

        <preview-btn :btnStyle="style"></preview-btn>
    </div>

    <footer-component/>

</div>
</template>

<script>

import PaddingOpt from "@/components/paddingOpt";
import SizeOpt from "@/components/sizeOpt";
import BorderOpt from "@/components/borderOpt";
import PreviewBtn from "@/components/previewBtn";
import HeaderComponent from "@/components/headerComponent";
import FooterComponent from "@/components/footerComponent";
import FontOpt from "@/components/fontOpt";

export default {
    name: "btnGenerator",
    components: {FontOpt, FooterComponent, HeaderComponent, PreviewBtn, BorderOpt, SizeOpt, PaddingOpt},
    data: function() {
        return {
            btnStyle: {
                width: "100",
                height: "50",
                fontSize: "16",
                fontStretch: '100',
                fontStyle: 'normal',
                fontWeight: 'normal',
                textAlign: "center",
                paddingTop: '15',
                paddingRight: '15',
                paddingBottom: '15',
                paddingLeft: '15',
                color: "black",
                borderWidth: '2',
                borderStyle: 'solid',
                borderRadius: "4",
                borderColor: 'black',
                borderTopWidth: '',
                borderRightWidth: '',
                borderBottomWidth: '',
                borderLeftWidth: '',
                borderTopStyle: '',
                borderRightStyle: '',
                borderBottomStyle: '',
                borderLeftStyle: '',
                borderTopColor: '',
                borderRightColor: '',
                borderBottomColor: '',
                borderLeftColor: '',
                borderRadiusTopLeftOne: '',
                borderRadiusTopLeftTwo: '',
                borderRadiusTopRightOne: '',
                borderRadiusTopRightTwo: '',
                borderRadiusBottomLeftOne: '',
                borderRadiusBottomLeftTwo: '',
                borderRadiusBottomRightOne: '',
                borderRadiusBottomRightTwo: '',
                borderTopLeftRadius: '',
                borderTopRightRadius: '',
                borderBottomRightRadius: '',
                borderBottomLeftRadius: '',

            },
            units: {
                width: 'px',
                height: 'px',
                fontSize: 'px',
                paddingTop: 'px',
                paddingRight: 'px',
                paddingBottom: 'px',
                paddingLeft: 'px',
                borderWidth: 'px',
                borderRadius: 'px',
                fontStretch: '%',
                fontStyle: '40'

            },
            enableAdvancedBorder: false,
            enableAdvancedColor: false,
            enableWidth: false
        };
    },
    computed: {
        style() {
            let newStyle = {
                width: `${this.btnStyle.width}${this.units.width}`,
                height: `${this.btnStyle.height}${this.units.height}`,
                fontSize: `${this.btnStyle.fontSize}${this.units.fontSize}`,
                fontWeight: `${this.btnStyle.fontWeight}`,
                fontStretch: `${this.btnStyle.fontStretch}${this.units.fontStretch}`,
                fontStyle: `${this.btnStyle.fontStyle}`,
                textAlign: `${this.btnStyle.textAlign}`,
                paddingTop: `${this.btnStyle.paddingTop}${this.units.paddingTop}`,
                paddingRight: `${this.btnStyle.paddingRight}${this.units.paddingRight}`,
                paddingBottom: `${this.btnStyle.paddingBottom}${this.units.paddingBottom}`,
                paddingLeft: `${this.btnStyle.paddingLeft}${this.units.paddingLeft}`,
                color: "black",
            };

            if(this.btnStyle.fontStyle === 'oblique') {
                newStyle.fontStyle = `${this.btnStyle.fontStyle} ${this.units.fontStyle}deg`;
            }

            if(!this.enableWidth) {
                delete newStyle.width;
                delete newStyle.height;
            }

            if(this.enableAdvancedBorder) {
                delete newStyle.borderRadius;

                newStyle.borderWidth = `${this.btnStyle.borderTopWidth}${this.units.borderWidth}${this.btnStyle.borderRightWidth}${this.units.borderWidth}
                ${this.btnStyle.borderBottomWidth}${this.units.borderWidth}${this.btnStyle.borderLeftWidth}${this.units.borderWidth}`;
                newStyle.borderStyle = `${this.btnStyle.borderTopStyle} ${this.btnStyle.borderRightStyle} ${this.btnStyle.borderBottomStyle} ${this.btnStyle.borderLeftStyle}`;
                newStyle.borderColor = `${this.btnStyle.borderTopColor} ${this.btnStyle.borderRightColor} ${this.btnStyle.borderBottomColor} ${this.btnStyle.borderLeftColor}`;
                newStyle.borderTopLeftRadius = `${this.btnStyle.borderRadiusTopLeftOne}${this.units.borderRadius} ${this.btnStyle.borderRadiusTopLeftTwo}${this.units.borderRadius}`;
                newStyle.borderTopRightRadius = `${this.btnStyle.borderRadiusTopRightOne}${this.units.borderRadius} ${this.btnStyle.borderRadiusTopRightTwo}${this.units.borderRadius}`;
                newStyle.borderBottomRightRadius = `${this.btnStyle.borderRadiusBottomRightOne}${this.units.borderRadius} ${this.btnStyle.borderRadiusBottomRightTwo}${this.units.borderRadius}`;
                newStyle.borderBottomLeftRadius = `${this.btnStyle.borderRadiusBottomLeftOne}${this.units.borderRadius} ${this.btnStyle.borderRadiusBottomLeftTwo}${this.units.borderRadius}`;
            } else {
                delete newStyle.borderTopLeftRadius;
                delete newStyle.borderTopRightRadius;
                delete newStyle.borderBottomRightRadius;
                delete newStyle.borderBottomLeftRadius;
                newStyle.borderWidth = `${this.btnStyle.borderWidth}${this.units.borderWidth}`;
                newStyle.borderStyle =  this.btnStyle.borderStyle;
                newStyle.borderRadius = `${this.btnStyle.borderRadius}${this.units.borderRadius}`;
                newStyle.borderColor =  this.btnStyle.borderColor;
            }

            return newStyle;
        }
    },
    methods: {
        onChangeChild(value) {
            console.log(value);
            /*let valueKey = Object.keys(value)[0];
            let unitsKeys = Object.keys(this.units);

            if(unitsKeys.find(element => element === valueKey)) {
                Object.assign(this.units, value);
            } else {
                Object.assign(this.btnStyle, value);
            }*/
        },
        enableSize(value) {
            this.enableWidth = value;
        },
        enableAdvanced(value) {
            this.enableAdvancedBorder = value;
        }
    }
}
</script>

<style scoped>
    .controls-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex: 1;
        align-content: center;
    }
</style>