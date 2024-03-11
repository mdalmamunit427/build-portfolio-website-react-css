import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
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
          <TimelineItem
            title="University school of the arts"
            date="2007 — 2008"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
          <TimelineItem
            title="New york academy of art"
            date="2006 — 2007"
            description="Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis."
          />
          <TimelineItem
            title="High school of art and design"
            date="2002 — 2004"
            description="Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos."
          />
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
          <TimelineItem
            title="Creative director"
            date="2015 — Present"
            description="Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
          />
          <TimelineItem
            title="Art director"
            date="2013 — 2015"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
          <TimelineItem
            title="Web designer"
            date="2010 — 2013"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="Graphic design" value={70} />
          <SkillItem title="Branding" value={90} />
          <SkillItem title="WordPress" value={50} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
