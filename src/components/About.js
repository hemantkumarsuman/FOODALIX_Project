import User from './User'
import UserClass from './UserClass';
import React from 'react';

// const About = ()=>{
//     return (
//         <div>
//             <h1>foodalix</h1>
//             <h2>food application</h2>
//             <User name={'hemant function'}/>
//             <UserClass name={'hemant class'} location={'mumbai class'}/>
//         </div>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props);

        console.log('Parent Constructor');
    };

    componentDidMount(){
        console.log('Parent component did mount');        
    }


    render(){

        console.log('Parent Render');

        return (
            <div>
                <p>FoodAlix Developer</p>
                {/* <User name={'Hemant Function'}/> */}
                <UserClass name={'Hemant Class'} location={'Mumbai Class'}/>
            </div>
        )
    }
}

export default About;