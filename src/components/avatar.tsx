import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarPrimitive,
} from "@/components/ui/avatar";

export function Avatar() {
  return (
    <AvatarPrimitive className="size-16 border border-border p-0.5">
      <AvatarImage
        className="rounded-full"
        src="https://github.com/h3rmel.png"
        alt="Isaac Hermel Reginato"
      />
      <AvatarFallback className="rounded-full">IR</AvatarFallback>
    </AvatarPrimitive>
  );
}
