import React from 'react';

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M10.0001 20.9996L7.56006 18.6595L15.5101 18.6796C19.0801 18.6796 22.0101 15.7495 22.0101 12.1595C22.0101 10.3695 21.2801 8.73957 20.1001 7.55957","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M9 12H15","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.56006 4.98047C4.99006 4.98047 2.06006 7.91049 2.06006 11.5005C2.06006 13.2905 2.79006 14.9205 3.97006 16.1005","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M14.0602 2.66016L16.5002 5.00018L12.9902 4.99017","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M3.66 16.9314C3.47 16.9314 3.28 16.8614 3.13 16.7114C1.76 15.3314 1 13.5114 1 11.5814C1 7.57141 4.25 4.31139 8.25 4.31139L14.32 4.33141L13.23 3.29137C12.93 3.00137 12.92 2.53137 13.21 2.23137C13.5 1.93137 13.97 1.92141 14.27 2.21141L16.71 4.55138C16.93 4.76138 17 5.09139 16.89 5.37139C16.78 5.65139 16.5 5.84142 16.19 5.84142L8.24001 5.8214C5.07001 5.8214 2.49001 8.41142 2.49001 11.5914C2.49001 13.1214 3.08999 14.5714 4.17999 15.6614C4.46999 15.9514 4.46999 16.4314 4.17999 16.7214C4.03999 16.8614 3.85 16.9314 3.66 16.9314Z"}),React.createElement("path", {"opacity":"0.4","d":"M9.7499 21.5009C9.5599 21.5009 9.3799 21.4309 9.2299 21.2909L6.7899 18.951C6.5699 18.741 6.4999 18.411 6.6099 18.131C6.7199 17.851 6.9999 17.6609 7.3099 17.6609L15.2599 17.6809C18.4299 17.6809 21.0099 15.0909 21.0099 11.9109C21.0099 10.3809 20.4099 8.93097 19.3199 7.84097C19.0299 7.55097 19.0299 7.07098 19.3199 6.78098C19.6099 6.49098 20.0899 6.49098 20.3799 6.78098C21.7499 8.16098 22.5099 9.98092 22.5099 11.9109C22.5099 15.9209 19.2599 19.1809 15.2599 19.1809L9.1899 19.1609L10.2799 20.201C10.5799 20.491 10.5899 20.961 10.2999 21.261C10.1399 21.421 9.9499 21.5009 9.7499 21.5009Z"}),React.createElement("path", {"d":"M9 15.5H15C16.93 15.5 18.5 13.92 18.5 12C18.5 10.08 16.93 8.5 15 8.5H9C7.07 8.5 5.5 10.08 5.5 12C5.5 13.92 7.07 15.5 9 15.5Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M14 3L16.44 5.34003L8.48999 5.32001C4.91999 5.32001 1.98999 8.25003 1.98999 11.84C1.98999 13.63 2.71998 15.26 3.89998 16.44","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M10.0001 20.9996L7.56006 18.6595L15.5101 18.6796C19.0801 18.6796 22.0101 15.7495 22.0101 12.1595C22.0101 10.3695 21.2801 8.73957 20.1001 7.55957","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M9 12H15","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Linear':
      return React.createElement(Linear, { color: color });
    case 'Broken':
      return React.createElement(Broken, { color: color });
    case 'Bulk':
      return React.createElement(Bulk, { color: color });
    default:
      return React.createElement(Linear, { color: color });
  }
};

var RepeatMusic = React.forwardRef(function(props, ref) {
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

RepeatMusic.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
RepeatMusic.displayName = 'RepeatMusic';

export default RepeatMusic;
