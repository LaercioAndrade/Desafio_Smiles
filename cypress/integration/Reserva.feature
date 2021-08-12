Feature: Reserva de passagem de voo 

    Scenario: Realizar uma reserva de voo com Sucesso de São Paulo para o Rio de Janeiro
        Given que acesso o site da Smiles
        And  preencho as informações do voo corretamente
        And  valido os valores da emissão do pedido
        When aceito os termos do pedido
        Then valido se aparece a tela de acesso a conta