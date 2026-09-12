import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M6 9.33017V14.6702C6 17.9902 8.35 19.3402 11.22 17.6902L12.5 16.9502C12.81 16.7702 13 16.4402 13 16.0802V7.92017C13 7.56017 12.81 7.23017 12.5 7.05017L11.22 6.31017C8.35 4.66017 6 6.01017 6 9.33017Z"}),React.createElement("path", {"fill":"currentColor","d":"M14 8.78957V15.2196C14 15.6096 14.42 15.8496 14.75 15.6496L15.85 15.0096C18.72 13.3596 18.72 10.6396 15.85 8.98957L14.75 8.34957C14.42 8.15957 14 8.39957 14 8.78957Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M15.85 8.98968C18.72 10.6497 18.72 13.3597 15.85 15.0197L13.54 16.3597L11.23 17.6997C8.35 19.3397 6 17.9897 6 14.6697V11.9997V9.32968C6 6.01968 8.35 4.65968 11.22 6.31968","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M8.90991 19.9201L15.4299 13.4001C16.1999 12.6301 16.1999 11.3701 15.4299 10.6001L8.90991 4.08008","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M8.9101 20.6695C8.7201 20.6695 8.5301 20.5995 8.3801 20.4495C8.0901 20.1595 8.0901 19.6795 8.3801 19.3895L14.9001 12.8695C15.3801 12.3895 15.3801 11.6095 14.9001 11.1295L8.3801 4.60953C8.0901 4.31953 8.0901 3.83953 8.3801 3.54953C8.6701 3.25953 9.1501 3.25953 9.4401 3.54953L15.9601 10.0695C16.4701 10.5795 16.7601 11.2695 16.7601 11.9995C16.7601 12.7295 16.4801 13.4195 15.9601 13.9295L9.4401 20.4495C9.2901 20.5895 9.1001 20.6695 8.9101 20.6695Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Linear':
      return React.createElement(Linear, { color: color });
    case 'Bold':
      return React.createElement(Bold, { color: color });
    case 'Broken':
      return React.createElement(Broken, { color: color });
    case 'Outline':
      return React.createElement(Outline, { color: color });
    case 'TwoTone':
      return React.createElement(TwoTone, { color: color });
    default:
      return React.createElement(Linear, { color: color });
  }
};

var ArrowRight4 = React.forwardRef(function(props, ref) {
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

ArrowRight4.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowRight4.displayName = 'ArrowRight4';

export default ArrowRight4;
