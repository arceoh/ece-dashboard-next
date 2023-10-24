import Image from "next/image";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-base-300 py-4">
      <Container>
        <Image
          src="/images/ece_logo.svg"
          width={150}
          height={150}
          alt="Early Childhood Education"
        />
      </Container>
    </div>
  );
};

export default Footer;
