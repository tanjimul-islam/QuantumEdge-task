import Image from "next/image";
import Link from "next/link";

const FooterLogo = () => {
  return (
    <Link href="/">
      <Image
        className="w-[227px]"
        src="/logo.png"
        width={1000}
        height={1000}
        alt="Logo"
      />
    </Link>
  );
};

export default FooterLogo;
