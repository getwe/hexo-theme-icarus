
hexo.extend.helper.register('search_form_baidu', function(options){
  options = options || {};

  var config = this.config;
  var className = options.class || 'search-form';
  var text = options.hasOwnProperty('text') ? options.text : '百度一下,你就知道';
  var button = options.button;

  return '<form action="//www.baidu.com/s" method="get" accept-charset="UTF-8" class="' + className + '">' +
    '<input type="search" name="wd" results="0" class="' + className + '-input"' + (text ? ' placeholder="' + text + '"' : '') + '>' +
    (button ? '<button type="submit" class="' + className + '-submit">' + (typeof button === 'string' ? button : text) + '</button>' : '') +
    //'<input type="hidden" name="wd" value="' + config.url + '">' +
    '</form>';
});
