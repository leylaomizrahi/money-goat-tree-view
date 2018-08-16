import React, { Component } from 'react';
import TreeNodeContainer from './TreeNodeContainer'

class TreeNode extends Component {

constructor(props){
  super(props);
  this.checkIfWanted = this.checkIfWanted.bind(this);
  this.state = {isChecked: localStorage.getItem(this.props.name)}

}

  checkIfWanted(object){
      return (object.name in this.props.map)
  }

  getChecked(){
    localStorage.setItem(this.props.name, !this.state.isChecked);
    this.setState({isChecked : !this.state.isChecked})
  }

  render() {
    let children = this.props.items

    if (this.props.filtered && this.props.items){
      children = children.filter(this.checkIfWanted)
    }

    if (this.props.items) {
     children = children.map(x => <TreeNodeContainer
                                      isOpen={this.props.filtered}
                                      name = {x.name}
                                      items={x.items}
                                      filtered={this.props.filtered}
                                      map={this.props.map}/>)
    }

    return (
      <div className="tree-node">

          {!this.props.filtered &&
            <button className="show-button"
                    onClick={() => { this.props.showChildren()}}>
                    {this.props.symbol}
            </button>}

          <input type="checkbox" id="myCheck" checked={this.state.isChecked} onClick={() => { this.getChecked()}} />
         <h7> {this.props.name} </h7>
          <div className="tree-node-child">
          {(this.props.isOpen || this.props.filtered) && children}
        </div>
      </div>
    );
  }
}
export default TreeNode;
