import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Reveal } from "@/components/motion/Reveal";
import ReservationDialog from "@/components/ReservationDialog";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_25rem_at_10%_-10%,hsl(var(--primary)/0.10),transparent_60%),radial-gradient(40rem_20rem_at_100%_0%,hsl(var(--accent)/0.18),transparent_60%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {/* floating hearts */}
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="absolute select-none text-rose-400/40 dark:text-rose-300/30"
              style={{
                left: `${(i * 83) % 100}%`,
                top: `${(i * 37) % 100}%`,
                fontSize: `${Math.max(18, (i % 5) * 8 + 14)}px`,
                animation: `float ${6 + (i % 4)}s ease-in-out ${i * 0.4}s infinite`,
              }}
            >
              ♥
            </span>
          ))}
        </div>
        <div className="container relative py-24 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border bg-white/60 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur">
                <Heart className="size-3 text-primary" />
                crafted by utsab for tua
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-5xl leading-tight sm:text-6xl">
                For Tua, with all my heart
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                This is my little corner of the internet to tell you how much you
                mean to me. I hope it makes you smile today and every day after.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href="#letter">
                  <Button size="lg" className="px-6">Read the letter</Button>
                </a>
                <a href="/memories">
                  <Button variant="ghost" size="lg" className="px-6">Open memories</Button>
                </a>
                <ReservationDialog />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured video */}
      <section className="relative">
        <div className="container pb-6 sm:pb-10 lg:pb-12">
          <Reveal>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-primary/20 bg-white/70 shadow-xl shadow-rose-500/10 backdrop-blur transition-transform duration-500 hover:scale-[1.01] dark:bg-background/60">
              <AspectRatio ratio={16 / 9}>
                <video
                src="https://cdn.builder.io/o/assets%2F28c7998f8c05479188e9c9c282137df4%2F65fc1f1afee841fe89ffda236e5d294c?alt=media&token=d2da477e-cb08-476a-8968-fd43a63a133a&apiKey=28c7998f8c05479188e9c9c282137df4"
                className="h-full w-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                aria-label="A romantic AI‑generated video of Utsab and Tua"
              />
              </AspectRatio>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Letter */}
      <section id="letter" className="scroll-mt-20">
        <div className="container py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Card className="border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader>
                  <CardTitle className="font-display text-3xl">My letter to you</CardTitle>
                </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  Dear Tua, every day with you feels like discovering a new
                  favorite song—familiar, warm, and somehow even more beautiful
                  than before. You are my calm in chaos, my laughter on ordinary
                  afternoons, and the reason I want to be the best version of
                  myself.
                </p>
                <p>
                  I love your kindness, the way your eyes light up when you
                  smile, and how even silence with you feels like home. Thank
                  you for loving me as I am. I promise to keep choosing you—in
                  every sunrise, every storm, and all the soft, quiet moments in
                  between.
                </p>
                <p className="text-right font-medium">— Utsab</p>
              </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reasons grid */}
      <section className="relative">
        <div className="container pb-16">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Your kindness", text: "You make the world softer just by being in it." },
              { title: "Your smile", text: "It turns the ordinary into something extraordinary." },
              { title: "Our adventures", text: "From big trips to tiny moments—every one is my favorite." },
              { title: "Forever us", text: "I choose you today, tomorrow, and always." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <Card className="border-transparent bg-gradient-to-br from-white to-rose-50/60 transition-transform duration-500 hover:scale-[1.02] dark:from-background dark:to-rose-950/20">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">{item.text}</CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section className="py-10">
        <div className="container">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-lg sm:text-xl">
              No matter where life takes us, my heart will always find its way
              back to you. <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text font-semibold text-transparent">Always, Tua and Utsab</span>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
