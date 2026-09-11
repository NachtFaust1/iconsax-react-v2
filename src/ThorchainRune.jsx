import React from 'react';

var Bold = function Bold(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M16.3799 17.5692L6.07988 21.9092C5.00988 22.3592 4.07986 21.0292 4.86986 20.1792L12.6799 11.6992L16.7298 15.8192C17.2698 16.3592 17.0899 17.2792 16.3799 17.5692Z"}),React.createElement("path", {"d":"M19.17 3.76918L12.68 11.6992L8.63003 7.59918C8.09003 7.04918 8.27001 6.12918 8.98001 5.83918L17.92 2.08918C18.96 1.64918 19.89 2.89918 19.17 3.76918Z"}),);
};

var Broken = function Broken(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12.6795 11.7011L19.1695 3.77114C19.8795 2.90114 18.9495 1.65114 17.9095 2.09114L8.9695 5.84114C8.2595 6.14114 8.07953 7.05114 8.61953 7.60114L9.89956 8.90114M6.07955 21.9111L16.3795 17.5711C17.0895 17.2711 17.2695 16.3611 16.7295 15.8111L12.6695 11.7011L4.85952 20.1811C4.07952 21.0311 5.00955 22.3611 6.07955 21.9111Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var Bulk = function Bulk(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M16.3799 17.5692L6.07986 21.9092C5.00986 22.3592 4.07986 21.0292 4.86986 20.1792L12.6799 11.6992L16.7299 15.8192C17.2699 16.3592 17.0899 17.2792 16.3799 17.5692Z"}),React.createElement("path", {"d":"M19.17 3.76918L12.68 11.6992L8.63003 7.59918C8.09003 7.04918 8.27003 6.12918 8.98003 5.83918L17.92 2.08918C18.96 1.64918 19.89 2.89918 19.17 3.76918Z"}),);
};

var Linear = function Linear(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M12.7 11.7007L16.8 15.8007C17.3 16.4007 17.1 17.3007 16.4 17.6007L6.10002 21.9007C5.00002 22.4007 4.10002 21.0007 4.90002 20.2007L12.7 11.7007ZM12.7 11.7007L8.60002 7.60068C8.10002 7.10068 8.30002 6.10068 9.00002 5.80068L17.9 2.10068C19 1.70068 19.9 2.90068 19.2 3.80068L12.7 11.7007Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10"}),);
};

var Outline = function Outline(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M5.63994 22.7508C5.05994 22.7508 4.5199 22.4708 4.1599 21.9608C3.6499 21.2408 3.70993 20.3108 4.30993 19.6708L11.6399 11.7108L8.08996 8.12075C7.65996 7.69075 7.4799 7.07075 7.5999 6.47075C7.7199 5.87075 8.12993 5.38075 8.68993 5.14075L17.6299 1.39075C18.4199 1.06075 19.2899 1.30075 19.8099 1.98075C20.3199 2.67075 20.2999 3.57075 19.7599 4.24075L13.6899 11.6508L17.2699 15.2808C17.6999 15.7108 17.8799 16.3308 17.7599 16.9308C17.6399 17.5308 17.2299 18.0208 16.6699 18.2608L6.36992 22.6008C6.12992 22.7008 5.88994 22.7508 5.63994 22.7508ZM12.6899 12.7908L5.41991 20.6908C5.25991 20.8608 5.33994 21.0208 5.38994 21.1108C5.44994 21.1908 5.57991 21.3208 5.78991 21.2208L16.09 16.8807C16.23 16.8207 16.2699 16.7008 16.2899 16.6407C16.2999 16.5807 16.3099 16.4508 16.1999 16.3408L12.6899 12.7908ZM9.1599 7.07075L12.6299 10.5808L18.59 3.30075C18.73 3.13075 18.6599 2.97075 18.5999 2.89075C18.5399 2.81075 18.4199 2.69075 18.1999 2.78075L9.25994 6.53075C9.11994 6.59075 9.07993 6.71075 9.05993 6.77075C9.03993 6.83075 9.0599 6.96075 9.1599 7.07075Z"}),);
};

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"d":"M6.08004 21.9092L16.38 17.5692C17.09 17.2692 17.27 16.3592 16.73 15.8092L12.67 11.6992L4.86001 20.1792C4.08001 21.0292 5.01004 22.3592 6.08004 21.9092ZM8.63003 7.59918L12.68 11.6992L19.17 3.76918C19.88 2.89918 18.95 1.64918 17.91 2.08918L8.96999 5.83918C8.26999 6.12918 8.09003 7.04918 8.63003 7.59918Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10"}),);
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

var ThorchainRune = React.forwardRef(function(props, ref) {
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

ThorchainRune.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ThorchainRune.displayName = 'ThorchainRune';

export default ThorchainRune;
