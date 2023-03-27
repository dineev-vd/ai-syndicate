import { useEffect, useRef, useState } from "react";
import Filler from "../../components/FillerSignup/FillerSignup";
import {
  Allocation,
  Referral,
  Rules,
  Staking,
  Tokenomics,
} from "./AboutContent";
import "./AboutPage.scss";

interface AboutSection {
  name: string;
  content: JSX.Element;
  id: string;
}

const AboutArray: AboutSection[] = [
  { name: "Токеномика", content: Tokenomics, id: "tokenomics" },
  { name: "Стейкинг", content: Staking, id: "staking" },
  { name: "Аллокация", content: Allocation, id: "allocation" },
  { name: "Рефералка", content: Referral, id: "referral" },
  { name: "Правила", content: Rules, id: "rules" },
];

const AboutPage: React.FC = () => {
  // const activeCheck = (props: { isActive: boolean }) =>
  //   `about-link ${props.isActive ? "about-link-active" : ""}`;
  const refs = useRef<(HTMLElement | null)[]>(AboutArray.map((_) => null));
  const [activeId, setActiveId] = useState<number>(AboutArray.length);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = +entry.target.id;
        if (entry.intersectionRatio > 0) {
          setActiveId((prev) => (id < prev ? id : prev));
        } else {
          setActiveId((prev) => (id === prev ? id + 1 : prev));
        }
      });
    });

    refs.current.forEach((element) => {
      if (!element) return;

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Filler
        title="About"
        description="We're building a more open and inclusive financial system."
      />
      <div className="about-wrapper">
        <div className="about">
          <div className="about__links">
            {AboutArray.map((section, index) => (
              <a
                className={activeId === index ? "about-link-active" : ""}
                href={`#${section.id}`}
              >
                {section.name}
              </a>
            ))}
          </div>
          <div className="about__content">
            {AboutArray.map((section, index) => (
              <section id={`${index}`} ref={(r) => (refs.current[index] = r)}>
                <h2 id={section.id}>{section.name}</h2>
                {section.content}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
