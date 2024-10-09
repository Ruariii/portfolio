import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';  // Import react-markdown

const ProjectCard = ({ image, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <>
      {/* Normal Card View */}
      <div className="project-card" onClick={handleCardClick}>
        <img className='card-image' src={image} alt={title} />
        <h3 className="project-title">{title}</h3>
      </div>

      {/* Expanded View (Overlay) */}
      {isExpanded && (
        <div className="project-expanded-overlay">
          <div className="project-expanded-card">
            {/* Left Column: Image */}
            <div className="left-column">
              <img src={image} alt={title} className="expanded-image" />
            </div>

            {/* Right Column: Title, Close Button, Description */}
            <div className="right-column">
              <nav className="expanded-navbar">
                <h3>{title}</h3>
                <button className="close-button" onClick={handleClose}>
                  &times;
                </button>
              </nav>
              {/* Render HTML using dangerouslySetInnerHTML */}
              <div
                className="expanded-description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
