import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHelper {
  static getMessage(error: HttpErrorResponse): string {
    if (error.status === 401) {
      return 'Bu işlem için yetkiniz yok.';
    }

    // Bad Request
    if(error.error.message!==undefined){
      return error.error.message;
    }
    
    // Validation Hata Yakalama
    if (error.error.ValidationErrors != null) {
      let validationErrors = error.error.ValidationErrors;
      let errorMessages: string = '';
      for (let i = 0; i < validationErrors.length; i++) {
        const error = validationErrors[i];
        errorMessages += error.ErrorMessage;
      }
      return errorMessages;
    } else {
      return error.error.Message;
    }
  }
}