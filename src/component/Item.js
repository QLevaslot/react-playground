import React, {Component} from 'react';
class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      desc: 'Lorem Ipsum...',
    }
  }

  onClick = () => this.setState({isOpened: !this.state.isOpened});

  render() {
    return (
      <div className="Item">
        <div onClick={this.onClick}>{this.props.title}</div>
        {this.state.isOpened ? <Description text={this.state.desc} /> : null}

      </div>
    );
  }
}

class Description extends Component {
  render(){return <div className="description">{this.props.text}</div>}
}



export default Item;


