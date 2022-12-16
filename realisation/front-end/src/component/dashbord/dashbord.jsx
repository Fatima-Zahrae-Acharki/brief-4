import axios from "axios";
import React from "react";
import Cookies from "universal-cookie/cjs/Cookies";
import Apprenants from "./apprenticesAdvancement";
import Brief from "./briefAdvencement";
import Groupe from "./groupAdvencement";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import "./style.css";


class Dashbord extends React.Component{
   
    state={
        idFormateur:"",
        groupe:[]
    }
    
    componentDidMount(){
        const cookies = new Cookies()
        this.setState({
            idFormateur:cookies.get('idTutor')
        })
        axios.get("http://127.0.0.1:8000/api/groupe/"+cookies.get('idTutor'))
        .then(response=>{
            
            this.setState({
             groupe: response.data.Groupe,
             ToutalApprenants: response.data.ToutalApprenants
             
            })
           
        })


    }
render(){
   
    return(
         
        <div>
          <h1 id="titre"> Advencement state dashboard</h1> 
          <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#"><img src={this.state.groupe.Logo}></img> Logo</Navbar.Brand>
          <Navbar.Brand href="#">{this.state.groupe.Nom_groupe}</Navbar.Brand>
          <Navbar.Brand href="#">{this.state.ToutalApprenants} apprenants</Navbar.Brand>
          <Navbar.Brand href="#">{this.state.groupe.Annee_scolaire}</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
   
         {/* Avancement de groupe */}
         <div>
        <Groupe/>
         </div>
         {/* Avancement de brief */}
         <div>
            <h1>brief advancement state :</h1>
            <Brief />
         </div>
         <div>
            <h1>apprentices advancement state :</h1>
           <Apprenants/>
         </div>
        </div>
    )
}
    
}
export default Dashbord;