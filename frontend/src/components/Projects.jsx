import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Carousel } from 'react-bootstrap';
import { FaGithub, FaCode, FaRocket } from 'react-icons/fa';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const ProjectCard = styled(Card)`
  border: 1px solid rgba(46, 134, 193, 0.3);
  background: ${props => props.isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.95)'};
  backdrop-filter: blur(8px);
  border-radius: 16px;
  transition: all 0.3s ease;
  min-height: 420px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2E86C1, #1B4F72);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(46, 134, 193, 0.2);
    border-color: rgba(46, 134, 193, 0.5);
  }
`;

const ProjectTitle = styled.h4`
  color: ${props => props.isDark ? '#ffffff' : '#222222'};
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.isDark ? '#cccccc' : '#555555'};
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const TagBadge = styled(Badge)`
  background: linear-gradient(45deg, #2E86C1, #1B4F72) !important;
  border: none;
  font-size: 0.7rem;
  margin: 0.2rem;
`;

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 576) setCardsPerSlide(1);
      else if (window.innerWidth < 992) setCardsPerSlide(2);
      else setCardsPerSlide(3);
    };
    updateCards();
    window.addEventListener('resize', updateCards);
    return () => window.removeEventListener('resize', updateCards);
  }, []);

  const projects = [
    {
      title: "DevOps Resource Monitoring App",
      description: "Real-time metrics dashboard built with Flask and Python.",
      tags: ["Kubernetes", "Flask", "Python", "Docker"],
      github: "https://github.com/juan-carlos/devops-monitoring",
      outcomes: "Deployed on Kubernetes; improved setup efficiency by 40% and optimized responsiveness under load."
    },
    {
      title: "Node.js ToDo App with CI/CD",
      description: "Full CI/CD pipeline automation using Jenkins and GitHub.",
      tags: ["Node.js", "Jenkins", "Docker", "AWS EC2"],
      github: "https://github.com/juan-carlos/node-todo-cicd",
      outcomes: "Deployment time reduced 53%; zero-downtime releases with Docker and Nginx on AWS EC2."
    },
    {
      title: "Flask Web App on Kubernetes",
      description: "Flask-MySQL app deployed on Kubernetes with PVs and service discovery.",
      tags: ["Flask", "MySQL", "Kubernetes", "AWS"],
      github: "https://github.com/juan-carlos/flask-k8s-app",
      outcomes: "Configured services, PVCs, and autoscaling for 99.9% uptime and cloud resilience."
    }
  ];

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">DevOps Projects</h2>
          <p className="lead mb-5">Key projects demonstrating DevOps expertise and cloud architecture</p>
        </Col>
      </Row>

      <Carousel activeIndex={activeIndex} onSelect={setActiveIndex} interval={6000}>
        {(() => {
          const grouped = [];
          for (let i = 0; i < projects.length; i += cardsPerSlide) {
            grouped.push(projects.slice(i, i + cardsPerSlide));
          }
          return grouped.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {group.map((proj, index) => (
                  <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                    <ProjectCard isDark={isDarkMode}>
                      <Card.Body className="d-flex flex-column">
                        <ProjectTitle isDark={isDarkMode}><FaRocket /> {proj.title}</ProjectTitle>
                        <div className="text-center mb-2">
                          {proj.tags.map((tag, t) => <TagBadge key={t}>{tag}</TagBadge>)}
                        </div>
                        <ProjectDescription isDark={isDarkMode}>{proj.description}</ProjectDescription>
                        <div className="mt-auto text-center">
                          <Button variant="outline-primary" href={proj.github} target="_blank" style={{borderColor: '#2E86C1', color: '#2E86C1'}}>
                            <FaGithub /> View Code
                          </Button>
                        </div>
                      </Card.Body>
                    </ProjectCard>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ));
        })()}
      </Carousel>
    </Container>
  );
};

export default Projects;
