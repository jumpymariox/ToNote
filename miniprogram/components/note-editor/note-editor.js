"use strict";
Component({
    properties: {},
    data: {
        readOnly: false,
        placeholder: "开始笔记",
        usingKeyboard: false,
        focusing: false
    },
    lifetimes: {
        attached: function () {
            var platform = wx.getSystemInfoSync().platform;
            var isIOS = platform === 'ios';
            this.setData({ isIOS: isIOS });
            var that = this;
            this.toggleShowTooltip(0);
            var keyboardHeight = 0;
            wx.onKeyboardHeightChange(function (res) {
                if (res.height === keyboardHeight)
                    return;
                var duration = res.height > 0 ? res.duration * 1000 : 0;
                keyboardHeight = res.height;
                setTimeout(function () {
                    wx.pageScrollTo({
                        scrollTop: 0,
                        success: function () {
                            that.toggleShowTooltip(keyboardHeight);
                            that.data.editorCtx.scrollIntoView();
                        }
                    });
                }, duration);
            });
        }
    },
    methods: {
        readOnlyChange: function () {
            this.setData({
                readOnly: !this.data.readOnly
            });
        },
        calNavigationBarAndStatusBar: function () {
            var systemInfo = wx.getSystemInfoSync();
            var statusBarHeight = systemInfo.statusBarHeight, platform = systemInfo.platform;
            var isIOS = platform === 'ios';
            var navigationBarHeight = isIOS ? 44 : 48;
            return statusBarHeight + navigationBarHeight;
        },
        onEditorReady: function () {
            var that = this;
            that.createSelectorQuery().select('#editor').context(function (res) {
                that.setData({ editorCtx: res.context });
            }).exec();
        },
        focus: function () {
            this.setData({ focusing: true });
        },
        blur: function () {
            this.setData({ focusing: false });
        },
        format: function (e) {
            var _a = e.target.dataset, name = _a.name, value = _a.value;
            if (!name)
                return;
            this.data.editorCtx.format(name, value);
        },
        onStatusChange: function (e) {
            var formats = e.detail;
            this.setData({ formats: formats });
        },
        insertDivider: function () {
            this.data.editorCtx.insertDivider({
                success: function () {
                    console.log('insert divider success');
                }
            });
        },
        clear: function () {
            this.data.editorCtx.clear({
                success: function () {
                    console.log("clear success");
                }
            });
        },
        removeFormat: function () {
            this.data.editorCtx.removeFormat();
        },
        insertDate: function () {
            var date = new Date();
            var formatDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
            this.data.editorCtx.insertText({
                text: formatDate
            });
        },
        insertImage: function () {
            var that = this;
            wx.chooseImage({
                count: 1,
                success: function (res) {
                    that.data.editorCtx.insertImage({
                        src: res.tempFilePaths[0],
                        data: {
                            id: 'abcd',
                            role: 'god'
                        },
                        width: '80%',
                        success: function () {
                            console.log('insert image success');
                        }
                    });
                }
            });
        },
        toggleShowTooltip: function (keyboardHeight) {
            if (!this.data.focusing) {
                this.setData({ usingKeyboard: false });
                return;
            }
            this.setData({ usingKeyboard: keyboardHeight > 0 });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RlLWVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBMEJBLFNBQVMsQ0FBNEI7SUFJbkMsVUFBVSxFQUFFLEVBRVg7SUFLRCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsS0FBSztRQUNmLFdBQVcsRUFBRSxNQUFNO1FBQ25CLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBRUQsU0FBUyxFQUFFO1FBQ1QsUUFBUTtZQUNOLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQTtZQUNoRCxJQUFNLEtBQUssR0FBRyxRQUFRLEtBQUssS0FBSyxDQUFBO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUE7WUFDdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUE7WUFDdEIsRUFBRSxDQUFDLHNCQUFzQixDQUFDLFVBQUMsR0FBUTtnQkFDakMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLGNBQWM7b0JBQUUsT0FBTTtnQkFDekMsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3pELGNBQWMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO2dCQUMzQixVQUFVLENBQUM7b0JBQ1QsRUFBRSxDQUFDLFlBQVksQ0FBQzt3QkFDZCxTQUFTLEVBQUUsQ0FBQzt3QkFDWixPQUFPOzRCQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQzs0QkFDdkMsSUFBSSxDQUFD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VUFBVTthQUNqQixDQUFDLENBQUE7UUFDSixDQUFDO1FBQ0QsV0FBVztZQUNULElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtZQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLEtBQUssRUFBRSxDQUFDO2dCQUNSLE9BQU8sRUFBRSxVQUFVLEdBQVE7b0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQzt3QkFDOUIsR0FBRyxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixJQUFJLEVBQUU7NEJBQ0osRUFBRSxFQUFFLE1BQU07NEJBQ1YsSUFBSSxFQUFFLEtBQUs7eUJBQ1o7d0JBQ0QsS0FBSyxFQUFFLEtBQUs7d0JBQ1osT0FBTyxFQUFFOzRCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTt3QkFDckMsQ0FBQztxQkFDRixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxpQkFBaUIsWUFBQyxjQUFzQjtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtnQkFDdEMsT0FBTTthQUNQO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLGFBQWEsRUFBRSxjQUFjLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNyRCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL25vdGUtZWRpdG9yL25vdGUtZWRpdG9yLmpzXG5cbnR5cGUgSVByb3BlcnR5ID0ge31cbnR5cGUgSURhdGEgPSB7XG4gIGVkaXRvckN0eD86IGFueSxcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXG4gIHJlYWRPbmx5OiBib29sZWFuLFxuICB1c2luZ0tleWJvYXJkOiBib29sZWFuLFxuICBmb2N1c2luZzogYm9vbGVhblxufVxudHlwZSBJQ3VzdG9tID0ge1xuICByZWFkT25seUNoYW5nZTogKCkgPT4gdm9pZCxcbiAgY2FsTmF2aWdhdGlvbkJhckFuZFN0YXR1c0JhcjogKCkgPT4gdm9pZCxcbiAgb25FZGl0b3JSZWFkeTogKCkgPT4gdm9pZCxcbiAgZm9jdXM6ICgpID0+IHZvaWQsXG4gIGJsdXI6ICgpID0+IHZvaWQsXG4gIG9uU3RhdHVzQ2hhbmdlOiAoZTogYW55KSA9PiB2b2lkLFxuICBmb3JtYXQ6IChlOiBhbnkpID0+IHZvaWQsXG4gIGluc2VydERpdmlkZXI6ICgpID0+IHZvaWQsXG4gIGNsZWFyOiAoKSA9PiB2b2lkLFxuICByZW1vdmVGb3JtYXQ6ICgpID0+IHZvaWQsXG4gIGluc2VydERhdGU6ICgpID0+IHZvaWQsXG4gIGluc2VydEltYWdlOiAoKSA9PiB2b2lkLFxuICB0b2dnbGVTaG93VG9vbHRpcDogKGtleWJvYXJkSGVpZ2h0OiBudW1iZXIpID0+IHZvaWRcbn1cblxuQ29tcG9uZW50PElEYXRhLCBJUHJvcGVydHksIElDdXN0b20+KHtcbiAgLyoqXG4gICAqIENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG5cbiAgfSxcblxuICAvKipcbiAgICogQ29tcG9uZW50IGluaXRpYWwgZGF0YVxuICAgKi9cbiAgZGF0YToge1xuICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICBwbGFjZWhvbGRlcjogXCLlvIDlp4vnrJTorrBcIixcbiAgICB1c2luZ0tleWJvYXJkOiBmYWxzZSxcbiAgICBmb2N1c2luZzogZmFsc2VcbiAgfSxcblxuICBsaWZldGltZXM6IHtcbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgIGNvbnN0IHBsYXRmb3JtID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybVxuICAgICAgY29uc3QgaXNJT1MgPSBwbGF0Zm9ybSA9PT0gJ2lvcydcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGlzSU9TIH0pXG4gICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgdGhpcy50b2dnbGVTaG93VG9vbHRpcCgwKTtcbiAgICAgIGxldCBrZXlib2FyZEhlaWdodCA9IDBcbiAgICAgIHd4Lm9uS2V5Ym9hcmRIZWlnaHRDaGFuZ2UoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXMuaGVpZ2h0ID09PSBrZXlib2FyZEhlaWdodCkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gcmVzLmhlaWdodCA+IDAgPyByZXMuZHVyYXRpb24gKiAxMDAwIDogMFxuICAgICAgICBrZXlib2FyZEhlaWdodCA9IHJlcy5oZWlnaHRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd3gucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICAgIHRoYXQudG9nZ2xlU2hvd1Rvb2x0aXAoa2V5Ym9hcmRIZWlnaHQpO1xuICAgICAgICAgICAgICB0aGF0LmRhdGEuZWRpdG9yQ3R4LnNjcm9sbEludG9WaWV3KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9LCBkdXJhdGlvbilcblxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBtZXRob2RzXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgcmVhZE9ubHlDaGFuZ2UoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICByZWFkT25seTogIXRoaXMuZGF0YS5yZWFkT25seVxuICAgICAgfSlcbiAgICB9LFxuICAgIGNhbE5hdmlnYXRpb25CYXJBbmRTdGF0dXNCYXIoKSB7XG4gICAgICBjb25zdCBzeXN0ZW1JbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKVxuICAgICAgY29uc3QgeyBzdGF0dXNCYXJIZWlnaHQsIHBsYXRmb3JtIH0gPSBzeXN0ZW1JbmZvXG4gICAgICBjb25zdCBpc0lPUyA9IHBsYXRmb3JtID09PSAnaW9zJ1xuICAgICAgY29uc3QgbmF2aWdhdGlvbkJhckhlaWdodCA9IGlzSU9TID8gNDQgOiA0OFxuICAgICAgcmV0dXJuIHN0YXR1c0JhckhlaWdodCArIG5hdmlnYXRpb25CYXJIZWlnaHRcbiAgICB9LFxuICAgIG9uRWRpdG9yUmVhZHkoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgdGhhdC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuc2VsZWN0KCcjZWRpdG9yJykuY29udGV4dChmdW5jdGlvbiAocmVzOiBhbnkpIHtcbiAgICAgICAgdGhhdC5zZXREYXRhKHsgZWRpdG9yQ3R4OiByZXMuY29udGV4dCB9KTtcbiAgICAgIH0pLmV4ZWMoKVxuICAgIH0sXG4gICAgZm9jdXMoKSB7XG4gICAgICB0aGlzLnNldERhdGEoeyBmb2N1c2luZzogdHJ1ZSB9KVxuICAgIH0sXG4gICAgYmx1cigpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGZvY3VzaW5nOiBmYWxzZSB9KVxuICAgIH0sXG4gICAgZm9ybWF0KGU6IGFueSkge1xuICAgICAgbGV0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0LmRhdGFzZXRcbiAgICAgIGlmICghbmFtZSkgcmV0dXJuXG4gICAgICB0aGlzLmRhdGEuZWRpdG9yQ3R4LmZvcm1hdChuYW1lLCB2YWx1ZSlcblxuICAgIH0sXG4gICAgb25TdGF0dXNDaGFuZ2UoZTogYW55KSB7XG4gICAgICBjb25zdCBmb3JtYXRzID0gZS5kZXRhaWxcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGZvcm1hdHMgfSlcbiAgICB9LFxuICAgIGluc2VydERpdmlkZXIoKSB7XG4gICAgICB0aGlzLmRhdGEuZWRpdG9yQ3R4Lmluc2VydERpdmlkZXIoe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2luc2VydCBkaXZpZGVyIHN1Y2Nlc3MnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgY2xlYXIoKSB7XG4gICAgICB0aGlzLmRhdGEuZWRpdG9yQ3R4LmNsZWFyKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXIgc3VjY2Vzc1wiKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcmVtb3ZlRm9ybWF0KCkge1xuICAgICAgdGhpcy5kYXRhLmVkaXRvckN0eC5yZW1vdmVGb3JtYXQoKVxuICAgIH0sXG4gICAgaW5zZXJ0RGF0ZSgpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICBjb25zdCBmb3JtYXREYXRlID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS8ke2RhdGUuZ2V0TW9udGgoKSArIDF9LyR7ZGF0ZS5nZXREYXRlKCl9YFxuICAgICAgdGhpcy5kYXRhLmVkaXRvckN0eC5pbnNlcnRUZXh0KHtcbiAgICAgICAgdGV4dDogZm9ybWF0RGF0ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGluc2VydEltYWdlKCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXM6IGFueSkge1xuICAgICAgICAgIHRoYXQuZGF0YS5lZGl0b3JDdHguaW5zZXJ0SW1hZ2Uoe1xuICAgICAgICAgICAgc3JjOiByZXMudGVtcEZpbGVQYXRoc1swXSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgaWQ6ICdhYmNkJyxcbiAgICAgICAgICAgICAgcm9sZTogJ2dvZCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aWR0aDogJzgwJScsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnNlcnQgaW1hZ2Ugc3VjY2VzcycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHRvZ2dsZVNob3dUb29sdGlwKGtleWJvYXJkSGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgIGlmICghdGhpcy5kYXRhLmZvY3VzaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IHVzaW5nS2V5Ym9hcmQ6IGZhbHNlIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy5zZXREYXRhKHsgdXNpbmdLZXlib2FyZDoga2V5Ym9hcmRIZWlnaHQgPiAwIH0pXG4gICAgfVxuICB9XG59KVxuIl19