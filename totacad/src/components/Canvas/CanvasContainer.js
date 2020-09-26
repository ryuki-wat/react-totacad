import React, { Component } from 'react'
import { Button, Grid, Menu } from 'semantic-ui-react'
import { ImageSection } from '../Menu/MenuItemContainer'

import shirt1 from '../../images/shirt1.jpg'
import shirt2 from '../../images/shirt2.jpg'
import shirt3 from '../../images/shirt3.jpg'
import shirt4 from '../../images/shirt4.jpg'

class CanvasContainer extends Component {
    state = {
        showShirt: true,
        showPritable: true,
        pane:''
    }

    handleShowShirt = () => {
        this.setState({
            showShirt: !this.state.showShirt
        })
    }

    handleShowPrintable = () => {
        this.setState({
            showPritable: !this.state.showPritable
        })
    }
    image_clicked=(source)=>{
        // Based on the source or any additional parameter you send do any re-render logic
        // example:
        if (source === 's1.jpg'){
            this.setState({pane : this.shirt1});
        }
        if (source === 's2.jpg'){
            this.setState({pane : this.shirt2});
        }
        if (source === 's3.jpg'){
           this.setState({pane : this.shirt3});
        }
        if (source === 's4.jpg'){
           this.setState({pane : this.shirt4});
        }
    }

    render() {
        const style = {
            printable: {
                position: 'absolute',
                width: '250px',
                height: '250px',
                border: "1px solid #000",
                left: '11.4em',
                top: '13em'
            }
        }
        return (
            <div className="canvas-container">
                <Grid>
                    <Grid.Row centered={true}>
                        <Menu>
                            <Menu.Item>
                                <Button onClick={this.handleShowShirt}>
                                    {this.state.showShirt ? "Hide Shirt" : "Show Shirt"}
                                </Button>
                            </Menu.Item>
                            <Menu.Item>
                                <Button onClick={this.handleShowPrintable}>
                                    {this.state.showPritable ? "Hide Printable Area" : "Show Printable Area"}
                                </Button>
                            </Menu.Item>
                            <Menu.Item>
                                <Button>
                                    Reset
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </Grid.Row>
                    <Grid.Row>
                      { this.state.showShirt ? <img src={shirt1} alt=""/> : <h1>No Shirt</h1> }
                        
                    { this.state.showPritable ?<div className="printable-area" style={style.printable}></div> :
                            
                    <div className="bottom_image_area">
                    <ImageSection image_clicked={this.image_clicked}/>
                   {/*  <img src={this.state.pane} alt=''/> */}
                </div>
                            
                    }
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default CanvasContainer