import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M17.49 9.59965L5.6 16.7696C4.9 17.1896 4 16.6896 4 15.8696V7.86965C4 4.37965 7.77 2.19965 10.8 3.93965L15.39 6.57965L17.48 7.77965C18.17 8.18965 18.18 9.18965 17.49 9.59965Z"}),React.createElement("path", {"d":"M18.0901 15.4596L14.0401 17.7996L10.0001 20.1296C8.55005 20.9596 6.91005 20.7896 5.72005 19.9496C5.14005 19.5496 5.21006 18.6596 5.82006 18.2996L18.5301 10.6796C19.1301 10.3196 19.9201 10.6596 20.0301 11.3496C20.2801 12.8996 19.6401 14.5696 18.0901 15.4596Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M17.13 7.98038C20.96 10.1904 20.96 13.8104 17.13 16.0204L14.04 17.8004L10.95 19.5804C7.13 21.7904 4 19.9804 4 15.5604V12.0004V8.44038C4 4.02038 7.13 2.21038 10.96 4.42038L13.21 5.72038","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M18.7 8.97989L4.14 17.7099C4.05 17.3799 4 17.0299 4 16.6699V7.32989C4 4.24989 7.33 2.32989 10 3.86989L14.04 6.19989L18.09 8.53989C18.31 8.66989 18.52 8.80989 18.7 8.97989Z"}),React.createElement("path", {"opacity":"0.4","d":"M18.0902 15.4598L14.0402 17.7998L10.0002 20.1298C8.09022 21.2298 5.84021 20.5698 4.72021 18.9598L5.14021 18.7098L19.5802 10.0498C20.5802 11.8498 20.0902 14.3098 18.0902 15.4598Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M4 12.0004V8.44038C4 4.02038 7.13 2.21038 10.96 4.42038L14.05 6.20038L17.14 7.98038C20.97 10.1904 20.97 13.8104 17.14 16.0204L14.05 17.8004L10.96 19.5804C7.13 21.7904 4 19.9804 4 15.5604V12.0004Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M7.87 21.2805C7.08 21.2805 6.33 21.0905 5.67 20.7105C4.11 19.8105 3.25 17.9805 3.25 15.5705V8.44048C3.25 6.02048 4.11 4.20048 5.67 3.30048C7.23 2.40048 9.24 2.57048 11.34 3.78048L17.51 7.34048C19.6 8.55048 20.76 10.2105 20.76 12.0105C20.76 13.8105 19.61 15.4705 17.51 16.6805L11.34 20.2405C10.13 20.9305 8.95 21.2805 7.87 21.2805ZM7.87 4.22048C7.33 4.22048 6.85 4.34048 6.42 4.59048C5.34 5.21048 4.75 6.58048 4.75 8.44048V15.5605C4.75 17.4205 5.34 18.7805 6.42 19.4105C7.5 20.0405 8.98 19.8605 10.59 18.9305L16.76 15.3705C18.37 14.4405 19.26 13.2505 19.26 12.0005C19.26 10.7505 18.37 9.56048 16.76 8.63048L10.59 5.07048C9.61 4.51048 8.69 4.22048 7.87 4.22048Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M4 12.0004V8.44038C4 4.02038 7.13 2.21038 10.96 4.42038L14.05 6.20038L17.14 7.98038C20.97 10.1904 20.97 13.8104 17.14 16.0204L14.05 17.8004L10.96 19.5804C7.13 21.7904 4 19.9804 4 15.5604V12.0004Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var Play = React.forwardRef(function(props, ref) {
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

Play.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Play.displayName = 'Play';

export default Play;
