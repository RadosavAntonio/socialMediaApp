import {Dimensions} from 'react-native';
// import {isString} from './lodash';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export const getWidthByRatio = (ratio: number) => screenWidth * ratio;
export const getHeightByRatio = (ratio: number) => screenHeight * ratio;
// on android window is without topBar and bottomBar, on iOS includes topBar
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
export const getWidthByWindowRatio = (ratio: number) => windowWidth * ratio;
export const getHeightByWindowRatio = (ratio: number) => windowHeight * ratio;

export const SCREEN_MARGIN_HORIZONTAL: number = 18;
