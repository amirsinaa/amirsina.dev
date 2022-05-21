import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter,
  FaMedium
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const SiteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Amirsina Shadkami. All Rights Reserved.`,
  author: {
    name: "Amirsina Shadkami",
    accounts: [
      {
        url: "https://github.com/amirsinaa",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/amirsiinaa",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/amirsina/",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://www.linkedin.com/in/amirsina-shadkami/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "https://medium.com/@amirsinaa",
        label: "Medium Account",
        type: "gray",
        icon: <FaMedium />
      }
    ]
  }
};

export default SiteConfig;
