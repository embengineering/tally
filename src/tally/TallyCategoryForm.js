import React from 'react';

const TallyCategoryForm = ({
  description,
  defaultValue,
  onFormDescriptionChange,
  onFormDefaultChange,
  onSaveForm,
  onCancelForm
}) =>
  <div className="card" style={{marginBottom: '10px'}}>
    <div className="card-body">
      <form>
        <div className="form-group">
          <label>Description</label>
          <input value={description} onChange={onFormDescriptionChange} name="description" type="text" className="form-control" placeholder="Enter description" />
        </div>
        <div className="form-group">
          <label>Default</label>
          <input value={defaultValue} onChange={onFormDefaultChange} name="default" type="number" step="1" className="form-control" placeholder="Enter default" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSaveForm}>Save</button>
        {' '}
        <button type="button" className="btn btn-secondary" onClick={onCancelForm}>Cancel</button>
      </form>
    </div>
  </div>;

export default TallyCategoryForm;