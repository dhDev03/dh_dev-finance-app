import { useForm } from "react-hook-form";
import { Form, FormField } from "../form/form";
import { LoginFormProps } from "@/@types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schema/schema";

export function LoginForm() {
    const form = useForm<LoginFormProps>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })


    return(
        <Form {...form} >
            <FormField
                name="email"
                control={form.control}
                render={({field}) => (
                    
                )}
            />
        </Form>
    )
}