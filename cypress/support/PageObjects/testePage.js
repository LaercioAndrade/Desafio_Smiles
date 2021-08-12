  /// <reference types ="cypress"/>

  import testeElements from "../Elements/testeElements";
  const Elements = new testeElements;
  const NavegadorUrl = Cypress.config("baseUrl")
  
  const valorBilheteIda = 0;
  const valorBilheteVolta = 0;
  const valorTaxaEmbarque = 0;
  const valorTotalDoBilhete = 0;

  class testePage{

    abrirUrl(){
        cy.visit(NavegadorUrl);
        cy.wait(1500)
    }

    Origem(){
      cy.get(Elements.partindoDe()).type("GRU");
      cy.contains('São Paulo, Brasil, Guarulhos (GRU)').click();
    }

    Destino(){
      cy.get(Elements.destino()).type("RIO")
      cy.contains('Rio de Janeiro, Brasil, Todos os Aeroportos (RIO)').click();
    }
    
    
    SelecionarData(){
      const dataAtual = new Date();
      const mesPartida = dataAtual.getMonth();
      const dataPartida = dataAtual.getDate() + 10;
      const mesVolta = dataAtual.getMonth();
      const dataVolta = dataAtual.getDate();
      dataAtual.setDate(dataPartida + 30);

      cy.get(Elements.clicarCalendario()).click();

      cy.get(Elements.selecionardataIda()).contains(dataPartida).click({force: true })
        for (let i = 1; i <= mesVolta - mesPartida; i++) {
          cy.get(Elements.dataVoltaProximoMes()).click({force:true})
        }
      
      cy.get(Elements.selecionardataVolta()).contains(dataVolta).click({force:true})
      
    }
   
    ClicarBotãoBuscarVoo(){
      cy.get(Elements.btnConfirmarVoo()).click();
    }

    SelecionarMilhasNaPassagemIdaIda(){
      cy.get(Elements.selecionarMilhasIda()).click();
    }

    SelecionarMilhasNaPassagemVolta(){
      cy.get(Elements.selecionarMilhasVolta()).click();
      //cy.scrollTo(0, 1780)
    }
    ValidarValorBilheteIda(){
      cy.get(Elements.valorBilheteIda()).invoke('text').then((valorBilheteIda ) => {
        cy.log(valorBilheteIda )
        .should('contain', valorBilheteIda)
      })
    }

    ValidarValorBilheteVolta(){
      cy.get(Elements.valorBilheteVolta()).invoke('text').then((valorBilheteVolta) => {
        cy.log(valorBilheteVolta)
        .should('contain', valorBilheteVolta)
      })
    }

    ValidarValorTotalBilhete(){
      const valorTotalDoBilhete = valorBilheteIda + valorBilheteVolta;
      cy.get(Elements.valorBilheteTotal()).invoke('text').then((valorTotalDoBilhete) => {
        cy.log(valorTotalDoBilhete)
        .should('contain', valorTotalDoBilhete)
      })
    }
  
    ValidarMilhasSelecionadoNaTaxa(){
      cy.get(Elements.selecionarTaxa()).should('contain', '5.000 milhas')
    }

    ValidarTaxaEmbarque(){
      cy.get(Elements.taxaDeEmbarque()).invoke('text').then((valorTaxaEmbarque) => {
        cy.log(valorTaxaEmbarque)
        .should('contain', valorTaxaEmbarque)
      })
    }

    ValidarValorTotalDasMilhasDaReserva(){
      const valorTotalDasMilhasDaReserva = valorTotalDoBilhete + valorTaxaEmbarque;
      cy.get(Elements.valorTotalDeMilhasDaReserva()).invoke('text').then((valorTotalDasMilhasDaReserva) => {
        cy.log(valorTotalDasMilhasDaReserva)
        .should('contain', valorTotalDasMilhasDaReserva)
      })
    }

    ClicarCheckBoxAceitarTermos(){
      cy.get(Elements.checkBoxAceitoTermos()).click();
      //cy.screenshot();
    }

    ClicarBotãoConfirmarTeladeReservaDoPedido(){
      cy.get(Elements.btnConfirmarTeladaReserva()).click();
    }

    ValidarTextoNaTelaDeAcessarConta(){
      cy.get(Elements.textoTelaDeAcesso()).should('contain', "Acesse sua conta");
      cy.wait(1000);
      cy.screenshot();
    }
    
   

}
  export default testePage;