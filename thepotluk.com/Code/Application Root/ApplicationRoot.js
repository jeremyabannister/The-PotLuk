// Test


class ApplicationRoot extends JABApplicationRoot {

	constructor (customId) {

		super(customId)

		// State
		this.laboratoryEnabled = false
		
		
		// Parameters
		this.textColor = '#999999'
		
		this.parameters = {
			heightOfTitleBar: 100,
			topBufferForTitleLabel: 50,
			
			sizeOfIconView: 60,
			topBufferForIconView: 200,
			
			topBufferForComingSoonLabel: 50,
		}
		
		// UI
		if (this.laboratoryEnabled) {
			// this.laboratory = new Laboratory('Laboratory')
		} else {
			
			this.titleBar = new JABView('TitleBar')
			this.titleLabel = new UILabel('TitleLabel')
			this.iconView = new JABImageView('IconView')
			this.comingSoonLabel = new UILabel('ComingSoonLabel')
		}
		
	}
	
	//
	// Init
	//
	
	init () {
		super.init()
		
		// this.getCoreImages()
	}
	
	
	//
	// Getters and Setters
	//
	
	get contentWidth () {
		if (sizeClass == 'xxs' || sizeClass == 'xs') {
			return this.width
		} else {
			return this._contentWidth[sizeClass]
		}
	}
	
	set contentWidth (newContentWidth) {
		this._contentWidth = newContentWidth
	}
	
	
	
	//
	// UI
	//
	
	// Add
	addAllUI () {
		
		if (this.laboratoryEnabled) {
			this.addLaboratory()
		} else {
			
			this.addTitleBar()
			this.addTitleLabel()
			this.addIconView()
			this.addComingSoonLabel()
		}
		
	}
	
	
	addTitleBar () {
		this.addSubview(this.titleBar)
	}
	
	addTitleLabel () {
		this.addSubview(this.titleLabel)
	}
	
	addIconView () {
		this.addSubview(this.iconView)
	}
	
	addComingSoonLabel () {
		this.addSubview(this.comingSoonLabel)
	}
	
	
	
	
	
	
	addLaboratory () {
		this.addSubview(this.laboratory)
	}
	
	
	


	// Update

	updateAllUI () {
		super.updateAllUI()


		if (this.laboratoryEnabled) {
			this.configureLaboratory()
			this.positionLaboratory()
		} else {
			
			
			
			this.configureTitleBar()
			this.positionTitleBar()
			
			this.configureTitleLabel()
			this.positionTitleLabel()
			
			this.configureIconView()
			this.positionIconView()
			
			this.configureComingSoonLabel()
			this.positionComingSoonLabel()
			
		}

	}



	
	
	// Title Bar
	configureTitleBar () {
		
		var view = this.titleBar
		
		view.backgroundColor = '#0d8bf5'
	}
	
	positionTitleBar () {
		
		var view = this.titleBar
		var newFrame = new CGRect()
							
		newFrame.size.width = this.width
		newFrame.size.height = this.parameters.heightOfTitleBar

		newFrame.origin.x = (this.width - newFrame.size.width)/2
		newFrame.origin.y = 0
							
		view.frame = newFrame
		
	}
	
	// Title Label
	configureTitleLabel () {
		
		var view = this.titleLabel
		
		view.text = 'The PotLuk'
		view.textColor = 'white'
		view.fontSize = 46
		view.fontFamily = 'Ubuntu'
	}
	
	positionTitleLabel () {
		
		var view = this.titleLabel
		var newFrame = new CGRect()
		var size = view.font.sizeOfString(view.text)
							
		newFrame.size.width = size.width
		newFrame.size.height = size.height

		newFrame.origin.x = (this.width - newFrame.size.width)/2
		newFrame.origin.y = (this.parameters.heightOfTitleBar - newFrame.size.height)/2
							
		view.frame = newFrame
	}
	
	
	// Icon View
	configureIconView () {
		
		var view = this.iconView
		
		view.src = '/Resources/Images/Coming Soon Page/Touch ID Icon.png'
	}
	
	positionIconView () {
		
		var view = this.iconView
		var newFrame = new CGRect()
							
		newFrame.size.width = this.parameters.sizeOfIconView
		newFrame.size.height = newFrame.size.width

		newFrame.origin.x = (this.width - newFrame.size.width)/2
		newFrame.origin.y = this.titleBar.bottom + this.parameters.topBufferForIconView
							
		view.frame = newFrame
		
	}
	


	// Coming Soon Label
	configureComingSoonLabel () {
		
		var view = this.comingSoonLabel
		
		view.text = 'Get Ready...'
		view.fontFamily = 'Ubuntu'
		view.fontWeight = 'bold'
		view.fontSize = 20
		view.textColor = this.textColor
		view.textAlign = 'center'
		
	}
	
	positionComingSoonLabel () {
		
		var view = this.comingSoonLabel
		var newFrame = new CGRect()
							
		newFrame.size.width = 130
		newFrame.size.height = 100

		newFrame.origin.x = (this.width - newFrame.size.width)/2
		newFrame.origin.y = this.iconView.bottom + this.parameters.topBufferForComingSoonLabel
							
		view.frame = newFrame
	}
	
	
	
	
	
	
	



	// Laboratory
	configureLaboratory () {

		this.laboratory.backgroundColor = 'white'
	}

	positionLaboratory () {
		if (this.laboratoryEnabled) {
			var newFrame = new CGRect()

			newFrame.size.width = this.width
			newFrame.size.height = this.height

			newFrame.origin.x = 0
			newFrame.origin.y = 0

			this.laboratory.frame = newFrame

		} else {
			var newFrame = new CGRect()

			newFrame.size.width = 0
			newFrame.size.height = 0

			newFrame.origin.x = 0
			newFrame.origin.y = 0

			this.laboratory.frame = newFrame
		}
	}


	//
	// Actions
	//
	

	// Scrolling
	userDidScrollByAmount (amount) {

		if (this.websiteClosed) {
			if (amount < 0) {
				this.openWebsite()
			}
		} else {
			if (amount > 0) {
				if (this.mainSector.readyToClose) {
					this.closeWebsite()
				}
			}
		}
		
	}
	
	
	// Swipe
	leftSwipeDetected () {
		this.mainSector.leftSwipeDetected()
	}
	
	rightSwipeDetected () {
		this.mainSector.rightSwipeDetected()
	}
	
	upSwipeDetected () {
		if (this.websiteClosed) {
			this.openWebsite()
		}
	}
	
	downSwipeDetected () {
		
	}
	
	
	// Keys
	spaceBarWasPressed () {
		if (!this.websiteClosed) {
			this.mainSector.spaceBarWasPressed()
		}
	}
	
	
	leftArrowWasPressed () {
		if (!this.websiteClosed) {
			this.mainSector.leftArrowWasPressed()
		}
	}
	
	upArrowWasPressed () {
		if (!this.websiteClosed) {
			if (this.mainSector.state.pageIndex == 0 || this.mainSector.state.pageIndex == 2) {
				this.closeWebsite()
			} else {
				this.mainSector.upArrowWasPressed()
			}
		}
	}
	
	rightArrowWasPressed () {
		if (!this.websiteClosed) {
			this.mainSector.rightArrowWasPressed()
		}
	}
	
	downArrowWasPressed () {
		if (!this.websiteClosed) {
			this.mainSector.downArrowWasPressed()
		} else {
			this.openWebsite()
		}
	}
	
	
	
	
	
	
	
	//
	// Delegate
	//
	
	
	// JABImageView
	imageViewDidFinishLoadingImage (imageView) {
		
	}

}
