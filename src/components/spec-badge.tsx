interface SpecBadgeProps {
  label: string;
  value: string;
}

export function SpecBadge({ label, value }: SpecBadgeProps) {
  return (
    <div className="inline-flex flex-col items-center rounded-lg bg-muted px-4 py-3 text-center">
      <span className="text-lg font-bold">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}
