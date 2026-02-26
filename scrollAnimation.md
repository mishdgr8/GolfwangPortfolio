Global Requirements

Use GSAP + ScrollTrigger only (no Locomotive, no ScrollSmoother).

Use pin: true — NOT CSS position: fixed.

Use scrub: true for scroll-linked motion.

Use anticipatePin: 1.

Use proper end calculations based on element width/height.

Use invalidateOnRefresh: true.

Use markers: false.

Use ease: "none" for scroll-driven animations.

No unnecessary z-index manipulation.

No overlapping triggers.

SECTION 1 — DEV PORTFOLIO
Required Behavior

Pin the section top top.

While pinned, vertical scroll must drive a horizontal translation of the portfolio cards.

Cards must be arranged horizontally (display: flex).

The horizontal scroll continues until the last card is fully visible.

As soon as this ScrollTrigger ends, the section must unpin cleanly.

Immediately after unpinning, the next section should begin normal scroll (no overlap).

Implementation Requirements

Structure:

<section class="dev-portfolio">
  <div class="dev-wrapper">
    <div class="dev-track">
      <!-- horizontally arranged cards -->
    </div>
  </div>
</section>

CSS requirements:

.dev-track must be display: flex

width should expand based on card count

overflow: hidden on wrapper

GSAP logic:

Pin .dev-portfolio

Animate x of .dev-track

end must be calculated as:

end: () => "+=" + (devTrack.scrollWidth - window.innerWidth)

No hardcoded pixel values.

SECTION 2 — SIGNAL SECTION
Required Behavior

Begins immediately after Dev Portfolio ends.

Pin top top.

Same horizontal scroll behavior as Dev section.

Vertical scroll drives horizontal card movement.

Section unpins only after all cards are fully revealed.

Implementation Rules

Same structure and GSAP pattern as Dev Portfolio.

Use a completely separate ScrollTrigger instance.

Do NOT nest triggers.

SECTION 3 — ANALYTICAL SECTION
Required Behavior

This section contains a vertical list.

Pin bottom bottom

The full content must be readable while pinned.

No horizontal animation.

This is a static vertical list.

It should remain pinned until its internal scroll completes.

ScrollTrigger config

start: "bottom bottom"

pin: true

scrub: false

end should be based on section height overflow if needed.

When the pinned bottom gets released, immediately trigger the Medium section animation.

SECTION 4 — MEDIUM SECTION
Required Behavior

As soon as Analytical section unpins (bottom bottom released), this section slides in.

Slide in from bottom (y: 100% → 0%).

Use a separate ScrollTrigger.

No pinning required here.

Just a one-time slide-in tied to scroll.

Use:

start: "top bottom"
toggleActions: "play none none reverse"
REMAINING SECTIONS

After Medium:

No more animations.

No pinning.

No z-index stacking.

Normal document flow scroll to footer.

Important Constraints

Do not stack pinned sections with overlapping timelines.

Ensure spacing is handled via ScrollTrigger pinSpacing (default true).

Kill all triggers on resize using:

ScrollTrigger.refresh();

Code must be modular and readable.

Do not wrap everything in a single timeline.

Each section must have its own ScrollTrigger.

Deliverables

Return:

Clean HTML structure

Minimal CSS required

Proper GSAP + ScrollTrigger JS

No extra commentary

No alternative approaches

Only provide working implementation code.