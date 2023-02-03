import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./sistemas.module.css";

const Sistemas = () => {
  const router = useRouter();

  const onSistemasContainer1Click = useCallback(() => {
    router.push("/carreiras");
  }, [router]);

  const onPoliticaPrivacidadeContainerClick = useCallback(() => {
    router.push("/poltica-de-privacidade");
  }, [router]);

  const onSobreContainerClick = useCallback(() => {
    router.push("/sobre");
  }, [router]);

  const onCarreirasContainerClick = useCallback(() => {
    router.push("/carreiras");
  }, [router]);

  const onTalentosContainerClick = useCallback(() => {
    router.push("/talentos");
  }, [router]);

  const onLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onBOTOContainerClick = useCallback(() => {
    router.push("/carreiras");
  }, [router]);

  const onBOTOContainer1Click = useCallback(() => {
    router.push("/talentos");
  }, [router]);

  const onLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSobreContainer1Click = useCallback(() => {
    router.push("/sobre");
  }, [router]);

  return (
    <div className={styles.sistemas}>
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
          <div className={styles.sistema}>
          <div className={styles.col1Rodape}>
            <a href="/sistemas">Sistemas</a>
            </div>
          </div>
          <div className={styles.carreiras} onClick={onCarreirasContainerClick}>
          <div className={styles.col1Rodape}>
            <a href="/carreiras">Valorizza Carreiras</a>
            </div>
          </div>
          <div className={styles.talentos} onClick={onTalentosContainerClick}>
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
        <div className={styles.logo} onClick={onLogoContainerClick}>
          <img className={styles.grupo126Icon} alt="" src="../grupo-126.svg" />
          <img className={styles.grupo431Icon} alt="" src="../grupo-431.svg" />
          <div className={styles.sistemaDigitalInteligente}>
            Sistema Digital Inteligente
          </div>
        </div>
      </div>
      <div className={styles.cta}>
        <b className={styles.atingirEssePatamarContainer}>
          <p className={styles.centroCaxiasDo}>
            Atingir esse patamar único de performance no
          </p>
          <p className={styles.centroCaxiasDo}>
            seu negócio está ao seu alcance.
          </p>
        </b>
        <button className={styles.agende}>
          <a href="https://valorizza-22614150.hubspotpagebuilder.com/demostracao-valorizza" className={styles.agendeUmaDemonstrao}>
            Agende uma demonstração
          </a>
        </button>
      </div>
      <div className={styles.startups}>
        <div className={styles.grupo406}>
          <div className={styles.grupo191}>
            <img
              className={styles.kretosHorizontalPrancheta1Icon}
              alt=""
              src="../kretoshorizontal-prancheta-13@2x.png"
            />
            <div className={styles.aKretosContainer}>
              <p className={styles.centroCaxiasDo}>
                A Kretos é um Software prático e assertivo para encontrar o
                melhor candidato para fazer parte de sua empresa.
              </p>
              <p className={styles.centroCaxiasDo}>&nbsp;</p>
              <p className={styles.centroCaxiasDo}>
                Com testes de perfil, aptidão profissional e fit cultural, a
                Inteligência Artificial da Kretos é a aliada perfeita para sua
                empresa reduzir custos e erros no processo de contratação,
                diminuir o índice de rotatividade e se integrar com as melhores
                Universidades do Brasil.
              </p>
              <p className={styles.centroCaxiasDo}>&nbsp;</p>
              <p className={styles.centroCaxiasDo}>
                Torne os Recursos Humanos de sua empresa um setor muito mais
                estratégico e eficiente.
              </p>
            </div>
            <b className={styles.kretosAEscolha}>
              Kretos, a escolha inteligente.
            </b>
            <b className={styles.kretosSoftwareContainer}>
              <p className={styles.centroCaxiasDo}>Kretos - Software de</p>
              <p
                className={styles.centroCaxiasDo}
              >{`Recrutamento & Seleção`}</p>
            </b>
            <div className={styles.grupo263}>
              <a href="https://kretos.cc/" className={styles.kretoscc}>kretos.cc</a>
              <img
                className={styles.caminho551Icon}
                alt=""
                src="../caminho-551.svg"
              />
              <div className={styles.grupo357}>
                <a href="https://www.instagram.com/kretos.cc" className={styles.sistemastartercombr}>kretos.cc</a>
                <img
                  className={styles.iconAwesomeInstagram}
                  alt=""
                  src="../icon-awesomeinstagram.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.grupo407}>
          <div className={styles.grupo192}>
            <div className={styles.oPrincipalParceiroContainer}>
              <p className={styles.centroCaxiasDo}>
                O principal parceiro para alavancar os números e resultados na
                Industria de Produtos Configuráveis.
              </p>
              <p className={styles.centroCaxiasDo}>&nbsp;</p>
              <p className={styles.centroCaxiasDo}>
                Tenha em mãos o catálogo de produtos atualizado, com suas
                configurações e políticas comerciais, agilizando o processo de
                elaboração de orçamentos e emissão dos pedidos.
              </p>
              <p className={styles.centroCaxiasDo}>&nbsp;</p>
              <p className={styles.centroCaxiasDo}>
                O sistema também oferece portais para comercial, lojistas,
                representantes, engenharia, distribuidores e clientes, além de
                trabalhar integrado ao ERP de sua empresa.
              </p>
              <p className={styles.centroCaxiasDo}>&nbsp;</p>
              <p className={styles.centroCaxiasDo}>
                Agilize e otimize todas as etapas no seu processo de vendas.
              </p>
            </div>
            <b className={styles.eleveOsSeus}>
              Eleve os seus resultados ao próximo patamar.
            </b>
            <b className={styles.starterSistemaDeContainer}>
              <p className={styles.centroCaxiasDo}>Starter - Sistema</p>
              <p className={styles.centroCaxiasDo}>de Força de Vendas</p>
            </b>
            <div className={styles.grupo351}>
              <div className={styles.grupo358}>
                <a href="https://sistemastarter.com.br/" className={styles.sistemastartercombr}>
                  sistemastarter.com.br
                </a>
                <img
                  className={styles.caminho551Icon}
                  alt=""
                  src="../caminho-551.svg"
                />
              </div>
              <a href="https://www.instagram.com/sistemastarter" className={styles.sistemastartercombr}>sistemastarter</a>
              <img
                className={styles.iconAwesomeInstagram1}
                alt=""
                src="../icon-awesomeinstagram.svg"
              />
            </div>
            <img
              className={styles.grupo416Icon}
              alt=""
              src="../grupo-4163.svg"
            />
          </div>
        </div>
        <b className={styles.conheaTambmAs}>
          Conheça também as Startups do Grupo Valorizza
        </b>
      </div>
      <div className={styles.bignumbers}>
        <div className={styles.componente946}>
          <div className={styles.retngulo227} />
          <div className={styles.retngulo232} />
          <div className={styles.mi}>
            +<span className={styles.span}>5</span>
            <span className={styles.span1}>,</span>
            <span className={styles.span2}>6</span>mi
          </div>
          <div className={styles.oportunidadesDeEmpregosGeraContainer}>
            <p className={styles.centroCaxiasDo}>Oportunidades de</p>
            <p className={styles.centroCaxiasDo}>empregos geradas</p>
            <p className={styles.centroCaxiasDo}>pela plataforma</p>
          </div>
        </div>
        <div className={styles.componente947}>
          <div className={styles.retngulo227} />
          <div className={styles.retngulo232} />
          <div className={styles.mil}>+380mil</div>
          <div className={styles.currculosCadastrados}>
            <p className={styles.centroCaxiasDo}>Currículos</p>
            <p className={styles.centroCaxiasDo}>cadastrados</p>
          </div>
        </div>
        <div className={styles.componente948}>
          <div className={styles.retngulo227} />
          <div className={styles.retngulo232} />
          <div className={styles.mil1}>+570mil</div>
          <div className={styles.contratosDeEstgioGeradosContainer}>
            <p className={styles.centroCaxiasDo}>Contratos de</p>
            <p className={styles.centroCaxiasDo}>estágio gerados</p>
          </div>
        </div>
        <div className={styles.componente949}>
          <div className={styles.retngulo227} />
          <div className={styles.retngulo232} />
          <div className={styles.mi1}>+4mi</div>
          <div className={styles.alunosComAcessoAContainer}>
            <p className={styles.centroCaxiasDo}>Alunos com acesso</p>
            <p className={styles.centroCaxiasDo}>a nossa plataforma</p>
          </div>
        </div>
        <b className={styles.h20AnosContainer}>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.h20Anos}>{`Há 20 anos a `}</span>
            <span className={styles.valorizza}>Valorizza</span>
            <span> impulsiona carreiras e desenvolve</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span>
              empregabilidade através de nosso Sistema Digital Inteligente
            </span>
          </p>
        </b>
      </div>
      <div className={styles.conceito}>
        <img
          className={styles.grupoDeMscara6}
          alt=""
          src="../grupo-de-mscara-6@2x.png"
        />
        <div className={styles.retngulo191} />
        <div className={styles.tecnologiaAServio1}>
          Tecnologia a serviço da Realização Profissional
        </div>
        <div className={styles.aTecnologiaEstContainer}>
          <p className={styles.centroCaxiasDo}>
            A tecnologia está ao alcance de todos, sendo cada vez mais
            fundamental para a evolução profissional, conquista de
            reconhecimento e de destaque no mercado de trabalho.
          </p>
          <p className={styles.centroCaxiasDo}>&nbsp;</p>
          <p className={styles.centroCaxiasDo}>
            Nosso Sistema oferece as melhores ferramentas para o desenvolvimento
            e o encontro de profissionais que atendam as demandas das melhores
            oportunidades.
          </p>
        </div>
        <div className={styles.componente4420}>
          <a href="https://valorizza-22614150.hubspotpagebuilder.com/contato">
          <img
            className={styles.caminho564Icon}
            alt=""
            src="../caminho-5206.svg"
          />
          <div className={styles.entreEmContato}>Entre em contato</div>
          <div className={styles.div2}>→</div>
          </a>
        </div>
        <b className={styles.aTecnologiaNos}>
          A tecnologia nos oferece caminhos para mudar o mundo. Basta
          escolhermos as ferramentas certas.
        </b>
      </div>
      <div className={styles.sistemas2}>
        <div className={styles.carreiras1}>
          <div className={styles.grupo348}>
            <div className={styles.boto} onClick={onBOTOContainerClick}>
              <div className={styles.entreEmContato}>Conheça nosso Sistema</div>
              <div className={styles.div3}>→</div>
            </div>
            <div className={styles.sistemaCompletoParaContainer}>
              <p className={styles.centroCaxiasDo}>
                Sistema completo para planejamento, desenvolvimento e gestão da
                carreira e da empregabilidade de seus alunos.
              </p>
              <p className={styles.centroCaxiasDo}>
                Conta com portais para alunos, professores e empresas, módulos
                para gestão de estágio, monitoria, mentoria, consultoria de
                carreira, pesquisa e extensão, além de ferramentas
                administrativas.
              </p>
              <p className={styles.centroCaxiasDo}>&nbsp;</p>
              <p className={styles.centroCaxiasDo}>
                Promova uma formação orientada e prepare seus alunos para
                atender as demandas e superar os desafios do mercado de
                trabalho. Sua Instituição será referência na formação de
                profissionais com experiência e de altíssima qualidade.
              </p>
            </div>
            <b className={styles.aproximeSuaInstituioContainer}>
              <p
                className={styles.centroCaxiasDo}
              >{`Aproxime sua Instituição de Ensino `}</p>
              <p className={styles.centroCaxiasDo}>
                e seu aluno do mercado de trabalho.
              </p>
            </b>
            <img
              className={styles.grupo426Icon}
              alt=""
              src="../grupo-426.svg"
            />
          </div>
        </div>
        <div className={styles.talentos1}>
          <div className={styles.texto}>
            <div className={styles.sistemaDeRecrutamentoContainer}>
              <p className={styles.centroCaxiasDo}>
                Sistema de Recrutamento e Seleção completo para Agências de
                Recursos Humanos e Agentes de Integração.
              </p>
              <p className={styles.centroCaxiasDo}>
                Possui portais para candidatos e empresas, testes e avaliações
                online, ranqueamento de candidatos, banco de currículos,
                consultoria de carreira, gestão de estágios além de ferramentas
                administrativas.
              </p>
              <p className={styles.centroCaxiasDo}>&nbsp;</p>
              <p className={styles.centroCaxiasDo}>
                Encontre o melhor talento para cada oportunidade, as melhores
                vagas para seus candidatos e otimize seus processos e garanta
                resultados eficientes. Possui módulos para gestão e
                desenvolvimento de empregabilidade.
              </p>
            </div>
            <b className={styles.encontreOsMelhores}>
              Encontre os melhores profissionais para cada oportunidade.
            </b>
            <img
              className={styles.grupo430Icon}
              alt=""
              src="../grupo-430.svg"
            />
          </div>
          <div className={styles.boto1} onClick={onBOTOContainer1Click}>
            <div className={styles.entreEmContato}>Conheça nosso Sistema</div>
            <div className={styles.div3}>→</div>
          </div>
        </div>
      </div>
      <div className={styles.diferenciais}>
        <div className={styles.inovacao}>
          <div className={styles.retngulo233} id="inova" />
          <b className={styles.inovao}>
          <svg className={styles.simbolo} xmlns="http://www.w3.org/2000/svg"  width="12px" height="19px" viewBox="0 0 12.782 19.816">
                <path id="Caminho_633" data-name="Caminho 633" d="M555.282,467.255v9.307L542.5,481.816v-5.255l11.985-4.653L542.5,467.255V462Z" transform="translate(-542.5 -462)" fill="#bee545"/>
              </svg>
              Competitividade</b>
          <div className={styles.osRecursosOferecidos}>
            Os recursos oferecidos pelo sistema proporcionam diferenciais e
            otimizações que irão destacar os resultados que o seu negócio obtém
            perante o mercado.
          </div>
        </div>
        <div className={styles.inovacao1}>
        <div className={styles.inovacao}>
          <div className={styles.retngulo233} />
          <b className={styles.inovao}>
          <svg className={styles.simbolo} xmlns="http://www.w3.org/2000/svg"  width="12px" height="19px" viewBox="0 0 12.782 19.816">
                <path id="Caminho_633" data-name="Caminho 633" d="M555.282,467.255v9.307L542.5,481.816v-5.255l11.985-4.653L542.5,467.255V462Z" transform="translate(-542.5 -462)" fill="#bee545"/>
              </svg>
              Rentabilidade</b>
          <div className={styles.aPartirDa}>
            A partir da otimização de processos, geramos economia financeira e
            de tempo, além de trazer novas alternativas para capitalizar
            operações.
          </div>
          </div>
        </div>
        <div className={styles.inovacao2}>
        <div className={styles.inovacao}>
          <div className={styles.retngulo233} />
          <b className={styles.inovao}>
          <svg className={styles.simbolo} xmlns="http://www.w3.org/2000/svg"  width="12px" height="19px" viewBox="0 0 12.782 19.816">
                <path id="Caminho_633" data-name="Caminho 633" d="M555.282,467.255v9.307L542.5,481.816v-5.255l11.985-4.653L542.5,467.255V462Z" transform="translate(-542.5 -462)" fill="#bee545"/>
              </svg>
            Transformação Social</b>
          <div className={styles.possibiliteOEncontro}>
            Possibilite o encontro do usuário com a sua vocação e gere
            transformações reais na trajetória dos profissionais, empresas,
            instituições e do mercado como um todo.
          </div>
        </div>
        </div>
      </div>
      <div className={styles.heroSection}>
        <img className={styles.grupo4Icon} alt="" src="../grupo-4@2x.png" />
        <b className={styles.plataformasQueDesenvolvemAContainer}>
          <p className={styles.centroCaxiasDo}>Plataformas que</p>
          <p className={styles.centroCaxiasDo}>desenvolvem a</p>
          <p className={styles.centroCaxiasDo}>empregabilidade</p>
        </b>
        <div className={styles.componente451}>
        <a className={styles.saibaMais} href="#inova">
            <div className={styles.saibaMais1}>Confira como isso é possível</div>
            <div className={styles.div6}>→</div>
          </a>
        </div>
        <div className={styles.sistemaCompletoCom}>
          Sistema completo com ferramentas para impulsionar o potencial que
          existe dentro de cada pessoa.
        </div>
        <div className={styles.retngulo128} />
      </div>
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
        <a href="/">
        <img
          className={styles.logoIcon}
          alt=""
          src="../logo2.svg"
        />
        </a>
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
  );
};

export default Sistemas;
