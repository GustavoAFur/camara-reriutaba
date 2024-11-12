"use client";
import { Footer } from "../_components/Footer";
import { GridContent } from "../_components/GridContent";
import { Header } from "../_components/Header";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Divider } from "@nextui-org/divider";

export default function Esic() {
  const schema = Yup.object().shape({
    //dados pessoais
    nome: Yup.string().required("Nome obrigatório"),
    email: Yup.string().email().required(),
    cpf: Yup.string().required(),
    telefone: Yup.string().required(),
    escolaridade: Yup.string().required(),
    idade: Yup.number().required(),
    //dados do endereço
    cep: Yup.string().required(),
    bairro: Yup.string().required(),
    municipio: Yup.string().required(),
    estado: Yup.string().required(),
    logradouro: Yup.string().required(),
    numero: Yup.string().required(),
    complemento: Yup.string().required(),
    //dados da informação
    orgao: Yup.string().required(),
    tipo: Yup.string().required(),
    descricao: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      //dados pessoais
      nome: "",
      email: "",
      cpf: "",
      telefone: "",
      escolaridade: "",
      idade: "",
      //dados do endereço
      cep: "",
      bairro: "",
      municipio: "",
      estado: "",
      logradouro: "",
      numero: "",
      complemento: "",
      //dados da informação
      orgao: "",
      tipo: "",
      descricao: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async (...args) => {
      // Make a request to your backend to store the data
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full h-auto">
      <Header />
      <GridContent>
        <h1 className="text-3xl text-[#024c3d] font-semibold">
          E-sic - Sistema de informação ao cidadão
        </h1>
        <p className="text-wrap text-base text-gray-400">
          Usuário dos serviços públicos municipais você pode entrar em contato
          com a Ouvidoria, para apresentar sua manifestação, como
          sugestão/crítica, reclamações/denuncias, solicitações, informação e
          outros.
        </p>
        <Divider />
      </GridContent>
      <Footer />
    </div>
  );
}
