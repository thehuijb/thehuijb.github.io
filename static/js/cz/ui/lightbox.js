define(['ui/panel'],function(_super){

	'use strict';

	/**
	 * Lightbox module
	 * The same as the panel constructor but ads the private overlay property.
	 */
	var exports = function(element,options) {

		this._overlay = null;

		_super.call(this,element,options);

	};

	/**
	 * Inherits from the ui/panel module
	 */
	exports.prototype = Object.create(_super.prototype);

	/**
	 * Used to render the overlay after the panel has been shown
	 * @private
	 */
	exports.prototype._onAfterShow = function() {

		if (this._overlay) {
			return;
		}

		// creates overlay element which greys out the page
		this._overlay = document.createElement('div');
		this._overlay.className = 'overlay';
		document.body.appendChild(this._overlay);
	};

	/**
	 * Used to hide the overlay after the panel has been hidden
	 * @private
	 */
	exports.prototype._onAfterHide = function() {

		if (!this._overlay) {
			return;
		}

		this._overlay.parentNode.removeChild(this._overlay);
		this._overlay = null;
	};

	return exports;

});