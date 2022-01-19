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
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { finalize, map, scan, shareReplay, tap } from 'rxjs/operators';
import { AosaItemDirective } from './aosa-item.directive';

@Directive({
  selector: '[aosa],[aosa-container]',
})
export class AosaDirective implements OnInit, AfterContentInit, OnChanges {
  @Input() animationType: 'transform' | 'fade' = 'transform';
  @Input() animationDir: 'left' | 'right' | 'top' | 'bottom' | 'random' =
    'left';
  @Input() trackArray: any[] | undefined | null;

  @Output() lastScroll = new EventEmitter();
  elementsList = [];
  players: WeakMap<HTMLElement, AnimationPlayer> = new WeakMap();

  osaContainer: HTMLElement | undefined;

  @ContentChildren(AosaItemDirective) elements:
    | QueryList<AosaItemDirective>
    | undefined;

  last: ElementRef | undefined;

  constructor(public _el: ElementRef, private _builder: AnimationBuilder) { }

  ngOnInit(): void {
    this.osaContainer = this._el.nativeElement;
    // this.lastScroll.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.['trackArray']?.currentValue) {
      // console.log(changes.trackArray);
      // this.setupObservables()
    }

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
    this.elements?.changes.pipe(tap((elems: QueryList<AosaItemDirective>) => {
      console.log(elems);

      if (elems.last) {
        this.last = elems.last._el.nativeElement
        this.observeLastElement(elems.last._el.nativeElement);
      }
      this.setupAnimationObservables();
    })).subscribe()
    // this.setupObservables();
  }

  observeLastElement(element: HTMLElement) {
    if (!!window.IntersectionObserver) {

      let observer = new IntersectionObserver(
        (entries, observer) => {
          const entry = entries[0]
          if (entry.isIntersecting) {
            console.log('fetch data', entry.target);
            this.lastScroll.emit();
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: '0px 0px 0px 0px', threshold: 1 }
      );

      observer.observe(element);

    }
  }

  setupAnimationObservables() {
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
