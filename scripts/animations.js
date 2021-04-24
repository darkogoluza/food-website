const tl = gsap.timeline();

// Sidebar
tl.fromTo(
  ".sidebar-logo",
  { opacity: 0, scale: 0 },
  { opacity: 1, scale: 1, duration: 0.25, ease: "elastic" }
);
$(".sidebar-menu div").each(function () {
  tl.fromTo(
    this,
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 0.1, ease: "elastic" }
  );
});
tl.fromTo(
  ".sidebar-logout",
  { opacity: 0, scale: 0 },
  { opacity: 1, scale: 1, duration: 0.1, ease: "elastic" }
);

// Header
tl.fromTo(
  ".main-section header",
  { opacity: 0, y: 25 },
  { opacity: 1, y: 0, duration: 0.25, ease: "power4" },
  "-=0.45"
);

// Main
tl.fromTo(
  ".main-content-title",
  { opacity: 0, y: 25 },
  { opacity: 1, y: 0, duration: 0.25, ease: "power4" },
  "-=0.3"
);

$(".main-content-grid div").each(function () {
  console.log(this);
  tl.fromTo(
    this,
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 0.25, ease: "power4" },
    "-=0.2"
  );
});

// Order

const initalOrderWidth = $(".order").css("width");
const initalOrderPadding = $(".order").css("padding");
tl.fromTo(
  ".order",
  { opacity: 0, width: "0px", padding: "0px" },
  {
    opacity: 1,
    width: initalOrderWidth,
    padding: initalOrderPadding,
    duration: 0.35,
    ease: "power4",
  },
  "-=0.6"
);
