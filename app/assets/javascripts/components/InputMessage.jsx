class InputMessage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div>
         <div className="col-md-12">
           <div className="form-group">
             <textarea className="form-control" placeholder="Write a message" rows="5" onChange={this.onTextChange}></textarea>
           </div>
          </div>
      </div>
    );
  }
}
