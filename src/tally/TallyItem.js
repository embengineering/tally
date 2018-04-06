import React from 'react';

const TallyItem = ({
  description = '',
  currentValue = 0,
  defaultValue = 0,
  onAddClick,
  onRemoveClick,
  onDeleteClick
}) =>
  <div className="card" style={{marginBottom: '10px'}}>
    <div className="card-body">
      <h4 className="card-title">
        {description} <div className="float-right badge badge-info">{`${currentValue} / ${defaultValue}`}</div>
      </h4>
      <button type="button" className="btn btn-sm btn-primary" onClick={onAddClick}>Add</button>{' '}
      <button type="button" className="btn btn-sm btn-secondary" onClick={onRemoveClick}>Remove</button>
      <button type="button" className="btn btn-sm btn-danger float-right" onClick={onDeleteClick}>Delete</button>
    </div>
    <div className="progress" style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
      <div className="progress-bar" role="progressbar" style={{width: `${currentValue / defaultValue * 100}%`}} aria-valuenow={currentValue} aria-valuemin="0" aria-valuemax={defaultValue}></div>
    </div>
  </div>;

export default TallyItem;