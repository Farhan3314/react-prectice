import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../schemas/authSchema";

const Signup = ({ onSignupSuccess }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = (data) => {
        console.log("Signup Data:", data);
        if (onSignupSuccess) {
            onSignupSuccess();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-2xl shadow-md w-80" F>
                <h2 className="text-2xl font-bold mb-6 text-center">Signup </h2>

                <input type="text" placeholder="Name" {...register("name")}
                    className="w-full p-2 border rounded mb-2" />
                <p className="text-red-500 text-sm">{errors.name?.message}</p>

                <input type="email" placeholder="Email" {...register("email")}
                    className="w-full p-2 border rounded mt-3 mb-2" />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>

                <input type="password" placeholder="Password" {...register("password")}
                    className="w-full p-2 border rounded mt-3 mb-2" />
                <p className="text-red-500 text-sm">{errors.password?.message}</p>

                <button type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;