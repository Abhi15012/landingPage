'use client'
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, Controller } from "react-hook-form";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export function CardWithForm() {

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit =  (data) => {
  console.log(data)
  alert("submitted")
  reset()
  };

  return (
    <Card className="md:w-[600px] w-full bg-slate-500 md:block  md:bg-white">
      <CardHeader>
        <CardTitle>Leave your contacts and we will call you back within 30 minutes</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-full items-start md:flex-row flex-col gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">My Name</Label>
              <Input {...register("name",{required:{value:true,message:'This field is required'}, minLength:{value:2,message:'incorrect Name'}, maxLength:40 })} id="name" placeholder="Your Name" />
              {errors?.name && <i className="text-red-600 text-sm">{errors.name.message}</i>}
            </div>
            <div className="flex gap-2 flex-col">
              <Label htmlFor="phoneNumber">Phone number</Label>
              <Controller
                name="num"
                control={control}
                rules={{ required: "Please enter a valid phone number" }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    className="flex h-10 md:w-fit w-52 rounded-md border-slate-200 border-b-2 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300
                    md:-ml-0 -ml-5 "
                    placeholder="Enter phone number"
                    defaultCountry="IN"
                  />
                )}
              />
              {errors?.num && <i className="text-red-600 text-sm">{errors.num.message}</i>}
            </div>
          </div>
          <div className="flex w-full mt-4 items-start md:flex-row flex-col gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="businessName">Business name</Label>
              <Input {...register("businessName",{required:{value:true, message:"This field is required"}, minLength:1})} id="businessName" placeholder="" />
              {errors?.businessName && <i className="text-red-600 text-sm">{errors.businessName.message}</i>}
            </div>
            <div className="flex flex-col -ml-1 space-y-1.5">
              <Label htmlFor="businessEmail">Business email</Label>
              <Input 
                {...register("businessEmail", { required: "This field is required", pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "Invalid email address" } })} 
                id="businessEmail" 
                placeholder="Your Business Email" 
              />
              {errors?.businessEmail && <span className="text-red-600 text-sm">{errors.businessEmail.message}</span>}
            </div>
          </div>
          <CardFooter className="md:float-right md:-mt-10 mt-6  md:-mr-3">
            <Button type="submit" className="flex flex-col md:w-24 w-screen text-center justify-center">
              <p className="text-center">Get</p> Consultation
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
