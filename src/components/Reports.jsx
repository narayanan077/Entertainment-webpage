import React from "react";
import "./reports.css";

const Reports = () => {
  return (
    <div className="reports">
      <div className="page-header">
        <h2>Reports Dashboard</h2>
      </div>

      <div className="box-container">
        {/* FED ENTOS */}
        <div className="report-box">
          <img src="/img/a2.jfif" alt="FED ENTOS" />
          <h3>
            <a
              href="http://172.20.74.14:3000/d/cdshx8ae3mupsd/fed-entos?orgId=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              FED ENTOS
            </a>
          </h3>
          <p>
            This dashboard tracks and monitors the testing progress of the Fed Streaming and TV devices
           including key metrics on device testing and key defects encountered during the
            process.
          </p>
        </div>

        {/* XUMO New Devices */}
        <div className="report-box">
          <img src="/img/a3.jfif" alt="XUMO New Devices - Non ENTOS" />
          <h3>
            <a
              href="http://172.20.74.14:3000/d/cdxdg3h6gmvb4f/xumo-new-devices-non-entos?orgId=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              XUMO New Devices
            </a>
          </h3>
          <p>
            This dashboard provides insights on the Xumo New Devices, focusing
            on defect validation, ticket status, and deployment timelines across
            different devices.
          </p>
        </div>

        {/* Individual Metrics Dashboard */}
        <div className="report-box">
          <img src="/img/a1.png" alt="Individual Metrics" />
          <h3>
            <a
              href="http://172.20.74.14:3000/d/fdt8hcccgdfk0e/individual-metrics?orgId=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Individual Metrics Dashboard
            </a>
          </h3>
          <p>
            This dashboard allows engineers to track individual metrics such as
            defect assignments, resolution times, and defect trends for the
            selected month, help monitor personal performance.
          </p>
        </div>
        {/* Test Automation Status */}
        <div className="report-box">
          <img src="/img/automation.png" alt="Test Automation Status" />
          <h3>
            <a
              href="http://172.20.74.14:3000/d/ddycaxkqjqjggb/test-automation-status?orgId=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test Automation Status
            </a>
          </h3>
          <p>
            Details on the latest releases for FED Entos streaming devices,
            including test case execution status, key defects, and deployment
            timelines.
          </p>
        </div>

        {/* Empty box */}
        <div className="report-box empty-box"></div>
      </div>
    </div>
  );
};

export default Reports;
