"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoteService = (function () {
    function NoteService() {
    }
    NoteService.prototype.fetchNotes = function () {
        return new Promise(function (resolve) {
            wx.request({
                url: "http://" + NoteService.domain + ":3000/notes",
                dataType: 'json',
                success: function (response) {
                    var notes = response.data;
                    resolve({ notes: notes });
                },
                fail: function () {
                }
            });
        });
    };
    NoteService.prototype.fetchNote = function (id) {
        return new Promise(function (resolve) {
            wx.request({
                url: "http://" + NoteService.domain + ":3000/notes/" + id,
                dataType: 'json',
                success: function (response) {
                    var note = response.data;
                    resolve({ note: note });
                },
                fail: function () {
                }
            });
        });
    };
    NoteService.prototype.createNote = function (note) {
        return new Promise(function (resolve, reject) {
            wx.request({
                url: "http://" + NoteService.domain + ":3000/notes",
                method: "POST",
                data: JSON.stringify(note),
                success: function () {
                    resolve();
                },
                fail: function () {
                    reject();
                }
            });
        });
    };
    NoteService.prototype.updateNote = function (note) {
        return new Promise(function (resolve, reject) {
            wx.request({
                url: "http://" + NoteService.domain + ":3000/notes/" + note.id,
                method: "PUT",
                data: JSON.stringify(note),
                success: function () {
                    resolve();
                },
                fail: function () {
                    reject();
                }
            });
        });
    };
    NoteService.prototype.deleteNotes = function (ids) {
        return Promise.all(ids.map(function (id) {
            return new Promise(function (resolve) {
                wx.request({
                    url: "http://" + NoteService.domain + ":3000/notes/" + id,
                    method: "DELETE",
                    success: function (_a) {
                        var statusCode = _a.statusCode;
                        if (statusCode === 200) {
                            resolve();
                        }
                    }
                });
            });
        }));
    };
    NoteService.domain = "192.168.88.106";
    return NoteService;
}());
var noteService = new NoteService();
exports.noteService = noteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7SUFHRTtJQUFnQixDQUFDO0lBRWpCLGdDQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBMkM7WUFDN0QsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxHQUFHLEVBQUUsWUFBVSxXQUFXLENBQUMsTUFBTSxnQkFBYTtnQkFDOUMsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLE9BQU8sWUFBQyxRQUFRO29CQUNkLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFjLENBQUM7b0JBQ3RDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUNELElBQUk7Z0JBRUosQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2xCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUF3QztZQUMxRCxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxZQUFVLFdBQVcsQ0FBQyxNQUFNLG9CQUFlLEVBQUk7Z0JBQ3BELFFBQVEsRUFBRSxNQUFNO2dCQUNoQixPQUFPLFlBQUMsUUFBUTtvQkFDZCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBWSxDQUFDO29CQUNuQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCxJQUFJO2dCQUVKLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBc0Q7UUFDL0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLFlBQVUsV0FBVyxDQUFDLE1BQU0sZ0JBQWE7Z0JBQzlDLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTztvQkFDTCxPQUFPLEVBQUUsQ0FBQTtnQkFDWCxDQUFDO2dCQUNELElBQUk7b0JBQ0YsTUFBTSxFQUFFLENBQUE7Z0JBQ1YsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxJQUFVO1FBQ25CLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxZQUFVLFdBQVcsQ0FBQyxNQUFNLG9CQUFlLElBQUksQ0FBQyxFQUFJO2dCQUN6RCxNQUFNLEVBQUUsS0FBSztnQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLE9BQU87b0JBQ0wsT0FBTyxFQUFFLENBQUE7Z0JBQ1gsQ0FBQztnQkFDRCxJQUFJO29CQUNGLE1BQU0sRUFBRSxDQUFBO2dCQUNWLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksR0FBYTtRQUN2QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVU7WUFDMUMsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQW1CO2dCQUMzQyxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNULEdBQUcsRUFBRSxZQUFVLFdBQVcsQ0FBQyxNQUFNLG9CQUFlLEVBQUk7b0JBQ3BELE1BQU0sRUFBRSxRQUFRO29CQUNoQixPQUFPLFlBQUMsRUFBYzs0QkFBWiwwQkFBVTt3QkFDbEIsSUFBSSxVQUFVLEtBQUssR0FBRyxFQUFFOzRCQUN0QixPQUFPLEVBQUUsQ0FBQTt5QkFDVjtvQkFDSCxDQUFDO2lCQUNGLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVOLENBQUM7SUFuRk0sa0JBQU0sR0FBRyxnQkFBZ0IsQ0FBQztJQW9GbkMsa0JBQUM7Q0FBQSxBQXJGRCxJQXFGQztBQUVELElBQU0sV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7QUFDN0Isa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIE5vdGVTZXJ2aWNlIHtcbiAgc3RhdGljIGRvbWFpbiA9IFwiMTkyLjE2OC44OC4xMDZcIjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGZldGNoTm90ZXMoKTogUHJvbWlzZTx7IG5vdGVzOiBOb3RlW10gfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKHZhbHVlOiB7IG5vdGVzOiBOb3RlW10gfSkgPT4gdm9pZCkgPT4ge1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogYGh0dHA6Ly8ke05vdGVTZXJ2aWNlLmRvbWFpbn06MzAwMC9ub3Rlc2AsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zdCBub3RlcyA9IHJlc3BvbnNlLmRhdGEgYXMgTm90ZVtdO1xuICAgICAgICAgIHJlc29sdmUoeyBub3Rlczogbm90ZXMgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwoKSB7XG5cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZmV0Y2hOb3RlKGlkOiBzdHJpbmcpOiBQcm9taXNlPHsgbm90ZTogTm90ZSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsdWU6IHsgbm90ZTogTm90ZSB9KSA9PiB2b2lkKSA9PiB7XG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgaHR0cDovLyR7Tm90ZVNlcnZpY2UuZG9tYWlufTozMDAwL25vdGVzLyR7aWR9YCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICAgIGNvbnN0IG5vdGUgPSByZXNwb25zZS5kYXRhIGFzIE5vdGU7XG4gICAgICAgICAgcmVzb2x2ZSh7IG5vdGU6IG5vdGUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwoKSB7XG5cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlTm90ZShub3RlOiB7IHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgdGV4dDogc3RyaW5nIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogYGh0dHA6Ly8ke05vdGVTZXJ2aWNlLmRvbWFpbn06MzAwMC9ub3Rlc2AsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5vdGUpLFxuICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsKCkge1xuICAgICAgICAgIHJlamVjdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZU5vdGUobm90ZTogTm90ZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgaHR0cDovLyR7Tm90ZVNlcnZpY2UuZG9tYWlufTozMDAwL25vdGVzLyR7bm90ZS5pZH1gLFxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5vdGUpLFxuICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsKCkge1xuICAgICAgICAgIHJlamVjdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZU5vdGVzKGlkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWRbXT4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbDx2b2lkPihpZHMubWFwKChpZDogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmU6ICgpID0+IHZvaWQpID0+IHtcbiAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiBgaHR0cDovLyR7Tm90ZVNlcnZpY2UuZG9tYWlufTozMDAwL25vdGVzLyR7aWR9YCxcbiAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgc3VjY2Vzcyh7IHN0YXR1c0NvZGUgfSkge1xuICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pKTtcblxuICB9XG59XG5cbmNvbnN0IG5vdGVTZXJ2aWNlID0gbmV3IE5vdGVTZXJ2aWNlKCk7XG5leHBvcnQgeyBub3RlU2VydmljZSB9XG4iXX0=