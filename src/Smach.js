import React from 'react';

const SlotM = (props) => {
   
  let {x, y, z} = props;
  
    if ((x===y) && (y===z) ) {
      return (
        <>
          <div className='slot_inner'>
            <h2>
              {x} {y} {z}
            </h2>
            <h1>This is Matching</h1>
            <hr/>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className='slot_inner'>
            <h2>
              {x} {y} {z}
            </h2>
            <h1>This is not Matching</h1>
            <hr></hr>
          </div>
        </>
      )
    }
  }

  export default SlotM;