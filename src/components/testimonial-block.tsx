interface TestimonialBlockProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialBlock({ quote, author, role, company }: TestimonialBlockProps) {
  return (
    <div className="rounded-lg p-10" style={{ backgroundColor: 'rgb(254, 249, 237)' }}>
      <blockquote className="font-heading text-2xl font-semibold leading-relaxed" style={{ color: 'rgb(93, 82, 75)' }}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-8">
        <p className="font-semibold" style={{ color: 'rgb(93, 82, 75)' }}>
          {author}
        </p>
        <p className="mt-1 text-sm leading-relaxed" style={{ color: 'rgb(140, 84, 98)' }}>
          {role}, {company}
        </p>
      </div>
    </div>
  );
}
