Feature: Automatizar Site da Smiles

    Scenario: Realizar um pedido de voo com Sucesso
        Given que acesso o site da Smiles
        And  preencho as informações do voo corretamente
        And  valido os valores da emissão do pedido
        When aceito os termos do pedido
        Then valido se aparece a tela de acesso a conta