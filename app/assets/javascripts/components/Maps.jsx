class Maps extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
    this.createMap = this.createMap.bind(this);
  }

  componentDidMount(){
    this.createMap(); 
  }

  createMap(){
    //new google.maps.Map(this.refs.map_canvas.getDOMNode());
  }
  render(){
    return(
      <div>
        <div className="container">
	    <div ref="map_canvas">
	    </div>
	</div>
      </div>
    );
  }
}
