import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { BarcodeScanner } from 'nativescript-barcodescanner';
import { SqliteService } from '../services/sqlite.service';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    public twoway = "Two way bound label";

    private database: any;
    public people: Array<any>;

    constructor(private router: Router, private barcodeScanner: BarcodeScanner, private sqliteService: SqliteService) { }

    ngOnInit(): void {
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

    public scanBarcode() {
        return new Promise((resolve, reject) => {
            let scan = () => {
                console.log("------ in scan function -------");
                this.barcodeScanner
                    .scan({
                        formats: "QR_CODE, EAN_13",
                        beepOnScan: true,
                        reportDuplicates: true,
                        preferFrontCamera: false
                    })
                    .then(result => {
                        let data: any = JSON.parse(result.text);
                        console.log("Scanner Result:", JSON.stringify(data));
                        resolve(data);
                    })
                    .catch(error => {
                        console.log(error);
                        reject(error);
                    });
            };

            this.barcodeScanner.hasCameraPermission()
                .then(granted => {
                    if (granted) {
                        scan()
                    } else {
                        console.log("Permission denied");
                        reject("Camera Permissions denied!");
                    }
                })
                .catch(() => {
                    this.barcodeScanner.requestCameraPermission()
                        .then(() => scan());
                });
        })
    }

    public registerNewUser() {
        this.scanBarcode()
            .then(data => {
                console.log('data in regiser user::::', data);
                let result: any = data;
                let query = "INSERT INTO Users (UID, Name, Branch, DateOfInitiation) VALUES (?, ?, ?, ?)";
                let dataArray = [result.uId, result.name, result.branch, result.dateOfInitiation];
                return this.sqliteService.insert(query, dataArray);
            })
            .then(id => {
                console.log("Registered new user with id:", id);
            })
            .catch(error => {
                console.log("Error Registering user:", error);
            })
    }

    public showAllUsers() {
        this.router.navigate(["/users"]);
    }
}