import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showGameModal, setShowGameModal] = useState(false);
  const [revealedPassword, setRevealedPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleGetPassword = () => {
    setShowGameModal(true);
  };

  const handleLoveYes = () => {
    setRevealedPassword("I Love Mimo");
    setShowGameModal(false);
  };

  const handleLoveNo = () => {
    // Question loops again - do nothing, the modal will ask again
  };

  const handleLogin = () => {
    setError("");
    
    // Simple validation
    if (username.trim() === "tua" && password === "I Love Mimo") {
      // Successful login - redirect to home page
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50 dark:from-background dark:to-rose-950/20 p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(45rem_25rem_at_10%_-10%,hsl(var(--primary)/0.10),transparent_60%),radial-gradient(40rem_20rem_at_100%_0%,hsl(var(--accent)/0.18),transparent_60%)]" />
      </div>

      <div className="w-full max-w-md">
        <Card className="border-primary/20 shadow-2xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Heart className="w-8 h-8 text-primary fill-primary" />
            </div>
            <CardTitle className="text-2xl font-display">Welcome Back</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">Sign in to continue</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Username */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Get Password Button */}
            <div className="pt-2">
              <button
                onClick={handleGetPassword}
                className="w-full text-sm text-primary hover:underline font-medium"
              >
                Forgot Password? Get it here
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-md">
                <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
              </div>
            )}

            {/* Revealed Password */}
            {revealedPassword && (
              <div className="p-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-md">
                <p className="text-xs text-green-600 dark:text-green-400 mb-1">Your password:</p>
                <p className="text-sm font-mono text-green-700 dark:text-green-300">{revealedPassword}</p>
              </div>
            )}

            {/* Login Button */}
            <Button
              onClick={handleLogin}
              className="w-full mt-6"
              size="lg"
            >
              Login
            </Button>

            {/* Demo hint */}
            <p className="text-xs text-muted-foreground text-center mt-4">
              Demo: username = <span className="font-mono">tua</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Love Question Modal/Game */}
      {showGameModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Card className="w-full max-w-sm border-primary/20 shadow-2xl animate-in fade-in zoom-in duration-300">
            <CardContent className="pt-8 text-center space-y-6">
              <div>
                <Heart className="w-12 h-12 text-primary fill-primary mx-auto mb-4 animate-pulse" />
                <h2 className="text-2xl font-display font-bold mb-2">Do you love me?</h2>
                <p className="text-muted-foreground">Answer honestly to reveal your password 💕</p>
              </div>

              <div className="flex gap-3 justify-center pt-4">
                <Button
                  onClick={handleLoveYes}
                  className="px-8"
                  size="lg"
                >
                  Yes ❤️
                </Button>
                <Button
                  onClick={handleLoveNo}
                  variant="outline"
                  className="px-8"
                  size="lg"
                >
                  No
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-6">
                Note: If you select "No", you'll see this question again 😊
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
