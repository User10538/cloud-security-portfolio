# AWS Cloud & Security Engineering Portfolio

Hands-on AWS projects demonstrating cloud security, serverless architecture, infrastructure automation, CI/CD automation, and secure backend engineering.

This repository showcases practical cloud engineering projects built to strengthen real-world experience across AWS services, secure application development, infrastructure as code, operational monitoring, and cloud security best practices.

---

## Core Focus Areas

* Serverless Architecture
* AWS Cloud Security
* Secure API Design
* IAM Least-Privilege Access Control
* Infrastructure as Code (Terraform)
* CI/CD Automation
* Cloud Monitoring & Telemetry
* Edge Security with CloudFront & AWS WAF

---

## Featured Projects

### Secure Serverless Backend API

Designed and secured a serverless backend API using Amazon Cognito and API Gateway JWT authorization to enforce authenticated access across protected routes. Implemented token validation prior to Lambda execution and integrated Amazon SES for secure server-side email processing.

**Technologies**

Amazon Cognito • API Gateway • AWS Lambda • JWT • OAuth 2.0 • Amazon SES • CloudFront

---

### AWS Serverless Security Monitoring Dashboard

Designed and deployed a serverless security monitoring platform using API Gateway, Lambda, and DynamoDB to collect and visualize security telemetry in real time. Implemented event-driven ingestion pipelines, IAM least-privilege access controls, and CloudFront-based HTTPS delivery.

**Technologies**

AWS Lambda • API Gateway • DynamoDB • Amazon S3 • CloudFront • IAM • Cloudflare • Python • JavaScript

---

### Secure AWS Static Website Architecture

Implemented a hardened static website architecture using private Amazon S3, CloudFront Origin Access Control (OAC), and AWS WAF. Applied edge-layer protections including rate limiting and managed rule sets to reduce origin exposure and mitigate common web threats.

**Technologies**

AWS WAF • CloudFront • Amazon S3 • CloudFront OAC • Terraform

---

### AWS Static Website + CI/CD Pipeline

Designed and deployed a static web platform on AWS using S3 and CloudFront, with automated deployment workflows through GitHub Actions. Implemented HTTPS, custom domain integration via Cloudflare, and infrastructure automation using Terraform.

**Technologies**

AWS • GitHub Actions • CloudFront • Cloudflare • Terraform

---

### Serverless Contact Form API

Developed a secure serverless contact form platform using API Gateway, AWS Lambda, and Amazon SES for scalable email delivery. Implemented input validation, CORS handling, and CloudFront integration to support secure frontend-to-API communication.

**Technologies**

AWS Lambda • API Gateway • Amazon SES • CloudFront • Python • Serverless Architecture

---

## Technologies & Services

### AWS

* AWS Lambda
* Amazon API Gateway
* Amazon Cognito
* Amazon DynamoDB
* Amazon S3
* Amazon CloudFront
* AWS WAF
* Amazon SES
* IAM

### DevOps & Infrastructure

* Terraform
* GitHub Actions
* CI/CD Pipelines

### Development

* Python
* JavaScript

### Networking & Security

* Cloudflare
* HTTPS/TLS
* JWT Authentication
* Least-Privilege Access Control

---

## Engineering Principles

Projects in this repository emphasize:

* Secure-by-default architecture
* Least-privilege IAM design
* Event-driven serverless systems
* Infrastructure automation
* Cloud-native scalability
* Operational visibility and monitoring
* Edge security and HTTPS enforcement

---

## Repository Structure

```text
cloud-security-portfolio/
├── README.md
├── frontend/
└── projects/
```

---

## About

Cloud Engineer and Security-Focused Backend Developer building secure cloud-native systems using AWS serverless technologies, infrastructure automation, and cloud security best practices.

---

## AI Assistance

AI tools were used to assist with UI styling, CSS refinements, and layout suggestions. All architecture, implementation, security decisions, project content, and code were reviewed, validated, and customized by the author.
