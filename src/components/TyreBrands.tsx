import { tyreBrands } from "@/lib/data";

function BrandList({
  title,
  brands,
}: {
  title: string;
  brands: string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <h3 className="text-lg font-semibold text-zinc-50">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {brands.map((brand) => (
          <li
            key={brand}
            className="rounded-full border border-zinc-700 px-4 py-1.5 text-sm text-zinc-300"
          >
            {brand}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TyreBrands() {
  return (
    <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
            Choice &amp; quality
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Tyre Brands We Stock
          </h2>
          <p className="mt-4 text-zinc-400">{tyreBrands.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <BrandList title="Premium brands" brands={tyreBrands.premium} />
          <BrandList title="Quality budget brands" brands={tyreBrands.budget} />
        </div>

        <p className="mt-8 text-center text-sm text-zinc-400">{tyreBrands.note}</p>
      </div>
    </section>
  );
}
