import { usePrismicDocumentByUID } from "@prismicio/react";
import { AboutStyles } from "./styles";

export const AboutPage = () => {
  const [document] = usePrismicDocumentByUID("about_page", "about_page");
  const styles = AboutStyles();
  if (document) {
    console.log(document.data.we.url.split("?")[0]);
    return (
      <>
        <h1>{document.data.about_us[0].text}</h1>
        <div className={styles.about}>
          <img
            src={document.data.we.url.split("?")[0]}
            alt=""
            width={700}
            height={400}
          />
          <p>{document.data.information[0].text}</p>
        </div>
      </>
    );
  }
  return <h2>Loading...</h2>;
};
