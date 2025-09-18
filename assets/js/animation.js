document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const buttons = document.querySelectorAll(".cta-row .btn");
  const heroImage = document.querySelector(".hero-image");

  setTimeout(() => {
    title.classList.add("show");
  }, 300);

  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.add("show");
    }, 600 + index * 200);
  });

  setTimeout(() => {
    heroImage.classList.add("show");
  }, 1200);

  const cards = document.querySelectorAll(".card");
  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 200);
        }
      });
    },
    { threshold: 0.2 }
  );
  cards.forEach((card) => projectObserver.observe(card));

  const skills = document.querySelectorAll(".skills li");
  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skills.forEach((skill, index) => {
            setTimeout(() => {
              skill.classList.add("show");
            }, index * 200);
          });
          skillsObserver.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );
  if (skills.length > 0) {
    skillsObserver.observe(skills[0]);
  }

  const contactLinks = document.querySelectorAll(".contact-links a");
  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactLinks.forEach((link, index) => {
            setTimeout(() => {
              link.classList.add("show");
            }, index * 200);
          });
          contactObserver.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );
  if (contactLinks.length > 0) {
    contactObserver.observe(contactLinks[0]);
  }
});
