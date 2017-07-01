# PROTOCOLO BB84

O protocolo BB84 foi criado por Charles Bennett e Gilles Brassard em <b>1984</b>, daí o seu nome. Trata-se de utilizar propriedades da Mecânica Quântica para fazer uma criptografia completamente segura. Enquanto na criptografia clássica a segurança é baseada em algoritmos que não possuem solução eficiente hoje, mas que um dia poderão te, na criptografia quântica a segurança é baseada nas leis da física quântica.

A criptografia quântica resolve o problema da distribuição de chaves da criptografia clássica. 
Para isso baseia-se principalmente no princípio da incerteza quântica

#### Incerteza :
No mundo quântico é a incerteza é inerente aos sistemas
Essa incerteza não é decorrente da incapacidade dos instrumentos de medida usados
<b>Ex.: A impossibilidade de medir duas polarizações de um mesmo fóton.</b>

#### Protocolo BB84
Resolve o problema da distribuição de chaves para o uso com um algoritmo do tipo one-time pad que é absolutamente seguro
É dividido em duas etapas, na primeira usa um canal de comunicação quântico e na segunda um clássico.

#### Protocolo BB84 - Primeira Etapa :
Alice usa fótons polarizados, que podem ser medidos em 3 bases: retilínea (vertical ou horizontal), circular (à esquerda ou à direita) e diagonal (45 ou 135 graus)
Alice modula aleatoriamente os fótons para um de 4 estados: horizontal, vertical, circular à esquerda ou circular à direita
Bob escolhe aleatoriamente qual polarização usar para medir cada fóton recebido (retilínea ou circular).

* Protocolo BB84 - Primeira Etapa :

Por exemplo, Alice envia:
> ###### |-|>--<-<||<-|-|<>-|>>>|-||<-<-|

> Bob utiliza as seguintes polarizações

> ###### ooooo+oo+o+oo+++oo+++++o+++++oo+

> Bob então lê (sem erros):

> ###### <<>><-<>->|<<|-|<>-|--->-||--<<|

#### Protocolo BB84 – Segunda Etapa:

* Protocolo BB84 – Segunda Etapa:

#### Conclusão:
