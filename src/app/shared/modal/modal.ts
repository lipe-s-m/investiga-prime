import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ButtonComponent } from '../button/buttons';

@Component({
  selector: 'app-modal',
  imports: [ButtonComponent],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  @Input() modalTitle: string =
    'Um varejo teve seu programa Prime cancelado, mas a equipe regional, o time do Prime e o 0800 não solicitaram o cancelamento.';
  @Input() modalBody: string =
    'O cancelamento ocorre automaticamente se o status do varejo no sistema Salesforce (SF) for alterado de "Ativo" para qualquer outro. Nesse caso, o varejo foi desativado temporariamente. Assim que a regularização foi feita, ele pôde assinar o programa novamente.';
  constructor(private modalService: ModalService) {}

  closeModal() {
    this.modalService.close();
  }
}
