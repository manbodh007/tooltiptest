import React from 'react';
import '../App.css';
import {changeVisibility ,changeToolTip} from '../Action';

class App extends React.Component {
  constructor(props){
    super(props);
    this.props.store.subscribe(()=>{
      this.forceUpdate();
    })
  }

// changing the position of tooltip according to input value.
 showToolTip=(e)=>{
   let tag = document.getElementById('tooltip-option');
   this.props.store.dispatch(changeToolTip(tag.value));
 }

 // when hover or mouse-over on button then change the visibility of tooltip from hidden to visible
 hover = ()=>{
      const {change} = this.props.store.getState();
      this.props.store.dispatch(changeVisibility('visible'));
 }
 
// when mouse-leave from button then change the visibility of tooltip from visible to hidden
 hoveroff = ()=>{
    const {change} = this.props.store.getState();
    this.props.store.dispatch(changeVisibility('hidden'));
 }


  render(){
      const {change} = this.props.store.getState();
      console.log(change);
    return (
      <div id = "button" onMouseOver={this.hover} onMouseLeave={this.hoveroff}>
          <select onChange={this.showToolTip} id='tooltip-option'>
            <option>top</option>
            <option>bottom</option>
            <option>left</option>
            <option>right</option>
          </select>
          <div id = 'tooltip' style={change}>
            Its a Sample Tooltip
          </div>
      </div>
   );
  }
}

export default App;





