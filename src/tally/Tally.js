import React from 'react';
import TallyItem from './TallyItem';
import TallyCategoryForm from './TallyCategoryForm';

const Tally = ({
  items = [],
  formVisible,
  onAddClick,
  onRemoveClick,
  onNewCategory,
  onCancelForm
}) => {

  const renderHelper = () => (
    <div className="alert alert-info">
      <strong>TALLY! </strong>
      Tally is a record of amounts or numbers which you keep
      changing and adding to as the activity which affects it
      progresses.
    </div>
  );

  const renderNewCategoryButton = () => <button className="btn btn-link" onClick={onNewCategory}>New Category</button>;

  const renderForm = () =>
    formVisible && <TallyCategoryForm onCancelForm={onCancelForm} />;

  const renderItems = () => items.map(counter =>
    <TallyItem
      key={counter.id}
      {...counter}
      onAddClick={onAddClick.bind(this, counter.id)}
      onRemoveClick={onRemoveClick.bind(this, counter.id)}
    />
  );

  const renderWarningMessage = () =>
      <div className="alert alert-warning">
        <strong>Important!</strong> This tool is intended for visualization purposes only; therefore
        is not functional at this time.
      </div>

  return (
    <div>
      {renderWarningMessage()}
      {renderHelper()}
      {renderNewCategoryButton()}
      {renderForm()}
      {renderItems()}
    </div>
  );
};

export default Tally;