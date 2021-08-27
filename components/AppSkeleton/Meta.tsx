import Head from "next/head";

type Props = {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
  };

const Meta = ({ title, keywords, description, image } : Props): JSX.Element => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image ? image : "/logo.png"} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Amirsina Shadkami - Frontend Developer",
  keywords: "development, programming, web, frontend, software, engineer,software engineer,Front-end developer",
  description: "Accomplished Front-end developer with extensive experience in (HTML5, CSS3, JavaScript Vanilla, Vuejs), modern web paradigms  (e.g., PWA, JAMstack) , widely used frameworks and some other various modern web technologies and tools."
};

export default Meta;
