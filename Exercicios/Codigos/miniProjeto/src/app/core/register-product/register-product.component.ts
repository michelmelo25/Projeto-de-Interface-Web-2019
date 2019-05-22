import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/servises/produto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  produto:Produto;

  constructor(private productServise:ProdutoService, private toasty:ToastrService) { 
    this.produto = new Produto();
  }

  ngOnInit() {
  }

  onSubmit(){
    this.productServise.register(this.produto).subscribe(
      (res:Produto) => {
      this.toasty.success(`${res.name} cadastrado`);
      this.produto = new Produto();
      }
    );
  }
}
