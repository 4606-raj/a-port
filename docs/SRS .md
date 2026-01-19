# Software Requirements Specification (SRS)

## 1. Introduction

### 1.1 Purpose
This document defines the functional and non-functional requirements for the system. It serves as a single source of truth for product owners, developers, and stakeholders to understand **what** will be built and **why**, before deciding **how** it will be implemented.

### 1.2 Scope
The system is a role-based web application designed to manage users, projects, and tasks within an organization. It provides dashboards, task visibility, role-based access control, and activity tracking.

**Out of Scope (Explicitly)**:
- Payroll processing
- Real-time chat (future enhancement)
- Third-party HR integrations (initial phase)

### 1.3 Definitions & Acronyms
- **RBAC**: Role-Based Access Control
- **MVP**: Minimum Viable Product
- **User**: Any authenticated individual using the system

---

## 2. Stakeholders, Roles & Organization Structure

### 2.1 Stakeholders
- Business Owner / Product Owner
- Super Admin
- HR Department
- Department Managers / Team Leads
- Employees & Interns
- Clients

---

## 3. Organization Structure

### 3.1 Departments
- **Sales**
- **Marketing**
- **Web**
  - PHP
  - Ruby on Rails
  - Node.js
  - Vue.js / React.js
  - Designing
  - WordPress
  - .NET
  - Python
  - AI
- **Mobile**
  - Android
  - iOS
- **Testing / QA**
- **DevOps**
- **HR**

### 3.2 Roles

| Role | Description |
|-----|------------|
| Super Admin | Full system access, configuration, and governance |
| HR | Manages employees, departments, designations, and lifecycle |
| Manager | Manages departments or projects |
| Team Lead (TL) | Leads a technical or functional team |
| Employee | Executes assigned work |
| Intern | Limited employee access, learning-focused |
| Client | External user with restricted project visibility |

### 3.3 Designations
Designations are **job titles** mapped to roles and departments.

Examples:
- Sales Manager → Role: Manager, Department: Sales
- HR Manager → Role: HR, Department: HR
- Project Manager → Role: Manager, Department: Web / Mobile
- Team Lead Android → Role: Team Lead, Department: Mobile
- Team Lead PHP → Role: Team Lead, Department: Web (PHP)
- Software Engineer → Role: Employee
- Intern Developer → Role: Intern

---

## 4. User Stories & Features

### 4.1 Super Admin
**User Stories**
- As a super admin, I want to manage roles and permissions so that access is controlled system-wide.
- As a super admin, I want to configure departments and designations so that the organization structure is maintained.

**Features**
- Role & Permission Management
- Department & Designation Configuration
- System Settings

---

### 4.2 HR
**User Stories**
- As an HR user, I want to onboard employees so that they can access the system.
- As an HR user, I want to assign departments and designations so that reporting structure is clear.
- As an HR user, I want to deactivate users so that former employees lose access.

**Features**
- Employee Lifecycle Management
- Department & Designation Assignment
- Employee Records

---

### 4.3 Manager
**User Stories**
- As a manager, I want to view my team members so that I can manage workload.
- As a manager, I want to create and manage projects so that work is tracked.

**Features**
- Team Dashboard
- Project Management
- Task Assignment

---

### 4.4 Team Lead (TL)
**User Stories**
- As a team lead, I want to assign tasks so that project goals are met.
- As a team lead, I want to track task progress so that delays are identified early.

**Features**
- Task Planning
- Task Status Tracking

---

### 4.5 Employee
**User Stories**
- As an employee, I want to view my dashboard so that I know my responsibilities.
- As an employee, I want to update task status so that progress is visible.

**Features**
- Personal Dashboard
- Task Management

---

### 4.6 Intern
**User Stories**
- As an intern, I want to view assigned tasks so that I can learn and contribute.

**Features**
- Limited Task Access
- Read-only Project Visibility

---

### 4.7 Client
**User Stories**
- As a client, I want to view project progress so that I stay informed.

**Features**
- Project Progress View
- Restricted Dashboard

---

## 5. Functional Requirements

### 4.1 Authentication & Authorization
- Users must authenticate using email and password
- RBAC must be enforced across all protected routes
- Unauthorized access must be denied with proper error responses

### 4.2 User Management
- System shall allow admins to create, update, and deactivate users
- Each user must belong to a role
- User profiles must include basic employment details

### 4.3 Dashboard Module

#### Employee Dashboard
- Display user profile summary
- Display assigned projects
- Display assigned tasks with status

#### Manager Dashboard
- Display team overview
- Display team task status

### 4.4 Project Management
- Admins and managers can create projects
- Projects can have multiple team members
- Project status must be tracked

### 4.5 Task Management
- Tasks must belong to a project
- Tasks can be assigned to users
- Tasks must support status updates (Todo, In Progress, Done)

### 4.6 Notifications
- Users should receive notifications for task assignments and updates

---

## 6. Data Model (High-Level)

### Core Entities
- User
- Role
- Permission
- Project
- Task
- Team
- Notification

### Relationships
- User belongs to Role
- Role has many Permissions
- Project has many Users
- Project has many Tasks
- Task belongs to User and Project

---

## 7. Non-Functional Requirements

### Performance
- System should support at least 500 concurrent users
- Dashboard load time should be under 3 seconds

### Security
- Passwords must be hashed
- API access must be authenticated
- Role-based access enforced server-side

### Scalability
- Architecture must support horizontal scaling

### Availability
- System uptime target: 99.5%

---

## 8. Assumptions & Constraints

### Assumptions
- Users have internet access
- Users access system via modern web browsers

### Constraints
- Web-based application only (no native mobile app in MVP)
- Initial deployment limited to single organization

---

## 9. Future Enhancements
- Advanced reporting and analytics
- Mobile application
- Third-party integrations (HR, Payroll)
- Real-time collaboration features

---

## 10. Approval

This document is subject to review and approval by all stakeholders before development begins.

---

**End of Document**

