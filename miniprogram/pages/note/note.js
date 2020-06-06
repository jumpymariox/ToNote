"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var note_service_1 = require("../../service/note.service");
Page({
    data: {
        isCreate: false,
        showSaveBtn: true
    },
    onLoad: function (options) {
        var _this = this;
        if (!options) {
            return;
        }
        if (typeof options.id === "string") {
            wx.showLoading({ title: "加载中" });
            this.setData({ isCreate: false });
            note_service_1.noteService.fetchNote(options.id).then(function (_a) {
                var note = _a.note;
                _this.setData({ id: note.id, note: note });
                wx.hideLoading();
            }).catch(function () {
                wx.hideLoading();
            });
        }
        else {
            this.setData({ isCreate: true });
        }
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    saveNote: function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var content, text, title, updatedNote;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        content = '';
                        text = '';
                        return [4, this.selectComponent("#noteEditor").getContents().then(function (editorContent) {
                                content = editorContent.html;
                                text = editorContent.text;
                            })];
                    case 1:
                        _a.sent();
                        title = e.detail.value.title;
                        if (this.data.isCreate) {
                            this.createNote({ title: title, content: content, text: text });
                        }
                        else if (!!this.data.note) {
                            updatedNote = { id: this.data.note.id, content: content, title: title, text: text };
                            this.updateNote(updatedNote);
                        }
                        return [2];
                }
            });
        });
    },
    createNote: function (_a) {
        var title = _a.title, content = _a.content, text = _a.text;
        if (!content && !title) {
            return;
        }
        note_service_1.noteService.createNote({ title: title, content: content, text: text }).then(function () {
            wx.navigateBack();
        });
    },
    updateNote: function (note) {
        var title = note.title, content = note.content;
        if (!content && !title) {
            return;
        }
        note_service_1.noteService.updateNote(note).then(function () {
            wx.navigateBack();
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDJEQUF5RDtBQWN6RCxJQUFJLENBQWlCO0lBSW5CLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxLQUFLO1FBQ2YsV0FBVyxFQUFFLElBQUk7S0FDbEI7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFPO1FBQWpCLGlCQWdCUDtRQWZDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFNO1NBQ1A7UUFDRCxJQUFJLE9BQU8sT0FBTyxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFDbEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUNqQywwQkFBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBd0I7b0JBQXRCLGNBQUk7Z0JBQzVDLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtnQkFDekMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDUCxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1NBQ2pDO0lBQ0gsQ0FBQztJQUlELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztJQUVLLFFBQVEsWUFBQyxDQUFNOzs7Ozs7d0JBRWYsT0FBTyxHQUFHLEVBQUUsQ0FBQzt3QkFDYixJQUFJLEdBQUcsRUFBRSxDQUFDO3dCQUNkLFdBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxhQUFrQjtnQ0FDOUUsT0FBTyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0NBQzdCLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDOzRCQUM1QixDQUFDLENBQUMsRUFBQTs7d0JBSEYsU0FHRSxDQUFDO3dCQUNHLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7d0JBRW5DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7NEJBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUM7eUJBQzNDOzZCQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFOzRCQUNyQixXQUFXLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUM7NEJBQ3BFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7eUJBQzlCOzs7OztLQUNGO0lBRUQsVUFBVSxZQUFDLEVBQTBFO1lBQXhFLGdCQUFLLEVBQUUsb0JBQU8sRUFBRSxjQUFJO1FBQy9CLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDdEIsT0FBTTtTQUNQO1FBQ0QsMEJBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BELEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxVQUFVLFlBQUMsSUFBVTtRQUNYLElBQUEsa0JBQUssRUFBRSxzQkFBTyxDQUFVO1FBQ2hDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDdEIsT0FBTTtTQUNQO1FBQ0QsMEJBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaW5pcHJvZ3JhbS9wYWdlcy9ub3RlL25vdGUuanNcblxuaW1wb3J0IHsgbm90ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9ub3RlLnNlcnZpY2VcIjtcblxudHlwZSBJRGF0YSA9IHtcbiAgaWQ/OiBzdHJpbmcsXG4gIG5vdGU/OiBOb3RlLFxuICBpc0NyZWF0ZTogYm9vbGVhbixcbiAgc2hvd1NhdmVCdG46IGJvb2xlYW5cbn1cbnR5cGUgSUN1c3RvbSA9IHtcbiAgc2F2ZU5vdGU6IChlOiBhbnkpID0+IHZvaWQsXG4gIGNyZWF0ZU5vdGU6IChub3RlOiB7IHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgdGV4dDogc3RyaW5nIH0pID0+IHZvaWQsXG4gIHVwZGF0ZU5vdGU6IChub3RlOiBOb3RlKSA9PiB2b2lkXG59XG5cblBhZ2U8SURhdGEsIElDdXN0b20+KHtcbiAgLyoqXG4gICAqIFBhZ2UgaW5pdGlhbCBkYXRhXG4gICAqL1xuICBkYXRhOiB7XG4gICAgaXNDcmVhdGU6IGZhbHNlLFxuICAgIHNob3dTYXZlQnRuOiB0cnVlXG4gIH0sXG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBsb2FkXG4gICAqL1xuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmlkID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB3eC5zaG93TG9hZGluZyh7IHRpdGxlOiBcIuWKoOi9veS4rVwiIH0pXG4gICAgICB0aGlzLnNldERhdGEoeyBpc0NyZWF0ZTogZmFsc2UgfSlcbiAgICAgIG5vdGVTZXJ2aWNlLmZldGNoTm90ZShvcHRpb25zLmlkKS50aGVuKCh7IG5vdGUgfTogeyBub3RlOiBOb3RlIH0pID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgaWQ6IG5vdGUuaWQsIG5vdGU6IG5vdGUgfSlcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldERhdGEoeyBpc0NyZWF0ZTogdHJ1ZSB9KVxuICAgIH1cbiAgfSxcbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBpcyBpbml0aWFsbHkgcmVuZGVyZWRcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2Ugc2hvd1xuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGhpZGVcbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSB1bmxvYWRcbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICogUGFnZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiB1c2VyIGRyb3AgZG93blxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBwYWdlIHJlYWNoIGJvdHRvbVxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgYXN5bmMgc2F2ZU5vdGUoZTogYW55KSB7XG5cbiAgICBsZXQgY29udGVudCA9ICcnO1xuICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgYXdhaXQgdGhpcy5zZWxlY3RDb21wb25lbnQoXCIjbm90ZUVkaXRvclwiKS5nZXRDb250ZW50cygpLnRoZW4oKGVkaXRvckNvbnRlbnQ6IGFueSkgPT4ge1xuICAgICAgY29udGVudCA9IGVkaXRvckNvbnRlbnQuaHRtbDtcbiAgICAgIHRleHQgPSBlZGl0b3JDb250ZW50LnRleHQ7XG4gICAgfSk7XG4gICAgY29uc3QgdGl0bGUgPSBlLmRldGFpbC52YWx1ZS50aXRsZTtcblxuICAgIGlmICh0aGlzLmRhdGEuaXNDcmVhdGUpIHtcbiAgICAgIHRoaXMuY3JlYXRlTm90ZSh7IHRpdGxlLCBjb250ZW50LCB0ZXh0IH0pO1xuICAgIH0gZWxzZSBpZiAoISF0aGlzLmRhdGEubm90ZSkge1xuICAgICAgY29uc3QgdXBkYXRlZE5vdGUgPSB7IGlkOiB0aGlzLmRhdGEubm90ZS5pZCwgY29udGVudCwgdGl0bGUsIHRleHQgfTtcbiAgICAgIHRoaXMudXBkYXRlTm90ZSh1cGRhdGVkTm90ZSk7XG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZU5vdGUoeyB0aXRsZSwgY29udGVudCwgdGV4dCB9OiB7IHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgdGV4dDogc3RyaW5nIH0pIHtcbiAgICBpZiAoIWNvbnRlbnQgJiYgIXRpdGxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbm90ZVNlcnZpY2UuY3JlYXRlTm90ZSh7IHRpdGxlLCBjb250ZW50LCB0ZXh0IH0pLnRoZW4oKCkgPT4ge1xuICAgICAgd3gubmF2aWdhdGVCYWNrKClcbiAgICB9KVxuICB9LFxuXG4gIHVwZGF0ZU5vdGUobm90ZTogTm90ZSkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGNvbnRlbnQgfSA9IG5vdGU7XG4gICAgaWYgKCFjb250ZW50ICYmICF0aXRsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIG5vdGVTZXJ2aWNlLnVwZGF0ZU5vdGUobm90ZSkudGhlbigoKSA9PiB7XG4gICAgICB3eC5uYXZpZ2F0ZUJhY2soKVxuICAgIH0pXG4gIH1cbn0pIl19