import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M13.98 5.31975L10.77 8.52975L8.79999 10.4897C7.96999 11.3197 7.96999 12.6697 8.79999 13.4997L13.98 18.6797C14.66 19.3597 15.82 18.8697 15.82 17.9197V12.3097V6.07975C15.82 5.11975 14.66 4.63975 13.98 5.31975Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12.78 6.31017C15.65 4.66017 18 6.01017 18 9.33017V12.0002V14.6702C18 17.9802 15.65 19.3402 12.78 17.6802L10.47 16.3402L8.16001 15.0002C5.29001 13.3402 5.29001 10.6302 8.16001 8.97017","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"}),React.createElement("path", {"d":"M15.5 11.2504H10.31L12.03 9.53043C12.32 9.24043 12.32 8.76043 12.03 8.47043C11.74 8.18043 11.26 8.18043 10.97 8.47043L7.97 11.4704C7.68 11.7604 7.68 12.2404 7.97 12.5304L10.97 15.5304C11.12 15.6804 11.31 15.7504 11.5 15.7504C11.69 15.7504 11.88 15.6804 12.03 15.5304C12.32 15.2404 12.32 14.7604 12.03 14.4704L10.31 12.7504H15.5C15.91 12.7504 16.25 12.4104 16.25 12.0004C16.25 11.5904 15.91 11.2504 15.5 11.2504Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M17.9998 11.9996V14.6696C17.9998 17.9796 15.6498 19.3396 12.7798 17.6796L10.4698 16.3396L8.15982 14.9996C5.28982 13.3396 5.28982 10.6296 8.15982 8.96956L10.4698 7.62956L12.7798 6.28956C15.6498 4.65956 17.9998 6.00956 17.9998 9.32956V11.9996Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M15.1 19.1498C14.26 19.1498 13.34 18.8798 12.41 18.3398L7.78 15.6698C6.15 14.7198 5.25 13.4198 5.25 11.9998C5.25 10.5798 6.15 9.2798 7.78 8.3398L12.41 5.6698C14.04 4.7298 15.61 4.5998 16.85 5.3098C18.08 6.0198 18.76 7.4498 18.76 9.3298V14.6698C18.76 16.5498 18.08 17.9798 16.85 18.6898C16.32 18.9998 15.73 19.1498 15.1 19.1498ZM15.1 6.3598C14.52 6.3598 13.86 6.5598 13.16 6.9698L8.53 9.6398C7.38 10.2998 6.75 11.1398 6.75 11.9998C6.75 12.8598 7.38 13.6998 8.53 14.3598L13.16 17.0298C14.31 17.6898 15.35 17.8198 16.1 17.3898C16.85 16.9598 17.26 15.9898 17.26 14.6698V9.3298C17.26 8.0098 16.85 7.0398 16.1 6.6098C15.8 6.4398 15.46 6.3598 15.1 6.3598Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M17.9999 11.9996V14.6696C17.9999 17.9796 15.6499 19.3396 12.7799 17.6796L10.4699 16.3396L8.15995 14.9996C5.28995 13.3396 5.28995 10.6296 8.15995 8.96956L10.4699 7.62956L12.7799 6.28956C15.6499 4.65956 17.9999 6.00956 17.9999 9.32956V11.9996Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
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

var ArrowLeft2 = React.forwardRef(function(props, ref) {
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

ArrowLeft2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowLeft2.displayName = 'ArrowLeft2';

export default ArrowLeft2;
