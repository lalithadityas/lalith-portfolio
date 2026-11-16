/**
 * about.js — About section biographical narrative content and resume asset.
 * Used by: About.jsx (bio paragraph, resume popup, resume viewer, download button).
 *
 * ── HOW TO UPDATE ────────────────────────────────────────────────────────────
 *
 *  • Update the bio paragraph:
 *      Edit the `description` string. It renders as plain text in the About section.
 *      Keep it to 3–5 sentences for best visual balance.
 *
 *  • Update the resume (swap to a new PDF):
 *      1. Add the new PDF file to:  src/assets/resume/
 *      2. Change ONLY the import path on the line directly below this comment.
 *      3. About.jsx picks it up automatically — the popup download, viewer
 *         download button, and iframe preview all read from `aboutData.resumePath`.
 *         No other file needs to be changed.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */
import resumePdf from '../assets/resume/Lalith_Aditya_Resume_15_11_2026.pdf';

export const aboutData = {
  description:
    "I'm a Computer Science undergraduate focused on building practical, reliable software that solves real-world problems. My primary interests lie in backend engineering, full-stack development, scalable application design, and AI-powered solutions. I enjoy turning ideas into functional products, working across APIs, databases, and application architecture, while continuously strengthening my problem-solving, system design, and software engineering skills.",

  /** ↓ Single source of truth for the resume asset. Change here to update everywhere. */
  resumePath: resumePdf,
};
