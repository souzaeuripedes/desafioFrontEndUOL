import React from "react";
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

export interface Customer {
    name: string;
    email: string;
    id: string;
    phone: string;
    status: string;
}

export default function FormCreateClient() {  
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });

    let customers = localStorage.getItem("customers")
    const onSubmit = (data) => {
     
        //localStorage.setItem("customers",JSON.stringify(data + customers));
        localStorage.setItem("customers",JSON.stringify("customers").concat(JSON.stringify(data)) )
        console.log(localStorage.getItem("customers"));
        console.log("customers");
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nome</label>
                <input {...register("name")}  placeholder="Nome"/>
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div style={{ marginBottom: 10 }}>
                <label>E-mail</label>
                <input {...register("email")} placeholder="E-mail" />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>CPF</label>
                <input type="number" {...register("id", { valueAsNumber: true }) } placeholder="CPF" />
                {errors.id && <p>{errors.id.message}</p>}
            </div>
            <div>
                <label>Telefone</label>
                <input {...register("phone")}  placeholder="Telefone"/>
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <div>
                <label>Status</label>
                <select id="status" {...register("status")}  name="status">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="waiting">Waiting</option>
                    <option value="disabled">Disabled</option>
                </select>
                {errors.status && <p>{errors.status.message}</p>}
            </div>
            <input type="submit" />
        </form>
    );
}
