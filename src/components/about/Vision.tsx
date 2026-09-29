import Image from "next/image";

const stats = [
  {
    n: 1,
    value: "120M+",
    label: "Total Views Generated",
    body: "Content created with our team has reached millions of viewers across YouTube.",
    chart: { w: 421, h: 259 },
  },
  {
    n: 2,
    value: "350+",
    label: "Videos Created",
    body: "From strategy and scripting to editing and packaging, we've helped bring hundreds of video ideas to life.",
    chart: { w: 344, h: 259 },
  },
  {
    n: 3,
    value: "12K+",
    label: "Subscribers Reached",
    body: "Our content has helped creators and brands connect with growing audiences across different niches.",
    chart: { w: 344, h: 259 },
  },
];

export default function Vision() {
  return (
    <section className="bg-blush px-[clamp(12px,2.08vw,40px)] py-[clamp(12px,2.08vw,40px)]">
      <div className="mx-auto flex max-w-[1840px] flex-col gap-[clamp(56px,6.25vw,120px)] rounded-3xl bg-[#acd8d5] px-[clamp(20px,6.25vw,120px)] py-[clamp(56px,10.28vw,148px)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-[clamp(48px,20.8vw,400px)]">
          <p className="shrink-0 text-[clamp(18px,1.67vw,24px)] font-medium leading-normal tracking-[-0.015em] text-ink/80">
            Our Vision
          </p>
          <p className="max-w-[1084px] font-display text-[clamp(26px,3.33vw,48px)] font-bold leading-[1.167] tracking-[-0.04em] text-plum">
            Hypecut helps creators and brands grow through strategic, engaging
            YouTube content. From first-time creators to established channels,
            we turn ideas into content that earns attention, builds audiences,
            and creates lasting growth.
          </p>
        </div>

        <ul className="mx-auto grid w-full max-w-[1600px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((s) => (
            <li
              key={s.n}
              className="relative mx-auto aspect-[517/600] w-full max-w-[517px] [container-type:inline-size]"
            >
              <Image
                src={`/assets/about/stat-blob-${s.n}.svg`}
                alt=""
                fill
                aria-hidden
                className="object-fill"
              />
              <div className="absolute left-[9.28%] top-[9.67%] flex h-[80.8%] w-[81.4%] flex-col justify-between">
                <div className="flex flex-col">
                  <p className="font-display text-[9.28cqw] font-bold leading-[1.167] tracking-[-0.04em] text-plum">
                    {s.value}
                  </p>
                  <p className="pt-[1.74cqw] font-display text-[4.64cqw] font-normal leading-[0.7] tracking-[-0.0133em] text-black/60">
                    {s.label}
                  </p>
                </div>
                <Image
                  src={`/assets/about/stat-chart-${s.n}.svg`}
                  alt=""
                  width={s.chart.w}
                  height={s.chart.h}
                  className="mx-auto h-auto w-full"
                  style={{ maxWidth: `${(s.chart.w / 421) * 100}%` }}
                />
                <p className="text-[max(14px,3.48cqw)] font-medium leading-[1.333] tracking-[-0.015em] text-ink/60">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
