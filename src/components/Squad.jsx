import React from "react";
import './Squad.css'; // Ensure this CSS file is included correctly

export const Squad = () => {
  return (
    <div className="squad-container"> {/* Updated class name */}
      {/* Portfolio Section */}
      <div className="portfolio">
        <h2>Entertainment Squads</h2> {/* Added heading for context */}
        <div className="row">
          <div className="column">
            <img src="/img/Project 1.jpg" alt="Project 1" />
            <h3 className="project-title-1">
              <a href="https://etwiki.sys.comcast.net/display/RDK/E2E+New+Device+Primary+Squad" target="_blank" rel="noopener noreferrer">
                New Device Primary Squad
              </a>
            </h3>
            <p>Xumo TV Primary Squad focuses on the Apache 2K device, delivering  end-to-end (E2E) release testing. This comprehensive testing process encompasses various phases, including BHT, UAT, UDT and ensuring these devices get deployed to customers (GA) on a set timeline established by Business.</p>
          </div>
          <div className="column">
          <img src="/img/Project 2.jpg" alt="Project 2" />
            <h3 className="project-title-2">
              <a href="https://etwiki.sys.comcast.net/display/RDK/E2E+New+Device+Secondary+Squad" target="_blank" rel="noopener noreferrer">
                New Device Secondary Squad
              </a>
            </h3>
            <p>Xumo TV Secondary Squad focuses on the Negroni 2K device, delivering end-to-end (E2E) release testing. This comprehensive testing process encompasses various phases, including BHT, UAT, UDT and ensuring these devices get deployed to customers (GA) on a set timeline established by Business.</p>
          </div>
          <div className="column">
          <img src="/img/Project 4.png" alt="Project 4" />
            <h3 className="project-title-3">
              <a href="https://etwiki.sys.comcast.net/pages/viewpage.action?pageId=1306609101" target="_blank" rel="noopener noreferrer">
                New Device Xumo Streaming
              </a>
            </h3>
            <p>New device Xumo Streaming Squad ocus is on key models including the Sercomm XiONE, ES1 Realtek, WNC XiONE, and Sky XiONe. This involves comprehensive end-to-end (E2E) release testing to ensure seamless operation and high-quality streaming experiences across all devices.</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
          <img src="/img/Project 3.jpg" alt="Project 3" />
            <h3 className="project-title-4">
              <a href="https://etwiki.sys.comcast.net/display/RDK/FED+-+EntOS+TV+Devices" target="_blank" rel="noopener noreferrer">
                FED - EntOS TV Devices
              </a>
            </h3>
            <p>This squad handles the Release & stable testing for all the FED (Fielded Entertainment Devices) - EntOS TV Devices.Executing the E2E test cases on EntOS TV devices, which includes user and operational test areas and ensuring delivery with highest quality.</p>
          </div>
          <div className="column">
            <img src="/img/Project 5.png" alt="Project 5" />
            <h3 className="project-title-5">
              <a href="https://etwiki.sys.comcast.net/display/RDK/FED+-+EntOS+Streaming+Devices" target="_blank" rel="noopener noreferrer">
                FED - EntOS Streaming Devices
              </a>
            </h3>
            <p>This squad handles the Release & stable testing for all the FED (Fielded Entertainment Devices) - EntOS Streaming Devices.Developing automated test suites for E2E Release testing.</p>
          </div>
          <div className="column">
          <img src="/img/Project 6.jpg" alt="Project 6" />
            <h3 className="project-title-6">
              <a href="https://etwiki.sys.comcast.net/display/RDK/FED+-+Non+EntOS+Devices" target="_blank" rel="noopener noreferrer">
                FED - Non EntOS Devices
              </a>
            </h3>
            <p>Biweekly release testing for all Fielded Xumo TV devices (Hisense V1, Hisense V2, Element TV, Apache 4K and Pioneer).Defect Validation on release branches and Stable spin.</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
          <img src="/img/Project 7.jpg" alt="Project 7" />
            <h3 className="project-title-7">
              <a href="https://etwiki.sys.comcast.net/display/RDK/CPE+-+QA+-+E2E+Patch+Re-Spin+Squad" target="_blank" rel="noopener noreferrer">
                E2E Patch Re-spin Squad
              </a>
            </h3>
            <p>This squad handles the Patch release testing for all fielded devices (X1,Xumo,Flex 2.0 and Sky devices).Coverage on Comcast, Syndication Partners, Flex 1.0.</p>
          </div>
          <div className="column">
          <img src="/img/Project 8.avif" alt="Project 8" />
            <h3 className="project-title-8">
              <a href="https://etwiki.sys.comcast.net/pages/viewpage.action?pageId=1239478129" target="_blank" rel="noopener noreferrer">
                Operational Excellence
              </a>
            </h3>
            <p>Provide testing support to reproduce and characterize defects found post release in vendor sites, trials and field deployment. Support Development efforts for rapid fix and deployment or revert and deployment of defects identified post release.</p>
          </div>
          <div className="column">
          <img src="/img/Project 9.jpg" alt="Project 9" />
            <h3 className="project-title-9">
              <a href="https://etwiki.sys.comcast.net/display/RDK/RDK-E+RelQA" target="_blank" rel="noopener noreferrer">
                RDK-E RelQA
              </a>
            </h3>
            <p>This squads handle the end to end testing on the entertainment OS, this project is currently in develping phase.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
