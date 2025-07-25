"use client";

import styles from "./resources.module.scss";
import { resourceInfo } from "@/constant/reports";
import { FaDownload } from "react-icons/fa";

const ResourcesPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className="nav-top-fix"></div>
      <div className={styles.header}>
        <h1 className={styles.title} data-aos="fade-up">Company resource</h1>
        <p className={styles.description} data-aos="fade-up">
          Download our official resources, including policy documents and charters. 
          For more files, access the Drive link below.
        </p>
      </div>

      {Object.entries(resourceInfo).map(([sectionTitle, resources]) => (
        <div key={sectionTitle} className={styles.section}>
          <h2 className={styles.sectionTitle} data-aos="fade-up">{sectionTitle}</h2>
          
          {resources.map((resource, index) => (
            <div key={index} className={styles.card} data-aos="fade-up">
              <h3 className={styles.cardTitle}>{resource.name}</h3>
              <div className={styles.actions}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadBtn}
                >
                  <FaDownload style={{ marginRight: "8px" }} />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ResourcesPage;
