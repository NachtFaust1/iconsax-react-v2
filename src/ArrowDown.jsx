import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 13.03L12.53 16.03C12.38 16.18 12.19 16.25 12 16.25C11.81 16.25 11.62 16.18 11.47 16.03L8.47 13.03C8.18 12.74 8.18 12.26 8.47 11.97C8.76 11.68 9.24 11.68 9.53 11.97L11.25 13.69V8.5C11.25 8.09 11.59 7.75 12 7.75C12.41 7.75 12.75 8.09 12.75 8.5V13.69L14.47 11.97C14.76 11.68 15.24 11.68 15.53 11.97C15.82 12.26 15.82 12.74 15.53 13.03Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M18.0701 14.4297L12.0001 20.4997L5.93005 14.4297","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12 12V20.33","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12 3.5V8.03","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"}),React.createElement("path", {"fill":"currentColor","d":"M15.53 11.97C15.24 11.68 14.76 11.68 14.47 11.97L12.75 13.69V8.5C12.75 8.09 12.41 7.75 12 7.75C11.59 7.75 11.25 8.09 11.25 8.5V13.69L9.53 11.97C9.24 11.68 8.76 11.68 8.47 11.97C8.18 12.26 8.18 12.74 8.47 13.03L11.47 16.03C11.62 16.18 11.81 16.25 12 16.25C12.19 16.25 12.38 16.18 12.53 16.03L15.53 13.03C15.82 12.74 15.82 12.26 15.53 11.97Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M18.0699 14.4297L11.9999 20.4997L5.92993 14.4297","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12 3.5V20.33","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 21.2501C11.81 21.2501 11.62 21.1801 11.47 21.0301L5.4 14.9601C5.11 14.6701 5.11 14.1901 5.4 13.9001C5.69 13.6101 6.17 13.6101 6.46 13.9001L12 19.4401L17.54 13.9001C17.83 13.6101 18.31 13.6101 18.6 13.9001C18.89 14.1901 18.89 14.6701 18.6 14.9601L12.53 21.0301C12.38 21.1801 12.19 21.2501 12 21.2501Z"}),React.createElement("path", {"fill":"currentColor","d":"M12 21.08C11.59 21.08 11.25 20.74 11.25 20.33V3.5C11.25 3.09 11.59 2.75 12 2.75C12.41 2.75 12.75 3.09 12.75 3.5V20.33C12.75 20.74 12.41 21.08 12 21.08Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M18.07 14.4297L12 20.4997L5.92999 14.4297","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M12 3.5V20.33","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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
    case 'TwoTone':
      return React.createElement(TwoTone, { color: color });
    default:
      return React.createElement(Linear, { color: color });
  }
};

var ArrowDown = React.forwardRef(function(props, ref) {
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

ArrowDown.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowDown.displayName = 'ArrowDown';

export default ArrowDown;
