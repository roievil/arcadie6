import { FunctionComponent, useContext } from "react";
import { Category, IContextState } from "../types";
import { GlobalContext } from "../context/GlobalContext";

export const NavItem: FunctionComponent<{ value: Category | "All" }> = ({
  value,
}) => {
  const { currentCategory, setCurrentCategory, setCurrentProject } = useContext(
    GlobalContext
  ) as IContextState;
  let className =
    "capitalize cursor-pointer font-normal text-gray-700 hover:text-gray-400";
  if (currentCategory === value) className += " font-bold";

  return (
    <li
      className={className}
      onClick={() => {
        setCurrentProject(null);
        setCurrentCategory(value);
      }}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent = (props) => {
  return (
    <div className="flex px-4 pt-2 space-x-3 text-sm md:text-base overflow-x-auto list-none">
      <NavItem value="All" {...props} />
      <NavItem value="Programmation" {...props} />
      <NavItem value="Modélisation" {...props} />
      <NavItem value="Découpe numérique" {...props} />
      <NavItem value="Ebénisterie" {...props} />
      {/* <NavItem value="Travail du Cuir" {...props} />
      <NavItem value="Travail du Bois" {...props} /> */}
    </div>
  );
};

export default ProjectsNavbar;
