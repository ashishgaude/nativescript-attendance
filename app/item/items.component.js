"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
        this.twoway = "Two way bound label";
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.items = this.itemService.getItems();
        console.log("ng on int==============================");
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
    ItemsComponent.prototype.onTap = function () {
        this.scanBarcode();
    };
    ItemsComponent.prototype.onScanResult = function (res) {
        console.log("result:::", res);
    };
    ItemsComponent.prototype.scanBarcode = function () {
        var _this = this;
        var scan = function () {
            _this.barcodeScanner.scan({
                formats: "QR_CODE, EAN_13",
                beepOnScan: true,
                reportDuplicates: true,
                preferFrontCamera: false
            })
                .then(function (result) {
                _this.twoway = JSON.stringify(result);
                console.log(JSON.stringify(result));
            })
                .catch(function (error) { return console.log(error); });
        };
        this.barcodeScanner.hasCameraPermission()
            .then(function (granted) { return granted ? scan() : console.log("Permission denied"); })
            .catch(function () {
            _this.barcodeScanner.requestCameraPermission()
                .then(function () { return scan(); });
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDJFQUE2RDtBQU83RDtJQUdJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUozQyxXQUFNLEdBQUcscUJBQXFCLENBQUM7SUFJZ0IsQ0FBQztJQUV2RCxpQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFkRyw0Q0FBNEM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBUztZQUMzQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNaLEtBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUU7cUJBQ3BDLElBQUksQ0FBQyxVQUFDLE9BQU87b0JBQ1YsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQzt3QkFDbEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO29CQUNsRCxDQUFDO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLEdBQUc7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUFBLGlCQXNCQztRQXBCRyxJQUFJLElBQUksR0FBRztZQUNQLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUNyQixPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsaUJBQWlCLEVBQUUsS0FBSzthQUMzQixDQUFDO2lCQUNHLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ1IsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtZQUN2QyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUU7YUFDcEMsSUFBSSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFuRCxDQUFtRCxDQUFDO2FBQ3BFLEtBQUssQ0FBQztZQUNILEtBQUksQ0FBQyxjQUFjLENBQUMsdUJBQXVCLEVBQUU7aUJBQ3hDLElBQUksQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFFLEVBQU4sQ0FBTSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBdERRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBTXNDLDRDQUFjO09BTHpDLGNBQWMsQ0F1RDFCO0lBQUQscUJBQUM7Q0FBQSxBQXZERCxJQXVEQztBQXZEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHR3b3dheSA9IFwiVHdvIHdheSBib3VuZCBsYWJlbFwiO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXJjb2RlU2Nhbm5lcjogQmFyY29kZVNjYW5uZXIpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmcgb24gaW50PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpO1xuICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLmF2YWlsYWJsZSgpLnRoZW4oKGF2YWlsYWJsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuaGFzQ2FtZXJhUGVybWlzc2lvbigpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChncmFudGVkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdyYW50ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHBlcm1pc3Npb25zISEhIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnJlcXVlc3RDYW1lcmFQZXJtaXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhcyBwZXJtaXNzaW9ucyEhISFcIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRhcCgpIHtcbiAgICAgICAgdGhpcy5zY2FuQmFyY29kZSgpO1xuICAgIH1cblxuICAgIG9uU2NhblJlc3VsdChyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQ6OjpcIiwgcmVzKTtcbiAgICB9XG5cbiAgICBzY2FuQmFyY29kZSgpIHtcblxuICAgICAgICBsZXQgc2NhbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuc2Nhbih7XG4gICAgICAgICAgICAgICAgZm9ybWF0czogXCJRUl9DT0RFLCBFQU5fMTNcIixcbiAgICAgICAgICAgICAgICBiZWVwT25TY2FuOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlcG9ydER1cGxpY2F0ZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlZmVyRnJvbnRDYW1lcmE6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHdvd2F5ID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuaGFzQ2FtZXJhUGVybWlzc2lvbigpXG4gICAgICAgICAgICAudGhlbihncmFudGVkID0+IGdyYW50ZWQgPyBzY2FuKCkgOiBjb25zb2xlLmxvZyhcIlBlcm1pc3Npb24gZGVuaWVkXCIpKVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnJlcXVlc3RDYW1lcmFQZXJtaXNzaW9uKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2NhbigpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXX0=