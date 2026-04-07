interface TestimonialBlockProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialBlock({ quote, author, role, company }: TestimonialBlockProps) {
  return (
    <div className="rounded-lg border bg-background p-6">
      <blockquote className="text-muted-foreground italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-4">
        <p className="font-bold">{author}</p>
        <p className="text-sm text-muted-foreground">
          {role}, {company}
        </p>
      </div>
    </div>
  );
}
