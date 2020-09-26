import React, { Component } from 'react'
import { Menu,Grid } from 'semantic-ui-react'
//import CanvasContrainer from '../Canvas/CanvasContainer';

import shirt1 from '../../images/s1.jpg'
import shirt2 from '../../images/s2.jpg'
import shirt3 from '../../images/s3.jpg'
import shirt4 from '../../images/s4.jpg'

export const MenuItemm = class menuItemContainer extends Component {
  state = {
    clickShirt1:false,
    clickShirt2:false,
    clickShirt3:false,
    clickShirt4:false
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleClickBtn=()=>{
    //console.log('clicked')
    this.setState({
      clickShirt1:true
     
    })
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className="menuItem-container">
        <Grid>
        <Grid.Row >
        <Menu>
          <Menu.Item
            name='SHIRTS'
            active={activeItem === 'SHIRTS'}
            //onClick={this.handleItemClick}
            >
            SHIRTS
        </Menu.Item>
        </Menu>
          </Grid.Row>
        </Grid>
       
      </div>
    )
  }
}

export const ImageSection =class ImageSection extends Component {
  render() {
    //let image_clicked = this.props.image_clicked;
         return(
          <div>
          <Grid>
          <Grid.Row>
         
          <button onClick={this.props.image_clicked}> <img src={shirt1} alt=""/> </button>
          
          <button onClick={this.props.image_clicked}><img src={shirt2} alt=""/></button> 
   
          <button onClick={this.handleClickBtn}><img src={shirt3} alt=""/></button> 
           
          <button onClick={this.handleClickBtn}><img src={shirt4} alt=""/></button> 
           
             </Grid.Row>
           </Grid>
          </div>
      )
  }
}