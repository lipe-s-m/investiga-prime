import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../../../services/modal.service';
import { CommonModule } from '@angular/common';
import { Modal } from '../../../../shared/modal/modal';

@Component({
  selector: 'app-card',
  imports: [Modal, CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card implements OnInit, OnDestroy {
  @Input() title: string = 'Título não definido';
  @Input() problem: string = 'Problema não definido';
  @Input() solution: string = 'Solução não definida';
  @Input() readMore: string = 'Não implementado...';
  @Input() fullQuestion: any;

  isOpen: boolean = false;
  private sub: Subscription | null = null;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.sub = this.modalService.close$.subscribe(() => {
      this.isOpen = false;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  openModal() {
    this.isOpen = true;
  }
  closeModal() {
    this.isOpen = false;
  }
}
