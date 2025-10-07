import { Question } from '../interfaces/question';

export const questions: Question[] = [
  {
    title: 'Varejo com Prime cancelado',
    category: 'Prime',
    problem:
      'Um varejo teve seu programa Prime cancelado, mas a equipe regional, o time do Prime e o 0800 não solicitaram o cancelamento.',
    solution:
      'O cancelamento ocorre automaticamente se o status do varejo no sistema Salesforce (SF) for alterado de "Ativo" para qualquer outro. \n\nNesse caso, o varejo foi desativado temporariamente. Assim que a regularização foi feita, ele pôde assinar o programa novamente.',
    readMore: `A regional nao solicitou, o time do Prime também nao cancelou, nao foi cancelado pelo 0800
    Então quem cometeu esse "CRIME"? Mais um caso para o <bold>Projeto I.C.P</bold>
    \nSegue a dica da <bold> Investigadora Mari Carvalho: </bold>
    \nsempre que aparecer Prime cancelado que vc ja souber que nao foi ninguém da regional que solicitou.
    \nJa olha no SF como esta o histórico. Ali vc ja mata a charada.\n<bold>Se o varejo fica com status diferente no SF de “Ativo”, ele é cancelado do Prime.</bold>\n\n<bold>Esse varejo, foi desativado temporariamente. Ou seja, o status dele mudou. Por isso foi cancelado do Prime.</bold>
    <bold>Quando o varejo fez a regularização dele, ja voltou para ele assinar o programa novamente.</bold>`,

    images: ['https://i.ibb.co/kgdVnmM7/image006.jpg'],
  },
  {
    title: 'Cancelamento de simulação de contrato',
    category: 'Conecta Negócios',
    problem: 'É necessário cancelar uma simulação de contrato que ainda não foi aprovada.',
    solution:
      'Somente a pessoa que criou a simulação pode cancelá-la. Para isso, ela deve acessar o gestor de contratos, clicar em "Simulações pendentes", selecionar a simulação e clicar no ícone de lixeira. \n\nSe a pessoa que criou a simulação não estiver disponível, o cancelamento só pode ser feito via chamado.',
    readMore: `<bold>Enquanto a simulação nao for aprovada por todos, NÃO É CONTRATO.\n
    É SIMULAÇÃO.\n
    Só vira contrato, depois que for totalmente aprovada e varejo der o aceite.</bold>
    \n\nE se por um a caso, quem criou a simulação desistir de dar seguimento a criação desse contrato., e ele nao for finalizado pelos aprovadores, <bold>só o CRIADOR é que pode cancelar dentro do sistema.</bold>\n\n<bold>Segue como fazer:</bold>\n\n
    Ele irá acessar o gestor de contratos, <bold>clicar em Simulações pendentes, selecionar a simulação que deseja cancelar e clicar no ícone de lixeira no final da página. Pronto, simulação cancelada.</bold>`,

    images: ['https://i.ibb.co/JYjnJJq/image.png'],
  },
  {
    title: 'Subida de bonificação (ADHOC)',
    category: 'Prime',
    problem: 'Dúvida sobre o prazo para a subida de bonificações e quando elas são processadas.',
    solution:
      'Para que as bonificações subam e sejam processadas, é preciso enviá-las para a Mari até as 14:30h. A bonificação só será refletida no MTM de CIS no dia seguinte. \n\nSe o envio for feito após as 15h, é preciso aguardar a próxima rodada do dia seguinte para que o bônus reflita no sistema no dia posterior a essa rodada.',
  },
  {
    title: 'Diferença entre distrato e estorno de contrato',
    category: 'Conecta Negócios',
    problem:
      'Necessidade de entender a diferença entre distrato e estorno de contrato antes de solicitar.',
    solution:
      'Distrato: Cancela o contrato, mas o varejo tem 60 dias para resgatar seus pontos.\n\nEstorno: Cancela o contrato e a pontuação é perdida 100% no ato do cancelamento. O varejo perde todos os seus pontos imediatamente.',
  },
  {
    title: 'Saldo de pontos para resgate',
    category: 'Conecta Negócios',

    problem: 'Varejo reclama que ainda tem pontos, mas não consegue acessá-los para resgate.',
    solution:
      'O sistema cancela automaticamente o resgate de pontos para os varejos que não possuem saldo suficiente. Se o varejo tiver pontos suficientes para resgate, o saldo permanece disponível por 60 dias. \n\nCaso contrário, o sistema já calcula que não há pontuação suficiente para resgate e cancela a operação, para que o saldo não fique ativo no sistema por 2 meses sem ter a quantidade de pontos necessária.',
  },
  {
    title: 'Aba Prime não aparece para o varejo',
    category: 'Prime',

    problem: 'A aba para participar do programa Prime não está visível para um varejo.',
    solution:
      "Verifique a atividade do varejo no Salesforce (SF). Varejos com as seguintes classificações não são elegíveis para o programa Prime: 'ATACADO KA', 'ATACADO REGIONAL', 'HIPERMERCADO', 'LOJA CNV KA', 'LOJA DE VIZINHANCA KA', 'PDV DE FUMO DESFIADO', 'REVENDEDOR' e 'SUPERMERCADO'. Por isso, a aba não aparece para eles.",
  },
  {
    title: 'ADHOC não esta subindo',
    category: 'Prime',

    problem:
      'ADHOC não esta subindo / não esta aparecendo (Varejo pode ser NF separada / PROMOTIO).',
    solution:
      'Preciso que vocês verifiquem esses varejos que não estão subindo adhocs. Na maioria dos casos os varejos estão como NF separada dentro do SF, em Local Classification. Se ali dentro estiver NF separada, mesmo que na planilha do IC esteja NAO AUTORIZADO a adhoc não vai subir. \n\nMari, mais varejo esta recendo cis de parceria (erro do sistema que deixou) ADHOC se tiver cadastrado no SF ou no IC nota fiscal separado não vai subir OK. Varejo que recebe por promotion a mesma coisa. Não vai subir, preciso que vocês verifiquem esses casos. Enviou ADOCH, eu coloquei feito, no dia seguinte vocês verificaram que não subiu. Já olha pra ver se varejo não esta como NF Separada e Promotion.',
  },
  {
    title: 'Divergência de Bonificação no REP x Monitoramento',
    category: 'Rede',

    problem:
      'A bonificação que reflete no monitoramento é calculada em Rothmans Blue, esse é o core do programa.',
    solution:
      'Quando o vendedor ou o varejista entra na plataforma ele enxerga a quantidade de bonificações já convertida de acordo com o SKU escolhido. Dessa forma, se a escolha for Dunhill Red ele receberá um número menor de pacotes. \nCaso a escolha seja de Rothmans Global, o número de pacotes bonificado será maior. \nEssa diferença pode variar de acordo com a proporção do preço por pacote de cada UF. \n\nPor exemplo se o varejo faixa 3 tem que receber 12 pacotes de Rothmans Blue (R$ 90,00) então, de acordo com o SKU dele, ele receberia os 2 pacotes do atingimento 100% + 7 Dunhill (R$ 130,00) ou 12 Rothmans Global (R$ 75,00)',
  },
];
