import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from './../../models/produto';
import { ProdutoService } from './../../servises/produto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products:Produto[];

  constructor(private productService:ProdutoService, private route:Router, private toasty:ToastrService) { 
    this.products = [];
  }

  ngOnInit() {
    this.list();
  }

  list(){
    this.productService.list().subscribe(
      (res:Produto[]) => {this.products = res}
    );
  }

  edit(id:number){
    this.route.navigate(['edit/product',id]);
  }

  delete(id:number){
    this.productService.delete(id).subscribe(
      (res:any) => {
        this.toasty.success(`Produto deletado`);
        this.list()
      }
    );
  }
}
