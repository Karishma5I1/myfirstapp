import React from 'react'

class ClassBasedComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    inc=()=>{
        return this.setState({count:this.state.count+1}
        )
    }
    dec=()=>{

        return this.setState({count:this.state.count-1})
    }
render(){
    return(
        <> 

         <button onClick={()=>{this.inc()}}>Inc</button>
        <h1>count is {this.state.count}</h1>
        </>
    );
}
render(){
    return(
        <> 

         <button onClick={()=>{this.dec()}}>Dec</button>
        <h1>count is {this.state.count}</h1>
        </>
    );
}

}
export default ClassBasedComponent;