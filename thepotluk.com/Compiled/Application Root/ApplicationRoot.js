'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApplicationRoot = function (_JABApplicationRoot) {
	_inherits(ApplicationRoot, _JABApplicationRoot);

	function ApplicationRoot(customId) {
		_classCallCheck(this, ApplicationRoot);

		// State

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ApplicationRoot).call(this, customId));

		_this.laboratoryEnabled = false;

		// Parameters
		_this.textColor = '#999999';

		_this.parameters = {
			heightOfTitleBar: 100,
			topBufferForTitleLabel: 50,

			sizeOfIconView: 60,
			topBufferForIconView: 200,

			topBufferForComingSoonLabel: 50
		};

		// UI
		if (_this.laboratoryEnabled) {
			// this.laboratory = new Laboratory('Laboratory')
		} else {

			_this.titleBar = new JABView('TitleBar');
			_this.titleLabel = new UILabel('TitleLabel');
			_this.iconView = new JABImageView('IconView');
			_this.comingSoonLabel = new UILabel('ComingSoonLabel');
		}

		return _this;
	}

	//
	// Init
	//

	_createClass(ApplicationRoot, [{
		key: 'init',
		value: function init() {
			_get(Object.getPrototypeOf(ApplicationRoot.prototype), 'init', this).call(this);

			// this.getCoreImages()
		}

		//
		// Getters and Setters
		//

	}, {
		key: 'addAllUI',


		//
		// UI
		//

		// Add
		value: function addAllUI() {

			if (this.laboratoryEnabled) {
				this.addLaboratory();
			} else {

				this.addTitleBar();
				this.addTitleLabel();
				this.addIconView();
				this.addComingSoonLabel();
			}
		}
	}, {
		key: 'addTitleBar',
		value: function addTitleBar() {
			this.addSubview(this.titleBar);
		}
	}, {
		key: 'addTitleLabel',
		value: function addTitleLabel() {
			this.addSubview(this.titleLabel);
		}
	}, {
		key: 'addIconView',
		value: function addIconView() {
			this.addSubview(this.iconView);
		}
	}, {
		key: 'addComingSoonLabel',
		value: function addComingSoonLabel() {
			this.addSubview(this.comingSoonLabel);
		}
	}, {
		key: 'addLaboratory',
		value: function addLaboratory() {
			this.addSubview(this.laboratory);
		}

		// Update

	}, {
		key: 'updateAllUI',
		value: function updateAllUI() {
			_get(Object.getPrototypeOf(ApplicationRoot.prototype), 'updateAllUI', this).call(this);

			if (this.laboratoryEnabled) {
				this.configureLaboratory();
				this.positionLaboratory();
			} else {

				this.configureTitleBar();
				this.positionTitleBar();

				this.configureTitleLabel();
				this.positionTitleLabel();

				this.configureIconView();
				this.positionIconView();

				this.configureComingSoonLabel();
				this.positionComingSoonLabel();
			}
		}

		// Title Bar

	}, {
		key: 'configureTitleBar',
		value: function configureTitleBar() {

			var view = this.titleBar;

			view.backgroundColor = '#0d8bf5';
		}
	}, {
		key: 'positionTitleBar',
		value: function positionTitleBar() {

			var view = this.titleBar;
			var newFrame = new CGRect();

			newFrame.size.width = this.width;
			newFrame.size.height = this.parameters.heightOfTitleBar;

			newFrame.origin.x = (this.width - newFrame.size.width) / 2;
			newFrame.origin.y = 0;

			view.frame = newFrame;
		}

		// Title Label

	}, {
		key: 'configureTitleLabel',
		value: function configureTitleLabel() {

			var view = this.titleLabel;

			view.text = 'The PotLuk';
			view.textColor = 'white';
			view.fontSize = 46;
			view.fontFamily = 'Ubuntu';
		}
	}, {
		key: 'positionTitleLabel',
		value: function positionTitleLabel() {

			var view = this.titleLabel;
			var newFrame = new CGRect();
			var size = view.font.sizeOfString(view.text);

			newFrame.size.width = size.width;
			newFrame.size.height = size.height;

			newFrame.origin.x = (this.width - newFrame.size.width) / 2;
			newFrame.origin.y = (this.parameters.heightOfTitleBar - newFrame.size.height) / 2;

			view.frame = newFrame;
		}

		// Icon View

	}, {
		key: 'configureIconView',
		value: function configureIconView() {

			var view = this.iconView;

			view.src = '/Resources/Images/Coming Soon Page/Touch ID Icon.png';
		}
	}, {
		key: 'positionIconView',
		value: function positionIconView() {

			var view = this.iconView;
			var newFrame = new CGRect();

			newFrame.size.width = this.parameters.sizeOfIconView;
			newFrame.size.height = newFrame.size.width;

			newFrame.origin.x = (this.width - newFrame.size.width) / 2;
			newFrame.origin.y = this.titleBar.bottom + this.parameters.topBufferForIconView;

			view.frame = newFrame;
		}

		// Coming Soon Label

	}, {
		key: 'configureComingSoonLabel',
		value: function configureComingSoonLabel() {

			var view = this.comingSoonLabel;

			view.text = 'Get Ready...';
			view.fontFamily = 'Ubuntu';
			view.fontWeight = 'bold';
			view.fontSize = 20;
			view.textColor = this.textColor;
			view.textAlign = 'center';
		}
	}, {
		key: 'positionComingSoonLabel',
		value: function positionComingSoonLabel() {

			var view = this.comingSoonLabel;
			var newFrame = new CGRect();

			newFrame.size.width = 130;
			newFrame.size.height = 100;

			newFrame.origin.x = (this.width - newFrame.size.width) / 2;
			newFrame.origin.y = this.iconView.bottom + this.parameters.topBufferForComingSoonLabel;

			view.frame = newFrame;
		}

		// Laboratory

	}, {
		key: 'configureLaboratory',
		value: function configureLaboratory() {

			this.laboratory.backgroundColor = 'white';
		}
	}, {
		key: 'positionLaboratory',
		value: function positionLaboratory() {
			if (this.laboratoryEnabled) {
				var newFrame = new CGRect();

				newFrame.size.width = this.width;
				newFrame.size.height = this.height;

				newFrame.origin.x = 0;
				newFrame.origin.y = 0;

				this.laboratory.frame = newFrame;
			} else {
				var newFrame = new CGRect();

				newFrame.size.width = 0;
				newFrame.size.height = 0;

				newFrame.origin.x = 0;
				newFrame.origin.y = 0;

				this.laboratory.frame = newFrame;
			}
		}

		//
		// Actions
		//

		// Scrolling

	}, {
		key: 'userDidScrollByAmount',
		value: function userDidScrollByAmount(amount) {

			if (this.websiteClosed) {
				if (amount < 0) {
					this.openWebsite();
				}
			} else {
				if (amount > 0) {
					if (this.mainSector.readyToClose) {
						this.closeWebsite();
					}
				}
			}
		}

		// Swipe

	}, {
		key: 'leftSwipeDetected',
		value: function leftSwipeDetected() {
			this.mainSector.leftSwipeDetected();
		}
	}, {
		key: 'rightSwipeDetected',
		value: function rightSwipeDetected() {
			this.mainSector.rightSwipeDetected();
		}
	}, {
		key: 'upSwipeDetected',
		value: function upSwipeDetected() {
			if (this.websiteClosed) {
				this.openWebsite();
			}
		}
	}, {
		key: 'downSwipeDetected',
		value: function downSwipeDetected() {}

		// Keys

	}, {
		key: 'spaceBarWasPressed',
		value: function spaceBarWasPressed() {
			if (!this.websiteClosed) {
				this.mainSector.spaceBarWasPressed();
			}
		}
	}, {
		key: 'leftArrowWasPressed',
		value: function leftArrowWasPressed() {
			if (!this.websiteClosed) {
				this.mainSector.leftArrowWasPressed();
			}
		}
	}, {
		key: 'upArrowWasPressed',
		value: function upArrowWasPressed() {
			if (!this.websiteClosed) {
				if (this.mainSector.state.pageIndex == 0 || this.mainSector.state.pageIndex == 2) {
					this.closeWebsite();
				} else {
					this.mainSector.upArrowWasPressed();
				}
			}
		}
	}, {
		key: 'rightArrowWasPressed',
		value: function rightArrowWasPressed() {
			if (!this.websiteClosed) {
				this.mainSector.rightArrowWasPressed();
			}
		}
	}, {
		key: 'downArrowWasPressed',
		value: function downArrowWasPressed() {
			if (!this.websiteClosed) {
				this.mainSector.downArrowWasPressed();
			} else {
				this.openWebsite();
			}
		}

		//
		// Delegate
		//

		// JABImageView

	}, {
		key: 'imageViewDidFinishLoadingImage',
		value: function imageViewDidFinishLoadingImage(imageView) {}
	}, {
		key: 'contentWidth',
		get: function get() {
			if (sizeClass == 'xxs' || sizeClass == 'xs') {
				return this.width;
			} else {
				return this._contentWidth[sizeClass];
			}
		},
		set: function set(newContentWidth) {
			this._contentWidth = newContentWidth;
		}
	}]);

	return ApplicationRoot;
}(JABApplicationRoot);