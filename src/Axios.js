import React, {Component} from "react"
import axios from 'axios';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoArray : [],
            id : this.props.match.params.id,  //this.props.match.params.id me jo id hai vo vo hai jo humne router me variable bnaya hai
        }
    }

    getData = ()=> {
        axios({
            method: 'get',
            url: 'http://jsonplaceholder.typicode.com/todos',
            params : {id : this.state.id}
          }).then(response=> {
                console.log("getting data");
                console.log(response.data);  
                this.setState({todoArray: response.data})
          }).catch(error => {
            console.log(error)
          });

        //meko doosra wala jyda aacha lgta h wait
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:4000/job',
        //     data: {
        //         "id" :"4",
        //         "name" : "diva",
        //         "position" : "NodeJs Developer",
        //         "duration" : "2",
        //         "type" : "fulltime"
        //     }
        //   }).then(data => {
        //         console.log("posting data");
        //         console.log(data);  
        //   });
    }

    componentDidMount = ()=> {
        // yhan pr network call marne k liye use krte hai.
        //network call means data apne component me laana.
        this.getData();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {this.state.todoArray.map((todo, index)=>{
                    return(
                        <div key={index} style={{textAlign: "center"}}>
                            <p>{todo.id}</p>
                            <p>{todo.title}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Contact;