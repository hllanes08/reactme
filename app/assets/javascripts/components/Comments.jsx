class Comments extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      object: this.props.object,
      messages: this.props.messages
    }
    this.removeMessage = this.removeMessage.bind(this);
    //this.updateMessageList = this.updateMessageList(this);
  }

  messagesItems(){
    return this.state.messages.map((message, index) => {
      return <div key={index} className="alert alert-success" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.removeMessage}>
          <span aria-hidden="true" data-id={message.id}>&times;</span>
        </button>
        <strong>{message.text}</strong>
        </div>;
    })
  }

  removeMessage(event){
    var message_id = $(event.target).data('id');
    var onSuccess = function(response){
      console.log(response);
    }

    var onError = function(response){
    }

    $.ajax({
        method: 'DELETE',
        url: '/messages',
        data: { id: message_id },
        dataType: "json",
        success: onSuccess, 
        error: onError
      });

  }

  componentDidMount() {
    this.setupSubscription();
  }

  updateMessageList(message){
    var messages = this.state.messages;
    messages.push(message);
    this.setState({messages: messages});
    /*var onSuccess = function(response){
      instance.setState({messages: response.messages}); 
    }

    var onError = function(response){
    }

    $.ajax({
        method: 'GET',
        url: '/messages_list',
        data: { },
        dataType: "json",
        success: onSuccess, 
        error: onError
    });*/
  }
  setupSubscription(){
    var instance = this;
    App.messages = App.cable.subscriptions.create('MessagesChannel', {
      received: function(data){
        instance.updateMessageList(data.message)
      },
      renderMessage: function(data){
      },
      speak: function(message){
    
      }
    });
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
          <div className="col-md-12">
          { this.messagesItems() }
          </div>
        </div>
        <div className="row">
          <InputMessage />
        </div>
        </div>
      </div>
    );
  }
}
