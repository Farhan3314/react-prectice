import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/authSchema";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data) => {
        console.log("Login Data:", data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-2xl shadow-md w-80">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <input type="email" placeholder="Email" {...register("email")}
                    className="w-full p-2 border rounded mb-2" />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>

                <input type="password" placeholder="Password" {...register("password")}
                    className="w-full p-2 border rounded mt-3 mb-2" />
                <p className="text-red-500 text-sm">{errors.password?.message}</p>

                <button type="submit"
                    className="w-full bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;