import "../App.css";

function Footer() {
  return (
    <>
      <footer className="text-white bg-primary w-100">
        <div className="container-fluid">
          <div className="row"></div>
        </div>
        {/* for design purpose blank  */}
        <div className="container w-100 ">
          <div className="mt-4 text-center ">
            <img src="/logo.png" className="bg-light logo" alt="" />
          </div>

          <hr />

          {/* Address */}
          <div className="row d-flex align-item-center justify-content-evenly mb-3 ms-1 me-1">
            <div className="col-md-3 bg-light text-dark text-center mt-3 footBor">
              <h3 className="mt-3 mb-3 text-primary">Address</h3>
              <p className="psize">
                Street Address MIG-332 Darpan Colony,Thatipur,Gwalior
              </p>

              <h5 className="text-primary  text-bold">Follow US</h5>

              <a href="https://www.youtube.com/@pninfosys">
                <button className=" col-md-2 text-center text-white btn btn-sm btn-border border-0  ">
                  <i className="fa-brands fa-youtube fa-2x text-danger"></i>
                </button>
              </a>

              <a href="" className="ms-3">
                <button className="col-md-2 text-center text-white btn btn-sm  btn-border border-0 ">
                  <i className="fa-brands fa-facebook fa-2x text-primary"></i>
                </button>
              </a>
            </div>

          {/* location */}
            <div className="col-md-3 mt-5 ms-2 mb-3 footBor bg-light">
              <div className="card  ">
                <div className="ms-2 ">
                  <h3 className="text-primary text-center"><i className="fa-regular fa-map fa-lg"
                    style={{ color: "black" }}
                  ></i>  Location
                  </h3>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14318.58576521236!2d78.2068855!3d26.2081772!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1702986219972!5m2!1sen!2sin" className="w-100"></iframe>

                
              </div>
            </div>

            {/* Contact */}
            <div className="col-md-3 bg-light text-dark mt-3 text-center footBor">

              <h3 className="mt-3 mb-1 text-primary mb-3">Contact Us</h3> 
              <p className="psize">
                <b className="">Email : </b> <br /> &nbsp; www.pninfosys.com
                <br />
                &nbsp;support@pninfosys.com
                <br />
                <b>Phone : </b> <br /> +91 7000846823 , +91 7415289378
              </p>

             
            </div>
          </div>
        </div>

        <hr />

        <div className="container">
          <div className="row ">
            <div className="copywrite  mt-1 d-flex align-item-center justify-content-evenly">
              <h6 className=" mb-2">© 2023 PNINFOSYS</h6>
              <p>Terms of Use | Privacy & Cookie statement | Disclaimer</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
