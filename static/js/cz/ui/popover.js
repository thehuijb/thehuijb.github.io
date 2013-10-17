define(['jquery','ui/panel'],function($,_super){

	'use strict';

	/**
	 * Popover module
	 * Same as the panel module
	 */
	var exports = function(element,options) {

		_super.call(this,element,options);

		this._reposition();

	};

	exports.prototype = Object.create(_super.prototype);

	/**
	 * Routes events triggered by the popover
	 * @param e
	 */
	exports.prototype.handleEvent = function(e) {

		if (e.type === 'resize') {
			this._onResize();
		}

		_super.prototype.handleEvent.call(this,e);
	};

	/**
	 * Handles window resize event, the popover might need to be repositioned after a resize of the browser window
	 * @private
	 */
	exports.prototype._onResize = function() {
		this._reposition();
	};

	/**
	 * Repositions the element according to available real estate on the screen/window
	 * @private
	 */
	exports.prototype._reposition = function() {

		// if there's no trigger we can't do positioning
		if (!this._trigger) {
			return;
		}

		// get position
		var triggerRect = this._getBoundingClientRect(this._trigger),
			panelRect = this._getBoundingClientRect(this._element),
			scrollTop = $(document).scrollTop();

		// calculate new offset
		var offset = {
			'left':triggerRect.left + triggerRect.width + 15,
			'top':triggerRect.top + scrollTop - 15
		};

		var room = {
			'width':$(window).width(),
			'height':$(window).height() + scrollTop
		};

		var arrowClass = 'arrow-left';
		// test against screen width, moves popover on x axis to keep it on the screen
		if (offset.left + panelRect.width > room.width) {
			offset.left -= (offset.left + panelRect.width) - room.width;

			// move the ppover below the trigger
			offset.top += triggerRect.height + 30;
			arrowClass = 'arrow-top';
		}

		// test agains screen height, moves popover on y axis to keep it on the screen
		if (offset.top + panelRect.height > room.height) {
			offset.top -= (offset.top + panelRect.height) - room.height;
		}

		// update panel position
		$(this._element).offset(offset);
		$(this._element).addClass(arrowClass);
	};

	exports.prototype._getBoundingClientRect = function(el) {

		var box = el.getBoundingClientRect();

		if(typeof box.width !== 'number') {
			return {
				'top':box.top,
				'right':box.right,
				'bottom':box.bottom,
				'left':box.left,
				'width':box.right - box.left,
				'height':box.bottom - box.top
			};
		}

		return box;
	};

	/**
	 * Repositions the element right after it's display mode is set to block
	 * @private
	 */
	exports.prototype._onBeforeShow = function() {

		this._reposition();

	};

	/**
	 * Listen to resize events to reposition element when window size changes
	 * @private
	 */
	exports.prototype._onAfterShow = function() {

		window.addEventListener('resize',this,false);

	};

	/**
	 * Stop listening to resize events, no need to reposition the panel when it's invisible
	 * @private
	 */
	exports.prototype._onAfterHide = function() {

		window.removeEventListener('resize',this,false);

	};

	return exports;

});