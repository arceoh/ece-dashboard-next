import Container from "@/app/components/Container";
import Link from "next/link";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ErrorNoSchoolsFound = () => {
  return (
    <Container>
      <div className="overflow-x-auto my-4">
        <div className="alert shadow-lg">
          <FaInfoCircle />
          <div>
            <h3 className="font-semibold text-lg">
              No Schools in User Profile!
            </h3>
            <div>
              <p>
                Be sure to have at least 1 school selected in the{" "}
                <Link className="link" href="/settings">
                  Settings
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
          <button className="btn btn-sm btn-secondary">Settings</button>
        </div>
      </div>
    </Container>
  );
};

export default ErrorNoSchoolsFound;
