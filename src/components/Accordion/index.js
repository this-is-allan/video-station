import React from "react";
import { BarLoader } from "react-spinners";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SubcategoriesActions } from "../../store/ducks/subcategories";

import SubcategoryItem from "./SubcategoryItem";

const Accordion = ({
  subcategories,
  loading,
  toggleSubcategory,
  activeSubcategory
}) => (
  <React.Fragment>
    <BarLoader widthUnit="%" width={100} color="#8D6FF7" loading={loading} />
    {subcategories.map((subcategory, i) => (
      <SubcategoryItem key={i} index={i} subcategory={subcategory} />
    ))}
  </React.Fragment>
);

const mapStateToProps = ({ subcategories }) => ({
  subcategories: subcategories.data,
  loading: subcategories.loading,
  activeSubcategory: subcategories.activeSubcategory
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SubcategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accordion);
