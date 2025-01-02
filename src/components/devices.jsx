import React, { useState, useEffect, useMemo, useCallback } from "react";
import data from "../data/data.json"; // Ensure the correct path
import "./Devices.css"; // Ensure the correct path

export const Devices = () => {
  const [search, setSearch] = useState("");
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [hidden, setHidden] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    key: "model",
    direction: "ascending",
  });

  const devices = data.devices;

  // Function to mask the MAC address, showing only the last two characters
  const maskMacAddress = (mac) => {
    if (typeof mac !== "string" || mac.length < 2) return mac;
    const visiblePart = mac.slice(-2);
    const maskedPart = "*".repeat(mac.length - 2);
    return maskedPart + visiblePart;
  };

  // Function to sort devices based on sortConfig
  const sortedDevices = useMemo(() => {
    let sortableDevices = [...devices];
    if (sortConfig !== null) {
      sortableDevices.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableDevices;
  }, [devices, sortConfig]);

  const filteredDevices = useMemo(() => {
    const searchTerms = search
      .split(",")
      .map((term) => term.trim().toLowerCase())
      .filter((term) => term.length > 0);

    if (searchTerms.length === 0) {
      return sortedDevices;
    }

    return sortedDevices.filter((device) =>
      searchTerms.some((term) =>
        Object.values(device).some((value) =>
          value.toLowerCase().includes(term)
        )
      )
    );
  }, [sortedDevices, search]);

  const paginatedDevices = useMemo(() => {
    const startIndex = (currentPage - 1) * entriesToShow;
    const endIndex = startIndex + entriesToShow;
    return filteredDevices.slice(startIndex, endIndex);
  }, [filteredDevices, currentPage, entriesToShow]);

  const totalPages = Math.ceil(filteredDevices.length / entriesToShow);

  const startEntry = (currentPage - 1) * entriesToShow + 1;
  const endEntry = Math.min(
    currentPage * entriesToShow,
    filteredDevices.length
  );

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  }, []);

  const handleEntriesChange = useCallback((e) => {
    setEntriesToShow(parseInt(e.target.value, 10));
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }, [currentPage]);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [currentPage, totalPages]);

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header-container">
      {/* Image Header */}
      <div className="image-header">
        <img
          src="/img/Project 9.jpg"
          
          sizes="(min-width: 1200px) 1200px, (min-width: 768px) 768px, 100vw"
          alt="Header"
          className="header-image"
        />
      </div>

      {/* Header Controls */}
      <div className={`header-controls ${hidden ? "hidden" : ""}`}>
        <div className="left-controls">
          <div className="show-entries">
            <label htmlFor="entries">Show Entries:</label>
            <select
              id="entries"
              name="entries"
              onChange={handleEntriesChange}
              value={entriesToShow}
            >
              {[10, 25, 50, 100].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h2 className="header-title">Device Manager</h2>
        <div className="right-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search Devices..."
              value={search}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="table-container">
            <table className="device-table">
              <thead>
                <tr>
                  {[
                    "model",
                    "mac",
                    "panelSize",
                    "variant",
                    "Squad Name",
                    "team",
                    "devicegroup",
                    "status",
                  ].map((header) => (
                    <th key={header} onClick={() => handleSort(header)}>
                      {header.charAt(0).toUpperCase() + header.slice(1)}
                      <span
                        className={`sort-indicator ${
                          sortConfig.key === header ? sortConfig.direction : ""
                        }`}
                      >
                        {sortConfig.key === header
                          ? sortConfig.direction === "ascending"
                            ? " ▲"
                            : " ▼"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedDevices.length > 0 ? (
                  paginatedDevices.map((device, index) => (
                    <tr key={`${device.model}-${index}`}>
                      <td>{device.model}</td>
                      <td>{maskMacAddress(device.mac)}</td>{" "}
                      {/* Masked MAC address */}
                      <td>{device.panelSize}</td>
                      <td>{device.variant}</td>
                      <td>{device["Squad Name"] || "N/A"}</td>
                      <td>{device.team}</td>
                      <td>{device.devicegroup}</td>
                      <td>{device.status || "N/A"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">No devices found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="pagination-container">
            <div className="pagination-info">
              Showing {startEntry} to {endEntry} of {filteredDevices.length}{" "}
              entries
            </div>
            <div className="pagination-controls">
              <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
              </button>
              {currentPage > 2 && (
                <>
                  <button onClick={() => handlePageChange(1)}>1</button>
                  {currentPage > 3 && <span>...</span>}
                </>
              )}
              {Array.from({ length: Math.min(3, totalPages) }, (_, index) => {
                const page =
                  currentPage === 1 ? index + 1 : currentPage + index - 1;
                if (page <= totalPages) {
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={currentPage === page ? "active" : ""}
                    >
                      {page}
                    </button>
                  );
                }
                return null;
              })}
              {currentPage < totalPages - 1 && (
                <>
                  {currentPage < totalPages - 2 && <span>...</span>}
                  <button onClick={() => handlePageChange(totalPages)}>
                    {totalPages}
                  </button>
                </>
              )}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};