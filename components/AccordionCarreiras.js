import Accordion from "react-bootstrap/Accordion";
import styles from "./AccordionCarreiras.module.css";

export default function AccordionCarreiras() {
  return (
    <div id="beneficios-carreiras" className={styles.accordion}>
      <h3 className={styles.title}>
        O que a sua Instituição de Ensino pode oferecer
        <br />
        com os Sistemas Valorizza Carreiras:
      </h3>
      <Accordion className={styles.listaAccordion}>
        <Accordion.Item className={styles.accordionItem} eventKey="0">
          <Accordion.Header className={styles.accordionHeader}>Website de Carreiras</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Página central do seu programa de Carreiras: canal de divulgação das
            informações sobre o programa, de oportunidades e acesso aos portais
            de alunos, professores e empresas.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="1">
          <Accordion.Header className={styles.accordionHeader}>Portais para todos os públicos</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Portais específicos para alunos, professores, empresas e agentes
            integradores gerirem suas informações e utilizarem o Sistema de
            Carreiras
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="2">
          <Accordion.Header className={styles.accordionHeader}>Empregabilidade</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Espaço para o aluno acompanhar suas qualificações e atributos,
            comparar às demandas do mercado e alinhar sua formação para
            supri-las.
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
          <Accordion.Header className={styles.accordionHeader}>Monitorias</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Programa de Monitorias voluntárias e remuneradas de aluno para
            aluno, com supervisão dos professores. Gerencie seus processos,
            editais e seleções.
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
        <Accordion.Item className={styles.accordionItem} eventKey="6">
          <Accordion.Header className={styles.accordionHeader}>Mentorias</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Programa de Mentoria para alunos junto a profissionais de áreas
            diversas, proporcionando orientação, instrução, networking e outras
            estratégias que auxiliem na preparação do aluno para entrada no
            mercado de trabalho.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="7">
          <Accordion.Header className={styles.accordionHeader}>
            Projetos Voluntariado, Extensão e Pesquisa
          </Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Gestão completa dos projetos de Pesquisa, Extensão e Voluntariado
            com gerenciamento de seus processos, editais e seleções.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="8">
          <Accordion.Header className={styles.accordionHeader}>Gestão Financeira</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Gestão de contratos e convênios, apuração de valores a receber e
            pagar de todos os serviços e integração com o sistema financeiro da
            Instituição.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={`${styles.accordionItem} ${styles.ultimo}`} eventKey="9">
          <Accordion.Header className={styles.accordionHeader}>Indicadores e KPIs</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Gerenciamento e acompanhamento do nível de desempenho para alunos e
            dos programas implementados.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
