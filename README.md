A aplicação surgiu para resolver a dificuldade do gerenciamento e recrutamento de mão de obra para ação voluntária.

Qual é a solução?
Criação da plataforma “Mão Amiga” que conecta instituição organizadora de uma ação e voluntário disponível, sincronizando o calendário de ambas as partes, compartilhando experiências e resultados.

Quais as features da aplicação que foram planejadas ?
- **Calendário com ações para usuário não logado, na landing page, botão no resumo da ação redireciona para login;**
- **Cadastro de instituições (nome, email, área de atuação, senha, cidade, estado)**
    1. Página de perfil da instituição
    2. Cadastro de ação (Nome, descrição, categoria, data, numero estimado de voluntários)
    3. Na dashboard um calendário exibindo todas ações no mês
    4. Barra de pesquisa para ações
    5. Resumo das ações cadastradas pela instituição
    6. Clique no dia para exibir todas ações cadastradas no mesmo, abre um modal
    7. Resumo dos eventos cadastrados no dia (dentro do calendário)
    8. Hover na ação que aparece no resumo, abre pequeno modal/card com informações básicas
    9. Clique na ação que aparece no resumo ou no modal com todas ações do dia, redireciona para página da ação
    10. Na página da ação exibir informações mais detalhadas (extra: customização personalizada por categoria)
    11. Extra para página da ação: Chat
- **Cadastro de voluntários (nome, email, áreas de interesse, senha, cidade, estado)**
    1. Calendário exibindo todos eventos no mês
    2. Barra de pesquisa
    3. Resumo na side bar das ações que o usuário se cadastrou para participar
    4. Clique no dia para exibir todas ações cadastradas no mesmo, abre um modal
    5. Resumo dos eventos cadastrados no dia (dentro do calendário)
    6. Hover na ação que aparece no resumo, abre pequeno modal/card com informações básicas
    7. Clique na ação que aparece no resumo ou no modal com todas ações do dia, redireciona para página da ação
    8. Na página da ação exibir informações mais detalhadas, botão para redirecionar para perfil da instituição organizadora (extra: customização personalizada por categoria), caso ainda não participe, ter o botão de participar
    9. Extra para página da ação: Chat
    10. Extra: Integração com calendar


Quais as bibliotecas que serão utilizadas?

### Compartilhamento de estados
Context API
https://pt-br.reactjs.org/docs/context.html

---
### API Fake
JSON server auth
https://www.npmjs.com/package/json-server-auth

Cors
https://www.npmjs.com/package/cors

---
### Formulários
React-hook-form
https://www.npmjs.com/package/react-hook-form

Yup Resolver 
https://www.npmjs.com/package/@hookform/resolvers

---
### Requisições
Axios
https://www.npmjs.com/package/axios

---
### Decodificação do token
jwt-decode
https://www.npmjs.com/package/jwt-decode

---
### Estilização
Styled-components
https://www.npmjs.com/package/styled-components

React Icons
https://react-icons.github.io/react-icons/

### Notificações
React-hot-toast
https://react-hot-toast.com/

---
### Rotas
React-router-dom
https://reactrouter.com/web/guides/quick-start

---
### Modal
React-modal
https://www.npmjs.com/package/react-modal
