import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { projectsData as PROJECTS } from '../../data/projects';

function ProjectCard({ project, index, progress, range, targetScale, isLast, closeStart, closeFadeStart }) {
  const container = useRef(null);

  // Stacking scale used while cards are scrolling normally
  const stackingScale = useTransform(progress, range, [1, targetScale]);

  // Cinematic closing animations — thresholds derived dynamically from N so
  // the animation fires exactly when the last stacking card enters frame.
  const closeY = useTransform(progress, [closeStart, 1], [0, -180]);
  const closeOpacity = useTransform(progress, [closeFadeStart, 1], [1, 0]);

  const hasLiveLink = Boolean(project.liveUrl && project.liveUrl !== '#' && project.liveUrl.trim() !== '');

  return (
    <div
      ref={container}
      className={`sticky top-24 md:top-32 w-full ${isLast ? 'h-auto pb-4 md:pb-6' : 'h-[85vh]'}`}
    >
      <motion.div
        style={{
          y: closeY,
          opacity: closeOpacity,
        }}
        className={isLast ? 'w-full' : 'h-full w-full'}
      >
        <motion.article
          style={{
            scale: stackingScale,
            top: `calc(-5vh + ${index * 25}px)`,
          }}
          className={`
            relative
            origin-top
            mx-auto
            w-full
            flex
            flex-col
            gap-4
            sm:gap-6
            md:gap-8
            rounded-[40px]
            sm:rounded-[50px]
            md:rounded-[60px]
            border
            border-white
            bg-[#0C0C0C]
            p-4
            sm:p-6
            md:p-8
            ${isLast ? 'h-[75vh] sm:h-[78vh] md:h-[82vh]' : 'h-full'}
          `}
        >
          {/* TOP ROW */}
          <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-6">

            <div className="flex flex-row items-start gap-3 sm:gap-6 md:gap-8 min-w-0 flex-1">

              {/* NUMBER */}
              <div
                className="
                  shrink-0
                  font-display
                  font-black
                  text-[#D7E2EA]
                  leading-none
                  tracking-[-0.08em]
                  select-none
                "
                style={{
                  fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
                }}
              >
                {project.number}
              </div>

              {/* META */}
              <div className="flex flex-col gap-1 min-w-0 flex-1 pt-0.5 sm:pt-1">

                <span
                  className="
                    font-mono
                    uppercase
                    tracking-[0.2em]
                    text-[#D7E2EA]/60
                  "
                  style={{
                    fontSize: 'clamp(0.62rem, 0.9vw, 0.8rem)',
                  }}
                >
                  {project.category}
                </span>

                {/* TITLE + TECH STACK ROW */}
                <div className="flex flex-wrap sm:flex-nowrap items-baseline sm:items-center gap-x-2 sm:gap-x-2.5 gap-y-1 mt-0.5 min-w-0">
                  <h3
                    className="
                      shrink-0
                      font-display
                      font-bold
                      uppercase
                      text-[#D7E2EA]
                      leading-none
                      tracking-tight
                    "
                    style={{
                      fontSize: 'clamp(1.05rem, 1.8vw, 1.65rem)',
                    }}
                  >
                    {project.name}
                  </h3>

                  <span className="text-[#D7E2EA]/30 hidden sm:inline select-none shrink-0">|</span>

                  {/* TECH STACK */}
                  <div className="flex items-center gap-x-1.5 sm:gap-x-2 flex-wrap sm:flex-nowrap min-w-0 overflow-x-auto no-scrollbar">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={tech}
                        className="font-mono uppercase tracking-[0.06em] text-[#D7E2EA]/45 whitespace-nowrap shrink-0"
                        style={{ fontSize: 'clamp(0.42rem, 0.52vw, 0.55rem)' }}
                      >
                        {tech}
                        {i < project.techStack.length - 1 && (
                          <span className="text-[#D7E2EA]/20 ml-1.5 sm:ml-2 select-none">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* SMALL DESCRIPTION */}
                <p
                  className="
                    font-body
                    text-[#D7E2EA]/55
                    leading-relaxed
                    mt-1
                    max-w-4xl
                  "
                  style={{ fontSize: 'clamp(0.72rem, 1vw, 0.85rem)' }}
                >
                  {project.description}
                </p>

              </div>
            </div>

            {/* BUTTONS */}
            <div className="shrink-0 self-start sm:self-center flex flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    justify-center
                    w-11
                    h-11
                    rounded-full
                    border
                    border-white
                    hover:bg-white/5
                    text-white/70
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  <FiGithub className="w-4 h-4" />
                </a>
              )}

              <a
                href={hasLiveLink ? project.liveUrl : undefined}
                target={hasLiveLink ? "_blank" : undefined}
                rel="noreferrer"
                onClick={(e) => {
                  if (!hasLiveLink) e.preventDefault();
                }}
                className={`
                  inline-flex
                  items-center
                  justify-center
                  px-7
                  sm:px-8
                  py-3
                  rounded-full
                  border
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  transition-all
                  duration-300
                  ${hasLiveLink
                    ? 'border-white hover:bg-white/10 text-white'
                    : 'border-white/20 text-white/30 cursor-not-allowed'
                  }
                `}
              >
                LIVE PROJECT
              </a>
            </div>
          </div>

          {/* IMAGE GRID */}
          <div
            className="w-full aspect-video overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[36px] grid grid-cols-[1fr_2fr] gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0"
            style={{ aspectRatio: '16 / 9' }}
          >
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 h-full min-h-0">
              {/* TOP IMAGE */}
              <div className="overflow-hidden rounded-[14px] sm:rounded-[20px] md:rounded-[26px] flex-1 w-full relative">
                <img
                  src={project.col1Image1}
                  alt={`${project.name} preview 1`}
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
              </div>

              {/* BOTTOM IMAGE */}
              <div className="overflow-hidden rounded-[14px] sm:rounded-[20px] md:rounded-[26px] flex-1 w-full relative">
                <img
                  src={project.col1Image2}
                  alt={`${project.name} preview 2`}
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="overflow-hidden rounded-[14px] sm:rounded-[20px] md:rounded-[26px] h-full w-full relative">
              <img
                src={project.col2Image}
                alt={`${project.name} main preview`}
                className="w-full h-full object-cover object-top"
                draggable={false}
              />
            </div>
          </div>
        </motion.article>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(
    sectionProgress,
    [0.92, 1],
    [0, -180]
  );

  const opacity = useTransform(
    sectionProgress,
    [0.94, 1],
    [1, 0]
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="
        relative
        z-20
        w-full
        -mt-[100vh]
        bg-[#0C0C0C]
        rounded-[40px]
        sm:rounded-[50px]
        md:rounded-[60px]
        border
        border-white/10
      "
    >
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 pt-24 md:pt-32 pb-12 md:pb-16">
        {/* TITLE */}
        <motion.div style={{ opacity, y }}>
          <motion.h2
            initial={{
              opacity: 0,
              y: 120,
              scale: 0.85,
              filter: 'blur(10px)',
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-center
              font-display
              font-black
              tracking-[-0.08em]
              leading-none
              mb-16
              sm:mb-20
              md:mb-28
              text-white
              select-none
            "
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 6.8rem)',
            }}
          >
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e0e0e0] to-[#808080]">
              Projects
            </span>
          </motion.h2>
        </motion.div>

        {/* STACK */}
        <div className="mx-auto max-w-7xl relative pb-4 md:pb-6">
          {PROJECTS.map((project, i) => {
            const N = PROJECTS.length;
            // step = fraction of scroll space each card occupies.
            // With N=4 → step=0.25 (identical to original); with N=6 → step=0.1667.
            const step = 1 / N;

            // Each card starts scaling exactly when it enters the visible stack.
            const rangeStart = i * step;

            // targetScale shrinks older cards slightly as newer ones stack on top.
            const targetScale = 1 - (N - i) * 0.05;

            // Closing animation is decoupled from the final card's ENTRY point.
            // stackEnd = when the last card starts entering the visible stack.
            // closeStart = after the last card has settled (dwell = 0.75 * step).
            // Both values are clamped to [0,1] to be safe for any N.
            const stackEnd       = (N - 1) * step;                          // 0.833 for N=6
            const closeStart     = Math.min(stackEnd + step * 0.75, 1);     // 0.958 for N=6
            const closeFadeStart = Math.min(closeStart + step * 0.15, 1);   // 0.983 for N=6

            return (
              <ProjectCard
                key={project.number}
                project={project}
                index={i}
                progress={sectionProgress}
                range={[rangeStart, 1]}
                targetScale={targetScale}
                isLast={i === N - 1}
                closeStart={closeStart}
                closeFadeStart={closeFadeStart}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}