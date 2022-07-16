export default function ProjectCard({ title, description, coverImage, link }) {
  console.log("coverImage", coverImage);
  return (
    <article className="display-flex gap-1 align-items-center border px-2 py-1 mb-1 max-width-500">
      <img width="200" src={coverImage} />
      <div>
        <h3>{title}</h3>
        <p className="mb-1">{description}</p>
        <a className="button" href={link} target="_blank" rel="noreferrer">
          See more
        </a>
      </div>
    </article>
  );
}
