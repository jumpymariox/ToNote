"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_1 = require("../mock/mock");
var NoteService = (function () {
    function NoteService() {
    }
    NoteService.prototype.fetchNotes = function () {
        return new Promise(function (resolve) {
            resolve({ notes: mock_1.MOCK.notes });
        });
    };
    return NoteService;
}());
exports.NoteService = NoteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQW9DO0FBRXBDO0lBQ0U7SUFBZ0IsQ0FBQztJQUVqQixnQ0FBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQTJDO1lBQzdELE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNT0NLIH0gZnJvbSBcIi4uL21vY2svbW9ja1wiO1xuXG5leHBvcnQgY2xhc3MgTm90ZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGZldGNoTm90ZXMoKTogUHJvbWlzZTx7IG5vdGVzOiBOb3RlW10gfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKHZhbHVlOiB7IG5vdGVzOiBOb3RlW10gfSkgPT4gdm9pZCkgPT4ge1xuICAgICAgcmVzb2x2ZSh7IG5vdGVzOiBNT0NLLm5vdGVzIH0pO1xuICAgIH0pXG4gIH1cbn1cbiJdfQ==