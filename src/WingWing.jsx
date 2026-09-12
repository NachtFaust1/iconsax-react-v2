import React from 'react';

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M16.0004 5H19.5004L22.2004 9.7L17.0004 19L15.1504 15.9L18.7004 9.7L16.0004 5Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M10.8404 17.49L10.0004 19L8.15039 15.9L11.7004 9.7L9.0004 5H12.5004L15.2004 9.7L12.9304 13.77","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M1.80078 5H5.30078L8.00079 9.8L6.30078 12.7L1.80078 5Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M16 5H19.5L22.2 9.7L17 19L15.1 15.9L18.7 9.7L16 5Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M8.99998 5H12.5L15.2 9.7L9.99998 19L8.09998 15.9L11.7 9.7L8.99998 5Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M1.80005 5H5.30005L8.00005 9.8L6.30005 12.7L1.80005 5Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"fill":"currentColor","d":"M17.0001 19.7502C16.7401 19.7502 16.4901 19.6102 16.3601 19.3802L14.5101 16.2802C14.3701 16.0502 14.3701 15.7602 14.5001 15.5202L17.8401 9.69023L15.3501 5.36023C15.2201 5.13023 15.2201 4.84023 15.3501 4.61023C15.4801 4.38023 15.7301 4.24023 16.0001 4.24023H19.5001C19.7701 4.24023 20.0201 4.38022 20.1501 4.62022L22.8501 9.32024C22.9801 9.55024 22.9801 9.83023 22.8501 10.0602L17.6501 19.3602C17.5201 19.5902 17.2701 19.7402 17.0101 19.7402C17.0101 19.7502 17.0001 19.7502 17.0001 19.7502ZM16.0201 15.8902L16.9801 17.5002L21.3401 9.70023L19.0701 5.74023H17.3001L19.3501 9.32024C19.4801 9.55024 19.4801 9.84024 19.3501 10.0702L16.0201 15.8902Z"}),React.createElement("path", {"fill":"currentColor","d":"M10.0001 19.7502C9.74009 19.7502 9.49007 19.6102 9.36007 19.3802L7.5101 16.2802C7.3701 16.0502 7.37009 15.7602 7.50009 15.5202L10.8401 9.69023L8.35009 5.36023C8.22009 5.13023 8.22009 4.84023 8.35009 4.61023C8.48009 4.38023 8.73009 4.24023 9.00009 4.24023H12.5001C12.7701 4.24023 13.0201 4.38022 13.1501 4.62022L15.8501 9.32024C15.9801 9.55024 15.9801 9.83023 15.8501 10.0602L10.6501 19.3602C10.5201 19.5902 10.2701 19.7402 10.0101 19.7402C10.0101 19.7502 10.0001 19.7502 10.0001 19.7502ZM9.02008 15.8902L9.9801 17.5002L14.3401 9.70023L12.0701 5.74023H10.3001L12.3501 9.32024C12.4801 9.55024 12.4801 9.84024 12.3501 10.0702L9.02008 15.8902Z"}),React.createElement("path", {"fill":"currentColor","d":"M6.29992 13.45C6.02992 13.45 5.78992 13.31 5.64992 13.08L1.14992 5.38C1.00992 5.15 1.00992 4.86 1.14992 4.63C1.27992 4.4 1.52992 4.25 1.79992 4.25H5.29992C5.56992 4.25 5.81994 4.4 5.94994 4.63L8.64992 9.42999C8.77992 9.65999 8.77994 9.94999 8.63994 10.18L6.93993 13.08C6.80993 13.31 6.56992 13.45 6.29992 13.45ZM3.10991 5.75L6.29992 11.22L7.12993 9.8L4.85991 5.75999H3.10991V5.75Z"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'Linear':
      return React.createElement(Linear, { color: color });
    case 'Broken':
      return React.createElement(Broken, { color: color });
    case 'Outline':
      return React.createElement(Outline, { color: color });
    default:
      return React.createElement(Linear, { color: color });
  }
};

var WingWing = React.forwardRef(function(props, ref) {
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

WingWing.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
WingWing.displayName = 'WingWing';

export default WingWing;
