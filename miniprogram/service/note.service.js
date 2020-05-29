"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoteService = (function () {
    function NoteService() {
    }
    NoteService.prototype.fetchNotes = function () {
        return new Promise(function (resolve) {
            wx.request({
                url: "http://192.168.88.106:3000/notes",
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
    NoteService.prototype.createNote = function (note) {
        return new Promise(function (resolve, reject) {
            wx.request({
                url: "http://192.168.88.106:3000/notes",
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
    return NoteService;
}());
var noteService = new NoteService();
exports.noteService = noteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7SUFDRTtJQUFnQixDQUFDO0lBRWpCLGdDQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBMkM7WUFDN0QsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxHQUFHLEVBQUUsa0NBQWtDO2dCQUN2QyxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsT0FBTyxZQUFDLFFBQVE7b0JBQ2QsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQWMsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBQ0QsSUFBSTtnQkFFSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLElBQXdDO1FBQ2pELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxrQ0FBa0M7Z0JBQ3ZDLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTztvQkFDTCxPQUFPLEVBQUUsQ0FBQTtnQkFDWCxDQUFDO2dCQUNELElBQUk7b0JBQ0YsTUFBTSxFQUFFLENBQUE7Z0JBQ1YsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQUVELElBQU0sV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7QUFDN0Isa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIE5vdGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBmZXRjaE5vdGVzKCk6IFByb21pc2U8eyBub3RlczogTm90ZVtdIH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWx1ZTogeyBub3RlczogTm90ZVtdIH0pID0+IHZvaWQpID0+IHtcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IFwiaHR0cDovLzE5Mi4xNjguODguMTA2OjMwMDAvbm90ZXNcIixcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICAgIGNvbnN0IG5vdGVzID0gcmVzcG9uc2UuZGF0YSBhcyBOb3RlW107XG4gICAgICAgICAgcmVzb2x2ZSh7IG5vdGVzOiBub3RlcyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCgpIHtcblxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVOb3RlKG5vdGU6IHsgdGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogXCJodHRwOi8vMTkyLjE2OC44OC4xMDY6MzAwMC9ub3Rlc1wiLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShub3RlKSxcbiAgICAgICAgc3VjY2VzcygpIHtcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCgpIHtcbiAgICAgICAgICByZWplY3QoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3Qgbm90ZVNlcnZpY2UgPSBuZXcgTm90ZVNlcnZpY2UoKTtcbmV4cG9ydCB7IG5vdGVTZXJ2aWNlIH1cbiJdfQ==