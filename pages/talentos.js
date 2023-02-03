import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./talentos.module.css";
import AccordionTalentos from "../components/AccordionTalentos";
import BeneficiosTalentos from "../components/BeneficiosTalentos";

const Talentos = () => {
  const router = useRouter();

  const onTalentosContainer1Click = useCallback(() => {
    router.push("/sobre");
  }, [router]);

  const onPoliticaPrivacidadeContainerClick = useCallback(() => {
    router.push("/poltica-de-privacidade");
  }, [router]);

  const onSobreContainerClick = useCallback(() => {
    router.push("/sobre");
  }, [router]);

  const onSistemaContainerClick = useCallback(() => {
    router.push("/sistemas");
  }, [router]);

  const onCarreirasContainerClick = useCallback(() => {
    router.push("/carreiras");
  }, [router]);

  const onLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSobreContainer1Click = useCallback(() => {
    router.push("/sobre");
  }, [router]);

  return (
    <div className={styles.talentos}>
      <div className={styles.rodap}>
        <div className={styles.tecnologiaAServio}>
          Tecnologia a serviço da Realização Profissional
        </div>
        <div className={styles.retngulo142} />
        <div className={styles.grupo204}>
          <div className={styles.valorizza2022}>
            Valorizza © 2022 | Todos os direitos reservados.
          </div>
        </div>
        <div className={styles.endereco}>
          <b className={styles.endereo}>Endereço</b>
          <div className={styles.endereo1}>
            <div className={styles.ruaSinimbu1670Container}>
              <a href="https://www.google.com.br/maps/place/Valorizza+Desenvolvimento+de+Sistemas/@-29.1689532,-51.1784097,19z/data=!3m1!4b1!4m5!3m4!1s0x951ebccee24621cd:0xc985780809ea7832!8m2!3d-29.1689091!4d-51.1778628">
              <p className={styles.centroCaxiasDo}>
                Rua Sinimbu, 1670, Bloco B
              </p>
              </a>
              <a href="https://www.google.com.br/maps/place/Valorizza+Desenvolvimento+de+Sistemas/@-29.1689532,-51.1784097,19z/data=!3m1!4b1!4m5!3m4!1s0x951ebccee24621cd:0xc985780809ea7832!8m2!3d-29.1689091!4d-51.1778628">
              <p className={styles.centroCaxiasDo}>5º andar, Sala 502.</p>
              </a>
              <a href="https://www.google.com.br/maps/place/Valorizza+Desenvolvimento+de+Sistemas/@-29.1689532,-51.1784097,19z/data=!3m1!4b1!4m5!3m4!1s0x951ebccee24621cd:0xc985780809ea7832!8m2!3d-29.1689091!4d-51.1778628">
              <p className={styles.centroCaxiasDo}>
                Centro, Caxias do Sul - RS.
              </p>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contrato}>
          <b className={styles.contato}>Contato</b>
          <div className={styles.whatsapp}>
          <div className={styles.col1Rodape}>
            <a href="https://api.whatsapp.com/send/?phone=5554981490275&text&type=phone_number&app_absent=0">(54) 98149-0275</a>
            </div>
            <a href="https://api.whatsapp.com/send/?phone=5554981490275&text&type=phone_number&app_absent=0">
            <img
              className={styles.whatsappLogoIcon}
              alt=""
              src="../whatsapplogo.svg"
            />
            </a>
          </div>
          <div className={styles.trabalheConosco}>
            <div className={styles.div}>(54) 4141-2268</div>
          </div>
          <div className={styles.email}>
          <div className={styles.col1Rodape}>
            <a href="https://valorizza-22614150.hubspotpagebuilder.com/contato">Envie-nos um email</a>
            </div>
          </div>
        </div>
        <div className={styles.lgpd}>
          <div className={styles.dpo}>
          <div className={styles.ruaSinimbu1670Container}>
              <a href="mailto:dpo@valorizza.com.br"><p className={styles.centroCaxiasDo}>Rosecler Maria Rodrigues</p></a>
              <a href="mailto:dpo@valorizza.com.br"><p className={styles.centroCaxiasDo}>dpo@valorizza.com.br</p></a>
            </div>
          </div>
          <b className={styles.lgpd1}>LGPD</b>
        </div>
        <div className={styles.linksUteis}>
          <div className={styles.trabalheConosco1}>
          <div className={styles.col1Rodape}>
            <a href="https://valorizza.kretos.cc/">Trabalhe conosco</a>
            </div>
          </div>
          <div className={styles.portalDeAtendimento}>
          <div className={styles.col1Rodape}>
            <a href="https://atendimento.valorizza.com.br/loginempresa.aspx">Portal de Atendimento</a>
            </div>
          </div>
          <div
            className={styles.politicaPrivacidade}
            onClick={onPoliticaPrivacidadeContainerClick}
          >
            <div className={styles.col1Rodape}>
            <a href="/politica-de-privacidade">Política de Privacidade</a>
            </div>
          </div>
          <div className={styles.blog}>
          <div className={styles.col1Rodape}>
            <a href="https://valorizza.com.br/blog">Blog</a>
            </div>
          </div>
          <div className={styles.linksUteis1}>
            <b className={styles.endereo}>Links úteis</b>
          </div>
        </div>
        <div className={styles.mapaSite}>
          <div className={styles.mapaSite1}>
            <b className={styles.endereo}>Mapa do Site</b>
          </div>
          <div className={styles.sobre} onClick={onSobreContainerClick}>
          <div className={styles.col1Rodape}>
            <a href="/sobre">Sobre</a>
            </div>
          </div>
          <div className={styles.sistema} onClick={onSistemaContainerClick}>
          <div className={styles.col1Rodape}>
            <a href="/sistemas">Sistemas</a>
            </div>
          </div>
          <div className={styles.carreiras} onClick={onCarreirasContainerClick}>
          <div className={styles.col1Rodape}>
            <a href="/carreiras">Valorizza Carreiras</a>
            </div>
          </div>
          <div className={styles.talentos1}>
          <div className={styles.col1Rodape}>
            <a href="/talentos">Valorizza Talentos</a>
            </div>
          </div>
        </div>
        <div className={styles.socialMedia1}>
        <a href="https://www.instagram.com/valorizza_/"><svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" viewBox="0 0 22.5 22.5"><path d="M24.085,6.66A6.46,6.46,0,0,0,19.322,4.8H9.978A6.214,6.214,0,0,0,3.4,11.378v9.3a6.527,6.527,0,0,0,1.905,4.854A6.62,6.62,0,0,0,10.023,27.3h9.254a6.7,6.7,0,0,0,4.763-1.769,6.494,6.494,0,0,0,1.86-4.808V11.378A6.5,6.5,0,0,0,24.085,6.66ZM23.9,20.722a4.433,4.433,0,0,1-1.316,3.311,4.689,4.689,0,0,1-3.311,1.179H10.023a4.689,4.689,0,0,1-3.311-1.179,4.56,4.56,0,0,1-1.225-3.357v-9.3A4.522,4.522,0,0,1,6.711,8.066a4.613,4.613,0,0,1,3.311-1.179h9.345a4.522,4.522,0,0,1,3.311,1.225A4.681,4.681,0,0,1,23.9,11.378ZM14.65,10.2A5.806,5.806,0,1,0,20.456,16,5.818,5.818,0,0,0,14.65,10.2Zm0,9.526A3.72,3.72,0,1,1,18.37,16,3.737,3.737,0,0,1,14.65,19.724ZM20.683,8.747A1.316,1.316,0,1,0,22,10.062,1.315,1.315,0,0,0,20.683,8.747Z" transform="translate(-3.4 -4.8)"/></svg></a>
        <a href="https://www.linkedin.com/company/valorizza/"><svg xmlns="http://www.w3.org/2000/svg" width="22.359" height="22.5" viewBox="0 0 22.359 22.5"><path d="M380.705,5650H361.651a1.632,1.632,0,0,0-1.651,1.611v19.277a1.632,1.632,0,0,0,1.651,1.611h19.054a1.634,1.634,0,0,0,1.653-1.611v-19.277A1.633,1.633,0,0,0,380.705,5650Zm-13.928,18.835H363.4v-10.159h3.377Zm-1.688-11.548h-.022a1.93,1.93,0,1,1,.022,0Zm13.865,11.548h-3.377V5663.4c0-1.366-.489-2.3-1.71-2.3a1.849,1.849,0,0,0-1.733,1.235,2.311,2.311,0,0,0-.111.823v5.675h-3.377s.044-9.208,0-10.16h3.377v1.438a3.354,3.354,0,0,1,3.044-1.677c2.222,0,3.888,1.452,3.888,4.573v5.826Z" transform="translate(-360 -5650)"/></svg></a>
        <a href="https://www.youtube.com/@ValorizzaBr"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22.5" viewBox="0 0 32 22.5"><path d="M471.331,5654.77a4.019,4.019,0,0,0-2.829-2.847c-2.5-.673-12.5-.673-12.5-.673s-10.007,0-12.5.673a4.018,4.018,0,0,0-2.829,2.847,45.25,45.25,0,0,0,0,15.5,3.958,3.958,0,0,0,2.829,2.8c2.495.673,12.5.673,12.5.673s10.007,0,12.5-.673a3.958,3.958,0,0,0,2.829-2.8,45.256,45.256,0,0,0,0-15.5Zm-18.6,12.51v-9.515l8.364,4.758Z" transform="translate(-440 -5651.25)"/></svg></a>
        </div>
        <div className={styles.logo}>
          <img className={styles.grupo126Icon} alt="" src="../grupo-126.svg" />
          <img className={styles.grupo431Icon} alt="" src="../grupo-431.svg" />
          <div className={styles.sistemaDigitalInteligente}>
            Sistema Digital Inteligente
          </div>
        </div>
      </div>
      <div className={styles.startups}>
        <b className={styles.conheaAsStartups}>
          Conheça as Startups do Grupo Valorizza
        </b>
        <div className={styles.kretos}>
          <img
            className={styles.caminho549Icon}
            alt=""
            src="../caminho-549.svg"
          />
          <div className={styles.grupo263}>
          <a href="https://kretos.cc/" className={styles.kretoscc}>kretos.cc</a>
            <img
              className={styles.caminho551Icon}
              alt=""
              src="../caminho-551.svg"
            />
          </div>
          <img
            className={styles.kretosHorizontalPrancheta1Icon}
            alt=""
            src="../kretoshorizontal-prancheta-1@2x.png"
          />
          <b className={styles.kretosSoftwareContainer}>
            <p className={styles.centroCaxiasDo}>Kretos - Software de</p>
            <p className={styles.centroCaxiasDo}>{`Recrutamento & Seleção`}</p>
          </b>
          <b className={styles.aEscolhaInteligente}>A escolha inteligente.</b>
          <div className={styles.aMelhorFerramentaContainer}>
            <p
              className={styles.centroCaxiasDo}
            >{`A melhor ferramenta para encontrar o `}</p>
            <p className={styles.centroCaxiasDo}>
              profissional certo para sua empresa.
            </p>
          </div>
        </div>
        <div className={styles.starter}>
          <img
            className={styles.caminho549Icon}
            alt=""
            src="../caminho-5491.svg"
          />
          <div className={styles.grupo262}>
            <img
              className={styles.grupo416Icon}
              alt=""
              src="../grupo-416.svg"
            />
            <b className={styles.starterSistemaDeContainer}>
              <p className={styles.centroCaxiasDo}>Starter - Sistema</p>
              <p className={styles.centroCaxiasDo}>de Força de Vendas</p>
            </b>
            <div className={styles.componente546}>
            <a href="https://sistemastarter.com.br/" className={styles.sistemastartercombr}>
                  sistemastarter.com.br
                </a>
              <img
                className={styles.caminho552Icon}
                alt=""
                src="../caminho-551.svg"
              />
            </div>
            <div className={styles.oPrincipalParceiro}>
              O principal parceiro para alavancar a Industria de Produtos
              Configuráveis.
            </div>
            <b className={styles.eleveOsSeus}>
              Eleve os seus resultados ao próximo patamar.
            </b>
          </div>
        </div>
        <b className={styles.aTecnologiaNos}>
          A tecnologia nos oferece caminhos para mudar o mundo. Basta
          escolhermos as ferramentas certas.
        </b>
      </div>
      <div className={styles.cta2}>
        <b className={styles.gostariaDeMaisContainer}>
          <p className={styles.centroCaxiasDo}>Gostaria de mais informações?</p>
          <p className={styles.centroCaxiasDo}>
            Envie uma mensagem para nossa equipe de atendimento.
          </p>
        </b>
        <a href="https://valorizza-22614150.hubspotpagebuilder.com/contato" className={styles.componente4426}>
          <img
            className={styles.caminho549Icon}
            alt=""
            src="../caminho-5202.svg"
          />
          <div className={styles.entreEmContato}>Entre em contato</div>
          <div className={styles.div2}>→</div>
        </a>
        <img className={styles.dividerIcon} alt="" src="../divider.svg" />
      </div>
      <div className={styles.beneficios}>
      <BeneficiosTalentos />
        {/* <div className={styles.benefcios}>
          <div className={styles.grupo440}>
            <div className={styles.agilidade}>
              <div className={styles.agilidadeNosProcessos}>
                Agilidade nos processos e economia de tempo.
              </div>
              <img
                className={styles.caminho516Icon}
                alt=""
                src="../caminho-5162.svg"
              />
              <img
                className={styles.dividerIcon}
                alt=""
                src="../divider1.svg"
              />
            </div>
            <div className={styles.agilidade}>
              <div className={styles.agilidadeNosProcessos}>
                Facilidade na captação de currículos.
              </div>
              <img
                className={styles.caminho516Icon}
                alt=""
                src="../caminho-5162.svg"
              />
              <img
                className={styles.dividerIcon}
                alt=""
                src="../divider1.svg"
              />
            </div>
            <div className={styles.agilidade}>
              <div className={styles.agilidadeNosProcessos}>
                Automação do processo de Seleção.
              </div>
              <img
                className={styles.caminho516Icon}
                alt=""
                src="../caminho-5162.svg"
              />
              <img
                className={styles.dividerIcon}
                alt=""
                src="../divider1.svg"
              />
            </div>
            <div className={styles.agilidade}>
              <div className={styles.agilidadeNosProcessos}>
                Controle da jornada do processo seletivo.
              </div>
              <img
                className={styles.caminho516Icon}
                alt=""
                src="../caminho-5162.svg"
              />
              <img
                className={styles.dividerIcon}
                alt=""
                src="../divider1.svg"
              />
            </div>
            <div className={styles.agilidade}>
              <div className={styles.agilidadeNosProcessos}>
                Centralização das informações dos candidatos e estagiários.
              </div>
              <img
                className={styles.caminho516Icon}
                alt=""
                src="../caminho-5162.svg"
              />
              <img
                className={styles.dividerIcon}
                alt=""
                src="../divider1.svg"
              />
            </div>
            <div className={styles.agilidade}>
              <div className={styles.agilidadeNosProcessos}>
                Firme parcerias valiosas com o mercado.
              </div>
              <img
                className={styles.caminho516Icon}
                alt=""
                src="../caminho-5162.svg"
              />
              <img
                className={styles.dividerIcon}
                alt=""
                src="../divider1.svg"
              />
            </div>
            <div className={styles.agilidade}>
              <div className={styles.agilidadeNosProcessos}>
                Assertividade na apuração dos valores dos contratos ativos.
              </div>
              <img
                className={styles.caminho516Icon}
                alt=""
                src="../caminho-5162.svg"
              />
              <img
                className={styles.dividerIcon}
                alt=""
                src="../divider1.svg"
              />
            </div>
          </div>
          <div className={styles.linha14} />
          <b className={styles.conheaMaisBenefciosContainer}>
            <p className={styles.centroCaxiasDo}>
              Conheça mais benefícios de nosso Sistema
            </p>
            <p className={styles.centroCaxiasDo}>
              para sua Instituição de Ensino:
            </p>
          </b>
        </div> */}
      </div>
      <div className={styles.clientes}>
        <img className={styles.imagem43Icon} alt="" src="../imagem-43@2x.png" />
        <img
          className={styles.grupoDeMscara12}
          alt=""
          src="../grupo-de-mscara-12@2x.png"
        />
        <img
          className={styles.gabarito041Icon}
          alt=""
          src="../gabarito-041@2x.png"
        />
        <img
          className={styles.gabarito421Icon}
          alt=""
          src="../gabarito-421@2x.png"
        />
        <img className={styles.imagem33Icon} alt="" src="../imagem-33@2x.png" />
        <img className={styles.imagem42Icon} alt="" src="../imagem-42@2x.png" />
        <img className={styles.imagem39Icon} alt="" src="../imagem-39@2x.png" />
        <img className={styles.imagem14Icon} alt="" src="../imagem-14@2x.png" />
        <img className={styles.imagem44Icon} alt="" src="../imagem-44@2x.png" />
        <img className={styles.imagem40Icon} alt="" src="../imagem-40@2x.png" />
        <img
          className={styles.gabarito261Icon}
          alt=""
          src="../gabarito-261@2x.png"
        />
        <img className={styles.imagem54Icon} alt="" src="../imagem-54@2x.png" />
        <img className={styles.imagem11Icon} alt="" src="../imagem-11@2x.png" />
        <img className={styles.imagem4Icon} alt="" src="../imagem-4@2x.png" />
        <img
          className={styles.grupoDeMscara13}
          alt=""
          src="../grupo-de-mscara-13@2x.png"
        />
        <img className={styles.imagem32Icon} alt="" src="../imagem-32@2x.png" />
        <img className={styles.imagem50Icon} alt="" src="../imagem-50@2x.png" />
        <img className={styles.imagem38Icon} alt="" src="../imagem-38@2x.png" />
        <img className={styles.imagem35Icon} alt="" src="../imagem-35@2x.png" />
        <img
          className={styles.grupoDeMscara14}
          alt=""
          src="../grupo-de-mscara-14@2x.png"
        />
        <img
          className={styles.gabarito261Icon1}
          alt=""
          src="../gabarito-261@2x.png"
        />
        <b className={styles.agentesIntegradoresEContainer}>
          <p className={styles.centroCaxiasDo}>
            Agentes Integradores e Agências de Recursos Humanos
          </p>
          <p className={styles.centroCaxiasDo}>
            que já alinham os melhores candidatos e oportunidades:
          </p>
        </b>
      </div>
      <div className={styles.cta}>
        <b className={styles.encontrarOCandidatoContainer}>
          <p className={styles.centroCaxiasDo}>
            Encontrar o candidato perfeito para cada
          </p>
          <p className={styles.centroCaxiasDo}>
            oportunidade está ao seu alcance.
          </p>
        </b>
        <div className={styles.botaoAgendar}>
          <img
            className={styles.caminho549Icon}
            alt=""
            src="../caminho-564.svg"
          />
          <button className={styles.botaoAgendar2}>
            <a href="https://valorizza-22614150.hubspotpagebuilder.com/demostracao-valorizza" className={styles.agendeUmaDemonstrao}>
              Agende uma demonstração
            </a>
        </button>
        </div>
      </div>
      <div className={styles.recursos}>
      <AccordionTalentos />
        {/* <b className={styles.comoNossoSistemaContainer}>
          <p className={styles.centroCaxiasDo}>
            Como nosso Sistema de Recrutamento e Seleção
          </p>
          <p className={styles.centroCaxiasDo}>
            você conta com os melhores recursos do mercado:
          </p>
        </b>
        <div className={styles.recursos1}>
          <div className={styles.grupo444}>
            <div className={styles.recrutamento}>
              <img
                className={styles.caminho661Icon}
                alt=""
                src="../caminho-661.svg"
              />
              <div
                className={styles.plataformasQueProporcionam}
              >{`Plataformas que proporcionam estratégias de recrutamento de candidatos eficientes e ferramentas para seleção desenvolvidas junto a psicólogos e profissionais com expertise na área. `}</div>
              <img
                className={styles.caminho549Icon}
                alt=""
                src="../caminho-659.svg"
              />
              <b className={styles.recrutamentoESeleo}>
                Recrutamento e Seleção
              </b>
              <img
                className={styles.caminho660Icon}
                alt=""
                src="../caminho-660.svg"
              />
            </div>
            <div className={styles.recrutamento}>
              <img
                className={styles.caminho661Icon}
                alt=""
                src="../caminho-661.svg"
              />
              <div className={styles.gestoDosEstgios}>
                Gestão dos estágios obrigatórios e não obrigatórios, convênios e
                contratos, geração automática de documentos, controle de seguro,
                consultas e relatórios, repositório de documentos, assinatura
                digital de documentos e atendimento à legislação.
              </div>
              <img
                className={styles.caminho549Icon}
                alt=""
                src="../caminho-659.svg"
              />
              <b className={styles.recrutamentoESeleo}>Gestão de Estágios</b>
              <img
                className={styles.caminho660Icon}
                alt=""
                src="../caminho-660.svg"
              />
            </div>
          </div>
          <div className={styles.grupo445}>
            <div className={styles.recrutamento}>
              <img
                className={styles.caminho661Icon}
                alt=""
                src="../caminho-661.svg"
              />
              <div className={styles.plataformasEFerramentas}>
                Plataformas e ferramentas para captação de currículos e
                divulgação de vagas, configurável para cada oportunidade, com
                acesso instantâneo a informações e documentos.
              </div>
              <img
                className={styles.caminho549Icon}
                alt=""
                src="../caminho-659.svg"
              />
              <b className={styles.recrutamentoESeleo}>Banco de Currículos</b>
              <img
                className={styles.caminho660Icon}
                alt=""
                src="../caminho-660.svg"
              />
            </div>
            <div className={styles.recrutamento}>
              <img
                className={styles.caminho661Icon}
                alt=""
                src="../caminho-661.svg"
              />
              <div
                className={styles.discBigFive}
              >{`DISC, Big Five, avaliação comportamental, vídeo-entrevista, testes personalizáveis, classificação e ordenamento dos candidatos de acordo com os critérios especificados pelo seu cliente para cada vaga criada. `}</div>
              <img
                className={styles.caminho549Icon}
                alt=""
                src="../caminho-659.svg"
              />
              <b className={styles.recrutamentoESeleo}>Testes on-line</b>
              <img
                className={styles.caminho660Icon}
                alt=""
                src="../caminho-660.svg"
              />
            </div>
            <div className={styles.recrutamento}>
              <img
                className={styles.caminho661Icon}
                alt=""
                src="../caminho-661.svg"
              />
              <div
                className={styles.gestoDeContratos}
              >{`Gestão de contratos e convênios, apuração de valores a receber e pagar de todos os serviços e integração com o sistema financeiro da Instituição. `}</div>
              <img
                className={styles.caminho549Icon}
                alt=""
                src="../caminho-659.svg"
              />
              <b className={styles.recrutamentoESeleo}>Gestão Financeira</b>
              <img
                className={styles.caminho660Icon}
                alt=""
                src="../caminho-660.svg"
              />
            </div>
          </div>
          <div className={styles.grupo444}>
            <div className={styles.recrutamento}>
              <img
                className={styles.caminho661Icon}
                alt=""
                src="../caminho-661.svg"
              />
              <div
                className={styles.plataformasEFerramentas}
              >{`Gestão dos candidatos e comunicação via e-mail e WhatsApp, além do controle das fases do processo seletivo e encaminhamento dos candidatos para as vagas. `}</div>
              <img
                className={styles.caminho549Icon}
                alt=""
                src="../caminho-659.svg"
              />
              <b className={styles.recrutamentoESeleo}>CRM de Candidatos</b>
              <img
                className={styles.caminho660Icon}
                alt=""
                src="../caminho-660.svg"
              />
            </div>
            <div className={styles.recrutamento}>
              <img
                className={styles.caminho661Icon}
                alt=""
                src="../caminho-661.svg"
              />
              <div
                className={styles.consultoriaParaO}
              >{`Consultoria para o desenvolvimento da Carreira do candidato, com planejamento, elaboração de currículos, preparação para entrevistas e assessoramento para encontrar oportunidades. `}</div>
              <img
                className={styles.caminho549Icon}
                alt=""
                src="../caminho-659.svg"
              />
              <b className={styles.recrutamentoESeleo}>
                Consultoria de Carreiras
              </b>
              <img
                className={styles.caminho660Icon}
                alt=""
                src="../caminho-660.svg"
              />
            </div>
          </div>
        </div> */}
      </div>
      <div className={styles.tituloApresenta}>
      <b className={styles.sejaRefernciaEmContainer}>
          <p className={styles.centroCaxiasDo}>
            Seja referência em encontrar o melhor profissional para
          </p>
          <p className={styles.centroCaxiasDo}>
            cada oportunidade e as melhores vagas para seus candidatos
          </p>
        </b>
      </div>
      <div className={styles.apresenta}>
        <div className={styles.impulsionarAQualificao}>
          Impulsionar a qualificação profissional dos usuários e possibilitar o
          desenvolvimento de oportunidades na vida de pessoas e empresas está no
          DNA do Sistema Talentos. O avanço orientado na carreira dos jovens e
          dos profissionais possibilita transformações impactantes em suas
          realidades no mercado e na sociedade.
        </div>
        <b className={styles.aRealizaoEst}>
          A realização está ao alcance de todos.
        </b>
        <a href="https://valorizza-22614150.hubspotpagebuilder.com/contato" className={styles.componente4425}>
          <img
            className={styles.caminho549Icon}
            alt=""
            src="../caminho-5202.svg"
          />
          <div className={styles.entreEmContato}>Entre em contato</div>
          <div className={styles.div2}>→</div>
        </a>
        <img className={styles.grupo441Icon} alt="" src="../grupo-441.svg" />
      </div>
      <div className={styles.hero}>
        <img
          className={styles.grupoDeMscara27}
          alt=""
          src="../grupo-de-mscara-27@2x.png"
        />
        <div className={styles.grupo189}>
          <b className={styles.otimizarProcessosEncontrarContainer}>
            <p className={styles.centroCaxiasDo}>Otimizar processos</p>
            <p className={styles.centroCaxiasDo}>{`& encontrar talentos`}</p>
          </b>
          <div
            className={styles.sistemaCompletoPara}
          >{`Sistema completo para Agentes Integradores e Agências de Recursos Humanos selecionarem os melhores profissionais para cada oportunidade, com muito mais agilidade e eficiência. `}</div>
          <button className={styles.botaoAgendar2}>
            <a href="https://valorizza-22614150.hubspotpagebuilder.com/demostracao-valorizza" className={styles.agendeUmaDemonstrao}>
              Agende uma demonstração
            </a>
        </button>
        <a className={styles.saibaMais} href="#inova">
            <div className={styles.saibaMais1}>Saiba mais</div>
            <div className={styles.div6}>→</div>
          </a>
        </div>
        <div className={styles.retngulo215} />
        <div className={styles.navBar}>
        <button className={styles.botaoAgendar1}>
            <a href="https://valorizza-22614150.hubspotpagebuilder.com/demostracao-valorizza" className={styles.agendeUmaDemonstrao}>
              Agende uma demonstração
            </a>
        </button>
          <div className={styles.socialMedia}>
        <a href="https://www.instagram.com/valorizza_/"><svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" viewBox="0 0 22.5 22.5"><path d="M24.085,6.66A6.46,6.46,0,0,0,19.322,4.8H9.978A6.214,6.214,0,0,0,3.4,11.378v9.3a6.527,6.527,0,0,0,1.905,4.854A6.62,6.62,0,0,0,10.023,27.3h9.254a6.7,6.7,0,0,0,4.763-1.769,6.494,6.494,0,0,0,1.86-4.808V11.378A6.5,6.5,0,0,0,24.085,6.66ZM23.9,20.722a4.433,4.433,0,0,1-1.316,3.311,4.689,4.689,0,0,1-3.311,1.179H10.023a4.689,4.689,0,0,1-3.311-1.179,4.56,4.56,0,0,1-1.225-3.357v-9.3A4.522,4.522,0,0,1,6.711,8.066a4.613,4.613,0,0,1,3.311-1.179h9.345a4.522,4.522,0,0,1,3.311,1.225A4.681,4.681,0,0,1,23.9,11.378ZM14.65,10.2A5.806,5.806,0,1,0,20.456,16,5.818,5.818,0,0,0,14.65,10.2Zm0,9.526A3.72,3.72,0,1,1,18.37,16,3.737,3.737,0,0,1,14.65,19.724ZM20.683,8.747A1.316,1.316,0,1,0,22,10.062,1.315,1.315,0,0,0,20.683,8.747Z" transform="translate(-3.4 -4.8)"/></svg></a>
        <a href="https://www.linkedin.com/company/valorizza/"><svg xmlns="http://www.w3.org/2000/svg" width="22.359" height="22.5" viewBox="0 0 22.359 22.5"><path d="M380.705,5650H361.651a1.632,1.632,0,0,0-1.651,1.611v19.277a1.632,1.632,0,0,0,1.651,1.611h19.054a1.634,1.634,0,0,0,1.653-1.611v-19.277A1.633,1.633,0,0,0,380.705,5650Zm-13.928,18.835H363.4v-10.159h3.377Zm-1.688-11.548h-.022a1.93,1.93,0,1,1,.022,0Zm13.865,11.548h-3.377V5663.4c0-1.366-.489-2.3-1.71-2.3a1.849,1.849,0,0,0-1.733,1.235,2.311,2.311,0,0,0-.111.823v5.675h-3.377s.044-9.208,0-10.16h3.377v1.438a3.354,3.354,0,0,1,3.044-1.677c2.222,0,3.888,1.452,3.888,4.573v5.826Z" transform="translate(-360 -5650)"/></svg></a>
        <a href="https://www.youtube.com/@ValorizzaBr"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22.5" viewBox="0 0 32 22.5"><path d="M471.331,5654.77a4.019,4.019,0,0,0-2.829-2.847c-2.5-.673-12.5-.673-12.5-.673s-10.007,0-12.5.673a4.018,4.018,0,0,0-2.829,2.847,45.25,45.25,0,0,0,0,15.5,3.958,3.958,0,0,0,2.829,2.8c2.495.673,12.5.673,12.5.673s10.007,0,12.5-.673a3.958,3.958,0,0,0,2.829-2.8,45.256,45.256,0,0,0,0-15.5Zm-18.6,12.51v-9.515l8.364,4.758Z" transform="translate(-440 -5651.25)"/></svg></a>
        </div>
          <img
            className={styles.logoIcon}
            alt=""
            src="../logo2.svg"
            onClick={onLogoClick}
          />
          <div className={styles.sobre2} onClick={onSobreContainer1Click}>
            <div className={styles.linha2} />
            <div className={styles.sobre3}>
            <a href="/sobre">Sobre</a>
              </div>
          </div>
          <div className={styles.sistemas3}>
            <nav>
              <ul className={styles.system}>
                <li>
                  Sistemas
                  <ul>
                    <li>
                      <a href="/sistemas">Sistema Digital Inteligente</a>
                    </li>
                    <li>
                      <a href="/carreiras">Valorizza Carreiras</a>
                    </li>
                    <li>
                      <a href="/talentos">Valorizza Talentos</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.blog2}>
            <div className={styles.linha6} />
            <div className={styles.blog3}>
            <a href="https://valorizza.com.br/blog">Blog</a>
          </div>
          </div>
          <div className={styles.contato1}>
            <div className={styles.linha61} />
            <div className={styles.contato2}>
            <a href="https://valorizza-22614150.hubspotpagebuilder.com/contato">
              Contato
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talentos;
