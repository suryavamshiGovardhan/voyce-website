import { Badge } from "@/components/ui/badge";
import { BASE_PATH } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export type LibraryArticle = {
  title: string;
  category: string;
  preview: string;
  fullContent: string;
  tags: string[];
  level: string;
  readTime: string;
  author: string;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  article: LibraryArticle | null;
};

export default function LibraryArticleDialog({ open, onOpenChange, article }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0">
        <ScrollArea className="max-h-[85vh]">
          <div className="p-6 sm:p-8">
            <DialogHeader>
              <div className="flex flex-wrap items-center gap-2">
                {article?.level ? (
                  <Badge variant="outline">{article.level}</Badge>
                ) : null}
                {article?.category ? <Badge variant="secondary">{article.category}</Badge> : null}
                {article?.readTime ? (
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                ) : null}
              </div>

              <DialogTitle className="mt-3 text-2xl sm:text-3xl">
                {article?.title ?? ""}
              </DialogTitle>
              <DialogDescription className="mt-1">
                {article?.author ? `by ${article.author}` : ""}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 space-y-6">
              {article?.preview ? (
                <blockquote className="border-l-2 pl-4 text-muted-foreground">
                  {article.preview}
                </blockquote>
              ) : null}

              <div className="space-y-4">
                <p className="leading-relaxed">{article?.fullContent ?? ""}</p>
              </div>

              {article?.tags?.length ? (
                <div className="pt-2">
                  <div className="mb-2 text-sm font-medium">Tags</div>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="rounded-md border p-4 text-sm text-muted-foreground">
                <div className="font-medium text-foreground">Note</div>
                <div className="mt-1">
                  This library is educational. It does not provide therapy, diagnosis, or crisis support.
                </div>
                <div className="mt-3">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={`${BASE_PATH}/contact`}
                      aria-label="Open the contact page"
                    >
                      Contact
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
