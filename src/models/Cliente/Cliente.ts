import ClienteInterface from "./ClienteInterface";


class Cliente {
    
    idCliente: number;
    txRazaoSocial: string;
    txNomeFantasia: string;
    txNomeSimples: string;
    txCnpj: string;
    txCep: string;
    txUf: string;
    txLogradouro: string;
    vlNumero: number;
    txBairro: string;
    txCidade: string;
    txPais: string;
    txComplemento: string;
    txTelefone: string;
    txCelular: string;
    txEmail: string;
    txWebSite: string;
    txAreaNegocios: string;

    constructor(fields : ClienteInterface){
        this.idCliente = fields.idCliente;
        this.txRazaoSocial = fields.txRazaoSocial;
        this.txNomeFantasia = fields.txNomeFantasia;
        this.txNomeSimples = fields.txNomeSimples;
        this.txCnpj = fields.txCnpj;
        this.txCep = fields.txCep;
        this.txUf = fields.txUf;
        this.txLogradouro = fields.txLogradouro;
        this.vlNumero = fields.vlNumero;
        this.txBairro = fields.txBairro;
        this.txCidade = fields.txCidade;
        this.txPais = fields.txPais;
        this.txComplemento = fields.txComplemento;
        this.txTelefone = fields.txTelefone;
        this.txCelular = fields.txCelular;
        this.txEmail = fields.txEmail;
        this.txWebSite = fields.txWebSite;
        this.txAreaNegocios = fields.txAreaNegocios;
    }
}

export default Cliente;