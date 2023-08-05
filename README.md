# MS Address Manager

<!-- ![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge) -->

<img src="node_koa_postgresql_kafka.jpg" alt="Exemplo imagem">

> "Este projeto em desenvolvimento visa gerenciar endereços de forma assíncrona, utilizando Postgres e Kafka. O Postgres é empregado para armazenamento dos endereços, enquanto o Kafka facilita a comunicação assíncrona entre componentes. Assim, o projeto proporciona uma solução eficiente e escalável para o gerenciamento de endereços.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Salvar
- [x] Criar
- [x] Historico
- [x] Política de retentativas
- [x] Teste unitários
- [ ] Teste integração
- [ ] Teste e2e
- [ ] Restringir acesso via token


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

1. **NestJS**: versão 9.0.0 ou superior.
2. **TypeScript**: versão 4.7.4 ou superior.
3. **Node.js**: versão compatível com as dependências listadas.
   
<!-- * Você leu `<guia / link / documentação_relacionada_ao_projeto>`. -->

## 🚀 Instalando 

```
docker-compose up -d
```

## ☕ Usando 

Para usar basta alimentar o kafka com um topico chamado email e enviar o seguinte documento:

```
{
	"to": "to@email.com",
	"toName": "Name",
	"from": "from@email.com",
	"fromName": "Name",
	"subject": "Subject",
	"html": "<h2>HTML</h2>"
}
```
Para usar outro nome para fila você deve alterar o controller. Não se esqueça de preencher as variaveis de ambiente referente ao smtp:

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```
## 📫 Contribuindo para

Para contribuir, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

<!-- ## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars3.githubusercontent.com/u/31936044" width="100px;" alt="Foto do Iuri Silva no GitHub"/><br>
        <sub>
          <b>Iuri Silva</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://s2.glbimg.com/FUcw2usZfSTL6yCCGj3L3v3SpJ8=/smart/e.glbimg.com/og/ed/f/original/2019/04/25/zuckerberg_podcast.jpg" width="100px;" alt="Foto do Mark Zuckerberg"/><br>
        <sub>
          <b>Mark Zuckerberg</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://miro.medium.com/max/360/0*1SkS3mSorArvY9kS.jpg" width="100px;" alt="Foto do Steve Jobs"/><br>
        <sub>
          <b>Steve Jobs</b>
        </sub>
      </a>
    </td>
  </tr>
</table> -->
<!-- 
## 😄 Seja um dos contribuidores

Quer fazer parte desse projeto? Clique [AQUI](CONTRIBUTING.md) e leia como contribuir. -->

<!-- ## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes. -->