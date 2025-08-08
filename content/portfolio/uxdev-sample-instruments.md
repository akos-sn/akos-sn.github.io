<a href="/portfolio.html">← Back to portfolio</a>

![hero](/assets/img/music-thumbnail.png)

<h1>Sampled Instruments</h1>

<div class="introduction">

<bb-tags>

UX, Recording and Engineering

</bb-tags>

<bb-intro>

Sample based virtual instruments, recorded note-by-note.

</bb-intro>

---

<bb-tags>

CONTEXT

</bb-tags>

Creating and designing sample libraries is a passion project of mine. Essentially, these are instruments recorded one note at a time to transform them into a new playable instrument controlled by midi.

Composing these instruments require a lot of attention to detail. With the UI, I try to communicate what mood might these libraries evoke or how inspiration came to me.

</div>

## Implementation

Implementing a sample library is a slow process requiring a lot of attention to detail. During the recording session the source sound must be recorded note-by-note.

After the recording session I make a quick rough mockup to see if the instrument works. Some sounds sample better than others, and different instruments might need different treatment. This is not a high-quality sample library but a short proof-of-concept.

![LOGIC SESSION SCREENSHOT](/assets/img/music-logic.png)

When I have a decent idea of the layout, I start to create the GUI and the individual component designs. In this case my Korg Minilogue was the instrument I was sampling with some of my patches, so I took the designs from the original hardware synth and applied it to my design.

I use DecentSampler, an XML-based free sampler that is widely accessible for people regardless of OS or Digital Audio Workstation (DAW) of their choice.

![alt text](/assets/img/music-design.png)

![alt text](/assets/img/music-code.png)