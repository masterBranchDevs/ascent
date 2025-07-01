import React, { JSX } from 'react';

import styles from './investorCharter.module.scss'; 

import { INVESTOR_CHARTER_DATA } from '@/constant/investorCharter';
import { RenderTextWithLinks } from '@/utils/components';

interface ContentBlock {
  type: 'paragraph' | 'list' | 'heading' | 'address';
  text?: string;
  items?: string[];
  level?: number;
}

interface Section {
  id: string;
  title: string;
  content: ContentBlock[];
}

interface InvestorCharterData {
  title: string;
  sections: Section[];
}

const InvestorCharterPage: React.FC = () => {
  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index} className={styles.paragraph}>
            {RenderTextWithLinks(block.text || '', styles.link)}
          </p>
        );
      
      case "list":
        if (!block.items) return null;
        
        const isNumbered = block.items.some(item => 
          /^[ivx]+\.\s|^[0-9]+\.\s|^\([0-9]+\)|^\([ivx]+\)/.test(item.trim())
        );
        
        const ListTag = isNumbered ? 'ol' : 'ul';
        const listClassName = isNumbered ? styles.numberedList : styles.list;
        
        return (
          <ListTag key={index} className={listClassName}>
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {RenderTextWithLinks(item, styles.link)}
              </li>
            ))}
          </ListTag>
        );
      
      case "heading":
        if (!block.text || !block.level) return null;
        
        const HeadingTag = `h${Math.min(Math.max(block.level, 1), 6)}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag key={index} className={styles.subHeading}>
            {RenderTextWithLinks(block.text, styles.link)}
          </HeadingTag>
        );
      
      case "address":
        if (!block.items) return null;
        
        return (
          <address key={index} className={styles.address}>
            {block.items.map((line, lineIndex) => (
              <p key={lineIndex}>
                {RenderTextWithLinks(line, styles.link)}
              </p>
            ))}
          </address>
        );
      
      default:
        return null;
    }
  };

  if (!INVESTOR_CHARTER_DATA || !INVESTOR_CHARTER_DATA.sections) {
    return (
      <div className={styles.charterPage}>
        <div className={styles.container}>
          <p>Investor Charter data is not available.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.gradientContainer}>
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.charterPage}>
        <div className={styles.spacer}></div>
        
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.header}>
              <h1 className={styles.mainTitle}>
                {INVESTOR_CHARTER_DATA.title || 'Investor Charter'}
              </h1>
              <div className={styles.introText}>
                <p>
                  Comprehensive guidelines and principles governing our investment 
                  approach and commitment to stakeholder transparency.
                </p>
              </div>
            </div>

            <div className={styles.contentSections}>
              {INVESTOR_CHARTER_DATA.sections.map((section, sectionIndex) => (
                <section 
                  key={section.id} 
                  className={styles.policySection}
                  aria-labelledby={`section-${section.id}`}
                >
                  <h2 
                    id={`section-${section.id}`}
                    className={styles.sectionTitle}
                  >
                    {`${section.id}. ${section.title}`}
                  </h2>
                  
                  <div className={styles.sectionContent}>
                    {section.content?.map((block, index) => 
                      renderContentBlock(
                        {
                          ...block,
                          type: block.type as 'paragraph' | 'list' | 'heading' | 'address'
                        },
                        index
                      )
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorCharterPage;