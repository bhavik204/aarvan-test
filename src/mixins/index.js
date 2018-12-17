export default {
    methods: {
        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        showmodal(mbody, duration) {
            let modals = weex.requireModule('modal')
            modals.toast({
                message: mbody,
                duration: duration
            });
        },
        GET(api, callback) {
            axios({
                method: 'get',
                type: 'json',
                url: 'http://159.89.161.64:5010/secure/user/' + api,
                responseType: 'stream'
            }, callback)
        },

        // Mixin filter

        doSentenceCase(strText) {
            var _str = strText.toLowerCase();
            var collection = _str.split(" ");
            var modifyStrigs = [];
            _str = '';
            for (var i = 0; i < collection.length; i++) {
                modifyStrigs[i] = collection[i].charAt(0).toUpperCase() + collection[i].slice(1);
                _str = _str + modifyStrigs[i] + ' ';

            }
            return _str.trim();
        }
    },


}