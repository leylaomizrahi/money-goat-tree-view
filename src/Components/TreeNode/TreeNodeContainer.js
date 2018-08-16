import React, { Component } from 'react';
import TreeNode from './TreeNode'

class TreeNodeContainer extends Component {

constructor(props){
  super(props);
  this.state = {isOpen: this.props.isOpen, symbol: "+"}
  this.showChildren = this.showChildren.bind(this);
}

showChildren() {
  var new_symbol = "+"
  if (this.state.symbol == "+" ){
    new_symbol = "-"
}
  this.setState({isOpen : !this.state.isOpen, symbol: new_symbol})
}

  render() {
    return (
      <div>
        <TreeNode name={this.props.name}
                  isOpen={this.state.isOpen}
                  symbol={this.state.symbol}
                  showChildren={this.showChildren}
                  items={this.props.items}
                  filtered={this.props.filtered}
                  map={this.props.map} />
      </div>
    );
  }
}
export default TreeNodeContainer;
