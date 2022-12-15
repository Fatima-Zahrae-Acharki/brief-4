class Task extends React.Component{
    state={
        dataTask:[],
        loading:true,
    }
    async componentDidMount(){
        const res = await axios.get('http://127.0.0.1:8000/api/task')
        .then((res => this.setState({
            dataTask: res.data,
            loading: false
        })))
       

    }
    deleteTask=async(e,id)=>{
        const res = await axios.delete(`http://127.0.0.1:8000/api/task/delete/${id}`)
    }
    render(){
        var task_HTMLTABLE="";
        if(this.state.loading){
            task_HTMLTABLE =<tr><td colSpan="7"><h2>loading....</h2></td></tr>

        }
        else{
            task_HTMLTABLE=
            this.state.dataTask.map((item)=>{
                return(
                    <tr key={item.id}>
                        
                        <td>{item.name}</td>
                        <td>
                            <button type="button" onClick={(e)=>this.deleteTask(e,item.id)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                );
            });
        }
        return(
            
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>task data</h4>

                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>task </th>
                                                <th>action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {task_HTMLTABLE}
                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            

        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Task />);