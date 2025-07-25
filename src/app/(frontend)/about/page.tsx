import styles from './about.module.scss'
import { WHAT_SETS_US_APART } from '@/constant/about'

const About = () => {
  return (
    <main>
      {/* Page Header */}
      <section className={styles.pageHeader} data-aos="fade-up">
        <div className="container">
          <h1>About Us</h1>
          <p>
            Learn more about Scoop Investment and our mission to help clients achieve financial
            success
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={`section ${styles.ourStory}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent} data-aos="fade-up">
              <h2>Our Story</h2>
              <p>
                Founded in 2021, Scoop Investment was established with a clear vision: to provide
                transparent, accessible, and personalized financial services to individuals and
                businesses alike.
              </p>
              <p>
                What began as a family office has plans to grow into a trusted financial partner for
                clients across the nation. Despite our growth, we strive to maintain our commitment
                to building lasting relationships with our clients.
              </p>
              <p>
                Our team of research advisors brings together a decades of combined experience to
                help you navigate the complexities of financial planning and investment management.
              </p>
            </div>
            <div className={styles.storyImage} data-aos="fade-up">
              <div className={styles.imageWrapper}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className={`section ${styles.ourMission}`}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            What Sets Us Apart
          </h2>
          <div className={styles.missionContent} data-aos="fade-up">
            <p>
              At Scoop Investment, our mission is to empower our clients to achieve financial
              independence through expert guidance, innovative solutions, and unwavering integrity.
            </p>
            <p>
              We believe that financial success is not just about growing wealth, but about creating
              security, pursuing dreams, and leaving a lasting legacy. Our holistic approach
              considers all aspects of your financial life to create a comprehensive strategy
              tailored to your unique goals and circumstances.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {WHAT_SETS_US_APART.map((item, index) => (
              <div className={styles.valueCard} key={item.title + index} data-aos="fade-up">
                <div className={styles.valueIcon} data-aos="zoom-in">
                  <item.icon />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
