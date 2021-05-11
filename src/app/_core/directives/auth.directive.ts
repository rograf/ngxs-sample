import { AuthState } from 'src/app/_store/state/auth.state';
import { Store, Select } from '@ngxs/store';
import { Directive, OnInit, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Directive({ selector: '[isAuth]' })
export class AuthDirective implements OnInit {
  
  sub: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private store: Store,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.sub = this.store.select(AuthState.isAuthenticated).subscribe((res) => {
      if (res) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
