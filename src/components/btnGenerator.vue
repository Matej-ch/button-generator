<template>
<div class="flex flex-col h-screen justify-between overflow-auto">
    <header-component/>

    <div class="flex flex-wrap w-full lg:px-4 px-1">
        <div class="flex flex-col flex-wrap lg:w-1/2 sm:w-full">

            <padding-opt :btnStyle="btnStyle" :units="units" />

            <margin-opt :btnStyle="btnStyle" :units="units" />

            <size-opt :btnStyle="btnStyle"
                      :units="units"
                      :enableWidth="enableWidth"
                      @enableSize="enableSize"/>

            <font-opt :btnStyle="btnStyle" :units="units"/>

            <color-opt  :btnStyle="btnStyle" @enableColor="enableAdvancedColor" />

            <border-opt :btnStyle="btnStyle"
                        :units="units"
                        @enableAdvanced="enableAdvancedBorder"
            />

            <shadow-opt :btnStyle="btnStyle"/>

        </div>

        <preview-btn :btnStyle="style"></preview-btn>
    </div>

    <history-btns/>

    <footer-component/>

</div>
</template>

<script>

import PaddingOpt from "@/components/paddingOpt";
import MarginOpt from "@/components/marginOpt";
import SizeOpt from "@/components/sizeOpt";
import BorderOpt from "@/components/borderOpt";
import PreviewBtn from "@/components/previewBtn";
import HeaderComponent from "@/components/headerComponent";
import FooterComponent from "@/components/footerComponent";
import FontOpt from "@/components/fontOpt";
import ColorOpt from "@/components/colorOpt";
import ShadowOpt from "@/components/shadowOpt";
import HistoryBtns from "@/components/btnsHistory";

export default {
    name: "btnGenerator",
    components: {
        HistoryBtns,
        ShadowOpt, ColorOpt, FontOpt, FooterComponent, HeaderComponent,
        PreviewBtn, BorderOpt, SizeOpt, PaddingOpt,MarginOpt},
    data: function() {
        return {
            btnStyle: {
                width: "100",
                height: "50",
                fontSize: "16",
                fontStretch: 'normal',
                fontStyle: 'normal',
                fontWeight: 'normal',
                textAlign: "center",
                paddingTop: '15',
                paddingRight: '15',
                paddingBottom: '15',
                paddingLeft: '15',
                marginTop: '0',
                marginRight: '0',
                marginBottom: '0',
                marginLeft: '0',
                color: "#000000",
                backgroundColor:'#ffffff',
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
                textShadow: '',
                boxShadow: '',
                backgroundImage: '',

            },
            units: {
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

            },
            advancedBorder: false,
            advancedColor: false,
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
                fontStretch: `${this.btnStyle.fontStretch}`,
                fontStyle: `${this.btnStyle.fontStyle}`,
                textAlign: `${this.btnStyle.textAlign}`,
                paddingTop: `${this.btnStyle.paddingTop}${this.units.paddingTop}`,
                paddingRight: `${this.btnStyle.paddingRight}${this.units.paddingRight}`,
                paddingBottom: `${this.btnStyle.paddingBottom}${this.units.paddingBottom}`,
                paddingLeft: `${this.btnStyle.paddingLeft}${this.units.paddingLeft}`,
                marginTop: `${this.btnStyle.marginTop}${this.units.marginTop}`,
                marginRight: `${this.btnStyle.marginRight}${this.units.marginRight}`,
                marginBottom: `${this.btnStyle.marginBottom}${this.units.marginBottom}`,
                marginLeft: `${this.btnStyle.marginLeft}${this.units.marginLeft}`,
                color: this.btnStyle.color,
                backgroundColor: this.btnStyle.backgroundColor,
                textShadow: this.btnStyle.textShadow,
                boxShadow: this.btnStyle.boxShadow,
                backgroundImage: this.btnStyle.backgroundImage
            };

            if(this.btnStyle.fontStyle === 'oblique') {
                newStyle.fontStyle = `${this.btnStyle.fontStyle} ${this.units.fontStyle}deg`;
            }

            if(!this.enableWidth) {
                delete newStyle.width;
                delete newStyle.height;
            }

            if(this.advancedBorder) {
                delete newStyle.borderRadius;

                newStyle.borderWidth = `${this.btnStyle.borderTopWidth}${this.units.borderWidth} ${this.btnStyle.borderRightWidth}${this.units.borderWidth}
                ${this.btnStyle.borderBottomWidth}${this.units.borderWidth} ${this.btnStyle.borderLeftWidth}${this.units.borderWidth}`;
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
        enableSize(value) {
            this.enableWidth = value;
        },
        enableAdvancedBorder(value) {
            this.advancedBorder = value;
        },
        enableAdvancedColor(value) {
            this.advancedColor = value;
        }
    }
}
</script>