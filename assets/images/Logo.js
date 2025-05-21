import * as React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';

const Logo = props => (
  <Svg
    width={props.width || 300}
    height={props.height || 210}
    viewBox="0 0 300 210"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Rect width={300} height={210} fill="url(#pattern0_797_3396)" />
    <Defs>
      <Pattern
        id="pattern0_797_3396"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use
          xlinkHref="#image0_797_3396"
          transform="scale(0.00333333 0.0047619)"
        />
      </Pattern>
      <Image
        id="image0_797_3396"
        width={300}
        height={210}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export default Logo;
