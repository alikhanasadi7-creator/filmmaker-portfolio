import { useEffect } from "react";
import { useLocation } from "wouter";

export default function RedirectHome() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation("/", { replace: true });
  }, [setLocation]);

  return null;
}
