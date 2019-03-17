import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { SqliteService } from '../services/sqlite.service';

@Component({
    selector: "ns-users",
    moduleId: module.id,
    templateUrl: "./user-detail.component.html",
})
export class UserDetailComponent implements OnInit {

    public twoway = "All users details will be shown here";

    constructor(private router: Router, private sqliteService: SqliteService) { }

    ngOnInit(): void {
        console.log("ngoninit!!!!!!!!!!!!!!!!!!!!!!!!!")
        this.getAllUsers();
    }

    public getAllUsers() {
        // this.sqliteService.fetch();
        this.sqliteService.fetchAll('Users')
            .then(rows => {
                console.log("==============>", rows);
                this.twoway = JSON.stringify(rows);
                // for (var row in rows) {
                //     console.log('Row:', row);
                // }
            }, error => {
                console.log("SELECT ERROR", error);
            });
    }
}