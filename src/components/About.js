import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>Tis is about page</h1>
      <User name={"Raghav"} location={"Ayodhya"}></User>
      <UserClass name="Krishna" location="Mathura"></UserClass>
    </div>
  );
};

export default About;
