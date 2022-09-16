import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  });

  return (
    <div className="not-found">
      <h1>Page not found...</h1>
      <h2>
        Go back{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
    </div>
  );
};

export default NotFound;
