import WritingList from "../molecules/WritingList";

const Home = () => {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Arnav Surve</h2>

      <a href="https://github.com/arnavsurve">github</a>
      <br />
      <a href="https://linkedin.com/in/arnavsurve">linkedin</a>
      <br />
      <a href="mailto:arnav@surve.dev">arnav@surve.dev</a>
      <br />
      <p>
        Studying Computer Science at CSU Sacramento. Currently building{" "}
        <a href="https://ynot.lol">Y</a>, a social platform for the{" "}
        <a href="https://en.wikipedia.org/wiki/Semantic_Web">semantic web</a>.
      </p>
      <hr style={{ borderColor: "gray" }} />

      <WritingList />

      <br />
      <br />
      <img
        src="https://64.media.tumblr.com/4b6908703d6c69c9f949927a22441172/c05ac8de92e52b38-42/s2048x3072/1db0b2c4fd4f89c571865ac3ace9fe8da2d1b9f0.jpg"
        alt=""
        style={{ maxWidth: "250px" }}
      />
      <h2>Work</h2>
      <ul>
        <li>
          <a href="https://github.com/EaRu723/ynot.lol-web">Y</a>
        </li>
        <li>
          <a href="https://github.com/arnavsurve/promise">promise</a>
        </li>
      </ul>

      <br />
      <br />
      <img
        src="https://64.media.tumblr.com/dbfb353e4457dc889bb160ae4a849772/7c4eef3239d7163b-be/s2048x3072/88fb52061037283353688a2f130cee47b6698408.jpg"
        alt=""
        style={{ maxWidth: "250px" }}
      />
      <h2>Notes</h2>
    </div>
  );
};

export default Home;
