/**
 * BLOCK: Call To Action
 */


import classnames from "classnames"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import Title from "./components/Title"
import Description from "./components/Description"
import CtaPositionClasses from "./classes"
import CTA from "./components/CTA"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import CtaStyle from "./inline-styles"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

const { __ } = wp.i18n

const {
	AlignmentToolbar,
	BlockControls,
	ColorPalette,
	InspectorControls,
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ToggleControl,
	TextControl,
} = wp.components

let svg_icons = Object.keys( UAGBIcon )

const { Component, Fragment } = wp.element

class UAGBCallToAction extends Component {

	constructor() {
		super( ...arguments )
		this.toggleTarget     = this.toggleTarget.bind( this )
		this.setCtaIcon  	  = this.setCtaIcon.bind(this)
	}

	setCtaIcon(value) {
		this.props.setAttributes( { ctaIcon: value } )
	}

	/**
	 * Function Name: toggleTarget.
	 */
	toggleTarget() {
		const { ctaTarget } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { ctaTarget: ! ctaTarget } )
	}

	render() {

		const { className, setAttributes, attributes } = this.props

		// Setup the attributes.
		const {
			textAlign,
			titleColor,
			descColor,
			titleTag,
			titleFontSize,
			titleFontSizeType,
			titleFontSizeMobile,
			titleFontSizeTablet,
			titleFontFamily,
			titleFontWeight,
			titleFontSubset,
			titleLineHeightType,
			titleLineHeight,
			titleLineHeightTablet,
			titleLineHeightMobile,
			titleLoadGoogleFonts,
			descFontSize,
			descFontSizeType,
			descFontSizeMobile,
			descFontSizeTablet,
			descFontFamily,
			descFontWeight,
			descFontSubset,
			descLineHeightType,
			descLineHeight,
			descLineHeightTablet,
			descLineHeightMobile,
			descLoadGoogleFonts,
			titleSpace,
			descSpace,
			ctaPosition,
			buttonAlign,
			ctaType,
			ctaText,
			ctaLink,
			ctaTarget,
			ctaIcon,
			ctaIconPosition,
			ctaIconSpace,
			ctaFontSize,
			ctaFontSizeType,
			ctaFontSizeMobile,
			ctaFontSizeTablet,
			ctaFontFamily,
			ctaFontWeight,
			ctaFontSubset,
			ctaLoadGoogleFonts,
			contentWidth,
			ctaBtnLinkColor,
			ctaBgHoverColor,
			ctaBgColor,
			ctaBtnVertPadding,
			ctaBtnHrPadding,
			ctaBorderStyle,
			ctaBorderColor,
			ctaBorderhoverColor,
			ctaBorderWidth,
			ctaBorderRadius,
			stack,
			ctaLeftSpace,
			ctaRightSpace,
			ctaLinkHoverColor,
			inheritFromTheme
		} = attributes

		let loadCtaGoogleFonts
		let loadTitleGoogleFonts
		let loadDescGoogleFonts

		if( ctaLoadGoogleFonts == true ) {
					
			const ctaconfig = {
				google: {
					families: [ ctaFontFamily + ( ctaFontWeight ? ":" + ctaFontWeight : "" ) ],
				},
			}

			loadCtaGoogleFonts = (
				<WebfontLoader config={ ctaconfig }>
				</WebfontLoader>
			)
		}

		if( titleLoadGoogleFonts == true ) {
					
			const titleconfig = {
				google: {
					families: [ titleFontFamily + ( titleFontWeight ? ":" + titleFontWeight : "" ) ],
				},
			}

			loadTitleGoogleFonts = (
				<WebfontLoader config={ titleconfig }>
				</WebfontLoader>
			)
		}
		
		if( descLoadGoogleFonts == true ) {
					
			const descconfig = {
				google: {
					families: [ descFontFamily + ( descFontWeight ? ":" + descFontWeight : "" ) ],
				},
			}

			loadDescGoogleFonts = (
				<WebfontLoader config={ descconfig }>
				</WebfontLoader>
			)
		}

		// Icon properties.
		const cta_icon_props = {
			icons: svg_icons,
			value: ctaIcon,
			onChange: this.setCtaIcon,
			isMulti: false,
			renderFunc: renderSVG,
			noSelectedPlaceholder: __( "Select Icon", 'ultimate-addons-for-gutenberg' )
		}

		// CTA settings.
		const ctaSettings = (
			<PanelBody title={ __( "Button", 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<SelectControl
					label={ __( "Type", 'ultimate-addons-for-gutenberg' ) }
					value={ ctaType }
					onChange={ ( value ) => setAttributes( { ctaType: value } ) }
					options={ [
						{ value: "none", label: __( "None", 'ultimate-addons-for-gutenberg' ) },
						{ value: "text", label: __( "Text", 'ultimate-addons-for-gutenberg' ) },
						{ value: "button", label: __( "Button", 'ultimate-addons-for-gutenberg' ) },
						{ value: "all", label: __( "Complete Box", 'ultimate-addons-for-gutenberg' ) },
					] }
				/>
				{ ( ctaType === "text" || ctaType === "button" ) &&
					<Fragment>
						<TextControl
							label= { __( "Text", 'ultimate-addons-for-gutenberg' ) }
							value= { ctaText }
							onChange={ value => setAttributes( { ctaText: value } ) }
						/>
						{ ctaType === "button" &&
							<ToggleControl
								label={ __( "Inherit from Theme", 'ultimate-addons-for-gutenberg' ) }
								checked={ inheritFromTheme }
								onChange={ ( value ) => setAttributes( { inheritFromTheme: ! inheritFromTheme } ) }
							/>
						}
						
						{ ( ! inheritFromTheme && ctaType === "button" ) || ctaType === "text" &&
							<TypographyControl
								label={ __( "Typography", 'ultimate-addons-for-gutenberg' ) }
								attributes = { attributes }
								setAttributes = { setAttributes }
								loadGoogleFonts = { { value: ctaLoadGoogleFonts, label: 'ctaLoadGoogleFonts' } }
								fontFamily = { { value: ctaFontFamily, label: 'ctaFontFamily' } }
								fontWeight = { { value: ctaFontWeight, label: 'ctaFontWeight' } }
								fontSubset = { { value: ctaFontSubset, label: 'ctaFontSubset' } }
								fontSizeType = { { value: ctaFontSizeType, label: 'ctaFontSizeType' } }
								fontSize = { { value: ctaFontSize, label: 'ctaFontSize' } }
								fontSizeMobile = { { value: ctaFontSizeMobile, label: 'ctaFontSizeMobile' } }
								fontSizeTablet= { { value: ctaFontSizeTablet, label: 'ctaFontSizeTablet' } }							
								disableLineHeight = {true}
							/>
						}
					</Fragment>
				}
				{ ( ctaType !== "none" ) &&
					<Fragment>
						<TextControl
							label= { __( "Link", 'ultimate-addons-for-gutenberg' ) }
							value= { ctaLink }
							onChange={ value => setAttributes( { ctaLink: value } ) }
						/>
						<ToggleControl
							label={ __( "Open in new Window", 'ultimate-addons-for-gutenberg' ) }
							checked={ ctaTarget }
							onChange={ this.toggleTarget }
						/>
					</Fragment>
				}
				{ ( ctaType !== "all" ) && ( ctaType !== "none" ) &&
					<Fragment>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Button Icon" ) }</h2>
						<FontIconPicker {...cta_icon_props} />
						{ ctaIcon != "" &&
							<Fragment>
								<SelectControl
									label={ __( "Icon Position", 'ultimate-addons-for-gutenberg' ) }
									value={ ctaIconPosition }
									onChange={ ( value ) => setAttributes( { ctaIconPosition: value } ) }
									options={ [
										{ value: "before", label: __( "Before Text", 'ultimate-addons-for-gutenberg' ) },
										{ value: "after", label: __( "After Text", 'ultimate-addons-for-gutenberg' ) },
									] }
								/>
								<RangeControl
									label={ __( "Icon Spacing", 'ultimate-addons-for-gutenberg' ) }
									value={ ctaIconSpace }
									onChange={ ( value ) => setAttributes( { ctaIconSpace: value } ) }
									min={ 0 }
									max={ 50 }
									beforeIcon=""
									allowReset
								/>
							</Fragment>
						}
					</Fragment>
				}

				{ ( ctaType == "button" ) && ! inheritFromTheme && (
					<Fragment>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Button Padding (px)", 'ultimate-addons-for-gutenberg' ) }</h2>
						<RangeControl
							label={ UAGB_Block_Icons.vertical_spacing }
							className={ "uagb-margin-control" }
							value={ ctaBtnVertPadding }
							onChange={ ( value ) => setAttributes( { ctaBtnVertPadding: value } ) }
							min={ 0 }
							max={ 500 }
							beforeIcon=""
							allowReset
						/>
						<RangeControl
							label={ UAGB_Block_Icons.horizontal_spacing }
							className={ "uagb-margin-control" }
							value={ ctaBtnHrPadding }
							onChange={ ( value ) => setAttributes( { ctaBtnHrPadding: value } ) }
							min={ 0 }
							max={ 500 }
							beforeIcon=""
							allowReset
						/>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Button Border", 'ultimate-addons-for-gutenberg' ) }</h2>
						<SelectControl
							label={ __( "Style" ) }
							value={ ctaBorderStyle }
							onChange={ ( value ) => setAttributes( { ctaBorderStyle: value } ) }
							options={ [
								{ value: "none", label: __( "None", 'ultimate-addons-for-gutenberg' ) },
								{ value: "solid", label: __( "Solid", 'ultimate-addons-for-gutenberg' ) },
								{ value: "double", label: __( "Double", 'ultimate-addons-for-gutenberg' ) },
								{ value: "dashed", label: __( "Dashed", 'ultimate-addons-for-gutenberg' ) },
								{ value: "dotted", label: __( "Dotted", 'ultimate-addons-for-gutenberg' ) },
							] }
						/>
						{ ctaBorderStyle != "none" &&
							<Fragment>
								<RangeControl
									label={ __( "Width", 'ultimate-addons-for-gutenberg' ) }
									value={ ctaBorderWidth }
									onChange={ ( value ) => setAttributes( { ctaBorderWidth: value } ) }
									min={ 0 }
									max={ 10 }
									beforeIcon=""
									allowReset
								/>
								<RangeControl
									label={ __( "Rounded Corner", 'ultimate-addons-for-gutenberg' ) }
									value={ ctaBorderRadius }
									onChange={ ( value ) => setAttributes( { ctaBorderRadius: value } ) }
									min={ 0 }
									max={ 100 }
									beforeIcon=""
									allowReset
								/>
							</Fragment>
						}
					</Fragment>
				)
				}
				{ ( ctaType === "text" ) && <TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
					activeClass="active-tab"
					tabs={ [
						{
							name: "normal",
							title: __( "Normal", 'ultimate-addons-for-gutenberg' ),
							className: "uagb-normal-tab",
						},
						{
							name: "hover",
							title: __( "Hover", 'ultimate-addons-for-gutenberg' ),
							className: "uagb-hover-tab",
						},
					] }>
					{
						( tabName ) => {
							let cta_text_tab
							if( "normal" === tabName.name ) {
								cta_text_tab = cta_txt_color
							}else {
								cta_text_tab = cta_txt_hover_color
							}
							return <div>{ cta_text_tab }</div>
						}
					}
				</TabPanel>
				}

				{ ( ctaType === "button") && ! inheritFromTheme &&
					<TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
						activeClass="active-tab"
						tabs={ [
							{
								name: "normal",
								title: __( "Normal", 'ultimate-addons-for-gutenberg' ),
								className: "uagb-normal-tab",
							},
							{
								name: "hover",
								title: __( "Hover", 'ultimate-addons-for-gutenberg' ),
								className: "uagb-focus-tab",
							},
						] }>
						{
							( tabName ) => {
								let tabout
								if( "normal" === tabName.name ) {
									tabout = ctaNormalSettings
								}else {
									tabout = ctaHoverSettings
								}
								return <div>{ tabout }</div>
							}
						}
					</TabPanel>
				}
			</PanelBody>
		)

		const ctaNormalSettings = (
			<Fragment>
				<p className="uagb-setting-label">{ __( "Text Color", 'ultimate-addons-for-gutenberg' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBtnLinkColor }} ></span></span></p>
				<ColorPalette
					value={ ctaBtnLinkColor }
					onChange={ ( colorValue ) => setAttributes( { ctaBtnLinkColor: colorValue } ) }
					allowReset
				/>
				<p className="uagb-setting-label">{ __( "Background Color", 'ultimate-addons-for-gutenberg' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBgColor }} ></span></span></p>
				<ColorPalette
					value={ ctaBgColor }
					onChange={ ( colorValue ) => setAttributes( { ctaBgColor: colorValue } ) }
					allowReset
				/>
				{ ( ctaBorderStyle !== "none" ) && <Fragment>
					<p className="uagb-setting-label">{ __( "Border Color", 'ultimate-addons-for-gutenberg' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBorderColor }} ></span></span></p>
				    <ColorPalette
				        value={ ctaBorderColor }
				        onChange={ ( colorValue ) => setAttributes( { ctaBorderColor: colorValue } ) }
				        allowReset
				    />
				    </Fragment>
				}
			</Fragment>
		)

		const ctaHoverSettings = (
			<Fragment>
				<p className="uagb-setting-label">{ __( "Text Hover Color", 'ultimate-addons-for-gutenberg' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaLinkHoverColor }} ></span></span></p>
				<ColorPalette
					value={ ctaLinkHoverColor }
					onChange={ ( colorValue ) => setAttributes( { ctaLinkHoverColor: colorValue } ) }
					allowReset
				/>
				<p className="uagb-setting-label">{ __( "Background Hover Color", 'ultimate-addons-for-gutenberg' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBgHoverColor }} ></span></span></p>
				<ColorPalette
					value={ ctaBgHoverColor }
					onChange={ ( colorValue ) => setAttributes( { ctaBgHoverColor: colorValue } ) }
					allowReset
				/>
				{ ( ctaBorderStyle !== "none" ) && <Fragment>
					<p className="uagb-setting-label">{ __( "Border Hover Color", 'ultimate-addons-for-gutenberg' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBorderhoverColor }} ></span></span></p>
				    <ColorPalette
				        value={ ctaBorderhoverColor }
				        onChange={ ( colorValue ) => setAttributes( { ctaBorderhoverColor: colorValue } ) }
				        allowReset
				    />
				    </Fragment>
				}
			</Fragment>
		)

		const cta_txt_color = (
			<Fragment>
			    <p className="uagb-setting-label">{ __( "CTA Text Color", 'ultimate-addons-for-gutenberg' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBtnLinkColor }} ></span></span></p>
			    <ColorPalette
			        value={ ctaBtnLinkColor }
			        onChange={ ( colorValue ) => setAttributes( { ctaBtnLinkColor: colorValue } ) }
			        allowReset
			    />
			</Fragment>
		)

		const cta_txt_hover_color = (
			<Fragment>
			    <p className="uagb-setting-label">{ __( "CTA Text Hover Color", 'ultimate-addons-for-gutenberg' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaLinkHoverColor }} ></span></span></p>
			    <ColorPalette
			        value={ ctaLinkHoverColor }
			        onChange={ ( colorValue ) => setAttributes( { ctaLinkHoverColor: colorValue } ) }
			        allowReset
			    />
			</Fragment>
		)

		// Typography settings.
		const TypographySettings = (
			<PanelBody title={ __( "Content", 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<h2>{ __( "Heading", 'ultimate-addons-for-gutenberg' ) }</h2>
				<SelectControl
					label={ __( "Tag", 'ultimate-addons-for-gutenberg' ) }
					value={ titleTag }
					onChange={ ( value ) => setAttributes( { titleTag: value } ) }
					options={ [
						{ value: "h1", label: __( "H1", 'ultimate-addons-for-gutenberg' ) },
						{ value: "h2", label: __( "H2", 'ultimate-addons-for-gutenberg' ) },
						{ value: "h3", label: __( "H3", 'ultimate-addons-for-gutenberg' ) },
						{ value: "h4", label: __( "H4", 'ultimate-addons-for-gutenberg' ) },
						{ value: "h5", label: __( "H5", 'ultimate-addons-for-gutenberg' ) },
						{ value: "h6", label: __( "H6", 'ultimate-addons-for-gutenberg' ) },
					] }
				/>

				<TypographyControl
					label={ __( "Typography", 'ultimate-addons-for-gutenberg' ) }
					attributes = { attributes }
					setAttributes = { setAttributes }
					loadGoogleFonts = { { value: titleLoadGoogleFonts, label: 'titleLoadGoogleFonts' } }
					fontFamily = { { value: titleFontFamily, label: 'titleFontFamily' } }
					fontWeight = { { value: titleFontWeight, label: 'titleFontWeight' } }
					fontSubset = { { value: titleFontSubset, label: 'titleFontSubset' } }
					fontSizeType = { { value: titleFontSizeType, label: 'titleFontSizeType' } }
					fontSize = { { value: titleFontSize, label: 'titleFontSize' } }
					fontSizeMobile = { { value: titleFontSizeMobile, label: 'titleFontSizeMobile' } }
					fontSizeTablet= { { value: titleFontSizeTablet, label: 'titleFontSizeTablet' } }
					lineHeightType = { { value: titleLineHeightType, label: 'titleLineHeightType' } }
					lineHeight = { { value: titleLineHeight, label: 'titleLineHeight' } }
					lineHeightMobile = { { value: titleLineHeightMobile, label: 'titleLineHeightMobile' } }
					lineHeightTablet= { { value: titleLineHeightTablet, label: 'titleLineHeightTablet' } }
				/>
				<p className="uagb-setting-label">{ __( "Color", 'ultimate-addons-for-gutenberg' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: titleColor }} ></span></span></p>
				<ColorPalette
					value={ titleColor }
					onChange={ ( colorValue ) => setAttributes( { titleColor: colorValue } ) }
					allowReset
				/>
				<hr className="uagb-editor__separator" />
				<h2>{ __( "Description", 'ultimate-addons-for-gutenberg' ) }</h2>
				<TypographyControl
					label={ __( "Typography", 'ultimate-addons-for-gutenberg' ) }
					attributes = { attributes }
					setAttributes = { setAttributes }
					loadGoogleFonts = { { value: descLoadGoogleFonts, label: 'descLoadGoogleFonts' } }
					fontFamily = { { value: descFontFamily, label: 'descFontFamily' } }
					fontWeight = { { value: descFontWeight, label: 'descFontWeight' } }
					fontSubset = { { value: descFontSubset, label: 'descFontSubset' } }
					fontSizeType = { { value: descFontSizeType, label: 'descFontSizeType' } }
					fontSize = { { value: descFontSize, label: 'descFontSize' } }
					fontSizeMobile = { { value: descFontSizeMobile, label: 'descFontSizeMobile' } }
					fontSizeTablet= { { value: descFontSizeTablet, label: 'descFontSizeTablet' } }
					lineHeightType = { { value: descLineHeightType, label: 'descLineHeightType' } }
					lineHeight = { { value: descLineHeight, label: 'descLineHeight' } }
					lineHeightMobile = { { value: descLineHeightMobile, label: 'descLineHeightMobile' } }
					lineHeightTablet= { { value: descLineHeightTablet, label: 'descLineHeightTablet' } }
				/>
				<p className="uagb-setting-label">{ __( "Color", 'ultimate-addons-for-gutenberg' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: descColor }} ></span></span></p>
				<ColorPalette
					value={ descColor }
					onChange={ ( colorValue ) => setAttributes( { descColor: colorValue } ) }
					allowReset
				/>
			</PanelBody>
		)

		// Margin Settings.
		const marginSettings = (
			<PanelBody title={ __( "Spacing", 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<RangeControl
					label={ __( "Heading Bottom Margin", 'ultimate-addons-for-gutenberg' ) }
					value={ titleSpace }
					onChange={ ( value ) => setAttributes( { titleSpace: value } ) }
					min={ 0 }
					max={ 500 }
					beforeIcon=""
					allowReset
				/>
				<RangeControl
					label={ __( "Description Bottom Margin", 'ultimate-addons-for-gutenberg' ) }
					value={ descSpace }
					onChange={ ( value ) => setAttributes( { descSpace: value } ) }
					min={ 0 }
					max={ 500 }
					beforeIcon=""
					allowReset
				/>

				{ ( textAlign === "left" && ctaPosition === "right" ) &&
					<RangeControl
						label={ __( "Content Left Margin", 'ultimate-addons-for-gutenberg' ) }
						value={ ctaLeftSpace }
						onChange={ ( value ) => setAttributes( { ctaLeftSpace: value } ) }
						min={ 0 }
						max={ 500 }
						beforeIcon=""
						allowReset
					/>
				}
				{ ( textAlign === "right" && ctaPosition === "right" ) &&
					<RangeControl
						label={ __( "Content Right Margin", 'ultimate-addons-for-gutenberg' ) }
						value={ ctaRightSpace }
						onChange={ ( value ) => setAttributes( { ctaRightSpace: value } ) }
						min={ 0 }
						max={ 500 }
						beforeIcon=""
						allowReset
					/>
				}
			</PanelBody>
		)

		const layouts = (
			<PanelBody title={ __( "Layout", 'ultimate-addons-for-gutenberg' ) } initialOpen={ true }>
				<SelectControl
					label={ __( "Button Position", 'ultimate-addons-for-gutenberg' ) }
					value={ ctaPosition }
					onChange={ ( value ) => setAttributes( { ctaPosition: value } ) }
					options={ [
						{ value: "right", label: __( "Normal", 'ultimate-addons-for-gutenberg' ) },
						{ value: "below-title", label: __( "Stack", 'ultimate-addons-for-gutenberg' ) },
					] }
				/>
				{ ( ctaPosition == "right" ) &&
						<SelectControl
							label={ __( "Stack on", 'ultimate-addons-for-gutenberg' ) }
							value={ stack }
							options={ [
								{ value: "none", label: __( "None", 'ultimate-addons-for-gutenberg' ) },
								{ value: "tablet", label: __( "Tablet", 'ultimate-addons-for-gutenberg' ) },
								{ value: "mobile", label: __( "Mobile", 'ultimate-addons-for-gutenberg' ) },
							] }
							help={ __( "Note: Choose on what breakpoint the CTA button will stack.", 'ultimate-addons-for-gutenberg' ) }
							onChange={ ( value ) => setAttributes( { stack: value } ) }
						/>
				}

				{ ( ctaType === "text" || ctaType === "button" ) &&
					<Fragment>
						{ ctaPosition === "right" &&
							<RangeControl
								label={ __( "Content Width (%)", 'ultimate-addons-for-gutenberg' ) }
								value={ contentWidth }
								onChange={ ( value ) => setAttributes( { contentWidth: value } ) }
								min={ 0 }
								max={ 100 }
								initialPosition={70}
								allowReset
							/>
						}
					</Fragment>
				}

				{ ( ctaPosition && ctaPosition === "right"  ) && <SelectControl
					label={ __( "Verticle Alignment", 'ultimate-addons-for-gutenberg' ) }
					value={ buttonAlign }
					onChange={ ( value ) => setAttributes( { buttonAlign: value } ) }
					options={ [
						{ value: "top", label: __( "Top", 'ultimate-addons-for-gutenberg' ) },
						{ value: "middle", label: __( "Middle", 'ultimate-addons-for-gutenberg' ) },
					] }
				/>
				}
			</PanelBody>
		)

		// Global Controls.
		const inspect_control = (
			<InspectorControls>
				{ ( ctaType !== "all" ) && ( ctaType !== "none" ) && layouts }
				{ TypographySettings }
				{ ctaSettings }
				{ marginSettings }
			</InspectorControls>
		)

		// Get icon/Image components.
		let is_cta =  <CTA attributes={attributes} setAttributes = { setAttributes }/>
		// Get description components.
		const desc = (
			<div className = "uagb-cta-text-wrap">
				{ <Description attributes={attributes} setAttributes = { setAttributes } props = { this.props } />}
			</div>
		)

		// Get Title components.
		const title_text = (
			<div className = "uagb-cta__title-wrap">
				{ <Title attributes={attributes} setAttributes = { setAttributes } props = { this.props } /> }
			</div>
		)

		const output = (
			<div className = { classnames(
				"uagb-cta__content-wrap",
				...CtaPositionClasses( attributes ),
			) }>
				<div className = "uagb-cta__left-right-wrap">

					<div className = "uagb-cta__content">

						{ ctaPosition == "below-title"  &&
								<Fragment>
							     { title_text }
							     { desc }
							     { is_cta }
							    </Fragment>
						}

						{ ( ctaPosition == "right") &&
								<Fragment>
									{ title_text }
									{ desc }
								</Fragment>
						}

					</div>

					{ ( ctaPosition == "right") &&
								is_cta
					}
				</div>
			</div>
		)

		return (
			<Fragment>
				<BlockControls key='controls'>
					<AlignmentToolbar
						value={ textAlign }
						onChange={ ( value ) => setAttributes( { textAlign: value } ) }
					/>
				</BlockControls>

				{inspect_control}
				<div className={ classnames(
					className,
					"uagb-cta__outer-wrap",
					`uagb-block-${this.props.clientId.substr( 0, 8 )}`
				) }
				>
					{ ( ctaType == "all") &&
							<Fragment>
								<a href= "javascript:void(0)" className = "uagb-cta__block-link-wrap uagb-cta__link-to-all" rel ="noopener noreferrer" > </a>
								{output}
							</Fragment>
					}
					{ ( ctaType !== "all") && output }
				</div>
				{ loadCtaGoogleFonts }
				{ loadTitleGoogleFonts }
				{ loadDescGoogleFonts }
			</Fragment>
		)
	}

	componentDidUpdate( prevProps ) {
		var element = document.getElementById( "uagb-cta-style-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = CtaStyle( this.props )
		}
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		this.props.setAttributes( { classMigrate: true } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-cta-style-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
	}
}

export default UAGBCallToAction
