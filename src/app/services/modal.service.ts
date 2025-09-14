import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private closeSubject = new Subject<void>();
  close$ = this.closeSubject.asObservable();

  close(): void {
    this.closeSubject.next();
  }
}
