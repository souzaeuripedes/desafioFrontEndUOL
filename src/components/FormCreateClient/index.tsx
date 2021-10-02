import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignupSchema: any = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    id: yup.number(),
    phone: yup.number(),
    status: yup.string()
});

// type FormData = {
//     firstName: string;
//     age: number;
//     website: string;
// };

export interface Customer {
    name: string;
    email: string;
    id: string;
    phone: string;
    status: string;
}

export default function FormCreateClient() {
    //const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        localStorage.setItem("customers",JSON.stringify(data));
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nome</label>
                <input {...register("name")} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
                <label>E-mail</label>
                <input {...register("lastName")} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>CPF</label>
                <input type="number" {...register("id", { valueAsNumber: true })} />
                {errors.id && <p>{errors.id.message}</p>}
            </div>
            <div>
                <label>Telefone</label>
                <input {...register("phone")} />
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <div>
                <label>Status</label>
                <input {...register("status")} />
                {errors.status && <p>{errors.status.message}</p>}
            </div>
            <input type="submit" />
        </form>
    );
}
