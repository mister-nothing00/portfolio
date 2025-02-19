<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useState } from "react";
=======
import React, { createContext, useContext, useState } from "react";
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
import Swal from "sweetalert2";

import axios from "axios";

<<<<<<< HEAD

const ProjectsContext = createContext();


=======
// Crea un contesto per i progetti
const ProjectsContext = createContext();

// Funzione che fornisce i progetti e le funzioni per interagire con l'API
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

<<<<<<< HEAD

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/api/project/all");
      setProjects(response.data);
=======
  // Funzione per caricare tutti i progetti
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/project/all");
      setProjects(response.data);

>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
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
<<<<<<< HEAD
          "Content-Type": "multipart/form-data",
=======
          "Content-Type": "multipart/form-data", // Importante per l'invio di file
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
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

<<<<<<< HEAD
  
=======
  // Funzione per eliminare un progetto
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
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
<<<<<<< HEAD
        icon: "error",
        title: "Errore nella cancellazione del progetto",
=======
        icon: "success",
        title: "Progetto cancellato correttamente !",
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
        showConfirmButton: false,
        timer: 1500,
      });
      setError(err.message)
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD

  useEffect(()=>{
    fetchProjects()
  },[])
=======
>>>>>>> d6953083819fe6e426f84f2c22ced656f1cf68a0
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
