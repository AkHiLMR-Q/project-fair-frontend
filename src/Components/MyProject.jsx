import React, { useContext, useEffect, useState } from 'react';
import AddProject from '../Components/AddProject';
import { AiFillGithub } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteAUserProjectAPI, getAUsersProjectAPI } from '../../Services/allAPIs';
import { addProjectResponseContext, editProjectResponseContext } from '../ContextAPI/ContextShare';
import EditProject from './EditProject';

function MyProject() {
    const { addProjectResponse, setAddProjectResponse } = useContext(addProjectResponseContext);
    const { editProjectResponse, setEditProjectResponse } = useContext(editProjectResponseContext);
    const [userProjects, setUserProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getUserProjects = async () => {
        setLoading(true);
        setError(null);

        try {
            const token = sessionStorage.getItem('token');
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": "bearer " + token
            };
            const result = await getAUsersProjectAPI(reqHeader);
            setUserProjects(result.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUserProjects();
    }, [addProjectResponse, editProjectResponse]);

    const deleteUserProject = async (pid) => {
        const token = sessionStorage.getItem("token");
        if (token) {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": "bearer " + token
            };
            try {
                await deleteAUserProjectAPI(pid, reqHeader);
                setUserProjects(prevProjects => prevProjects.filter(project => project._id !== pid));
                alert("Project deleted successfully");
            } catch (error) {
                console.error("Error deleting project:", error);
                alert("An error occurred while deleting the project. Please try again.");
            }
        }
    };

    return (
        <div>
            <div className='d-flex justify-content-between '>
                <h3 className='ms-5'>My Projects</h3>
                <AddProject />
            </div>
            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : userProjects.length > 0 ? (
                    userProjects.map(item => (
                        <div className="row shadow m-4 p-5" key={item._id}>
                            <div className="col-6">
                                <h4>{item.title}</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-between">
                                <button className='btn btn-light text-dark'><AiFillGithub /></button>
                                <EditProject projects={item} />
                                <button onClick={() => deleteUserProject(item._id)} className='btn btn-light text-dark'><RiDeleteBin5Line /></button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No projects</p>
                )}
            </div>
        </div>
    );
}

export default MyProject;
