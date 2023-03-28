import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, Input } from "@chakra-ui/react";


const validationSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "First name is required" }),
  password: z.string().min(1, { message: "Password  is required" }),
  email: z.string().min(1, { message: "email  is required" }).email({
    message: "Must be a valid email",
  }),
})


type Inputs = {
  firstName: string,
  lastName: string,
  password: string,
  email: string
};
type ValidationSchema = z.infer<typeof validationSchema>


export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ValidationSchema>({ resolver: zodResolver(validationSchema) });
  const onSubmit: SubmitHandler<ValidationSchema> = data => console.log(data);

  console.log(watch("firstName")) // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <Input defaultValue="" {...register("firstName")} />
      {errors.firstName && <span>This field is required</span>}

      <label htmlFor="lastName">Last Name</label>
      <Input defaultValue="" {...register("lastName")} />
      {errors.lastName && <span>This field is required</span>}

      <label htmlFor="password">Password</label>
      <Input {...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}


      <label htmlFor="email">Email</label>
      <Input {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email?.message}
      <Input type="submit" />
    </form>
  )
}
