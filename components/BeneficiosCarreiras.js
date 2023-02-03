import Accordion from "react-bootstrap/Accordion";
import styles from "./BeneficiosCarreiras.module.css";

export default function BeneficiosCarreiras() {
  return (
    <div id="pagina-carreiras" className={styles.accordion}>
      <h3 className={styles.title}>
        Conheça mais benefícios de nosso Sistema
        <br />
        para sua Instituição de Ensino:
      </h3>
      <Accordion className={styles.listaAccordion}>
        <Accordion.Item className={styles.accordionItem} eventKey="0">
          <Accordion.Header className={styles.accordionHeader}>Aumente a empregabilidade de seus alunos.</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Proporcione ao seu aluno contato com o mercado de trabalho, adicionando experiências reais no seu currículo. Através da plataforma, sua Instituição aproxima o aluno das oportunidades otimizando todos os processos da oferta de vagas à gestão dos contratos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="1">
          <Accordion.Header className={styles.accordionHeader}>Forneça mais tempo para sua equipe.</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Com o Sistema Valorizza sua Instituição reduz as horas gastas pelos professores em atividades extraclasse, a demanda por atendimento a alunos e empresas e os trabalhos manuais em todos os processos. Além disso, todos os contratos atendem à legislação.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="2">
          <Accordion.Header className={styles.accordionHeader}>Otimize os processos no setor de Estágios</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Diminua a burocracia e agilize processos internos, automatizando e simplificando as etapas dos processos no setor de Estágios desde a validação das informações, a gestão e emissão de relatórios e contratos. Reduza em até 80% o retrabalho.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="3">
          <Accordion.Header className={styles.accordionHeader}>Uma importante ferramenta para reduzir a evasão universitária.</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Com o Sistema Valorizza Carreiras sua Instituição participa proativamente da construção da jornada profissional do aluno e a potencializar através de ferramentas que contribuem de forma fundamental para prepará-lo para atender as demandas do mercado de trabalho. Assim, o aluno tem mais motivos para manter e fortalecer seu vínculo com a Instituição, reduzindo as chances de evasão. Mais do que isso, o aluno percebe a Instituição como caminho para a inserção no mercado de trabalho.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="4">
          <Accordion.Header className={styles.accordionHeader}>Desenvolva novas fontes de receita e reduza os custos.</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Além de otimizar os processos gerando economia de tempo e redução de custos, o Sistema permite que sua Instituição gere novas formas de receitas ao atuar como agente de integração ou oferecendo novos cursos e serviços.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="5">
          <Accordion.Header className={styles.accordionHeader}>Firme parcerias valiosas com o mercado.</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Os portais e espaços no Sistema voltados para o setor empresarial o aproximam de sua Instituição estreitando importantes laços e gerando oportunidades de inserção no mercado para seus alunos, trabalhando diretamente para o aumento de sua empregabilidade.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="6">
          <Accordion.Header className={styles.accordionHeader}>Fortaleça a marca da sua Instituição.</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Através de um sólido Programa de Carreiras sua Instituição de Ensino passa a ser percebida pela comunidade como referência em desenvolvimento de empregabilidade nos alunos e na formação de profissionais de excelência.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={`${styles.accordionItem} ${styles.ultimo}`} eventKey="7">
          <Accordion.Header className={styles.accordionHeader}>
            Amplie a fidelização dos seus alunos e egressos.
          </Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Ao proporcionar um desenvolvimento profissionalizante sua Instituição de Ensino promove transformações importantes na trajetótia de seus alunos, ampliando seu engajamento e a valorização do vínculo formado.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
