import { useEffect, useState, type PropsWithChildren } from "react";
import styles from "./AnimatedSection.module.css";
import clsx from "clsx";

type AnimationType = "fade-up" | "from-left" | "from-right";

type AnimatedSectionProps = PropsWithChildren<{
  animation?: AnimationType;
  className?: string;
}>;

function AnimatedSection({
  children,
  animation = "fade-up",
  className = "",
}: AnimatedSectionProps) {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element]);

  return (
    <div
      className={clsx(
        styles["animated-section"],
        styles[animation],
        isVisible && styles.visible,
        className,
      )}
      ref={setElement}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
