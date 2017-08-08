class InputJson extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      jsonResult: JSON.stringify(this.props.menus),
      jsonParse: 'El formato de json esta correcto',
      jsonClass: 'alert alert-success'
    } 
    this.updateMenus = this.updateMenus.bind(this);
  }

  updateMenus(event){
    var js = event.target.value;
    try{
      var json = JSON.parse(js);
      this.setState({menus: json, jsonClass: 'alert alert-success', jsonParse: JSON.stringify(json)});
    } catch(e){
      this.setState({jsonParse: e.message, jsonClass: 'alert alert-danger'})
    }
    this.setState({jsonResult: js});
  }

  render(){
    return(
      <div>
        <div className="container">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="menus-json">json para crear menus</label>
              <textarea id="menus-json" className="form-control" rows="20" cols="10" value={this.state.jsonResult} onChange={this.updateMenus}></textarea>
            </div>
            <div className="form-group">
               <button type="button" className="btn btn-primary">actualizar menu</button>
            </div>

          </div>
          <div className="col-md-6">
            <div className="form-group">
              <div className={this.state.jsonClass}>
		  <strong>{this.state.jsonParse}</strong>
	      </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
