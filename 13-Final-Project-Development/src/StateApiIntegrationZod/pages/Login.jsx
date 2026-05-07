import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/authSchema";
import { loginUser } from "../api/authApi";
import { useState } from "react";

const Login = () => {
    const [message, setMessage] = useState("");

    const {
        register, handleSubmit, formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        try {
            const res = await loginUser(data);
            setMessage("Login successful!");
            console.log(res.data);
        } catch (error) {
            setMessage("Login failed!");
        }
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-2xl font-bold">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-80 mt-5">
                <input {...register("email")} placeholder="Email" className="border p-2" />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                <input type="password" {...register("password")} placeholder="Password" className="border p-2" />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                <button className="bg-green-500 text-white p-2">Login</button>
            </form>

            {message && <p className="mt-3">{message}</p>}
        </div>
    );
};

export default Login;