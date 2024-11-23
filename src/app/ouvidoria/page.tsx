"use client";
import React from "react";

import { Footer } from "../_components/Footer";
import { GridContent } from "../_components/GridContent";
import { Header } from "../_components/Header";
import ErrorMessage from "../_components/ErrorMessage";

import { useFormik } from "formik";
import * as Yup from "yup";

import { NumberFormatBase, PatternFormat } from "react-number-format";

import { Input } from "@nextui-org/input";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { Textarea } from "@nextui-org/input";
import { assuntos } from "../_data/assuntos";
import { Button } from "@nextui-org/react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
export default function Ouvidoria() {
  const schema = Yup.object().shape({
    assunto: Yup.string().required(),
    descricao: Yup.string().required(),
    nome: Yup.string().required("Nome obrigatório"),
    email: Yup.string().email().required(),
  });

  const formik = useFormik({
    initialValues: {
      assunto: "",
      descricao: "",
      nome: "",
      email: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async (values) => {
      // Make a request to your backend to store the data
      console.log("Submit");
      console.log(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit, setFieldValue } =
    formik;

  return (
    <GridContent>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Ouvidoria</BreadcrumbItem>
      </Breadcrumbs>
      <div className="w-full h-full flex">
        <div className="w-[49%] flex flex-col gap-4">
          <h1 className="text-3xl text-[#024c3d] font-semibold">Ouvidoria</h1>
          <p className="text-wrap text-base text-gray-400">
            Usuário dos serviços públicos municipais você pode entrar em contato
            com a Ouvidoria, para apresentar sua manifestação, como
            sugestão/crítica, reclamações/denuncias, solicitações, informação e
            outros.
          </p>
        </div>

        <div className="w-[49%] flex items-center justify-center">
          <form onSubmit={handleSubmit} method="POST">
            <h1 className="text-base text-[#024c3d] font-semibold mb-4">
              Manifestação
            </h1>
            <div className="w-[500px] h-auto flex flex-col gap-5">
              <Input
                aria-label="Seu nome"
                isRequired
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={values.nome}
                onChange={handleChange}
                id="nome"
              />
              {errors.nome && touched.nome && (
                <ErrorMessage>{errors.nome}</ErrorMessage>
              )}
              <Input
                aria-label="E-mail"
                isRequired
                type="email"
                name="email"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                id="email"
              />
              {errors.email && touched.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}

              <Select
                aria-label="Assunto"
                isRequired
                placeholder="Selecione um assunto"
                value={values.assunto}
                onSelectionChange={handleChange}
              >
                {assuntos.map((assunto) => (
                  <SelectItem key={assunto.key} value={assunto.key}>
                    {assunto.label}
                  </SelectItem>
                ))}
              </Select>
              {errors.assunto && touched.assunto && (
                <ErrorMessage>{errors.assunto}</ErrorMessage>
              )}
              <Textarea
                aria-label="Descrição"
                label="Descrição"
                placeholder="Insira uma descrição"
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
              />
              {errors.descricao && touched.descricao && (
                <ErrorMessage>{errors.descricao}</ErrorMessage>
              )}
              <Button type="submit" className="bg-[#024c3d] text-white w-full">
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </GridContent>
  );
}
