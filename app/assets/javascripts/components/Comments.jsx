class Comments extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      object: this.props.object,
      messages: this.props.messages
    }
  }

  messagesItems(){
    return this.state.messages.map((message, index) => {
      return <div key={index} className="alert alert-success" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>{message.text}</strong>
        </div>;
    })
  }

  render(){
    return(
      <div>
        <div className="container">
          <div className="row">
          <div className="media">
            <div className="media-left">
	      <img src={this.state.object.avatar} className="media-object"/>
  	    </div>
  	   <div className="media-body">
    	     <h4 className="media-heading">{this.state.object.name}</h4>
    	     <p>Lorem ipsum...</p>
           </div>
          </div>
        </div>
        <br/>
        <div className="row">
        { this.messagesItems() }
        </div>
        <div className="row">
          <InputMessage />
        </div>
        </div>
      </div>
    );
  }
}
