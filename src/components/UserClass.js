import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        //state variable in class component
        this.state= {
            userInfo:{
                name: 'Default',
                location: 'Default'
            }
        };

        console.log('Child COnstructor');
    };

    async componentDidMount(){
        console.log('Child component did mount');
        //API call
        const data = await fetch('https://api.github.com/users/hemantkumarsuman');
        const json = await data.json();
        console.log(json);
               
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){
        console.log('Component Did Update');
    }

    componentWillUnmount(){
        console.log('Component Will Unmount');
    }

    render(){

        console.log('Child Render');

        return (

            <div className="user-card">    
                <img src={this.state.userInfo.avatar_url
}/>            
                <h1>Name: {this.state.userInfo.name}</h1>
                <h2>Location: {this.state.userInfo.location}</h2>
                <h3>Contact: 88XXXXXX0</h3>
            </div>
        );
    }

}

export default UserClass;