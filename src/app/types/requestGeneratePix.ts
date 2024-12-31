export interface RequestGeneratePix {
  key: string; // Tipo de chave Pix (string)
  value: number; // Valor a ser transferido (number)
  merchantName: string; // Nome do comerciante (string)
  merchantCity: string; // Cidade do comerciante (string)
  txId: string; // Identificador da transação (string)
}
