import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.5 16.4C18.5 17.9 17.9 18.5 16.4 18.5H12.6C11.1 18.5 10.5 17.9 10.5 16.4V14.6C10.5 13.1 11.1 12.5 12.6 12.5H16.4C17.9 12.5 18.5 13.1 18.5 14.6V16.4Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12.6 18.5H16.4C17.9 18.5 18.5 17.9 18.5 16.4V14.6C18.5 13.1 17.9 12.5 16.4 12.5H12.6C11.1 12.5 10.5 13.1 10.5 14.6V16.4C10.5 17.9 11.1 18.5 12.6 18.5Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"}),React.createElement("path", {"d":"M12.6 18.5H16.4C17.9 18.5 18.5 17.9 18.5 16.4V14.6C18.5 13.1 17.9 12.5 16.4 12.5H12.6C11.1 12.5 10.5 13.1 10.5 14.6V16.4C10.5 17.9 11.1 18.5 12.6 18.5Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M12.6 18.5H16.4C17.9 18.5 18.5 17.9 18.5 16.4V14.6C18.5 13.1 17.9 12.5 16.4 12.5H12.6C11.1 12.5 10.5 13.1 10.5 14.6V16.4C10.5 17.9 11.1 18.5 12.6 18.5Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"}),React.createElement("path", {"d":"M16.4 19.25H12.6C10.68 19.25 9.75 18.32 9.75 16.4V14.6C9.75 12.68 10.68 11.75 12.6 11.75H16.4C18.32 11.75 19.25 12.68 19.25 14.6V16.4C19.25 18.32 18.32 19.25 16.4 19.25ZM12.6 13.25C11.52 13.25 11.25 13.52 11.25 14.6V16.4C11.25 17.48 11.52 17.75 12.6 17.75H16.4C17.48 17.75 17.75 17.48 17.75 16.4V14.6C17.75 13.52 17.48 13.25 16.4 13.25H12.6Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"opacity":"0.4","d":"M12.6 18.5H16.4C17.9 18.5 18.5 17.9 18.5 16.4V14.6C18.5 13.1 17.9 12.5 16.4 12.5H12.6C11.1 12.5 10.5 13.1 10.5 14.6V16.4C10.5 17.9 11.1 18.5 12.6 18.5Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var Screenmirroring = React.forwardRef(function(props, ref) {
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

Screenmirroring.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Screenmirroring.displayName = 'Screenmirroring';

export default Screenmirroring;
