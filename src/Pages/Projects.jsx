import React, { useEffect, useState } from 'react'
import ProjectCard from '../Components/ProjectCard'
import { getUsersProjectAPI } from '../../Services/allAPIs'
import { BsPersonFill } from 'react-icons/bs';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Projects() {

  const [searchKey,setSearchKey]=useState("")//1 to hold the search key

  const [AllUserProject, setAllUserProject]=useState([])

  const getAllUsersProjects=async(req,res)=>{

//get token

if(sessionStorage.getItem('token')){
  const token=sessionStorage.getItem('token');
  const reqHeader={
    "Content-Type": "application/json",
    "Authorization": "bearer " + token
  }

  //API CALL

    const result = await getUsersProjectAPI(searchKey,reqHeader)
    console.log(result);
  if(result.status===200){
    setAllUserProject(result.data)
  }else{
    console.log(result.response.data);
  }
}

  }
  console.log(AllUserProject);
   

  useEffect(()=>{
    getAllUsersProjects()
  },[searchKey])

  console.log(searchKey);

  return (
    
    <div style={{backgroundColor:"rgba(0,49,64,255)"}}>
      <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/' className='text-black fw-bold'>
          <BsPersonFill className='fs-3 text-black mx-3' />
          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px' }}>Project Fair</span>
        </MDBNavbarBrand>
       
      </MDBContainer>
    </MDBNavbar>
      <h2 className='text-center m-5'>All Projects</h2>
      <input type="text"onChange={e=>setSearchKey(e.target.value)} style={{width:'400px', alignItems:'center'}} placeholder='Search By Technology' className='form-control mx-auto m-5'/>
      <div className="row">
       {
        AllUserProject.length>0? AllUserProject.map(item=>(
          <div className="col m-5">
          <ProjectCard project={item}/>
        </div>
        )):"cant fetch all projects"
       }
      </div>
    </div>
  )
}

export default Projects


// import React, { useEffect, useState } from 'react';
// import ProjectCard from '../Components/ProjectCard';
// import { getUsersProjectAPI } from '../../Services/allAPIs';

// function Projects() {
//   const [AllUserProject, setAllUserProject] = useState([]);

//   const getAllUsersProjects = async () => {
//     // Get token
//     if (sessionStorage.getItem('token')) {
//       const token = sessionStorage.getItem('token');
//       const reqHeader = {
//         "Content-Type": "application/json",
//         "Authorization": "bearer " + token
//       };

//       try {
//         // Fetch user projects
//         const result = await getUsersProjectAPI(reqHeader);
//         console.log(result); // Log the result to understand its structure
//         if (result.status === 200) {
//           setAllUserProject(result.data);
//         } else {
//           console.error(result.response.data); // Log the error response if status is not 200
//           // Handle error here, like showing a message to the user
//         }
//       } catch (error) {
//         console.error("Error fetching projects:", error); // Log any other errors
//         // Handle error here, like showing a message to the user
//       }
//     }
//   };

//   useEffect(() => {
//     getAllUsersProjects();
//   }, []);

//   return (
//     <div>
//       <h2 className='text-center m-5'>All Projects</h2>
//       <input type="text" style={{ width: '400px', alignItems: 'center' }} placeholder='Search By Technology' className='form-control mx-auto m-5' />
//       <div className="row">
//         {AllUserProject.length > 0 ? AllUserProject.map(item => (
//           <div className="col m-5" key={item.id}>
//             <ProjectCard project={item} />
//           </div>
//         )) : <p className="text-center">No projects available</p>}
//       </div>
//     </div>
//   );
// }

// export default Projects;
