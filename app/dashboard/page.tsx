import ColumnToggleMenu from "./Components/ColumnToggleMenu";
import FilterSwitchButton from "./Components/FilterSwitchButton";
import FiltersResetButton from "./Components/FiltersResetButton";
import SearchInput from "./Components/SearchInput";
import StatusResetButton from "./Components/StatusResetButton";
import StatusSwitchButton from "./Components/StatusSwitchButton";
import TableOfSurveys from "./Components/TableOfSurveys";

const DashboardHome = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="filters flex justify-between items-center">
        <div className="space-x-4 flex">
          <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
            <FiltersResetButton />
            <FilterSwitchButton title="Cash Aid" filterSlug="cashAid" />
            <FilterSwitchButton title="IEP" filterSlug="IEP" />
            <FilterSwitchButton title="DLI" filterSlug="DLI" />
            <FilterSwitchButton title="Returning" filterSlug="Returning" />
          </div>
          <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
            <StatusResetButton />
            <StatusSwitchButton title="New" StatusSlug="New" />
            <StatusSwitchButton title="Pending" StatusSlug="Pending" />
            <StatusSwitchButton title="Enrolled" StatusSlug="Enrolled" />
            <StatusSwitchButton title="Denied" StatusSlug="Denied" />
          </div>
        </div>
        <div>
          <ColumnToggleMenu />
        </div>
        <div>
          <SearchInput />
        </div>
      </div>
      <div>
        <TableOfSurveys />
      </div>
    </div>
  );
};

export default DashboardHome;
