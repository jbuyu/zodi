import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, FormLabel, HStack, Input, Text, VStack } from "@chakra-ui/react";


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
    <VStack width={"40%"} >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <Input defaultValue="" {...register("firstName")} />
        {errors.firstName ? <Text color="red">This field is required</Text> : null}

        <FormLabel htmlFor="lastName">Last Name</FormLabel>
        <Input defaultValue="" {...register("lastName")} />
        {errors.lastName ? <Text color="red" >This field is required</Text> : null}

        <FormLabel htmlFor="password">Password</FormLabel>
        <Input {...register("password", { required: true })} />
        {errors.password ? <Text color="red">This field is required</Text> : null}


        <FormLabel htmlFor="email">Email</FormLabel>
        <Input {...register("email", { required: true })} />
        {errors.password ? <Text color="red" >{errors.email?.message}</Text> : null}

        <Input backgroundColor="black" color="white" marginTop={8} cursor="pointer" type="submit" />
      </form>
    </VStack>

  )
}
