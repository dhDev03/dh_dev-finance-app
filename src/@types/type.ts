import { LoginSchema } from "@/schema/schema";
import z from "zod";

export type LoginFormProps = z.infer<typeof LoginSchema>