"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;
const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here, you can add your logic to send the form data to your backend or an email service
  };
  return (
    <div className="max-w-md mx-auto my-20">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className={`w-full border bg-gray-100 ${
              errors.name ? "border-red-500" : "border-pink-300"
            } rounded-md py-2 px-3`}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`w-full border ${
              errors.email
                ? "border-red-500 bg-gray-100"
                : "border-pink-300 bg-gray-100"
            } rounded-md py-2 px-3`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 mt-1 ">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block font-bold">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className={`w-full border bg-gray-100 ${
              errors.message ? "border-red-500" : "border-pink-300"
            } rounded-md py-2 px-3`}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500 mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
