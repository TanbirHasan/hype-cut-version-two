import Image from "next/image";

/** [file, width] — logo frames are 54px tall in the design */
const logos: [string, number][] = [
  ["logo-1", 65],
  ["logo-2", 133],
  ["logo-3", 53],
  ["logo-4", 153],
  ["logo-5", 138],
  ["logo-6", 71],
  ["logo-7", 138],
  ["logo-8", 58],
];

function Item({ file, w }: { file: string; w: number }) {
  return (
    <li className="flex w-[274px] shrink-0 flex-col items-center gap-5 pr-[18px]">
      <div className="grid size-[256px] place-items-center rounded-[18px] bg-white">
        <Image src={`/assets/home/${file}.svg`} alt="" width={w} height={54} />
      </div>
      <div className="flex w-[179px] flex-col items-center gap-2 text-center">
        <p className="text-base font-semibold leading-[1.1] tracking-[-0.02em] text-black">
          Loreipsum
        </p>
        <p className="text-xs font-semibold leading-[1.4] tracking-[-0.027em] text-[#808080]">
          Lorem ipsum dolor sit amet, consectetur.
        </p>
      </div>
    </li>
  );
}

export default function Brands() {
  return (
    <section className="overflow-hidden bg-blush py-[clamp(64px,6.25vw,120px)]">
      <div className="flex flex-col items-center gap-[clamp(40px,4.17vw,80px)]">
        <h2 className="container-x max-w-[1438px] text-center font-display text-[clamp(34px,5.56vw,80px)] font-bold leading-none tracking-[-0.04em] text-plum">
          We collaborate with forward-thinking brands to build lasting creative
          impact.
        </h2>
        {/* endless logo loop; starts offset so the first frame matches the Figma artboard */}
        <div className="w-full overflow-hidden" aria-label="Brands we work with">
          <ul className="brands-track flex w-max">
            {[0, 1, 2].map((r) =>
              logos.map(([f, w]) => <Item key={`${r}-${f}`} file={f} w={w} />)
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
