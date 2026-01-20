import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Heart, Check, AlertCircle } from "lucide-react";
import { database } from "@/lib/firebase";
import { ref, push } from "firebase/database";

export default function MessageBox() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      setStatus("error");
      setStatusMessage("Please write a message first");
      return;
    }

    if (!database) {
      setStatus("error");
      setStatusMessage("Database connection unavailable. Please try again later.");
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    try {
      // Create a reference to the messages collection
      const messagesRef = ref(database, "messages");

      // Push a new message
      await push(messagesRef, {
        text: message.trim(),
        timestamp: new Date().toISOString(),
        senderInfo: {
          userAgent: navigator.userAgent,
        },
      });

      setStatus("success");
      setStatusMessage("Message sent with love! 💕");
      setMessage("");

      // Clear success message after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <Card className="border-primary/20 shadow-lg shadow-primary/5 bg-gradient-to-br from-white to-rose-50/40 dark:from-background dark:to-rose-950/20">
            <CardHeader className="text-center">
              <Heart className="w-6 h-6 text-primary fill-primary mx-auto mb-3" />
              <CardTitle className="font-display text-2xl">Send me a Message</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Share your thoughts, wishes, or memories with me
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Write something special..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isLoading}
                    className="w-full px-4 py-3 min-h-24 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="p-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <p className="text-sm text-green-700 dark:text-green-400">{statusMessage}</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <p className="text-sm text-red-700 dark:text-red-400">{statusMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Your message will be saved securely in my database
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
