# OOPS Club Website & Chakravyuh 2.0

The official website and event portal for OOPS (Organisation of Problem Solvers), a competitive programming club. The project is planned around **Chakravyuh 2.0**, a team-based coding tournament with four elimination rounds.

> **Project status:** Planning and initial setup. The repository currently contains project documentation only; the application, API, and database have not been implemented yet. Features and technologies below describe the intended product, not shipped functionality.

## Project goals

- Give visitors a clear home for OOPS, its activities, events, achievements, and team.
- Provide one place for teams to register for Chakravyuh 2.0 and follow their progress.
- Give organisers tools to review registrations, manage rounds, publish results, and communicate updates.
- Build the platform as a learning project: understand each concept, implement it, and record progress.

## Planned features

### Public website

- Home, about, activities, workshops, events, achievements, and team pages.
- A Chakravyuh 2.0 event page with format, rules, prizes, and frequently asked questions.
- Published round results and leaderboards.

### Participant portal

- Account registration and sign-in.
- Team creation and member management by a team captain.
- Event registration and status tracking.
- A team dashboard showing registration state, round schedule, countdowns, results, and qualification status.
- Access to each round only when it is open and the team is eligible.

### Organiser tools

- Review registrations and approve, reject, or request changes.
- Configure events and rounds, including schedules and opening times.
- Import round results from CSV with validation before publication.
- Publish results, apply qualification cutoffs, and record reasoned manual overrides.
- Post participant announcements and keep an audit trail of administrative actions.

## Chakravyuh 2.0 format

The tournament is planned as four sequential team rounds. Teams advance based on published results and the configured qualification rules.

| Round | Name | Format |
| --- | --- | --- |
| 1 | Algorithm Arena | Warm-up round focused on logic |
| 2 | Data Structure Gauntlet | Trees, heaps, tries, and graphs |
| 3 | Speed Sprint | Short, fast-paced round |
| 4 | The Final Chakravyuh | On-campus head-to-head final |

Round access is intended to be enforced by the server: registration must be approved, the round must be open, and teams entering rounds 2–4 must have qualified in the preceding round.

## Roles and permissions

| Role | Planned access |
| --- | --- |
| Visitor | Browse public pages and published leaderboards |
| Team member | View their team, dashboard, and unlocked rounds |
| Team captain | Create a team, manage members, and submit event registration |
| Event admin | Review registrations, manage rounds, and publish results |
| Super admin | Manage admin accounts and platform settings |

## Registration lifecycle

```text
DRAFT → SUBMITTED → UNDER REVIEW → APPROVED
                               ├── REJECTED
                               └── CHANGES REQUESTED
```

Captains should be able to see the current status and any organiser feedback. An approved registration makes the team eligible for Round 1, subject to the event and round schedule.

## Planned technology

| Area | Technology |
| --- | --- |
| Frontend | React, Vite, Tailwind CSS, React Router |
| Backend | Node.js, Express |
| Database | PostgreSQL |
| Data access | Prisma |
| Request validation | Zod |

The intended architecture is a **modular monolith**: one API and one database, with backend code organised by feature. The React single-page app communicates with the Express API over REST/JSON; Prisma connects the API to PostgreSQL.


## Repository status and setup

The application scaffold has not been added yet. There is currently no frontend, backend, database schema, or runnable development command, so installation and local run instructions will be added when the first implementation lands.

When development begins, the project is expected to need Node.js, PostgreSQL, and environment configuration for the API and database. Do not commit secrets or local `.env` files.

## Planned security principles

- Hash passwords; never store them as plain text.
- Use HTTP-only session cookies.
- Check roles and resource ownership on protected API routes.
- Enforce round eligibility on the server, not only in the interface.
- Validate incoming requests before business logic uses them.
- Record administrative decisions and reasoned qualification overrides.
- Keep credentials and deployment secrets out of version control.

## Future documentation

As implementation progresses, this README can link to project documents such as:

- `docs/` — architecture and API notes
- `docs/security-checklist.md` — security review
- `docs/runbook.md` — event operations and recovery steps
- `DEVLOG.md` — learning notes and session summaries

These documents are planned; they are not present in the repository yet.
