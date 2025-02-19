import React, { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import axios from "axios";


const ProjectsContext = createContext();


export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/api/project/all");
      setProjects(response.data);
      setLoading(false);
    } catch (err) {
      setError("Errore nel recupero dei progetti");
    } finally {
      setLoading(false);
    }
  };

  const addProject = async (projectData) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/project/add", projectData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProjects((prev) => [...prev, response.data.newProject]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Progetto aggiunto correttamente !",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Errore nell'aggiungere il progetto",
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  
  const deleteProject = async (projectId) => {
    setLoading(true);
    try {
      await axios.delete(`/api/project/project/${projectId}`);
      setProjects((prev) =>
        prev.filter((project) => project._id !== projectId)
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Progetto cancellato correttamente !",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Errore nella cancellazione del progetto",
        showConfirmButton: false,
        timer: 1500,
      });
      setError(err.message)
    } finally {
      setLoading(false);
    }
  };


  useEffect(()=>{
    fetchProjects()
  },[])
  return (
    <ProjectsContext.Provider
      value={{
        projects,
        loading,
        setLoading,
        error,
        fetchProjects,
        addProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

// Custom hook per usare il contesto
export const useProjects = () => useContext(ProjectsContext);
