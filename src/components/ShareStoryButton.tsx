
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { hapticFeedback } from "@/utils/hapticFeedback";

export default function ShareStoryButton() {
  const handleClick = () => {
    hapticFeedback.onSuccess();
  };

  return (
    <div className="mb-16 mt-4 text-center">
      <Button
        asChild
        size="lg"
        variant="outline"
        className="rounded-full border-border px-6 text-base font-medium text-foreground hover:border-primary/40 hover:text-primary"
        onClick={handleClick}
      >
        <Link to="/workbook" className="flex items-center space-x-3">
          <Heart className="h-5 w-5" aria-hidden="true" />
          <span>Write your own story</span>
        </Link>
      </Button>
      <p className="text-muted-foreground text-sm mt-3">
        Put what this stirred into words in the workbook — keep it to yourself or share it, your choice.
      </p>
    </div>
  );
}
