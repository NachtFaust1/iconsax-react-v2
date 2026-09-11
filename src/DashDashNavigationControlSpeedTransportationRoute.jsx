import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M7.11994 3.5H15.9999C19.9999 3.5 21.9999 6 21.9999 9.5V12C21.9999 17 18.9999 20.5 13.4999 20.5H3.93994L4.99994 16.25H12.4399C15.9999 16.25 17.7499 14 17.7499 10.94V10.75C17.7499 9 16.9999 7.75 14.7499 7.75H6.05994L7.11994 3.5Z"}),React.createElement("path", {"d":"M12.41 10.2305H4.70001C3.62001 10.2305 2.68001 10.9705 2.41001 12.0105L2.16001 13.0305C2.07001 13.4005 2.35001 13.7605 2.73001 13.7605H10.44C11.52 13.7605 12.46 13.0205 12.73 11.9805L12.98 10.9605C13.08 10.5905 12.79 10.2305 12.41 10.2305Z"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Bold':
      return React.createElement(Bold, { color: color });
    default:
      return React.createElement(Bold, { color: color });
  }
};

var DashDashNavigationControlSpeedTransportationRoute = React.forwardRef(function(props, ref) {
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

DashDashNavigationControlSpeedTransportationRoute.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
DashDashNavigationControlSpeedTransportationRoute.displayName = 'DashDashNavigationControlSpeedTransportationRoute';

export default DashDashNavigationControlSpeedTransportationRoute;
