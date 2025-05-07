import "./Post.css";

const Post = () => {
  return (
    <div className="max-width">
      <div className="main-contents gap-1">
        <div className="post">
          <img
            className="img-100 objfit-cover"
            src={"./src/assets/certificate.jpg"}
          />
        </div>
        <div className="post">
          <img
            className="img-100 objfit-cover"
            src={"./src/assets/coffee.jpg"}
          />
        </div>
        <div className="post">
          <img
            className="img-100 objfit-cover"
            src={"./src/assets/commits.jpg"}
          />
        </div>
        <div className="post">
          <img
            className="img-100 objfit-cover"
            src={"./src/assets/fotsal.jpg"}
          />
        </div>
        <div className="post">
          <img className="img-100 objfit-cover" src={"./src/assets/pic.jpg"} />
        </div>
        <div className="post">
          <img
            className="img-100 objfit-cover"
            src={"./src/assets/shadow.jpg"}
          />
        </div>
        <div className="post">
          <img
            className="img-100 objfit-cover"
            src={"./src/assets/sight.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
