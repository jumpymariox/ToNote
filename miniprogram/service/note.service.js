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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7SUFHRTtJQUFnQixDQUFDO0lBRWpCLGdDQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBMkM7WUFDN0QsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxHQUFHLEVBQUUsWUFBVSxXQUFXLENBQUMsTUFBTSxnQkFBYTtnQkFDOUMsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLE9BQU8sWUFBQyxRQUFRO29CQUNkLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFjLENBQUM7b0JBQ3RDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUNELElBQUk7Z0JBRUosQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2xCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUF3QztZQUMxRCxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxZQUFVLFdBQVcsQ0FBQyxNQUFNLG9CQUFlLEVBQUk7Z0JBQ3BELFFBQVEsRUFBRSxNQUFNO2dCQUNoQixPQUFPLFlBQUMsUUFBUTtvQkFDZCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBWSxDQUFDO29CQUNuQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCxJQUFJO2dCQUVKLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBd0M7UUFDakQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLFlBQVUsV0FBVyxDQUFDLE1BQU0sZ0JBQWE7Z0JBQzlDLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTztvQkFDTCxPQUFPLEVBQUUsQ0FBQTtnQkFDWCxDQUFDO2dCQUNELElBQUk7b0JBQ0YsTUFBTSxFQUFFLENBQUE7Z0JBQ1YsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxHQUFhO1FBQ3ZCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBVTtZQUMxQyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBbUI7Z0JBQzNDLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ1QsR0FBRyxFQUFFLFlBQVUsV0FBVyxDQUFDLE1BQU0sb0JBQWUsRUFBSTtvQkFDcEQsTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLE9BQU8sWUFBQyxFQUFjOzRCQUFaLDBCQUFVO3dCQUNsQixJQUFJLFVBQVUsS0FBSyxHQUFHLEVBQUU7NEJBQ3RCLE9BQU8sRUFBRSxDQUFBO3lCQUNWO29CQUNILENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRU4sQ0FBQztJQW5FTSxrQkFBTSxHQUFHLGdCQUFnQixDQUFDO0lBb0VuQyxrQkFBQztDQUFBLEFBckVELElBcUVDO0FBRUQsSUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUM3QixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgTm90ZVNlcnZpY2Uge1xuICBzdGF0aWMgZG9tYWluID0gXCIxOTIuMTY4Ljg4LjEwNlwiO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZmV0Y2hOb3RlcygpOiBQcm9taXNlPHsgbm90ZXM6IE5vdGVbXSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsdWU6IHsgbm90ZXM6IE5vdGVbXSB9KSA9PiB2b2lkKSA9PiB7XG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgaHR0cDovLyR7Tm90ZVNlcnZpY2UuZG9tYWlufTozMDAwL25vdGVzYCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICAgIGNvbnN0IG5vdGVzID0gcmVzcG9uc2UuZGF0YSBhcyBOb3RlW107XG4gICAgICAgICAgcmVzb2x2ZSh7IG5vdGVzOiBub3RlcyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCgpIHtcblxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBmZXRjaE5vdGUoaWQ6IHN0cmluZyk6IFByb21pc2U8eyBub3RlOiBOb3RlIH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWx1ZTogeyBub3RlOiBOb3RlIH0pID0+IHZvaWQpID0+IHtcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGBodHRwOi8vJHtOb3RlU2VydmljZS5kb21haW59OjMwMDAvbm90ZXMvJHtpZH1gLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBzdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc3Qgbm90ZSA9IHJlc3BvbnNlLmRhdGEgYXMgTm90ZTtcbiAgICAgICAgICByZXNvbHZlKHsgbm90ZTogbm90ZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCgpIHtcblxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVOb3RlKG5vdGU6IHsgdGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogYGh0dHA6Ly8ke05vdGVTZXJ2aWNlLmRvbWFpbn06MzAwMC9ub3Rlc2AsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG5vdGUpLFxuICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsKCkge1xuICAgICAgICAgIHJlamVjdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZU5vdGVzKGlkczogc3RyaW5nW10pOiBQcm9taXNlPHZvaWRbXT4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbDx2b2lkPihpZHMubWFwKChpZDogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmU6ICgpID0+IHZvaWQpID0+IHtcbiAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiBgaHR0cDovLyR7Tm90ZVNlcnZpY2UuZG9tYWlufTozMDAwL25vdGVzLyR7aWR9YCxcbiAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgc3VjY2Vzcyh7IHN0YXR1c0NvZGUgfSkge1xuICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pKTtcblxuICB9XG59XG5cbmNvbnN0IG5vdGVTZXJ2aWNlID0gbmV3IE5vdGVTZXJ2aWNlKCk7XG5leHBvcnQgeyBub3RlU2VydmljZSB9XG4iXX0=