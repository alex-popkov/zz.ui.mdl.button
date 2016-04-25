/**
 * @fileoverview Provide zz.ui.mdl.button base object.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (popkov alexander)
 */

goog.provide( 'zz.ui.mdl.button' );

/**
 * Base namespace for zz.ui.mdl.button module.
 * @const
 */
zz.ui.mdl.button = zz.ui.mdl.button || { };

goog.ui.registry.setDecoratorByClassName( zz.ui.mdl.button.views.Button.CSS_CLASS, function( ){

    return new zz.ui.mdl.Button( );
} );
/**
 * Bootstrap module method.
 */
zz.ui.mdl.button.bootstrap = function( ){

	//
};
window[ 'bootstrap' ] = zz.ui.mdl.button.bootstrap;