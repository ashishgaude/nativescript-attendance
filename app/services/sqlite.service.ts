import { Injectable } from "@angular/core";
const Sqlite = require("nativescript-sqlite");

@Injectable()
export class SqliteService {

    private database: any;

    constructor() {
        (new Sqlite("mytest.db"))
            .then(db => {
                this.init(db);
            });
    }

    public init(db) {
        return db.execSQL("CREATE TABLE IF NOT EXISTS Users (UID TEXT PRIMARY KEY, Name TEXT, Branch TEXT, DateOfInitiation TEXT)")
            .then(id => {
                console.log("Created/Already exists Users Table!");
                return db.execSQL("CREATE TABLE IF NOT EXISTS Users (UID INTEGER PRIMARY KEY, Name TEXT, Branch TEXT, DateOfInitiation TEXT)")
            })
            .then(id => {
                console.log("Created/Already exists Attandance Table!");
                this.database = db;
            })
            .catch(error => {
                console.log("Table creation Error:", error);
            })
    }

    public insert(query, dataArray) {
        // return this.database.execSQL("INSERT INTO people (firstname, lastname) VALUES (?, ?)", ["Nic", "Raboy"]);
        return this.database.execSQL(query, dataArray);
    }

    public fetch() {
        // this function needs to be modified for where condtions
        this.database.all("SELECT * FROM Users").then(rows => {
            for (var row in rows) {
                console.log(row)
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }

    public fetchAll(table) {
        return this.database.all(`SELECT * FROM Users`);
    }


    public deleteTable(tableName) {
        this.database.execSQL(`DROP TABLE IF EXISTS ${tableName}`, [], (err) => {
            console.log("TABLE DROPPED");
        });

    }
}
