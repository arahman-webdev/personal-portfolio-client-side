
import Link from "next/link";


const Button = () => {
    return (
          <Link
          href={'/'}
            target="_blank"
            rel="noopener noreferrer"
            className=" gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#8236fb] to-[#076ef4] text-white font-medium shadow-md hover:shadow-lg hover:opacity-90 transition"
          >
            
            <button>Get Started</button>
          </Link>
    );
};

export default Button;