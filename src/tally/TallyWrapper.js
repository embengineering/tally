import React from 'react';
import Tally from './Tally';

class TallyWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.getItemsFromLocalStorage(),
      formVisible: false
    };
  }

  handleAddClick = id =>
    this.setState({
      items: this.state.items.map(item => {
        if(item.id === id && item.currentValue > 0) console.log(`${item.description} increased to ${Number(item.currentValue) + 1}`);
        return item.id === id
          ? {
              ...item,
              currentValue: Number(item.currentValue) + 1
            }
          : item;
      })
    }, this.storeItemsInLocalStorage);

  handleRemoveClick = id =>
    this.setState({
      items: this.state.items.map(item => {
        if(item.id === id && item.currentValue > 0) console.log(`${item.description} decreased to ${Number(item.currentValue) - 1}`);
        return item.id === id && item.currentValue > 0
          ? {
            ...item,
            currentValue: Number(item.currentValue) - 1
          }
          : item;
      })
    }, this.storeItemsInLocalStorage);

  handleDeleteClick = id => {
    const items = this.state.items;

    this.setState({
      items: items.filter(item => item.id !== id)
    }, this.storeItemsInLocalStorage);
  }

  handleNewCategoryClick = () =>
    this.showForm();

  hideForm = () =>
    this.setState({ formVisible: false });

  showForm = () =>
    this.setState({ formVisible: true });

  updateItems = (items = []) =>
    this.setState({ items }, this.storeItemsInLocalStorage);

  getItemsFromLocalStorage = () =>
    JSON.parse(localStorage.getItem('tallyItems') || '[]');

  storeItemsInLocalStorage = () => {
    localStorage.setItem('tallyItems', JSON.stringify(this.state.items));
    console.log('Items updated in local storage:', this.state.items)
  }

  render() {
    return (
      <div className="container">
        <Tally
          items={this.state.items}
          formVisible={this.state.formVisible}
          onAddClick={this.handleAddClick.bind(this)}
          onRemoveClick={this.handleRemoveClick}
          onDeleteClick={this.handleDeleteClick}
          onNewCategory={this.handleNewCategoryClick}
          hideForm={this.hideForm}
          showForm={this.showForm}
          updateItems={this.updateItems}
        />
      </div>
    );
  }
}

export default TallyWrapper;