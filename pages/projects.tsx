import { useEffect, useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects as projectsData } from "../data";
import { Category, IContextState } from "../types";
import { GlobalContext } from "../context/GlobalContext";
import ProjectsNavbar from "../components/ProjectsNavbar";

const Projects = () => {
  const { currentCategory, projects, setProjects, currentProject } = useContext(
    GlobalContext
  ) as IContextState;

  useEffect(() => {
    console.log("currentCategory  ", currentCategory);
    if (currentCategory) {
      handlerFilterCategory(currentCategory);
    }
  }, [currentCategory]);

  useEffect(() => {
    console.log("projects has been changed to ", projects);
  }, [projects]);

  const handlerFilterCategory = (category: Category | "All") => {
    console.log("from handlerFilter category has been changed to", category);
    //if category is "All" then we get the original list of projects
    if (category === "All") {
      console.log("category === all");
      setProjects(projectsData);
      // setActive(category);
      return;
    }

    //else we filter the list of projects with the category
    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    //setActive(category);
  };

  if (currentProject) {
    return (
      <div
        className="px-2 md:px-5 py-2 overflow-y-scroll border-gray-400 border-t"
        style={{ height: "88vh" }}
      >
        {/* hide the ProjectsNavbar on large screens*/}
        <div className="flex md:hidden">
          <ProjectsNavbar />
        </div>
        <div className="relative">
          <ProjectCard project={currentProject} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="px-2 md:px-5 py-2 overflow-y-scroll border-gray-400 border-t"
        style={{ height: "88vh" }}
      >
        {/* hide the ProjectsNavbar on large screens*/}
        <div className="flex md:hidden">
          <ProjectsNavbar />
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-3">
          {projects.map((project) => (
            <div
              className="p-2 bg-gray-200 rounded-lg dark:bg-dark-200"
              key={project.name}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Projects;
