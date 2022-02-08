import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../../components/about/AboutPage"),
  {
    ssr: false,
  }
);

const AboutPage = () => <DynamicComponentWithNoSSR />;

export default AboutPage;
