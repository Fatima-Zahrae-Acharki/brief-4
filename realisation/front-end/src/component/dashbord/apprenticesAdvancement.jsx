import React from "react";
import axios from "axios";
import Cookies from "universal-cookie/cjs/Cookies";
import QuickChart from "quickchart-js";
class Apprentices extends React.Component{

    state={
        ListBrief:[],
        brief:[]
    }
componentDidMount(){
    const cookie = new Cookies()
    axios.get("http://127.0.0.1:8000/api/groupe/"+cookie.get('idTutor'))
    .then(response=>{
       this.setState({
          ListBrief:response.data.ListBriefs,
          brief:response.data.LastBrief,
          groupeId:response.data.Groupe.idGroupe

       })
    })
   


}

selectBrief=(e)=>{
  axios.get("http://127.0.0.1:8000/api/BriefSelect/"+this.state.groupeId+"/"+e.target.value)
  .then(response=>{
     this.setState({
        brief:response.data.briefAdvancement
     })
  })


}
render(){

         console.log(this.state.brief)
    const myChart = new QuickChart();

    myChart.setConfig({
      type: "progressBar",
      data: {
        datasets: [
          {data: this.state.brief.map(value=>value.Percentage)},
        ],
      },
      options: {
        plugins: {
          datalabels: {
            font: {
              size: 30, },
            color: (context) =>
              context.dataset.data[context.dataIndex] > 15 ? "#fff" : "#000",
            anchor: (context) =>
              context.dataset.data[context.dataIndex] > 15 ? "center" : "end",
            align: (context) =>
              context.dataset.data[context.dataIndex] > 15 ? "center" : "right",
          },
        },
      },
    });
    const chartImagee = myChart .getUrl();
    
    return(
        <div>

            {/* brief select */}
          <select onChange={this.selectBrief} name="" id="">
            {this.state.ListBrief.map((value)=>
            <option key={ value.id} value={ value.id}>  {value.brief_name}</option>
              
                
             )}
             </select>
            {/* apprentices list */}
              {this.state.brief.map((value)=>
                <li key={Math.random()}>{value.lName} {value.Nom} </li>

              )}

                     <img src={chartImagee} style={{width:250 }} alt="" />

        </div>
    )
}

}

export default Apprentices;