// Define the schema
pdf = new SimpleSchema({
    title: {
        type: String,
        label: "اسم الملف",
        max: 200
    },
    author: {
        type: String,
        label: "اسم الكاتب"
    },
    lastCheckedOut: {
        type: Date,
        label: "آخر تعديل",
        optional: true
    },
    summary: {
        type: String,
        label: "حول الدرس",
        optional: true,
        max: 1000
    },
    views:{
        type:Number,
        label:"عدد المشاهدات",
        optional:true
    },
    link:{
        type:String,
        label:"رابط الدرس",
<<<<<<< oula
        
       },

     typeTest: {
       	type: String,
       	optional:true,
       	autoform: {
       		afFieldInput: {
       		type: "url"
       	}
       } 
       }

=======
<<<<<<< HEAD
        autoform:
         {
            afFieldInput:
                  { 
                 type:"url"
                    }        
       }
}
=======
        
       },

     typeTest: {
       	type: String,
       	optional:true,
       	autoform: {
       		afFieldInput: {
       		type: "url"
       	}
       } 
       }

>>>>>>> oula
>>>>>>> local
});


Pdfs = new Mongo.Collection("pdfs");
Pdfs.attachSchema(pdf);
Pdfs.allow
<<<<<<< oula
=======

({
	insert: function (doc)
{
	return true;
}
});

>>>>>>> local

({
	insert: function (doc)
{
	return true;
}
});







