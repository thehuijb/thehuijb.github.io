define(['jquery','enum/keycode'],function($,keycode){

	'use strict';

	/**
	 * Generic panel module, requires an element to attach to and an addition options object for configuration
	 * @param element
	 * @param options
	 */
	var exports = function(element,options) {

		// remember element
		this._element = element;
		this._options = options;

		// element clicked to trigger the panel
		this._trigger = null;

		// location
		this._hook = null;

		// when focussed moves the focus back to the panel
		this._focusLure = null;

		// listen to clicks on origin anchors
		var origins = document.querySelectorAll('a[href*=' + this._getId() + ']');
		for (var i=0;i<origins.length;i++) {
			origins[i].addEventListener('click',this._onClickOrigin.bind(this));
		}

		// decide what to do
		this._toggle(window.location.href);

		// listen to changes in url
		window.addEventListener('hashchange',this,false);
	};

	exports.prototype = {

		/**
		 * Routes various events to handle methods
		 * using handleEvents makes adding and removing events easier
		 * @param e
		 */
		handleEvent:function(e) {

			switch(e.type) {
			case 'focus':
				this._onFocusLure();
				break;
			case 'keydown':
				this._onKeyDown(e);
				break;
			case 'click':
				this._onClickDocument(e);
				break;
			case 'hashchange':
				this._onHashChange(e);
				break;
			default:
				break;
			}
		},

		/**
		 * Handles focus events on _lure element
		 * Used to keep focus on panel and loop it back to the top once it leaves the panel
		 * @private
		 */
		_onFocusLure:function() {

			// if lure is focused move focus to panel
			this._grabFocus();

		},

		/**
		 * Handles clicks on one of the origin elements
		 * @private
		 */
		_onClickOrigin:function(e) {
			e.stopPropagation();
			e.preventDefault();

			var target = $(e.target).parent('a');

			if (!target.context.hash) {
				return false;
			}

			this._toggle(this._getPlainUrl(window.location.href) + target.context.hash);

			return false;
		},

		/**
		 * Splits the url at the hash
		 * @param url
		 * @returns {*}
		 * @private
		 */
		_getPlainUrl:function(url) {
			return url ? url.split('#')[0] : '';
		},

		/**
		 * Handles key down events on document to allow escape key to close panel
		 * @param e
		 * @private
		 */
		_onKeyDown:function(e) {
			if (e.keyCode === keycode.ESCAPE) {
				this.close();
			}
		},

		/**
		 * Handles clicks on document to determine if someone clicked next to the panel to close it
		 * @param e
		 * @private
		 */
		_onClickDocument:function(e) {

			// get easier reference to target node
			var node = e.target;

			// if clicked directly on the panel no action is required
			if (node === this._element) {
				return;
			}

			// if clicked on close button the user intentions are clear and we can close the panel now
			if (node === this._element.querySelector('.back')) {
				e.preventDefault();
				this.close();
			}

			// traverse up the tree to test if element matches this element
			// if is match user clicked on the panel and not outside of it
			while (node) {
				node = node.parentNode;
				if (node === this._element) {
					return;
				}
			}

			// we  can conclude the user clicked outside of the panel, so let's close
			this.close();
		},

		/**
		 * Handles hash change events to toggle panels on and off on hash change
		 * @param e
		 * @private
		 */
		_onHashChange:function(e) {
			e.preventDefault();
			if (e.newURL) {
				this._toggle(e.newURL);
			}
			else { // e.newURL does not exist in IE
				this._toggle(document.location.hash);
			}
		},

		/**
		 * Returns the element id
		 * @returns {*}
		 * @private
		 */
		_getId:function() {
			return this._element.id;
		},

		/**
		 * Returns true if the url matches this panel id, used to see if this panel is currently targeted through the window location
		 * @param url
		 * @returns {boolean}
		 * @private
		 */
		_isMatch:function(url) {
			return url.split('#')[1] === this._getId();
		},

		/**
		 * Returns visibility state of the element, currently this is determined through the display property
		 * @returns {boolean}
		 * @private
		 */
		_isVisible:function() {
			return this._element.style.display !== 'none';
		},

		/**
		 * Moves the focus rectangle to the panel, when the panel is opened the user can continue tabbing through the page starting at the panel
		 * @private
		 */
		_grabFocus:function() {
			this._element.tabIndex = -1;
			this._element.focus();
		},

		/**
		 * Finds panel trigger and sets reference to the trigger, the panel trigger is the element pointing to the lightbox through the href="#___" attribute, if no trigger found trigger remains null
		 * @returns {*}
		 * @private
		 */
		_setTrigger:function() {

			if (!this._trigger) {
				this._trigger = document.querySelector('a[href="#' + this._getId() + '"]');
			}

			return this._trigger;
		},

		/**
		 * Toggles the panel based on the url parameter, if it's a match the panel is shown
		 * @param url
		 * @private
		 */
		_toggle:function(url) {

			this._hide();

			if (this._isMatch(url)) {
				this._show();
			}
		},

		/**
		 * Called before the panel is shown, used to add additional logic in subclasses
		 * @private
		 */
		_onBeforeShow:function() {
			// override in subclass
		},

		/**
		 * Called after the panel is shown, used to add additional logic in subclasses
		 * @private
		 */
		_onAfterShow:function() {
			// override in subclass
		},

		/**
		 * Called after the panel is hidden, used to add additional logic in subclasses
		 * @private
		 */
		_onAfterHide:function() {
			// override in subclass
		},

		/**
		 * Shows the panel
		 * @private
		 */
		_show:function() {

			// if already visible do nothing
			if (this._isVisible()) {
				return;
			}

			// find trigger
			this._setTrigger();

			// setup focus lure, used to grab focus and return focus to the panel
			this._focusLure = document.createElement('a');
			this._focusLure.tabIndex = 0;
			this._focusLure.addEventListener('focus',this,false);
			this._element.appendChild(this._focusLure);

			// remember original location in DOM
			this._hook = this._element.nextSibling;

			// move panel element to bottom of DOM for easier z-indexing
			var form = document.body.querySelector('form');
			if (form) {
				form.appendChild(this._element);
			} else {
				document.body.appendChild(this._element);
			}

			// show the panel
			this._element.className = 'panel';
			this._element.style.display = '';

			// show
			this._onBeforeShow();

			// listen to clicks on document to test if the panel needs to be closed
			document.addEventListener('click',this,false);

			// listen to keypress to make the panel close on ESC key press
			document.addEventListener('keydown',this,false);

			// move focus to the panel
			this._grabFocus();

			// after showing the panel
			this._onAfterShow();
		},

		/**
		 * Hides the panel
		 * @private
		 */
		_hide:function() {

			// hide the panel
			this._element.style.display = 'none';

			// move back to original location in DOM
			if (this._hook) {
				this._hook.parentNode.insertBefore(this._element,this._hook);
			}

			// stop listening to clicks outside the panel
			document.removeEventListener('click',this,false);

			// listen to keypress to close on escape key
			document.removeEventListener('keydown',this,false);

			// remove lure
			if (this._focusLure) {
				this._focusLure.removeEventListener('focus',this,false);
				this._focusLure.parentNode.removeChild(this._focusLure);
				this._focusLure = null;
			}

			// after hiding the panel
			this._onAfterHide();
		},

		/**
		 * @public
		 * Call this method to open the panel
		 */
		open:function() {

			// just show the panel
			if(!this._isVisible()) {
				this._show();
			}

		},

		/**
		 * @public
		 * Call this method to close the panel
		 */
		close:function() {

			// if already closed do nothing
			if (!this._isVisible()) {
				return;
			}

			// hide
			this._hide();

			// return focus to original trigger
			if (this._trigger) {
				this._trigger.focus();
			}
		}
	};

	return exports;

});