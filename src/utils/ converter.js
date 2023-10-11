
export const name = ( name ) => { 
    if(name){
        return name[0].toUpperCase() + name.substring(1);
    }
};

export const price = (price) =>{
    if(price){
        var result = price?.toLocaleString({
            style: "currency",
            currency: "CLP"
        });

        return result.replaceAll(',', '.');  
    }
};