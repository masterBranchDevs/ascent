"use client";

import React, { useState } from "react";
import styles from "./complaince.module.scss";
import {
  complaintsData,
  trendMonthlyData,
  trendYearlyData,
} from "../../constant/complaintsData";

const CompliancePage: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContent}>
        <h1 className={styles.heading} data-aos="fade-up">Complaint Redressal</h1>

        <div className={styles.dropdownWrapper}>
          <div
          data-aos="fade-up"
            className={styles.dropdownHeader}
            onClick={() => toggleDropdown(0)}
            data-open={openDropdown === 0}
          >
            Complaint Redressal Information
          </div>
          <div className={`${styles.dropdownContent} ${openDropdown === 0 ? styles.open : ''}`} >
            <p>
              Client's queries/complaints may arise due to lack of understanding
              or a deficiency of service experienced by clients. Deficiency of
              service may include lack of explanation, clarifications, or
              shortfalls in delivery standards, either due to inadequacy of
              services or due to the attitude of service staff etc.
            </p>
          </div>

          <div
            className={styles.dropdownHeader}
            onClick={() => toggleDropdown(1)}
            data-open={openDropdown === 1} 
            data-aos="fade-up"
          >
            Investor Charter in respect of Research Analyst (RA)
          </div>
          <div className={`${styles.dropdownContent} ${openDropdown === 1 ? styles.open : ''}`} >
            <p>
              This charter outlines the responsibilities and obligations of
              Research Analysts towards investors, ensuring transparency and
              timely disclosures.
            </p>
          </div>

          <div
            className={styles.dropdownHeader}
            onClick={() => toggleDropdown(2)}
            data-open={openDropdown === 2}
            data-aos="fade-up"
          >
            Grievances
          </div>
          <div className={`${styles.dropdownContent} ${openDropdown === 2 ? styles.open : ''}`}>
            <p>
              Investors can register grievances related to research reports or
              recommendations via SEBI's SCORES platform or through direct
              communication.
            </p>
          </div>
        </div>

        <div className={styles.tablesSection}>
          <h2 data-aos="fade-up"> Investors Complaints Data (May 2025)</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table} data-aos="fade-up">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Received From</th>
                  <th>Pending at end of last month</th>
                  <th>Received</th>
                  <th>Resolved</th>
                  <th>Total Pending</th>
                  <th>Pending &gt; 3 months</th>
                  <th>Avg Resolution Time (days)</th>
                </tr>
              </thead>
              <tbody>
                {complaintsData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.srNo}</td>
                    <td>{row.receivedFrom}</td>
                    <td>{row.pendingLastMonth}</td>
                    <td>{row.received}</td>
                    <td>{row.resolved}</td>
                    <td>{row.totalPending}</td>
                    <td>{row.pendingOver3Months}</td>
                    <td>{row.avgResolutionTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 data-aos="fade-up">Trend of Monthly Disposal of Complaints</h2>
          <div className={styles.tableWrapper} >
            <table className={styles.table} data-aos="fade-up">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Month</th>
                  <th>Carried Forward</th>
                  <th>Received</th>
                  <th>Resolved</th>
                  <th>Pending</th>
                </tr>
              </thead>
              <tbody>
                {trendMonthlyData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.srNo}</td>
                    <td>{row.month}</td>
                    <td>{row.carried}</td>
                    <td>{row.received}</td>
                    <td>{row.resolved}</td>
                    <td>{row.pending}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 data-aos="fade-up">Trend of Yearly Disposal of Complaints</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table} data-aos="fade-up">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Year</th>
                  <th>Carried Forward</th>
                  <th>Received</th>
                  <th>Resolved</th>
                  <th>Pending</th>
                </tr>
              </thead>
              <tbody>
                {trendYearlyData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.srNo}</td>
                    <td>{row.year}</td>
                    <td>{row.carried}</td>
                    <td>{row.received}</td>
                    <td>{row.resolved}</td>
                    <td>{row.pending}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.note} data-aos="fade-up">
            <p>*Inclusive of complaints of previous years resolved in the current year.</p>
            <p>#Inclusive of complaints pending as on the last day of the year.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;