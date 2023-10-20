"use client";
import Link from "next/link";
import "./globals.css";

interface Props {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: Props) => {
  console.error(error);
  return (
    <div>
      <p>There was an problem</p>
      <h1>Error</h1>
      <p> Please try again or contact support if the problem persists.</p>
      <div className="flex">
        <button className="btn btn-secondary btn-lg" onClick={reset}>
          Try Again
        </button>
        <Link href="/">
          <a className="btn btn-primary btn-lg">Go Home</a>
        </Link>
      </div>
    </div>
  );
};

export default error;
