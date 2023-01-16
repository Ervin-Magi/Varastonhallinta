import React, { Component } from 'react';
import { Form,Button } from 'react-bootstrap';

class FilterForm extends Component {
  constructor() {
      super()
  }
  render(){
    return (<>
      <input  onChange={(e) => this.props.onChange(e)}/>
        <input type="radio" id="huey" name="drone" value="name"  onChange={(e) => this.props.onref(e)}
                />
        <label htmlFor="huey">Name</label>

        <input type="radio"  name="drone" value="id" onChange={(e) => this.props.onref(e)} checked/>
        <label htmlFor="dewey">ID</label>
      </>)
  }
}
export default FilterForm
