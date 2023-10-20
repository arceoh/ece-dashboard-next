"use client";
import Link from "next/link";
import "@/app/globals.css";
import Container from "./components/Container";

interface Props {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: Props) => {
  console.error(error);
  return (
    <Container>
      <p>There was an problem</p>
      <h1>Error</h1>
      <p> Please try again or contact support if the problem persists.</p>
      <div className="flex">
        <button className="btn btn-secondary" onClick={reset}>
          Try Again
        </button>
        <Link href="/">
          <a className="btn btn-primary">Go Home</a>
        </Link>
      </div>
    </Container>
  );
};

export default error;
