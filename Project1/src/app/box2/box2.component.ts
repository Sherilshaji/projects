import { CommonModule,NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../model/user';
import { UserService } from '../user.service';
import { Interface } from '../interface';

@Component({
  selector: 'app-box2',
  standalone: true,
  imports: [CommonModule,FormsModule,NgIf],
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component {
//   @Output() event=new EventEmitter<any>();
//   @Input() editMode:boolean=false;
//   @Input() user:Interface={
//     name:'',
//     age:0
//   };
  
//   constructor(private userService:UserService){}
//   submit(){
//     if(this.editMode){
//       this.userService.edit(this.user).subscribe(result=>{
//         console.log(result);
//         alert("User edited");
//         this.event.emit(true);
//         this.clear();
//       })
//     }
//     else{
//     this.userService.addUsers(this.user).subscribe(result=>{
//       console.log(result);
//     })
//     this.event.emit(true);
//     alert("User inserted.");
//     this.clear();
//   }
// }
//   clear(){
//     this.user={
//       name:'',
//       age:0
//     };
//   }
  // productName!:string;
  // productsBackup:User[]=[];
  // products:User[]=[];
  // totalPrice:number=0;
  // productNames:string='';
  // minimum!:number;
  // maximum!:number;
  // categoryName!:string;
  // constructor(private productService:UserService){ 
  //   this.products=this.productService.getAllProducts();
  //   this.productsBackup=this.productService.getAllProducts();
  //   setTimeout(()=>
  //   {
  //     this.total();
  //   },4000)
  //  }
  //  search(){
  //   this.products=this.productsBackup.filter(product=>{ product.name?product.name.toLowerCase().includes(this.productName?this.productName.toLowerCase():''):''});
  //   this.products=this.productsBackup.filter(product=>product.price>=this.minimum && product.price<=this.maximum);
  //  }
  //  total(){
  //   this.totalPrice=this.products.reduce((sum,price)=>sum+price.price,0)
  //   this.totalPrice=this.totalPrice/this.products.length;
  //  }
  //  productNameChanged(){
  //   this.products=this.productsBackup.filter(product=>product.name.toLowerCase().includes(this.productName.toLowerCase()));
  //  }
  //  expProducts(){
  //   let maxProduct=this.productsBackup.reduce((max,current)=>{
  //     return current.price>max.price?current:max;
  //   },this.productsBackup[0]);
  //   this.products=[maxProduct];
  //  }
  //  category(){
  //   this.products=this.productsBackup.filter(product=>product.category.toLowerCase()==this.categoryName.toLowerCase())
  //   .map(product=>({name:product.name,price:product.price}as User));
  //  }
}