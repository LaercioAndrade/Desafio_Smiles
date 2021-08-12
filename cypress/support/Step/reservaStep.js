/* global Given, When, Then*/

import reservaPage from "../PageObjects/reservaPage";
const Reserva = new reservaPage



Given("que acesso o site da Smiles", () => {
	Reserva.abrirUrl();
});


And("preencho as informações do voo corretamente", () => {
    Reserva.Origem();
    Reserva.Destino();
    Reserva.SelecionarData();
    Reserva.ClicarBotãoBuscarVoo();
    Reserva.SelecionarMilhasNaPassagemIdaIda();
    Reserva.SelecionarMilhasNaPassagemVolta();
    Reserva.ValidarMilhasSelecionadoNaTaxa();
})

And("valido os valores da emissão do pedido", () => {
    Reserva.ValidarValorBilheteIda();
    Reserva.ValidarValorBilheteVolta();
    Reserva.ValidarValorTotalBilhete();
    Reserva.ValidarTaxaEmbarque();
    Reserva.ValidarValorTotalDasMilhasDaReserva();
})

When("aceito os termos do pedido", () => {
    Reserva.ClicarCheckBoxAceitarTermos();
    Reserva.ClicarBotãoConfirmarTeladeReservaDoPedido();
})

Then("valido se aparece a tela de acesso a conta", () => {
    Reserva.ValidarTextoNaTelaDeAcessarConta();
})