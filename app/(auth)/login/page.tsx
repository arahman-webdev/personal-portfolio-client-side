
import LoginForm from "@/app/components/ui/loginForm";


export const metadata = {
  title: "Login | Abdur Rahman Portfolio",
  description: "Login to access your dashboard and manage your portfolio.",
  keywords: ["login", "portfolio", "dashboard", "user access"],
  robots: "index, follow",
};


const LoginPage = () => {

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center  bg-cover bg-no-repeat bg-center px-6 bg-[url('https://i.ibb.co.com/S7WL7zR9/Loginbg.png')] bg-cover bg-center bg-no-repeat" >

            <div className="absolute inset-0 bg-white/30 backdrop-blur-md z-0"></div>

            {/* Login box */}
            <div className="relative z-10 flex w-full max-w-lg flex-col gap-6 p-6 rounded-2xl  backdrop-blur-sm">
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;