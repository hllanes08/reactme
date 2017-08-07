class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menus: this.props.menus
    };
  } 

  render(){
    var menus_items = this.state.menus.map((menu, index) =>
      <li  key={index}><a href={menu.path}>{menu.key}</a></li>
    )
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
                { menus_items } 
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
