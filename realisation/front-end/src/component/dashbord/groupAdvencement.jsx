import axios from "axios";
import React from "react";
import Cookies from "universal-cookie/cjs/Cookies";
import QuickChart from "quickchart-js";

class Group extends React.Component{

    state={
        AvancementGroupe:"",
        ChartImagee:""
    }

componentDidMount(){
    const cookie = new Cookies()
    axios.get("http://127.0.0.1:8000/api/groupe/"+cookie.get('idTutor'))
    .then(response=>{
        this.setState({
            AvancementGroupe:response.data.AvancementGroupe[0].Percentage
    })
    })



}

render(){

    
const myChart = new QuickChart();

myChart.setConfig({
  type: "progressBar",
  data: {
    datasets: [
      {data: [this.state.AvancementGroupe],},
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
            <h1>State of advancement:</h1>
        <img src={chartImagee} style={{width:250 }} alt="" />
        </div>
    )
}


}

export default Group;