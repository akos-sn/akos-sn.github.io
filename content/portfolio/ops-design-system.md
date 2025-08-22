<a href="/portfolio.html" class="back-link">Back to portfolio</a>

<h1>Design System: Shared language</h1>

<div class="article-intro">

<bb-tags>

DesignOps & Design Lead — 2023 TOPdesk

</bb-tags>

<bb-intro>

Shared language between developers and designers.

</bb-intro>

---

<bb-tags>

Challenge

</bb-tags>

When I started out at TOPdesk, I was an in-team designer at the design system. It was already a pretty expansive set of components and guidelines, but it wasn't consistent between the components implemented versus the Figma components.

A problem I wanted to solve is that designers and developers often don't speak the same language, and the component properties did reflect that. 

<bb-tags>

Approach

</bb-tags>

The other designers and I in the team went ahead to pick the current design system apart and investigate where we could improve the design system as a product.

</div>

## Auditing

We laid out potential things we could improve, then scoped them into Global and Component-based improvements. We focussed on the global parts mainly, but did address low-effort/high-impact opportunities.

![alt text](/assets/img/ds-exploration.png)

We noticed a fair few inconsistencies in the use of colour (the design system uses scoped colour tokens as styles with namespaces instead of variables), unaligned naming conventions/unlabelled layers, and inconsistent use of props.

That made me realise there is a theme to this and the very tangible effect of this is complicated handoffs and a gap in language between engineers and designers (you can read more about how I addressed the shared language between design and business in the [Measuring UX study](../portfolio/ops-measuring-ux.html)).

## Implementation

### Variables

First I asked for the colour stylesheets of our design system and started the process of documenting the exact colour logic to Figma's variables. That enabled us to start a silent roll-out of our Dark theme, which was an attractive incentive to invest further in our design system.

![alt text](/assets/img/ds-variables.png)

### Props

A relatively high-impact move was to scan all our components already in Storybook, and align the properties of the Figma components with the Vue component counterparts. 

![alt text](/assets/img/ds-props.png)

![alt text](/assets/img/ds-devmode.png)

### Actually doing the work

As the project lead, I outlined a way to track progress, taught the other design system designers taking part in the project what the process is, how I see this realised in Figma.

![alt text](/assets/img/ds-checklist.png)

## Learning

### Mentoring

As my first big-scale project I lead with multiple designers, this gave me the opportunity to practice knowledge-sharing. 

### Design system's naming conventions

A lot of naming convention had to follow a vocabulary. Since I believe a Design System implicitly dictates a way of working, it needs to be as frictionless as possible. Naming convention that is easily guessable, consistent, and behaves consistently was a non-negotiable in the product.

### Figma

I was already using Figma for years by that time but I did learn a lot about variables, how can I make simpler, more clever components that are easy to maintain, and leverage the power of properties. I did say "Figma is amazing" quite a lot. 

## Outcome

We ended up with a more mature design system that is an artefact of our culture of shared language, and bridging the gap between designers and engineers.

Our handoffs have become lighter, our stakeholder designers ended up spending less time on writing specs and generally less overhead for finishing tasks.