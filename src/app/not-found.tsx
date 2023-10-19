"use client";

import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/login");
  }, 2000);
  return (
    <div>
      <h1>404!!! Page not found!</h1>
    </div>
  );
};

export default NotFoundPage;
