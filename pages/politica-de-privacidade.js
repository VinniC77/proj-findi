import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./politica-de-privacidade.module.css";

const PoliticaDePrivacidade = () => {
  const router = useRouter();

  const onSobreContainerClick = useCallback(() => {
    router.push("/sobre");
  }, [router]);

  const onSistemaContainerClick = useCallback(() => {
    router.push("/sistemas");
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

  const onLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.polticaDePrivacidade}>
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
          <div className={styles.politicaPrivacidade}>
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
          <div className={styles.sobre1}>
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
      <div className={styles.body}>
        <div className={styles.aPresentePolticaContainer}>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              A presente Política de Privacidade VALORIZZA está em vigor a
              partir de 17 de fevereiro de 2021 com a finalidade de confirmar o
              compromisso com a privacidade e a proteção dos dados coletados dos
              USUÁRIOS em seu website oficial, disponível em
              www.valorizza.com.br, estabelecendo as regras sobre a coleta,
              registro, armazenamento, uso, compartilhamento, tratamento,
              enriquecimento e eliminação dos dados coletados, de acordo com as
              leis em vigor.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>{` `}</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b>1. Consentimento</b>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              Como condição para acesso e uso das funcionalidades do website, o
              USUÁRIO declara que fez a leitura completa e atenta das regras
              deste documento, estando plenamente ciente e conferindo assim sua
              livre e expressa concordância com os termos aqui estipulados, pelo
              que o presente serve como CONSENTIMENTO. Caso não esteja de acordo
              com estas diretivas, deverá descontinuar o seu acesso.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>{` `}</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b>2. Informações coletadas e formas de coleta</b>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              A VALORIZZA terá informações sobre você somente se (a) você tiver
              fornecido as informações por conta própria, (b) a VALORIZZA
              coletou automaticamente as informações ou (c) a VALORIZZA obteve
              as informações de terceiros. A seguir descrevemos os diversos
              cenários que se enquadram em cada uma dessas três categorias e as
              informações coletadas em cada um.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              Informações que você nos fornece
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b className={styles.i}>I.</b>
            <span className={styles.aPresentePoltica}>
              {" "}
              Informações para contato: quando você preenche formulários
              disponíveis no website, solicitamos informações como seu nome,
              e-mail, telefone e empresa.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b className={styles.i}>II.</b>
            <span className={styles.aPresentePoltica}>
              {" "}
              Interações com a VALORIZZA: podemos gravar, analisar e usar suas
              interações conosco, incluindo conversas por e-mail, telefone e
              chat, para melhorar nossas interações com você e outros clientes.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              Informações que coletamos automaticamente
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b className={styles.i}>III.</b>
            <span className={styles.aPresentePoltica}>
              {" "}
              Informações de navegadores, dispositivos e servidores: quando você
              visita nosso website, coletamos informações que os navegadores da
              Web, dispositivos móveis e servidores disponibilizam, tais como o
              endereço de protocolo IP, tipo de navegador, idioma de
              preferência, fuso horário, URL de referência, data e hora de
              acesso, sistema operacional, fabricante do dispositivo móvel e
              informações da rede móvel. Incluímos essas informações em nossos
              arquivos de registro para entender melhor os visitantes de nosso
              website.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b className={styles.i}>IV.</b>
            <span className={styles.aPresentePoltica}>
              {" "}
              Informações de cookies: utilizamos cookies, beacons, tags, scripts
              e outras tecnologias semelhantes para identificar visitantes,
              rastrear a navegação no site, coletar informações demográficas
              sobre visitantes e entender a captação de visitantes através do
              rastreamento de suas atividades em nosso website.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              Informações que coletamos de terceiros
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b className={styles.i}>V.</b>
            <span className={styles.aPresentePoltica}>
              {" "}
              Informações de nossos parceiros e provedores de serviços: se você
              entrar em contato com qualquer um dos nossos parceiros ou, de
              outra forma, expressar seu interesse por qualquer um dos nossos
              produtos ou serviços a eles, o parceiro poderá passar seu nome,
              endereço de e-mail e outras informações para a VALORIZZA.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b className={styles.i}>VI.</b>
            <span className={styles.aPresentePoltica}>
              {" "}
              Informações de sites de mídia social e outras fontes disponíveis
              publicamente: quando você interagir ou engajar-se conosco em sites
              de mídias sociais, como Facebook, Twitter, Google e Instagram, por
              meio de publicações, comentários, perguntas e outras interações,
              poderemos coletar tais informações publicamente disponíveis,
              incluindo informações de perfil, para que possamos entrar em
              contato com você. Devemos dizer que uma vez coletadas, essas
              informações poderão permanecer conosco, mesmo se você as excluir
              dos sites de mídia social. A VALORIZZA também poderá adicionar e
              atualizar informações sobre você a partir de outras fontes
              disponíveis publicamente.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b>3. Finalidades para o uso das informações</b>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              Podemos utilizar quaisquer informações coletadas relacionadas à
              presente Política de Privacidade, incluindo dados pessoais, na
              medida do necessário, para:
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b className={styles.i}>I.</b>
            <span className={styles.aPresentePoltica}>
              {" "}
              Estabelecer comunicação com você (por exemplo, através de e-mail)
              sobre os produtos ou serviços para os quais você se inscreveu;
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b className={styles.i}>II.</b>
            <span className={styles.aPresentePoltica}>
              {" "}
              Manter você informado sobre novos produtos e serviços, eventos
              futuros, ofertas, promoções e outras informações que acreditamos
              ser de seu interesse;
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b className={styles.i}>III.</b>
            <span className={styles.aPresentePoltica}>
              {" "}
              Para analisar tendências, administrar nosso website e rastrear as
              navegações de visitantes a fim de melhor ajudá-los e entender o
              que eles procuram.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b>4. Tratamento das informações</b>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              As informações coletadas relacionadas à presente Política de
              Privacidade são armazenadas e tratadas em banco de dados
              estabelecidos no Brasil. São processadas, monitoradas e avaliadas,
              para efeitos de análise de dados, moderação de conteúdos e
              melhorias dos serviços oferecidos.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b>5. Bases legais para coleta, uso e divulgação de informações</b>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              As atividades de coleta e processamento de informações são
              tipicamente baseadas em (I) um ou mais interesses legítimos da
              VALORIZZA, ou (ii) seu consentimento.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              Não revelaremos seus dados pessoais e/ou informações sobre as suas
              atividades como USUÁRIO, exceto: (I) quando exigido por lei,
              regulamento, intimação ou similar, ou procedimento legal, ou
              pedido judicial ou governamental, (II) se a revelação for
              necessária para investigar ou nos defender contra quaisquer
              reclamações ou alegações de USUÁRIO ou de terceiros, (III) para
              proteger o sistema, a segurança de outras pessoas e para
              investigar fraudes.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              A presente Política de Privacidade está em consonância com a
              legislação brasileira e especialmente a Lei Geral de Proteção de
              Dados, Lei nº 13.709/2018.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b>6. Responsável pela proteção de dados</b>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              Em atenção à previsão do art. 5º, VIII da LGPD (Lei 13.709/2018),
              nomeamos um Responsável pela proteção de dados para supervisionar
              nosso gerenciamento de suas informações pessoais de acordo com
              esta Política de Privacidade. Se você tiver dúvidas ou
              preocupações sobre nossas práticas de privacidade com relação às
              suas informações pessoais ou se quiser alterar, revogar o uso ou
              excluir os seus dados que sejam passíveis de exclusão, você poderá
              entrar em contato com nosso responsável pela proteção de dados.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              Nome: Rosecler Maria Rodrigues
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              E-mail: dpo@valorizza.com.br
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>{` `}</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b>7. Widgets de mídia social</b>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              Nosso website inclui widgets de mídia social, com interações no
              Facebook, Linkedin, YouTube entre outros, que permitem
              compartilhar artigos e outras informações. Esses widgets podem
              coletar seu endereço IP, quais páginas você está visitando em
              nosso site e podem configurar um cookie para permitir que os
              widgets funcionem adequadamente. Suas interações com esses widgets
              são regidas pelas políticas de privacidade das empresas que os
              fornecem.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b>8. Conformidade com esta Política de Privacidade</b>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              Nós fazemos todos os esforços, incluindo análises periódicas, para
              assegurar que as informações pessoais fornecidas por você sejam
              usadas em conformidade com esta Política de Privacidade. Se você
              tiver alguma dúvida sobre o nosso cumprimento desta Política de
              Privacidade ou sobre a maneira com que suas informações pessoais
              são tratadas, entre em contato com o nosso responsável pela
              proteção de dados. Entraremos em contato com você e, se
              necessário, coordenaremos com as autoridades reguladoras
              apropriadas para tratar de suas preocupações de maneira eficaz.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>{` `}</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b>9. Notificação de alterações</b>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              Estamos sempre melhorando nossa Política e as mudanças serão
              refletidas nesta página. Então, antes de fornecer seus dados
              pessoais, dê uma olhadinha aqui. Quando publicarmos alterações na
              Política, atualizaremos a data em que a última alteração foi
              publicada.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              Lembre-se: Ao continuar a acessar nosso website depois que tais
              alterações passarem a valer, você estará concordando em estar
              vinculado à nova versão da Política.
            </span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>{` `}</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>&nbsp;</span>
          </p>
          <p className={styles.centroCaxiasDo}>
            <b>10. Foro</b>
          </p>
          <p className={styles.centroCaxiasDo}>
            <span className={styles.aPresentePoltica}>
              Fica eleito o foro da Comarca de Caxias do Sul, RS, para dirimir
              questões decorrentes deste termo.
            </span>
          </p>
        </div>
        <b className={styles.polticaDePrivacidade2}>
          POLÍTICA DE PRIVACIDADE VALORIZZA
        </b>
      </div>
      <div className={styles.hero}>
        <div className={styles.retngulo128} />
        <img className={styles.grupo15Icon} alt="" src="../grupo-15@2x.png" />
        <div className={styles.polticaDePrivacidade3}>
          Política de Privacidade
        </div>
      </div>
      <div className={styles.navBar}>
        <img
          className={styles.logoIcon}
          alt=""
          src="../logo.svg"
          onClick={onLogoClick}
        />
        <div className={styles.sobre4}>
          <div className={styles.linha2} />
          <div className={styles.sobre5}>
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
        <div className={styles.contato1}>
          <div className={styles.linha6} />
          <div className={styles.contato2}>
            <a href="https://valorizza-22614150.hubspotpagebuilder.com/contato">
              Contato
            </a>
          </div>
        </div>
        <div className={styles.blog2}>
          <div className={styles.linha61} />
          <div className={styles.blog3}>
            <a href="https://valorizza.com.br/blog">Blog</a>
          </div>
        </div>
        <div className={styles.socialMedia}>
        <a href="https://www.instagram.com/valorizza_/"><svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" viewBox="0 0 22.5 22.5"><path d="M24.085,6.66A6.46,6.46,0,0,0,19.322,4.8H9.978A6.214,6.214,0,0,0,3.4,11.378v9.3a6.527,6.527,0,0,0,1.905,4.854A6.62,6.62,0,0,0,10.023,27.3h9.254a6.7,6.7,0,0,0,4.763-1.769,6.494,6.494,0,0,0,1.86-4.808V11.378A6.5,6.5,0,0,0,24.085,6.66ZM23.9,20.722a4.433,4.433,0,0,1-1.316,3.311,4.689,4.689,0,0,1-3.311,1.179H10.023a4.689,4.689,0,0,1-3.311-1.179,4.56,4.56,0,0,1-1.225-3.357v-9.3A4.522,4.522,0,0,1,6.711,8.066a4.613,4.613,0,0,1,3.311-1.179h9.345a4.522,4.522,0,0,1,3.311,1.225A4.681,4.681,0,0,1,23.9,11.378ZM14.65,10.2A5.806,5.806,0,1,0,20.456,16,5.818,5.818,0,0,0,14.65,10.2Zm0,9.526A3.72,3.72,0,1,1,18.37,16,3.737,3.737,0,0,1,14.65,19.724ZM20.683,8.747A1.316,1.316,0,1,0,22,10.062,1.315,1.315,0,0,0,20.683,8.747Z" transform="translate(-3.4 -4.8)"/></svg></a>
        <a href="https://www.linkedin.com/company/valorizza/"><svg xmlns="http://www.w3.org/2000/svg" width="22.359" height="22.5" viewBox="0 0 22.359 22.5"><path d="M380.705,5650H361.651a1.632,1.632,0,0,0-1.651,1.611v19.277a1.632,1.632,0,0,0,1.651,1.611h19.054a1.634,1.634,0,0,0,1.653-1.611v-19.277A1.633,1.633,0,0,0,380.705,5650Zm-13.928,18.835H363.4v-10.159h3.377Zm-1.688-11.548h-.022a1.93,1.93,0,1,1,.022,0Zm13.865,11.548h-3.377V5663.4c0-1.366-.489-2.3-1.71-2.3a1.849,1.849,0,0,0-1.733,1.235,2.311,2.311,0,0,0-.111.823v5.675h-3.377s.044-9.208,0-10.16h3.377v1.438a3.354,3.354,0,0,1,3.044-1.677c2.222,0,3.888,1.452,3.888,4.573v5.826Z" transform="translate(-360 -5650)"/></svg></a>
        <a href="https://www.youtube.com/@ValorizzaBr"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="22.5" viewBox="0 0 32 22.5"><path d="M471.331,5654.77a4.019,4.019,0,0,0-2.829-2.847c-2.5-.673-12.5-.673-12.5-.673s-10.007,0-12.5.673a4.018,4.018,0,0,0-2.829,2.847,45.25,45.25,0,0,0,0,15.5,3.958,3.958,0,0,0,2.829,2.8c2.495.673,12.5.673,12.5.673s10.007,0,12.5-.673a3.958,3.958,0,0,0,2.829-2.8,45.256,45.256,0,0,0,0-15.5Zm-18.6,12.51v-9.515l8.364,4.758Z" transform="translate(-440 -5651.25)"/></svg></a>
        </div>
        <button className={styles.botaoAgendar1}>
            <a href="https://valorizza-22614150.hubspotpagebuilder.com/demostracao-valorizza" className={styles.agendeUmaDemonstrao}>
              Agende uma demonstração
            </a>
        </button>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidade;
