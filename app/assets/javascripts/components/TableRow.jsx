class TableRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      item: this.props.item,
    };
  }

  itemsAttr(){
    return this.state.item.map((attr, index) => {
      switch(this.state.type) {
        case 'label':
          return <td key={index}><label>{attr.value}</label></td>
        case 'input':
          return <td key={index}><input className="form-control">{attr.value}</input></td>
        default:
          return <td key={index}><p>{attr.value}</p></td>;
       }
     })
  }

  render(){
    //let tds =  this.state.item.map((attr, index) =>
    //  <td key={index}><p>{attr.value}</p></td>
   // )

    return( 
        <tr>
        { this.itemsAttr() }
        </tr>
    );
  }
}
