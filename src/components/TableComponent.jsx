import TableHeaders from "./TableHeaders";
import { useTableFilter } from "../hooks/useTableFilter";
import PaginationComponent from "./PaginationComponent";
import SearchComposent from "./SearchComponent";

const styles = `
.table {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.table header,
.table footer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
}
.table footer .container-pagination {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: max-content;
}
.table footer .container-pagination .btn-control {
  background: none;
  border: none;
}
.table footer .container-pagination .page-pagination {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.table footer .container-pagination .page-pagination .btn-pagination {
  background: linear-gradient(#fff, #dedede);
  border: 1px solid #2a2a2a;
  border-radius: 2px;
  width: 34px;
  aspect-ratio: 1/1;
  cursor: pointer;
  transition: all .3s ease-in-out;
}
.table footer .container-pagination .page-pagination .btn-pagination:hover {
  background: linear-gradient(#fafafa, #cfcfcf);
  border: 3px solid #2a2a2a;
}
`;

const TableComponent = ({ array = [], arrayHeader = true, arrayStyle = true, className }) => {
  const {
    selectedEntries,
    options,
    filteredArray,
    handleChange,
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    length,
    goToPreviousPage,
    goToNextPage,
    goToPage,
    requestSort,
    searchTerm,
    handleSearch,
  } = useTableFilter(array);

  const renderTableRows = () => {
    return filteredArray.map((item, index) => (
      <tr key={index}>
        {Array.isArray(item) ? (
          <td>{item}</td>
        ) : (
          <>
            {Object.entries(item).map(([key, value]) => {
              if (key !== "adress") {
                return <td key={key}>{value}</td>;
              }
              return null;
            })}
            {Object.entries(item.adress).map(([key, value]) => (
              <td key={`adress.${key}`}>{value}</td>
            ))}
          </>
        )}
      </tr>
    ));
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} className={`btn-pagination ${currentPage === i ? "active" : ""}`} onClick={() => goToPage(i)}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className={`table default ${className}`}>
      {arrayStyle && <style>{styles}</style>}
      <header>
        <p>
          <span>Show </span>
          <select name="entries" id="entries" value={selectedEntries} onChange={handleChange}>
            {options}
          </select>
          <span> entries</span>
        </p>
        <SearchComposent value={searchTerm} onChange={handleSearch} />
      </header>
      <main>
        <table>
          {arrayHeader && (
            <thead>
              <TableHeaders data={filteredArray} onSort={requestSort} />
            </thead>
          )}
          <tbody>{renderTableRows()}</tbody>
        </table>
      </main>
      <footer>
        <p>
          Showing {startIndex + 1} to {Math.min(endIndex, length)} of {length} entries
        </p>
        <PaginationComponent goToNextPage={goToNextPage} renderPaginationButtons={renderPaginationButtons} goToPreviousPage={goToPreviousPage} />
      </footer>
    </div>
  );
};

export default TableComponent;
