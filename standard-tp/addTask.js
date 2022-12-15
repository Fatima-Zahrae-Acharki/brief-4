class Task extends React.Component{
    state ={
        name:''
    }
    handleInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    saveTask=async(e)=>{
        e.preventDefault();
        const res =await axios.post('http://127.0.0.1:8000/api/task/store',this.state)
        // console.log(res);
        this.setState ({
            name:''
        })
    }
    render(){
        return(
            
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4>add task</h4>

                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.saveTask}>
                                        <div className="form-group mb-3">
                                            <label>task name</label>
                                            <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="form-control"></input>

                                        </div>
                                        <div className="form-group mb-3">
                                            <button type="submit" className="btn btn-primary">save</button>

                                        </div>
                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            

        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('display'));
      root.render(<Task />);