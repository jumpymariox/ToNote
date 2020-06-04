"use strict";
Component({
    properties: {
        defaultValue: {
            type: String, observer: function (newValue) {
                this.setDefaultValue(newValue);
            }
        }
    },
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
            var _this = this;
            this.createSelectorQuery().select('#editor').context(function (res) {
                _this.setData({ editorCtx: res.context });
                _this.setDefaultValue(_this.properties.defaultValue);
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
        },
        setDefaultValue: function (value) {
            if (!this.data.editorCtx) {
                return;
            }
            this.data.editorCtx.setContents({ html: value });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZS1lZGl0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RlLWVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBNkJBLFNBQVMsQ0FBNEI7SUFJbkMsVUFBVSxFQUFFO1FBQ1YsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLFlBQUMsUUFBZ0I7Z0JBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakMsQ0FBQztTQUNGO0tBQ0Y7SUFLRCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsS0FBSztRQUNmLFdBQVcsRUFBRSxNQUFNO1FBQ25CLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBRUQsU0FBUyxFQUFFO1FBQ1QsUUFBUTtZQUNOLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQTtZQUNoRCxJQUFNLEtBQUssR0FBRyxRQUFRLEtBQUssS0FBSyxDQUFBO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUE7WUFDdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUE7WUFDdEIsRUFBRSxDQUFDLHNCQUFzQixDQUFDLFVBQUMsR0FBUTtnQkFDakMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLGNBQWM7b0JBQUUsT0FBTTtnQkFDekMsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3pELGNBQWMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO2dCQUMzQixVQUFVLENBQUM7b0JB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QUN4QixPQUFNO2FBQ1A7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL25vdGUtZWRpdG9yL25vdGUtZWRpdG9yLmpzXG5cbnR5cGUgSVByb3BlcnR5ID0ge1xuICBkZWZhdWx0VmFsdWU6IFdlY2hhdE1pbmlwcm9ncmFtLkNvbXBvbmVudC5BbGxQcm9wZXJ0eVxufVxudHlwZSBJRGF0YSA9IHtcbiAgZWRpdG9yQ3R4PzogYW55LFxuICBwbGFjZWhvbGRlcj86IHN0cmluZyxcbiAgcmVhZE9ubHk6IGJvb2xlYW4sXG4gIHVzaW5nS2V5Ym9hcmQ6IGJvb2xlYW4sXG4gIGZvY3VzaW5nOiBib29sZWFuXG59XG50eXBlIElDdXN0b20gPSB7XG4gIHJlYWRPbmx5Q2hhbmdlOiAoKSA9PiB2b2lkLFxuICBjYWxOYXZpZ2F0aW9uQmFyQW5kU3RhdHVzQmFyOiAoKSA9PiB2b2lkLFxuICBvbkVkaXRvclJlYWR5OiAoKSA9PiB2b2lkLFxuICBmb2N1czogKCkgPT4gdm9pZCxcbiAgYmx1cjogKCkgPT4gdm9pZCxcbiAgb25TdGF0dXNDaGFuZ2U6IChlOiBhbnkpID0+IHZvaWQsXG4gIGZvcm1hdDogKGU6IGFueSkgPT4gdm9pZCxcbiAgaW5zZXJ0RGl2aWRlcjogKCkgPT4gdm9pZCxcbiAgY2xlYXI6ICgpID0+IHZvaWQsXG4gIHJlbW92ZUZvcm1hdDogKCkgPT4gdm9pZCxcbiAgaW5zZXJ0RGF0ZTogKCkgPT4gdm9pZCxcbiAgaW5zZXJ0SW1hZ2U6ICgpID0+IHZvaWQsXG4gIHRvZ2dsZVNob3dUb29sdGlwOiAoa2V5Ym9hcmRIZWlnaHQ6IG51bWJlcikgPT4gdm9pZFxuICBzZXREZWZhdWx0VmFsdWU6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG59XG5cbkNvbXBvbmVudDxJRGF0YSwgSVByb3BlcnR5LCBJQ3VzdG9tPih7XG4gIC8qKlxuICAgKiBDb21wb25lbnQgcHJvcGVydGllc1xuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIGRlZmF1bHRWYWx1ZToge1xuICAgICAgdHlwZTogU3RyaW5nLCBvYnNlcnZlcihuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXBvbmVudCBpbml0aWFsIGRhdGFcbiAgICovXG4gIGRhdGE6IHtcbiAgICByZWFkT25seTogZmFsc2UsXG4gICAgcGxhY2Vob2xkZXI6IFwi5byA5aeL56yU6K6wXCIsXG4gICAgdXNpbmdLZXlib2FyZDogZmFsc2UsXG4gICAgZm9jdXNpbmc6IGZhbHNlXG4gIH0sXG5cbiAgbGlmZXRpbWVzOiB7XG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICBjb25zdCBwbGF0Zm9ybSA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm1cbiAgICAgIGNvbnN0IGlzSU9TID0gcGxhdGZvcm0gPT09ICdpb3MnXG4gICAgICB0aGlzLnNldERhdGEoeyBpc0lPUyB9KVxuICAgICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICAgIHRoaXMudG9nZ2xlU2hvd1Rvb2x0aXAoMCk7XG4gICAgICBsZXQga2V5Ym9hcmRIZWlnaHQgPSAwXG4gICAgICB3eC5vbktleWJvYXJkSGVpZ2h0Q2hhbmdlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzLmhlaWdodCA9PT0ga2V5Ym9hcmRIZWlnaHQpIHJldHVyblxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHJlcy5oZWlnaHQgPiAwID8gcmVzLmR1cmF0aW9uICogMTAwMCA6IDBcbiAgICAgICAga2V5Ym9hcmRIZWlnaHQgPSByZXMuaGVpZ2h0XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHd4LnBhZ2VTY3JvbGxUbyh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgICAgICB0aGF0LnRvZ2dsZVNob3dUb29sdGlwKGtleWJvYXJkSGVpZ2h0KTtcbiAgICAgICAgICAgICAgdGhhdC5kYXRhLmVkaXRvckN0eC5zY3JvbGxJbnRvVmlldygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgZHVyYXRpb24pXG5cbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wb25lbnQgbWV0aG9kc1xuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIHJlYWRPbmx5Q2hhbmdlKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgcmVhZE9ubHk6ICF0aGlzLmRhdGEucmVhZE9ubHlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjYWxOYXZpZ2F0aW9uQmFyQW5kU3RhdHVzQmFyKCkge1xuICAgICAgY29uc3Qgc3lzdGVtSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKClcbiAgICAgIGNvbnN0IHsgc3RhdHVzQmFySGVpZ2h0LCBwbGF0Zm9ybSB9ID0gc3lzdGVtSW5mb1xuICAgICAgY29uc3QgaXNJT1MgPSBwbGF0Zm9ybSA9PT0gJ2lvcydcbiAgICAgIGNvbnN0IG5hdmlnYXRpb25CYXJIZWlnaHQgPSBpc0lPUyA/IDQ0IDogNDhcbiAgICAgIHJldHVybiBzdGF0dXNCYXJIZWlnaHQgKyBuYXZpZ2F0aW9uQmFySGVpZ2h0XG4gICAgfSxcbiAgICBvbkVkaXRvclJlYWR5KCkge1xuICAgICAgdGhpcy5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuc2VsZWN0KCcjZWRpdG9yJykuY29udGV4dCgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgZWRpdG9yQ3R4OiByZXMuY29udGV4dCB9KTtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWUodGhpcy5wcm9wZXJ0aWVzLmRlZmF1bHRWYWx1ZSk7XG4gICAgICB9KS5leGVjKClcbiAgICB9LFxuICAgIGZvY3VzKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHsgZm9jdXNpbmc6IHRydWUgfSlcbiAgICB9LFxuICAgIGJsdXIoKSB7XG4gICAgICB0aGlzLnNldERhdGEoeyBmb2N1c2luZzogZmFsc2UgfSlcbiAgICB9LFxuICAgIGZvcm1hdChlOiBhbnkpIHtcbiAgICAgIGxldCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldC5kYXRhc2V0XG4gICAgICBpZiAoIW5hbWUpIHJldHVyblxuICAgICAgdGhpcy5kYXRhLmVkaXRvckN0eC5mb3JtYXQobmFtZSwgdmFsdWUpXG5cbiAgICB9LFxuICAgIG9uU3RhdHVzQ2hhbmdlKGU6IGFueSkge1xuICAgICAgY29uc3QgZm9ybWF0cyA9IGUuZGV0YWlsXG4gICAgICB0aGlzLnNldERhdGEoeyBmb3JtYXRzIH0pXG4gICAgfSxcbiAgICBpbnNlcnREaXZpZGVyKCkge1xuICAgICAgdGhpcy5kYXRhLmVkaXRvckN0eC5pbnNlcnREaXZpZGVyKHtcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnNlcnQgZGl2aWRlciBzdWNjZXNzJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGNsZWFyKCkge1xuICAgICAgdGhpcy5kYXRhLmVkaXRvckN0eC5jbGVhcih7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyIHN1Y2Nlc3NcIilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHJlbW92ZUZvcm1hdCgpIHtcbiAgICAgIHRoaXMuZGF0YS5lZGl0b3JDdHgucmVtb3ZlRm9ybWF0KClcbiAgICB9LFxuICAgIGluc2VydERhdGUoKSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0vJHtkYXRlLmdldE1vbnRoKCkgKyAxfS8ke2RhdGUuZ2V0RGF0ZSgpfWBcbiAgICAgIHRoaXMuZGF0YS5lZGl0b3JDdHguaW5zZXJ0VGV4dCh7XG4gICAgICAgIHRleHQ6IGZvcm1hdERhdGVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBpbnNlcnRJbWFnZSgpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzOiBhbnkpIHtcbiAgICAgICAgICB0aGF0LmRhdGEuZWRpdG9yQ3R4Lmluc2VydEltYWdlKHtcbiAgICAgICAgICAgIHNyYzogcmVzLnRlbXBGaWxlUGF0aHNbMF0sXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGlkOiAnYWJjZCcsXG4gICAgICAgICAgICAgIHJvbGU6ICdnb2QnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2lkdGg6ICc4MCUnLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5zZXJ0IGltYWdlIHN1Y2Nlc3MnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB0b2dnbGVTaG93VG9vbHRpcChrZXlib2FyZEhlaWdodDogbnVtYmVyKSB7XG4gICAgICBpZiAoIXRoaXMuZGF0YS5mb2N1c2luZykge1xuICAgICAgICB0aGlzLnNldERhdGEoeyB1c2luZ0tleWJvYXJkOiBmYWxzZSB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0RGF0YSh7IHVzaW5nS2V5Ym9hcmQ6IGtleWJvYXJkSGVpZ2h0ID4gMCB9KVxuICAgIH0sXG4gICAgc2V0RGVmYXVsdFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIGlmICghdGhpcy5kYXRhLmVkaXRvckN0eCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YS5lZGl0b3JDdHguc2V0Q29udGVudHMoeyBodG1sOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cbn0pXG4iXX0=