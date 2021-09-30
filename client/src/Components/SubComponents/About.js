import InfoCard from "./InfoCard";

const About = (props) => {
  return (
    <div className="about-container m-5 rounded-3 p-4">
      <div className="about-us border border-dark rounded-pill m-5">
        <h1 className="text-center p-4">About Us</h1>
      </div>
      <InfoCard image="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
    </div>
  );
};

export default About;
