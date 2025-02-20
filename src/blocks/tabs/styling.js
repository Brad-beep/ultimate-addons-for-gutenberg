/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
		headerBgColor,
		titleAlign,
		headerTextColor,
		activeTabBgColor,
		activeTabTextColor,
		bodyBgColor,
		bodyTextColor,
		tabTitleTopMargin,
		tabTitleLeftMargin,
		tabTitleRightMargin,
		tabTitleBottomMargin,
		tabTitleVertPadding,
		tabTitleHrPadding,
		titleFontFamily,
		titleFontWeight,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleLineHeight,
		titleLineHeightType,
		titleLineHeightMobile,
		titleLineHeightTablet,
		//Border
		borderWidth,
		borderColor,
		iconColor,
		iconSize,
		tabBodyLeftMargin,
		tabBodyRightMargin,
		tabBodyTopMargin,
		tabBodyBottomMargin, 
		tabBodyVertPadding,
		tabBodyHrPadding,
		iconSpacing,
		tabsStyleD,
		tabsStyleM,
		tabsStyleT,
		activeiconColor
	} = props.attributes
	
	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}
	selectors = {
		" > .uagb-tabs__panel .uagb-tab" : {
			"background": headerBgColor,
			"text-align": titleAlign,
			"padding-top": generateCSSUnit( tabTitleVertPadding, "px" ),
			"padding-bottom": generateCSSUnit( tabTitleVertPadding, "px" ),
			"padding-left": generateCSSUnit( tabTitleHrPadding, "px" ),
			"padding-right": generateCSSUnit( tabTitleHrPadding, "px" ),
			"margin-top": generateCSSUnit( tabTitleTopMargin, "px" ),
			"margin-left": generateCSSUnit( tabTitleLeftMargin, "px" ),
			"margin-right": generateCSSUnit( tabTitleRightMargin, "px" ),
			"margin-bottom": generateCSSUnit( tabTitleBottomMargin, "px" )
		},
		" > .uagb-tabs__panel .uagb-tab a > p" : {
			"color": headerTextColor,
			"font-family": titleFontFamily,
			"font-weight": titleFontWeight,
			"font-size": generateCSSUnit( titleFontSize, titleFontSizeType ),
			"line-height": generateCSSUnit( titleLineHeight, titleLineHeightType ),
		},
		" > .uagb-tabs__panel .uagb-tab.uagb-tabs__active " : {
			"background": activeTabBgColor,
		},
		" > .uagb-tabs__panel .uagb-tab.uagb-tabs__active p" : {
			"color": activeTabTextColor ,
		},
		" > .uagb-tabs__panel .uagb-tab.uagb-tabs__active .uagb-tabs__icon svg" : {
			"fill": activeiconColor,
		},
		" > .uagb-tabs__body-wrap " : {
			"background": bodyBgColor,
			"padding-top": generateCSSUnit( tabBodyVertPadding, "px" ),
			"padding-bottom": generateCSSUnit( tabBodyVertPadding, "px" ),
			"padding-left": generateCSSUnit( tabBodyHrPadding, "px" ),
			"padding-right": generateCSSUnit( tabBodyHrPadding, "px" ),
			"margin-top": generateCSSUnit( tabBodyTopMargin, "px" ),
			"margin-left": generateCSSUnit( tabBodyLeftMargin, "px" ),
			"margin-right": generateCSSUnit( tabBodyRightMargin, "px" ),
			"margin-bottom": generateCSSUnit( tabBodyBottomMargin, "px" )
		},
		" > .uagb-tabs__body-wrap > .block-editor-inner-blocks p" : {
			"color": bodyTextColor,
		},
		" > .uagb-tabs__icon svg" : {
			"height": generateCSSUnit( iconSize, "px" ),
			"width": generateCSSUnit( iconSize, "px" ),
			"fill": iconColor
		},
		".uagb-tabs__wrap > .uagb-tabs__panel .uagb-tab" : {
            "border-width" : generateCSSUnit( borderWidth, "px" ),
			"border-color" : borderColor,
			"border-width" : generateCSSUnit( borderWidth, "px" ),
		},
		".uagb-tabs__wrap > .uagb-tabs__body-wrap" : {
            "border-width" : generateCSSUnit( borderWidth, "px" ),
			"border-color" : borderColor,
		},
		" .uagb-tabs__icon-position-left  .uagb-tabs__icon " : {
			"margin-right": generateCSSUnit(iconSpacing , "px" ),
		},
		" .uagb-tabs__icon-position-right  .uagb-tabs__icon " : {
			"margin-left": generateCSSUnit(iconSpacing , "px" ),
		},
		" .uagb-tabs__icon-position-top  .uagb-tabs__icon " : {
			"margin-bottom": generateCSSUnit(iconSpacing , "px" ),
		},
		" .uagb-tabs__icon-position-bottom  .uagb-tabs__icon " : {
			"margin-top": generateCSSUnit(iconSpacing , "px" ),
		},
	}
	tablet_selectors[" > .uagb-tabs__panel .uagb-tab p"] = {
		"font-size": generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
		"line-height": generateCSSUnit( titleLineHeightTablet, titleLineHeightType ),
	}
	mobile_selectors[" > .uagb-tabs__panel .uagb-tab p"] = {
		"font-size": generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
		"line-height": generateCSSUnit( titleLineHeightMobile, titleLineHeightType ),
	}
	if(tabsStyleD === 'hstyle5'){
		selectors[".uagb-tabs__wrap.uagb-tabs__hstyle5-desktop "] = {
			"background": bodyBgColor,
			"border-color" : borderColor,
			"border-width" : generateCSSUnit( borderWidth, "px" ),
		}
	}
	if(tabsStyleD === 'vstyle10'){
		selectors[".uagb-tabs__wrap.uagb-tabs__vstyle10-desktop "] = {
			"background": bodyBgColor,
			"border-color" : borderColor,
			"border-width" : generateCSSUnit( borderWidth, "px" ),
		}
	}
	if(tabsStyleT === 'hstyle5'){
		tablet_selectors[".uagb-tabs__wrap.uagb-tabs__hstyle5-tablet"] = {
			"background": bodyBgColor,
			"border-color" : borderColor,
			"border-width" : generateCSSUnit( borderWidth, "px" ),
		}
	}
	if(tabsStyleT === 'vstyle10'){
		tablet_selectors[".uagb-tabs__wrap.uagb-tabs__vstyle10-tablet"] = {
			"background": bodyBgColor,
			"border-color" : borderColor,
			"border-width" : generateCSSUnit( borderWidth, "px" ),
		}
	}
	if(tabsStyleM === 'hstyle5' ){
		mobile_selectors[".uagb-tabs__wrap.uagb-tabs__hstyle5-mobile "] = {
			"background": bodyBgColor,
			"border-color" : borderColor,
			"border-width" : generateCSSUnit( borderWidth, "px" ),
		}
	}
	if(tabsStyleM === 'vstyle10'){
		mobile_selectors[".uagb-tabs__wrap.uagb-tabs__vstyle10-mobile "] = {
			"background": bodyBgColor,
			"border-color" : borderColor,
			"border-width" : generateCSSUnit( borderWidth, "px" ),
		}
	}
	if( tabsStyleM === 'stack4'){
		mobile_selectors[".uagb-tabs__wrap.uagb-tabs__stack4-mobile"] = {
			"background": bodyBgColor,
			"border-color" : borderColor,
			"border-width" : generateCSSUnit( borderWidth, "px" ),
		}
	}
	var base_selector = `.block-editor-page #wpwrap .uagb-block-${ props.clientId.substr( 0, 8 ) }`

	var styling_css = generateCSS( selectors, base_selector )

	styling_css += generateCSS( tablet_selectors, `${base_selector}.uagb-editor-preview-mode-tablet`, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, `${base_selector}.uagb-editor-preview-mode-mobile`, true, "mobile" )

	return styling_css
}

export default styling
