interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  details: string[];
}

export function ProcessStep({ number, title, description, details }: ProcessStepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-muted-foreground">{description}</p>
        {details.length > 0 && (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
