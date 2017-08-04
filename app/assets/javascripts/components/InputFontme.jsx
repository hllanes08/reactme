class InputFontme extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      default_font: 'Sans Serif',
      inputText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      labelClass: 's1' 
    }
    this.onFontChange = this.onFontChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  } 

  onFontChange(event){
    var font = event.target.getAttribute('data-font');
    switch(font) {
      case '1':
        this.setState({ labelClass: 's1'}); 
        break;
      case '2':
	this.setState({ labelClass: 's2'}); 
        break;
      case '3':
	this.setState({ labelClass: 's3'}); 
        break;
    }
    event.preventDefault();
  }
 
  onTextChange(event){
    this.setState({ inputText: event.target.value}); 
  }

  render(){
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
               <div className="form-group">
                 <label>Escribe un texto</label>
                 <textarea className="form-control" rows="5" onChange={this.onTextChange}></textarea>
               </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label>Elige una fuente</label>
              <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.default_font}<span className="caret"></span></button>
		<ul className="dropdown-menu">
    		  <li><a href="#" onClick={this.onFontChange} data-font="1">Sans Serif</a></li>
    		  <li><a href="#" onClick={this.onFontChange} data-font="2">Arial</a></li>
    		  <li><a href="#" onClick={this.onFontChange} data-font="3">Tahoma</a></li>
  		</ul>
	      </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="caption" className={this.state.labelClass}>
                <p>{this.state.inputText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
