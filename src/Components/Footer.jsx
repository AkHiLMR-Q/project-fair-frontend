// import React from 'react'

// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// function Footer() {
//   return (
//     <div>
//       <MDBFooter className='bg-light text-center text-white '>
//       <MDBContainer className='p-4 pb-0'>
//         <section className='mb-4'>
//           <MDBBtn outline color="white" floating className='m-1 text-white' href='#!' role='button'>
//             <MDBIcon fab icon='facebook-f' />
//           </MDBBtn>

//           <MDBBtn outline color="white" floating className='m-1 text-white' href='#!' role='button'>
//             <MDBIcon fab icon='twitter' />
//           </MDBBtn>

//           <MDBBtn outline color="white" floating className='m-1 text-white' href='#!' role='button'>
//             <MDBIcon fab icon='google' />
//           </MDBBtn>
//           <MDBBtn outline color="white" floating className='m-1 text-white' href='#!' role='button'>
//             <MDBIcon fab icon='instagram' />
//           </MDBBtn>

//           <MDBBtn outline color="white" floating className='m-1 text-white' href='#!' role='button'>
//             <MDBIcon fab icon='linkedin-in' />
//           </MDBBtn>

//           <MDBBtn outline color="white" floating className='m-1 text-white' href='#!' role='button'>
//             <MDBIcon fab icon='github' />
//           </MDBBtn>
//         </section>
//       </MDBContainer>

//       <div className='text-center p-3 text-black' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2024 Copyright:
//         <a className='text-black' href='https://mdbootstrap.com/' style={{textDecoration:'none'}}>
//           Projectfair.com
//         </a>
//       </div>
//     </MDBFooter>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter color='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' className='mb-4 mb-lg-0'>
            <p className='text-uppercase fw-bold mb-4'>Follow Us</p>
            <div className='d-flex justify-content-center justify-content-lg-start'>
              <MDBBtn social='fb' className='m-1'>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>
              <MDBBtn social='tw' className='m-1'>
                <MDBIcon fab icon='twitter' />
              </MDBBtn>
              <MDBBtn social='gplus' className='m-1'>
                <MDBIcon fab icon='google' />
              </MDBBtn>
              <MDBBtn social='ins' className='m-1'>
                <MDBIcon fab icon='instagram' />
              </MDBBtn>
              <MDBBtn social='li' className='m-1'>
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>
              <MDBBtn social='git' className='m-1'>
                <MDBIcon fab icon='github' />
              </MDBBtn>
            </div>
          </MDBCol>
          <MDBCol lg='6' className='mb-4 mb-lg-0'>
            {/* You can add additional sections here */}
          </MDBCol>
          <MDBCol lg='3' className='mb-4 mb-lg-0'>
            <p className='text-uppercase fw-bold mb-4'>ProjectFair.com</p>
            <p>
              &copy; 2024 ProjectFair.com. All rights reserved.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;
