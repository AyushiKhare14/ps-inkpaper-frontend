import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Leftsidebar from '../components/common/Leftsidebar'
import { Outlet } from 'react-router-dom'
import Displaycards from '../components/admin/Displaycards'
import { useLocation } from 'react-router-dom';
import Rightsidebar from '../components/common/Rightsidebar'


function Adminhomepage() {
    let location = useLocation();
    // console.log(location.pathname)
  return (
    <>
        <div className='col-sm-12 '>
            <Header />
        </div>
        <div className='container'>
        <div className='row h-100' >
        
            {/* Left side bar */}
            <div className='col-sm-2 d-none d-sm-block ' >
                <Leftsidebar />
            </div>

            {/* Middle section that will change. */}
            <div className='col-12 col-sm-8 mt-4 main-container' >
                <Displaycards/>
                <hr></hr>
                <div className='col-12 '>
                    <Outlet/>
                </div>
            </div>

            {/* Right side bars */}
            
            <div className=' d-flex col-sm-2  d-none d-sm-block ' >
                <Rightsidebar />
                
            </div>
        </div>
        </div>
        
        
        <div className=''>
            <Footer />
        </div>
    </>
  )
}

export default Adminhomepage



// import React from 'react';
// import Header from '../components/common/Header';
// import Footer from '../components/common/Footer';
// import Leftsidebar from '../components/common/Leftsidebar';
// import { Outlet } from 'react-router-dom';
// import Displaycards from '../components/admin/Displaycards';
// import { useLocation } from 'react-router-dom';
// import Rightsidebar from '../components/common/Rightsidebar';

// function Adminhomepage() {
//   const location = useLocation(); // Get current location

//   return (
//     <>
//       <div className='col-sm-12 '>
//         <Header /> {/* Header */}
//       </div>
//       <div className='container'>
//         <div className='row h-100'>
//           {/* Left Side Bar (optional overflow) */}
//           <div className='col-sm-2 d-none d-sm-block overflow-auto'>
//             <Leftsidebar />
//           </div>

//           {/* Scrollable Content Area */}
//           <div className='col-12 col-sm-8 mt-4 scrollable-content'>
//             <Displaycards /> {/* Display cards */}
//             <hr />
//             <div className='col-12'>
//               <Outlet /> {/* Nested routes */}
//             </div>
//           </div>

//           {/* Right Side Bar (optional overflow) */}
//           <div className='col-sm-2 d-none d-sm-block overflow-auto'>
//             <Rightsidebar />
//           </div>
//         </div>
//       </div>
//       <div className=''>
//         <Footer /> {/* Footer */}
//       </div>
//     </>
//   );
// }

// export default Adminhomepage;

// // CSS for scrollable content (optional):

