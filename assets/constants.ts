import {Dimensions} from 'react-native'

// COMPUTATION
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen')

export const getWidthByRatio = (ratio: number) => screenWidth * ratio
export const getHeightByRatio = (ratio: number) => screenHeight * ratio
// on android window is without topBar and bottomBar, on iOS includes topBar
const {width: windowWidth, height: windowHeight} = Dimensions.get('window')
export const getWidthByWindowRatio = (ratio: number) => windowWidth * ratio
export const getHeightByWindowRatio = (ratio: number) => windowHeight * ratio

// GENERAL
export const SPACE = {
  24: 24,
  18: 18,
  12: 12,
  8: 8,
  4: 4,
}

export const BORDER_ROUND = {
  circle: 1000,
  12: 12,
}

export const SCREEN_MARGIN_HORIZONTAL: number = SPACE[18]


// FRIENDS
export const FRIENDS_LIST_HEIGHT: number = 85
export const FRIENDS_IMAGE_CONTAINER: number = 65
