import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  global_title = 'Halo Global Component';
  global_desc = 'Data dari app.component.ts';
  global_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  global_is_available = false;
  global_loading = false;

  setTrue() {
    this.global_is_available = true;
    console.log("Set True");
  }

  setFalse() {
    this.global_is_available = false;
    console.log("Set false");
  }

  constructor(private http: HttpClient) { }

  url = 'https://endemikdb.site/hwn';
  data: any;
  json: any;

  getData() {
    this.global_loading = true;
    this.http.get(this.url)
      .subscribe((value) => {
        // console.log(value);
        this.json = value;
        this.data = this.json.hasil;
        // console.log(this.data);

        this.global_loading = false;
      })
  }


  postData(postData: any) {
    this.global_loading = true;
    let post_url = 'https://www.endemikdb.site/hwn?nama=' + postData.nama;

    console.log(postData);
    console.log(post_url);

    const httpHeaders = new HttpHeaders()
      // .append('content-type', 'application/json')
      .append('Access-Control-Allow-Origin', '*')
      .append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
      .append("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");

    this.http.post(post_url, null, { 'headers': httpHeaders })
      .subscribe({
        // process
        next: (value) => {
          console.log(value);
          this.data = value;
          this.global_loading = false;
        },

        // catch error
        error: (error) => {
          console.log(error.message);
          this.global_loading = false;
        },
      })
  }
}
