# Front-End Gerenciador de Contas

O presente Front foi desenvolvido em Angular, utilizando Bootstrap e permite cadastro e listagem de contas.

 
# Importante: Como configurar o projeto

Primeiramente você precisará da API: https://github.com/victup/GerenciadorDeContas_Desafio_MD

Depois de ter baixado e configurado a API na sua máquina vamos para os próximos passos deste projeto: 

1. Clone este projeto, e no VSCode, na pasta GerenciadorDeContas abra um terminal: 

![image](https://user-images.githubusercontent.com/38474570/209950941-8d02c0f9-c972-455d-91f2-e38c0c4ff1b5.png)

2. Instale as dependências deste projeto com o comando nmp install, no terminal 

![image](https://user-images.githubusercontent.com/38474570/209950983-2203ff39-d73e-4c7a-9ede-6d2b42f17436.png)

Ao concluir o carregamento, a pasta node_modules será criada:

![image](https://user-images.githubusercontent.com/38474570/209951042-b974083f-2ff3-4188-a49b-727c9f9cbde7.png)

Rode a API e veja qual a URL base e a porta em que ela está rodando na sua máquina: 

![image](https://user-images.githubusercontent.com/38474570/209951277-48b928a1-401c-4627-a4cb-bf4c6b7da751.png)

No meu caso, ela etá rodando na porta 7101.

## Para Executar o Front-end

Agora você deve certificar em qual caminho a sua está rodando, e alterar o arquivo de variaveis de ambiente environment.ts neste projeto de front

Local: GerenciadorDeContas/src/app/environments/environment.ts

![image](https://user-images.githubusercontent.com/38474570/209951620-7d47bed7-d984-454f-9f4c-a95308728bc7.png)

Insira o caminho em que sua api está rodando e salve o arquivo. 

![image](https://user-images.githubusercontent.com/38474570/209951719-fd866b53-f454-4e3e-ad46-67bf5f01e4f9.png)

Agora, se você configurou corretamente até aqui podemos executar o nosso front-end: certifique-se que sua API esteja em execução nesse momento.

Na pasta 
GerenciadorDeContas/src/app abra um novo terminal:

![image](https://user-images.githubusercontent.com/38474570/209951931-0e326eb4-7c0b-4071-8e9e-a3420d8e9c10.png)

Execute o comando npm start no terminal

![image](https://user-images.githubusercontent.com/38474570/209952002-9296af80-89c3-46a9-944f-4b4491c1c835.png)

A aplicação irá ser gerada para acesso ao navegador.
ps.: É esperado que após a geração do aplicativo o navegador abra, caso isso não ocorra basta acessar a porta indicada no terminal.

![image](https://user-images.githubusercontent.com/38474570/209952208-58dfa5a8-b2d8-4ce4-a047-5360deff6fc9.png)

Resultado: 

![image](https://user-images.githubusercontent.com/38474570/209950180-93e03227-a7c6-407f-b583-9441ed0628a9.png)


