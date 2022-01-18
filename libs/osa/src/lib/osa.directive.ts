import {
  animate,
  AnimationBuilder,
  AnimationPlayer,
  style,
} from '@angular/animations';
import {
  AfterContentInit,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { OsaItemDirective } from './osa-item.directive';

@Directive({
  selector: '[osa],[osa-container]',
})
export class OsaDirective implements OnInit, AfterContentInit {
  @Input() animationType: 'transform' | 'fade' = 'transform';
  @Input() animationDir: 'left' | 'right' | 'top' | 'bottom' | 'random' =
    'left';

  elementsList = [];
  players: WeakMap<HTMLElement, AnimationPlayer> = new WeakMap();

  osaContainer: HTMLElement | undefined;

  @ContentChildren(OsaItemDirective) elements:
    | QueryList<OsaItemDirective>
    | undefined;

  constructor(public _el: ElementRef, private _builder: AnimationBuilder) {}

  ngOnInit(): void {
    this.osaContainer = this._el.nativeElement;
  }

  makeAnimation(element: HTMLElement) {
    // first define a reusable animation
    const rndtime = (Math.random() + 0.1) * 500;
    const myAnimation = this._builder.build([
      style({ opacity: '0' }),
      animate(rndtime, style({ opacity: '1' })),
    ]);
    // const myAnimation = this._builder.build([
    //   style({ transform: 'translateY(100%)', opacity: '0' }),
    //   animate(rndtime, style({ transform: 'translateY(0)', opacity: '1' }))
    // ]);

    this.players.set(element, myAnimation.create(element));
  }

  ngAfterContentInit(): void {
    if (!!window.IntersectionObserver) {
      let observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            const htmlElement = entry.target as HTMLElement;
            let player: AnimationPlayer | undefined =
              this.players.get(htmlElement);

            if (entry.isIntersecting) {
              player?.play();

              // observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px 20px 0px' }
      );
      this.elements?.forEach((element) => {
        this.makeAnimation(element._el.nativeElement);
        observer.observe(element._el.nativeElement);
      });
    }
  }
}
