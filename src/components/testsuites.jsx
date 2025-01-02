import React from 'react';
import './Testsuites.css'; // Ensure the correct path to your CSS file

function Testsuites() {
  return (
    <div className="our-journey">
      {/* New Section: All you can stream */}
      <div className="streaming-section">
        <div className="h8">TEST SUITES</div> {/* Use the custom "h8" class */}
        <p>
          This comprehensive testing process encompasses various phases, including BHT, UAT, UDT and ensuring these devices get deployed to customers (GA) on a set timeline established by Business.
        </p>
        <div className="streaming-stats">
          <div className="stat">
            <a href="https://etwiki.sys.comcast.net/display/RDK/BHT%28Build+Health+Test+suite%29+Automation" target="_blank" rel="noopener noreferrer">
              <h2>Build Health Test</h2>
            </a>
            <p>Test coverage that focuses on the multi-point checks to provide confidence on the software build to reduce software and hardware risks like device getting bricked, basic RDKV stack and its related services are up and healthy.</p>
          </div>
          <div className="stat">
            <a href="https://etwiki.sys.comcast.net/display/RDK/UAT%28User+Acceptance+Test+suite%29+Automation" target="_blank" rel="noopener noreferrer">
              <h2>User Acceptance Test</h2>
            </a>
            <p>Test coverage that is required to ensure that when the customer gets new software code with latest features and bug fixes, the quality has been measured and user experience is of highest standards.</p>
          </div>
          <div className="stat">
          <a href="https://etwiki.sys.comcast.net/display/RDK/User+Depth+Testing+%28UDT%29+Automation" target="_blank" rel="noopener noreferrer">
            <h2>User Depth Test</h2>
            
            <p>Test coverage that is required to ensure that when the customer gets new software code with latest features and bug fixes, delivered features and fixes have been measured and do not cause issues impacting user experience.</p>
            </a>
          </div>
        </div>
      </div>

      <h1 className="custom-h1-title">EXECUTION FLOW</h1>

      {/* Timeline Section */}
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon inception"></div>
          <div className="timeline-content">
            <h2><a href="https://automatics.comcast.net/4.0/homePage.htm" target="_blank" rel="noopener noreferrer"><strong>Automatics</strong></a></h2>
            <p>QA team is currently working with Automatics 1.0 and 3.0. Automatics is used to trigger and analyze the BHT, UAT, and UDT automated test cases. Automatics 4.0 will be deployed in November 2024, which incoprate the both 1.0 and 3.0 feature in it.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon expansions"></div>
          <div className="timeline-content">
            <h2><a href="https://almoctane-ams.saas.microfocus.com/ui/?&p=263011/56001#/home" target="_blank" rel="noopener noreferrer"><strong>ALM Octane</strong></a></h2>
            <p>Octane tool facilitates the manual execution of test cases that are not automated. It offers comprehensive details, streamlining for the test cases in detail.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon test-at-scale"></div>
          <div className="timeline-content">
            <h2>Build Health Test</h2>
            <p>Following the completion of the build, the QA execution team is required to initiate the build health test case to validate and certify the build's integrity.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon going-global"></div>
          <div className="timeline-content">
            <h2>USER ACCEPTANCE TEST</h2>
            <p>Once the build health test is certified and test flow proceeds with the User acceptance testing, so far 25 test cases have been automated and delivered for execution.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon get-smarter"></div>
          <div className="timeline-content">
            <h2>USER DEPTH TESTING</h2>
            <p>User depth testing is followed by the completion of the UAT test case. As of now, the UDT test case is in the phase of automation script enhancement and is carried out manually.</p>
          </div>
        </div>
      </div>

      {/* Duplicate Section */}
      <h1 className="custom-h1-title">Tools</h1>

      {/* Timeline Section */}
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon inception"></div>
          <div className="timeline-content">
            <h2><a href="https://analytics.automatics.stb.r53.xcal.tv:8443/d/GRbavOhGz/rdkv-rack-dashboard?orgId=2&var-group=STABILITY_RDKTV&var-Type=PIONEER_NEGRONI_2K_PANEL_24&var-Type=PIONEER_NEGRONI_2K_PANEL_32&var-Type=PIONEER_NEGRONI_2K_PANEL_40&var-Version=All&var-mac=All&var-marker=ERR&var-markername=All&var-process_marker=Receiver&from=1720522862594&to=1720685954729" target="_blank" rel="noopener noreferrer"><strong>Grafana</strong></a></h2>
            <p>For result analysis team is using the grafana tool for the CPU usage, load, average, memory and the telemetry data are analysed using the grafana dashboard</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon expansions"></div>
          <div className="timeline-content">
            <h2><a href="https://rdkstacktrace.stb.r53.xcal.tv/auth" target="_blank" rel="noopener noreferrer"><strong>Stack Trace</strong></a></h2>
            <p>Stack Trace tool is used to analyse the crash which occurred during the execution process, providing detailed information about the processed crash.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon test-at-scale"></div>
          <div className="timeline-content">
            <h2><a href="https://stbit01.ccp.xcal.tv/stbit/logs#iss=https://stbit01.ccp.xcal.tv/auth/realms/cats" target="_blank" rel="noopener noreferrer"><strong>STBIT</strong></a></h2>
            <p>STBIT tool is used for collecting the device logs, the tool will fetch the logs from the device instantly.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon going-global"></div>
          <div className="timeline-content">
            <h2><a href="https://rdkportal.ccp.xcal.tv/builds?image_name=XUSPTC11MWR_7.4p3s2_" target="_blank" rel="noopener noreferrer"><strong>RDK PORTAL</strong></a></h2>
            <p>RDK Portal in which the daily test build will be available from which testing team download and load the build to the device.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon get-smarter"></div>
          <div className="timeline-content">
            <h2><a href="https://ccp.sys.comcast.net/secure/Dashboard.jspa" target="_blank" rel="noopener noreferrer"><strong>JIRA</strong></a></h2>
            <p>Jira tool is used for creating the issue which observed during the testing process which helpful to track the defects in the release, sprint and</p>
          </div>
        </div>
      </div>

      {/* Duplicate Section at the bottom */}
      <div className="our-journey">
        {/* Same content as before */}
        <div className="streaming-section">
          
          <p>

          These are the primary testing mechanisms employed by our team, alongside the tools most frequently used during test executions. Each tool plays a crucial role in ensuring the quality and reliability of our testing processes. By leveraging these mechanisms and tools, we can efficiently manage and execute comprehensive test cases          </p>
          <div className="streaming-stats">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testsuites;
