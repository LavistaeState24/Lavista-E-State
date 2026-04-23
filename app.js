const pages = [
  ["index.html", "Home"],
  ["about.html", "About"],
  ["services.html", "Services"],
  ["projects.html", "Projects"],
  ["contact.html", "Contact"]
];

const currentPage = location.pathname.split("/").pop() || "index.html";
const whatsappNumber = "917041023501";

function icon(name) {
  const icons = {
    menu: '<i class="fi fi-rr-menu-burger text-white text-xl"></i>',
    close: '<i class="fi fi-rr-cross text-white text-xl"></i>',
    arrow: '<i class="fi fi-rr-arrow-right text-white text-lg"></i>'
  };

  return icons[name] || "";
}

function brandMark() {
  return `
    <img src="assets/logo.png" alt="Lavista Estate Logo" class="block h-[42px] w-[118px] object-contain object-left sm:h-12 sm:w-36 lg:h-[58px] lg:w-[168px]" loading="eager">
  `;
}

function initShell() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  const whatsappMessage = encodeURIComponent("Hello Lavista Estate, I want to discuss a real estate project growth enquiry.");

  if (header) {
    const nav = pages.map(([href, label]) => {
      const active = href === currentPage || (currentPage === "" && href === "index.html");
      return `<a class="nav-link ${active ? "active" : ""}" href="${href}">${label}</a>`;
    }).join("");

    header.innerHTML = `
      <div class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08090c]/80 backdrop-blur-2xl">
  <div class="lux-container flex h-[72px] sm:h-[80px] lg:h-[90px] items-center justify-between">
    
    <a href="index.html" class="flex shrink-0 items-center" aria-label="Lavista Estate home">
      ${brandMark()}
    </a>

    <nav class="hidden items-center gap-6 xl:gap-8 text-sm font-semibold lg:flex">
      ${nav}
    </nav>

    <div class="hidden items-center gap-3 lg:flex">
      <a class="btn-secondary min-h-10 xl:min-h-11 px-4 xl:px-5 text-sm" href="contact.html">
        Book Consultation
      </a>
    </div>

    <button 
      id="menu-toggle" 
      class="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden shrink-0" 
      aria-label="Open menu"
    >
      ${icon("menu")}
    </button>
  </div>

  <div id="mobile-menu" class="hidden border-t border-white/10 bg-[#08090c]/95 lg:hidden">
    <div class="lux-container grid gap-4 py-6 text-base font-semibold">
      ${nav}
      <a class="btn-primary mt-2 w-full sm:w-fit" href="contact.html">
        Start a Project ${icon("arrow")}
      </a>
    </div>
  </div>
</div>`;
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="border-t border-white/10 bg-black/28">
        <div class="lux-container grid gap-10 py-14 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <a href="index.html" class="flex items-center gap-3" aria-label="Lavista Estate home">${brandMark()}</a>
            <p class="mt-4 max-w-sm text-sm leading-7 text-white/62">
              Real estate marketing, qualified buyer conversion, site visit growth, and sole selling support for builders and property brands.
            </p>
            <div class="mt-6 flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61584161136880" target="_blank" rel="noopener" class="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#c9a35d]/50 hover:text-[#f3d79b]"><i class="fi fi-brands-facebook"></i></a>
              <a href="https://www.instagram.com/reel/DWWh0X8kvwq/?hl=ens" target="_blank" rel="noopener" class="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#c9a35d]/50 hover:text-[#f3d79b]"><i class="fi fi-brands-instagram"></i></a>
              <a href="https://youtube.com/@lavistaestates?si=QLgER9jrgKTiA4UI" target="_blank" rel="noopener" class="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#c9a35d]/50 hover:text-[#f3d79b]"><i class="fi fi-brands-youtube"></i></a>
            </div>
          </div>
          <div>
            <div class="text-xl font-bold text-[#f3d79b]">Company</div>
            <div class="mt-4 grid gap-3 text-sm text-white/62">
              <a href="index.html">Home</a>
              <a href="services.html">Services</a>
              <a href="projects.html">Projects</a>
              <a href="about.html">About</a>
              <a href="contact.html">Contact</a>
            </div>
          </div>
          <div>
            <div class="text-xl font-bold text-[#f3d79b]">Focus</div>
            <div class="mt-4 grid gap-3 text-sm text-white/62">
              <span>Google Ads</span>
              <span>Meta Ads</span>
              <span>Sole Selling</span>
              <span>Lead Filtering</span>
              <span>Site Visit Growth</span>
            </div>
          </div>
          <div>
            <div class="text-xl font-bold text-[#f3d79b]">Discuss Growth</div>
            <p class="mt-4 text-sm leading-7 text-white/62">Share your project inventory, launch stage, and sales target. Lavista Estate will map a buyer acquisition path.</p>
          </div>
        </div>
        <div class="border-t border-white/10 py-5">
          <div class="lux-container flex flex-col gap-2 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <span>Copyright 2026 Lavista Estate. All rights reserved.</span>
            <span>Premium real estate growth and selling partner.</span>
          </div>
        </div>
      </footer>`;
  }

  if (!document.querySelector(".whatsapp-float")) {
    document.body.insertAdjacentHTML("beforeend", `
      <a class="whatsapp-float fixed bottom-5 right-5 z-[999] grid h-[50px] w-[50px] place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition hover:scale-110 max-sm:bottom-3.5 max-sm:right-3.5" href="https://wa.me/${whatsappNumber}?text=${whatsappMessage}" target="_blank" rel="noopener" aria-label="Chat with Lavista Estate on WhatsApp">
        <span class="absolute inset-0 -z-10 rounded-full bg-[#25D366]/25 animate-ping"></span>
        <i class="fi fi-brands-whatsapp text-[26px] max-sm:text-[22px]"></i>
      </a>
    `);
  }

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      menuToggle.innerHTML = mobileMenu.classList.contains("hidden") ? icon("menu") : icon("close");
    });
  }
}

function initAnimations() {
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".reveal", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: "body", start: "top 82%", toggleActions: "play none none none" }
    });

    document.querySelectorAll(".section-reveal").forEach((section) => {
      gsap.fromTo(section.querySelectorAll(".reveal-local"), { opacity: 0, y: 32 }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          onEnter: () => section.classList.add("is-visible")
        }
      });
    });

    document.querySelectorAll(".float-card").forEach((card, index) => {
      gsap.fromTo(card, { opacity: 0, y: 36, scale: 0.96 }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.85,
        delay: index * 0.04,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 86%" }
      });
    });

    document.querySelectorAll("[data-fill]").forEach((bar) => {
      gsap.to(bar, {
        width: bar.getAttribute("data-fill"),
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: bar, start: "top 88%" }
      });
    });

    document.querySelectorAll("[data-counter]").forEach((counter) => {
      const target = Number(counter.getAttribute("data-counter"));
      const state = { value: 0 };
      gsap.to(state, {
        value: target,
        duration: 1.5,
        ease: "power3.out",
        onUpdate: () => {
          counter.textContent = Math.round(state.value).toLocaleString("en-IN");
        },
        scrollTrigger: { trigger: counter, start: "top 88%", once: true }
      });
    });
  } else {
    document.querySelectorAll(".reveal, .reveal-local").forEach((el) => {
      el.style.opacity = 1;
      el.style.transform = "none";
    });
    document.querySelectorAll(".section-reveal").forEach((section) => section.classList.add("is-visible"));
    document.querySelectorAll("[data-fill]").forEach((bar) => {
      bar.style.width = bar.getAttribute("data-fill");
    });
    document.querySelectorAll("[data-counter]").forEach((counter) => {
      counter.textContent = Number(counter.getAttribute("data-counter")).toLocaleString("en-IN");
    });
  }
}

function initForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const validationMessages = {
    name: "Please enter a valid full name using 3 to 60 letters.",
    company: "Company name must be 2 to 80 characters.",
    phone: "Please enter a valid phone number between 10 and 18 characters.",
    email: "Please enter a valid email address between 6 and 100 characters.",
    service: "Please select a service interest.",
    category: "Please select a property category.",
    message: "Please enter project details between 10 and 500 characters."
  };

  Object.entries(validationMessages).forEach(([fieldName, message]) => {
    const field = form.elements[fieldName];
    if (!field) return;
    field.addEventListener("invalid", () => field.setCustomValidity(message));
    field.addEventListener("input", () => field.setCustomValidity(""));
    field.addEventListener("change", () => field.setCustomValidity(""));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");

    Object.keys(validationMessages).forEach((fieldName) => {
      const field = form.elements[fieldName];
      if (field) field.setCustomValidity("");
    });

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid && validationMessages[firstInvalid.name]) {
        firstInvalid.setCustomValidity(validationMessages[firstInvalid.name]);
      }
      form.reportValidity();
      if (status) {
        status.textContent = "Please complete the highlighted fields correctly before submitting.";
        status.className = "mt-5 rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200";
      }
      return;
    }

    const whatsappText = `New Enquiry - Lavista Estate

Name: ${form.name.value.trim()}
Company: ${form.company.value.trim() || "Not provided"}
Phone: ${form.phone.value.trim()}
Email: ${form.email.value.trim()}

Service: ${form.service.value}
Category: ${form.category.value}

Message:
${form.message.value.trim()}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`, "_blank", "noopener");

    if (status) {
      status.textContent = "Thank you. Your enquiry is ready for Lavista Estate's consultation team.";
      status.className = "mt-5 rounded-2xl border border-[#c9a35d]/30 bg-[#c9a35d]/10 p-4 text-sm text-[#f3d79b]";
    }
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initShell();
  initAnimations();
  initForm();
});
