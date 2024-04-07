# Arquitetura da Solução



Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução LocaFast](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t2-locafast/blob/main/docs/img/arqlocasfast.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

Em desenvolvimento..

## Modelo ER

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-dad-t2-locafast/assets/114267923/b32a8873-6567-4faa-8bb5-97800a9ffeaa)




## Esquema  do Banco de Dados

Aqui postaremos pposteriormente um print do esquema do banco de dados NoSql na estrutura de collections correlacionadas usando o Banco MongoDB no ATLAS em hopedagem gratuíta.<br>
Em desenvolvimento..

## Modelo Físico

Em desenvolvimento..<br>
Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Hospedagem: Azure
Framework: React Native, React, NodeJs, Experess, Docker, MongoDB
IDEs: Visual Studio ou Visual Studio Code
Controle de Versão: Git
## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

A hospedagem será feita através do serviço de cloud azure em que os estudantes da PUC Minas tem acesso. O recursos necessários ficarão todos alocados em um grupo de serviço em que todos os membros terão acesso de administração para release de pipeline CI(Integração Contínua) com git e CD(Deployment Contínuo) com cloud azure em recurso de realease super administrado.

## Qualidade de Software

As características de qualidade de produto de software que melhor se adequam ao projeto são:

> - Funcionalidade
    > -	Segurança de acesso
    > - Interoperabilidade
    > -	Acuracia
    > -	Adequação
> - Portabilidade
    > -	Adaptabilidade

|Caracteristica de qualidade     | Subcaracterística de qualidade  |Métricas de avaliação |
|-------|-------------------------|----|
|Funcionalidade| Segurança de acesso | Atendimento do RF-001 e sucesso nos testes Registro de usuário e login | 
|| Interoperabilidade |  Atendimento do RF-004 | 
|| Acuracia | Taxa de sucesso em todos os testes | 
|| Adequação | Quantidaqde de RF e RNF atendidos | 
|Portabilidade| Adaptabilidade |  Atendimento do RNF-001 | 

