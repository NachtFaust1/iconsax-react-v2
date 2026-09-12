import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18Z"}),React.createElement("path", {"fill":"currentColor","d":"M18 22.75H6C5.59 22.75 5.25 22.41 5.25 22C5.25 21.59 5.59 21.25 6 21.25H18C18.41 21.25 18.75 21.59 18.75 22C18.75 22.41 18.41 22.75 18 22.75Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 2C16.42 2 20 5.58 20 10C20 14.42 16.42 18 12 18C7.58 18 4 14.42 4 10C4 7.29 5.34997 4.89001 7.40997 3.45001","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M16 22H18","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M6 22H13","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18Z"}),React.createElement("path", {"fill":"currentColor","d":"M18 22.75H6C5.59 22.75 5.25 22.41 5.25 22C5.25 21.59 5.59 21.25 6 21.25H18C18.41 21.25 18.75 21.59 18.75 22C18.75 22.41 18.41 22.75 18 22.75Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M6 22H18","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 18.75C7.17 18.75 3.25 14.82 3.25 10C3.25 5.18 7.17 1.25 12 1.25C16.83 1.25 20.75 5.18 20.75 10C20.75 14.82 16.83 18.75 12 18.75ZM12 2.75C8 2.75 4.75 6 4.75 10C4.75 14 8 17.25 12 17.25C16 17.25 19.25 14 19.25 10C19.25 6 16 2.75 12 2.75Z"}),React.createElement("path", {"fill":"currentColor","d":"M18 22.75H6C5.59 22.75 5.25 22.41 5.25 22C5.25 21.59 5.59 21.25 6 21.25H18C18.41 21.25 18.75 21.59 18.75 22C18.75 22.41 18.41 22.75 18 22.75Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M6 22H18","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var Mirror = React.forwardRef(function(props, ref) {
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

Mirror.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Mirror.displayName = 'Mirror';

export default Mirror;
