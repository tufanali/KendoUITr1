(function (global) {
    var UserListViewModel,
        app = global.app = global.app || {};

    UserListViewModel = kendo.data.ObservableObject.extend({
        userListDataSource: null,

        init: function () {
            var that = this,
                dataSource;

            kendo.data.ObservableObject.fn.init.apply(that, []);

            dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/userList.json",
                        dataType: "json"
                    }
                }
            });

            that.set("userListDataSource", dataSource);
        }
    });

    app.userListService = {
        viewModel: new UserListViewModel()
    };
})(window);