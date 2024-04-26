import { LinkButton, colorListKeys } from "../LinkButton";

export interface TableItemLineActionProps {
  href: string;
  title: string;
  color: colorListKeys;
}
export function TableItemLineAction({
  href,
  color,
  title,
}: TableItemLineActionProps) {
  return (
    <LinkButton href={href} color={color}>
      <span>{title}</span>
    </LinkButton>
  );
}
