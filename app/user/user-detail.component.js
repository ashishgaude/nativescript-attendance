"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var sqlite_service_1 = require("../services/sqlite.service");
var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(router, sqliteService) {
        this.router = router;
        this.sqliteService = sqliteService;
        this.twoway = "All users details will be shown here";
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        console.log("ngoninit!!!!!!!!!!!!!!!!!!!!!!!!!");
        this.getAllUsers();
    };
    UserDetailComponent.prototype.getAllUsers = function () {
        var _this = this;
        // this.sqliteService.fetch();
        this.sqliteService.fetchAll('Users')
            .then(function (rows) {
            console.log("==============>", rows);
            _this.twoway = JSON.stringify(rows);
            // for (var row in rows) {
            //     console.log('Row:', row);
            // }
        }, function (error) {
            console.log("SELECT ERROR", error);
        });
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-users",
            moduleId: module.id,
            templateUrl: "./user-detail.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router, sqlite_service_1.SqliteService])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUV6Qyw2REFBMkQ7QUFPM0Q7SUFJSSw2QkFBb0IsTUFBYyxFQUFVLGFBQTRCO1FBQXBELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUZqRSxXQUFNLEdBQUcsc0NBQXNDLENBQUM7SUFFcUIsQ0FBQztJQUU3RSxzQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0seUNBQVcsR0FBbEI7UUFBQSxpQkFZQztRQVhHLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDL0IsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckMsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLDBCQUEwQjtZQUMxQixnQ0FBZ0M7WUFDaEMsSUFBSTtRQUNSLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUF2QlEsbUJBQW1CO1FBTC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDO3lDQUs4QixlQUFNLEVBQXlCLDhCQUFhO09BSi9ELG1CQUFtQixDQXdCL0I7SUFBRCwwQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgU3FsaXRlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NxbGl0ZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtdXNlcnNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3VzZXItZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgdHdvd2F5ID0gXCJBbGwgdXNlcnMgZGV0YWlscyB3aWxsIGJlIHNob3duIGhlcmVcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNxbGl0ZVNlcnZpY2U6IFNxbGl0ZVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdvbmluaXQhISEhISEhISEhISEhISEhISEhISEhISEhXCIpXHJcbiAgICAgICAgdGhpcy5nZXRBbGxVc2VycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGxVc2VycygpIHtcclxuICAgICAgICAvLyB0aGlzLnNxbGl0ZVNlcnZpY2UuZmV0Y2goKTtcclxuICAgICAgICB0aGlzLnNxbGl0ZVNlcnZpY2UuZmV0Y2hBbGwoJ1VzZXJzJylcclxuICAgICAgICAgICAgLnRoZW4ocm93cyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PlwiLCByb3dzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHdvd2F5ID0gSlNPTi5zdHJpbmdpZnkocm93cyk7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKHZhciByb3cgaW4gcm93cykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdSb3c6Jywgcm93KTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTRUxFQ1QgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==