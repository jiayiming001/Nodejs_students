// using listeners (javascript + jQuery 1.8.3)
var eventable = {
    on: function(event, cb) {
        $(this).on(event, cb);
    },
    trigger: function (event, args) {
        $(this).trigger(event, args);
    }
}
    
var finder = {
    run: function (records) {
            var self = this;
        setTimeout(function () {
            records.push(3, 4);
           self.trigger('done', [records]);            
        }, 500);
    }
}
var processor = {
    run: function (records) {
         var self = this;
        setTimeout(function () {
            records.push(5, 6);
            self.trigger('done', [records]);            
        }, 500);
    }
 }
 $.extend(finder, eventable);   //Object.assign(target, [obj1,[obj2]])代替
 $.extend(processor, eventable);
    
finder.on('done', function (event, records) {
          processor.run(records);  
    });
processor.on('done', function (event, records) {
    alert(records);
});
finder.run([1,2]);
