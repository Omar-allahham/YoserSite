Template.addpdf.events({
});
AutoForm.hooks({
     insertPdfForm :{
         onSuccess: function () {
             sAlert.success('تم الإضافة بنجاح', {
                 effect: 'genie', position: 'top-right',
                 timeout: '1000', onRouteClose: false,
                 stack: false, offset: '80px'
             });
         }
     }
 });