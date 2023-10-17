import React, { Suspense } from "react";
import Schools from "./Schools";
import Loading from "./loading";

const SettingsPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-4">
        <h1>Settings</h1>
        <div>
          <Schools />
        </div>
      </div>
    </Suspense>
  );
};

export default SettingsPage;
