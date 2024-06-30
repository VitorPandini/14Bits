# Fluxo de Trabalho

Aqui separamos passo a passo para realizar alterações e realizar quaisquer tarefas relacionadas às branches.


### Se você ainda não tem o repositório na sua máquina local
Para clonar o repositório, faça o seguinte:
1. Copiar o URL do repositório no GitHub
2. Abra o terminal, na pasta onde deseja clonar o repositório
3. Copie `git clone git@github.com:VitorPandini/14Bits.git` cole no terminal e envie
4. Verifique se deu certo, listando as pastas com o comando `ls`
5. Entre no repositório clonado, com `cd nome_do_repositorio`

### Se você já tem o repositório em sua máquina local
Certifique-se de que seu repositório local está com as atualizações mais recentes do repósitorio remoto:
- Execute `git fetch` e após isso, `git pull`

### Verificar se está na branch certa
- Migre para a branch `developer` com `git checkout developer`

### Para alterações em geral realize esse fluxo
- Após realizar as alterações, faça um `git add .` que vai preparar as alterações de todos arquivos editados naquela pasta para serem commitadas.
- Em seguida, ` git commit -m "sua mensagem de commit"` que faz um registro do que foi alterado, com sua mensagem explicando a alteração.
- Após isso, execute ` git push -u origin developer` que vai enviar sua alteração para o repositório remoto na internet, tornando disponível a outras pessoas do repositório.


## O que é um ambiente de trabalho?
É o local onde você trabalha, poxa! Porém, ao trabalhar, temos propósitos de trabalho diferentes, como por exemplo, um ambiente não só para atualizações, mas também para subir novos recursos, testes, também "publicação" (implantação/deploy) dessas atualizações. Isso é conhecido também como _ciclo de vida_ e _fluxo de trabalho_, mas agora não é nosso foco.

### O que é uma branch? O que faz, é de comer?
No caso do Git/GitHub, a estrutura de ambientes é dividida em `main` (ou `master`), que é a **origem** do repositório. Cada separação desse "tronco" principal, as ramificações dele, são as branches (do inglês, "branch", ou um "galho").

### Por que separar ambientes?
Como mencionado, existe a necessidade de __separar ambientes__ nos repositórios pelo seu propósito. Num ambiente de desenvolvimento, ainda estamos implementando recursos que não foram testados. Por isso, seria arriscado implantar um recurso dessa forma, sem ter ideia se o código pode gerar bugs.

Outro motivo para separar ambientes é: trabalho em equipe. Quando estamos alterando um código, o colega também pode estar alterando aquela mesma pasta, arquivo, ou até o trecho que você está alterando! Como garantir que não há conflitos nas versões? Os ambientes separados! Assim, cada commit registrado em um ambiente diferente garante que aquela versão não vai entrar em conflito com outra.

### Tá, e cada branch faz o quê?
Atualmente, estamos separando principalmente em:
- `developer`: branch para desenvolvimento, código e recursos que ainda irão para testes 
- `homol`: recursos vindos de `developer` para serem testados e avaliados pelos demais da equipe
- `main`: branch principal obrigatória, onde o trabalho já estável, testado, revisado e bem redondinho, será publicado 

### Quando e como devo criar novas branches?
Se você tem uma alteração no código mas não tem certeza quer que vá para `developer` ainda, pode criar uma branch para você. Temos passo a passo abaixo!

--------------------------
### E agora como criar branches ?
- Parar criar uma nova branche, utilize o comando `git branch nome-da-branch`.
- Para alterar a branche, utilize `git checkout nome-da-branch` ou nas versões mais atuais utilize `git switch nome-da-branch`.
- Para criar e alterar para a nova branch utilize, em um único comando`git checkout -b nome-da-branch`

  
## Boas práticas
### Nomes de branch descritivos e concisos
O nome da branch deve descrever claramente o propósito da branch.

**Exemplo:** `feature/add-user-login, bugfix/fix-login-error`

### Use convenções de prefixos:

- `feature` para novas funcionalidades.
- `bugfix` para correções de bugs.
- `hotfix` para correções urgentes.
- `chore` para tarefas de manutenção e configuração.
- `release` para preparar uma nova versão.
Use Separadores Consistentes: Use hífen (-) ou barra (/) para separar palavras e prefixos

## Mensagens de Commit
Use a Estrutura Padrão:
- Linha 1: Resumo do commit (por volta de 50 caracteres).
- Linha 2: Linha em branco.
- Linhas 3+: Descrição detalhada do commit (se necessário).
- Escreva no imperativo: Use verbos no imperativo para descrever o que o commit faz.

**Exemplo:** "Adiciona validação ao formulário de login", "Corrige erro de autenticação".
