import React from 'react';

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M15.9999 5H19.4999L22.1999 9.7L16.9999 19L15.1499 15.9L18.6999 9.7L15.9999 5Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M8.99991 5H12.4999L15.1999 9.7L9.99991 19L8.1499 15.9L11.6999 9.7L8.99991 5Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M1.7998 5H5.2998L7.99982 9.8L6.2998 12.7L1.7998 5Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'TwoTone':
      return React.createElement(TwoTone, { color: color });
    default:
      return React.createElement(TwoTone, { color: color });
  }
};

var WingWingFlightAerodynamicsTransportationFreedomAviation = React.forwardRef(function(props, ref) {
  var variant = props.variant,
      color = props.color,
      size = props.size,
      rest = Object.assign({}, props);
  delete rest.variant;
  delete rest.color;
  delete rest.size;

  return React.createElement("svg", Object.assign({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color));
});

WingWingFlightAerodynamicsTransportationFreedomAviation.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
WingWingFlightAerodynamicsTransportationFreedomAviation.displayName = 'WingWingFlightAerodynamicsTransportationFreedomAviation';

export default WingWingFlightAerodynamicsTransportationFreedomAviation;
