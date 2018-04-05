import React from 'react';

const TallyItem = ({
  label,
  fact,
  currentValue,
  defaultValue,
  onAddClick,
  onRemoveClick
}) =>
  <div className="card" style={{marginBottom: '10px'}}>
    <div className="card-body">
      <h4 className="card-title">{label} <div className="float-right badge badge-info">{`${currentValue} / ${defaultValue}`}</div></h4>
      <p className="card-text">{fact}</p>
      <button type="button" className="btn btn-primary" onClick={onAddClick}>Add One</button>{' '}
      <button type="button" className="btn btn-danger" onClick={onRemoveClick}>Remove One</button>
    </div>
  </div>;

export default TallyItem;