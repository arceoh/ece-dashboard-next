"use server";
import Container from "@/app/components/Container";
import Link from "next/link";

const loading = () => {
  return (
    <Container>
      <h1>Preschool Interest List Survey</h1>
      <div className="edit-survey mb-28">
        <div className="space-y-5">
          <fieldset>
            <legend>Student Information</legend>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <div className="input input-bordered w-full" />
              </div>
              <div>
                <div className="label">
                  <span className="label-text">Middle Name</span>
                </div>
                <div className="input input-bordered w-full" />
              </div>
              <div>
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <div className="input input-bordered w-full" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <div className="label">
                  <span className="label-text">Birthdate</span>
                </div>
                <div className="input input-bordered w-full" />
              </div>
            </div>
            <div className="form-control">
              <div className="cursor-pointer label justify-start">
                <div className="checkbox mr-4" />
                <span className="label-text">
                  Individualized Family Support Plan (IFSP) or an Individualized
                  Education Plan (IEP)?
                </span>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <legend>Guardian Information</legend>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <div className="font-semibold text-gray-700 dark:text-gray-200">
                    <span className="label-text">First Name</span>
                  </div>
                  <div className="input input-bordered w-full" />
                </div>
                <div>
                  <div className="font-semibold text-gray-700 dark:text-gray-200">
                    <span className="label-text">Last Name</span>
                  </div>
                  <div className="input input-bordered w-full" />
                </div>
                <div>
                  <div className="font-semibold text-gray-700 dark:text-gray-200">
                    <span className="label-text">Email</span>
                  </div>
                  <div className="input input-bordered w-full" />
                </div>
                <div>
                  <div className="font-semibold text-gray-700 dark:text-gray-200">
                    <span className="label-text">Phone</span>
                  </div>
                  <div className="input input-bordered w-full" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <div className="label">
                  <span className="label-text">Address Line 1</span>
                </div>
                <div className="input input-bordered w-full" />
              </div>
              <div>
                <div className="label">
                  <span className="label-text">Address Line 2</span>
                </div>
                <div className="input input-bordered w-full" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <div className="label">
                  <span className="label-text">City</span>
                </div>
                <div className="input input-bordered w-full" />
              </div>
              <div>
                <div className="label">
                  <span className="label-text">State</span>
                </div>
                <div className="input input-bordered w-full" />
              </div>
              <div>
                <div className="label">
                  <span className="label-text">Zip</span>
                </div>
                <div className="input input-bordered w-full" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div>
                <div className="label">
                  <span className="label-text">Family Size</span>
                </div>
                <div className="input input-bordered w-full" />
              </div>
              <div>
                <div className="label">
                  <span className="label-text">Monthly Income</span>
                </div>
                <div className="input input-bordered w-full" />
              </div>
            </div>
            <div className="form-control">
              <div className="label cursor-pointer justify-start">
                <div className="checkbox mr-4" />
                <span className="label-text">
                  Would you be interested in Dual Language Immersion (DLI) for
                  your child?
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div>
                <div className="label">
                  <span className="label-text">Prefered Language</span>
                </div>
                <div className="input input-bordered w-full" />
              </div>
              <div>
                <div className="label">
                  <span className="label-text">Prefered Location</span>
                </div>
                <div className="input input-bordered w-full" />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Status & Notes</legend>
            <div className="grid grid-cols-4 gap-6">
              <div className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Status</span>
                </div>
                <select className="select select-bordered font-sans">
                  <option value="New">New</option>
                  <option value="Pending">Pending</option>
                  <option value="Enrolled">Enrolled</option>
                  <option value="Denied">Denied</option>
                </select>
              </div>

              <div className="col-span-3">
                <div className="form-control">
                  <div className="label">
                    <span className="label-text">Notes</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered textarea-md w-full h-24"
                    placeholder="Notes"
                  ></textarea>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        {/* Footer */}
        <div className="flex justify-end space-x-3 mt-8">
          <Link href="/dashboard" className="btn  btn-lg">
            Cancel
          </Link>
          <button className="btn btn-secondary btn-lg">Save and Close</button>
        </div>
      </div>
    </Container>
  );
};

export default loading;
