

// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
// import { addProfileAPI } from '../../Services/allAPIs';

// function Profile() {
//   const handleClose = () => setShow(false);
//   const [preview, setPreview] = useState("");
//   const [filestatus, setFileStatus] = useState(false);
//   const [projectdata, setProjectdata] = useState({
//     username: "",
//     github: "",
//     livelink: "",
//     profile: ""
//   });
//   const [token, setToken] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   console.log(projectdata);

//   const updateUser = async () => {
//     const { username, github, livelink, profile } = projectdata;
//     if (!username || !github || !livelink || !profile) {
//       alert("Please fill all the fields");
//     } else {
//       const reqBody = new FormData();
//       reqBody.append("username", username);
//       reqBody.append("github", github);
//       reqBody.append("livelink", livelink);
//       reqBody.append("profile", profile);

//       if (token) {
//         const reqHeader = {
//           "Content-Type": "multipart/form-data",
//           "Authorization": `bearer ${token}`
//         };

//         try {
//           const result = await addProfileAPI(reqBody, reqHeader);
//           console.log(result);
//           if (result.status === 200) {
           
//             Swal.fire({
//               title: 'Success',
//               text: 'User details updated',
//               icon: 'success',
//               confirmButtonText: 'Back'
//             });
//             setSubmitted(true);
//           } else {
//             alert(result.response.data);
//             handleClose()
//           }
//         } catch (error) {
//           console.error("Error:", error);
//           alert("An error occurred. Please try again.");
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     console.log(projectdata.profile.type);
//     if (projectdata.profile.type === "image/png" || projectdata.profile.type === "image/jpeg" || projectdata.profile.type === "image/jpeg") {
//       console.log("generate image url");
//       setPreview(URL.createObjectURL(projectdata.profile));
//       setFileStatus(false);
//     } else {
//       setFileStatus(true);
//       console.log("please upload following image extension(png,jpeg,jpg)only...");
//     }
//   }, [projectdata.profile]);

//   useEffect(() => {
//     if (sessionStorage.getItem("token")) {
//       setToken(sessionStorage.getItem("token"));
//     } else {
//       setToken("");
//     }
//   }, []);

//   return (
//     <div>
//       <div className='text-center'>
//         <h3 className='mt-5'>My Profile</h3>
//         {!submitted ? (
//           <label className="profile-photo-label" style={{ display: 'inline-block', position: 'relative' }}>
//             <input
//               type="file"
//               onChange={(e) => setProjectdata({ ...projectdata, profile: e.target.files[0] })}
//               className="profile-photo-input"
//               style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
//             />
//             <div className="profile-photo-preview" style={{ position: 'relative', width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden' }}>
//               {preview ? (
//                 <img src={preview} alt="Profile Preview" className="profile-photo-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//               ) : (
//                 <img src="https://static.thenounproject.com/png/556457-200.png" alt="Placeholder" className="profile-photo-placeholder" style={{ width: '100%', height: '100%' }} />
//               )}
//               <span className="profile-photo-text" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', textAlign: 'center', opacity: 0, transition: 'opacity 0.3s ease' }}>Upload Photo</span>
//             </div>
//           </label>
//         ) : (
//           <img src={preview || "https://static.thenounproject.com/png/556457-200.png"} alt="" style={{ width: '200px', borderRadius: '50%' }} />
//         )}
//         <div className='mx-5 px-5'>
//           <input type="text" onChange={e => setProjectdata({ ...projectdata, username: e.target.value })} placeholder='name' className='form-control mb-2' />
//           <input type="text" onChange={e => setProjectdata({ ...projectdata, github: e.target.value })} placeholder='GitHub' className='form-control mb-2' />
//           <input type="text" onChange={e => setProjectdata({ ...projectdata, livelink: e.target.value })} placeholder='Live Link' className='form-control mb-2' />
//           {!submitted && <button className='btn btn-dark m-4' onClick={updateUser}>Update</button>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';

function Profile() {
  const [preview, setPreview] = useState("");
  const [profileData, setProfileData] = useState({
    username: "",
    github: "",
    profile: null
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile') {
      const file = files[0];
      setProfileData({ ...profileData, profile: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setProfileData({ ...profileData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, github, profile } = profileData;
    if (!username || !github || !profile) {
      Swal.fire({
        title: 'Error',
        text: 'Please fill all the fields',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Success',
        text: 'Profile Created',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      setSubmitted(true);
    }
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  return (
   <div>
     <div className="container p-5">
      <div className="text-center ">
        <h3>My Profile</h3>
        {!submitted ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername" className=" mt-1"style={{marginRight:"100px",marginLeft:"100px"}}>
              <Form.Label></Form.Label>
              <Form.Control type="text" name="username" placeholder="Enter username" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formGithub" className="mt-1" style={{marginRight:"100px",marginLeft:"100px"}}>
              <Form.Label></Form.Label>
              <Form.Control type="text" name="github" placeholder="Enter GitHub link" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formProfileImage" className="mt-1" style={{marginRight:"100px",marginLeft:"100px"}}>
              <Form.Label></Form.Label>
              <Form.Control type="file" name="profile" accept="image/*" onChange={handleInputChange} />
            </Form.Group>

            <Button variant="primary m-4" type="submit">Create Profile</Button>
          </Form>
        ) : (
          <Card className="text-center mt-4 shadow " style={{alignItems:"center"}}>
          <Card.Img variant="top" src={preview} className="img-fluid rounded-squre mt-3 " style={{ width: '150px', height: '150px', objectFit: 'cover',  alignItems:"center"}} />
          <Card.Body>
            <Card.Title style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{profileData.username}</Card.Title>
            <Card.Text style={{ fontSize: '16px', marginBottom: '15px' }}>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007bff' }}>GitHub Profile</a>
            </Card.Text>
            <Button variant="secondary" onClick={handleEdit} style={{ fontSize: '16px', padding: '10px 30px', borderRadius: '25px' }}>Edit Profile</Button>
          </Card.Body>
        </Card>
        
        )}
      </div>
    </div>
   </div>
  );
}

export default Profile;
