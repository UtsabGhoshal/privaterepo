import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ReservationDialog() {
  const [open, setOpen] = useState(false);
  const [herName, setHerName] = useState("Tua");
  const [agreeLove, setAgreeLove] = useState(false);
  const [agreeHusband, setAgreeHusband] = useState(false);
  const [message, setMessage] = useState("");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function onBackdropClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) setOpen(false);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreeLove || !agreeHusband) {
      toast("Please agree to the promises to continue.");
      return;
    }
    setOpen(false);
    toast.success("Reservation confirmed ❤️", {
      description:
        `${herName} reserved a lifetime spot in Utsab's heart. He promises to try his best every day.`,
    });
  }

  return (
    <>
      <Button size="lg" variant="secondary" className="px-6" onClick={() => setOpen(true)}>
        Make a reservation
      </Button>
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"
            onMouseDown={onBackdropClick}
          >
            <div
              ref={contentRef}
              className="w-full max-w-lg rounded-lg border bg-background p-6 shadow-xl animate-in fade-in zoom-in-95"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Reservation in Utsab's heart</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  A gentle consent to start a new chapter together. This is just
                  for us — nothing is stored anywhere.
                </p>
              </div>

              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="herName">Your name</Label>
                  <Input
                    id="herName"
                    value={herName}
                    onChange={(e) => setHerName(e.target.value)}
                    placeholder="Tua"
                    required
                  />
                </div>

                <div className="flex items-start gap-3 rounded-lg border p-3">
                  <Checkbox
                    id="agreeLove"
                    checked={agreeLove}
                    onCheckedChange={(v) => setAgreeLove(Boolean(v))}
                    className="mt-1"
                    required
                  />
                  <Label htmlFor="agreeLove" className="cursor-pointer">
                    I am ready to start a new relationship with Utsab and make a
                    reservation in his heart. I will try to understand his point
                    of view, and he is all mine — with love and respect.
                  </Label>
                </div>

                <div className="flex items-start gap-3 rounded-lg border p-3">
                  <Checkbox
                    id="agreeHusband"
                    checked={agreeHusband}
                    onCheckedChange={(v) => setAgreeHusband(Boolean(v))}
                    className="mt-1"
                    required
                  />
                  <Label htmlFor="agreeHusband" className="cursor-pointer">
                    Please consider Utsab as my future husband, not a time‑pass
                    boyfriend. He promises to try his best, always.
                  </Label>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Anything you'd like to add</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a sweet note..."
                    rows={4}
                  />
                </div>

                <div className="mt-4 flex justify-end gap-2">
                  <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="px-6">
                    Confirm reservation
                  </Button>
                </div>
              </form>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
