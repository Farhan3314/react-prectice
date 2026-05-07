import { useState } from 'react';
import { useForm } from "react-hook-form";
const FormValidation = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [formData, setFormData] = useState(null);

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setFormData(data);
        console.log(data);
    };

    return (
        <div className='flex flex-col gap-7 items-center justify-center min-h-screen bg-gray-300 text-white'>
            <form
                className='flex flex-col gap-3 px-6 py-6 bg-gray-700 rounded-lg shadow-lg w-80'
                onSubmit={handleSubmit(onSubmit)}>

                <div className='flex flex-col gap-2'>
                    <input placeholder='Enter your first name...'
                        className='border border-gray-400 outline-none rounded-md p-2 text-white placeholder-gray-400'
                        {...register("FirstName", {
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: "Only letters are allowed"
                            },
                            required: "First name is required",
                            minLength: {
                                value: 5,
                                message: "Minimum 5 characters required"
                            },
                            maxLength: {
                                value: 20,
                                message: "Maximum 20 characters allowed"
                            }
                        })}
                    />
                    {errors.FirstName && (
                        <p className='text-red-500 text-sm'>
                            {errors.FirstName.message}
                        </p>
                    )}
                </div>

                <div className='flex flex-col gap-2'>
                    <input placeholder='Enter your last name...'
                        className='border border-gray-400 outline-none rounded-md p-2 text-white placeholder-gray-400'
                        {...register("LastName", {
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: "Only letters are allowed"
                            },
                            required: "Last name is required",
                            minLength: {
                                value: 5,
                                message: "Minimum 5 characters required"
                            },
                            maxLength: {
                                value: 20,
                                message: "Maximum 20 characters allowed"
                            }
                        })}
                    />
                    {errors.LastName && (
                        <p className='text-red-500 text-sm'>
                            {errors.LastName.message}
                        </p>
                    )}
                </div>

                <input
                    type="submit" disabled={isSubmitting}
                    value={isSubmitting ? 'Submitting...' : 'Submit'}
                    className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer'
                />
            </form>

            {formData && (
                <div className='bg-gray-700 p-5 rounded-lg shadow-lg w-80'>
                    <h2 className='text-lg font-bold mb-3'>Submitted Data</h2>
                    <p><strong>First Name:</strong> {formData.FirstName}</p>
                    <p><strong>Last Name:</strong> {formData.LastName}</p>
                </div>
            )}

        </div>
    );
};

export default FormValidation;