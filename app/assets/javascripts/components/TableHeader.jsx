class TableHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      headers: this.props.headers
    };
  }

  render(){
    let headers = this.state.headers.map((header, index) =>
      <th key={index}>{header.name}</th>
     ) 
    return( 
        <thead>
          <tr>
          { headers }
          </tr>
        </thead> 
    );
  }
}
