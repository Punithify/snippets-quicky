import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

const Navbar = () => {
  const { user, error, isLoading } = useUser();
  return (
    <nav>
      <Link href="/">
        <a className="text-2xl mb-2 block text-center text-red-200 uppercase">
          Unvernisable Snippets
        </a>
      </Link>
      <div className="flex space-x-3 justify-center mb-6 mx-30">
        <Link href="/snippets/html">
          <a className="text-red-100 hover:underline">HTML</a>
        </Link>
        <Link href="/snippets/css">
          <a className="text-red-100 hover:underline">CSS</a>
        </Link>
        <Link href="/snippets/javascript">
          <a className="text-red-100 hover:underline">JAVASCRIPT</a>
        </Link>
        {!isLoading && !user && (
          <Link href="/api/auth/login">
            <a className="text-red-100 hover:underline">Login</a>
          </Link>
        )}
        {!isLoading && user && (
          <>
            <Link href="/mysnippet">
              <a className="text-red-100 hover:underline">My Snippets</a>
            </Link>
            <Link href="/api/auth/logout">
              <a className="text-red-100 hover:underline">Logout</a>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
