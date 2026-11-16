/**
 * skills.js — Categorized technical and soft skills, grouped by domain.
 * Used by: Skills.jsx. Icon rendering and accent colors are owned by Skills.jsx.
 *
 * ── HOW TO UPDATE ────────────────────────────────────────────────────────────
 *
 *  • Add a skill to an existing category:
 *      Find the category by `title` and append the skill string to its `items` array.
 *      Example:  items: ['Java', 'C', 'JavaScript', 'SQL', 'TypeScript']
 *
 *  • Remove a skill:
 *      Delete the string from the relevant `items` array.
 *
 *  • Rename a skill:
 *      Edit the string in place (e.g. 'ReactJS' → 'React').
 *
 *  • Add a new category:
 *      Append a new object to the `categories` array:
 *        { title: 'Your Category', items: ['Skill A', 'Skill B'] }
 *      The Skills section renders categories in the order they appear here.
 *
 *  • Remove a category:
 *      Delete the entire { title, items } object from the array.
 *
 *  • Reorder categories:
 *      Rearrange the objects in the `categories` array — the UI follows the order.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const skillsData = {
  categories: [
    {
      title: 'Programming Languages',
      items: ['Java', 'Python', 'C', 'JavaScript', 'SQL'],
    },
    {
      title: 'Backend Development',
      items: ['Spring Boot', 'REST APIs', 'Spring MVC', 'JWT Authentication', 'Node.js', 'Microservices'],
    },
    {
      title: 'Frontend Development',
      items: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'Schema Design', 'Normalization', 'Indexing', 'Transaction Management'],
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS (EC2, S3 Basics)', 'Docker', 'CI/CD Fundamentals', 'Scrum', 'Agile Methodology'],
    },
    {
      title: 'Developer Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Eclipse'],
    },
    {
      title: 'Core Concepts',
      items: ['Data Structures', 'OOPs', 'Database Management Systems', 'Operating Systems'],
    },
    {
      title: 'Soft Skills',
      items: ['Problem Solving', 'Analytical Thinking', 'Teamwork', 'Leadership'],
    },
  ],
};
