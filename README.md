# Projeto Online Store
## Este repositório contém o desenvolvimento do meu 11º projeto na Trybe

Este foi o primeiro projeto em grupo que desenvolvi na Trybe. Trabalhei com mais 5 colegas e utilizamos a biblioteca do React para desenvolver os requisitos exigidos. Abaixo, há detalhes do que tivemos que entregar e no tópico Observações está detalhado quais foram as partes do código que criei, as que fiz em conjunto com outros estudantes e aquelas que ficaram sob responsabilidade dos demais participantes. 

## Detalhes do projeto

Confira os requisitos exigidos pela Trybe (texto extraído dos readme oficial da Trybe):

**1. Implemente o módulo de acesso à api do Mercado Livre**

<details><summary>Detalhes</summary>
<p>

> Implemente um módulo que acessa a API do Mercado Livre.

</p>
</details>

**2. Crie uma página de listagem de produtos vazia**

<details><summary>Detalhes</summary>
<p>

> A tela principal da plataforma é a de listagem de produtos, onde a pessoa usuária poderá buscar produtos para adicionar ao carrinho, além de filtrar suas buscas.

> Crie o campo de busca da tela principal, que será utilizado para listar os produtos encontrados.

</p>
</details>

**3. Crie a página do carrinho de compras**

<details><summary>Detalhes</summary>
<p>

> A pessoa usuária poderá adicionar produtos em seu carrinho de compras, a partir da listagem dos produtos.

> Crie uma tela que representará o carrinho de compras da aplicação. Além disso, na tela principal, crie um botão que redireciona à página do carrinho de compras. Inicialmente, o carrinho deve estar vazio.

> Crie uma tela que represente o carrinho de compras:
Na tela principal, crie um elemento que redirecione a pessoa usuária à página do carrinho de compras.

</p>
</details>

**4. Liste as categorias de produtos disponíveis via API na página principal**

<details><summary>Detalhes</summary>
<p>

> A tela principal (listagem dos produtos) deve conter uma lista de categorias, que será utilizada para filtrar a busca por categoria. As categorias podem ser obtidas pela API do Mercado Livre. A requisição para essa API deve ser feita uma única vez, após o carregamento da tela.

> Na tela principal, liste as categorias obtidas pela API do Mercado Livre.

</p>
</details>

**5. Liste os produtos buscados por termos, com os dados resumidos, associados a esses termos**

<details><summary>Detalhes</summary>
<p>

> A alma da aplicação é a sua lógica de busca e listagem de produtos. Após digitar seus termos no input da tela principal e clicar no botão de busca, uma requisição deverá ser feita à API do Mercado Livre, tendo como parâmetros a frase digitada. Os produtos retornados pela API devem ser listados na tela.

> Na tela principal, crie a listagem dos produtos recebidos pela API do Mercado Livre ao clicar no botão de busca.

</p>
</details>

**6. Selecione uma categoria e mostre somente os produtos daquela categoria**

<details><summary>Detalhes</summary>
<p>

> Quando a pessoa usuária clicar em uma das categorias listadas na tela principal, a aplicação deverá listar todos os produtos encontrados daquela categoria.

> Na tela principal, ao clicar em uma das categorias listadas, crie a listagem dos produtos dessa categoria.

</p>
</details>

**7. Redirecione para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto**

<details><summary>Detalhes</summary>
<p>

> Agora que a listagem dos produtos está criada, você deverá criar a página de detalhes de um produto.

> Ao clicar "no card" de um produto, a pessoa usuária deve ser direcionada para uma página contendo o nome, uma imagem, o preço e a especificação técnica desse produto. Além disso, essa página deve ter um botão que, ao clicar, a pessoa usuária deve ser redirecionada para a página do carrinho de compras.

> Ao clicar em "um card" de um produto (o elemento com data-testid="product"), a pessoa usuária deve ser redirecionada para uma página contendo os detalhes do produto

</p>
</details>

**8. Adicione produtos ao carrinho a partir da tela de listagem de produtos**

<details><summary>Detalhes</summary>
<p>

> A pessoa usuária pode adicionar um produto ao carrinho de compras a partir da página principal contendo a listagem dos produtos.

> Todos os produtos que foram adicionados ao carrinho devem aparecer na tela do Carrinho de Compras.

> Na tela principal, crie um elemento em cada produto que, ao ser clicado, adiciona o produto ao carrinho de compras.

> Na tela do Carrinho de Compras, renderize todos os produtos que foram adicionados ao carrinho.

</p>
</details>

**9. Adicione um produto ao carrinho a partir de sua tela de exibição detalhada**

<details><summary>Detalhes</summary>
<p>

> A partir da tela de detalhes de um produto, deve ser possível adicioná-lo ao carrinho de compras.

> Na tela de detalhes de um produto, crie um elemento que adicione o produto ao carrinho.

> Na tela do carrinho de compras, renderize todos os produtos adicionados ao carrinho.

</p>
</details>

**10. Visualize a lista de produtos adicionados ao carrinho em sua página e permita a manipulação da sua quantidade**

<details><summary>Detalhes</summary>
<p>

> Ao entrar na página, todos os produtos salvos no local storage devem ser renderizados.

> Na tela do Carrinho de Compras, deve ser possível aumentar e/ou diminuir a quantidade do produto. Também deve ser possível excluir um produto do carrinho.

> Na página do carrinho de compras, crie dois elementos para cada produto que, ao serem clicados, diminuem ou aumentam a quantidade desse produto presente no carrinho.

</p>
</details>

**11. Avalie e comente acerca de um produto em sua tela de exibição detalhada**

<details><summary>Detalhes</summary>
<p>

> Na tela de detalhes de um produto, deve existir um formulário para adicionar avaliações sobre ele. Este formulário deve conter um campo para o e-mail da pessoa avaliadora, uma nota entre 1 e 5 e um campo para comentários sobre o produto. Além disso, os campos e-mail e nota devem ser obrigatórios e o e-mail deve ser válido (exemplo: teste@trybe.com).

> A lista de avaliações já realizadas devem ser renderizadas na tela de detalhes do produto caso a pessoa usuária recarregue a página.

> Na tela de detalhes de um produto, crie um formulário para adicionar avaliações.

> Avalie se o formulário é valido.

> Renderize as avaliações criadas a partir do formulário.

</p>
</details>

**12. Finalize a compra vendo um resumo dela, preenchendo os seus dados e escolhendo a forma de pagamento**

<details><summary>Detalhes</summary>
<p>

> Crie uma tela para a finalização da compra, que deve ser acessada a partir da tela do Carrinho de Compras. A tela deve conter um formulário para adicionar as informações do comprador e um resumo dos produtos que foram adicionados ao carrinho. Após finalizar a compra, caso o formulário esteja validado, o carrinho deve ser esvaziado e a pessoa usuária deve ser redirecionada pala a tela principal (listagem dos produtos).

> Na tela do carrinho de compras, crie um elemento para finalizar a compra.

> Na tela de checkout, mostre um resumo dos produtos adicionados ao carrinho.

> Na tela de checkout, crie um formulário para a pessoa usuária adicionar os seus dados pessoais.

> Ao clicar no botão para submeter o formulário.

</p>
</details>

REQUISITOS BÔNUS

**13. Mostre junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece**

<details><summary>Detalhes</summary>
<p>

> Adicione junto ao elemento que redireciona à página do carrinho de compras, um número contendo a quantidade total de itens armazenados no carrinho. Esse número deve aparecer em todas as páginas em que esse elemento está presente.

> Adicione a quantidade de produtos armazenados no carrinho.

</p>
</details>

**14. Limite a quantidade de produtos adicionados ao carrinho pela quantidade disponível em estoque**

<details><summary>Detalhes</summary>
<p>

> Na tela do carrinho de compras já é possível aumentar ou diminuir a quantidade dos produtos. Agora você deve limitar a quantidade máxima que a pessoa usuária pode adicionar ao carrinho de acordo com a quantidade em estoque disponível de cada produto.

> Na tela do carrinho de compras, crie um limite para a quantidade máxima dos produtos.

</p>
</details>

**15. Mostre quais produtos tem o frete grátis**

<details><summary>Detalhes</summary>
<p>

> Alguns produtos possuem o frete grátis. Adicione essa informação nesses produtos, tanto na tela de listagem dos produtos quanto na tela de detalhes de um produto.

> Adicione a informação de frete grátis aos produtos que o possuem.

</p>
</details>

## Observações sobre o desenvolvimento

Neste projeto, os requisitos que desenvolvi de forma individual foram o 5 e o 10, fiquei responsável por refatorar o 7, o 8 e o 9 e fiz junto com o grupo os requisitos 1, 2, 14 e 15. 

> No requisito 5, criei o compenente SearchProduct.jsx, fiz alterações na pages Main.js e no App.js. 

> Para desenvolver o de número 10, precisei refatorar os requisitos do 7 ao 9. Assim, alterei o App.jsx, criei o componente CartProduct.jsx e recriei o Product.jsx, bem como fiz alterações no SearchProduct.jsx, no Carrinho.js, na Main.js e no api.js.

> Em relação aos requisitos 1, 2, 14 e 15 participei do desenvolvimento junto com o grupo, dando sugestões e opiniões.

> Depois de finalizado o projeto, estilizei os arquivos. Para isto, trabalhei com CSS dentro do index.css e fiz algumas modificações nos componentes, que estão descritas nos commits.

> Todos os demais arquivos dentro da pasta /src não citados por mim foram desenvolvidos por outros integrantes do grupo. 

## Sobre o curso da Trybe
O programa total de estudo conta com mais de 1.500 horas de aulas presenciais e online,divididas ao longo de 12 meses. O conteúdo aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.
