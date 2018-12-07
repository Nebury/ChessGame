import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chess'; 

  ninguna(){
    $('#tb1').appendTo('#a8');
    $('#cb1').appendTo('#b8');
    $('#ab1').appendTo('#c8');
    $('#db').appendTo('#d8');
    $('#rb').appendTo('#e8');
    $('#ab2').appendTo('#f8');
    $('#cb2').appendTo('#g8');
    $('#tb2').appendTo('#h8');
    $('#pb1').appendTo('#a7');
    $('#pb2').appendTo('#b7');
    $('#pb3').appendTo('#c7');
    $('#pb4').appendTo('#d7');
    $('#pb5').appendTo('#e7');
    $('#pb6').appendTo('#f7');
    $('#pb7').appendTo('#g7');
    $('#pb8').appendTo('#h7');
    
    $('#tn1').appendTo('#a1');
    $('#cn1').appendTo('#b1');
    $('#an1').appendTo('#c1');
    $('#dn').appendTo('#d1');
    $('#rn').appendTo('#e1');
    $('#an2').appendTo('#f1');
    $('#cn2').appendTo('#g1');
    $('#tn2').appendTo('#h1');
    $('#pn1').appendTo('#a2');
    $('#pn2').appendTo('#b2');
    $('#pn3').appendTo('#c2');
    $('#pn4').appendTo('#d2');
    $('#pn5').appendTo('#e2');
    $('#pn6').appendTo('#f2');
    $('#pn7').appendTo('#g2');
    $('#pn8').appendTo('#h2');
  }

  Abierta(){
    $('#pb5').appendTo('#e5');
    $('#pn5').appendTo('#e4');

    $('#tb1').appendTo('#a8');
    $('#cb1').appendTo('#b8');
    $('#ab1').appendTo('#c8');
    $('#db').appendTo('#d8');
    $('#rb').appendTo('#e8');
    $('#ab2').appendTo('#f8');
    $('#cb2').appendTo('#g8');
    $('#tb2').appendTo('#h8');
    $('#pb1').appendTo('#a7');
    $('#pb2').appendTo('#b7');
    $('#pb3').appendTo('#c7');
    $('#pb4').appendTo('#d7');
    $('#pb6').appendTo('#f7');
    $('#pb7').appendTo('#g7');
    $('#pb8').appendTo('#h7');
    $('#tn1').appendTo('#a1');
    $('#cn1').appendTo('#b1');
    $('#an1').appendTo('#c1');
    $('#dn').appendTo('#d1');
    $('#rn').appendTo('#e1');
    $('#an2').appendTo('#f1');
    $('#cn2').appendTo('#g1');
    $('#tn2').appendTo('#h1');
    $('#pn1').appendTo('#a2');
    $('#pn2').appendTo('#b2');
    $('#pn3').appendTo('#c2');
    $('#pn4').appendTo('#d2');
    $('#pn6').appendTo('#f2');
    $('#pn7').appendTo('#g2');
    $('#pn8').appendTo('#h2');


  }

  Espanola(){
    $('#cn2').appendTo('#f3');
    $('#an2').appendTo('#b5');
    $('#pb5').appendTo('#e5');
    $('#pn5').appendTo('#e4');
    $('#cb1').appendTo('#c6');

    $('#tb1').appendTo('#a8');
    $('#ab1').appendTo('#c8');
    $('#db').appendTo('#d8');
    $('#rb').appendTo('#e8');
    $('#ab2').appendTo('#f8');
    $('#cb2').appendTo('#g8');
    $('#tb2').appendTo('#h8');
    $('#pb1').appendTo('#a7');
    $('#pb2').appendTo('#b7');
    $('#pb3').appendTo('#c7');
    $('#pb4').appendTo('#d7');
    $('#pb6').appendTo('#f7');
    $('#pb7').appendTo('#g7');
    $('#pb8').appendTo('#h7'); 
    $('#tn1').appendTo('#a1');
    $('#cn1').appendTo('#b1');
    $('#an1').appendTo('#c1');
    $('#dn').appendTo('#d1');
    $('#rn').appendTo('#e1');
    $('#tn2').appendTo('#h1');
    $('#pn1').appendTo('#a2');
    $('#pn2').appendTo('#b2');
    $('#pn3').appendTo('#c2');
    $('#pn4').appendTo('#d2');
    $('#pn6').appendTo('#f2');
    $('#pn7').appendTo('#g2');
    $('#pn8').appendTo('#h2');

    

  }

  Ponziani(){
    $('#pn3').appendTo('#c3');
    $('#cn2').appendTo('#f3');
    $('#pn5').appendTo('#e4');
    $('#pb5').appendTo('#e5');
    $('#cb1').appendTo('#c6');

    $('#tb1').appendTo('#a8');
    $('#ab1').appendTo('#c8');
    $('#db').appendTo('#d8');
    $('#rb').appendTo('#e8');
    $('#ab2').appendTo('#f8');
    $('#cb2').appendTo('#g8');
    $('#tb2').appendTo('#h8');
    $('#pb1').appendTo('#a7');
    $('#pb2').appendTo('#b7');
    $('#pb3').appendTo('#c7');
    $('#pb4').appendTo('#d7');
    $('#pb6').appendTo('#f7');
    $('#pb7').appendTo('#g7');
    $('#pb8').appendTo('#h7');
    $('#tn1').appendTo('#a1');
    $('#cn1').appendTo('#b1');
    $('#an1').appendTo('#c1');
    $('#dn').appendTo('#d1');
    $('#rn').appendTo('#e1');
    $('#an2').appendTo('#f1');
    $('#tn2').appendTo('#h1');
    $('#pn1').appendTo('#a2');
    $('#pn2').appendTo('#b2');
    $('#pn4').appendTo('#d2');
    $('#pn6').appendTo('#f2');
    $('#pn7').appendTo('#g2');
    $('#pn8').appendTo('#h2');
  }

  Escocesa(){
    $('#pn4').appendTo('#d4');
    $('#pn5').appendTo('#e4');
    $('#cn2').appendTo('#f3');
    $('#pb5').appendTo('#e5');
    $('#cb1').appendTo('#c6');

    $('#tb1').appendTo('#a8');
    $('#ab1').appendTo('#c8');
    $('#db').appendTo('#d8');
    $('#rb').appendTo('#e8');
    $('#ab2').appendTo('#f8');
    $('#tb2').appendTo('#h8');
    $('#pb1').appendTo('#a7');
    $('#pb2').appendTo('#b7');
    $('#pb3').appendTo('#c7');
    $('#pb4').appendTo('#d7');
    $('#pb6').appendTo('#f7');
    $('#pb7').appendTo('#g7');
    $('#pb8').appendTo('#h7');
    
    $('#tn1').appendTo('#a1');
    $('#cn1').appendTo('#b1');
    $('#an1').appendTo('#c1');
    $('#dn').appendTo('#d1');
    $('#rn').appendTo('#e1');
    $('#an2').appendTo('#f1');       
    $('#tn2').appendTo('#h1');
    $('#pn1').appendTo('#a2');
    $('#pn2').appendTo('#b2');
    $('#pn3').appendTo('#c2');
    $('#pn6').appendTo('#f2');
    $('#pn7').appendTo('#g2');
    $('#pn8').appendTo('#h2');
  }

  Italiana(){
    $('#an2').appendTo('#c4');
    $('#cn2').appendTo('#f3');
    $('#pn5').appendTo('#e4');
    $('#pb5').appendTo('#e5');
    $('#cb1').appendTo('#c6');

    $('#tb1').appendTo('#a8');
    $('#ab1').appendTo('#c8');
    $('#db').appendTo('#d8');
    $('#rb').appendTo('#e8');
    $('#ab2').appendTo('#f8');
    $('#cb2').appendTo('#g8');
    $('#tb2').appendTo('#h8');
    $('#pb1').appendTo('#a7');
    $('#pb2').appendTo('#b7');
    $('#pb3').appendTo('#c7');
    $('#pb4').appendTo('#d7');
    $('#pb6').appendTo('#f7');
    $('#pb7').appendTo('#g7');
    $('#pb8').appendTo('#h7');
    
    $('#tn1').appendTo('#a1');
    $('#cn1').appendTo('#b1');
    $('#an1').appendTo('#c1');
    $('#dn').appendTo('#d1');
    $('#rn').appendTo('#e1');
    $('#tn2').appendTo('#h1');
    $('#pn1').appendTo('#a2');
    $('#pn2').appendTo('#b2');
    $('#pn3').appendTo('#c2');
    $('#pn4').appendTo('#d2');
    $('#pn6').appendTo('#f2');
    $('#pn7').appendTo('#g2');
    $('#pn8').appendTo('#h2');
  }

  Gambito(){
    $('#an2').appendTo('#c4');
    $('#pn2').appendTo('#b4');
    $('#pn5').appendTo('#e4');
    $('#cn2').appendTo('#f3');
    $('#cb1').appendTo('#c6');
    $('#pb5').appendTo('#e5');
    $('#ab2').appendTo('#c5');

    $('#tb1').appendTo('#a8');
    $('#ab1').appendTo('#c8');
    $('#db').appendTo('#d8');
    $('#rb').appendTo('#e8');
    $('#cb2').appendTo('#g8');
    $('#tb2').appendTo('#h8');
    $('#pb1').appendTo('#a7');
    $('#pb2').appendTo('#b7');
    $('#pb3').appendTo('#c7');
    $('#pb4').appendTo('#d7');
    $('#pb6').appendTo('#f7');
    $('#pb7').appendTo('#g7');
    $('#pb8').appendTo('#h7');
    
    $('#tn1').appendTo('#a1');
    $('#cn1').appendTo('#b1');
    $('#an1').appendTo('#c1');
    $('#dn').appendTo('#d1');
    $('#rn').appendTo('#e1');
    $('#tn2').appendTo('#h1');
    $('#pn1').appendTo('#a2');
    $('#pn3').appendTo('#c2');
    $('#pn4').appendTo('#d2');
    $('#pn6').appendTo('#f2');
    $('#pn7').appendTo('#g2');
    $('#pn8').appendTo('#h2');
    
  }
}









