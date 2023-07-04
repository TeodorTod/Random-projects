import {
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  data$ = interval(1000);
  destroyRef = inject(DestroyRef);
  // unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.data$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      console.log('data', data);
    });
  }
  

  // ngOnDestroy(): void {
  //   this.unsubscribe.next('');
  //   this.unsubscribe.complete();
  // }

}
