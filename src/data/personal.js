/**
 * personal.js — Canonical personal identity, contact, and social data.
 * Used across: Navbar, Hero, About, Contact, Footer, GoogleIntro.
 *
 * ── HOW TO UPDATE ────────────────────────────────────────────────────────────
 *
 *  • Change your name/role:
 *      Edit `name`, `displayName`, `shortName`, `role` directly.
 *      `displayName` is shown on UI cards; `name` is the full legal name.
 *
 *  • Update contact / social links:
 *      Edit `email`, `github`, `linkedin`, `instagram` with the new URL/address.
 *      All components that show these links read from here — no JSX changes needed.
 *
 *  • Add a new social link:
 *      Add a new key-value pair inside the object (e.g. `twitter: "https://..."`)
 *      then import and use `personalData.twitter` wherever you want it displayed.
 *
 *  • Add / update a coding profile:
 *      Edit the `codingProfiles` object — add, remove, or change any key.
 *
 *  • Change location:
 *      Edit `location` (display string) and/or `country`.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const personalData = {
  name: "Lalith Aditya Singuparapu",
  displayName: "Lalith Aditya",
  shortName: "Lalith",
  brandName: {
    first: "Lalith",
    last: "Aditya",
  },
  role: "Full Stack Developer",
  location: "Vijayawada, India",
  country: "India",
  email: "lalithadityasinguparapu@gmail.com",
  liveUrl: "https://meetlalith.vercel.app",

  github: "https://github.com/lalithadityas",
  linkedin: "https://linkedin.com/in/lalith-aditya-singuparapu",
  instagram: "https://www.instagram.com/justlalith26/?__pwa=1",

  codingProfiles: {
    hackerrank: "https://hackerrank.com/lalithadityas",
    leetcode: "https://leetcode.com/lalithadityas",
    codechef: "https://codechef.com/users/lalithadityas",
  },
};
