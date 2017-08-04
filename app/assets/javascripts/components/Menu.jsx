class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid"> 
              <div className="navbar-header">
                <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="react_navbar">
		<span className="sr-only">Toggle Navigation</span>
                <span className="icon-bar"></span>
		<span className="icon-bar"></span>
		<span className="icon-bar"></span>
                </button>
                <a className="navbar-brand">Reactme</a>
              </div>
            <div className="collapse navbar-collapse" id="react_navbar"> 
              <ul className="nav navbar-nav">
                <li className="active"><a>Home</a></li>
                <li><a>Menu 1</a></li>
                <li><a>Menu 2</a></li>
                <li><a>Menu 3</a></li>
              </ul>
            </div>
          </div>
        </nav> 
      </div>
    );
  }
}
