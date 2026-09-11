import React from 'react';

var TwoTone = function TwoTone(props) {
  return React.createElement(React.Fragment, null, React.createElement("path", {"opacity":"0.4","d":"M17.9002 19.6805C16.1802 21.1805 13.9102 22.0705 11.4202 22.0005C6.25023 21.8605 2.22021 17.4105 2.22021 12.2405V5.21052C2.22021 4.76052 2.76022 4.54052 3.07022 4.86052L17.9002 19.6805Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),React.createElement("path", {"d":"M6.22021 4.29998C7.93021 2.80998 10.1802 1.92998 12.6502 1.99998C17.7802 2.13998 21.7702 6.54997 21.7702 11.68V18.64C21.7702 19.09 21.2302 19.31 20.9202 18.99L6.22021 4.29998Z","stroke":"currentColor","strokeWidth":"1.5","strokeMiterlimit":"10","strokeLinecap":"round","strokeLinejoin":"round"}),);
};

var chooseVariant = function(variant, color) {
  switch (variant) {
    case 'TwoTone':
      return React.createElement(TwoTone, { color: color });
    default:
      return React.createElement(TwoTone, { color: color });
  }
};

var OntologyKnowledgeStructureConceptMappingSemanticRelationDataModel = React.forwardRef(function(props, ref) {
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

OntologyKnowledgeStructureConceptMappingSemanticRelationDataModel.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
OntologyKnowledgeStructureConceptMappingSemanticRelationDataModel.displayName = 'OntologyKnowledgeStructureConceptMappingSemanticRelationDataModel';

export default OntologyKnowledgeStructureConceptMappingSemanticRelationDataModel;
