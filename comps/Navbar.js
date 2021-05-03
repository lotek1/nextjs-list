import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/loteklogo.png"
          alt="logo lotekone"
          width={80}
          height={80}
        />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Hobbies</a>
      </Link>
    </nav>
  );
};
