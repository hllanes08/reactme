class Table extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: this.props.items,
      items_list: this.props.items
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event){
    if(event.target.value.length > 0){
      var results = this.state.items.filter(function(item){
        return (item[3].value.indexOf(event.target.value) !== -1);
      });
      results = (results || []);
      this.setState({
        items_list: results
      });
    }
    else{
      this.setState({ items_list: this.state.items});
    } 
    this.forceUpdate();
  }
  
  render(){ 
    return(
      <div>
        <div className="container">
        <div className="row">
          <div className="form-group">
            <div className="input-group col-md-4">
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button">Search by email</button>
              </span>
              <input type="text" className="form-control" placeholder="Search" onChange={this.onSearchChange}/>
            </div>
          </div>
        </div>
        <br/> 
        <div className="row">
          <table className="table table-bordered">
            <TableHeader headers={this.props.headers}/>
            <tbody>
             { 
               this.state.items_list.map((item, index) =>
                 <TableRow item={item} key={index} />
    	       )
	     }
            </tbody>
          </table>
        </div>
      </div>
     </div>
    );
  }
}
