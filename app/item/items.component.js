"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var sqlite_service_1 = require("../services/sqlite.service");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(router, barcodeScanner, sqliteService) {
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.sqliteService = sqliteService;
        this.twoway = "Two way bound label";
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.barcodeScanner.available().then(function (available) {
            if (available) {
                _this.barcodeScanner.hasCameraPermission()
                    .then(function (granted) {
                    if (!granted) {
                        console.log("No permissions!!!!");
                        _this.barcodeScanner.requestCameraPermission();
                    }
                    console.log("has permissions!!!!");
                });
            }
        });
    };
    ItemsComponent.prototype.scanBarcode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var scan = function () {
                console.log("------ in scan function -------");
                _this.barcodeScanner
                    .scan({
                    formats: "QR_CODE, EAN_13",
                    beepOnScan: true,
                    reportDuplicates: true,
                    preferFrontCamera: false
                })
                    .then(function (result) {
                    var data = JSON.parse(result.text);
                    console.log("Scanner Result:", JSON.stringify(data));
                    resolve(data);
                })
                    .catch(function (error) {
                    console.log(error);
                    reject(error);
                });
            };
            _this.barcodeScanner.hasCameraPermission()
                .then(function (granted) {
                if (granted) {
                    scan();
                }
                else {
                    console.log("Permission denied");
                    reject("Camera Permissions denied!");
                }
            })
                .catch(function () {
                _this.barcodeScanner.requestCameraPermission()
                    .then(function () { return scan(); });
            });
        });
    };
    ItemsComponent.prototype.registerNewUser = function () {
        var _this = this;
        this.scanBarcode()
            .then(function (data) {
            console.log('data in regiser user::::', data);
            var result = data;
            var query = "INSERT INTO Users (UID, Name, Branch, DateOfInitiation) VALUES (?, ?, ?, ?)";
            var dataArray = [result.uId, result.name, result.branch, result.dateOfInitiation];
            return _this.sqliteService.insert(query, dataArray);
        })
            .then(function (id) {
            console.log("Registered new user with id:", id);
        })
            .catch(function (error) {
            console.log("Error Registering user:", error);
        });
    };
    ItemsComponent.prototype.showAllUsers = function () {
        this.router.navigate(["/users"]);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router, nativescript_barcodescanner_1.BarcodeScanner, sqlite_service_1.SqliteService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUV6QywyRUFBNkQ7QUFDN0QsNkRBQTJEO0FBTzNEO0lBTUksd0JBQW9CLE1BQWMsRUFBVSxjQUE4QixFQUFVLGFBQTRCO1FBQTVGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUx6RyxXQUFNLEdBQUcscUJBQXFCLENBQUM7SUFLOEUsQ0FBQztJQUVySCxpQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFNBQVM7WUFDM0MsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDWixLQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFO3FCQUNwQyxJQUFJLENBQUMsVUFBQyxPQUFPO29CQUNWLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7d0JBQ2xDLEtBQUksQ0FBQyxjQUFjLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztvQkFDbEQsQ0FBQztvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG9DQUFXLEdBQWxCO1FBQUEsaUJBb0NDO1FBbkNHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQUksSUFBSSxHQUFHO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMs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O0NBQUEsQUFqRkQsSUFpRkM7QUFqRlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyJztcclxuaW1wb3J0IHsgU3FsaXRlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NxbGl0ZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgdHdvd2F5ID0gXCJUd28gd2F5IGJvdW5kIGxhYmVsXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRhYmFzZTogYW55O1xyXG4gICAgcHVibGljIHBlb3BsZTogQXJyYXk8YW55PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGJhcmNvZGVTY2FubmVyOiBCYXJjb2RlU2Nhbm5lciwgcHJpdmF0ZSBzcWxpdGVTZXJ2aWNlOiBTcWxpdGVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLmF2YWlsYWJsZSgpLnRoZW4oKGF2YWlsYWJsZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLmhhc0NhbWVyYVBlcm1pc3Npb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChncmFudGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ3JhbnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBwZXJtaXNzaW9ucyEhISFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnJlcXVlc3RDYW1lcmFQZXJtaXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgcGVybWlzc2lvbnMhISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjYW5CYXJjb2RlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzY2FuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0gaW4gc2NhbiBmdW5jdGlvbiAtLS0tLS0tXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJjb2RlU2Nhbm5lclxyXG4gICAgICAgICAgICAgICAgICAgIC5zY2FuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0czogXCJRUl9DT0RFLCBFQU5fMTNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVlcE9uU2NhbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0RHVwbGljYXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmVyRnJvbnRDYW1lcmE6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YTogYW55ID0gSlNPTi5wYXJzZShyZXN1bHQudGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2Nhbm5lciBSZXN1bHQ6XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuaGFzQ2FtZXJhUGVybWlzc2lvbigpXHJcbiAgICAgICAgICAgICAgICAudGhlbihncmFudGVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JhbnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FuKClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcm1pc3Npb24gZGVuaWVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJDYW1lcmEgUGVybWlzc2lvbnMgZGVuaWVkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnJlcXVlc3RDYW1lcmFQZXJtaXNzaW9uKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2NhbigpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyTmV3VXNlcigpIHtcclxuICAgICAgICB0aGlzLnNjYW5CYXJjb2RlKClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YSBpbiByZWdpc2VyIHVzZXI6Ojo6JywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gXCJJTlNFUlQgSU5UTyBVc2VycyAoVUlELCBOYW1lLCBCcmFuY2gsIERhdGVPZkluaXRpYXRpb24pIFZBTFVFUyAoPywgPywgPywgPylcIjtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhQXJyYXkgPSBbcmVzdWx0LnVJZCwgcmVzdWx0Lm5hbWUsIHJlc3VsdC5icmFuY2gsIHJlc3VsdC5kYXRlT2ZJbml0aWF0aW9uXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNxbGl0ZVNlcnZpY2UuaW5zZXJ0KHF1ZXJ5LCBkYXRhQXJyYXkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlZ2lzdGVyZWQgbmV3IHVzZXIgd2l0aCBpZDpcIiwgaWQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBSZWdpc3RlcmluZyB1c2VyOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dBbGxVc2VycygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdXNlcnNcIl0pO1xyXG4gICAgfVxyXG59Il19