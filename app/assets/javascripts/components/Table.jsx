class Table extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: this.props.items 
    };
  }

  render(){
    let rows = this.state.items.map((item, index) =>
       <TableRow item={item} key={index}/>
    );
    return(
      <div>
        <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group">
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button">Search</button>
              </span>
              <input type="text" className="form-control" placeholder="Search"/>
            </div>
          </div>
        </div>
        <br/> 
        <div className="row">
          <table className="table table-bordered">
            <TableHeader headers={this.props.headers}/>
            <tbody>
             { rows }
            </tbody>
          </table>
        </div>
      </div>
     </div>
    );
  }
}
