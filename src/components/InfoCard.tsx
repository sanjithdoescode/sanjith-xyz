
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface InfoCardProps {
  icon?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  onClick?: () => void;
  children?: ReactNode;
}
const InfoCard = ({
  icon,
  title,
  subtitle,
  description,
  footer,
  className = "",
  headerClassName = "",
  contentClassName = "",
  onClick,
  children,
}: InfoCardProps) => (
  <Card
    className={`bg-card border-border hover:border-primary/60 hover:shadow-lg hover:scale-[1.025] transition-all duration-300 group cursor-pointer ${className}`}
    onClick={onClick}
  >
    <CardHeader className={`pb-3 flex flex-col gap-2 ${headerClassName}`}>
      <div className="flex items-center gap-3">
        {icon}
        {typeof title === "string" ? (
          <CardTitle className="text-lg">{title}</CardTitle>
        ) : (
          title
        )}
      </div>
      {subtitle && (
        <div className="text-sm text-muted-foreground font-medium">{subtitle}</div>
      )}
    </CardHeader>
    <CardContent className={contentClassName}>
      {description && <p className="text-muted-foreground text-sm mb-2">{description}</p>}
      {children}
      {footer && <div className="mt-2">{footer}</div>}
    </CardContent>
  </Card>
);
export default InfoCard;
