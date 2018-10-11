import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
qrData=null;
CreatedCode=null;
ScannedCode =null;
  constructor(private barcodeScanner:BarcodeScanner) {

  }
  CreateCode(){
this.CreateCode=this.qrData;

  }

  ScanCode(){
    this.barcodeScanner.scan().then(barcodeData =>{
      this.ScannedCode=barcodeData.text;
    })


  }
}
