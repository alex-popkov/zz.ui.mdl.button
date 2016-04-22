
/**
 * @fileoverview Provide zz.ui.mdl.views.ButtonView class.
 * @license Apache-2.0
 * @author author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.ui.mdl.views.ButtonView' );

/**********************************************************************************************************************
 * Dependencies section                                                                                               *
 **********************************************************************************************************************/

goog.require( 'goog.dom.classlist' );
goog.require( 'zz.ui.mdl.controllers.BaseControl' );

/**
 * Default renderer for {@link zz.ui.mdl.Button}s. Extends the superclass to support buttons states.
 * @constructor
 * @extends {zz.ui.mdl.controllers.BaseControl}
 */
zz.ui.mdl.views.ButtonView = function( ){

	zz.ui.mdl.views.ButtonView.base( this, 'constructor' );
};
goog.inherits( zz.ui.mdl.views.ButtonView, zz.ui.mdl.controllers.BaseControl );
goog.addSingletonGetter( zz.ui.mdl.views.ButtonView );

/**
 * Default CSS class to be applied to the root element of components rendered by this renderer.
 * @type {string}
 */
zz.ui.mdl.views.ButtonView.CSS_CLASS = goog.getCssName( 'mdl-button' );

/**
 * @override
 */
zz.ui.mdl.views.ButtonView.prototype.createDom = function( ){

	goog.base( this, 'createDom' );
};

/**
 * @override
 */
zz.ui.mdl.views.ButtonView.prototype.canDecorate = function( element ){

	return element.tagName == goog.dom.TagName.BUTTON || ( element.tagName == goog.dom.TagName.INPUT && (

		element.type == goog.dom.InputType.BUTTON ||
		element.type == goog.dom.InputType.SUBMIT ||
		element.type == goog.dom.InputType.RESET ) );
};

/**
 * @override
 */
zz.ui.mdl.views.ButtonView.prototype.decorate = function( control, element ){

	if( goog.dom.classlist.contains( element, zz.ui.mdl.Button.CSS.RIPPLE_EFFECT ) ){

		goog.dom.appendChild( element, control.getDomHelper( ).createDom( goog.dom.TagName.SPAN, {

			'class': zz.ui.mdl.Button.CSS.RIPPLE_CONTAINER

		}, control.getDomHelper( ).createDom( goog.dom.TagName.SPAN, {

			'class': zz.ui.mdl.Button.CSS.RIPPLE
		} ) ) );
	}
	return goog.base( this, 'decorate', control, element );
};

/**
 * @override
 */
zz.ui.mdl.views.ButtonView.prototype.getCssClass = function( ){

	return zz.ui.mdl.views.ButtonView.CSS_CLASS;
};

/**
 * Returns the element within the component's DOM that should receive keyboard focus (null if none).  The default
 * implementation returns the control's root element.
 * @param {zz.ui.mdl.Control} control Control whose key event target is to be returned.
 * @return {Element} The key event target.
 * @override
 */
zz.ui.mdl.views.ButtonView.prototype.getKeyEventTarget = function( control ){

	return control.getElement( );
};

goog.ui.registry.setDecoratorByClassName( zz.ui.mdl.views.ButtonView.CSS_CLASS, function( ){

	return new zz.ui.mdl.Button( );
} );