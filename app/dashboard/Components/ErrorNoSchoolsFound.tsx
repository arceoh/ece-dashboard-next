import Container from "@/app/components/Container";
import Link from "next/link";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const ErrorNoSchoolsFound = () => {
  return (
    <div className="overflow-x-auto my-4">
      <div className="alert shadow-lg">
        <FaInfoCircle />
        <div>
          <h3 className="font-semibold text-lg">No Schools in User Profile!</h3>
          <div>
            <p>
              Be sure to have at least 1 school selected in the{" "}
              <Link className="link" href="/dashboard/settings">
                Settings
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
        <Link className="btn btn-sm btn-secondary" href="/dashboard/settings">
          Settings
        </Link>
      </div>
    </div>
  );
};

export default ErrorNoSchoolsFound;
