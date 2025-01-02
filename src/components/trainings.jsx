import React, { useState, useMemo, useCallback } from 'react';
import './trainings.css'; // Ensure the correct path

// Sample training data with Date and Author fields
const trainingData = [
  {
    title: "Cypress Documentation Video",
    description: "OTTX Team gives about Cypress Automation Demo",
    link: "https://comcastcorp-my.sharepoint.com/personal/ksanth550_apac_comcast_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fksanth550%5Fapac%5Fcomcast%5Fcom%2FDocuments%2FRecordings%2FOTTx%20%2D%20Cypress%20Automation%20%2D%20Overview%2D20240801%5F180218%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ecb1f8594%2D743e%2D4808%2D8f73%2Dd8cceb943102",
    date: "2024-08-01",
    author: "OTTX Team"
  },
  {
    title: "Brown Bag Session",
    description: "Brown Bag Session Introduction to Kubernetes",
    link: "https://comcastcorp-my.sharepoint.com/personal/snesam200_cable_comcast_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fsnesam200%5Fcable%5Fcomcast%5Fcom%2FDocuments%2FRecordings%2FBrown%20Bag%20Session%5F%20Introduction%20to%20Kubernetes%2D20240801%5F085440%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ed3b3852f%2D6346%2D4715%2D98b1%2D2579caec0236",
    date: "2024-08-01",
    author: "Kubernetes Team"
  },
  {
    title: "GDO Quarterly Roadmap Meeting",
    description: "GDO Quarterly Meeting about devices",
    link: "https://comcastcorp-my.sharepoint.com/personal/sallin000_cable_comcast_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fsallin000%5Fcable%5Fcomcast%5Fcom%2FDocuments%2FRecordings%2F%5BGDO%20INTERNAL%5D%20Entertainment%20Device%20Quarterly%20Roadmap%20Meeting%2D20240725%5F110209%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E3ff71116%2Deda3%2D4645%2Dbaec%2D62690fad8216",
    date: "2024-07-25",
    author: "GDO Team"
  },
  {
    title: "Script Development Guidelines",
    description: "Script Development Guidelines which is taken by Sumathi",
    link: "https://comcastcorp-my.sharepoint.com/personal/ksanth550_apac_comcast_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fksanth550%5Fapac%5Fcomcast%5Fcom%2FDocuments%2FRecordings%2FScript%20development%5Fporting%20guidelines%20walkthrough%2D20240723%5F193432%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E292c500d%2D3708%2D488d%2Db7cb%2D04795d0b4765",
    date: "2024-07-23",
    author: "Sumathi"
  },
  {
    title: "Unified Automatics 4.0",
    description: "About the new Automatics 4.0 Session which was taken by Prem Kumar",
    link: "https://comcastcorp-my.sharepoint.com/personal/dpandi200_apac_comcast_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fdpandi200%5Fapac%5Fcomcast%5Fcom%2FDocuments%2FRecordings%2FUnified%20Automatics%20Transition%2D20240628%5F193234%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E9676f229%2D8395%2D452c%2Daa51%2D251bd0981cf7",
    date: "2024-06-28",
    author: "Prem Kumar Ganesan"
  },
  {
    title: "RDK OPs Demonstration Session Part-1",
    description: "RDK Ops Demonstration Series",
    link: "https://comcastcorp-my.sharepoint.com/personal/anavee169_cable_comcast_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fanavee169%5Fcable%5Fcomcast%5Fcom%2FDocuments%2FRecordings%2FRDK%20Ops%20Demostration%20Session%20Series%2D20240627%5F172449%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ea316b781%2Df5a8%2D4d05%2Db276%2D19c13f51fbb2",
    date: "2024-06-27",
    author: "RDK Ops Team"
  },
  {
    title: "RDK OPs Demonstration Session Part-2",
    description: "RDK Ops Demonstration Series",
    link: "https://comcastcorp-my.sharepoint.com/personal/anavee169_cable_comcast_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fanavee169%5Fcable%5Fcomcast%5Fcom%2FDocuments%2FRecordings%2FRDK%20Ops%20Demostration%20Session%20Series%2D20240627%5F172126%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E06505453%2D9202%2D4c21%2D8a41%2D152e60b87823",
    date: "2024-06-27",
    author: "RDK Ops Team"
  },
  {
    title: "Brown Bag Session",
    description: "Brown Bag Session: Concourse CI, GitHub Runners and Helm Chart",
    link: "https://comcastcorp-my.sharepoint.com/personal/snesam200_cable_comcast_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fsnesam200%5Fcable%5Fcomcast%5Fcom%2FDocuments%2FRecordings%2FBrown%20Bag%20Session%5F%20Concourse%20CI%20%2C%20GitHub%20Runners%20and%20Helm%20Chart%2D20240613%5F102910%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E1ea9b24f%2D98f3%2D4c82%2D9687%2Db9d58cb65216",
    date: "2024-06-13",
    author: "Brown Bag Team"
  },
  {
    title: "Video Capability Handoff Session",
    description: "An in-depth session on video capability handoff processes.",
    link: "https://comcastcorp.sharepoint.com/sites/CPETESTTRAINING/_layouts/15/stream.aspx?id=%2Fsites%2FCPETESTTRAINING%2FProcess%2FVideocapabilitytraining%2FAugust%2724%20Deliverables%2FVideo%20Capability%20Handoff%20Session%2013%2D20240828%5F100640%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eea813cdb%2D1b55%2D40f7%2Da0e1%2D52719b06d415",
    date: "2024-08-28",
    author: "Abhijit"
  },
  {
    title: "Request for Capability Validation Engagement",
    description: "An in-depth session on video capability Validation Engagement",
    link: "https://comcastcorp.sharepoint.com/sites/CPETESTTRAINING/_layouts/15/stream.aspx?id=%2Fsites%2FCPETESTTRAINING%2FProcess%2FVideocapabilitytraining%2FJanuary%2724%20Deliverables%2FRequest%20for%20Capability%20Validation%20Engagement%2D20240117%5F100222%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eed5cf7a6%2D19a7%2D4399%2Dac7d%2D18190e2d4408",
    date: "2024-01-22",
    author: "Abhijit"
  },
  {
    title: "Video Capability Handoff Session 6",
    description: "A session covering the video capability handoff process",
    link: "https://comcastcorp.sharepoint.com/sites/CPETESTTRAINING/_layouts/15/stream.aspx?id=%2Fsites%2FCPETESTTRAINING%2FProcess%2FVideocapabilitytraining%2FFebruary%2724%20Deliverables%2FVideo%20Capability%20Handoff%20Sesison%206%2D20240223%5F093256%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E04554eea%2D0429%2D406f%2Db775%2D9a0501f429e5",
    date: "2024-02-23",
    author: "Abhijit"
  },
  {
    title: "Video Capability Handoff Session 7",
    description: "A session covering the video capability handoff process",
    link: "https://comcastcorp.sharepoint.com/sites/CPETESTTRAINING/_layouts/15/stream.aspx?id=%2Fsites%2FCPETESTTRAINING%2FProcess%2FVideocapabilitytraining%2FFebruary%2724%20Deliverables%2FVideo%20Capability%20Handoff%20Sesison%207%2D20240306%5F100255%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ecc9b8ff1%2Da046%2D491d%2Dbca9%2D2b0bb697fdbe",
    date: "2024-03-06",
    author: "Abhijit"
  },
  {
    title: "Video Capability Handoff Session 8",
    description: "A session covering the video capability handoff process.",
    link: "https://comcastcorp.sharepoint.com/sites/CPETESTTRAINING/_layouts/15/stream.aspx?id=%2Fsites%2FCPETESTTRAINING%2FProcess%2FVideocapabilitytraining%2FMarch%2724%20Deliverables%2FVideo%20Capability%20Handoff%20Session%208%2D20240403%5F100355%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E27dc517b%2D5b9b%2D4f95%2D80e9%2D59517e84d45d",
    date: "2024-04-03",
    author: "Abhijit"
  },
  {
    title: "Video Capability Handoff Session 9",
    description: "A session covering the video capability handoff process",
    link: "https://comcastcorp.sharepoint.com/sites/CPETESTTRAINING/_layouts/15/stream.aspx?id=%2Fsites%2FCPETESTTRAINING%2FProcess%2FVideocapabilitytraining%2FMay%2724%20Deliverables%2FVideo%20Capability%20Handoff%20Session%209%2D20240523%5F100601%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E6ce89f70%2D8a23%2D499f%2Db818%2D9fadc27c0b94",
    date: "2024-05-23",
    author: "Abhijit"
  },
  {
    title: "Video Capability Handoff Session 10",
    description: "A session covering the video capability handoff process",
    link: "https://comcastcorp.sharepoint.com/sites/CPETESTTRAINING/_layouts/15/stream.aspx?id=%2Fsites%2FCPETESTTRAINING%2FProcess%2FVideocapabilitytraining%2FMay%2724%20Deliverables%2FVideo%20Capability%20Handoff%20Session%2010%2D20240604%5F100305%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E95089623%2Daf5d%2D4712%2Db211%2D4818ee146792",
    date: "2024-06-04",
    author: "Abhijit"
  },
  {
    title: "RDK Ops Demonstration Series Part-3",
    description: "RDK Ops Demonstration Series",
    link: "https://comcastcorp-my.sharepoint.com/personal/anavee169_cable_comcast_com/Documents/Recordings/RDK%20Ops%20Demostration%20Session%20Series-20240808_163459-Meeting%20Recording.mp4?web=1&referrer=Teams.TEAMS-ELECTRON&referrerScenario=RecapOpenInStreamButton.view.0ca75318-f777-4eca-83d7-816c50e5b4b1",
    date: "2024-08-08",
    author: "RDK Oops Team",
  },
  {
    title: "Video Capability Handoff Session",
    description: "New Video Capabilities Handoff session",
    link: "https://comcastcorp-my.sharepoint.com/personal/akaran981_cable_comcast_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fakaran981%5Fcable%5Fcomcast%5Fcom%2FDocuments%2FRecordings%2FVideo%20Capability%20Handoff%20Session%2013%2D20240828%5F100640%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ecccd1054%2Dbd40%2D4739%2Db2a5%2Df6236d50e58c",
    date: "2024-08-29",
    author: "Nanal Thangaraj",
  },
  {
    title: "Grafana Demo Call",
    description: "Explained about Grafana Dashboard about Telemetry Markers",
    link: "https://comcastcorp-my.sharepoint.com/personal/apalac802_cable_comcast_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fapalac802%5Fcable%5Fcomcast%5Fcom%2FDocuments%2FRecordings%2FGrafana%20Demo%20Call%2D20240906%5F083252%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eac303d55%2D1eff%2D4f9d%2D9bc5%2Dd0642c34bc31",
    date: "2024-09-06",
    author: "Ganesh R",
  },
  {
    title: "API Development in Automatics",
    description: "Explained about API Developement and its workflow",
    link:
      "https://comcastcorp-my.sharepoint.com/personal/ngangi514_cable_comcast_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fngangi514%5Fcable%5Fcomcast%5Fcom%2FDocuments%2FRecordings%2FTraining%5F%20API%20Development%20and%20Workflow%20in%20Automatics%2D20241008%5F190430%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E3e74bb8a%2D6904%2D406e%2Dbacc%2D4a05d12317dc&web=1",
    date: "2024-10-08",
    author: "Niranjan and Sivalingam",
  },
  {
    title: "Automatics Elite Session Training-1",
    description: "Explained about Automatics Elite to Automatics users",
    link:
      "https://comcastcorp-my.sharepoint.com/personal/dpandi200_apac_comcast_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fdpandi200%5Fapac%5Fcomcast%5Fcom%2FDocuments%2FRecordings%2FAutomatics%20Elite%20Training%20%2D%20Session%201%2D20241022%5F153329%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E8290481b%2D23fd%2D42e0%2Dafa8%2D71571cb2c659",
    date: "2024-10-23",
    author: "Premkumar Ganesan",
  }
  
  

  // Additional training items...
];

export const Trainings = () => {
  const [search, setSearch] = useState('');
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTrainings = useMemo(() => {
    const searchTerms = search.toLowerCase().trim().split(' ').filter(Boolean);

    if (searchTerms.length === 0) {
      return trainingData;
    }

    return trainingData.filter(({ title, description, author }) =>
      searchTerms.some(term =>
        title.toLowerCase().includes(term) ||
        description.toLowerCase().includes(term) ||
        author.toLowerCase().includes(term)
      )
    );
  }, [search]);

  const paginatedTrainings = useMemo(() => {
    const startIndex = (currentPage - 1) * entriesToShow;
    const endIndex = startIndex + entriesToShow;
    return filteredTrainings.slice(startIndex, endIndex);
  }, [filteredTrainings, currentPage, entriesToShow]);

  const totalPages = Math.ceil(filteredTrainings.length / entriesToShow);

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
      setCurrentPage(prevPage => prevPage - 1);
    }
  }, [currentPage]);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="trainings-container">
      {/* Image Header */}
      <div className="image-header">
        <img 
          src="/img/Project 12.jfif" 
          srcSet="/img/Project 12.jfif 1x, /img/Project 12@2x.jfif 2x, /img/Project 12@4x.jfif 4x" 
          sizes="(min-width: 1200px) 1200px, (min-width: 768px) 768px, 100vw"
          alt="Header" 
          className="header-image" 
        />
      </div>

      {/* Header Controls */}
      <div className="header-controls">
        <div className="left-controls">
          <div className="show-entries">
            <label htmlFor="entries">Show Entries:</label>
            <select id="entries" name="entries" onChange={handleEntriesChange} value={entriesToShow}>
              {[10, 25, 50, 100].map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </div>
        </div>
        <h2 className="header-title">Training Sessions</h2>
        <div className="right-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search Trainings..."
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
            <table className="training-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Author</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTrainings.length > 0 ? (
                  paginatedTrainings.map((training, index) => (
                    <tr key={`${training.title}-${index}`}>
                      <td>{training.title}</td>
                      <td>{training.description}</td>
                      <td>{training.date}</td>
                      <td>{training.author}</td>
                      <td><a href={training.link} target="_blank" rel="noopener noreferrer">View</a></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No trainings found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="pagination-container">
            <div className="pagination-info">
              Showing {(currentPage - 1) * entriesToShow + 1} to {Math.min(currentPage * entriesToShow, filteredTrainings.length)} of {filteredTrainings.length} entries
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
                const page = currentPage === 1 ? index + 1 : currentPage + index - 1;
                if (page <= totalPages) {
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={currentPage === page ? 'active' : ''}
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
                  <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
                </>
              )}
              <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
