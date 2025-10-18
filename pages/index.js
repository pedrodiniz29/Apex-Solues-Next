import React, { Fragment } from "react";
import Head from "next/head";

import { useTranslations } from "next-intl";

import Navbar4 from "../components/navbar4";
import Hero9 from "../components/hero9";
import Features4 from "../components/features4";
import Steps1 from "../components/steps1";
import Footer15 from "../components/footer15";

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Apex Soluções</title>
          <meta property="og:title" content="Apex Soluções" />
        </Head>
        <Navbar4
          link1={
            <Fragment>
              <span className="home-text10">HOME</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text11">QUEM SOMOS</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text12">PORTFÓLIO</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text13">CONTATO</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text14">ENTRE EM CONTATO</span>
            </Fragment>
          }
          logoSrc="/apex%20final-1500h.png"
          link1Url="/"
        ></Navbar4>
        <Hero9
          content1={
            <Fragment>
              <span className="home-text15">
                <span>
                  Atinja o ápice da performance com nossas soluções inteligentes
                  e customizadas em Power Plataform.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text18">Assessoria em Power Plataform</span>
            </Fragment>
          }
          imageSrc="/business-data-panel%20(1)-1500w.jpg"
        ></Hero9>
        <div className="home-container-power-plataform">
          <div className="home-container11">
            <span className="home-text19">O que é Power Plataform?</span>
            <span className="home-text20">
              A Power Plataform é o ecossistema de Microsoft que conecta dados,
              pessoas e processos. Com Power BI, Power Apps, Power Automate e
              Copilot Studio, sua empresa deixa o manual para trás e entra na
              era da automação inteligente.
            </span>
            <a
              href="https://www.microsoft.com/pt-br/power-platform/ai"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1 button"
            >
              Saiba Mais
            </a>
          </div>
          <div className="home-container12">
            <div className="home-container13">
              <img
                alt="image"
                src="/img-srcdashboard.jpg-1500w.jpg"
                className="home-image1"
              />
              <div className="home-container14">
                <span className="home-text-title1">Power BI</span>
                <span className="home-text-corpo1">
                  Transforme dados brutos em relatórios interativos, facilitando
                  a tomada de decisões estratégicas.
                </span>
              </div>
            </div>
            <div className="home-container15">
              <img
                alt="image"
                src="/1719261895599-aqeeojnaxei9nvog-1500w.jpg"
                className="home-image2"
              />
              <div className="home-container16">
                <span className="home-text-title2">Power Apps</span>
                <span className="home-text-corpo2">
                  Crie soluções personalizadas, facilitando a automação de
                  processos e a integração de dados.
                </span>
              </div>
            </div>
            <div className="home-container17">
              <img
                alt="image"
                src="/istockphoto-2149331782-612x612-1500w.jpg"
                className="home-image3"
              />
              <div className="home-container18">
                <span className="home-text-title3">Power Automate</span>
                <span className="home-text-corpo3">
                  Transforme sua produtividade automatizando tarefas e
                  integrando aplicativos de forma simples!
                </span>
              </div>
            </div>
            <div className="home-container19">
              <img
                alt="image"
                src="/ai-agents-scaled-1500w.jpeg"
                className="home-image4"
              />
              <div className="home-container20">
                <span className="home-text-title4">Copilot Studio</span>
                <span className="home-text-corpo4">
                  Crie agentes de IA integrado em suas soluções.
                </span>
              </div>
            </div>
          </div>
        </div>
        <Features4
          sectionTitle={
            <Fragment>
              <span className="home-text21">Impacto real no seu negócio</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text22">Menor custo operacional</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text23">Decisões mais assertivas</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text24">Melhora na Performance</span>
            </Fragment>
          }
          feature4Title={
            <Fragment>
              <span className="home-text25">Soluções sob medida</span>
            </Fragment>
          }
          feature1ImageSrc="/low-price-a0xvx1rd99ujnlb2-600w.webp"
          feature2ImageSrc="/decision-making-m5k8qlr1k4iyodoo-600w.webp"
          feature3ImageSrc="/good-feedback-m7vdx5kad3iz0y1b-600w.webp"
          feature4ImageSrc="/solution-yrd4gqxrbaij4o5l-600w.webp"
          feature1Description={
            <Fragment>
              <span className="home-text26">
                Redução de tempo gasto em processos manuais
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text27">
                Informação acessível, integrada e confiável
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text28">
                Otimização de processos, utilize seu tempo onde realmente
                importa
              </span>
            </Fragment>
          }
          feature4Description={
            <Fragment>
              <span className="home-text29">
                Adaptabilidade perfeita aos seus processos, desafios e objetivos
              </span>
            </Fragment>
          }
        ></Features4>
        <Steps1
          text={
            <Fragment>
              <span className="home-text30">Sua jornada de transformação</span>
            </Fragment>
          }
          step1Title={
            <Fragment>
              <span className="home-text31">Diagnóstico</span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text32">Desenho da Solução</span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text33">Proposta</span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text34">Desenvolvimento</span>
            </Fragment>
          }
          step3Title1={
            <Fragment>
              <span className="home-text35">Implementação</span>
            </Fragment>
          }
          step4Title1={
            <Fragment>
              <span className="home-text36">Acompanhamento</span>
            </Fragment>
          }
          step1ImageSrc="/checklist-mje4kv3l33tqe3rq-1400w.webp"
          step2ImageSrc="/diagram-m5k8qwzq8xuebnk9-1400w.webp"
          step3ImageSrc="/budget-awv8kmz19bc7n0ej-1400w.webp"
          step4ImageSrc="/web-a1azxwrpd4hebzle-1400w.webp"
          step3ImageSrc1="/rocket-a0xvxwrg7yf8wkn5-1400w.webp"
          step4ImageSrc1="/computer-alp2gn48kxheeq0x-1400w.webp"
          step1Description={
            <Fragment>
              <span className="home-text37">
                Entendemos seus desafios e o escopo da solução, sem compromisso.
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text38">
                Desenhamos a Solução sob medida para seu contexto
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text39">
                Enviamos a proposta dos entregáveis e os planos de contrato
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text40">
                Desenvolvemos toda a solução em ambiente externo
              </span>
            </Fragment>
          }
          step3Description1={
            <Fragment>
              <span className="home-text41">
                Implementamos a solução no ambiente da empresa com a conexão ao
                dados reais
              </span>
            </Fragment>
          }
          step4Description1={
            <Fragment>
              <span className="home-text42">
                Acompanhamos a saúde da solução, implementando manutenção e
                melhorias quando necessário
              </span>
            </Fragment>
          }
        ></Steps1>
        <div className="home-container-call-action">
          <span className="home-text43">
            Que tal conversarmos sobre o seu projeto?
          </span>
          <span className="home-text44">
            Sem compromisso, sem custo. Descubra o que a Apex pode fazer por
            você!
          </span>
        </div>
        <Footer15
          text={
            <Fragment>
              <span className="home-text45">Apex Soluções</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text46">
                Entre em contato conosco através dos telefones abaixo ou em
                nossas redes sociais
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text47">16 99167-0896</span>
            </Fragment>
          }
          content21={
            <Fragment>
              <span className="home-text48">17 99604-1371</span>
            </Fragment>
          }
          copyright={
            <Fragment>
              <span className="home-text49">© 2025Apex Soluções</span>
            </Fragment>
          }
          image1Src="/apex%20final-1500h.png"
        ></Footer15>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-container-power-plataform {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: 711px;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-twounits);
            margin-bottom: 0px;
            padding-right: var(--dl-layout-space-twounits);
            padding-bottom: var(--dl-layout-space-twounits);
          }
          .home-container11 {
            width: 40%;
            height: 100%;
            display: flex;
            padding: 0px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .home-text19 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            width: 100%;
            font-size: 60px;
            font-style: normal;
            font-weight: 300;
          }
          .home-text20 {
            width: 100%;
          }
          .home-link1 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            transition: 0.3s;
            border-color: var(--dl-color-theme-primary1);
            text-decoration: none;
          }
          .home-link1:hover {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            background-color: var(--dl-color-theme-primary2);
          }
          .home-container12 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: 100%;
            display: grid;
            align-items: stretch;
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
          }
          .home-container13 {
            overflow: hidden;
            position: relative;
            grid-row-end: 2;
            border-radius: var(--dl-layout-radius-inputradius);
            animation-name: fadeInUp;
            grid-row-start: 1;
            animation-delay: 0s;
            grid-column-end: 2;
            grid-column-start: 1;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container14 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 50%;
            display: flex;
            position: absolute;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .home-text-title1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: 100%;
            font-size: 40px;
            font-style: normal;
            font-weight: 300;
          }
          .home-text-corpo1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 200;
          }
          .home-container15 {
            overflow: hidden;
            position: relative;
            grid-row-end: 2;
            border-radius: var(--dl-layout-radius-inputradius);
            animation-name: fadeInUp;
            grid-row-start: 1;
            animation-delay: 0s;
            grid-column-end: 2;
            grid-column-start: 2;
            animation-duration: 600ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container16 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 50%;
            display: flex;
            position: absolute;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .home-text-title2 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: 100%;
            font-size: 40px;
            font-style: normal;
            font-weight: 300;
          }
          .home-text-corpo2 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 200;
          }
          .home-container17 {
            overflow: hidden;
            position: relative;
            grid-row-end: 2;
            border-radius: var(--dl-layout-radius-inputradius);
            animation-name: fadeInUp;
            grid-row-start: 2;
            animation-delay: 0s;
            grid-column-end: 2;
            grid-column-start: 1;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container18 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 50%;
            display: flex;
            position: absolute;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .home-text-title3 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: 100%;
            font-size: 40px;
            font-style: normal;
            font-weight: 300;
          }
          .home-text-corpo3 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 200;
          }
          .home-container19 {
            overflow: hidden;
            position: relative;
            grid-row-end: 2;
            border-radius: var(--dl-layout-radius-inputradius);
            animation-name: fadeInUp;
            grid-row-start: 2;
            animation-delay: 0s;
            grid-column-end: 2;
            grid-column-start: 2;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-image4 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container20 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 50%;
            display: flex;
            position: absolute;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .home-text-title4 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: 100%;
            font-size: 40px;
            font-style: normal;
            font-weight: 300;
          }
          .home-text-corpo4 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            width: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 200;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-container-call-action {
            gap: var(--dl-layout-space-oneandhalfunits);
            height: 270px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .home-text43 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 3rem;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-weight: 300;
          }
          .home-text44 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 2rem;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-weight: 300;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-link2 {
            display: contents;
          }
          .home-container21 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon1 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text50 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
        `}
      </style>
    </>
  );
};

export default Home;
