# AGENTS.md — Clínica São Lucas

## Objetivo do projeto

Este projeto é o site institucional da Clínica São Lucas.

O objetivo é manter um site profissional, moderno, responsivo e coerente com a identidade visual da clínica.

---

## REGRA PRINCIPAL — PRESERVAÇÃO DO PROJETO

NÃO altere partes do site que não estejam diretamente relacionadas ao pedido atual.

Antes de modificar qualquer coisa:

1. Analise o código existente.
2. Identifique exatamente quais arquivos e componentes precisam ser alterados.
3. Preserve o comportamento atual das demais partes.
4. Faça a menor alteração necessária para atingir o objetivo solicitado.

Não refaça componentes, páginas ou seções inteiras quando uma alteração localizada for suficiente.

---

## DESIGN E IDENTIDADE VISUAL

Preserve a identidade visual existente do site.

Não altere sem solicitação explícita:

- cores;
- tipografia;
- espaçamentos;
- tamanhos;
- layout;
- navegação;
- botões;
- animações;
- responsividade;
- imagens;
- estrutura das seções;
- rodapé;
- cabeçalho;
- aparência geral.

Quando uma alteração visual for solicitada, altere somente a parte solicitada.

O resultado deve parecer parte original do projeto.

---

## IMAGENS E REFERÊNCIAS

Quando o usuário enviar uma imagem de referência:

- use-a como referência visual;
- não copie elementos desnecessariamente;
- não substitua imagens existentes sem autorização;
- não altere o restante do design;
- preserve a identidade visual da Clínica São Lucas.

Se uma logo ou elemento visual precisar ser recriado, priorize uma implementação limpa e adequada ao site em vez de utilizar uma captura de tela como elemento final.

---

## DADOS DOS PROFISSIONAIS

Nunca invente:

- nome de profissional;
- especialidade;
- fotografia;
- informação profissional;
- horário;
- data de atendimento.

Se uma informação necessária não estiver disponível, informe isso ao usuário.

Profissionais cadastrados permanentemente devem ser tratados como registros reutilizáveis.

A ausência de um profissional em determinada semana NÃO significa que ele deve ser excluído do cadastro permanente.

---

## AGENDA SEMANAL

A agenda semanal deve permitir atualização dos profissionais de cada dia sem alterar o design da página.

Quando o usuário fornecer uma nova lista semanal:

1. Identifique a semana e as datas.
2. Verifique os nomes dos profissionais.
3. Reutilize os profissionais já cadastrados.
4. Adicione novos profissionais somente quando houver dados suficientes.
5. Remova da semana somente os profissionais que não estiverem na nova lista.
6. Não exclua permanentemente um profissional apenas porque ele não está atendendo naquela semana.
7. Preserve a ordem fornecida pelo usuário.
8. Detecte possíveis duplicidades.
9. Avise sobre nomes desconhecidos ou informações faltantes.

Diferenças de acentuação ou capitalização devem ser normalizadas quando for evidente que se trata da mesma pessoa.

Exemplo:

`Itala` → `Ítala`

Mas NÃO invente uma identidade quando houver dúvida.

---

## ALTERAÇÕES ESPECÍFICAS DE UMA OCORRÊNCIA

Um profissional pode ter uma informação diferente somente em determinada ocorrência.

Exemplo:

`Louise (E.D.A)`

Isso deve ser tratado como:

- profissional permanente: Louise;
- informação específica daquela ocorrência: `(E.D.A)`.

Não criar automaticamente uma nova profissional chamada "Louise (E.D.A)".

---

## ADMIN

O projeto poderá possuir futuramente uma área administrativa em `/admin`.

A área administrativa deverá permitir, conforme implementação autorizada:

- autenticação;
- cadastro de profissionais;
- foto;
- nome;
- especialidade;
- edição;
- exclusão;
- edição da agenda semanal;
- seleção dos profissionais por dia;
- alterações específicas de uma ocorrência;
- visualização/preview antes da publicação.

A área pública do site não deve ser alterada visualmente para acomodar o painel administrativo.

Não expor senhas, tokens, chaves de API ou credenciais no código público.

---

## SEGURANÇA

Nunca colocar no frontend:

- senhas;
- tokens secretos;
- chaves privadas;
- credenciais de banco;
- secrets de serviços externos.

Antes de implementar autenticação, banco de dados ou armazenamento de arquivos, analise a arquitetura existente.

Não adicionar dependências desnecessárias.

---

## APRENDIZADO E CORREÇÕES

Quando o usuário corrigir uma implementação, trate a correção como uma orientação importante para o projeto.

Não altere automaticamente este arquivo a cada erro.

Somente registre uma nova regra permanente quando ela representar uma decisão ou padrão que deverá ser seguido no futuro.

Correções pontuais não devem virar regras globais sem necessidade.

Quando houver uma decisão importante de arquitetura ou design, ela poderá ser documentada em arquivos específicos do projeto.

---

## ANTES DE IMPLEMENTAR

Para tarefas que possam afetar várias partes do projeto:

1. Analise a estrutura atual.
2. Identifique os arquivos envolvidos.
3. Explique brevemente o que será alterado quando isso for útil.
4. Evite mudanças fora do escopo solicitado.

Para alterações simples e claramente delimitadas, pode implementar diretamente após verificar o código necessário.

---

## APÓS IMPLEMENTAR

Sempre que possível:

- verifique erros de TypeScript;
- verifique erros de build;
- execute lint quando disponível;
- confirme que a funcionalidade solicitada funciona;
- confirme que não houve alterações desnecessárias.

Se algum teste não puder ser executado, informe isso claramente.

---

## REGRA DE ESCOPO

O pedido atual do usuário define o escopo da tarefa.

Não aproveite uma alteração para:

- refatorar partes não relacionadas;
- trocar bibliotecas;
- alterar o design geral;
- reorganizar o projeto sem necessidade;
- modificar outras páginas;
- adicionar funcionalidades não solicitadas.

Se uma melhoria adicional parecer útil, apresente-a como sugestão separada em vez de implementá-la automaticamente.

---

## PRINCÍPIO FINAL

Priorize:

1. preservar o que já funciona;
2. fazer alterações pequenas e controladas;
3. respeitar exatamente o pedido do usuário;
4. manter o site visualmente consistente;
5. não inventar informações;
6. verificar o resultado antes de finalizar.

Quando houver dúvida sobre uma alteração que possa modificar significativamente o projeto, pare e peça confirmação antes de executá-la.