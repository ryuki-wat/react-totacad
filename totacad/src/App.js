import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
 
} from "react-router-dom";


import { Grid } from 'semantic-ui-react'
import MenuContrainer from './components/MenuBar/MenuContainer';
import CanvasContrainer from './components/Canvas/CanvasContainer';
import { MenuItemm,ImageSection } from './components/Menu/MenuItemContainer'


// const artist = () => {
//   return (
//     <h1>Print artist Page</h1>
//   )
// }

// const allproduct = () => {
//   return (
//     <h1>Print allproduct Page</h1>
//   )
// }

function App() {
  return (
    <Router>
    <div>
     
      <Grid.Row>
        <MenuContrainer></MenuContrainer>
      </Grid.Row>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column width={4}>
          a
          </Grid.Column>

          <Grid.Column width={8}>
            <CanvasContrainer></CanvasContrainer>
          </Grid.Column>
          <Grid.Column width={4}>
            
            <MenuItemm/>
            <ImageSection/> 

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    </Router>
  );
}

export default App;