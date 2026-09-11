import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M21.2899 17.0198L19.5499 13.5398C19.0699 12.5698 19.0699 11.4398 19.5499 10.4698L21.2899 6.98983C22.7799 3.99983 19.5699 0.859829 16.6199 2.41983L15.0799 3.23983C14.8699 3.34983 14.6999 3.52983 14.5999 3.74983L8.89993 16.3898C8.66993 16.9098 8.87993 17.5198 9.37993 17.7798L16.6199 21.5898C19.5699 23.1498 22.7799 19.9998 21.2899 17.0198Z"}),React.createElement("path", {"d":"M7.69002 15.6004L11.42 7.32045C11.84 6.39045 10.84 5.45045 9.94002 5.93045L4.17002 8.96045C1.72002 10.2504 1.72002 13.7504 4.17002 15.0404L6.21002 16.1104C6.76002 16.4004 7.43002 16.1704 7.69002 15.6004Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M16.3 3.06931C19.05 1.61931 22.04 4.54931 20.65 7.32931L19.03 10.5693C18.58 11.4693 18.58 12.5293 19.03 13.4293L20.65 16.6693C22.04 19.4493 19.05 22.3693 16.3 20.9293L4.71 14.8293C2.43 13.6293 2.43 10.3693 4.71 9.16931L11.68 5.49931","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M21.2902 17.0198L19.5502 13.5398C19.0702 12.5698 19.0702 11.4398 19.5502 10.4698L21.2902 6.98983C22.7802 3.99983 19.5702 0.859829 16.6202 2.41983L15.0802 3.23983C14.8702 3.34983 14.7002 3.52983 14.6002 3.74983L8.90017 16.3898C8.67017 16.9098 8.88017 17.5198 9.38017 17.7798L16.6202 21.5898C19.5702 23.1498 22.7802 19.9998 21.2902 17.0198Z"}),React.createElement("path", {"opacity":"0.4","d":"M7.69002 15.6004L11.42 7.32045C11.84 6.39045 10.84 5.45045 9.94002 5.93045L4.17002 8.96045C1.72002 10.2504 1.72002 13.7504 4.17002 15.0404L6.21002 16.1104C6.76002 16.4004 7.43002 16.1704 7.69002 15.6004Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M4.71 9.16931L16.3 3.06931C19.05 1.61931 22.04 4.54931 20.65 7.32931L19.03 10.5693C18.58 11.4693 18.58 12.5293 19.03 13.4293L20.65 16.6693C22.04 19.4493 19.05 22.3693 16.3 20.9293L4.71 14.8293C2.43 13.6293 2.43 10.3693 4.71 9.16931Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M17.81 22.0594C17.18 22.0594 16.55 21.9094 15.95 21.5894L4.36 15.4894C3.06 14.8094 2.25 13.4694 2.25 11.9994C2.25 10.5294 3.06 9.18939 4.36 8.50939L15.95 2.40939C17.5 1.59939 19.3 1.85939 20.55 3.07939C21.8 4.29939 22.1 6.09939 21.32 7.65939L19.7 10.8994C19.36 11.5794 19.36 12.3994 19.7 13.0894L21.32 16.3294C22.1 17.8894 21.8 19.6894 20.55 20.9094C19.78 21.6694 18.81 22.0594 17.81 22.0594ZM17.8 3.43939C17.44 3.43939 17.05 3.52939 16.65 3.73939L5.06 9.83939C4.24 10.2694 3.75 11.0794 3.75 11.9994C3.75 12.9194 4.24 13.7294 5.06 14.1594L16.65 20.2594C17.81 20.8694 18.89 20.4494 19.5 19.8394C20.12 19.2394 20.56 18.1694 19.98 16.9994L18.36 13.7594C17.81 12.6494 17.81 11.3394 18.36 10.2294L19.98 6.98939C20.57 5.81939 20.12 4.74939 19.5 4.14939C19.1 3.75939 18.5 3.43939 17.8 3.43939Z"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Linear':
      return React.createElement(Linear, { color: color });
    case 'Bold':
      return React.createElement(Bold, { color: color });
    case 'Broken':
      return React.createElement(Broken, { color: color });
    case 'Bulk':
      return React.createElement(Bulk, { color: color });
    case 'Outline':
      return React.createElement(Outline, { color: color });
    default:
      return React.createElement(Linear, { color: color });
  }
};

var DirectLeft = React.forwardRef(function(props, ref) {
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

DirectLeft.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
DirectLeft.displayName = 'DirectLeft';

export default DirectLeft;
