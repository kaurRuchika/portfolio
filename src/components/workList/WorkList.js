import { workExperience } from "../../data/workExperience.js";

export default function WorkList() {
    return (
        <div className="work-experience-container">
          {workExperience.map((job, index) => (
            <div key={job.id} className="work-card">
              {/* Line Connector */}
              {index !== workExperience.length - 1 && <div className="timeline-line"></div>}
    
              <h3>{job.company}</h3>
              <p className="role">{job.role}</p>
              <span className="years">{job.years}</span>
              <ul>
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
}
