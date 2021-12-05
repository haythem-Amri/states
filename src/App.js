import React from 'react';

class App extends React.Component{
  constructor(props){
      super(props);
  };
  state = {
    shows: false,
    timer: 0 ,

    fullName: "Name :Haithem Amri",
    profession: "Profession :  Professional trader",
    bio:
      "here we go again ",
    imgSrc: (
      <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Profile_Photo" />
    
      ),
      timer: 0
  };

  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }
  
  
  render(){
   
    

    const buttonText = this.state.shows ? "Hide info" : "Show info";
      return(
        <>
              
              <h1>{this.state.timer}</h1>
        <button
          onClick={() => {
            this.setState({
             fullName: !this.state.fullName
            });
          }}
        >
          {this.state.fullName ? "hide" : "show"}
        </button>
        <h3> {this.state.fullName }</h3>
        
                  <h3>{this.state.profession}</h3>
                  <div>{this.state.imgSrc}</div>
                  <p>
                    <h3>Bio: {this.state.bio}</h3>
                  </p>
        </>
      );
  }
};

export default App;
