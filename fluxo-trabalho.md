# Fluxo de Trabalho

Aqui separamos passo a passo para realizar alterações e realizar quaisquer tarefa relacionada as branches.


### Se você ainda não tem o repositório na sua máquina local
1. copiar o URL do repositório no GitHub
2. abre o terminal, na pasta onde deseja clonar o repositório
3. `git clone git@github.com:VitorPandini/14Bits.git`
4. verificar se deu certo listando as pastas: `ls`
5. entre na pasta, com `cd nome_da_pasta`

### Se você já tem o repositório em sua máquina local
Certifique-se de que seu repositório local está com as atualizações mais recentes do repósitorio remoto.
- Execute `git fetch` e após `git pull`
###Verificar se está no branche certa
- Após migre para a branche `developer` com `git checkout developer`
### Após isso para quaisquer alteração realize esse fluxo
-  Após realizar as alterações faça um `git add .`
- Em seguida ` git commit -m "sua mensagem de commit"`
- Após execute, ` git push -u origin developer`
