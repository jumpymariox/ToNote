"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var note_service_1 = require("../../service/note.service");
Page({
    data: {
        showAddBtn: true,
        showDeleteBtn: false,
        showUndoBtn: false,
        editting: false,
        notes: [],
        selectedNoteIds: []
    },
    onLoad: function () {
    },
    onShow: function () {
        this.fetchAndSetNotes();
    },
    createNote: function () {
        wx.navigateTo({ url: "/pages/note/note" });
    },
    readyToEditNotes: function () {
        this.setData({
            showAddBtn: false,
            showDeleteBtn: true,
            showUndoBtn: true,
            editting: true
        });
    },
    cancelEditNotes: function () {
        this.setData({
            showAddBtn: true,
            showDeleteBtn: false,
            showUndoBtn: false,
            editting: false
        });
    },
    deleteNotes: function () {
        var _this = this;
        this.cancelEditNotes();
        note_service_1.noteService.deleteNotes(this.data.selectedNoteIds).then(function () {
            _this.fetchAndSetNotes();
        });
    },
    selectedNotesChange: function (e) {
        this.setData({ selectedNoteIds: e.detail.selectedNoteIds });
    },
    fetchAndSetNotes: function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            note_service_1.noteService.fetchNotes().then(function (_a) {
                var notes = _a.notes;
                _this.setData({ notes: notes });
                resolve();
            }).catch(reject);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJEQUF3RDtBQXNCeEQsSUFBSSxDQUE2QjtJQUMvQixJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsSUFBSTtRQUNoQixhQUFhLEVBQUUsS0FBSztRQUNwQixXQUFXLEVBQUUsS0FBSztRQUNsQixRQUFRLEVBQUUsS0FBSztRQUNmLEtBQUssRUFBRSxFQUFFO1FBQ1QsZUFBZSxFQUFFLEVBQUU7S0FDcEI7SUFDRCxNQUFNO0lBQ04sQ0FBQztJQUNELE1BQU07UUFDSixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsVUFBVTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLEtBQUs7WUFDakIsYUFBYSxFQUFFLElBQUk7WUFDbkIsV0FBVyxFQUFFLElBQUk7WUFDakIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsS0FBSztZQUNwQixXQUFXLEVBQUUsS0FBSztZQUNsQixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVztRQUFYLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLDBCQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3RELEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELG1CQUFtQixZQUFDLENBQU07UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGdCQUFnQixFQUFoQjtRQUFBLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLDBCQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBNEI7b0JBQTFCLGdCQUFLO2dCQUNwQyxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG5pbXBvcnQgeyBub3RlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL25vdGUuc2VydmljZVwiXG5cbm5hbWVzcGFjZSBJbmRleCB7XG4gIGV4cG9ydCB0eXBlIElEYXRhID0ge1xuICAgIHNob3dBZGRCdG46IGJvb2xlYW4sXG4gICAgc2hvd0RlbGV0ZUJ0bjogYm9vbGVhbixcbiAgICBzaG93VW5kb0J0bjogYm9vbGVhbixcbiAgICBlZGl0dGluZzogYm9vbGVhbixcbiAgICBub3RlczogTm90ZVtdLFxuICAgIHNlbGVjdGVkTm90ZUlkczogc3RyaW5nW11cbiAgfVxuICBleHBvcnQgdHlwZSBJQ3VzdG9tID0ge1xuICAgIGNyZWF0ZU5vdGU6ICgpID0+IHZvaWQsXG4gICAgcmVhZHlUb0VkaXROb3RlczogKCkgPT4gdm9pZCxcbiAgICBjYW5jZWxFZGl0Tm90ZXM6ICgpID0+IHZvaWQsXG4gICAgZGVsZXRlTm90ZXM6ICgpID0+IHZvaWQsXG4gICAgc2VsZWN0ZWROb3Rlc0NoYW5nZTogKGU6IGFueSkgPT4gdm9pZCxcbiAgICBmZXRjaEFuZFNldE5vdGVzOiAoKSA9PiBQcm9taXNlPHZvaWQ+XG4gIH1cbn1cblxuLy8g6I635Y+W5bqU55So5a6e5L6LXG5QYWdlPEluZGV4LklEYXRhLCBJbmRleC5JQ3VzdG9tPih7XG4gIGRhdGE6IHtcbiAgICBzaG93QWRkQnRuOiB0cnVlLFxuICAgIHNob3dEZWxldGVCdG46IGZhbHNlLFxuICAgIHNob3dVbmRvQnRuOiBmYWxzZSxcbiAgICBlZGl0dGluZzogZmFsc2UsXG4gICAgbm90ZXM6IFtdLFxuICAgIHNlbGVjdGVkTm90ZUlkczogW11cbiAgfSxcbiAgb25Mb2FkKCkge1xuICB9LFxuICBvblNob3coKSB7XG4gICAgdGhpcy5mZXRjaEFuZFNldE5vdGVzKCk7XG4gIH0sXG4gIGNyZWF0ZU5vdGUoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7IHVybDogXCIvcGFnZXMvbm90ZS9ub3RlXCIgfSk7XG4gIH0sXG4gIHJlYWR5VG9FZGl0Tm90ZXMoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNob3dBZGRCdG46IGZhbHNlLFxuICAgICAgc2hvd0RlbGV0ZUJ0bjogdHJ1ZSxcbiAgICAgIHNob3dVbmRvQnRuOiB0cnVlLFxuICAgICAgZWRpdHRpbmc6IHRydWVcbiAgICB9KVxuICB9LFxuXG4gIGNhbmNlbEVkaXROb3RlcygpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgc2hvd0FkZEJ0bjogdHJ1ZSxcbiAgICAgIHNob3dEZWxldGVCdG46IGZhbHNlLFxuICAgICAgc2hvd1VuZG9CdG46IGZhbHNlLFxuICAgICAgZWRpdHRpbmc6IGZhbHNlXG4gICAgfSlcbiAgfSxcblxuICBkZWxldGVOb3RlcygpIHtcbiAgICB0aGlzLmNhbmNlbEVkaXROb3RlcygpO1xuICAgIG5vdGVTZXJ2aWNlLmRlbGV0ZU5vdGVzKHRoaXMuZGF0YS5zZWxlY3RlZE5vdGVJZHMpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5mZXRjaEFuZFNldE5vdGVzKCk7XG4gICAgfSlcbiAgfSxcblxuICBzZWxlY3RlZE5vdGVzQ2hhbmdlKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7IHNlbGVjdGVkTm90ZUlkczogZS5kZXRhaWwuc2VsZWN0ZWROb3RlSWRzIH0pO1xuICB9LFxuXG4gIGZldGNoQW5kU2V0Tm90ZXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG5vdGVTZXJ2aWNlLmZldGNoTm90ZXMoKS50aGVuKCh7IG5vdGVzIH06IHsgbm90ZXM6IE5vdGVbXSB9KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IG5vdGVzOiBub3RlcyB9KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSkuY2F0Y2gocmVqZWN0KVxuICAgIH0pO1xuICB9XG59KVxuIl19