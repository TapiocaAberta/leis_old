# Leis SJC

@deprecated Moved to [transparenciasjc/leis](https://github.com/transparenciasjc/leis)
![@deprecated](https://octodex.github.com/images/mummytocat.gif)

Projeto de visualização dos projetos de lei.

O sistema visa fazer uma interação maior entre a população e a câmara municipal de São José dos Campos, de forma com que todos os projetos de lei sejam agregados e visualizados de maneira simples e objetiva, incentivando os cidadãos a serem mais participativos na atividade política da cidade.

# Como executar

O projeto trata-se apenas do Front-End por enquanto, logo, para executar basta ter o python instalado na sua máquina e executar:

No python 2.x:

	python -m SimpleHTTPServer

No python 3.x:
	
	python -m http.server

basta acessar [http://localhost:8000](http://localhost:8000)

# Editando os dados.

O objetivo principal do sistema é realizar estatísticas sobre o legislativo de São José dos Campos.

Para tanto, precisamos manter a qualidade do dado consistente afim de conseguirmos realizar a extração da informação.

Algumas perguntas que gostaríamos de responder através da dashboard do sistema seriam:

- Quantidade total de projetos de lei.
- Ranking da quantidade de projetos por vereador
- Ranking das leis menos prioritárias (nomes de rua, praça, data comemorativa, medalhas)
- Ranking das leis prioritárias (liberação de verbas, uso do solo, fiscalização do executivo)
- Qualidade das leis
- Votação dos vereadores em cada projeto de lei.

Por enquanto a idéia do sistema é manter-se sem Backend, mostrando estatísticas de forma estática com dados pré-processados. Para tanto, precisamos que os dados estejam em um formato consistente.

O processo de extração da informação foi automatizado, e o dado de origem não segue um padrão bem definido, gerando inconsistências. Tais inconsistências são:

- Campos não preenchidos (sem nome, sem descrição, sem data).
- Variação de nomes dos autores. Este é um problema complexo dado a quantidade de variação de nomes de autores, tomando como exemplo como o dado é persistido em nome da Vereadora Ângela:

	"Angela Guadagnin",
	"Drª Angela",
	"Dra Angela",
	"Dra. Angela"
	
O desafio é identificar todas essas variações e aplicar as mudanças na fonte dos dados.


# Fonte dos dados

Tribunal Superior Eleitoral (TSE) - http://divulgacand2012.tse.jus.br/divulgacand2012/exportarCandidatoCSV.action?siglaUFSelecionada=SP&codigoMunicipio=70998&codigoCargo=13&codigoSituacao=0

William Antônio e sua API de candidatos: - http://williamantonio.wordpress.com/2010/11/13/tse-baixando-todos-os-arquivos-sobre-candidaturas-do-site/ e http://williamprogrammer.com/EleicoesAbertas/

API dos dados do TSE utilizado em um Hackaton: http://dev.transparencia.org.br/api-portal/swagger
