import ProjectCard from "./ProjectCard";
import image from "../../images/palm-trees.jpg";

export default function MyProjects() {
  // showcase your projects

  const project = [
    {
      id: 1,
      title: "ToDo List App",
      description: "this is an app that keeps track of your todos",
      coverImage: image,
      link: "https://unsplash.com/photos/p0yAVdnx5cU"
    },
    {
      id: 2,
      title: "Grocegry List App",
      description: "This app allow to keep track of your grocegry items",
      coverImage: image,
      link: "https://unsplash.com/photos/p0yAVdnx5cU"
    }
  ];

  return (
    <section id="my-projects">
      <ul className="list-style-none">
        {project.map((item, index) => (
          <li>
            <ProjectCard key={item.id} {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
