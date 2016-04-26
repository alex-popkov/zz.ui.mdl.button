/**
 * @fileoverview Provide zz.ui.mdl.button.controllers.Button class.
 * @license Apache-2.0
 * @author author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.ui.mdl.button.controllers.Button' );

goog.require( 'goog.style' );
goog.require( 'goog.dom.classlist' );
goog.require( 'goog.events.EventType' );
goog.require( 'goog.ui.Component' );
goog.require( 'zz.ui.mdl.controllers.BaseControl' );
goog.require( 'zz.ui.mdl.button.views.Button' );
goog.require( 'zz.ui.mdl.button.enums.CSS' );
goog.require( 'zz.ui.mdl.RippleControl' );

/**
 * @param {goog.ui.ControlContent=} opt_content Text caption or DOM structure to display as the content of the control.
 * @param {goog.ui.ControlRenderer=} opt_renderer Renderer used to render or decorate the button.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for document interaction.
 * @extends {zz.ui.mdl.controllers.BaseControl}
 * @constructor
 */
zz.ui.mdl.button.controllers.Button = function( opt_content, opt_renderer, opt_domHelper ){

    goog.base(

        this,
        opt_content,
        opt_renderer || zz.ui.mdl.button.views.Button.getInstance( ),
        opt_domHelper );

    this.setAutoStates( goog.ui.Component.State.ALL, false );

    this.setAutoStates( goog.ui.Component.State.ACTIVE, true );
    this.setAutoStates( goog.ui.Component.State.FOCUSED, true );
    this.setAutoStates( goog.ui.Component.State.DISABLED, true );

    this.setSupportedState( goog.ui.Component.State.ACTIVE, true );
    this.setSupportedState( goog.ui.Component.State.FOCUSED, true );
    this.setSupportedState( goog.ui.Component.State.DISABLED, true );

    this.setDispatchTransitionEvents( goog.ui.Component.State.ACTIVE, true );
    this.setDispatchTransitionEvents( goog.ui.Component.State.FOCUSED, true );
    this.setDispatchTransitionEvents( goog.ui.Component.State.DISABLED, true );
};
goog.inherits( zz.ui.mdl.button.controllers.Button, zz.ui.mdl.controllers.BaseControl );
goog.tagUnsealableClass( zz.ui.mdl.button.controllers.Button );



/**
 * Called when the component's element is known to be in the document. Anything using document.getElementById etc.
 * should be done at this stage. If the component contains child components, this call is propagated to its children.
 * @override
 */
zz.ui.mdl.button.controllers.Button.prototype.enterDocument = function( ){

    goog.base( this, 'enterDocument' );

    this.getHandler( ).listenWithScope(

        this.getElement( ), [

            goog.events.EventType.MOUSEUP,
            goog.events.EventType.MOUSELEAVE
        ],
        this.mouseListener_,
        false,
        this );

    if( goog.dom.classlist.contains( this.getElement( ), zz.ui.mdl.button.enums.CSS.RIPPLE_EFFECT ) ){

        var  ripple = new zz.ui.mdl.Ripple( );
        this.addChild( ripple, false );
        ripple.decorate(

            goog.dom.getElementByClass(

                zz.ui.mdl.button.enums.CSS.RIPPLE_CONTAINER,
                this.getElement( ) ) );
    }
};

/**
 * Deletes or nulls out any references to COM objects, DOM nodes, or other disposable objects. Classes that extend
 * {@code goog.Disposable} should override this method. Not reentrant. To avoid calling it twice, it must only be
 * called from the subclass' {@code disposeInternal} method. Everywhere else the public {@code dispose} method must
 * be used.
 * @inheritDoc
 **/
zz.ui.mdl.button.controllers.Button.prototype.disposeInternal = function( ){

    goog.base( this, 'disposeInternal' );

    this.getHandler( ).dispose( );
};

/**
 * Listener for element blur event.
 * @param {goog.events.BrowserEvent} event
 * @this {zz.ui.mdl.button.controllers.Button}
 * @private
 */
zz.ui.mdl.button.controllers.Button.prototype.mouseListener_ = function( event ){

    if( event ){

        this.getElement( ).blur( );
    }
};

/**
 * Attempts to handle a keyboard event; returns true if the event was handled, false otherwise.  Considered protected;
 * should only be used within this package and by subclasses.
 * @param {goog.events.KeyEvent} e Key event to handle.
 * @return {boolean} Whether the key event was handled.
 * @protected
 * @override
 */
zz.ui.mdl.button.controllers.Button.prototype.handleKeyEventInternal = function( e ){

    return ( e.keyCode == goog.events.KeyCodes.ENTER || e.keyCode == goog.events.KeyCodes.SPACE ) &&

        this.performActionInternal(e);
};

/**
 * Enable/disable button.
 * @param {boolean} enable
 */
zz.ui.mdl.button.controllers.Button.prototype.setEnabled = function( enable ){

    zz.ui.mdl.button.controllers.Button.superClass_.setEnabled.call( this, enable );
    this.getElement( ).disabled = !enable;
};
