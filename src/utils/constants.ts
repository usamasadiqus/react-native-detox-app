import {Dimensions, Platform} from 'react-native';

const {width, height, fontScale} = Dimensions.get('window');
const ISIOS: boolean = Platform.OS === 'ios';

const BEHAVIOR: Behavior = ISIOS ? 'padding' : 'height';

export {
  fontScale as FONTSCALE,
  height as HEIGHT,
  ISIOS,
  width as WIDTH,
  BEHAVIOR,
};
