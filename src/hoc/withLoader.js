import React, {Component} from 'react';

const withLoader = (WrappedComponent, query) => class withLoader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    query().then(data => this.setState({data}))
  }

  render() {
    return this.state.data ?
      <WrappedComponent {...{...this.props, data: this.state.data}} /> : <div>Fetching items 🥕</div>
  }
};

export default withLoader;