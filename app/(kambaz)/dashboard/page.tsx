import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.jpg"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <Link href="/courses/2222" className="wd-dashboard-course-link">
            <Image
              src="/images/cs2500.jpg"
              width={200}
              height={150}
              alt="course 2"
            />
            <div>
              <h5> CS2500 </h5>
              <p className="wd-dashboard-course-title">Fundementals of Computer Science</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <Link href="/courses/3333" className="wd-dashboard-course-link">
            <Image
              src="/images/cs1800.jpg"
              width={200}
              height={150}
              alt="course 3"
            />
            <div>
              <h5> CS 1800 </h5>
              <p className="wd-dashboard-course-title">Discrete Structures</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <Link href="/courses/4444" className="wd-dashboard-course-link">
            <Image
              src="/images/cs3000.jpg"
              width={200}
              height={150}
              alt="course 4"
            />
            <div>
              <h5> CS 3000 </h5>
              <p className="wd-dashboard-course-title">Object Oriented Design</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <Link href="/courses/5555" className="wd-dashboard-course-link">
            <Image
              src="/images/cs3500.jpg"
              width={200}
              height={150}
              alt="course 5"
            />
            <div>
              <h5> CS 3500 </h5>
              <p className="wd-dashboard-course-title">
                Algorithms and Data Structures
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />

        <div className="wd-dashboard-course">
          <Link href="/courses/6666" className="wd-dashboard-course-link">
            <Image
              src="/images/cs4530.jpg"
              width={200}
              height={150}
              alt="course 6"
            />
            <div>
              <h5> CS 4530 </h5>
              <p className="wd-dashboard-course-title">
                Fundementals of Software engineering
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link href="/courses/7777" className="wd-dashboard-course-link">
            <Image
              src="/images/ds3000.jpg"
              width={200}
              height={150}
              alt="course 7"
            />
            <div>
              <h5> DS 3000 </h5>
              <p className="wd-dashboard-course-title">
                Foundations of Data Science
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
