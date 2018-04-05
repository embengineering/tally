import React from 'react';

const TallyCategoryForm = ({
  onCancelForm
}) =>
  <div className="card" style={{marginBottom: '10px'}}>
    <div className="card-body">
      <form>
        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" placeholder="Enter description" />
        </div>
        <button type="button" className="btn btn-primary" onClick={onCancelForm}>Save</button>
        {' '}
        <button type="button" className="btn btn-secondary" onClick={onCancelForm}>Cancel</button>
      </form>
    </div>
  </div>;

export default TallyCategoryForm;