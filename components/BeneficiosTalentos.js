import Accordion from "react-bootstrap/Accordion";
import styles from "./BeneficiosTalentos.module.css";

export default function BeneficiosTalentos() {
  return (
    <div id="pagina-carreiras" className={styles.accordion}>
      <h3 className={styles.title}>
        Conheça mais benefícios de nosso Sistema
        <br />
        para sua Instituição de Ensino:
      </h3>
      <Accordion className={styles.listaAccordion}>
        <Accordion.Item className={styles.accordionItem} eventKey="0">
          <Accordion.Header className={styles.accordionHeader}>Agilidade nos processos e econimia de tempo.</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Ganhe tempo de velocidade na execução das etapas dos processos de Recrutamento e Seleção e em todos os procedimentos administrativos e burocráticos da sua empresa, desde a gestão à geração de documentação legal e assinatura de documentos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="1">
          <Accordion.Header className={styles.accordionHeader}>Facilidade na captação de currículos.</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Otimize seu processo de recrutamento e armazenamento de currículos através de estratégias digitais, enriquecendo seu banco de talentos e torne-se referência em encontrar os melhores profissionais para cada oportunidade.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="2">
          <Accordion.Header className={styles.accordionHeader}>Automação no processo de Seleção.</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Uso de tecnologias para ajudar na gestão de candidatos e avaliações de perfil aumentando a eficiência do processo, reduzinco o tempo gasto em tarefas manuais e melhorando a precisão na seleção de candidadtos e estagiários.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="3">
          <Accordion.Header className={styles.accordionHeader}>Controle da jornada do processo seletivo.</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Facilita a gestão e monitoramento das etapdas do processo, desde a definição dos critérios de seleção até a contratação do candidato, realizando de forma eficiente e transparente para garantir que o processo seja justo e objetivo para todos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="4">
          <Accordion.Header className={styles.accordionHeader}>Centralização das informações dos candidadtos e estagiários.</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Armazene e faça a gestão das informações dos candidadtos e estagiários em um só ambiente, com muito mais agilidade e segurança.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItem} eventKey="5">
          <Accordion.Header className={styles.accordionHeader}>Firme parcerias valiosas com o mercado.</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Os portais e espaços no Sistema voltados para o setor empresarial o aproximam de sua Instituição estreitando importantes laços e gerando oportunidades de inserção no mercado para seus alunos, trabalhando diretamente para o aumento de sua empregabilidade.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={`${styles.accordionItem} ${styles.ultimo}`} eventKey="6">
          <Accordion.Header className={styles.accordionHeader}>Assertividade na apuração dos valores dos contratos ativos.</Accordion.Header>
          <Accordion.Body className={styles.texto}>
            Através de um sólido Programa de Carreiras sua Instituição de Ensino passa a ser percebida pela comunidade como referência em desenvolvimento de empregabilidade nos alunos e na formação de profissionais de excelência.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
