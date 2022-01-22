import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'newProyect';

  heroes = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'BatGirl' },
    { id: 4, name: 'Robin' },
    { id: 5, name: 'Flash' },
  ];

  addItem() {
    this.heroes.push({ id: 6, name: 'nuevo item' });
  }

  deleteItem(index: number) {
    this.heroes.splice(index, 1);
  }

  power = 10;
}
