import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
/*
We are using class because we are running a async function and need to wait for the function to finish
we will then re-render the state with the new data.
*/

//swapped this to a class borrowing React functionality into our App class.
class App extends React.Component{ 
  
    state = {lat: null, errorMessage: ''};
        //only time we directly assign this var
        
        componentDidMount(){
            window.navigator.geolocation.getCurrentPosition(
                position => this.setState({ lat: position.coords.latitude, errorMessage: ''}),
                
                err => this.setState({errorMessage: err.message})
                
            );
        }
       
    

   
    //helper function to avoid having if statements in our render.
contentRender(){
    if(this.state.errorMessage && !this.state.lat){
        return <div> Error: {this.state.errorMessage}</div>;
    }
    if(!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay  lat ={this.state.lat}/>
    }
    return <Spinner message="Please accept user permission."/>;    
   }



//react says we need to define render.
    render(){
        return(
        <div className="container">
        {this.contentRender()}
        </div>
        )
    };
}

//reactDOM.render is the separator from the class function.
//remember there is an extra component of using react-dom to render the information.
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
