import React, { Component } from 'react';
import Nav from './Nav';

export default class BackGroundImage extends Component {
  render() {
    const backgroundImage = {
    //  backgroundImage: `url('https://png.pngtree.com/background/20210710/original/pngtree-dancing-purple-hand-drawn-banner-picture-image_1063674.jpg')`,
  
    backgroundImage: `url('  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjzANWiyjPX_PrpV_Y_1t3ZpwFhUXvNkVjQ&usqp=CAU')`, 
  };

    return (
      <div>
      <div className="bg-image p-5 shadow-1-strong rounded mb-5" style={backgroundImage}>
         
      <div><h1 class="mb-3 h2"><Nav/></h1></div>
      <div class="d-flex justify-content-center align-items-center h-100">
      <h1 class="text-white mb-0">My Dance Application</h1>
    </div>
    
      </div>
     
      </div>
    );
  }
}
