import React from 'react';

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M18.6701 8.67V10.79H14.2201V8.67C14.2201 7.44 13.2201 6.44 12.0001 6.44C10.7801 6.44 9.78008 7.44 9.78008 8.67C9.78008 9.9 8.78008 10.89 7.56008 10.89C6.34008 10.89 5.33008 9.89 5.33008 8.67C5.33008 5 8.33008 2 12.0001 2C15.6701 2 18.6701 5 18.6701 8.67Z"}),React.createElement("path", {"opacity":"0.4","d":"M18.6697 10.79V19.78C18.6697 21 17.6697 22 16.4397 22C15.2097 22 14.2197 21 14.2197 19.78V10.79H18.6697Z"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Bulk':
      return React.createElement(Bulk, { color: color });
    default:
      return React.createElement(Bulk, { color: color });
  }
};

var CandyCane42 = React.forwardRef(function(props, ref) {
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

CandyCane42.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
CandyCane42.displayName = 'CandyCane42';

export default CandyCane42;
