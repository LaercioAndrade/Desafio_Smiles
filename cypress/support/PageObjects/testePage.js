  /// <reference types ="cypress"/>

  import testeElements from "../Elements/testeElements";
  const Elements = new testeElements;
  const NavegadorUrl = Cypress.config("baseUrl")

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

    SelecionarDataIda(){
      cy.get(Elements.clicarCalendario()).click();
      cy.get(Elements.selecionardataIda()).click({force: true});
    }

    SelecionarDataVolta(){
      cy.get(Elements.selecionardataVolta()).click({force: true})
    }

    ClicarBotãoConfirmar(){
      cy.get(Elements.btnConfirmar()).click();
    }

    ClicarBotãoBuscarVoo(){
      cy.get(Elements.btnConfirmarVoo()).click();
    }

    SelecionarMilhasNaPassagemIdaIda(){
      cy.get(Elements.selecionarMilhasIda()).click();
    }

    SelecionarMilhasNaPassagemVolta(){
      cy.get(Elements.selecionarMilhasVolta()).click();
      cy.scrollTo(0, 1780)
    }

    ValorBilhete(){
      cy.get(Elements.valorBilhete()).should('contain', "31.400")
    }

    ValorPedido(){
      cy.get(Elements.valorPedido()).should('contain', "36.400")
    }

    ClicarCheckBoxAceitarTermos(){
      cy.get(Elements.checkBoxAceitoTermos()).click();
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