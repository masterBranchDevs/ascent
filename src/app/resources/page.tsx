"use client";

import styles from "./resources.module.scss";
import { resourceInfo } from "@/constant/resourcesData";
import { FaDownload } from "react-icons/fa";

const ResourcesPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className="nav-top-fix"></div>
      <div className={styles.header}>
        <h1 className={styles.title} data-aos="fade-up">Company resource</h1>
        <p className={styles.description} data-aos="fade-up">Download our official resources, including policy documents and charters. For more files, access the Drive link below.</p>
      </div>
      {resourceInfo.map((resource) => (
        <div className={styles.card} data-aos="fade-up">
          <h2 className={styles.cardTitle}>{resource.name}</h2>
          <p className={styles.description}>{resource.description}</p>
          <div className={styles.actions}>
            <a
              href={resource.url}
              target="_blank"
              className={styles.downloadBtn}
            >
              <FaDownload style={{ marginRight: "8px" }} />
              Download 
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ResourcesPage;
