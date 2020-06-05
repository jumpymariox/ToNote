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
            this.setData({ isCreate: false });
            note_service_1.noteService.fetchNote(options.id).then(function (_a) {
                var note = _a.note;
                _this.setData({ id: note.id, note: note });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDJEQUF5RDtBQVN6RCxJQUFJLENBQWlCO0lBSW5CLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxLQUFLO1FBQ2YsV0FBVyxFQUFFLElBQUk7S0FDbEI7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFPO1FBQWpCLGlCQVlQO1FBWEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU07U0FDUDtRQUNELElBQUksT0FBTyxPQUFPLENBQUMsRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDakMsMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQXdCO29CQUF0QixjQUFJO2dCQUM1QyxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7WUFDM0MsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1NBQ2pDO0lBQ0gsQ0FBQztJQUlELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztJQUVLLFFBQVEsWUFBQyxDQUFNOzs7Ozs7d0JBRWYsT0FBTyxHQUFHLEVBQUUsQ0FBQzt3QkFDYixJQUFJLEdBQUcsRUFBRSxDQUFDO3dCQUNkLFdBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxhQUFrQjtnQ0FDOUUsT0FBTyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0NBQzdCLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDOzRCQUM1QixDQUFDLENBQUMsRUFBQTs7d0JBSEYsU0FHRSxDQUFDO3dCQUNHLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7d0JBRW5DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7NEJBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUM7eUJBQzNDOzZCQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFOzRCQUNyQixXQUFXLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUM7NEJBQ3BFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7eUJBQzlCOzs7OztLQUNGO0lBRUQsVUFBVSxZQUFDLEVBQTBFO1lBQXhFLGdCQUFLLEVBQUUsb0JBQU8sRUFBRSxjQUFJO1FBQy9CLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDdEIsT0FBTTtTQUNQO1FBQ0QsMEJBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BELEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxVQUFVLFlBQUMsSUFBVTtRQUNYLElBQUEsa0JBQUssRUFBRSxzQkFBTyxDQUFVO1FBQ2hDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDdEIsT0FBTTtTQUNQO1FBQ0QsMEJBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaW5pcHJvZ3JhbS9wYWdlcy9ub3RlL25vdGUuanNcblxuaW1wb3J0IHsgbm90ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9ub3RlLnNlcnZpY2VcIjtcblxudHlwZSBJRGF0YSA9IHsgaWQ/OiBzdHJpbmcsIG5vdGU/OiBOb3RlLCBpc0NyZWF0ZTogYm9vbGVhbiwgc2hvd1NhdmVCdG46IGJvb2xlYW4gfVxudHlwZSBJQ3VzdG9tID0ge1xuICBzYXZlTm90ZTogKGU6IGFueSkgPT4gdm9pZCxcbiAgY3JlYXRlTm90ZTogKG5vdGU6IHsgdGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfSkgPT4gdm9pZCxcbiAgdXBkYXRlTm90ZTogKG5vdGU6IE5vdGUpID0+IHZvaWRcbn1cblxuUGFnZTxJRGF0YSwgSUN1c3RvbT4oe1xuICAvKipcbiAgICogUGFnZSBpbml0aWFsIGRhdGFcbiAgICovXG4gIGRhdGE6IHtcbiAgICBpc0NyZWF0ZTogZmFsc2UsXG4gICAgc2hvd1NhdmVCdG46IHRydWVcbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGxvYWRcbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuaWQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGlzQ3JlYXRlOiBmYWxzZSB9KVxuICAgICAgbm90ZVNlcnZpY2UuZmV0Y2hOb3RlKG9wdGlvbnMuaWQpLnRoZW4oKHsgbm90ZSB9OiB7IG5vdGU6IE5vdGUgfSkgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoeyBpZDogbm90ZS5pZCwgbm90ZTogbm90ZSB9KVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGlzQ3JlYXRlOiB0cnVlIH0pXG4gICAgfVxuICB9LFxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIGlzIGluaXRpYWxseSByZW5kZXJlZFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIExpZmVjeWNsZSBmdW5jdGlvbi0tQ2FsbGVkIHdoZW4gcGFnZSBzaG93XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiBMaWZlY3ljbGUgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHBhZ2UgaGlkZVxuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uLS1DYWxsZWQgd2hlbiBwYWdlIHVubG9hZFxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiBQYWdlIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb24tLUNhbGxlZCB3aGVuIHVzZXIgZHJvcCBkb3duXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHBhZ2UgcmVhY2ggYm90dG9tXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICBhc3luYyBzYXZlTm90ZShlOiBhbnkpIHtcblxuICAgIGxldCBjb250ZW50ID0gJyc7XG4gICAgbGV0IHRleHQgPSAnJztcbiAgICBhd2FpdCB0aGlzLnNlbGVjdENvbXBvbmVudChcIiNub3RlRWRpdG9yXCIpLmdldENvbnRlbnRzKCkudGhlbigoZWRpdG9yQ29udGVudDogYW55KSA9PiB7XG4gICAgICBjb250ZW50ID0gZWRpdG9yQ29udGVudC5odG1sO1xuICAgICAgdGV4dCA9IGVkaXRvckNvbnRlbnQudGV4dDtcbiAgICB9KTtcbiAgICBjb25zdCB0aXRsZSA9IGUuZGV0YWlsLnZhbHVlLnRpdGxlO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5pc0NyZWF0ZSkge1xuICAgICAgdGhpcy5jcmVhdGVOb3RlKHsgdGl0bGUsIGNvbnRlbnQsIHRleHQgfSk7XG4gICAgfSBlbHNlIGlmICghIXRoaXMuZGF0YS5ub3RlKSB7XG4gICAgICBjb25zdCB1cGRhdGVkTm90ZSA9IHsgaWQ6IHRoaXMuZGF0YS5ub3RlLmlkLCBjb250ZW50LCB0aXRsZSwgdGV4dCB9O1xuICAgICAgdGhpcy51cGRhdGVOb3RlKHVwZGF0ZWROb3RlKTtcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlTm90ZSh7IHRpdGxlLCBjb250ZW50LCB0ZXh0IH06IHsgdGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfSkge1xuICAgIGlmICghY29udGVudCAmJiAhdGl0bGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBub3RlU2VydmljZS5jcmVhdGVOb3RlKHsgdGl0bGUsIGNvbnRlbnQsIHRleHQgfSkudGhlbigoKSA9PiB7XG4gICAgICB3eC5uYXZpZ2F0ZUJhY2soKVxuICAgIH0pXG4gIH0sXG5cbiAgdXBkYXRlTm90ZShub3RlOiBOb3RlKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgY29udGVudCB9ID0gbm90ZTtcbiAgICBpZiAoIWNvbnRlbnQgJiYgIXRpdGxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbm90ZVNlcnZpY2UudXBkYXRlTm90ZShub3RlKS50aGVuKCgpID0+IHtcbiAgICAgIHd4Lm5hdmlnYXRlQmFjaygpXG4gICAgfSlcbiAgfVxufSkiXX0=