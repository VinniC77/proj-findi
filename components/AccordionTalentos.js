import Accordion from "react-bootstrap/Accordion";
import styles from "./AccordionTalentos.module.css";

export default function AccordionTalentos() {
  return (
    <div id="pagina-carreiras" className={styles.accordion}>
      <h3 className={styles.title}>
        Com o nosso sistema de Recrutamento e Seleção
        <br />
        você conta com os melhores recursos do mercado:
      </h3>
      <Accordion className={styles.listaAccordion}>
        <Accordion.Item className={styles.accordionItem} eventKey="0">
          <Accordion.Header className={styles.accordionHeader}>Recrutamento e Seleção</Accordion.Header>
          <Accordion.Body className={styles.texto}>
          Plataformas que proporcionam estratégias de recrutamento de candidatos eficientes e ferramentas para seleção desenvolvidas junto a psicólogos e profissionais com expertise na área.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="1">
          <Accordion.Header className={styles.accordionHeader}>Banco de Currículos</Accordion.Header>
          <Accordion.Body className={styles.texto}>
          Plataformas e ferramentas para captação de currículos e
                divulgação de vagas, configurável para cada oportunidade, com
                acesso instantâneo a informações e documentos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="2">
          <Accordion.Header className={styles.accordionHeader}>CRM de Candidatos</Accordion.Header>
          <Accordion.Body className={styles.texto}>
          Gestão dos candidatos e comunicação via e-mail e WhatsApp, além do controle das fases do processo seletivo e encaminhamento dos candidatos para as vagas.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="3">
          <Accordion.Header className={styles.accordionHeader}>Gestão de Estágios</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Gestão dos estágios obrigatórios e não obrigatórios, convênios e
            contratos, geração automática de documentos, controle de seguro,
            consultas e relatórios, repositório de documentos, assinatura
            digital de documentos e atendimento à legislação.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="4">
          <Accordion.Header className={styles.accordionHeader}>Testes on-line</Accordion.Header>
          <Accordion.Body className={styles.texto}>
          DISC, Big Five, avaliação comportamental, vídeo-entrevista, testes personalizáveis, classificação e ordenamento dos candidatos de acordo com os critérios especificados pelo seu cliente para cada vaga criada.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="5">
          <Accordion.Header className={styles.accordionHeader}>Consultoria de Carreiras</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Consultoria para o desenvolvimento da Carreira do Aluno da
            Instituição, com elaboração de currículos, preparação,
            assessoramento e planejamento para encontrar oportunidades.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={`${styles.accordionItem} ${styles.ultimo}`} eventKey="6">
          <Accordion.Header className={styles.accordionHeader}>Gestão Financeira</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Gestão de contratos e convênios, apuração de valores a receber e
            pagar de todos os serviços e integração com o sistema financeiro da
            Instituição.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
