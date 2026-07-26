"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Contenido } from "@/lib/contenido";
import s from "./Calculadora.module.css";

const etiquetasLocale: Record<Locale, string> = {
  es: "es-CO",
  en: "en-US",
  fr: "fr-FR",
};

export function Calculadora({
  locale,
  c,
}: {
  locale: Locale;
  c: Contenido;
}) {
  const calculadora = c.calculadora;
  const [mensajes, setMensajes] = useState(50);
  const [fuera, setFuera] = useState(40);
  const [ticket, setTicket] = useState(80000);
  const [conversion, setConversion] = useState(20);

  const moneda = useMemo(
    () =>
      new Intl.NumberFormat(etiquetasLocale[locale], {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
      }),
    [locale],
  );

  const perdidasMes =
    mensajes * 30 * (fuera / 100) * (conversion / 100) * ticket;
  const perdidasAnio = perdidasMes * 12;
  const recuperable = perdidasMes * 0.7;

  const campos = [
    {
      id: "mensajes",
      etiqueta: calculadora.campos.mensajes,
      valor: mensajes,
      minimo: 5,
      maximo: 500,
      paso: 5,
      salida: new Intl.NumberFormat(etiquetasLocale[locale]).format(mensajes),
      cambiar: setMensajes,
    },
    {
      id: "fuera",
      etiqueta: calculadora.campos.fuera,
      valor: fuera,
      minimo: 0,
      maximo: 100,
      paso: 5,
      salida: `${fuera}%`,
      cambiar: setFuera,
    },
    {
      id: "ticket",
      etiqueta: calculadora.campos.ticket,
      valor: ticket,
      minimo: 10000,
      maximo: 1000000,
      paso: 10000,
      salida: moneda.format(ticket),
      cambiar: setTicket,
    },
    {
      id: "conversion",
      etiqueta: calculadora.campos.conversion,
      valor: conversion,
      minimo: 1,
      maximo: 100,
      paso: 1,
      salida: `${conversion}%`,
      cambiar: setConversion,
    },
  ];

  return (
    <section className={`seccion seccion--tinte ${s.seccion}`}>
      <div className="contenedor">
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{calculadora.etiqueta}</p>
          <h2 className="titulo-seccion">{calculadora.titulo}</h2>
          <p className="texto-seccion">{calculadora.texto}</p>
        </header>

        <div className={s.rejilla}>
          {/* Los controles viven solo en el navegador. No hay petición,
              almacenamiento ni sincronización con un servidor. */}
          <div className={`revelar ${s.controles}`}>
            {campos.map((campo) => (
              <div className={s.campo} key={campo.id}>
                <div className={s.filaEtiqueta}>
                  <label htmlFor={`calculadora-${campo.id}`}>
                    {campo.etiqueta}
                  </label>
                  <output htmlFor={`calculadora-${campo.id}`}>
                    {campo.salida}
                  </output>
                </div>
                <input
                  id={`calculadora-${campo.id}`}
                  type="range"
                  min={campo.minimo}
                  max={campo.maximo}
                  step={campo.paso}
                  value={campo.valor}
                  onChange={(evento) =>
                    campo.cambiar(Number(evento.currentTarget.value))
                  }
                />
              </div>
            ))}
          </div>

          <aside className={`revelar ${s.resultados}`} data-retardo="1">
            <h3 className={s.tituloResultados}>
              {calculadora.resultados.titulo}
            </h3>
            <dl className={s.listaResultados} aria-live="polite">
              <div className={s.resultadoPrincipal}>
                <dt>{calculadora.resultados.perdidasMes}</dt>
                <dd>{moneda.format(perdidasMes)}</dd>
              </div>
              <div>
                <dt>{calculadora.resultados.perdidasAnio}</dt>
                <dd>{moneda.format(perdidasAnio)}</dd>
              </div>
              <div>
                <dt>{calculadora.resultados.recuperable}</dt>
                <dd>{moneda.format(recuperable)}</dd>
              </div>
            </dl>
            <p className={s.nota}>{calculadora.nota}</p>
            <Link
              href={`/${locale}/#contacto`}
              className="boton boton--primario"
            >
              {calculadora.cta}
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
