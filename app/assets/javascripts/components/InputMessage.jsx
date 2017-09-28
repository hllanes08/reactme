class InputMessage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
    this.onTextChange = this.onTextChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  onTextChange(event){
    this.setState({ text: event.target.value});
  }
  
  keyPress(e){
    var instance = this;
    var tg = e.target;
    if(e.keyCode == 13){
      var onSuccess = function(response){ 
        instance.setState({ text: ''});
        tg.value = '';
      }
      var onError = function(response){
        console.log(response);
      }

      $.ajax({
        method: 'POST',
        url: '/messages',
        data: { message: { text: e.target.value }},
        dataType: "json",
        success: onSuccess, 
        error: onError
      });
    }
  }

  render(){
    return(
      <div>
         <div className="col-md-12">
           <div className="form-group">
             <textarea className="form-control" placeholder="Write a message and press enter/Escribe un texto y presiona enter" rows="5" onChange={this.onTextChange} onKeyDown={this.keyPress}></textarea>
           </div>
          </div>
      </div>
    );
  }
}
