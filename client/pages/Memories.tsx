export default function Memories() {
  const photos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F28c7998f8c05479188e9c9c282137df4%2Faeef5074cd714d60932f0cd91db30ba5?format=webp&width=1200",
      alt: "Utsab and Tua together at the temple",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F28c7998f8c05479188e9c9c282137df4%2Fb6d6f6f2cdf345358ef64fa8f18647e1?format=webp&width=1200",
      alt: "Tua smiling under string lights at night",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F28c7998f8c05479188e9c9c282137df4%2F26b3673dbab74ca7a8592d143b127ac9?format=webp&width=1200",
      alt: "Utsab selfie with backpack",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F28c7998f8c05479188e9c9c282137df4%2F5fd21e6cbba74a608268a7bfda42816c?format=webp&width=1200",
      alt: "Holding hands over coffee",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F28c7998f8c05479188e9c9c282137df4%2F11cc6449982f46fead46a77e7af68edf?format=webp&width=1200",
      alt: "Utsab looking at Tua with love (night portrait)",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F28c7998f8c05479188e9c9c282137df4%2F4c7817ccdc0c445badcd6f94344d2fb8?format=webp&width=1200",
      alt: "Utsab and Tua sharing a quiet look",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F28c7998f8c05479188e9c9c282137df4%2Fa2a5001ad24a4ea2937e25644cff62ef?format=webp&width=1200",
      alt: "Festive moment together",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F28c7998f8c05479188e9c9c282137df4%2Feccd8339510e4479b680e4e2affd3d5d?format=webp&width=1200",
      alt: "Tua doing a skincare mask",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F28c7998f8c05479188e9c9c282137df4%2Fd6d366bf510d42d68f834a38cf957141?format=webp&width=1200",
      alt: "Tua passport photo in hand",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F28c7998f8c05479188e9c9c282137df4%2F25f5232009554cf08f1203eec4a690cd?format=webp&width=1200",
      alt: "A soft blurry selfie of us",
    },
  ];

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_20%_0%,hsl(var(--primary)/0.08),transparent_60%),radial-gradient(30rem_18rem_at_90%_10%,hsl(var(--accent)/0.12),transparent_60%)]" />
      <div className="container relative py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl leading-tight sm:text-5xl animate-in fade-in slide-in-from-bottom-2">Our Memories</h1>
          <p className="mt-4 text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-1">
            A cozy corner to collect our photos, notes, and little adventures. We
            can fill this page together whenever you want.
          </p>
        </div>

        {/* Masonry gallery */}
        <div className="mx-auto mt-10 max-w-5xl columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((p, i) => (
            <figure key={p.src} className="group mb-4 break-inside-avoid animate-in fade-in zoom-in-50" style={{ animationDelay: `${i * 40}ms` }}>
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full transform-gpu rounded-xl border bg-white/40 shadow-sm ring-1 ring-black/5 transition duration-500 group-hover:scale-[1.02]"
              />
              <figcaption className="mt-1 px-1 text-xs text-muted-foreground opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                {p.alt}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-1">
          Want me to add captions, dates, and a slideshow? Say the word and I’ll make it magical.
        </p>
      </div>
    </section>
  );
}
