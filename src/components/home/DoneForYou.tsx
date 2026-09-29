import Image from "next/image";

export default function DoneForYou() {
  return (
    <div className="relative">
      <Image
        src="/assets/home/curve-hero-left.svg"
        alt=""
        width={316}
        height={837}
        aria-hidden
        className="pointer-events-none absolute left-[max(0px,calc(50%-735px))] top-[-306px] z-0 hidden max-w-none xl:block"
      />
      <div className="container-x relative z-10 flex flex-col items-center gap-14 text-center md:gap-20">
        <div className="flex flex-col items-center gap-10 md:gap-20">
          <h2 className="font-display text-[clamp(34px,5.56vw,80px)] font-bold leading-none tracking-[-0.04em] text-plum">
            We do it for you. No more
            <br className="hidden md:block" /> struggling to grow on YouTube.
          </h2>
          <div className="flex flex-col items-center gap-9">
            <p className="text-[clamp(20px,2.5vw,36px)] font-semibold leading-[1.21] tracking-[-0.015em] text-plum lg:whitespace-nowrap">
              Work with our expert YouTube strategists,
              <br className="hidden md:block" /> writers, editors, and producers to create content
              <br className="hidden md:block" /> that transforms your channel.
            </p>
            <div className="flex flex-col items-center gap-10 md:gap-14">
              <p className="text-[clamp(16px,1.67vw,24px)] font-medium leading-[1.33] tracking-[-0.015em] text-plum/80 lg:whitespace-nowrap">
                No managing a team of freelancers or spending countless hours trying to
                <br className="hidden md:block" /> master all the skillsets YouTube requires - all you need is HeyFriends!
              </p>
              <p className="text-[clamp(22px,2.22vw,32px)] font-semibold leading-tight tracking-[-0.015em] text-plum">
                No more worrying about
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/assets/home/services-cloud.svg"
          alt="Research, Thumbnails, Editing, Writing, Animation, Structuring Videos, YouTube Analytics"
          width={1110}
          height={584}
          className="h-auto w-full max-w-[1110px]"
        />
      </div>
    </div>
  );
}
