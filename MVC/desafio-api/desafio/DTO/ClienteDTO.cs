using System;
using Newtonsoft.Json;

namespace desafio.DTO
{
    public class ClienteDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Documento { get; set; }
        public string NivelAcesso { get; set; }
        public bool Status { get; set; }
        public DateTime DataCadastro { get; set; }
    }
}