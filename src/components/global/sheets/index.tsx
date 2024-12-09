import { SheetClose, Sheet as ShadCnSheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  side: "top" | "bottom" | "left" | "right";
};

const Sheet = ({ children, trigger, className, side }: Props) => {
  return (
    <ShadCnSheet>
      <SheetTrigger className={className}>{trigger}</SheetTrigger>
      <SheetContent side={side} className="-0">
        {children}
      </SheetContent>
    </ShadCnSheet>
  );
};

export default Sheet;
