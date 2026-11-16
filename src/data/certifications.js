/**
 * certifications.js — Professional certifications, newest first.
 * Used by: Certifications.jsx. Icon mapping is owned by Certifications.jsx.
 *
 * ── HOW TO UPDATE ────────────────────────────────────────────────────────────
 *
 *  • Edit an existing certification:
 *      Find the object by `title` and update any field in place.
 *      `date` is a display string — format as "Mon YYYY" (e.g. "Mar 2027").
 *
 *  • Add a new certification:
 *      Prepend a new object to the top of the array (keep newest first):
 *        {
 *          title:  "Full Certification Name",
 *          issuer: "Issuing Organisation",
 *          date:   "Mon YYYY",
 *        }
 *
 *  • Remove a certification:
 *      Delete the entire { title, issuer, date } object from the array.
 *
 *  • Reorder certifications:
 *      Rearrange the objects — the component renders them in array order.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const certificationsData = [
  {
    title: "OCI 2025 Certified Generative AI & Data Science Professional",
    issuer: "Oracle",
    date: "Oct 2025",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Jul 2026",
  },
];
