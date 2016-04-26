
/**
 * @fileoverview Provide zz.ui.mdl.button.views.Button class.
 * @license Apache-2.0
 * @author author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.ui.mdl.button.views.Button' );

/**********************************************************************************************************************
 * Dependencies section                                                                                               *
 **********************************************************************************************************************/

goog.require( 'goog.dom.classlist' );
goog.require( 'zz.ui.mdl.controllers.BaseControl' );
goog.require( 'zz.ui.mdl.button.enums.CSS' );

/**
 * Default renderer for {@link zz.ui.mdl.Button}s. Extends the superclass to support buttons states.
 * @constructor
 * @extends {zz.ui.mdl.controllers.BaseControl}
 */
zz.ui.mdl.button.views.Button = function( ){

	zz.ui.mdl.button.views.Button.base( this, 'constructor' );
};
goog.inherits( zz.ui.mdl.button.views.Button, zz.ui.mdl.controllers.BaseControl );
goog.addSingletonGetter( zz.ui.mdl.button.views.Button );


/**
 * @override
 */
zz.ui.mdl.button.views.Button.prototype.createDom = function( ){

	goog.base( this, 'createDom' );
};

/**
 * @override
 */
zz.ui.mdl.button.views.Button.prototype.canDecorate = function( element ){

	return element.tagName == goog.dom.TagName.BUTTON || ( element.tagName == goog.dom.TagName.INPUT && (

		element.type == goog.dom.InputType.BUTTON ||
		element.type == goog.dom.InputType.SUBMIT ||
		element.type == goog.dom.InputType.RESET ) );
};

/**
 * @override
 */
zz.ui.mdl.button.views.Button.prototype.decorate = function( control, element ){

	if( goog.dom.classlist.contains( element, zz.ui.mdl.button.enums.CSS.RIPPLE_EFFECT ) ){

		goog.dom.appendChild( element, control.getDomHelper( ).createDom( goog.dom.TagName.SPAN, {

			'class': zz.ui.mdl.button.enums.CSS.RIPPLE_CONTAINER

		}, control.getDomHelper( ).createDom( goog.dom.TagName.SPAN, {

			'class': zz.ui.mdl.button.enums.CSS.RIPPLE
		} ) ) );
	}
	return goog.base( this, 'decorate', control, element );
};

/**
 * @override
 */
zz.ui.mdl.button.views.Button.prototype.getCssClass = function( ){

	return zz.ui.mdl.button.enums.CSS.ROOT_ELEMENT;
};

/**
 * Returns the element within the component's DOM that should receive keyboard focus (null if none).  The default
 * implementation returns the control's root element.
 * @param {zz.ui.mdl.Control} control Control whose key event target is to be returned.
 * @return {Element} The key event target.
 * @override
 */
zz.ui.mdl.button.views.Button.prototype.getKeyEventTarget = function( control ){

	return control.getElement( );
};