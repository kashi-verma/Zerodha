class ApiError extends Error {
    constructor(statuscode,
        meaasage="something went wrong",
        error = [],
        stack = ""
    ){
        super(meaasage);
        this.statuscode = statuscode;
        this.errors = this.errors;
       this.success = false;
        this.data = null;
        this.message = meaasage;
        
        if (stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {ApiError} 