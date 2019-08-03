import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'age-calculator';
  value: any;
  yourname: any;
  lovename: any;
  show: any;
  val: any;


  constructor(private toastr: ToastrService){
 
  }
  public checkloveper(){
   
        
      if(this.yourname === undefined) {
        this.toastr.warning('please enter your name')
        
      }
      else if(this.yourname.length <=2){
        this.toastr.warning('min length is 3')
    
      }
    
     
      else if(this.lovename === undefined){
        this.toastr.warning('please enter your love name')
     
      }
     
      else if(this.lovename.length <=2){
        this.toastr.warning('min length is 3')
   
      }
      else {
       
    let lovedata=Math.random()*100;
    let loverounddata=Math.floor(lovedata)
    
    this.value=loverounddata;
       
       if(loverounddata >= 90) {
         this.show='“You have found true love when you realize that you want to wake up beside your love every morning even when you have your differences.” '
         this.val="great";
       }
       if(loverounddata >= 70 && loverounddata <= 89) {
        this.show='“You are the source of my joy, the center of my world and the whole of my heart.”  ';
        this.val="Good";
      }
      if(loverounddata >= 40 && loverounddata <= 69) {
        this.show=' “My six word love story: I can’t imagine life without you.” ';
        this.val="Not bad"
      }
      if(loverounddata >= 0 && loverounddata <= 39) {
        this.show='“I went to sleep last night with a smile because I knew I’d be dreaming of you… but I woke up this morning with a smile because you weren’t a dream.”  '
        this.val="poor";
      }
    }
    
}
public cancle(){
  this.yourname="";
  this.lovename="";
  this.value="";

}
}
