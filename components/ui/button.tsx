import cx from "clsx";
import Link from "next/link";

interface Props {
  size?: "lg" | "md";
  children?: React.ReactNode;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  className,
  size = "lg",
  href,
  ...props
}: Props) {
  if (href) {
    return (
      <Link
        href={href}
        className={cx(
          "inline-flex  text-black bg-yellow-200 border border-yellow-200 rounded-full hover:border-black justify-center",
          size === "md" && "px-8 py-2",
          size === "lg" && "px-8 py-3",
          className
        )}>
        {children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={cx(
        "inline-flex  text-black bg-yellow-200 border border-yellow-200 rounded-full hover:border-black justify-center",
        size === "md" && "px-8 py-2",
        size === "lg" && "px-8 py-3",
        className
      )}>
      {children}
    </button>
  );
}
