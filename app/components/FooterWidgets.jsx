import FooterAbout from "./footerWidgets/FooterAbout";
import FooterLogo from "./footerWidgets/FooterLogo";

const FooterWidgets = () => {
  return (
    <div className="bg-dark px-6 md:px-16 lg:px-24 xl:px-32 grid grid-cols-1 md:grid-cols-4 py-10 ">
      <FooterLogo />
      <FooterAbout />
      <FooterAbout />
      <FooterAbout />
    </div>
  );
};

export default FooterWidgets;
