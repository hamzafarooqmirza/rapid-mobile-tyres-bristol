import Image from "next/image";

const brands = [
  { name: "Michelin", src: "/michelin-tyres-logo.webp" },
  { name: "Pirelli", src: "/pirelli-tyres-logo.webp" },
  { name: "Bridgestone", src: "/bridgestone-tyres-logo.webp" },
  { name: "Continental", src: "/continental-tyres-logo.webp" },
  { name: "Goodyear", src: "/goodyear-tyres-logo.webp" },
  { name: "Dunlop", src: "/dunlop-tyres-logo.webp" },
  { name: "Avon", src: "/avon-tyres-logo.webp" },
  { name: "Falken", src: "/falken-tyres-logo.webp" },
  { name: "Firestone", src: "/firestone-tyres-logo.webp" },
  { name: "Hankook", src: "/hankook-tyres-logo.webp" },
  { name: "Toyo", src: "/toyo-tyres-logo.webp" },
  { name: "Yokohama", src: "/yokohama-tyres-logo.webp" },
];

export default function TyreBrandStrip() {
  return (
    <div className="border-t border-b border-zinc-100 bg-white py-6">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
          Tyre Brands We Supply
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
              <Image
                src={brand.src}
                alt={brand.name}
                width={96}
                height={40}
                className="h-8 w-auto object-contain opacity-70 transition-opacity hover:opacity-100 sm:h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
