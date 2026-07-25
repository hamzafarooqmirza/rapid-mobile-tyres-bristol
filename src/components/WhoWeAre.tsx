import Image from "next/image";
import { aboutContent } from "@/lib/data";

export default function WhoWeAre() {
  const { trustedPartner, whoWeAre } = aboutContent;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            {trustedPartner.title}
          </h2>
          {trustedPartner.paragraphs.map((p) => (
            <p key={p} className="mt-4 text-zinc-600 leading-7">
              {p}
            </p>
          ))}

          <h3 className="mt-10 text-2xl font-bold tracking-tight text-zinc-950">
            {whoWeAre.title}
          </h3>
          {whoWeAre.paragraphs.map((p) => (
            <p key={p} className="mt-4 text-zinc-600 leading-7">
              {p}
            </p>
          ))}
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
            <Image
              src={whoWeAre.image}
              alt="Rapid Mobile Tyres technician"
              width={whoWeAre.imageWidth}
              height={whoWeAre.imageHeight}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
