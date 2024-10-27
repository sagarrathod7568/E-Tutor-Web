import React from "react";
import "./main.css";
import headImage from "../../assets/Images.png";
import lable from "../../assets/Frame 145.png";
import bussiness from "../../assets/Frame 145 (1).png";
import courseImg1 from "../../assets/Course Images.png";
import courseImg2 from "../../assets/Course Images (1).png";
import Practice from "./Practice";

export default function () {
  return (
    <>
      <main>
        <Practice />
        <section className="head">
          <div className="head-main">
            <div className="head-title">
              <div className="head-details">
                <h1>Learn with expert anytime anywhere</h1>
                <p>
                  Our mision is to help people to find the best course online
                  and learn with expert anytime, anywhere.
                </p>
                <button>Create Account</button>
              </div>
            </div>
            <div className="head-img">
              <img src={headImage} alt="" />
            </div>
          </div>
        </section>

        <section className="category">
          <div>
            <h1>Browse top category</h1>
          </div>

          <div className="cat-lists">
            <div className="lable">
              <div>
                <img src={lable} alt="" />
              </div>
              <div>
                <h2>Lable</h2>
                <p>63,476 Courses</p>
              </div>
            </div>
            <div className="bussiness">
              <div>
                <img src={bussiness} alt="" />
              </div>
              <div>
                <h2>Business</h2>
                <p>52,822 Courses</p>
              </div>
            </div>
            <div className="finance">
              <div>
                <img src={lable} alt="" />
              </div>
              <div>
                <h2>Lable</h2>
                <p>63,476 Courses</p>
              </div>
            </div>
            <div className="it">
              <div>
                <img src={bussiness} alt="" />
              </div>
              <div>
                <h2>Business</h2>
                <p>52,822 Courses</p>
              </div>
            </div>
            <div className="it">
              <div>
                <img src={lable} alt="" />
              </div>
              <div>
                <h2>Lable</h2>
                <p>63,476 Courses</p>
              </div>
            </div>
            <div className="finance">
              <div>
                <img src={bussiness} alt="" />
              </div>
              <div>
                <h2>Business</h2>
                <p>52,822 Courses</p>
              </div>
            </div>
            <div className="bussiness">
              <div>
                <img src={lable} alt="" />
              </div>
              <div>
                <h2>Lable</h2>
                <p>63,476 Courses</p>
              </div>
            </div>
            <div className="lable">
              <div>
                <img src={bussiness} alt="" />
              </div>
              <div>
                <h2>Business</h2>
                <p>52,822 Courses</p>
              </div>
            </div>
            <div className="lable">
              <div>
                <img src={lable} alt="" />
              </div>
              <div>
                <h2>Lable</h2>
                <p>63,476 Courses</p>
              </div>
            </div>
            <div className="bussiness">
              <div>
                <img src={bussiness} alt="" />
              </div>
              <div>
                <h2>Business</h2>
                <p>52,822 Courses</p>
              </div>
            </div>
            <div className="finance">
              <div>
                <img src={lable} alt="" />
              </div>
              <div>
                <h2>Lable</h2>
                <p>63,476 Courses</p>
              </div>
            </div>
            <div className="it">
              <div>
                <img src={bussiness} alt="" />
              </div>
              <div>
                <h2>Business</h2>
                <p>52,822 Courses</p>
              </div>
            </div>
          </div>
          <div className="next">
            <div>
              <p>We have more category & subcategory. </p>
            </div>
            <div>
              <p>Browse All</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FF6636"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </div>
          </div>
        </section>

        <section className="courses">
          <div>
            <h1>Browse top category</h1>
          </div>
          <div className="course-grid">
            <div className="ttl-courses">
              <div className="courses-cards">
                <img src={courseImg1} alt="" />
                <div className="subject">
                  <p className="or">DESIGN</p>
                  <h3>$57</h3>
                </div>
                <div className="para">
                  <p>Machine Learning A-Z™: Hands-On Python & R In Data...</p>
                </div>
                <div className="rating">
                  <div className="rate">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FF6636"
                      >
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                      </svg>
                    </p>
                    <p>5.0</p>
                  </div>
                  <div className="no-of-std">
                    <p>257.7K</p>
                    <span>students</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ttl-courses">
              <div className="courses-cards">
                <img src={courseImg2} alt="" />
                <div className="subject">
                  <p className="pr"> DESIGN</p>
                  <h3>$57</h3>
                </div>
                <div className="para">
                  <p>Machine Learning A-Z™: Hands-On Python & R In Data...</p>
                </div>
                <div className="rating">
                  <div className="rate">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FF6636"
                      >
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                      </svg>
                    </p>
                    <p>5.0</p>
                  </div>
                  <div className="no-of-std">
                    <p>257.7K</p>
                    <span>students</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ttl-courses">
              <div className="courses-cards">
                <img src={courseImg1} alt="" />
                <div className="subject">
                  <p className="gr">DESIGN</p>
                  <h3>$57</h3>
                </div>
                <div className="para">
                  <p>Machine Learning A-Z™: Hands-On Python & R In Data...</p>
                </div>
                <div className="rating">
                  <div className="rate">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FF6636"
                      >
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                      </svg>
                    </p>
                    <p>5.0</p>
                  </div>
                  <div className="no-of-std">
                    <p>257.7K</p>
                    <span>students</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ttl-courses">
              <div className="courses-cards">
                <img src={courseImg2} alt="" />
                <div className="subject">
                  <p className="or">DESIGN</p>
                  <h3>$57</h3>
                </div>
                <div className="para">
                  <p>Machine Learning A-Z™: Hands-On Python & R In Data...</p>
                </div>
                <div className="rating">
                  <div className="rate">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FF6636"
                      >
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                      </svg>
                    </p>
                    <p>5.0</p>
                  </div>
                  <div className="no-of-std">
                    <p>257.7K</p>
                    <span>students</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ttl-courses">
              <div className="courses-cards">
                <img src={courseImg1} alt="" />
                <div className="subject">
                  <p className="pr">DESIGN</p>
                  <h3>$57</h3>
                </div>
                <div className="para">
                  <p>Machine Learning A-Z™: Hands-On Python & R In Data...</p>
                </div>
                <div className="rating">
                  <div className="rate">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FF6636"
                      >
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                      </svg>
                    </p>
                    <p>5.0</p>
                  </div>
                  <div className="no-of-std">
                    <p>257.7K</p>
                    <span>students</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ttl-courses">
              <div className="courses-cards">
                <img src={courseImg2} alt="" />
                <div className="subject">
                  <p>DESIGN</p>
                  <h3>$57</h3>
                </div>
                <div className="para">
                  <p>Machine Learning A-Z™: Hands-On Python & R In Data...</p>
                </div>
                <div className="rating">
                  <div className="rate">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FF6636"
                      >
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                      </svg>
                    </p>
                    <p>5.0</p>
                  </div>
                  <div className="no-of-std">
                    <p>257.7K</p>
                    <span>students</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ttl-courses">
              <div className="courses-cards">
                <img src={courseImg1} alt="" />
                <div className="subject">
                  <p>DESIGN</p>
                  <h3>$57</h3>
                </div>
                <div className="para">
                  <p>Machine Learning A-Z™: Hands-On Python & R In Data...</p>
                </div>
                <div className="rating">
                  <div className="rate">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FF6636"
                      >
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                      </svg>
                    </p>
                    <p>5.0</p>
                  </div>
                  <div className="no-of-std">
                    <p>257.7K</p>
                    <span>students</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ttl-courses">
              <div className="courses-cards">
                <img src={courseImg2} alt="" />
                <div className="subject">
                  <p>DESIGN</p>
                  <h3>$57</h3>
                </div>
                <div className="para">
                  <p>Machine Learning A-Z™: Hands-On Python & R In Data...</p>
                </div>
                <div className="rating">
                  <div className="rate">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FF6636"
                      >
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                      </svg>
                    </p>
                    <p>5.0</p>
                  </div>
                  <div className="no-of-std">
                    <p>257.7K</p>
                    <span>students</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ttl-courses">
              <div className="courses-cards">
                <img src={courseImg1} alt="" />
                <div className="subject">
                  <p>DESIGN</p>
                  <h3>$57</h3>
                </div>
                <div className="para">
                  <p>Machine Learning A-Z™: Hands-On Python & R In Data...</p>
                </div>
                <div className="rating">
                  <div className="rate">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FF6636"
                      >
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                      </svg>
                    </p>
                    <p>5.0</p>
                  </div>
                  <div className="no-of-std">
                    <p>257.7K</p>
                    <span>students</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ttl-courses">
              <div className="courses-cards">
                <img src={courseImg2} alt="" />
                <div className="subject">
                  <p>DESIGN</p>
                  <h3>$57</h3>
                </div>
                <div className="para">
                  <p>Machine Learning A-Z™: Hands-On Python & R In Data...</p>
                </div>
                <div className="rating">
                  <div className="rate">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#FF6636"
                      >
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                      </svg>
                    </p>
                    <p>5.0</p>
                  </div>
                  <div className="no-of-std">
                    <p>257.7K</p>
                    <span>students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
