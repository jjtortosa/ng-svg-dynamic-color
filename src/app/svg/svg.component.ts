import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {

  @ViewChild('container') container: ElementRef;
  public svg: SVGElement;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.http.get('assets/svg.svg', {responseType: 'text'}).subscribe(svg => {
      this.container.nativeElement.innerHTML = svg;
      this.svg = this.container.nativeElement.querySelector('svg');
    });
  }

  setColor(color: string): void {
    this.svg.style.fill = color;
  }
}
