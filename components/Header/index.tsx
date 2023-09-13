import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center bg-[url('/logo-top.png')] bg-contain min-h-[110.5px] relative">
        <div className="bg-gradient-to-b from-[#323232] to-transparent absolute z-1 inset-0"></div>
        <div className="text-4xl font-semibold uppercase z-20">
          rtp live slot kingdomtoto
        </div>
        <div className="text-4xl uppercase z-20">rtp kingdomtoto</div>
      </div>

      <Image
        src="/banner1.webp"
        width={1110}
        height={444}
        placeholder="blur"
        blurDataURL={"/banner1.webp"}
        alt="banner"
      />
    </>
  );
}
