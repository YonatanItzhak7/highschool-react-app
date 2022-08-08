import { Component } from "react";
class Student extends Component {
    constructor(props){
        super();
    }
    render() {
        return(
            <div>
                <h5>{this.props.firstName}</h5>
                <h5>{this.props.lastName}</h5>
                <h5>{this.props.date}</h5>
                <img src={this.props.pic} width="20%"/>
            </div>
        )
    }
}

export default Student;