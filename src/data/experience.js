/**
 * experience.js — Work experience and leadership roles, newest first.
 * Used by: About.jsx (experience timeline cards).
 *
 * ── HOW TO UPDATE ────────────────────────────────────────────────────────────
 *
 *  • Edit an existing entry:
 *      Find the object by `role` or `company` and change any field in place.
 *      `skills` is a short string array (2–3 tags shown as pills on the card).
 *
 *  • Add a new role / internship:
 *      Prepend a new object to the top of the array (keep newest first):
 *        {
 *          role:        "Your Job Title",
 *          company:     "Company / Organisation Name",
 *          period:      "Mon YYYY",        // e.g. "Jun 2027"
 *          description: "One or two sentences describing impact.",
 *          skills:      ["Tag 1", "Tag 2"],
 *        }
 *
 *  • Remove a role:
 *      Delete the entire { role, company, period, description, skills } object.
 *
 *  • Reorder entries:
 *      Rearrange the objects — the component renders them in array order.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const experienceData = [
  {
    role: "Engineering Intern",
    company: "HackerRank",
    period: "Sep 2025",
    description:
      "Architected early-stage features and gained deep insight into professional software development cycles and large-scale system maintenance.",
    skills: ["System Design", "Analytical Engineering"],
  },
  {
    role: "System Lead (Hackathon)",
    company: "Code4Change - KL University",
    period: "Oct 2025",
    description:
      "Led the architectural design and rapid development of technical solutions in a national-level hackathon, focusing on deployment speed and scalability.",
    skills: ["Leadership", "Rapid Architecture"],
  },
  {
    role: "Domain Architect (Intern)",
    company: "Agriculture Systems - KL University",
    period: "Sep 2025",
    description:
      "Analyzed complex irrigation challenges and engineered technology-driven strategies to optimize water utilization in distributed agricultural environments.",
    skills: ["Domain Analysis", "System Strategy"],
  },
];
