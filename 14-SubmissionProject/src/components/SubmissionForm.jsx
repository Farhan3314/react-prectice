import { useState } from "react";
import { formFields, initialForm } from "../data/formFields";

const SubmissionForm = ({ onSubmit }) => {
    const [form, setForm] = useState(initialForm);
    const [submitted, setSubmitted] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(form);
        setForm(initialForm);

        if (typeof onSubmit === "function") {
            onSubmit(form);
        }
    };

    return (
        <div className="rounded-4xl bg-gray-200 p-8 shadow-xl ring-1 ring-slate-200">
            <div className="mb-8 text-center">
                <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                    Submission Form
                </span>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950">
                    Send us a message
                </h1>
                <p className="mt-3 text-slate-600 max-w-2xl leading-7">
                    This form is built for Submission: simple structure and data logic.
                </p>
            </div>

            <form className="grid gap-5" onSubmit={handleSubmit}>
                {formFields.map((field) => (
                    <label key={field.name} className="block text-sm font-medium text-slate-900">
                        {field.label}
                        {field.type === "textarea" ? (
                            <textarea
                                name={field.name}
                                value={form[field.name]}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                rows={field.rows}
                                required={field.required}
                                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 shadow-sm transition focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100"
                            />
                        ) : (
                            <input
                                name={field.name}
                                type={field.type}
                                value={form[field.name]}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                required={field.required}
                                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 shadow-sm transition focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100"
                            />
                        )}
                    </label>
                ))}

                <button type="submit"
                    className="inline-flex justify-center rounded-3xl bg-sky-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/10 transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 cursor-pointer">
                    Submit
                </button>
            </form>

            {submitted && (
                <section className="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
                    <h2 className="text-2xl font-semibold text-slate-950">Submission received</h2>
                    <p className="mt-2 text-slate-600">Your message has been saved below.</p>

                    <div className="mt-5 grid gap-4 text-slate-700">
                        <div className="rounded-3xl bg-white p-4 shadow-sm">
                            <p className="text-sm text-slate-500">Name</p>
                            <p className="mt-1 text-base font-medium">{submitted.name}</p>
                        </div>
                        <div className="rounded-3xl bg-white p-4 shadow-sm">
                            <p className="text-sm text-slate-500">Email</p>
                            <p className="mt-1 text-base font-medium">{submitted.email}</p>
                        </div>
                        <div className="rounded-3xl bg-white p-4 shadow-sm">
                            <p className="text-sm text-slate-500">Message</p>
                            <p className="mt-1 text-base font-medium whitespace-pre-wrap">{submitted.message}</p>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default SubmissionForm;
