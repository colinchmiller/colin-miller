export function About(props) {
  return (
    <div className="container">
      <div className="row mt-5">
        <h1>My Journey</h1>
        <p>
          I'm someone that likes to learn by doing, getting my hands dirty, and
          that's exactly the path that I followed getting into technology. I
          started out working at Geek Squad for Best Buy, learning about
          computers as I pursued A+ certification. I've continued that process
          with web development.
        </p>
      </div>
      <div className="row">
        <h2>Interests</h2>
        <p>
          I'm not just a web developer. I've got other interests as well. Some
          of these include:
        </p>

        <div className="card p-2 mb-2">
          <h3>Plants</h3>
        </div>
        <div className="card p-2 mb-2">
          <h3>Dogs</h3>
        </div>
        <div className="card p2 mb-2">
          <h3>Writing</h3>
        </div>
      </div>
    </div>
  );
}
