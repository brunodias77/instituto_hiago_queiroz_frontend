import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { RequestGeneratePix } from '../../types/requestGeneratePix';

@Component({
  selector: 'app-doe',
  standalone: true,
  imports: [],
  templateUrl: './doe.component.html',
  styleUrl: './doe.component.scss',
})
export class DoeComponent implements OnInit {
  qrCodeUrl: string | null = null;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.generateQrCodePix(this.pixTelefone);
  }

  pixTelefone: RequestGeneratePix = {
    key: '+5514991781010',
    value: 200,
    merchantName: 'Bruno Henrique Albquerque Dias',
    merchantCity: 'Marilia',
    txId: '***',
  };

  generateQrCodePix(request: RequestGeneratePix) {
    this.apiService.generateQrCodePix(request).subscribe({
      next: (response) => {
        console.log('QR Code gerado:', response); // Confirmação no console
        // Converte o Blob em um URL utilizável no navegador
        const url = window.URL.createObjectURL(response);
        // Atribui o URL a uma propriedade para usar no HTML
        this.qrCodeUrl = url;
      },
      error: (error) => {
        console.error('Erro na geração do QR Code:', error);
      },
    });
  }
}
