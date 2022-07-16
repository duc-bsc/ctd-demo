import image from "../../images/palm-trees.jpg";

export default function AboutMe() {
  return (
    <section id="about-me" className="border-bottom px-2">
      <div
        style={{
          background: `url(${image})`
        }}
        className="border-right border-left min-height-100vh display-flex gap-16 align-items-center"
      >
        <div className="text-block px-1">
          <p>My name is Duc, and I am a React developer.</p>
          <a className="button text-decoration-none" href="#my-projects">
            See my projects
          </a>
        </div>
      </div>
    </section>
  );
}
