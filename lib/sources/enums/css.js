/**
 * @fileoverview Provide zz.ui.mdl.button.enums.CSS.
 * @license Apache-2.0
 * @author author popkov.aleksander@gmail.com (Alexander Popkov)
 */

goog.provide( 'zz.ui.mdl.button.enums.CSS' );


/**
 * Store strings for class names defined by this component that are used in JavaScript. This allows us to simply change
 * it in one place should we decide to modify at a later date.
 * @enum {string}
 */
zz.ui.mdl.button.enums.CSS = {

    ROOT_ELEMENT: goog.getCssName( 'mdl-button' ),
    RIPPLE_EFFECT: goog.getCssName( 'mdl-js-ripple-effect' ),
    RIPPLE_CONTAINER: goog.getCssName( 'mdl-button__ripple-container' ),
    RIPPLE: goog.getCssName( 'mdl-ripple' )
};