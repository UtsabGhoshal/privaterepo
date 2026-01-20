import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Reveal } from "@/components/motion/Reveal";
import ReservationDialog from "@/components/ReservationDialog";
import MessageBox from "@/components/MessageBox";

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
                This is my little corner of the internet to tell you how much
                you mean to me. I hope it makes you smile today and every day
                after.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href="/home#letter">
                  <Button size="lg" className="px-6">
                    Read the letter
                  </Button>
                </a>
                <a href="/memories">
                  <Button variant="ghost" size="lg" className="px-6">
                    Open memories
                  </Button>
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
                  src="https://cdn.builder.io/o/assets%2F5d194e4113c94b9c9d4ca1e98e139060%2F89a88b06fb90474ab6fd6a39c985b2f8?alt=media&token=419e113f-0412-42ae-a6b6-44e2eb9761eb&apiKey=5d194e4113c94b9c9d4ca1e98e139060"
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
                  <CardTitle className="font-display text-3xl">
                    My letter to you
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg leading-relaxed">
                  <p>My dear,</p>
                  <p>
                    Aaj onek bhabhi ki likhbo, kibhabe shuru korbo. Shotti
                    bolte, shob shobdo choto pore jay jokhon ami bujhi je ami
                    tomake koto ta koshto diyechi. Ami jani, amar kono kotha ei
                    moment-e tomar betha ta puro muche dite parbe na. Tobu ami
                    chai tumi jano—ami nijer bhul bujhte perechi.
                  </p>
                  <p>
                    Ami tomake hurt korechi, eta ami deny korte chai na. Amar
                    kotha, amar behavior, ba amar decision—kono ekta na, shob
                    miliye ami tomake koshto diyechi. Sheta amar intention chilo
                    na, kintu intention jai hok, result ta bhul chilo. Aar tar
                    responsibility ami puro tai nicchi.
                  </p>
                  <p>
                    Tumi amar jibone shudhu ekta manush na. Tumi amar shanti,
                    amar bhorsha, amar sobcheye safe jayga. Aar shei manush-ke
                    ami jokhon koshto dei, sheta amar nijer upor-e shobcheye
                    beshi bojha hoye dariye thake. Protidin ei bhabna ta amake
                    kheye felche je ami tomake kando-te dekhechi, aar ami tokhon
                    tomar pashe thakte parni je bhabe thaka uchit chilo.
                  </p>
                  <p>
                    Ami perfect na, ami bhul kori—kintu ami change korte chai.
                    Shudhu kotha diye na, amar kaj diye. Jodi tumi ekta chance
                    dao, ami proman kore debo je ami shikhte pari, ami better
                    hote pari, aar ami tomake aar kokhono erokom bhabe hurt hote
                    debo na.
                  </p>
                  <p>
                    Ami tumi jodi ekhono ragiye thako, sheta ami bujhi. Tumi
                    jodi time chao, sheta-o ami respect korbo. Ami shudhu etai
                    chai—tumi jano je amar apology ta shudhu kotha na, eta amar
                    mon theke asha.
                  </p>
                  <p>
                    Please amake khoma koro. Hoyto aaj na, hoyto ekhon na—kintu
                    jodi konodin tumi bhabo je ami ekhono tomar jonno important,
                    tahole mone rekho ami ekhono tomake shei bhabei chai, shei
                    bhabei respect kori.
                  </p>
                  <p className="text-right font-medium">
                    Always yours,
                    <br />
                    Mimo
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Acceptance Video */}
      <section className="relative">
        <div className="container pb-6 sm:pb-10 lg:pb-12">
          <Reveal>
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl font-bold mb-2">
                  She said Yes!
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our beautiful moment together
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-primary/20 bg-white/70 shadow-xl shadow-rose-500/10 backdrop-blur transition-transform duration-500 hover:scale-[1.01] dark:bg-background/60">
                <AspectRatio ratio={16 / 9}>
                  <video
                    src="https://cdn.builder.io/o/assets%2F5d194e4113c94b9c9d4ca1e98e139060%2F849c4f183e4c4d68b60a713dc3bd061e?alt=media&token=3fcdcdbd-f5f4-4c9d-afd5-2ca05a15c0e4&apiKey=5d194e4113c94b9c9d4ca1e98e139060"
                    className="h-full w-full object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label="Our acceptance and proposal moment"
                  />
                </AspectRatio>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reasons grid */}
      <section className="relative">
        <div className="container pb-16">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Your kindness",
                text: "You make the world softer just by being in it.",
              },
              {
                title: "Your smile",
                text: "It turns the ordinary into something extraordinary.",
              },
              {
                title: "Our adventures",
                text: "From big trips to tiny moments—every one is my favorite.",
              },
              {
                title: "Forever us",
                text: "I choose you today, tomorrow, and always.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <Card className="border-transparent bg-gradient-to-br from-white to-rose-50/60 transition-transform duration-500 hover:scale-[1.02] dark:from-background dark:to-rose-950/20">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    {item.text}
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Message Box */}
      <MessageBox />

      {/* Closing quote */}
      <section className="py-10">
        <div className="container">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-lg sm:text-xl">
              No matter where life takes us, my heart will always find its way
              back to you.{" "}
              <span className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text font-semibold text-transparent">
                Always, Tua and Utsab
              </span>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
