/**
 * @fileoverview Provide zz.ui.mdl.button base object.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (popkov alexander)
 */

goog.provide( 'zz.ui.mdl.button' );

goog.require( 'goog.ui.decorate' );

goog.require( 'zz.ui.mdl.button.templates.tpl' );
goog.require( 'zz.ui.mdl.Button' );
goog.require( 'zz.ui.mdl.ButtonRenderer' );

/**
 * Base namespace for zz.ui.mdl.button module.
 * @const
 */
zz.ui.mdl.button = zz.ui.mdl.button || { };
/**
 * Bootstrap module method.
 */
zz.ui.mdl.button.bootstrap = function( ){

	goog.ui.registry.setDecoratorByClassName( zz.ui.mdl.ButtonRenderer.CSS_CLASS, function( ){

		return new zz.ui.mdl.Button( );
	} );

	//

	soy.renderElement( goog.dom.getElement( 'root' ), zz.ui.mdl.button.templates.tpl.default );
	var btn1 = goog.ui.decorate( goog.dom.getElement( '1' ) );
	var btn2 = goog.ui.decorate( goog.dom.getElement( '2' ) );
	var btn3 = goog.ui.decorate( goog.dom.getElement( '3' ) );
	var btn4 = goog.ui.decorate( goog.dom.getElement( '4' ) );
	var btn5 = goog.ui.decorate( goog.dom.getElement( '5' ) );
	var btn6 = goog.ui.decorate( goog.dom.getElement( '6' ) );
	var btn7 = goog.ui.decorate( goog.dom.getElement( '7' ) );
	var btn8 = goog.ui.decorate( goog.dom.getElement( '8' ) );
	var btn9 = goog.ui.decorate( goog.dom.getElement( '9' ) );
	var btn10 = goog.ui.decorate( goog.dom.getElement( '10' ) );
	var btn11 = goog.ui.decorate( goog.dom.getElement( '11' ) );
	var btn12 = goog.ui.decorate( goog.dom.getElement( '12' ) );
	var btn13 = goog.ui.decorate( goog.dom.getElement( '13' ) );
	var btn14 = goog.ui.decorate( goog.dom.getElement( '14' ) );
	var btn15 = goog.ui.decorate( goog.dom.getElement( '15' ) );
	var btn16 = goog.ui.decorate( goog.dom.getElement( '16' ) );
	var btn17 = goog.ui.decorate( goog.dom.getElement( '17' ) );
	var btn18 = goog.ui.decorate( goog.dom.getElement( '18' ) );
	var btn19 = goog.ui.decorate( goog.dom.getElement( '19' ) );
	var btn20 = goog.ui.decorate( goog.dom.getElement( '20' ) );
	goog.events.listen( btn2, goog.ui.Component.EventType.ACTION, function( evt ){

		btn2.setEnabled( false );
		btn6.setContent( 'Content' );
		var elm1 = goog.dom.createDom( goog.dom.TagName.I, {

			'class': goog.getCssName( 'material-icons' )

		}, 'add' );
		var elm2 = goog.dom.createDom( goog.dom.TagName.I, {

			'class': goog.getCssName( 'material-icons' )

		}, 'add' );
		btn7.setContent( elm1 );
	} );
	goog.events.listen( btn4, goog.ui.Component.EventType.ACTION, function( evt ){

		btn2.setEnabled( true );
	} );
	goog.events.listen( btn5, goog.ui.Component.EventType.ACTION, function( evt ){

		btn2.setEnabled( true );
	} );
};
goog.exportSymbol( 'zz.ui.mdl.button.bootstrap', zz.ui.mdl.button.bootstrap );
