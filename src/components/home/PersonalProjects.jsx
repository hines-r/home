import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import PersonalProject from "./PersonalProject";

function PersonalProjects({ projList, heading }) {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <>
        {projList.map((proj, i) => (         
                <PersonalProject
                  key={`${proj}-${i}`}
                  title={proj.title}
                  link={proj.link}
                  img={proj.img}
                  technologies={proj.technologies}
                  description={proj.description}
                  leftImg={i % 2 ? false : true}
                />
            ))}
        </>
      </Container>
    </Jumbotron>
  )
}

export default PersonalProjects