
import LoginForm from "@/components/ui/loginForm";
import { Suspense } from "react";




const LoginPage = () => {

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center  bg-cover bg-no-repeat bg-center px-6 bg-[url('https://i.ibb.co.com/S7WL7zR9/Loginbg.png')] bg-cover bg-center bg-no-repeat" >

            <div className="bg-[#28216e]/35 absolute top-0 inset-0"></div>

            {/* Login box */}
            <div className="relative z-10 flex w-full max-w-lg flex-col gap-6 p-6 bg-white/30 rounded-2xl shadow-lg backdrop-blur-sm">

                <Suspense fallback={<div>Loading...</div>}>
                    <LoginForm />
                </Suspense>
            </div>
        </div>
    );
};

export default LoginPage;