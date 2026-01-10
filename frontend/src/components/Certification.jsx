import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { FaAws, FaMicrosoft, FaCertificate } from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';

/* =======================
   Image Imports
======================= */

import awsCloudPractitioner from '../assets/AWS Certified Cloud Practitioner.jpg';
import awsSolutionsArchitect from '../assets/AWS Certified Solutions Architect – Associate.png';
import azureAdministrator from '../assets/microsoft-certified-associate.svg';
import azureFundamentals from '../assets/Microsoft Certified- Azure Fundamentals.png';
import oracleFoundations from '../assets/Oracle Cloud Infrastructure 2025 Certified.png';
import scrumFoundation from '../assets/Scrum.png';

/* =======================
   Styled Components
======================= */

const Card3D = styled.div`
  background: var(--bg-card);
  color: var(--text-main);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  height: 100%;
  text-align: center;
  transition: all 0.4s ease;
  box-shadow: var(--shadow-standard);

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: var(--shadow-standard);
    border-color: var(--accent);
  }
`;

const SkillIconContainer = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`;

const BadgeImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin: 1rem auto;
  display: block;
`;

const BadgeLink = styled.a`
  display: inline-block;
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--accent-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

/* =======================
   Reusable Card
======================= */

const CertificationCard = ({
  icon,
  title,
  description,
  badge,
  issued,
  expires,
  link,
}) => (
  <Card3D>
    <SkillIconContainer>{icon}</SkillIconContainer>
    <h3 className="h5 mt-2">{title}</h3>
    <p className="mb-2">{description}</p>

    <BadgeImage src={badge} alt={title} />

    <small className="text-muted d-block">
      Issued {issued} · Expires {expires}
    </small>

    {link && (
      <BadgeLink href={link} target="_blank" rel="noopener noreferrer">
        View Credential
      </BadgeLink>
    )}
  </Card3D>
);

/* =======================
   Component
======================= */

const Certification = () => {
  return (
    <section id="certifications">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title reveal">Certifications</h2>
            <p className="lead mb-5 reveal">
              Industry-recognized certifications validating expertise in
              cloud architecture, multi-cloud platforms, security,
              and cost-optimized solutions.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={4} className="mb-4 reveal">
            <CertificationCard
              icon={<FaAws />}
              title="AWS Solutions Architect"
              description="AWS Certified Solutions Architect – Associate"
              badge={awsSolutionsArchitect}
              issued="2023"
              expires="2026"
              link="https://www.credly.com/badges/fd0e687b-e0ff-4ee7-9354-737d875fbc2e"
            />
          </Col>

          <Col md={4} className="mb-4 reveal">
            <CertificationCard
              icon={<FaMicrosoft />}
              title="Azure Administrator"
              description="Microsoft Certified: Azure Administrator Associate"
              badge={azureAdministrator}
              issued="2023"
              expires="2026"
              link="https://learn.microsoft.com/en-us/users/juancarlosfloresmendoza-8185/credentials/e32ead95e6982616"
            />
          </Col>

          <Col md={4} className="mb-4 reveal">
            <CertificationCard
              icon={<FaAws />}
              title="AWS Cloud Practitioner"
              description="AWS Certified Cloud Practitioner"
              badge={awsCloudPractitioner}
              issued="Jun 2023"
              expires="Apr 2028"
              link="https://www.credly.com/badges/45717c2b-3491-4e7c-b817-535eee413b99"
            />
          </Col>

          <Col md={4} className="mb-4 reveal">
            <CertificationCard
              icon={<FaMicrosoft />}
              title="Azure Fundamentals"
              description="Microsoft Certified: Azure Fundamentals"
              badge={azureFundamentals}
              issued="2022"
              expires="—"
              link="https://www.credly.com/badges/1a0a773d-0627-4dbc-92ed-ce78376e2355"
            />
          </Col>

          <Col md={4} className="mb-4 reveal">
            <CertificationCard
              icon={<SiOracle />}
              title="Oracle Foundations"
              description="Oracle Certified Foundations Associate"
              badge={oracleFoundations}
              issued="2022"
              expires="—"
              link="https://catalog-education.oracle.com/ords/certview/sharebadge?id=93DB7FF9D115F3DF81ABB6BA6D5818FE722CDA8A3E71C6C06A7FCF3ABD59F742"
            />
          </Col>

          <Col md={4} className="mb-4 reveal">
            <CertificationCard
              icon={<FaCertificate />}
              title="SCRUM Foundation"
              description="SCRUM Foundation Professional Certificate (SFPC)"
              badge={scrumFoundation}
              issued="2022"
              expires="—"
              link="https://www.credly.com/badges/07112c44-0a63-4562-aa29-bb259eb5dc68"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export default Certification;


