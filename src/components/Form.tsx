import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, FormLabel, HStack, Input, Text, VStack } from "@chakra-ui/react";


const validationSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }).max(3),
  lastName: z.string().min(1, { message: "Last name is required" }),
  password: z.string().min(1, { message: "Password  is required" })
    .refine((value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      .test(value), 'Name should contain at least 8 characppacters'),
  email: z.string().min(1, { message: "email  is required" }).email({
    message: "Must be a valid email",
  }),
  confirmPassword: z
    .string()
    .min(1, { message: "Confirm Password is required" }),
})
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  })


// type Inputs = {
//   firstName: string,
//   lastName: string,
//   password: string,
//   email: string
// };
type InferedValidationSchema = z.infer<typeof validationSchema>


export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } =
    useForm<InferedValidationSchema>({ resolver: zodResolver(validationSchema) });
  const onSubmit: SubmitHandler<InferedValidationSchema> = data => console.log(data);

  console.log('errors', errors)

  return (
    <VStack width={"40%"} >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <Input defaultValue="" {...register("firstName")} />
        {errors.firstName ? <Text color="red">{errors.firstName.message}</Text> : null}

        <FormLabel htmlFor="lastName">Last Name</FormLabel>
        <Input defaultValue="" {...register("lastName")} />
        {errors.lastName ? <Text color="red" >{errors.lastName.message}</Text> : null}

        <FormLabel htmlFor="password">Password</FormLabel>
        <Input {...register("password", { required: true })} />
        {errors.password ? <Text color="red">{errors.password.message}</Text> : null}

        <FormLabel htmlFor="password">Confirm Password</FormLabel>
        <Input {...register("confirmPassword", { required: true })} />
        {errors.confirmPassword ? <Text color="red">{errors.confirmPassword.message}</Text> : null}


        <FormLabel htmlFor="email">Email</FormLabel>
        <Input {...register("email", { required: true })} />
        {errors.email ? <Text color="red" >{errors.email?.message}</Text> : null}

        <Input backgroundColor="black" color="white" marginTop={8} cursor="pointer" type="submit" />
      </form>
    </VStack>

  )
}
