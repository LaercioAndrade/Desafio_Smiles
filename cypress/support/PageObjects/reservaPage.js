  /// <reference types ="cypress"/>

  import reservaElements from "../Elements/reservaElements";
  const Elements = new reservaElements;
  const NavegadorUrl = Cypress.config("baseUrl")
  
  let BilheteIda = 0;
  let BilheteVolta = 0;
  let TaxaEmbarque = 0;
  let TotalDoBilhete = 0;

  class reservaPage{

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
    }
    ValidarValorBilheteIda(){
      cy.get(Elements.valorBilheteIda()).invoke('text').then((BilheteIda) => {
        cy.log(BilheteIda )
        .should('contain', BilheteIda)
      })
    }

    ValidarValorBilheteVolta(){
      cy.get(Elements.valorBilheteVolta()).invoke('text').then((BilheteVolta) => {
        cy.log(BilheteVolta)
        .should('contain', BilheteVolta)
      })
    }

    ValidarValorTotalBilhete(){
      const TotalDoBilhete = BilheteIda + BilheteVolta;
      cy.get(Elements.valorBilheteTotal()).invoke('text').then((TotalDoBilhete) => {
        cy.log(TotalDoBilhete)
        .should('contain', TotalDoBilhete)
      })
    }
  
    ValidarMilhasSelecionadoNaTaxa(){
      cy.get(Elements.selecionarTaxa()).should('contain', '5.000 milhas')
    }

    ValidarTaxaEmbarque(){
      cy.get(Elements.taxaDeEmbarque()).invoke('text').then((TaxaEmbarque) => {
        cy.log(TaxaEmbarque)
        .should('contain', TaxaEmbarque)
      })
    }

    ValidarValorTotalDasMilhasDaReserva(){
      const TotalDasMilhasDaReserva = TotalDoBilhete + TaxaEmbarque;
      cy.get(Elements.valorTotalDeMilhasDaReserva()).invoke('text').then((TotalDasMilhasDaReserva) => {
        cy.log(TotalDasMilhasDaReserva)
        .should('contain', TotalDasMilhasDaReserva)
      })
    }

    ClicarCheckBoxAceitarTermos(){
      cy.get(Elements.checkBoxAceitoTermos()).click();
      cy.screenshot();
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
  export default reservaPage;