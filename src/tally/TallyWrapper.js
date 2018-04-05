import React from 'react';
import Tally from './Tally';

class TallyWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { label: 'Water', currentValue: 0, defaultValue: 8, id: '8038a70a-21b6-592b-9e12-e055dca7b8bf', fact: 'Water makes up approximately 70% of a human’s body weight – but DON’T stop drinking water to lose weight!' },
        { label: 'Veggies', currentValue: 0, defaultValue: 5, id: '15e4db73-08a2-56d3-8ccb-85b767016f49', fact: 'Broccoli contains more protein than steak!' }
      ],
      formVisible: false
    };
  }

  handleAddClick = id => {
    this.setState({
      items: this.state.items.map(item => {
        return item.id === id
          ? Object.assign({}, item, {
              currentValue: item.currentValue + 1
            })
          : item;
      })
    });
  }

  handleRemoveClick = id => {
    this.setState({
      items: this.state.items.map(item => {
        return item.id === id && item.currentValue > 0
          ? Object.assign({}, item, {
              currentValue: item.currentValue - 1
            })
          : item;
      })
    });
  }

  handleNewCategoryClick = () =>
    this.setState({ formVisible: true });

  handleCancelForm = () =>
  this.setState({ formVisible: false });

  render() {
    return (
      <div className="container">
        <Tally
          items={this.state.items}
          formVisible={this.state.formVisible}
          onAddClick={this.handleAddClick}
          onRemoveClick={this.handleRemoveClick}
          onNewCategory={this.handleNewCategoryClick}
          onCancelForm={this.handleCancelForm}
        />
      </div>
    );
  }
}

export default TallyWrapper;