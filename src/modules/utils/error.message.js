

 export const handelMessage = (lang , fialdAr="الحقل" ,faildEn="field", max =5000 , min= 4)=>{

const messages= {
en:{
    "any.required": `${fieldEn} field is required`,
    "string.empty": `${fieldEn} can not be empty`,
    "string.pattern.base": `${fieldEn} Invalid format`,
    "string.min": `${fieldEn} Must be at least ${min} characters`,
    "string.max": `${fieldEn} Must be at least ${max} characters`,
    "string.mismatch": `Password and Confirm Password do not match`,
    "date.base": "Invalid date format",
    "number.base": `${fieldEn} Must be a number`,
    "number.valid": "Invalid value",
    "number.positive": `${fieldEn} must be a positive number`,
    "object.base": `${fieldEn} Must be an object`,
    "array.base": `${fieldEn} Must be an array`,
    "array.max": `${fieldEn} Must contain at most ${max} items`,
},
ar:{
    "any.required": `${fialdAr} مطلوب`,
    "string.empty": `لا يمكن أن يكون ${fieldAr} فارغًا`,
    "string.pattern.base": `تنسيق ${fieldAr} غير صالح`,
    "string.min": `يجب أن يكون ${fieldAr} على الأقل ${min} حروف`,
    "string.max": `يجب أن يكون على الأكثر ${max} حروف`,
    "string.mismatch": `كلمة السر وتأكيد كلمة السر غير متطابقتين`,
    "date.base": `تنسيق التاريخ غير صالح`,
    "number.base": `${fieldAr} يجب أن يكون رقما`,
    "number.valid": `قيمة ال ${fieldAr} غير صالحة`,
    "number.positive": `${fieldAr} يجب أن يكون رقمًا موجبًا`,
    "number.max": `${fieldAr} كحد أقصي ${max}`,
    "number.min": `${fieldAr} كحد أدني ${min}`,
    "object.base": "يجب أن يكون كائنًا",
    "array.base": "يجب أن يكون مصفوفة",
    "array.max": `${fieldAr} يجب ان تحتوي علي  ${max} عناصر حد اقصي`,

},


 }
return messages [lang] || messages.en
 
}