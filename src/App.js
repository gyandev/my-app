import React,{ Component,Fragment } from "react";
import Student from "./Student";

class App extends Component
{
    render()
    {
       return <Fragment>
       <Student name="Rahul"/>
       <Student name="Gyandev"/>
       <Student name="Sumit"/>

        </Fragment>;
    }
}


export default App;