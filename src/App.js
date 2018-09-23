import React, {Component} from 'react';
import './App.css';
import endpoint from './endpoint/endpoint';
import ItemList from './component/ItemList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    endpoint({count: 1, itemNumber: 10}).then(items => this.setState({items}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React playground</h1>
        </header>
        <div className="App-body">
          {this.state.items.length > 0 ?
            <ItemList data={this.state.items}/> :
            <div>Fetching items 🥕</div>}
        </div>
      </div>
    );
  }
}

export default App;
