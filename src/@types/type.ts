import { LoginSchema } from "@/schema/schema";
import { FieldPath, type FieldValues } from "react-hook-form";
import z from "zod";

export type LoginFormProps = z.infer<typeof LoginSchema>

export type FormFieldContextValue<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<FieldValues> = FieldPath<TFieldValues> > = {
    name: TName
}