import React from "react";
import "./collections-overview.styles.scss";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
