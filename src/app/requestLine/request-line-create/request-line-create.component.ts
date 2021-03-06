import { Component, OnInit } from '@angular/core';
import { RequestLineService } from '../../requestLine/request-line.service';
import { RequestLine } from '../../requestLine/request-line.class';
import { SystemService } from '../../system/system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit 
{

  requestId: number;
  requestLine: RequestLine = new RequestLine (0,0);
  products: Product[];

  save(): void
  {
    this.requestLine.requestId = this.requestId
    this.requestLinesrv.create(this.requestLine)
      .subscribe
      (
        resp => 
        {
          console.log(resp);
          this.router.navigateByUrl(`/requestLine/list/${this.requestId}`);
        },
        err => 
        {
          console.error(err);
        }
      )
  }
  constructor
  ( private requestLinesrv: RequestLineService,
    private route: ActivatedRoute,
    private router: Router,
    private syssrv: SystemService,
    private productsrv: ProductService
  ) { }

  ngOnInit() 
  {
    this.requestId = this.route.snapshot.params.prid;
    this.productsrv.list()
      .subscribe(resp => 
        {
          this.products = resp;
        })
  }

}
