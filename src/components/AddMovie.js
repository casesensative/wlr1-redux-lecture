import {Component} from 'react'

class AddMovie extends Component{
  constructor(){
    super()
    this.state = {
      title: '',
      director: ''
    }
  }

  render(){
    return(
      <div>
        <h1>Add Movie</h1>
      </div>
    )
  }
}

export default AddMovie