// import React, { createContext, useState } from 'react'

// export const addProjectResponseContext= createContext()
// export const editProjectResponseContext=createContext()

// function ContextShare({children}) {

//     const [addProjectResponse,setAddProjectResponse]=useState("")
//     const [editProjectResponse,setEditProjectResponse]=useState("")
//   return (
//     <>
//         <addProjectResponseContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
//         {children}
//         </addProjectResponseContext.Provider>

//         <editProjectResponseContext.Provider value={{editProjectResponse,setEditProjectResponse}}>
//           {children}
//         </editProjectResponseContext.Provider>
       
//     </>
//   )
// }

// export default ContextShare


import React, { createContext, useState } from 'react';

export const addProjectResponseContext = createContext();
export const editProjectResponseContext = createContext();

function ContextShare({ children }) {
    const [addProjectResponse, setAddProjectResponse] = useState("");
    const [editProjectResponse, setEditProjectResponse] = useState("");

    return (
        <addProjectResponseContext.Provider value={{ addProjectResponse, setAddProjectResponse }}>
            <editProjectResponseContext.Provider value={{ editProjectResponse, setEditProjectResponse }}>
                {children}
            </editProjectResponseContext.Provider>
        </addProjectResponseContext.Provider>
    );
}

export default ContextShare;





// import React, { createContext, useState } from 'react';

// export const addProjectResponseContext = createContext();

// function ContextShare(props) {
//     const [addProjectResponse, setAddProjectResponse] = useState("");

//     return (
//         <addProjectResponseContext.Provider value={{ addProjectResponse, setAddProjectResponse }}>
//             {props.children}
//         </addProjectResponseContext.Provider>
//     );
// }

// export default ContextShare;
