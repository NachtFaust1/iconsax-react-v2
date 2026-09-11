import React from 'react';

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 18.1004C11.3 18.1004 10.7 17.5004 10.7 16.8004V7.20039C10.7 6.50039 11.3 5.90039 12 5.90039C12.7 5.90039 13.3 6.50039 13.3 7.20039V16.9004C13.3 17.6004 12.7 18.1004 12 18.1004Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10"}),React.createElement("path", {"d":"M6.69996 8.89955C6.99996 8.29955 7.79996 8.09955 8.49996 8.39955L16.9 13.1995C17.5 13.5995 17.7 14.3995 17.4 14.9995C17 15.5995 16.2 15.7995 15.6 15.4995L7.19996 10.6995C6.49996 10.3995 6.29996 9.59955 6.69996 8.89955Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10"}),React.createElement("path", {"d":"M6.69995 15.1005C6.29995 14.5005 6.59995 13.7005 7.19995 13.3005L15.6 8.50049C16.2 8.10049 17 8.40049 17.4 9.00049C17.8 9.60049 17.5 10.4005 16.9 10.8005L8.49995 15.6005C7.79995 15.9005 6.99995 15.7005 6.69995 15.1005Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10"}),React.createElement("path", {"d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Linear':
      return React.createElement(Linear, { color: color });
    default:
      return React.createElement(Linear, { color: color });
  }
};

var DentDentalCareToothHealthHygieneCheckup = React.forwardRef(function(props, ref) {
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

DentDentalCareToothHealthHygieneCheckup.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
DentDentalCareToothHealthHygieneCheckup.displayName = 'DentDentalCareToothHealthHygieneCheckup';

export default DentDentalCareToothHealthHygieneCheckup;
