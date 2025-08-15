# Portal de Renegociação de Dívidas

Este projeto consiste em um sistema web simples para renegociação de dívidas, desenvolvido com HTML, CSS e JavaScript puro. O objetivo é simular a experiência do cliente ao acessar propostas de renegociação personalizadas e aceitar acordos.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `index.html`: Estrutura principal da aplicação web.
- `style.css`: Folha de estilos responsável pela aparência visual da aplicação.
- `script.js`: Lógica de programação da aplicação, incluindo a manipulação do DOM e cálculos de parcelas.
- `clients_data.json`: Arquivo JSON (embutido no `script.js`) que simula um banco de dados, contendo os dados dos clientes e suas respectivas dívidas e regras de negociação.

## Funcionalidades

- **Login Seguro por PIN:** Autenticação baseada no CPF do cliente.
- **Dashboard Personalizado:** Exibe um resumo das dívidas do cliente.
- **Propostas Color-Coded:** As propostas são visualmente distintas por cor:
    - **Vermelho:** Dívidas Atrasadas
    - **Verde:** Dívidas a Vencer
    - **Laranja:** Dívida Total
- **Simulador Interativo:** Permite ao cliente ajustar o número de parcelas da entrada e do saldo restante, com cálculo dinâmico dos valores.
- **Integração com WhatsApp:** Ao confirmar um acordo, o cliente é redirecionado para o WhatsApp com uma mensagem pronta contendo todos os detalhes da negociação para finalizar o atendimento.

## Como Usar

Para utilizar este sistema localmente, siga os passos abaixo:

1.  **Baixe os arquivos:** Certifique-se de ter os arquivos `index.html`, `style.css` e `script.js` no mesmo diretório.

2.  **Abra o `index.html`:** Você pode simplesmente abrir o arquivo `index.html` em seu navegador web preferido (Google Chrome, Mozilla Firefox, etc.).

3.  **Faça Login:**
    *   Na tela de login, insira o CPF e o PIN de um dos clientes de teste.
    *   **Lógica do PIN:** O PIN é definido no arquivo `script.js` para cada cliente.

4.  **Navegue pelo Sistema:**
    *   Após o login, você verá o Dashboard com o resumo das dívidas.
    *   Clique em "Ver Minhas Opções" para visualizar as propostas de renegociação. Note as cores que identificam o tipo de dívida.
    *   Selecione uma proposta para ir para a tela de simulação.
    *   Ajuste os sliders para definir o número de parcelas da entrada e do saldo. Os valores serão atualizados automaticamente.
    *   Clique em "Confirmar e Gerar Acordo". Uma nova aba será aberta, redirecionando você para o WhatsApp com todos os detalhes do acordo preenchidos.

## Clientes de Teste

Você pode usar os seguintes dados de clientes para testar o sistema (CPF e PIN definidos no `script.js`):

| Nome do Cliente               | CPF             | PIN  |
| :---------------------------- | :-------------- | :--- |
| Amanda Lopes Inocêncio        | 097.342.559-83  | 0983 |
| Maicon Pereira                | 111.919.319-27  | 1927 |
| Rosangela Santos              | 111.222.333-44  | 3344 |
| ...e outros listados no código. | ...             | ...  |


## Considerações Finais

Este projeto é uma demonstração conceitual e serve como um "blueprint" funcional para o desenvolvimento de um sistema mais completo, com um backend robusto e um banco de dados real.