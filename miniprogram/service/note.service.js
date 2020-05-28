"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_1 = require("../mock/mock");
var NoteService = (function () {
    function NoteService() {
    }
    NoteService.prototype.fetchNotes = function () {
        return new Promise(function (resolve) {
            wx.request({
                url: "http://localhost:3000/notes", success: function () {
                    resolve({ notes: mock_1.MOCK.notes });
                }, fail: function () {
                }
            });
        });
    };
    return NoteService;
}());
exports.NoteService = NoteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQW9DO0FBRXBDO0lBQ0U7SUFBZ0IsQ0FBQztJQUVqQixnQ0FBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQTJDO1lBQzdELEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLDZCQUE2QixFQUFFLE9BQU87b0JBQ3pDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxFQUFFLElBQUk7Z0JBRVAsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1PQ0sgfSBmcm9tIFwiLi4vbW9jay9tb2NrXCI7XG5cbmV4cG9ydCBjbGFzcyBOb3RlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZmV0Y2hOb3RlcygpOiBQcm9taXNlPHsgbm90ZXM6IE5vdGVbXSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsdWU6IHsgbm90ZXM6IE5vdGVbXSB9KSA9PiB2b2lkKSA9PiB7XG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ub3Rlc1wiLCBzdWNjZXNzKCkge1xuICAgICAgICAgIHJlc29sdmUoeyBub3RlczogTU9DSy5ub3RlcyB9KTtcbiAgICAgICAgfSwgZmFpbCgpIHtcblxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==