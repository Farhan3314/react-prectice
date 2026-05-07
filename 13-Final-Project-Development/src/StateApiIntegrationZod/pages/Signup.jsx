import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signupSchema } from "../schemas/authSchema"
import { signupUser } from "../api/authApi"
import { useState } from "react"

const Signup = () => {
    const [message, setMessage] = useState("");
    const {
        register, handleSubmit, formState: { errors },
    } = useForm({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await signupUser(data);
            setMessage("Signup successful! User ID!");
            console.log(response.data);
        } catch (error) {
            setMessage("Signup failed!");
        }
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-2xl font-bold">Signup</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-80 mt-5">
                <input {...register("name")} placeholder="Name" className="border p-2" />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                <input {...register("email")} placeholder="Email" className="border p-2" />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                <input type="password" {...register("password")} placeholder="Password" className="border p-2" />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" className="border p-2" />
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Signup</button>
            </form>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
};

export default Signup;