import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  public person: { name: string, balance: number } = { name: 'John', balance: 9999.2 }
  public benefits: Array<{ title: string, balance: number, icon: string, color: string }> = [
    { title: 'Home Office', balance: 0.00, icon: 'bx bx-home-circle', color: '#2f3c68' },
    { title: 'Refeição', balance: 0.00, icon: 'bx bx-bowl-hot', color: '#dd6666' },
    { title: 'Alimentação', balance: 0.00, icon: 'bx bx-bowl-rice', color: '#af921a' },
    { title: 'Mobilidade', balance: 0.00, icon: 'bx bx-cycling', color: '#e1bc22' },
    { title: 'Cultura', balance: 0.00, icon: 'bx bx-home-circle', color: '#0090c0' },
    { title: 'Saúde', balance: 0.00, icon: 'bx bx-heart', color: '#aaeebb' },
    { title: 'Educação', balance: 0.00, icon: 'bx bx-book-reader', color: '#cd6d8d' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
