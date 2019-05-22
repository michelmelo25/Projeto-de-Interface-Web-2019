import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from './../../models/produto';
import { ProdutoService } from './../../servises/produto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product:Produto;

  constructor(private productServise:ProdutoService, private activatedRoute:ActivatedRoute, private router:Router, private toasty:ToastrService) { 
    this.product = new Produto;
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params["id"];
    this.productServise.retrieveById(id).subscribe(
      (res:Produto) => {this.product = res}
    );
  }

  onSubmit(){
    this.productServise.update(this.product).subscribe(
      (res:Produto) => {
        this.toasty.success(`${res.name} atualizado`);
        this.product = new Produto;
        this.router.navigate(['list/products']);
      }
    );
  }
}
