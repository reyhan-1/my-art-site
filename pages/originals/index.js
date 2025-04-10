import Link from "next/link";
import artworks from "@/data/artworks";

export default function Originals() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Original Paintings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artworks.map((art) => (
          <Link key={art.slug} href={`/originals/${art.slug}`}> {/* Update this path */}
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform cursor-pointer">
              <figure>
                <img src={art.image} alt={art.title} className="h-60 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{art.title}</h2>
                <p>{art.price}</p>
                {art.sold && <div className="badge badge-error">Sold Out</div>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
