import { FaBookReader, FaRegBookmark } from "react-icons/fa";

const Resume = () => {
  return (
    <section >
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
          <FaBookReader />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              University school of the arts
            </h4>

            <span>2007 — 2008</span>

            <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">New york academy of art</h4>

            <span>2006 — 2007</span>

            <p className="timeline-text">
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda
              ossimus, omnis voluptas assumenda est omnis..
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              High school of art and design
            </h4>

            <span>2002 — 2004</span>

            <p className="timeline-text">
              Duis aute irure dolor in reprehenderit in voluptate, quila
              voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
            </p>
          </li>
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
          <FaRegBookmark />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Creative director</h4>

            <span>2015 — Present</span>

            <p className="timeline-text">
              Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
              atque corrupti, quos dolores et qvuas molestias exceptur.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Art director</h4>

            <span>2013 — 2015</span>

            <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web designer</h4>

            <span>2010 — 2013</span>

            <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web design</h5>
              <data value="80" >80%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Graphic design</h5>
              <data value="70">70%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '70%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Branding</h5>
              <data value="90">90%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">WordPress</h5>
              <data value="50">50%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '50%' }}></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
