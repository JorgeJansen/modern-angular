import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {

  protected title = 'Welcome to Modern Angular!';

  protected isDisabed = false;

  protected onClick(): void {
    console.log('Button clicked!');
    this.isDisabed = !this.isDisabed;
  }

  protected count = signal(0);

  // Um sinal computado deriva um valor reativo a partir de uma expressão.
  protected doubleCount = computed(() => {
    return this.count() * 2;
  })

  //
  private readonly countLog = effect(() => {
    console.log('Count changed: ', this.count())
  })

  protected increment(): void {
    this.count.update((current) => current + 1);
  }

  protected decrement(): void {
    this.count.update((current) => current - 1);
  }

  protected reset(): void {
    this.count.set(0);
  }
}
