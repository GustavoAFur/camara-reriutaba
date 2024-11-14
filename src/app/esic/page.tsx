"use client";
import { Footer } from "../_components/Footer";
import { GridContent } from "../_components/GridContent";
import { Header } from "../_components/Header";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Divider } from "@nextui-org/divider";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/checkbox";
import Link from "next/link";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

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

    aceitoTermos: Yup.boolean().required(),
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

      aceitoTermos: false,
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async (values) => {
      // Make a request to your backend to store the data
    },
  });

  const { errors, touched, values, handleChange, handleSubmit, setFieldValue } =
    formik;

  return (
    <GridContent>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>E-sic</BreadcrumbItem>
      </Breadcrumbs>
      <div className="w-full h-full flex">
        <div className="w-[49%] flex flex-col gap-4">
          <h1 className="text-3xl text-[#024c3d] font-semibold">
            E-sic - Sistema de informação ao cidadão
          </h1>
          <p className="text-wrap text-base text-gray-400">
            Usuário dos serviços públicos municipais, você pode entrar em
            contato com a Ouvidoria, para apresentar sua manifestação, como
            sugestão/crítica, reclamações/denuncias, solicitações, informação e
            outros.
          </p>
        </div>
        <div className="w-[49%] flex items-center justify-center">
          <form onSubmit={handleSubmit} method="POST">
            <div className="w-[500px] h-auto flex flex-col gap-5">
              <label className="text-base text-[#024c3d] font-semibold">
                Dados pessoais
              </label>
              <div className="w-full flex flex-col gap-3">
                <Input
                  name="nome"
                  type="text"
                  placeholder="Nome completo"
                  value={values.nome}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                <div className="w-full flex gap-3">
                  <Input
                    name="cpf"
                    type="text"
                    placeholder="CPF"
                    value={values.cpf}
                    onChange={handleChange}
                  />
                  <Input
                    name="telefone"
                    type="text"
                    placeholder="Telefone"
                    value={values.telefone}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full flex gap-3">
                  <Input
                    name="escolaridade"
                    type="text"
                    placeholder="Escolaridade"
                    value={values.escolaridade}
                    onChange={handleChange}
                  />
                  <Input
                    name="idade"
                    type="text"
                    placeholder="Idade"
                    value={values.idade}
                    onChange={handleChange}
                  />
                </div>
                <label className="text-base text-[#024c3d] font-semibold">
                  Dados do endereço
                </label>
                <div className="w-full flex flex-col gap-3">
                  <Input
                    name="cep"
                    type="text"
                    placeholder="CEP"
                    value={values.cep}
                    onChange={handleChange}
                  />
                  <Input
                    name="bairro"
                    type="text"
                    placeholder="Bairro"
                    value={values.bairro}
                    onChange={handleChange}
                  />
                  <div className="w-full flex gap-3">
                    <Input
                      name="municipio"
                      type="text"
                      placeholder="Municipio"
                      value={values.municipio}
                      onChange={handleChange}
                    />
                    <Input
                      name="estado"
                      type="text"
                      placeholder="Estado"
                      value={values.estado}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <label className="text-base text-[#024c3d] font-semibold">
                  Dados da informação
                </label>
                <div className="w-full flex flex-col gap-3">
                  <Input
                    name="orgao"
                    type="text"
                    placeholder="Orgão"
                    value={values.orgao}
                    onChange={handleChange}
                  />
                  <Input
                    name="tipo"
                    type="text"
                    placeholder="Tipo"
                    value={values.tipo}
                    onChange={handleChange}
                  />
                  <Textarea
                    name="descricao"
                    type="text"
                    placeholder="Descrição"
                    value={values.descricao}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Checkbox
                isSelected={values.aceitoTermos}
                color="success"
                className="text-xs font-light"
                onChange={(e) =>
                  setFieldValue("aceitoTermos", e.target.checked)
                }
              >
                Declaro que as informações acima são verdadeiras e estou ciente
                de estar sujeito às penas da legislação pertinente caso tenha
                afirmado falsamente os dados preenchidos.
              </Checkbox>
              <Button
                type="submit"
                className="w-full h-12 bg-[#024c3d] text-white"
              >
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </GridContent>
  );
}
