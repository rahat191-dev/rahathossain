document.addEventListener("DOMContentLoaded", () => {

    
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
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

  cards.forEach((card) => {
    observer.observe(card);
  });
  
  const viewWorkBtn = document.querySelector(".cta-row .btn:not(.ghost)");
  const hireMeBtn = document.querySelector(".cta-row .btn.ghost");
  const heroImage = document.querySelector(".hero-image");

  setTimeout(() => {
    viewWorkBtn.classList.add("show");
  }, 0);

  setTimeout(() => {
    hireMeBtn.classList.add("show");
  }, 500);

  setTimeout(() => {
    heroImage.classList.add("show");
  }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const contactLinks = document.querySelectorAll(".contact-links a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactLinks.forEach((link, index) => {
            setTimeout(() => {
              link.classList.add("show");
            }, index * 200); 
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  if (contactLinks.length > 0) {
    observer.observe(contactLinks[0]);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skills li");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skills.forEach((skill, index) => {
            setTimeout(() => {
              skill.classList.add("show");
            }, index * 200);
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  if (skills.length > 0) {
    observer.observe(skills[0]);
  }
});



