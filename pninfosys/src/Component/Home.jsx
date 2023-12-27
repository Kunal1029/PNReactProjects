import "../App.css";
// import Header from "./Header";
// import Footer from "./Footer";

function Home() {
  return (
    <>
      {/* <Header /> */}

      <main className="container-fluid mb-5">
        
        <div className="main">
          <div className="container">
            <div className="row"></div>
            <div className="text-center mt-5">
              <h1 className="sizes1">
                <i className="fa-solid fa-chalkboard fa-xl text-primary"></i>{" "}
                Learning Environment,
              </h1>
            </div>
          </div>

          {/* 1st page */}
          <div className="container">
            <h2 className="h2size mt-5 mb-4">Web Designing</h2>
            <div className="row">
              <div className="col-md-6 ">
                <p className="psize">
                  Something which makes PN INFOSYS different from other IT
                  companies is that we train novice students and also make them
                  work on Live projects. Web design refers to the design of
                  websites that are displayed on the internet. It usually refers
                  to the user experience aspects of website development rather
                  than software development. Web design used to be focused on
                  designing websites for desktop browsers; however, since the
                  mid-2010s, design for mobile and tablet browsers has become
                  ever-increasingly important.
                </p>
              </div>

              <div className="col-md-6 oneimg">
                <img src="/1.png" alt="" />
              </div>
            </div>
          </div>

          {/* 2nd page */}
          <div className="container">
            <div className="row">
              <div className="col-md-6 oneimg mt-5">
                <img
                  src="https://pninfosys.netlify.app/web-development.webp"
                  alt=""
                />
              </div>

              <div className="col-md-6 ">
                <h2 className="h2size mt-5 mb-4">Web Development</h2>
                <p className="psize">
                  Something which makes PN INFOSYS different from other IT
                  companies is that we train novice students and also make them
                  work on Live projects.
                  <br />
                  Web development is the work involved in developing a website
                  for the Internet (World Wide Web) or an intranet (a private
                  network). Web development can range from developing a simple
                  single static page of plain text to complex web applications,
                  electronic businesses, and social network services. A more
                  comprehensive list of tasks to which Web development commonly
                  refers, may include Web engineering, Web design, Web content
                  development, client liaison, client-side/server-side
                  scripting, Web server and network security configuration, and
                  e-commerce development.Among Web professionals, Web
                  development usually refers to the main non-design aspects of
                  building Web sites: writing markup and coding. Web development
                  may use content management systems (CMS) to make content
                  changes easier and available with basic technical skills.
                </p>
              </div>
            </div>
          </div>

          {/* 3rd page */}
          <div className="container ks">
            <h2 className="h2size mt-5 mb-4">App Development</h2>
            <div className="row">
              <div className="col-md-6 ">
                <p className="psize">
                  eslint-disable-next-line react/no-unescaped-entities Something
                  which makes PN INFOSYS different from other IT companies is
                  that we train novice students and also make them work on Live
                  projects. Mobile app development is the act or process by
                  which a mobile app is developed for mobile devices, such as
                  personal digital assistants, enterprise digital assistants or
                  mobile phones. These software applications are designed to run
                  on mobile devices, such as a smartphone or tablet computer.
                  These applications can be pre-installed on phones during
                  manufacturing platforms, or delivered as web applications
                  using server-side or client-side processing (e.g., JavaScript)
                  to provide an application-like  experience within a web
                  browser. Application software developers also must consider a
                  long array of screen sizes, hardware specifications, and
                  configurations because of intense competition in mobile
                  software and changes within each of the platforms.
                </p>
              </div>

              <div className="col-md-6 oneimg mt-5">
                <img src="/1.png" alt="" />
              </div>
            </div>
          </div>

          {/* languages */}
        </div>

        <div className="container mt-5  text-center">
          <h1 className="sizes1">
            <i className="fa-solid fa-file-code"></i> Languages
          </h1>

          {/* languages pics */}
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-md-3 allimg ">
                <img
                  src="https://pninfosys.netlify.app/react.svg"
                  alt=""
                 
                />
              </div>
              <div className="col-md-3 allimg">
                <img
                  src="https://pninfosys.netlify.app/angular.svg"
                  alt=""
                 
                />
                
              </div>

              <div className="col-md-3 allimg">
                <img
                  src="https://pninfosys.netlify.app/nodejs.svg"
                  alt="" className="mt-5"
                 
                />
                
              </div>

              <div className="col-md-3 allimg text-center">
                <img
                  src="https://pninfosys.netlify.app/expressjs.svg"
                  alt="" className="mt-5"
                 
                />

                
              </div>
            </div>


            <div className="row">
              <div className="col-md-3 allimg">
                <img
                  src="https://pninfosys.netlify.app/mongodb.svg"
                  alt=""
                 
                />
              </div>
              <div className="col-md-3 allimg">
                <img
                  src="https://pninfosys.netlify.app/html.svg"
                  alt=""
                 
                />
                
              </div>

              <div className="col-md-3 allimg">
                <img
                  src="https://pninfosys.netlify.app/css.svg"
                  alt=""
                 
                />
                
              </div>

              <div className="col-md-3 allimg text-center">
                <img
                  src="https://pninfosys.netlify.app/bootstrap.svg"
                  alt="" className="mt-4"
                 
                />

                
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 allimg">
                <img
                  src="https://pninfosys.netlify.app/javascript.svg"
                  alt=""
                 
                />
              </div>
              <div className="col-md-3 allimg">
                <img
                  src="https://pninfosys.netlify.app/mysql.svg"
                  alt="" className="mt-4"
                 
                />
                
              </div>

              <div className="col-md-3 allimg">
                <img
                  src="https://pninfosys.netlify.app/php.svg"
                  alt="" className="mt-5"
                 
                />
                
              </div>

              <div className="col-md-3 allimg text-center">
                <img
                  src="https://pninfosys.netlify.app/laravel.svg"
                  alt=""
                 
                />

                
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default Home;
