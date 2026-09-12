import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M3 8.17945V15.8295C3 16.4795 3.46 17.2595 4.03 17.5795L11.03 21.4695C11.56 21.7695 12.44 21.7695 12.97 21.4695L19.97 17.5795C20.54 17.2695 21 16.4795 21 15.8295V8.17945C21 7.52945 20.54 6.74945 19.97 6.42945L12.97 2.53945C12.44 2.23945 11.56 2.23945 11.03 2.53945L4.03 6.42945C3.46 6.73945 3 7.52945 3 8.17945Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M3 12.6614V15.8214C3 16.4714 3.46 17.2514 4.03 17.5714L11.03 21.4614C11.56 21.7614 12.44 21.7614 12.97 21.4614L19.97 17.5714C20.54 17.2614 21 16.4714 21 15.8214V8.18141C21 7.53141 20.54 6.75141 19.97 6.43141L12.97 2.54141C12.44 2.24141 11.56 2.24141 11.03 2.54141L4.03 6.43141C3.46 6.74141 3 7.53141 3 8.18141","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M3 8.17945V15.8295C3 16.4795 3.46 17.2595 4.03 17.5795L11.03 21.4695C11.56 21.7695 12.44 21.7695 12.97 21.4695L19.97 17.5795C20.54 17.2695 21 16.4795 21 15.8295V8.17945C21 7.52945 20.54 6.74945 19.97 6.42945L12.97 2.53945C12.44 2.23945 11.56 2.23945 11.03 2.53945L4.03 6.42945C3.46 6.73945 3 7.52945 3 8.17945Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M3 8.2V15.8C3 16.5 3.4 17.2 4 17.5L11 21.4C11.6 21.7 12.3 21.7 12.9 21.4L19.9 17.5C20.5 17.1 20.9 16.5 20.9 15.8V8.2C20.9 7.5 20.5 6.8 19.9 6.5L12.9 2.6C12.3 2.3 11.6 2.3 11 2.6L4 6.4C3.4 6.8 3 7.5 3 8.2Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M12 22.4292C11.52 22.4292 11.05 22.3192 10.66 22.1092L3.66 18.2192C2.85 17.7692 2.25 16.7392 2.25 15.8192V8.17922C2.25 7.25922 2.86001 6.21922 3.67001 5.77922L10.67 1.88922C11.43 1.46922 12.58 1.46922 13.34 1.88922L20.34 5.77922C21.15 6.22922 21.75 7.25922 21.75 8.17922V15.8292C21.75 16.7492 21.14 17.7892 20.33 18.2292L13.33 22.1192C12.96 22.3292 12.48 22.4292 12 22.4292ZM12 3.06922C11.77 3.06922 11.55 3.10922 11.39 3.19922L4.39001 7.08922C4.06001 7.26922 3.75 7.79922 3.75 8.17922V15.8292C3.75 16.2092 4.06001 16.7392 4.39001 16.9192L11.39 20.8092C11.7 20.9792 12.3 20.9792 12.6 20.8092L19.6 16.9192C19.93 16.7392 20.24 16.2092 20.24 15.8292V8.17922C20.24 7.79922 19.93 7.26922 19.6 7.08922L12.6 3.19922C12.45 3.10922 12.23 3.06922 12 3.06922Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M3 8.17945V15.8295C3 16.4795 3.46 17.2595 4.03 17.5795L11.03 21.4695C11.56 21.7695 12.44 21.7695 12.97 21.4695L19.97 17.5795C20.54 17.2695 21 16.4795 21 15.8295V8.17945C21 7.52945 20.54 6.74945 19.97 6.42945L12.97 2.53945C12.44 2.23945 11.56 2.23945 11.03 2.53945L4.03 6.42945C3.46 6.73945 3 7.52945 3 8.17945Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var ChainlinkLink = React.forwardRef(function(props, ref) {
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

ChainlinkLink.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ChainlinkLink.displayName = 'ChainlinkLink';

export default ChainlinkLink;
