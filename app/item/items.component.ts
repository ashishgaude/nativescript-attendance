import { Component, OnInit } from "@angular/core";

import { BarcodeScanner } from 'nativescript-barcodescanner';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    public twoway = "Two way bound label";

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private barcodeScanner: BarcodeScanner) { }

    ngOnInit(): void {
        // this.items = this.itemService.getItems();
        console.log("ng on int==============================");
        this.barcodeScanner.available().then((available) => {
            if (available) {
                this.barcodeScanner.hasCameraPermission()
                    .then((granted) => {
                        if (!granted) {
                            console.log("No permissions!!!!");
                            this.barcodeScanner.requestCameraPermission();
                        }
                        console.log("has permissions!!!!");
                    });
            }
        });
    }

    onTap() {
        this.scanBarcode();
    }

    onScanResult(res) {
        console.log("result:::", res);
    }

    scanBarcode() {

        let scan = () => {
            this.barcodeScanner.scan({
                formats: "QR_CODE, EAN_13",
                beepOnScan: true,
                reportDuplicates: true,
                preferFrontCamera: false
            })
                .then(result => {
                    this.twoway = JSON.stringify(result);
                    console.log(JSON.stringify(result))
                })
                .catch(error => console.log(error));
        };

        this.barcodeScanner.hasCameraPermission()
            .then(granted => granted ? scan() : console.log("Permission denied"))
            .catch(() => {
                this.barcodeScanner.requestCameraPermission()
                    .then(() => scan());
            });
    }
}