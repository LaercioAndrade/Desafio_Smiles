/* global Given, When, Then*/

import testePage from "../PageObjects/testePage";
const Reserva = new testePage



Given("que acesso o site da Smiles", () => {
	Reserva.abrirUrl();
});


And("preencho as informações do voo corretamente", () => {
    Reserva.Origem();
    Reserva.Destino();
    Reserva.SelecionarDataIda();
    Reserva.SelecionarDataVolta();
    Reserva.ClicarBotãoConfirmar();
    Reserva.ClicarBotãoBuscarVoo();
    Reserva.SelecionarMilhasNaPassagemIdaIda();
    Reserva.SelecionarMilhasNaPassagemVolta();
})


And("valido os valores da emissão do pedido", () => {
    Reserva.ValorBilhete();
    Reserva.ValorPedido();
})

When("aceito os termos do pedido", () => {
    Reserva.ClicarCheckBoxAceitarTermos();
    Reserva.ClicarBotãoConfirmarTeladeReservaDoPedido();
})

Then("valido se aparece a tela de acesso a conta", () => {
    Reserva.ValidarTextoNaTelaDeAcessarConta();
})