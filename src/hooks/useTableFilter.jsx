import { useState, useMemo } from "react";
import { generateOptions } from "../utils/tableUtils";

export const useTableFilter = (array = []) => {
  const [selectedEntries, setSelectedEntries] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState("");

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredArray = useMemo(() => {
    let filteredArray = [...array];

    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filteredArray = filteredArray.filter((item) => {
        return (
          (item.firstname && item.firstname.toLowerCase().includes(searchTermLower)) ||
          (item.lastname && item.lastname.toLowerCase().includes(searchTermLower)) ||
          (item.adress && item.adress.street && item.adress.street.toLowerCase().includes(searchTermLower)) ||
          (item.adress && item.adress.city && item.adress.city.toLowerCase().includes(searchTermLower)) ||
          (item.adress && item.adress.zipCode && item.adress.zipCode.toLowerCase().includes(searchTermLower)) ||
          (item.adress && item.adress.state && item.adress.state.toLowerCase().includes(searchTermLower))
        );
      });
    }

    if (sortConfig.key) {
      filteredArray.sort((a, b) => {
        if (sortConfig.key.startsWith("adress.")) {
          const subKey = sortConfig.key.split(".")[1];
          if (a.adress[subKey] < b.adress[subKey]) {
            return sortConfig.direction === "asc" ? -1 : 1;
          }
          if (a.adress[subKey] > b.adress[subKey]) {
            return sortConfig.direction === "asc" ? 1 : -1;
          }
          return 0;
        } else {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "asc" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "asc" ? 1 : -1;
          }
          return 0;
        }
      });
    }

    return filteredArray;
  }, [array, sortConfig, searchTerm]);

  const filteredLength = filteredArray.length;
  const totalPages = Math.ceil(filteredLength / selectedEntries);
  const startIndex = (currentPage - 1) * selectedEntries;
  const endIndex = startIndex + selectedEntries;
  const paginatedArray = filteredArray.slice(startIndex, endIndex);

  const handleChange = (event) => {
    setSelectedEntries(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const length = array.length;
  const tens = Math.ceil(length / 10) * 10;
  const options = generateOptions(tens, length);

  return {
    selectedEntries,
    options,
    filteredArray: paginatedArray,
    handleChange,
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    length: filteredLength,
    goToPreviousPage,
    goToNextPage,
    goToPage,
    requestSort,
    searchTerm,
    handleSearch,
  };
};
