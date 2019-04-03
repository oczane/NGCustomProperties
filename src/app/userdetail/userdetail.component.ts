import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  @Input("UserDetails") singleuser: { firstname: string, lastname: string, address: string, postcode: string };

  constructor() { }

  ngOnInit() {
  }

}
