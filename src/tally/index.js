import React from 'react';
import ReactDOM from 'react-dom';
import TallyWrapper from './TallyWrapper';

class TallyTool extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<TallyWrapper />, this);
  }
}

window.customElements.define('tally-tool', TallyTool);
