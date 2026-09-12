import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M2.71008 17.0192L4.45008 13.5392C4.93008 12.5692 4.93008 11.4392 4.45008 10.4692L2.71008 6.97924C1.22008 3.99924 4.43008 0.849241 7.38008 2.40924L8.92008 3.22924C9.14008 3.33924 9.31008 3.51924 9.40008 3.73924L15.0901 16.3892C15.3201 16.9092 15.1101 17.5192 14.6101 17.7792L7.37008 21.5892C4.43008 23.1492 1.22008 19.9992 2.71008 17.0192Z"}),React.createElement("path", {"fill":"currentColor","d":"M16.31 15.6004L12.58 7.32045C12.16 6.39045 13.16 5.45045 14.06 5.93045L19.83 8.97045C22.28 10.2604 22.28 13.7604 19.83 15.0504L17.79 16.1204C17.24 16.4004 16.57 16.1704 16.31 15.6004Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M7.70015 3.06931C4.95015 1.61931 1.96015 4.54931 3.35015 7.32931L4.97015 10.5693C5.42015 11.4693 5.42015 12.5293 4.97015 13.4293L3.35015 16.6693C1.96015 19.4493 4.95015 22.3693 7.70015 20.9293L19.2901 14.8293C21.5701 13.6293 21.5701 10.3693 19.2901 9.16931L12.3201 5.49931","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M2.71008 17.0192L4.45008 13.5392C4.93008 12.5692 4.93008 11.4392 4.45008 10.4692L2.71008 6.97924C1.22008 3.99924 4.43008 0.849241 7.38008 2.40924L8.92008 3.22924C9.14008 3.33924 9.31008 3.51924 9.40008 3.73924L15.0901 16.3892C15.3201 16.9092 15.1101 17.5192 14.6101 17.7792L7.37008 21.5892C4.43008 23.1492 1.22008 19.9992 2.71008 17.0192Z"}),React.createElement("path", {"fill":"currentColor","opacity":"0.4","d":"M16.3102 15.6004L12.5802 7.32045C12.1602 6.39045 13.1602 5.45045 14.0602 5.93045L19.8302 8.97045C22.2802 10.2604 22.2802 13.7604 19.8302 15.0504L17.7902 16.1204C17.2402 16.4004 16.5702 16.1704 16.3102 15.6004Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M19.29 9.16931L7.70002 3.06931C4.95002 1.61931 1.96002 4.54931 3.35002 7.32931L4.97002 10.5693C5.42002 11.4693 5.42002 12.5293 4.97002 13.4293L3.35002 16.6693C1.96002 19.4493 4.95002 22.3693 7.70002 20.9293L19.29 14.8293C21.57 13.6293 21.57 10.3693 19.29 9.16931Z","stroke":"currentColor","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M6.19005 22.0598C5.19005 22.0598 4.22005 21.6698 3.45005 20.9198C2.20005 19.6998 1.90005 17.8998 2.68005 16.3398L4.30005 13.0998C4.64005 12.4198 4.64005 11.5998 4.30005 10.9098L2.68005 7.65985C1.90005 6.09985 2.20005 4.29985 3.45005 3.07985C4.70005 1.85985 6.50005 1.58985 8.05005 2.40985L19.6401 8.50985C20.9401 9.18985 21.7501 10.5298 21.7501 11.9998C21.7501 13.4698 20.9401 14.8098 19.6401 15.4898L8.05005 21.5898C7.45005 21.9098 6.82005 22.0598 6.19005 22.0598ZM6.20005 3.43985C5.51005 3.43985 4.91005 3.75985 4.50005 4.15985C3.88005 4.75985 3.44005 5.82985 4.02005 6.99985L5.64005 10.2398C6.19005 11.3498 6.19005 12.6598 5.64005 13.7698L4.02005 17.0098C3.43005 18.1798 3.88005 19.2498 4.50005 19.8498C5.12005 20.4498 6.19005 20.8798 7.35005 20.2698L18.9401 14.1698C19.7601 13.7398 20.2501 12.9298 20.2501 12.0098C20.2501 11.0898 19.7601 10.2798 18.9401 9.84985L7.35005 3.72985C6.95005 3.51985 6.56005 3.43985 6.20005 3.43985Z"}),);
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

var DirectRight = React.forwardRef(function(props, ref) {
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

DirectRight.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
DirectRight.displayName = 'DirectRight';

export default DirectRight;
