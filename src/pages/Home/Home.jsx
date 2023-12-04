import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        // id="intro-example"
        className=" text-center bg-image "
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")',
            height:"93vh",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover"
        }}
      >
        <div className="masks" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" ,height:"93vh",}}>
          <div className="d-flex justify-content-center align-items-center "
            style={{
                height:"93vh"
            }}
          >
            <div className="text-white container">
              <h1 className="mb-3">This is Home page is</h1>
              <h5 className="mb-4">
                The button click is show api data 
              </h5>
              <Link
                data-mdb-ripple-init=""
                className="btn btn-outline-light btn-lg"
                href="https://mdbootstrap.com/docs/standard/"
                target="_blank"
                role="button"
                to={"api"}
              >
                Click an show data card page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
