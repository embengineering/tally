import React from 'react';
import TallyItem from './TallyItem';
import TallyCategoryFormWrapper from './TallyCategoryFormWrapper';

const Tally = ({
  items = [],
  formVisible,
  onAddClick,
  onRemoveClick,
  onDeleteClick,
  onNewCategory,
  hideForm,
  showForm,
  updateItems
}) => {

  const renderHelper = () => (
    <div className="alert alert-secondary">
      <strong>TALLY! </strong>
      Tally is a record of amounts or numbers which you keep
      changing and adding to as the activity which affects it
      progresses.
    </div>
  );

  const renderNewCategoryButton = () =>
    <button className="btn btn-link" onClick={onNewCategory}>New Category</button>;

  const renderForm = () =>
    formVisible && <TallyCategoryFormWrapper
        hideForm={hideForm}
        showForm={showForm}
        updateItems={updateItems}
      />;

  const renderItems = () => items.length
    ? items.map(item =>
      <TallyItem
        key={item.id}
        {...item}
        onAddClick={onAddClick.bind(this, item.id)}
        onRemoveClick={onRemoveClick.bind(this, item.id)}
        onDeleteClick={onDeleteClick.bind(this, item.id)}
      />
    )
    : <div className="alert alert-primary">No categories were found.</div>;

  return (
    <div>
      {renderNewCategoryButton()}
      {renderForm()}
      {renderItems()}
      {renderHelper()}
    </div>
  );
};

export default Tally;