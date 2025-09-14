import { Question } from '../interfaces/question';

export const questions: Question[] = [
  {
    title: 'Varejo com Prime cancelado',
    problem:
      'Um varejo teve seu programa Prime cancelado, mas a equipe regional, o time do Prime e o 0800 não solicitaram o cancelamento.',
    solution:
      'O cancelamento ocorre automaticamente se o status do varejo no sistema Salesforce (SF) for alterado de "Ativo" para qualquer outro. Nesse caso, o varejo foi desativado temporariamente. Assim que a regularização foi feita, ele pôde assinar o programa novamente.',
  },
  {
    title: 'Cancelamento de simulação de contrato',
    problem: 'É necessário cancelar uma simulação de contrato que ainda não foi aprovada.',
    solution:
      'Somente a pessoa que criou a simulação pode cancelá-la. Para isso, ela deve acessar o gestor de contratos, clicar em "Simulações pendentes", selecionar a simulação e clicar no ícone de lixeira. Se a pessoa que criou a simulação não estiver disponível, o cancelamento só pode ser feito via chamado.',
  },
  {
    title: 'Subida de bônus (ADHOC)',
    problem: 'Dúvida sobre o prazo para a subida de bônus e quando eles aparecem no sistema.',
    solution:
      'Para que as bonificações subam e sejam processadas, é preciso enviá-las para o time da Ipremios até as 15h em ponto. A bonificação só será refletida no MTM de CIS no dia seguinte. Se o envio for feito após as 15h, é preciso aguardar a próxima rodada do dia seguinte para que o bônus reflita no sistema no dia posterior a essa rodada.',
  },
  {
    title: 'Diferença entre distrato e estorno de contrato',
    problem:
      'Necessidade de entender a diferença entre distrato e estorno de contrato antes de solicitar.',
    solution:
      'Distrato: Cancela o contrato, mas o varejo tem 60 dias para resgatar seus pontos.\n    Estorno: Cancela o contrato e a pontuação é perdida 100% no ato do cancelamento. O varejo perde todos os seus pontos imediatamente.',
  },
  {
    title: 'Saldo de pontos para resgate',
    problem: 'Varejo reclama que ainda tem pontos, mas não consegue acessá-los para resgate.',
    solution:
      'O sistema cancela automaticamente o resgate de pontos para os varejos que não possuem saldo suficiente. Se o varejo tiver pontos suficientes para resgate, o saldo permanece disponível por 60 dias. Caso contrário, o sistema já calcula que não há pontuação suficiente para resgate e cancela a operação, para que o saldo não fique ativo no sistema por 2 meses sem ter a quantidade de pontos necessária.',
  },
  {
    title: 'Aba Prime não aparece para o varejo',
    problem: 'A aba para participar do programa Prime não está visível para um varejo.',
    solution:
      "Verifique a atividade do varejo no Salesforce (SF). Varejos com as seguintes classificações não são elegíveis para o programa Prime: 'ATACADO KA', 'ATACADO REGIONAL', 'HIPERMERCADO', 'LOJA CNV KA', 'LOJA DE VIZINHANCA KA', 'PDV DE FUMO DESFIADO', 'REVENDEDOR' e 'SUPERMERCADO'. Por isso, a aba não aparece para eles.",
  },
];
