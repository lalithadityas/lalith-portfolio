/**
 * education.js — Academic timeline records in strict chronological order.
 * Used by: Education.jsx. Theme colors (cyan → pink → amber) are assigned
 * positionally by Education.jsx — the order here controls the order on screen.
 *
 * ── HOW TO UPDATE ────────────────────────────────────────────────────────────
 *
 *  • Edit an existing entry:
 *      Find the object by `degree` or `institution` and change any field in place.
 *      `achievements` is a string array — each string becomes a bullet point.
 *
 *  • Add a new education entry:
 *      Append a new object to the array (keep chronological order — oldest first):
 *        {
 *          degree:       "Your Degree Title",
 *          institution:  "Institution Name",
 *          period:       "YYYY - YYYY",
 *          achievements: ["Achievement 1", "Achievement 2"],
 *        }
 *
 *  • Remove an entry:
 *      Delete the entire { degree, institution, period, achievements } object.
 *
 *  • Reorder entries:
 *      Rearrange the objects — Education.jsx renders them top-to-bottom in
 *      array order, and re-assigns theme colors automatically.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const educationTimeline = [
  {
    degree: "Secondary Education (10th grade)",
    institution: "Ravindra Bharathi Public School",
    period: "2021 - 2022",
    achievements: ["89.5% Percentage", "Matriculation"],
  },
  {
    degree: "Intermediate",
    institution: "Board of Intermediate Education",
    period: "2022 - 2024",
    achievements: ["88.6%", "MPC (Science) Stream"],
  },
  {
    degree: "Bachelors of Technology",
    institution: "K L University, AP",
    period: "2024 - 2028",
    achievements: ["9.24 CGPA", "Computer Science and Engineering", "Specialization on AI NLP"],
  },
];
