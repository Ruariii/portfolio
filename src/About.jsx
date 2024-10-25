

const About = () => {
  return (
    <div className="about-container">
      {/* Circular Profile Picture */}
      <img src="assets/profile-pic.jpeg" alt="Profile" className="profile-picture" />

      {/* About Me Title */}
      <h2>About Me</h2>

      {/* Personal Profile Paragraph */}
      <p className="personal-profile">
      I'm Ruari, a first class aeronautical engineering masters graduate from The University of Leeds. 
      I am currently working as a design engineer in the medical and life science industry at Lucid Innovation, a UK SME. 
      I am a versatile engineer with experience in software development, 
      design & manufacture and data analysis applied to fully connected medical devices. 
      I strive to be an integral team member, and have contributed to numerous technical projects in medical engineering; 
      from concept stage right through to production. 
      I have a strong academic background in mechanical engineering and hands-on experience in design 
      and analysis of aircraft systems. 
      </p>
      <p className="personal-profile">
      This portfolio was created as a personal project using React and Firebase, 
      to showcase some of the work I have been involved with while at university and since graduating.

      </p>
    </div>
  );
};

export default About;
