import React from 'react';
import uuid from 'uuid/v4';
import TallyCategoryForm from './TallyCategoryForm';

class TallyCategoryFormWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      description: '',
      defaultValue: 0,
      currentValue: 0
    };
  }

  handleCancelForm = () =>
    this.props.hideForm();

  handleSaveForm = event => {
    event.preventDefault(); // prevent default submission

    const existingItems = JSON.parse(localStorage.getItem('tallyItems') || '[]');
    const newItem = {
      id: this.state.id || uuid(), // assign new id
      description: this.state.description.trim(),
      defaultValue: this.state.defaultValue,
      currentValue: this.state.currentValue
    };
    const updatedItems = [
      ...existingItems,
      newItem
    ];

    localStorage.setItem('tallyItems',
      JSON.stringify(updatedItems));

    this.props.updateItems(updatedItems);
    this.props.hideForm();
  }

  handleFormDescriptionChange = event =>
    this.setState({ description: event.target.value });

  handleFormDefaultChange = event =>
    this.setState({ defaultValue: event.target.value });

  render() {
    return <TallyCategoryForm
      onSaveForm={this.handleSaveForm}
      onCancelForm={this.handleCancelForm}
      description={this.state.description}
      defaultValue={this.state.defaultValue}
      onFormDescriptionChange={this.handleFormDescriptionChange}
      onFormDefaultChange={this.handleFormDefaultChange}
    />;
  }
}

export default TallyCategoryFormWrapper;