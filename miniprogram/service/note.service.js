"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_1 = require("../mock/mock");
var NoteService = (function () {
    function NoteService() {
    }
    NoteService.prototype.fetchNotes = function () {
        return new Promise(function (resolve) {
            wx.request({
                url: "localhost:8080/notes", success: function () {
                    resolve({ notes: mock_1.MOCK.notes });
                }, fail: function () {
                }
            });
        });
    };
    return NoteService;
}());
exports.NoteService = NoteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQW9DO0FBRXBDO0lBQ0U7SUFBZ0IsQ0FBQztJQUVqQixnQ0FBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQTJDO1lBQzdELEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLHNCQUFzQixFQUFFLE9BQU87b0JBQ2xDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxFQUFFLElBQUk7Z0JBRVAsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1PQ0sgfSBmcm9tIFwiLi4vbW9jay9tb2NrXCI7XG5cbmV4cG9ydCBjbGFzcyBOb3RlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZmV0Y2hOb3RlcygpOiBQcm9taXNlPHsgbm90ZXM6IE5vdGVbXSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsdWU6IHsgbm90ZXM6IE5vdGVbXSB9KSA9PiB2b2lkKSA9PiB7XG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBcImxvY2FsaG9zdDo4MDgwL25vdGVzXCIsIHN1Y2Nlc3MoKSB7XG4gICAgICAgICAgcmVzb2x2ZSh7IG5vdGVzOiBNT0NLLm5vdGVzIH0pO1xuICAgICAgICB9LCBmYWlsKCkge1xuXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIl19