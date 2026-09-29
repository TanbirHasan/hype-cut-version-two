import Image from "next/image";

/** Editing / Storywriting / Animation / Research doodle collage (decorative, exported from Figma with outlined text). */
export default function Doodles() {
  return (
    <div className="relative z-10 bg-blush">
      <Image
        src="/assets/home/doodles-cluster.svg"
        alt="Editing, storywriting, animation and research"
        width={1440}
        height={900}
        className="mx-auto h-auto w-full max-w-[1440px]"
      />
    </div>
  );
}
