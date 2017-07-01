# Estudos sobre Arduino

[!](https://media.giphy.com/media/OO46pPJjMtA88/source.gif)

**O que é Arduino – Introdução**

> Arduino é um kit de desenvolvimento voltado para iniciantes. 
É composto por hardware e software e facilita a compreensão e o aprendizado de fundamentos importantes de eletrônica e de programação.

**Hardware:** O hardware do Arduino é uma pequena placa com entradas e saídas. É composta por um microcontrolador da série Atmel, que muda em cada modelo de Arduino, um gravador USB e os reguladores de tensão. Formando uma plataforma pronta e robusta para o desenvolvimento de pequenas aplicações e testes de conceito.

**Software:** O software é a chave do sucesso dessa plataforma. Compilada em C/C++ uma grande biblioteca, orientada a objetos, abstrai de forma simples e compacta a maioria das funcionalidades que precisamos para implementar pequenos protótipos, como:

* Controle de entradas e saídas digitais (I/O)

* Leitura dos conversores analógico-digitais (A/D)

* Geração de sinais modulados em largura (PWM)

* Controle de atuadores, tais como: motor de passo, servo motores.

* Comunicação serial, I2C, 1Wire e SPI

**Arduino – Portas e Saídas Digitais**

Para criar interface externa com motores, relés, lâmpadas, e válvulas vamos precisar entender melhor as saídas digitais. Nesta aula vamos aprender o que elas são e como programa-las. Também iremos fazer um pequeno projeto: Semáforo com Arduino, que é apresentado em vídeo no final da página.

**O que são Portas Digitais?**

Portas digitais são aquelas que podem assumir apenas dois níveis lógicos bem definidos, nível alto e baixo. Normalmente, o nível lógico alto é a tensão de alimentação do Arduino (5V ou 3.3V, dependendo do modelo) e nível lógico baixo é 0V (pino conectado ao GND). As portas digitais são comumente chamadas de I/O ports, que em inglês significa “portas de entrada e saída”. Esse nome vem do fato que uma porta digital pode assumir dois possíveis modos de operação, o modo de entrada e o modo de saída.

**Portas no modo de Saída:**

Quando setamos uma porta digital para o modo de saída podemos controlar qual o estado lógico que ela  apresenta. Tornando possível, assim, controlar dispositivos externos como lâmpadas, atuadores, relés etc. É importante lembrar que jamais poderemos exceder a corrente máxima de saída, que é aproximadamente 20mA. Se colocarmos cargas que drenam mais iremos danificar o pino de saída e, nos casos em que necessitamos de mais corrente, é necessário o uso de algum buffer digital de potência com transistores ou portas lógicas.

**Portas no modo de Entrada:**

As portas digitais no modo de entrada serão abordadas na nossa próxima aula. Mas, basicamente, são portas em que podemos conectar um dispositivo externo e ler, no código, qual o nível presente. Utilizaremos essas portas para ler sensores digitais como botões, chaves fim de curso, sensores de nível ou até protocolos de comunicação.

**Como eu configuro o modo?**

Para configurar o modo você irá utilizar a função pinMode(PINO, MODO). Substitua PINO pelo número da porta e em MODO defina o modo para entrada (INPUT) ou saída (OUTPUT). Veja dois exemplos abaixo:

> Configurando o pino 14 como saída:

>  pinMode(14, OUTPUT);
 
> Configurando o pino 21 como entrada:

>  pinMode(21, INPUT);
  
**Como eu defino o estado de uma Saída?**

Para configurar o estado lógico de um pino em modo saída iremos utilizar a função digitalWrite(PINO, ESTADO). Substitua PINO pelo pino de interesse e ESTADO por nível alto (HIGH) ou nível baixo (LOW). Veja dois exemplos abaixo:

> Ligando o pino 12:

> digitalWrite(12, HIGH);

> Desligado o pino 9:

> digitalWrite(9, LOW);

<b>OBS: Para utilizar digitalWrite você previamente deve utilizar pinMode para setar o pino como saída!</b>

**Projeto Semáforo**

Neste pequeno projeto irei demonstrar o uso de saídas digitais para a criação de um pequeno semáforo. O exemplo é simples mas coloca em prática todo o conteúdo presente nesse documento.

O semáforo será constituído de 3 leds (vermelho, amarelo e verde), conectados nas portas 48, 50, e 52 de um Arduino Mega. Qualquer Arduino pode ser usado, contanto que alteremos as portas para valores compatíveis com os disponíveis na placa.  O esquemático do circuito montando por ser visto a seguir:

![](http://allelectronics.com.br/wp-content/uploads/2014/07/ledds.png)

Cada led está conectado a uma porta do Arduino utilizando um resistor de 220Ω para adequadamente controlar a corrente necessária. O código do projeto pode ser visto na vídeo-aula no final da página, onde é detalhadamente explicado. Veja abaixo uma foto do semáforo.

![](http://allelectronics.com.br/wp-content/uploads/2014/07/Image2.jpg)


