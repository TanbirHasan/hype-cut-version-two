import Image from "next/image";

const quotes = [
  {
    text: "“Fast, thoughtful, and deeply collaborative. Alture felt like part of our team from day one.”",
  },
  {
    text: "“Alture’s work was minimal in form but rich in intention. They helped us express our brand with clarity and confidence.”",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Image key={i} src="/assets/home/star-rating.svg" alt="" width={12} height={12} />
      ))}
    </div>
  );
}

function QuoteCard({ text }: { text: string }) {
  return (
    <figure className="flex min-h-[326px] flex-col justify-between gap-6 rounded-xl bg-white p-6 md:p-10 lg:min-h-0 lg:flex-1">
      <div className="flex flex-col gap-6">
        <Stars />
        <blockquote className="font-display text-[clamp(20px,1.67vw,24px)] font-bold leading-[1.333] text-ink">
          {text}
        </blockquote>
      </div>
      <figcaption className="flex items-center gap-3">
        <Image
          src="/assets/home/avatar-mark.png"
          alt="Mark Wiliams"
          width={40}
          height={40}
          className="size-10 rounded-lg object-cover"
        />
        <div className="flex flex-col">
          <span className="font-display text-base font-bold leading-6 text-ink">
            Mark Wiliams
          </span>
          <span className="text-xs font-medium leading-[1.4] tracking-[-0.027em] text-[#707070]">
            Head of Brand at <b className="font-bold">Velith</b>®
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

function Column() {
  return (
    <div className="flex flex-col gap-4 lg:h-full">
      {quotes.map((q) => (
        <QuoteCard key={q.text} text={q.text} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-blush py-[clamp(64px,6.25vw,120px)]">
      <div className="flex flex-col items-center gap-[clamp(48px,6.25vw,120px)]">
        <h2 className="container-x text-center font-display text-[clamp(34px,5.56vw,80px)] font-bold leading-none tracking-[-0.04em] text-plum">
          Stories Behind
          <br /> Our Success
        </h2>

        <div className="grid w-[calc(100%-2*var(--gutter))] max-w-[1533px] gap-6 lg:h-[668px] lg:grid-cols-3">
          <Column />

          <figure className="relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-2xl lg:min-h-0">
            <Image
              src="/assets/home/testimonial-harold.jpg"
              alt="Harold Mercer"
              fill
              sizes="(min-width: 1024px) 495px, 100vw"
              className="object-cover"
            />
            {/* pink fade + progressive blur rising from the bottom (Figma: #B8364F, bg-blur 120) */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-[54%] bg-[linear-gradient(to_top,#b8364f_0%,#b8364f_62%,rgba(184,54,79,0)_100%)] backdrop-blur-[12px] [mask-image:linear-gradient(to_top,#000_70%,transparent_100%)]"
            />
            <div className="relative flex flex-col gap-8 p-6 pt-11 md:pb-11 md:pl-11 md:pr-[72px]">
              <div className="flex flex-col gap-[18px]">
                <Stars />
                <blockquote className="font-display text-[clamp(20px,1.67vw,24px)] font-bold leading-[1.333] text-white">
                  “Working with Alture felt less like hiring a design agency and
                  more like gaining a strategic partner forever.”
                </blockquote>
              </div>
              <figcaption className="flex flex-col">
                <span className="font-display text-base font-bold leading-6 text-white">
                  Harold Mercer
                </span>
                <span className="text-xs font-medium leading-[1.4] tracking-[-0.027em] text-white/50">
                  Investor at Solence®
                </span>
              </figcaption>
            </div>
          </figure>

          <Column />
        </div>
      </div>
    </section>
  );
}
