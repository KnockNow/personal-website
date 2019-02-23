import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import WorksList from 'Components/WorksList'
import ProjectList from 'Components/ProjectList'

const listOfWorks = [
  {
    title: 'Freelance Company trainer',
    date: '2018',
    society: '',
    description: 'I train developers on React (and its ecosyteme), functional programming and JavaScript.',
    link: {
      name: 'react-formation',
      url: 'https://github.com/KnockNow/react-formation'
    },
  },
  {
    title: 'Freelance Web Developer Front-End',
    date: '2018',
    society: 'Louvre Hotels Group',
    description: 'Creation of a hotel booking platform with a book engine.',
    link: {
      name: 'goldentulip.com',
      url: 'https://www.goldentulip.com',
    },
  },
  {
    title: 'Entrepreneurial project',
    date: '2017',
    society: 'Clovis (In parallel with my studies)',
    description: 'Communication tool for construction teams. (React/Redux/Cordova)',
    link: {
      name: 'clovis.pro',
      url: 'https://beta.clovis.pro',
    },
  },
  {
    title: 'Web Developer Front-End',
    date: '2017',
    society: 'Web Agency Baldr',
    description: 'Development of all kinds of applications for the Baldr agency, using innovative technologies mainly in JavaScript.',
  },
  {
    title: 'Freelance Web Developer / 3D modeler-animator',
    date: '2015 - 2016',
    society: 'In parallel with my studies',
    descriptionWithLink: [
      {
        name: 'CPMM - web',
        link: 'http://clubmannequin.fr',
      },
      {
        name: 'BladeTips Energy - videos',
        link: 'https://www.youtube.com/watch?v=7KhX7WeCmwk',
      },
      {
        name: 'MultiTpMat - web',
        link: 'http://multitpmatoccasion.pro',
      },
    ]
  },
  {
    title: 'Web Integrator',
    date: '2014 - 2015',
    society: 'Web Agency Webiaprod',
    description: 'Integration of mockup with interest for compatibility and responsive design.',
  },
  {
    title: 'APIs Scraping in PHP',
    date: '2014 - 2015',
    society: 'Tecknowmetrix',
    description: 'Scraping and mating with other data on a data base.',
  },
];

const Container = styled.div`
  padding: 1em;
  a {
    text-decoration: none;
    font-family: monospace;
    transition: 100ms all;
    &:hover {
      letter-spacing: 2px;
    }
  }
`;

const LinkS = styled(Link)`
  display: inline-block;
  font-size: 1.2em;
  color: #fff;
  margin-top: 2em;
  border-bottom: 2px solid red;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2em;
  color: #fff;
`;

const Split = styled.div`
  display: flex;
  flex-direction: row;
`;

class Works extends React.Component {
  render() {
    return (
      <Container>
        <LinkS to="/">{'< return'}</LinkS>
        <Title>works</Title>
        <Split>
          <WorksList data={listOfWorks} />
          <ProjectList />
        </Split>
      </Container>
    )
  }
}

export default Works
