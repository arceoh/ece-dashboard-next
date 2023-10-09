import ColumnToggleMenu from "./Components/ColumnToggleMenu";
import Table from "./Components/Table";

const DashboardHome = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="filters flex justify-between items-center">
        <div className="space-x-4 flex">
          <div className="flex">Filter by</div>

          <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
            <button className="btn btn-xs">Cash Aide</button>
            <button className="btn btn-xs">IEP</button>
            <button className="btn btn-xs">DLI</button>
            <button className="btn btn-xs">Returning</button>
          </div>
          <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
            <button className="btn btn-xs">New</button>
            <button className="btn btn-xs">Pending</button>
            <button className="btn btn-xs">Enrolled</button>
            <button className="btn btn-xs">Denied</button>
          </div>
        </div>
        <div>
          <ColumnToggleMenu />
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-sm input-bordered w-full max-w-xs"
          />
        </div>
      </div>

      <div>
        <Table />
      </div>
    </div>
  );
};

export default DashboardHome;
