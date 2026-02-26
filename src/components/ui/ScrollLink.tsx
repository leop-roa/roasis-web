"use client";

import { useCallback, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";

interface ScrollLinkProps {
  href: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  if (!id) return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Handles hash-based anchor links correctly across pages.
 * - On the homepage: smooth-scrolls to the section
 * - On other pages: navigates to / first, then scrolls after load
 * - Listens for popstate (back/forward) and scrolls to hash
 */
export function useHashScroll() {
  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash;
      if (hash) {
        // Small delay to let the DOM settle after popstate
        requestAnimationFrame(() => scrollToHash(hash));
      }
    }

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("popstate", onHashChange);

    // Handle initial hash on page load
    if (window.location.hash) {
      requestAnimationFrame(() => scrollToHash(window.location.hash));
    }

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("popstate", onHashChange);
    };
  }, []);
}

export default function ScrollLink({
  href,
  onClick,
  className,
  children,
}: ScrollLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === "/";

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onClick?.();

      if (isHomePage) {
        // Already on homepage — just scroll and update hash
        scrollToHash(href);
        window.history.pushState(null, "", href);
      } else {
        // On another page — navigate home, then scroll after load
        router.push("/");
        // Wait for navigation to complete, then scroll
        const checkAndScroll = () => {
          const id = href.replace("#", "");
          const el = document.getElementById(id);
          if (el) {
            scrollToHash(href);
            window.history.replaceState(null, "", href);
          } else {
            requestAnimationFrame(checkAndScroll);
          }
        };
        // Start checking after a short delay for the page transition
        setTimeout(checkAndScroll, 100);
      }
    },
    [href, isHomePage, onClick, router]
  );

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
