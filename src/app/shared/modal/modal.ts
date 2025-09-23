import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ButtonComponent } from '../button/buttons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  imports: [ButtonComponent],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal implements OnInit {
  constructor(private modalService: ModalService, private router: Router) {}

  isOpen: boolean = true;
  @Input() modalTitle: string =
    'Um varejo teve seu programa Prime cancelado, mas a equipe regional, o time do Prime e o 0800 não solicitaram o cancelamento.';
  @Input() modalBody: string =
    'O cancelamento ocorre automaticamente se o status do varejo no sistema Salesforce (SF) for alterado de "Ativo" para qualquer outro. Nesse caso, o varejo foi desativado temporariamente. Assim que a regularização foi feita, ele pôde assinar o programa novamente.';
  @Input() readMore: string = 'sss';
  @Input() images: any;
  ngOnInit(): void {
    this.modalBody = this.modalBody.replace(/\n/g, '<br>');
    if (document.getElementById('modalBody')) {
      document.getElementById('modalBody')!.innerHTML = this.modalBody;
    }
  }
  closeModal() {
    this.modalService.close();
  }
  saibaMais() {
    this.modalService.close();
    if (this.readMore === '') {
      alert('Não implementado ainda!');
      return;
    }
    localStorage.setItem('readMore', this.readMore);
    localStorage.setItem('title', this.modalTitle);
    localStorage.setItem('image-0', this.images ? this.images[0] : '');
    this.router.navigate(['/tutorial']);
  }
}
