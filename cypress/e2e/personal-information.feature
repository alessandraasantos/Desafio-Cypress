# utf-8
# language: pt
 
Funcionalidade: personal-information - Personal Information
    Cenário: Validação Personal Information
        Dado que acesso o portal My Shop
        Quando realizo login no portal
        E valido acesso a Home
        E acesso a opção de Personal Information
        E insiro os dados obrigatórios
        E confirmo a atualização dos dados
        Então devo visualizar a mensagem Your personal information has been successfully updated